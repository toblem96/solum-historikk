"""hent_omrade.py — henter råmaterialet for ett område fra de åpne registrene.

    python hent_omrade.py vikkilen
    python hent_omrade.py bjorvika

Alt legges under verktoy/hentet/<område>/, og filer som allerede finnes hoppes
over. Rørledningen er lik for alle områder:

  1. Vannmiljø, stasjonslaget — alle stasjoner med marint sediment i utsnittet
  2. Vannmiljø, faktaark per stasjon — én rad per måling
  3. Grunnforurensning — registrerte lokaliteter i samme utsnitt
  4. Rapportseriene i Nasjonalt vitenarkiv — hele serien paginert ned, slik at
     et rapportnummer kan slås opp direkte

  Vi søker aldri på stedsnavn. En rapport kommer bare med hvis et målepunkt
  navngir nettopp den, og oppslaget skjer på nummeret punktet oppgir.
"""

import io
import json
import math
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

import omrader

HER = os.path.dirname(os.path.abspath(__file__))
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")

RAPPORTREF = re.compile(
    r"(?:OR-|NIVA-rapport\s*|NIVA-rapport:\s*|NGI-rapport\s*|NGU\.\s*)([\w.-]{3,24})", re.I)


def hent(url, sti, pause=0.12):
    if os.path.exists(sti) and os.path.getsize(sti) > 0:
        return sti
    os.makedirs(os.path.dirname(sti), exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=180) as sv:
        data = sv.read()
    with open(sti, "wb") as f:
        f.write(data)
    time.sleep(pause)
    return sti


def konvolutt(lat, lon, km):
    dlat = km / 111.0
    dlon = km / (111.0 * math.cos(math.radians(lat)))
    return f"{lon - dlon},{lat - dlat},{lon + dlon},{lat + dlat}"


def arcgis(tjeneste, lag, felt, senter, radius, where=None):
    base = (f"https://kart3.miljodirektoratet.no/arcgis/rest/services/"
            f"{tjeneste}/MapServer/{lag}/query")
    p = {
        "geometry": konvolutt(*senter, radius),
        "geometryType": "esriGeometryEnvelope",
        "inSR": "4326",
        "spatialRel": "esriSpatialRelIntersects",
        "outFields": felt,
        "returnGeometry": "true",
        "outSR": "4326",
        "f": "json",
    }
    if where:
        p["where"] = where
    return base + "?" + urllib.parse.urlencode(p)


def rydd_nummer(n):
    """Rapportnummeret slik punktet skriver det, uten skilletegn på slutten."""
    return re.sub(r"[.,;:)\]]+$", "", n.strip())


def hent_serie(serie, mappe, side=500):
    """Hele serien paginert ned. Registeret svarer 500 på enkelte vinduer — da
    halveres sidestørrelsen for nettopp det vinduet, ned til 10 av gangen."""
    fra, totalt, nedlastet = 0, None, 0
    while True:
        valgt = None
        for stor in (side, 100, 25, 10):
            if stor > side:
                continue
            try:
                sti = hent("https://api.nva.unit.no/search/resources?"
                           + urllib.parse.urlencode({"series": serie,
                                                     "results": str(stor),
                                                     "from": str(fra)}),
                           os.path.join(mappe, f"{fra}_{stor}.json"))
            except urllib.error.HTTPError:
                continue
            valgt = (sti, stor)
            break
        if valgt is None:
            print(f"    hopper over from={fra} — registeret svarer 500 uansett sidestørrelse")
            fra += 10
            if totalt and fra >= totalt:
                break
            continue
        sti, stor = valgt
        d = json.load(io.open(sti, encoding="utf-8"))
        if totalt is None:
            totalt = d.get("totalHits") or 0
        treff = len(d.get("hits", []))
        nedlastet += treff
        fra += stor
        if treff == 0 or fra >= totalt:
            break
    return nedlastet


def main(omrade_id):
    o = omrader.hent(omrade_id)
    ut = os.path.join(HER, "hentet", o["id"])
    os.makedirs(ut, exist_ok=True)
    print(f'{o["navn"]} ({o["kommune"]})')

    print("1 · Vannmiljø — stasjoner")
    url = arcgis("vannmiljo", 1,
                 "identifikasjon_lokal_id,navn,stasjon_kode,beskrivelse,medium,"
                 "aktivitet,stasjon_aktivitet",
                 o["senter"], o["radius_km"],
                 "LOWER(medium) LIKE '%sediment%' AND LOWER(medium) LIKE '%saltvann%'")
    sti = hent(url, os.path.join(ut, "vannmiljo_stasjoner.json"))
    stasjoner = json.load(io.open(sti, encoding="utf-8"))["features"]
    print(f"  {len(stasjoner)} stasjoner")

    print("2 · Vannmiljø — faktaark per stasjon")
    for i, f in enumerate(stasjoner, start=1):
        sid = f["attributes"]["identifikasjon_lokal_id"]
        hent(f"https://vannmiljofaktaark.miljodirektoratet.no/Home/ExportToExcel/{sid}",
             os.path.join(ut, "faktaark", f"{sid}.html"))
        if i % 25 == 0:
            print(f"    {i}/{len(stasjoner)}", flush=True)
    print(f"  {len(stasjoner)} faktaark på plass")

    print("3 · Grunnforurensning")
    hent(arcgis("grunnforurensning", 0, "*", o["senter"], o["radius_km"]),
         os.path.join(ut, "grunnforurensning.json"))

    print("4 · Nasjonalt vitenarkiv — rapportseriene")
    numre = set()
    for f in stasjoner:
        numre |= set(RAPPORTREF.findall(f["attributes"].get("beskrivelse") or ""))
    numre = {rydd_nummer(n) for n in numre}
    numre.discard("")
    print(f"  punktene navngir {len(numre)} rapportnumre: {', '.join(sorted(numre)[:12])}"
          + (" …" if len(numre) > 12 else ""))
    for serie in o["serier"]:
        n = hent_serie(serie, os.path.join(ut, "serie", serie.replace(" ", "_")))
        print(f"  {serie}: {n} poster lastet ned")

    print("Ferdig. Kjør bygg_omrade.py " + o["id"])


if __name__ == "__main__":
    sys.exit(main(sys.argv[1] if len(sys.argv) > 1 else "vikkilen"))
