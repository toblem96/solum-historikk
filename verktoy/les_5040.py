"""les_5040.py — leser NIVA-rapport 5040-2005 rett ut av PDF-en.

Dette er den ene av de fire rapportene vi har selve dokumentet til. Det lå bak en
signert nedlastingslenke fra Nasjonalt vitenarkiv og ligger nå i hentet/.

Fire ting hentes ut:

  feltstasjoner  Vedlegg A (trykt s. 25-26): 28 stasjoner med posisjon, dyp, lukt,
                 farge, tekstur og merknad. 15 av dem finnes igjen i Vannmiljø —
                 koordinatene der stammer fra denne rapporten og stemmer på
                 meteren. De 13 øvrige finnes ingen andre steder.

  punktverdier   Vedlegg B (trykt s. 27-30): tørrstoff og metaller, PCB, PAH,
                 tinnorganiske forbindelser og olje for de 13 stasjonene som er
                 analysert kjemisk.

  spredning      Tabell 5 (trykt s. 21): beregnet TBT-transport per areal for
                 skipsoppvirvling, diffusjon og opptak i organismer, pluss
                 mekanismene rapporten navngir. Rapporten har ingen strømmålinger
                 — dette er det den sier om hvordan forurensningen flytter seg.

  kildeutsagn    Setningene i kapittel 5.2 som navngir kildene.

Alle sidetall som oppgis er rapportens trykte sidetall; PDF-sida ligger én høyere.
"""

import os
import re

# PDF-sideindeks (0-basert) -> trykt side er én lavere enn indeks + 2
S_VEDLEGG_A = (25, 26)
S_METALL = 27
S_PCB = 28
S_ORG = 30
S_SPREDNING = 21

TRYKT = {"vedleggA": 25, "metall": 27, "pcb": 28, "org": 30, "spredning": 21}

KOL_METALL = ["Prøvedyp", "Vanndyp", "GPS-N", "GPS-E", "Tatt", "TS %", "KORN<63µm",
              "TOC", "Cd", "Cu", "Hg", "Pb", "Zn"]
KOL_PCB = ["CB52", "CB101", "CB118", "CB153", "CB138", "CB180", "PCB7",
           "PCB7 (Seven Dutch)", "NAP", "ACNLE", "ACNE", "FLE"]
KOL_ORG = ["Sum KPAH", "PAH (SFT)", "Sum NPD", "MBT", "DBT", "TBT",
           "MPhT", "DPhT", "TPhT", "Olje"]

# Rekkefølgen styrer hvilke kolonner rapportpanelet viser først. TBT står fremst
# fordi det er stoffet rapporten selv peker ut som hovedproblemet.
PUNKTFELT = [("TBT", "µg/kg"), ("PAH (SFT)", "µg/kg"), ("Cu", "mg/kg"),
             ("Pb", "mg/kg"), ("Zn", "mg/kg"), ("Cd", "mg/kg"), ("Hg", "mg/kg"),
             ("PCB7", "µg/kg"), ("Olje", "µg/g"), ("TS %", "%")]


def _grader(t):
    """«58 21,086» -> 58.35143. Grader og desimalminutter, slik rapporten skriver det."""
    m = re.fullmatch(r"(\d+)\s+(\d+),(\d+)", (t or "").strip())
    if not m:
        return None
    return round(int(m.group(1)) + float(m.group(2) + "." + m.group(3)) / 60, 5)


def _blokker(side, minst):
    """Verdiene som følger hver «St. N» på sida — første forekomst per stasjon.

    Kjerneprøvene gjentar stasjonsnavnet med færre kolonner; de siles bort av
    minstekravet til antall verdier.
    """
    linjer = [l.strip() for l in side.get_text().splitlines() if l.strip()]
    ut, i = {}, 0
    while i < len(linjer):
        m = re.fullmatch(r"St\.?\s*(\d{1,2})", linjer[i])
        if not m:
            i += 1
            continue
        nr, j, v = int(m.group(1)), i + 1, []
        while j < len(linjer) and not re.fullmatch(r"St\.?\s*\d{1,2}", linjer[j]):
            v.append(linjer[j])
            j += 1
        if nr not in ut and len(v) >= minst:
            ut[nr] = v
        i = j
    return ut


def les(sti):
    """Alt vi trenger fra rapporten. Returnerer None hvis PDF-en eller pymupdf mangler."""
    if not os.path.exists(sti):
        return None
    try:
        import pymupdf
    except ImportError:
        return None
    d = pymupdf.open(sti)

    felt = {}
    for pn in S_VEDLEGG_A:
        for t in d[pn].find_tables().tables:
            for rad in t.extract():
                nr = (rad[0] or "").strip()
                if not re.fullmatch(r"\d{1,2}", nr):
                    continue
                r = ["" if c is None else " ".join(c.split()) for c in rad]
                felt[int(nr)] = {
                    "nr": int(nr), "dypFM": r[1], "dyp": r[2],
                    "lat": _grader(r[3]), "lng": _grader(r[4]),
                    "posisjonTekst": (r[3] + " N, " + r[4] + " Ø").strip(),
                    "lukt": r[5], "farge": r[6], "tekstur": r[7], "merknad": r[8],
                }

    metall = {n: dict(zip(KOL_METALL, v)) for n, v in _blokker(d[S_METALL], 13).items()}
    pcb = {n: dict(zip(KOL_PCB, v)) for n, v in _blokker(d[S_PCB], 12).items()}
    org = {n: dict(zip(KOL_ORG, v)) for n, v in _blokker(d[S_ORG], 9).items()}
    verdier = {n: {**metall.get(n, {}), **pcb.get(n, {}), **org.get(n, {})}
               for n in set(metall) | set(pcb) | set(org)}

    spredning = []
    for t in d[S_SPREDNING].find_tables().tables:
        for rad in t.extract():
            r = ["" if c is None else " ".join(c.split()) for c in rad]
            if len(r) < 6 or not r[1] or "x" not in r[1]:
                continue
            spredning.append({
                "omrade": r[0], "areal": r[1], "sedimentTBT": r[2],
                "skipsoppvirvling": r[3], "diffusjon": r[4], "viaOrganismer": r[5],
            })

    return {"felt": felt, "verdier": verdier, "spredning": spredning, "trykt": TRYKT}


def feltbeskrivelse(f):
    """Feltnotatet som én setning, slik det står i vedlegg A."""
    bit = []
    if f["dyp"]:
        bit.append(f'{f["dyp"]} m dyp')
    if f["tekstur"]:
        bit.append(f["tekstur"].lower())
    if f["farge"]:
        bit.append("farge: " + f["farge"].lower())
    if f["lukt"]:
        bit.append("lukt: " + f["lukt"].lower())
    if f["merknad"]:
        bit.append(f["merknad"])
    return ". ".join(bit).strip().rstrip(".") + "." if bit else ""
