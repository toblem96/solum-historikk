"""bygg_omrade.py — lager datafilene under src/data/<område>/ av råmaterialet i hentet/.

    python bygg_omrade.py vikkilen
    python bygg_omrade.py bjorvika

Kjør hent_omrade.py <område> først. Rørledningen er den samme for alle områder,
og det er hele poenget: at et nytt område ikke krever ny metode, bare nye data.

  1. Stasjonene fra Vannmiljø, beskåret til områdets ramme
  2. Måleverdiene fra faktaarkene, klassifisert mot M-608
  3. Rapportene punktene selv navngir — nummeret leses ut av beskrivelsesfeltet,
     slås opp i rapportserien i Nasjonalt vitenarkiv, og tas med bare hvis det
     stemmer eksakt. Finner vi ikke akkurat den rapporten, tar vi ingen.
  4. Kildene fra Grunnforurensning
  5. Stoffanalysen etter M-409

Alt som er skrevet for hånd om ett bestemt område, ligger i omrade_<id>.py.
Ingenting i denne fila vet noe om Vikkilen eller Bjørvika.
"""

import importlib
import io
import json
import os
import re
import sys
from collections import Counter, defaultdict

import les_figurer
import omrader
from felles import (C_BETEGN, C_GIVER, C_KODE, C_MEDIUM, C_NAVN, C_OPERATOR,
                    C_PARAM, C_TAKER, C_TID, C_VERDI, DATA_ROT, FIGURMAPPE,
                    INN_ROT, PARAM, TIL_M608, aar_av, avstand_km, grense_iii_iv,
                    kanonisk_nummer, klasse_av, nummernokler, rader,
                    rydd_nummer, tall, trinn1)

# Rapportnummeret med utgiveren foran. Utgiveren avgjør hvilken serie nummeret
# slås opp i, og hva rapporten heter når den ikke finnes. Skrivemåtene varierer i
# Vannmiljø: «NIVA-rapport OR-5040», «NGI-rapport 20071396-2», «NGI Rapport
# 20190266-01-R», «NGU. Lepland, A. et al. 2010».
RAPPORTREF = re.compile(
    r"(?P<pre>OR-|NIVA[-\s]?rapport:?\s*|NGI[-\s]?rapport:?\s*|NGU\.\s*)"
    r"(?P<nr>[\w.-]{3,24})", re.I)

# «... NIVA-rapport 5338-2007 og 5540-2008.» navngir to rapporter. Fortsettelsen
# må stå rett etter, bundet sammen med «og» eller komma — ellers plukker vi opp
# løpende tekst. Ledd uten siffer faller bort av seg selv («, rev 01»).
FORTSETTELSE = re.compile(r"\s*(?:og|,|&)\s*(?P<nr>[\w.-]{3,24})", re.I)


def utgiver_av(pre):
    p = pre.lower()
    if "ngi" in p:
        return "NGI"
    if "ngu" in p:
        return "NGU"
    return "NIVA"                      # «OR-» og «NIVA-rapport»


def referanser_i(tekst):
    """(utgiver, nummer) for hver rapportreferanse i en stasjonsbeskrivelse."""
    tekst = tekst or ""
    ut = []
    for m in RAPPORTREF.finditer(tekst):
        utgiver = utgiver_av(m.group("pre"))
        nr = kanonisk_nummer(rydd_nummer(m.group("nr")))
        if nr:
            ut.append((utgiver, nr))
        slutt = m.end()
        while True:
            f = FORTSETTELSE.match(tekst, slutt)
            if not f:
                break
            nr = kanonisk_nummer(rydd_nummer(f.group("nr")))
            if nr:
                ut.append((utgiver, nr))
            slutt = f.end()
    return ut


def sorteringsnokkel(nr):
    """Naturlig rekkefølge: 5040 før 5669, 1060036-002 før 1060036-005."""
    return [int(b) if b.isdigit() else b for b in re.split(r"(\d+)", nr)]


def rapport_id(utgiver, nr):
    return "r-" + utgiver.lower() + re.sub(r"[^a-z0-9]", "", nr.lower())


# ── 1 · stasjoner ────────────────────────────────────────────────────────────

