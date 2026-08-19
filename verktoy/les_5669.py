"""les_5669.py — leser NIVA-rapport 5669-2008 rett ut av PDF-en.

Rapporten har tre tabeller med overflatesedimentdata, alle i kapittel 4.1. Hver
rad er merket med en bokstav som sier hvilken undersøkelse prøven kommer fra:

  A n   prøvene fra 2004 — de er 5040-rapportens egne, gjengitt her for
        sammenligning. De hører til r-niva5040 og tas ikke med her.
  B n   prøvene fra 2008 — rapportens egne.
  C n   tre prøver tatt av entreprenørfirmaet AF i 2007. De finnes ikke i
        Vannmiljø; rapporten er eneste kilde til dem. Merk at rapporten merker
        dem C 41–43 i tabell 2 og 3, men C 1–3 i tabell 4. Det er de samme tre
        prøvene — samme antall, samme prøvedyp, samme rekkefølge — og de slås
        sammen her. Det er en normalisering, ikke noe rapporten sier selv.

Tabellene ligger på trykt side 22, 23 og 24 (PDF-side 23, 24 og 25):

  Tabell 2  tørrstoff, korn < 63 µm, TOC og tungmetaller
  Tabell 3  sum PCB7, sum PAH16, sum PAH, sum KPAH, sum NPD
  Tabell 4  tinnorganiske forbindelser (MBT, DBT, TBT, MPhT, DPhT, TPhT)

Noen verdier står med «s» foran. Rapporten forklarer ikke tegnet; verdiene er
gjengitt slik de står.
"""

import os
import re

S_METALL, S_ORGANISK, S_TINN = 22, 23, 24
TRYKT = {"metall": 22, "organisk": 23, "tinn": 24}

KOL_METALL = ["Prøvedyp", "TS %", "KORN<63µm", "TOC", "Cd", "Cu", "Hg", "Pb", "Zn"]
KOL_ORGANISK = ["Prøvedyp", "PCB7", "PAH16", "Sum PAH", "Sum KPAH", "Sum NPD"]
KOL_TINN = ["Prøvedyp", "MBT", "DBT", "TBT", "MPhT", "DPhT", "TPhT"]

# Rekkefølgen styrer hvilke kolonner rapportpanelet viser først.
PUNKTFELT = [("TBT", "µg/kg"), ("PAH16", "µg/kg"), ("Cu", "mg/kg"), ("Pb", "mg/kg"),
             ("Zn", "mg/kg"), ("Cd", "mg/kg"), ("Hg", "mg/kg"), ("PCB7", "µg/kg"),
             ("TOC", "mg/g"), ("TS %", "%")]

RAD = re.compile(r"^([ABC])\s*(\d{1,2})$")


def _tabell(side, kolonner):
    """Radene på sida: «B 30» etterfulgt av verdiene, i kolonnerekkefølge."""
    linjer = [l.strip() for l in side.get_text().splitlines() if l.strip()]
    ut, i = {}, 0
    while i < len(linjer):
        m = RAD.match(linjer[i])
        if not m:
            i += 1
            continue
        nokkel = f"{m.group(1)} {int(m.group(2))}"
        j, v = i + 1, []
        while j < len(linjer) and not RAD.match(linjer[j]):
            v.append(linjer[j])
            j += 1
        if nokkel not in ut:
            ut[nokkel] = dict(zip(kolonner, v))
        i = j
    return ut


def les(sti):
    if not os.path.exists(sti):
        return None
    try:
        import pymupdf
    except ImportError:
        return None
    d = pymupdf.open(sti)
    met = _tabell(d[S_METALL], KOL_METALL)
    org = _tabell(d[S_ORGANISK], KOL_ORGANISK)
    tinn = _tabell(d[S_TINN], KOL_TINN)
    # C 41-43 i tabell 2 og 3 er de samme prøvene som C 1-3 i tabell 4.
    def normaliser(d_):
        ut = {}
        for k, v in d_.items():
            b, n = k.split()
            if b == "C" and int(n) >= 41:
                k = f"C {int(n) - 40}"
            ut[k] = v
        return ut

    met, org, tinn = normaliser(met), normaliser(org), normaliser(tinn)
    rader = {}
    for k in set(met) | set(org) | set(tinn):
        rader[k] = {**met.get(k, {}), **org.get(k, {}), **tinn.get(k, {})}
    return {"rader": rader, "trykt": TRYKT}


def til_vannmiljonavn(nokkel, finnes):
    """«B 30» -> «Vikkilen 30», «B 5» -> «Vikkilen B05V». C-radene har ingen."""
    bokstav, nr = nokkel.split()
    if bokstav == "A":
        kandidat = f"Vikkilen {int(nr)}"
        return kandidat if kandidat in finnes else None
    if bokstav == "B":
        # B-merkingen er rapportens egen. B 1 er stasjonen Vannmiljø kaller
        # «Vikkilen B01» — ikke «Vikkilen 1», som er en 2004-stasjon. Derfor må
        # B-navnene prøves først.
        for kandidat in (f"Vikkilen B{int(nr):02d}", f"Vikkilen B{int(nr):02d}V",
                         f"Vikkilen B{int(nr)}", f"Vikkilen {int(nr)}"):
            if kandidat in finnes:
                return kandidat
        return None
    return None