def les_stasjoner(omr, inn):
    kart = json.load(io.open(os.path.join(inn, "vannmiljo_stasjoner.json"), encoding="utf-8"))
    geo = {}
    for f in kart["features"]:
        a = f["attributes"]
        geo[str(a["identifikasjon_lokal_id"])] = {
            "beskrivelse": (a.get("beskrivelse") or "").strip().replace("\n", " "),
            "aktivitet": a.get("aktivitet") or "",
            "lng": round(f["geometry"]["x"], 5),
            "lat": round(f["geometry"]["y"], 5),
            "arcnavn": a.get("navn") or "",
        }

    geo = {sid: g for sid, g in geo.items() if omr.innenfor(g["lat"], g["lng"])}

    raa = {}
    for sid, g in geo.items():
        sti = os.path.join(inn, "faktaark", f"{sid}.html")
        rs = rader(sti) if os.path.exists(sti) else []
        raa[sid] = {"id": sid, "geo": g, "rader": rs}

    # Navn: Vannmiljø-navnet, utvidet med betegnelsen når den finnes og sier noe
    # nytt. Er navnet fortsatt likt et annet, henges stasjonsnummeret på — det er
    # den eneste måten å skille dem på, og lista må ha unike navn.
    grunnnavn = {}
    for sid, r in raa.items():
        navn = (r["rader"][0][C_NAVN] if r["rader"] else r["geo"]["arcnavn"]).strip()
        beteg = (r["rader"][0][C_BETEGN] if r["rader"] else "").strip()
        if beteg and beteg.lower() not in navn.lower():
            navn = f"{navn} {beteg}"
        grunnnavn[sid] = navn or f"Stasjon {sid}"
    antall_navn = Counter(grunnnavn.values())

    stasjoner = []
    for sid in sorted(raa, key=lambda x: int(x)):
        r = raa[sid]
        rs = r["rader"]
        sed = [c for c in rs if c[C_MEDIUM] == "Sediment saltvann"]
        maalt = [c for c in sed if c[C_OPERATOR] == "="]

        per_stoff = defaultdict(list)
        for c in maalt:
            n = TIL_M608.get(c[C_PARAM])
            v = tall(c[C_VERDI])
            if n and v is not None:
                per_stoff[n].append(v)

        verdier = []
        for n, vs in per_stoff.items():
            maks = max(vs)
            verdier.append({
                "stoff": PARAM[n]["navn"],
                "verdi": round(maks, 4),
                "enhet": PARAM[n]["enhet"],
                "klasse": klasse_av(n, maks),
                "n": len(vs),
            })
        verdier.sort(key=lambda v: (-v["klasse"], v["stoff"]))

        aar = sorted({a for a in (aar_av(c[C_TID]) for c in sed) if a})
        navn = grunnnavn[sid]
        if antall_navn[navn] > 1:
            navn = f"{navn} ({sid})"

        stasjoner.append({
            "navn": navn,
            "kode": rs[0][C_KODE] if rs else f"st-{sid}",
            "lat": r["geo"]["lat"],
            "lng": r["geo"]["lng"],
            "klasse": max((v["klasse"] for v in verdier), default=None),
            "aarFra": aar[0] if aar else None,
            "aarTil": aar[-1] if aar else None,
            "utforende": ", ".join(sorted({c[C_TAKER] for c in sed if c[C_TAKER]})),
            "oppdragsgiver": ", ".join(sorted({c[C_GIVER] for c in sed if c[C_GIVER]})),
            "medium": ", ".join(sorted({c[C_MEDIUM] for c in rs if c[C_MEDIUM]})),
            "faktaark": f"https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/{sid}",
            "verdier": verdier,
            "opphav": "Vannmiljø",
            "_id": sid,
            "_beskrivelse": r["geo"]["beskrivelse"],
            "_aktivitet": r["geo"]["aktivitet"],
            "_sed": len(sed),
            "_alle": len(rs),
            "_under": len([c for c in sed if c[C_OPERATOR] == "<"]),
            "_rader": sed,
        })
    return stasjoner


# ── 2 · undersøkelser ────────────────────────────────────────────────────────

def bygg_undersokelser(omr, stasjoner):
    alias = getattr(omr, "GIVER_ALIAS", {})

    def giver(navn):
        lav = (navn or "").lower()
        for bit, riktig in alias.items():
            if bit in lav:
                return riktig
        return navn or "ikke oppgitt"

    grupper = defaultdict(lambda: {"stasjoner": set(), "aarTil": 0})
    for s in stasjoner:
        for c in s["_rader"]:
            a = aar_av(c[C_TID])
            if not a:
                continue
            n = (a, c[C_TAKER] or "ikke oppgitt", giver(c[C_GIVER]))
            grupper[n]["stasjoner"].add(s["navn"])
            grupper[n]["aarTil"] = max(grupper[n]["aarTil"], a)

    ut = []
    for (aar, taker, giv), g in sorted(grupper.items()):
        if len(g["stasjoner"]) < 2:
            continue
        kort = re.sub(r"[^a-z0-9]+", "-", taker.lower()).strip("-")[:18]
        ut.append({
            "id": f"u-{kort}-{aar}",
            "aar": aar,
            "aarTil": g["aarTil"],
            "utforende": taker,
            "oppdragsgiver": giv,
            "antallStasjoner": len(g["stasjoner"]),
            "rapportId": None,
            "stasjoner": sorted(g["stasjoner"]),
        })
    return ut


# ── 3 · stoffanalyse etter M-409 ─────────────────────────────────────────────

def bygg_stoff(stasjoner):
    verdier = defaultdict(list)
    per_stasjon_klasse = defaultdict(Counter)
    for s in stasjoner:
        for c in s["_rader"]:
            if c[C_OPERATOR] != "=":
                continue
            n = TIL_M608.get(c[C_PARAM])
            v = tall(c[C_VERDI])
            if n and v is not None:
                verdier[n].append(v)
        for v in s["verdier"]:
            per_stasjon_klasse[v["stoff"]][str(v["klasse"])] += 1

    ut = []
    for n, vs in verdier.items():
        p = PARAM[n]
        vs = sorted(vs)
        t1 = trinn1(n)
        median = vs[len(vs) // 2] if len(vs) % 2 else (vs[len(vs) // 2 - 1] + vs[len(vs) // 2]) / 2
        maks = vs[-1]
        snitt = sum(vs) / len(vs)
        n_over = sum(1 for v in vs if v > t1)
        tak = max(2 * t1, grense_iii_iv(n) or 0)
        # Rekkefølgen betyr noe. Er stoffet over Trinn 1 på over halvparten av
        # målingene, er det ikke en flekk — det er utbredt, selv om det også har
        # en topp. Hotspot er forbeholdt stoffer som er samlet på få punkter.
        if snitt < t1 and maks <= tak:
            status = "friskmeldt"
        elif n_over / len(vs) >= 0.5:
            status = "utbredt"
        elif median > 0 and maks / median >= 2:
            status = "hotspot"
        else:
            status = "blandet"
        ut.append({
            "navn": p["navn"],
            "tegn": n,
            "status": status,
            "faktor": round(maks / t1, 1) if t1 else None,
            "enhet": p["enhet"].replace(" TS", ""),
            "maks": round(maks, 4),
            "median": round(median, 4),
            "trinn1": t1,
            "nOver": n_over,
            "n": len(vs),
            "fraTyper": [],
            "fraKilder": [],
            "klassefordeling": dict(sorted(per_stasjon_klasse[p["navn"]].items())) or None,
            "klassefordelingParameter": p["navn"],
            "antallStasjonerKlassifisert": sum(per_stasjon_klasse[p["navn"]].values()),
        })
    ut.sort(key=lambda x: (-(x["faktor"] or 0), x["navn"]))
    return ut


# ── 4 · geografi ─────────────────────────────────────────────────────────────

def bygg_geografi(omr, stasjoner):
    lat = [s["lat"] for s in stasjoner]
    lng = [s["lng"] for s in stasjoner]
    alias = getattr(omr, "STEDSNAVN_ALIAS", {})
    steder = defaultdict(list)
    for s in stasjoner:
        for navn in getattr(omr, "STEDSNAVN", []):
            if navn.lower() in s["navn"].lower():
                steder[navn].append(s)
                break
    stedsnavn = []
    for navn, liste in steder.items():
        stedsnavn.append({
            "navn": alias.get(navn, navn),
            "lat": round(sum(x["lat"] for x in liste) / len(liste), 5),
            "lng": round(sum(x["lng"] for x in liste) / len(liste), 5),
            "antallStasjoner": len(liste),
            "grunnlag": f"gjennomsnitt av stasjonene med «{navn}» i navnet",
        })
    stedsnavn.sort(key=lambda x: -x["antallStasjoner"])
    return {
        "bbox": {"v": round(min(lng), 5), "s": round(min(lat), 5),
                 "o": round(max(lng), 5), "n": round(max(lat), 5)},
        "senter": {"lat": round(sum(lat) / len(lat), 5), "lng": round(sum(lng) / len(lng), 5)},
        "stedsnavn": stedsnavn,
        "merknad": (
            "bbox og senter er regnet ut av de "
            f"{len(stasjoner)} stasjonsposisjonene i Vannmiljø-uttrekket, ikke hentet fra "
            "en områdeavgrensning. Stedsnavnene er gjennomsnittsposisjonen til stasjonene "
            "som bærer navnet. Denne prototypen tegner ingen egen kystkontur — bakgrunnen "
            "er Kartverkets fliser, som viser den ekte strandlinja."),
    }


# ── 5 · kilder fra Grunnforurensning ─────────────────────────────────────────

def les_grunnforurensning(inn, stasjoner):
    d = json.load(io.open(os.path.join(inn, "grunnforurensning.json"), encoding="utf-8"))
    beste = {}
    rang = {"ikkeAkseptabelForurensning": 3, "akseptabelForurensning": 2,
            "liteForurensning": 1, "ukjentPåvirkning": 0}
    for f in d["features"]:
        a = f["attributes"]
        g = f.get("geometry") or {}
        if "x" not in g:
            continue
        lid = a.get("lokalitet_id")
        rad = {
            "lokalitetId": lid,
            "navn": a.get("lokalitet_navn"),
            "paavirkning": a.get("paavirkningsgrad"),
            "status": a.get("prosess_status") or "",
            "bransje": a.get("naeringsgruppe"),
            "virksomhet": a.get("virksomhet_navn"),
            "vedtak": a.get("vedtak"),
            "kommune": a.get("kommune"),
            "lat": round(g["y"], 5),
            "lng": round(g["x"], 5),
        }
        rad["avstandKm"] = round(min(
            avstand_km(rad["lat"], rad["lng"], s["lat"], s["lng"]) for s in stasjoner), 2)
        # Samme lokalitet er registrert flere ganger med ulik påvirkningsgrad.
        # Vi beholder den strengeste.
        if lid not in beste or rang.get(rad["paavirkning"], 0) > rang.get(beste[lid]["paavirkning"], 0):
            beste[lid] = rad
    return sorted(beste.values(), key=lambda r: r["avstandKm"])


# ── 6 · tiltaksresultat, regnet av måledataene ───────────────────────────────

def tiltaksresultat(stasjoner, beskrivelser):
    """Hva måledataene på tiltakspunktene faktisk sier — ingen rapport innblandet."""
    med = [s for s in stasjoner if s["_beskrivelse"] in beskrivelser]
    per = defaultdict(lambda: defaultdict(list))
    for s in med:
        for c in s["_rader"]:
            if c[C_OPERATOR] != "=":
                continue
            n = TIL_M608.get(c[C_PARAM])
            v = tall(c[C_VERDI])
            a = aar_av(c[C_TID])
            if n and v is not None and a:
                per[a][n].append(v)
    aar = sorted(per)
    if not aar:
        return "Ingen klassifiserbare målinger på tiltakspunktene."

    def verst(a):
        ut = 0
        for n, vs in per[a].items():
            ut = max(ut, klasse_av(n, max(vs)))
        return ut

    biter = []
    for a in aar:
        stasj = len({s["navn"] for s in med
                     if s["aarFra"] and s["aarFra"] <= a <= (s["aarTil"] or a)})
        biter.append(f"{a}: {stasj} stasjoner, {sum(len(v) for v in per[a].values())} "
                     f"klassifiserbare målinger, verste tilstandsklasse "
                     f"{'I II III IV V'.split()[verst(a) - 1]}")
    tbt_aar = [a for a in aar if "TBT" in per[a]]
    mangler = ("Tributyltinn er ikke målt på disse punktene i "
               f"{aar[0]}, bare i {', '.join(str(a) for a in tbt_aar)}. "
               "Måledataene gir derfor ingen før- og etterverdi for TBT på tiltaksflaten."
               if tbt_aar and aar[0] not in tbt_aar else "")
    return ("Regnet ut av målingene på tiltakspunktene, ikke hentet fra en rapport. "
            + ". ".join(biter) + ". " + mangler).strip()


# ── 7 · rapportene punktene navngir ──────────────────────────────────────────

def les_serier(omr, inn):
    """Rapportseriene fra Nasjonalt vitenarkiv, indeksert på nummer per utgiver."""
    import glob
    idx = defaultdict(dict)
    for serie in getattr(omr, "SERIER", ["NIVA-rapport"]):
        utgiver = serie.split("-")[0].upper()
        mappe = os.path.join(inn, "serie", serie.replace(" ", "_"))
        for f in sorted(glob.glob(os.path.join(mappe, "*.json"))):
            for h in json.load(io.open(f, encoding="utf-8")).get("hits", []):
                pc = (h["entityDescription"].get("reference") or {}).get("publicationContext") or {}
                nr = str(pc.get("seriesNumber") or "").strip()
                if not nr:
                    continue
                for n in nummernokler(nr):
                    idx[utgiver].setdefault(n, h)
    return idx


def slaa_opp(idx, utgiver, nr):
    """Eksakt oppslag. Nummeret slås opp hos sin egen utgiver, ingen andre."""
    for n in nummernokler(nr):
        h = idx.get(utgiver, {}).get(n)
        if h:
            return h
    return None


def bygg_rapporter(omr, inn, stasjoner):
    """Rapportene punktene selv navngir — ingen andre.

    Gangen er: les rapportnummeret ut av stasjonsbeskrivelsen i Vannmiljø, slå
    nummeret opp i utgiverens egen serie i Nasjonalt vitenarkiv, og ta rapporten
    med bare hvis nummeret stemmer eksakt. Finner vi ikke akkurat den rapporten,
    tar vi ingen. Vi søker ikke på stedsnavn, årstall eller oppdragsgiver — et
    treff på stedsnavnet i en tittel er ikke det samme som rapporten bak en måling.
    """
    idx = les_serier(omr, inn)
    oppsett = getattr(omr, "RAPPORTOPPSETT", {})

    referert = defaultdict(list)
    for s in stasjoner:
        for par in set(referanser_i(s["_beskrivelse"])):
            referert[par].append(s["navn"])

    rapporter = []
    for (utgiver, nr) in sorted(referert, key=lambda p: (sorteringsnokkel(p[1]), p[0])):
        punkter = sorted(referert[(utgiver, nr)])
        opp = oppsett.get(nr, {})
        rid = rapport_id(utgiver, nr)
        h = slaa_opp(idx, utgiver, nr)
        serienavn = f"{utgiver}-serien"

        if h is None:
            # Nummeret står på punktene, men rapporten finnes ikke i serien.
            rapporter.append({
                "id": rid, "aar": opp.get("aar"),
                "tittel": opp.get("tittel") or f"{utgiver}-rapport {nr}",
                "utforer": utgiver, "oppdragsgiver": opp.get("oppdragsgiver"),
                "folk": None, "status": "ikke_funnet", "tillit": "lav", "url": None,
                "rapportnummer": f"{utgiver} {nr}", "sider": None,
                "begrunnelse": (
                    f"{len(punkter)} stasjoner oppgir «{utgiver}-rapport {nr}» som kilde. "
                    f"Nummeret finnes ikke i {serienavn} i Nasjonalt vitenarkiv. Målingene er "
                    "registrert, beskrivelsen av dem er ikke."),
                "kobling": {"type": "navngitt_i_vannmiljo",
                            "tekst": opp.get("koblingstekst")
                            or "Rapportnummeret står ordrett i stasjonsbeskrivelsen."},
                "dekkerPunkter": punkter, "figurer": [], "sammendrag": None,
                "noekkelfunn": opp.get("noekkelfunn", []), "punkter": [],
                "punkterForbehold": opp.get("punkterForbehold"),
                "referanser": None, "kildeIder": opp.get("kildeIder", []), "tiltakIder": [],
                "nyePunkter": [], "funnetVia": "punkt",
                "belegg": f"Navngitt av {len(punkter)} målepunkter i Vannmiljø.",
            })
            continue

        e = h["entityDescription"]
        ref = e.get("reference") or {}
        pc = ref.get("publicationContext") or {}
        fullt_nr = str(pc.get("seriesNumber") or nr)
        aar = (e.get("publicationDate") or {}).get("year")
        folk = [c["identity"]["name"] for c in (e.get("contributorsPreview") or [])
                if c.get("identity") and "Project manager" not in c["identity"]["name"]]
        abstrakt = " ".join((e.get("abstract") or "").split())
        url = h.get("handle") or h.get("id", "").replace(
            "https://api.nva.unit.no/publication/", "https://nva.sikt.no/registration/")

        rapporter.append({
            "id": rid,
            "aar": int(aar) if aar else None,
            "tittel": e.get("mainTitle") or "",
            "utforer": utgiver,
            "oppdragsgiver": opp.get("oppdragsgiver"),
            "folk": ", ".join(folk[:6]) or None,
            "status": "lest" if abstrakt else "ikke_lest",
            "tillit": "hoy",
            "url": url,
            "rapportnummer": f"{utgiver} {fullt_nr}",
            "sider": ((ref.get("publicationInstance") or {}).get("pages") or {}).get("pages"),
            "begrunnelse": (
                f"{len(punkter)} stasjoner oppgir rapportnummeret i beskrivelsesfeltet i "
                f"Vannmiljø. Nummeret er slått opp i {serienavn} i Nasjonalt vitenarkiv og "
                "stemmer eksakt. Sammendraget under er rapportens eget, hentet fra registeret."),
            "kobling": {"type": "navngitt_i_vannmiljo", "tekst": opp.get("koblingstekst") or
                        "Rapportnummeret står ordrett i stasjonsbeskrivelsen i Vannmiljø."},
            "dekkerPunkter": punkter,
            "figurer": [],
            "sammendrag": abstrakt or None,
            "noekkelfunn": opp.get("noekkelfunn", []),
            "punkter": [],
            "punkterForbehold": opp.get("punkterForbehold") or (
                "Ingen punktverdier er lest ut av denne rapporten. PDF-en er ikke lastet ned — "
                "nedlastingsruta i Nasjonalt vitenarkiv svarer 403 uten innlogging. "
                "Måleverdiene for stasjonene rapporten dekker, ligger likevel i Vannmiljø og "
                "vises på punktene i kartet."),
            "referanser": None,
            "kildeIder": opp.get("kildeIder", []),
            "tiltakIder": [],
            "nyePunkter": [],
            "funnetVia": "punkt",
            "belegg": f"Navngitt av {len(punkter)} målepunkter i Vannmiljø.",
        })

    # Måleårene til punktene som navngir rapporten. For rapporter som ikke finnes
    # i arkivet, er dette det eneste årstallet vi har lov til å bruke: NGIs
    # prosjektnummer begynner riktignok med et årstall, men det er prosjektåret,
    # ikke utgivelsesåret, og vi kan ikke slå det opp.
    etter_navn = {s["navn"]: s for s in stasjoner}
    for r in rapporter:
        aar = [a for n in r["dekkerPunkter"]
               for a in (etter_navn.get(n, {}).get("aarFra"),
                         etter_navn.get(n, {}).get("aarTil"))
               if a]
        r["maaltFra"] = min(aar) if aar else None
        r["maaltTil"] = max(aar) if aar else None

    # Rapportene vi har PDF-en til, får sine egne tabellverdier lest ut.
    if hasattr(omr, "beriker"):
        omr.beriker(rapporter, stasjoner)

    # Figurer hentes ut av PDF-ene og legges i public/figurer/.
    for utgiver, nr in referert:
        fil = getattr(omr, "PDF_ER", {}).get(nr)
        if not fil:
            continue
        rid = rapport_id(utgiver, nr)
        for r in rapporter:
            if r["id"] == rid:
                r["figurer"] = les_figurer.hent(
                    os.path.join(getattr(omr, "INN", INN_ROT), fil), nr, FIGURMAPPE, maks=4)

    # Eldst først. Har rapporten ikke utgivelsesår, plasseres den på det første
    # året punktene den dekker, ble målt.
    rapporter.sort(key=lambda r: (r["aar"] or r["maaltFra"] or 9999, r["id"]))
    return rapporter, len(referert)


# ── skriving ─────────────────────────────────────────────────────────────────

def skriv(data, navn, konstant, verdi, topptekst):
    linjer = ["/* " + topptekst.strip().replace("*/", "* /") + "\n */\n"]
    linjer.append(f"export const {konstant} = ")
    linjer.append(json.dumps(verdi, ensure_ascii=False, indent=1))
    linjer.append(";\n")
    with io.open(os.path.join(data, navn), "w", encoding="utf-8", newline="\n") as f:
        f.write("".join(linjer))


INDEKS = """/* Generert av verktoy/bygg_omrade.py — ikke redigert for hånd. */
export {{ D_STASJONER }} from "./stasjoner";
export {{ D_STASJONER_META }} from "./stasjoner_meta";
export {{ D_RAPPORTER }} from "./rapporter";
export {{ D_SAMLET }} from "./samlet";
export {{ D_KILDER }} from "./kilder";
export {{ D_KILDETYPER }} from "./kildetyper";
export {{ D_STOFF }} from "./stoff";
export {{ D_FLYT }} from "./flyt";
export {{ D_HOTSPOT }} from "./hotspot";
export {{ D_TILTAK }} from "./tiltak";
export {{ D_HENDELSER }} from "./hendelser";
export {{ D_MALINGER_PER_AAR }} from "./malinger_per_aar";
export {{ D_TIDSROM }} from "./tidsrom";
export {{ D_UNDERSOKELSER }} from "./undersokelser";
export {{ D_RAPPORTNUMRE }} from "./rapportnumre";
export {{ D_GEOGRAFI }} from "./geografi";
"""


def main(omrade_id):
    o = omrader.hent(omrade_id)
    omr = importlib.import_module(f"omrade_{o['id']}")
    inn = os.path.join(INN_ROT, o["id"])
    data = os.path.join(DATA_ROT, o["id"])
    os.makedirs(data, exist_ok=True)
    tekst = getattr(omr, "TEKSTER", {})

    print(f'Bygger {o["navn"]}-datasettet')
    stasjoner = les_stasjoner(omr, inn)
    if not stasjoner:
        raise SystemExit("ingen stasjoner innenfor rammen — sjekk BBOX")
    med_data = [s for s in stasjoner if s["verdier"]]
    sum_sed = sum(s["_sed"] for s in stasjoner)
    sum_alle = sum(s["_alle"] for s in stasjoner)
    sum_under = sum(s["_under"] for s in stasjoner)
    print(f"  {len(stasjoner)} stasjoner, {sum_alle} målinger, {sum_sed} i marint sediment, "
          f"{len(med_data)} med klassifiserte funn")

    undersokelser = bygg_undersokelser(omr, stasjoner)
    rapporter, antall_referert = bygg_rapporter(omr, inn, stasjoner)
    stoff = bygg_stoff(stasjoner)
    geografi = bygg_geografi(omr, stasjoner)
    gf = les_grunnforurensning(inn, stasjoner)

    # År og tidsrom. Tetthetsstripa på tidsaksen teller stasjoner, ikke målinger —
    # ellers ville ett år med mange parametere sett ut som mye feltarbeid.
    per_aar = Counter()
    malinger_per_aar = Counter()
    for s in stasjoner:
        aar_her = set()
        for c in s["_rader"]:
            a = aar_av(c[C_TID])
            if a:
                aar_her.add(a)
                malinger_per_aar[a] += 1
        for a in aar_her:
            per_aar[a] += 1
    aar_min, aar_maks = min(per_aar), max(per_aar)

    # koble undersøkelser til rapporter der stasjonene er de samme
    for u in undersokelser:
        for r in rapporter:
            if not r["dekkerPunkter"]:
                continue
            felles = set(u["stasjoner"]) & set(r["dekkerPunkter"])
            if (len(felles) >= max(2, len(u["stasjoner"]) // 2)
                    and r["aar"] and abs(r["aar"] - u["aar"]) <= 3):
                u["rapportId"] = r["id"]
                break

    # tiltak: punktene er stasjonene med tiltakets beskrivelse
    tiltak = []
    for t in getattr(omr, "TILTAK", []):
        t = dict(t)
        besk = t.pop("_stasjonsbeskrivelse")
        besk = {besk} if isinstance(besk, str) else set(besk)
        med = [s for s in stasjoner if s["_beskrivelse"] in besk]
        t["punkter"] = [s["navn"] for s in med]
        # Årene er målingenes, ikke anleggsperiodens. Er de ikke satt for hånd,
        # leser vi dem av punktene — da kan et tiltak aldri påstå et årstall som
        # ikke finnes i dataene.
        if t.get("aarFra") is None:
            fra = [s["aarFra"] for s in med if s["aarFra"]]
            til = [s["aarTil"] for s in med if s["aarTil"]]
            t["aarFra"] = min(fra) if fra else None
            t["aarTil"] = max(til) if til else t["aarFra"]
        if t.get("resultat") is None:
            t["resultat"] = tiltaksresultat(stasjoner, besk)
        tiltak.append(t)
    for r in rapporter:
        r["tiltakIder"] = [t["id"] for t in tiltak if t.get("rapportId") == r["id"]]

    # kilder
    gf_etter_id = {r["lokalitetId"]: r for r in gf}
    kilder = []
    for i, k in enumerate(getattr(omr, "KILDEOPPSETT", []), start=1):
        rad = gf_etter_id.get(k["lokalitetId"]) if k["lokalitetId"] else None
        koblet = omr.kilde_punkter(k, stasjoner) if hasattr(omr, "kilde_punkter") else []
        verste = omr.verste_for_kilde(k, koblet, stasjoner) if hasattr(omr, "verste_for_kilde") else None
        kilder.append({
            "id": k["id"], "rang": i, "navn": k["navn"], "poeng": k["poeng"],
            "belegg": k["belegg"], "type": k["type"], "presisjon": k["presisjon"],
            "lat": k.get("lat") if rad is None else rad["lat"],
            "lng": k.get("lng") if rad is None else rad["lng"],
            "koordinatKilde": (
                f"Grunnforurensning, lokalitet {rad['lokalitetId']} «{rad['navn']}», "
                f"{rad['avstandKm']} km fra nærmeste målestasjon." if rad else
                k.get("koordinatKilde")
                or "Ingen koordinat i grunnlaget — kilden er beskrevet i rapport, ikke stedfestet."),
            "status": (rad["status"] or "ikke oppgitt") if rad else "beskrevet i rapport",
            "statusGrunn": (
                f"Grunnforurensning oppgir påvirkningsgrad «{rad['paavirkning']}»"
                + (f" og bransje «{rad['bransje']}»" if rad.get("bransje") else "")
                + "." if rad else "Ikke registrert i Grunnforurensning."),
            "stoffer": k["stoffer"],
            "grunnlag": k["grunnlag"],
            "bevisklasse": k["bevisklasse"],
            "versteStasjon": verste,
            "koblet": koblet,
        })

    # stoff -> kilder, bare der M-350-signaturen eller en rapport navngir stoffet
    for s in stoff:
        s["fraKilder"] = [k["id"] for k in kilder if s["navn"] in k["stoffer"]]
        s["fraTyper"] = sorted({k["type"] for k in kilder if s["navn"] in k["stoffer"]})
    flyt = [{"fra": s["navn"], "til": kid,
             "vekt": next(k["poeng"] for k in kilder if k["id"] == kid),
             "status": s["status"]}
            for s in stoff for kid in s["fraKilder"]]

    m350 = getattr(omr, "KILDETYPE_M350", {})
    typer = []
    for navn in sorted({k["type"] for k in kilder}):
        ider = [k["id"] for k in kilder if k["type"] == navn]
        typer.append({
            "navn": navn, "antallKilder": len(ider), "kildeIder": ider,
            "m350relasjon": m350.get(
                navn, "Ingen ordrett M-350-kobling er slått opp for denne typen."),
        })

    def beste_kilde(st):
        aktuelle = [k for k in kilder if k["id"] in st["fraKilder"]]
        return max(aktuelle, key=lambda k: k["poeng"]) if aktuelle else None

    def verste_stasjon(navn):
        med = [st for st in stasjoner if any(v["stoff"] == navn for v in st["verdier"])]
        if not med:
            return None
        return max(med, key=lambda st: max(v["verdi"] for v in st["verdier"]
                                           if v["stoff"] == navn))["navn"]

    hot = [s for s in stoff if s["status"] == "hotspot"]
    utbredt = [s for s in stoff if s["status"] == "utbredt"]
    tbt = next((s for s in stoff if s["tegn"] == "TBT"), None)
    fremst = sorted(utbredt + hot, key=lambda s: -(s["faktor"] or 0))
    overskrift = omr.hotspot_tittel(stoff, tbt)

    hotspot = {
        "tittel": overskrift["tittel"],
        "undertittel": (
            f"{len(utbredt)} av {len(stoff)} klassifiserte stoffer er over Trinn 1 på mer enn "
            f"halvparten av målingene og regnes som utbredte, {len(hot)} har hotspot-indikasjon "
            f"etter M-409 § 3.4.1, og {sum(1 for s in stoff if s['status'] == 'friskmeldt')} er "
            "friskmeldt. " + overskrift["hale"]),
        "antallVurderteStoffer": len(stoff),
        "statusfordeling": dict(Counter(s["status"] for s in stoff)),
        "antallHotspot": len(hot),
        "antallUtbredt": len(utbredt),
        "antallFriskmeldt": sum(1 for s in stoff if s["status"] == "friskmeldt"),
        "antallStoffINett": len({f["fra"] for f in flyt}),
        "antallKilderINett": len({f["til"] for f in flyt}),
        "antallLenker": len(flyt),
        "hotspots": [{
            "stoff": s["navn"], "enhet": s["enhet"], "maks": s["maks"], "faktor": s["faktor"],
            "nOver": s["nOver"], "n": s["n"], "trinn1": s["trinn1"], "status": s["status"],
            "versteStasjon": verste_stasjon(s["navn"]),
            "kildeId": (beste_kilde(s) or {}).get("id"),
            "kildeNavn": (beste_kilde(s) or {}).get("navn"),
            "kildePoeng": (beste_kilde(s) or {}).get("poeng"),
            "kildeType": (beste_kilde(s) or {}).get("type"),
        } for s in fremst[:5]],
        "regel": (
            "M-409 § 3.4.1. Friskmelding: snittet er under Trinn 1 og ingen enkeltverdi er over "
            "det høyeste av 2 × Trinn 1 og klassegrensen III/IV. Utbredt: over Trinn 1 på minst "
            "halvparten av målingene. Hotspot-indikasjon: maksverdi delt på medianverdi er 2 "
            "eller mer. Trinn 1 er M-608s grense mellom klasse II og III, unntatt for TBT der "
            "M-409 § 3.3 setter den forvaltningsbaserte grensen til 35 µg/kg."),
    }

    hendelser = sorted(getattr(omr, "HENDELSER", []), key=lambda h: h["aar"])

    rapportnumre = []
    grupper = defaultdict(list)
    for s in stasjoner:
        if s["_beskrivelse"]:
            grupper[s["_beskrivelse"]].append(s["navn"])
    for besk, navn in sorted(grupper.items(), key=lambda x: -len(x[1])):
        rapportnumre.append({
            "beskrivelse": besk,
            "antallStasjoner": len(navn),
            "eksempelStasjon": sorted(navn)[0],
            "rapportnumre": sorted({f"{u} {n}" for u, n in referanser_i(besk)}),
        })

    # ── skriv filene ─────────────────────────────────────────────────────────
    felles_tekst = (f"Generert av verktoy/bygg_omrade.py {o['id']} — ikke redigert for hånd.\n"
                    f" * Råmaterialet ligger i verktoy/hentet/{o['id']}/ og hentes av "
                    f"hent_omrade.py {o['id']}.")

    # Punkter rapportene selv stedfester legges inn til slutt, etter at all
    # statistikk er regnet ut av måledataene. De har ingen målinger og skal ikke
    # telle med der, men de skal tegnes i kartet.
    fra_rapport, _ = omr.ekstra_stasjoner(stasjoner) if hasattr(omr, "ekstra_stasjoner") else ([], [])
    stasjoner = stasjoner + fra_rapport

    for s in stasjoner:
        for n in ["_id", "_beskrivelse", "_aktivitet", "_sed", "_alle", "_under", "_rader"]:
            s.pop(n, None)

    skriv(data, "stasjoner.ts", "D_STASJONER", stasjoner, felles_tekst + f"""
 *
 * {len(stasjoner)} stasjoner med marint sediment innenfor rammen rundt {o['navn']}, hentet
 * fra Vannmiljøs stasjonslag og faktaark-eksport.
 *
 * navn          Vannmiljø-navnet, utvidet med betegnelsen når den sier noe nytt.
 *               Er navnet fortsatt likt et annet, står stasjonsnummeret i parentes.
 * klasse        verste M-608-klasse blant verdiene, null = ingen klassifiserte funn
 * verdier       ett innslag per stoff som har grenseverdi i M-608: høyeste målte
 *               verdi, klassen den gir, og n = antall målinger bak den
 *
 * {sum_alle} målinger totalt, {sum_sed} av dem i marint saltvannssediment.
 * {sum_under} av sedimentmålingene er oppgitt som «<» deteksjonsgrensen og er ikke
 * brukt til å sette klasse. {len(med_data)} stasjoner har klassifiserte funn.
 * {len(fra_rapport)} av punktene kommer fra rapportene selv, ikke fra Vannmiljø.""")

    skriv(data, "stasjoner_meta.ts", "D_STASJONER_META", {
        "id": o["id"],
        "omrade": o["navn"],
        "kommune": o["kommune"],
        "undertittel": o["undertittel"],
        "antall": len(stasjoner),
        "antallFraVannmiljo": len(stasjoner) - len(fra_rapport),
        "antallFraRapport": len(fra_rapport),
        "antallMedData": len(med_data),
        "antallMalinger": sum_sed,
        "antallMalingerAlle": sum_alle,
        "antallUnderDeteksjon": sum_under,
        "kilde": ("Stasjoner og måleverdier fra Vannmiljø (ArcGIS REST + faktaark-eksport, uten "
                  "API-nøkkel), klassifisert mot M-608. Kilder fra Grunnforurensning. Rapporter "
                  "fra Nasjonalt vitenarkiv."),
    }, felles_tekst)

    akse_fra = min([aar_min] + [h["aar"] for h in hendelser])
    akse_til = max([aar_maks] + [h["aar"] for h in hendelser])
    skriv(data, "tidsrom.ts", "D_TIDSROM", {
        "fra": akse_fra, "til": akse_til,
        "foersteMaaling": aar_min,
        "sisteMaaling": aar_maks,
        "merknad": (
            f"Aksen dekker {akse_fra}–{akse_til}: fra den eldste hendelsen til den ferskeste "
            f"målingen. Selve måledataene går fra {aar_min} til {aar_maks}. "
            + tekst.get("tidsrom", "")).strip(),
    }, felles_tekst)

    skriv(data, "malinger_per_aar.ts", "D_MALINGER_PER_AAR",
          {str(a): per_aar[a] for a in sorted(per_aar)},
          felles_tekst
          + "\n *\n * Antall stasjoner med minst én marin sedimentmåling det året — dette er"
            "\n * tetthetsstripa under tidsaksen. Stasjoner går igjen flere år, så summen er"
            "\n * høyere enn antall stasjoner. Enkeltmålingene fordeler seg slik:"
            "\n *   " + ", ".join(f"{a}: {malinger_per_aar[a]}"
                                  for a in sorted(malinger_per_aar)) + ".")

    skriv(data, "undersokelser.ts", "D_UNDERSOKELSER", undersokelser, felles_tekst + """
 *
 * Marine sedimentmålinger gruppert på (år, utførende, oppdragsgiver). Grupper med
 * minst to stasjoner er tatt med; enkeltstasjoner er utelatt. rapportId er satt
 * der en rapport dekker minst halvparten av gruppas stasjoner og er utgitt
 * innenfor tre år av undersøkelsen.""")

    skriv(data, "rapportnumre.ts", "D_RAPPORTNUMRE", rapportnumre, felles_tekst + """
 *
 * Beskrivelsesfeltet på stasjonene i Vannmiljø, gruppert. Feltet inneholder ofte
 * rapportnummeret; rapportnumre[] er de numrene som er trukket ut av teksten.
 * Tom liste = ingen nummer i beskrivelsen.""")

    ikke_funnet = sum(1 for r in rapporter if r["status"] == "ikke_funnet")
    skriv(data, "rapporter.ts", "D_RAPPORTER", rapporter, felles_tekst + f"""
 *
 * Rapportene er funnet fra punktene og ut, ikke fra registeret og inn.
 *
 *   1. Les rapportnummeret ut av beskrivelsesfeltet på stasjonene i Vannmiljø.
 *      {antall_referert} numre er navngitt av punktene her.
 *   2. Slå nummeret opp i utgiverens egen serie i Nasjonalt vitenarkiv
 *      ({', '.join(getattr(omr, 'SERIER', []))}, hele serien paginert ned).
 *   3. Ta rapporten med bare hvis nummeret stemmer eksakt.
 *
 * Ingen rapport er funnet på annet vis. Vi søker ikke på stedsnavn, årstall eller
 * oppdragsgiver: et treff på stedsnavnet i en tittel er ikke det samme som rapporten
 * bak en måling.
 *
 * {len(rapporter) - ikke_funnet} av de {antall_referert} numrene lot seg slå opp.
 * {ikke_funnet} står med status «ikke_funnet»: punktene navngir dem, registeret
 * har dem ikke. Det er ikke en mangel i søket, det er svaret.
 *
 * Tittel, år, rapportnummer, forfattere, sidetall og sammendrag er registerets egne
 * felt. Sammendraget er rapportens eget. noekkelfunn er setninger derfra, kortet ned.
 * {tekst.get('rapporter', '')}""")

    skriv(data, "samlet.ts", "D_SAMLET", getattr(omr, "SAMLET", {}), felles_tekst + """
 *
 * Sammenstillingen bygger på sammendragene i rapportene over, på tiltaksstatusen i
 * Grunnforurensning og på måledataene i Vannmiljø. Hver påstand kan følges tilbake
 * til en navngitt rapport.""")

    skriv(data, "kilder.ts", "D_KILDER", kilder, felles_tekst + """
 *
 * Kildene er registrerte lokaliteter i Grunnforurensning innenfor samme utsnitt som
 * stasjonene, pluss kilder som bare er navngitt i rapport. Posisjon, påvirkningsgrad,
 * bransje og saksstatus kommer fra Grunnforurensning; belegg og poeng er satt etter
 * hva slags bevis som finnes: dokumentert konklusjon i fagrapport veier tyngst, ren
 * registeroppføring minst. stoffer[] er bransjesignatur fra M-350 Tabell X-1 der ingen
 * måling knytter lokaliteten til sedimentet — det står i grunnlagsteksten hvilken av
 * delene det er.
 *
 * koblet[] er stasjonene kilden faktisk kan knyttes til. """ + tekst.get("kilder", ""))

    skriv(data, "kildetyper.ts", "D_KILDETYPER", typer, felles_tekst)
    skriv(data, "stoff.ts", "D_STOFF", stoff, felles_tekst + """
 *
 * Ett innslag per stoff som har grenseverdi i M-608 og er målt i marint sediment her.
 * n, maks og median er regnet av de faktiske målingene (bare operator «=»).
 * status følger M-409 § 3.4.1 — se D_HOTSPOT.regel.""")
    skriv(data, "flyt.ts", "D_FLYT", flyt, felles_tekst + """
 *
 * Lenker fra stoff til kilde. En lenke finnes bare der kilden faktisk er ført opp med
 * stoffet — enten fordi en rapport navngir sammenhengen, eller fordi M-350 Tabell X-1
 * fører bransjen opp med stoffet. """ + tekst.get("flyt", ""))
    skriv(data, "hotspot.ts", "D_HOTSPOT", hotspot, felles_tekst)
    skriv(data, "tiltak.ts", "D_TILTAK", tiltak, felles_tekst + """
 *
 * resultat er regnet ut av målingene på tiltakspunktene, ikke hentet fra en
 * oppfølgingsrapport. punkter[] er stasjonene som bærer tiltakets beskrivelse i
 * Vannmiljø. """ + tekst.get("tiltak", ""))

    skriv(data, "hendelser.ts", "D_HENDELSER", hendelser, felles_tekst + """
 *
 * Tidsaksen. Hver hendelse peker på en rapport, et tiltak eller en kilde i datasettet.""")
    skriv(data, "geografi.ts", "D_GEOGRAFI", geografi, felles_tekst)

    io.open(os.path.join(data, "index.ts"), "w", encoding="utf-8",
            newline="\n").write(INDEKS.format())

    print("\nOppsummering")
    print(f"  stasjoner      {len(stasjoner)}")
    print(f"  undersøkelser  {len(undersokelser)}")
    print(f"  rapporter      {len(rapporter)} "
          f"({sum(1 for r in rapporter if r['status'] == 'lest')} med sammendrag, "
          f"{ikke_funnet} ikke funnet)")
    print(f"  kilder         {len(kilder)}")
    print(f"  tiltak         {len(tiltak)}")
    print(f"  stoffer        {len(stoff)}  hotspot: "
          f"{sum(1 for s in stoff if s['status'] == 'hotspot')}")
    print(f"  tidsrom        {aar_min}–{aar_maks}")
    print(f"  skrevet til    src/data/{o['id']}/")


if __name__ == "__main__":
    sys.exit(main(sys.argv[1] if len(sys.argv) > 1 else "vikkilen"))
