"""les_ekstrapunkter.py — punkter som står med posisjon i rapportene, men ikke i 5040.

NIVA 5040 er den eneste rapporten med en full stasjonsoversikt i vedlegg. To andre
rapporter gir likevel posisjoner, og de er hentet ut her:

  NIVA 6939, tabell 4 (s. 23)   strandsonestasjoner, GR-serien, WGS84 desimalgrader
  NIVA 6939, tabell 8 (s. 39)   bløtbunnsstasjoner, GS-serien, grader + desimalminutter
  NIVA 5669, vedlegg C (s. 74)  sledetrekk for innsamling av bunnorganismer, med
                                start- og stopposisjon og dyp

GS-stasjonene viser seg å være de samme som Vannmiljø har under navnene GS5 og GS6
— koordinatene stemmer på null meter. De er altså ikke nye punkter, men de knytter
rapporten til to punkter som ellers ikke navngir den.

Sledetrekkene er linjer, ikke punkter. De legges inn med startposisjonen, og både
start, stopp og dyp står i feltnotatet, slik at det går fram hva de er.
"""

import re

# Rapportens sidetall (trykt) for hver tabell.
TRYKT = {"6939_strandsone": 23, "6939_blotbunn": 39, "5669_slede": 74}

# PDF-sideindeks (0-basert)
S_6939_STRAND, S_6939_BLOT, S_5669_SLEDE = 24, 40, 74

RE_GR = re.compile(
    r"(GR\s?\d+)\s*(?:\(ny\))?\s+([A-ZÆØÅ][^0-9]{2,28}?)\s+(5[78][,.]\d{4,6})\s+([78][,.]\d{4,6})")
RE_GS = re.compile(
    r"(GS\s?\d+\w?)\s+(\w+)\s+(\d{1,3})\s+(5[78])\s+(\d{1,2}[.,]\d{1,3})\s*N\s*"
    r"([78])\s+(\d{1,2}[.,]\d{1,3})\s*E")
# Mellom Start, Stopp og Dyp står det punktum, så mønsteret må få krysse dem.
RE_SLEDE = re.compile(
    r"Start\s+(5[78])\s+(\d{1,2}[,.]\d{1,3})\s*N[;:,]?\s*([78])\s+(\d{1,2}[,.]\d{1,3})\s*E"
    r"[\s\S]{0,60}?Stopp\s+(5[78])\s+(\d{1,2}[,.]\d{1,3})\s*N[;:,]?\s*([78])\s+(\d{1,2}[,.]\d{1,3})\s*E"
    r"[\s\S]{0,60}?Dyp\s+([\d\s-]+?)\s*m")


def _gm(grad, minutt):
    return round(int(grad) + float(str(minutt).replace(",", ".")) / 60, 5)


def _flat(side):
    return " ".join(side.get_text().split())


def les(sti_6939, sti_5669):
    """Returnerer (strandsone, blotbunn, sledetrekk) — lister med rådata."""
    try:
        import pymupdf
    except ImportError:
        return [], [], []
    ut_strand, ut_blot, ut_slede = [], [], []

    import os
    if os.path.exists(sti_6939):
        d = pymupdf.open(sti_6939)
        for m in RE_GR.finditer(_flat(d[S_6939_STRAND])):
            ut_strand.append({
                "kode": m.group(1).replace(" ", ""),
                "navn": " ".join(m.group(2).split()),
                "lat": float(m.group(3).replace(",", ".")),
                "lng": float(m.group(4).replace(",", ".")),
            })
        for m in RE_GS.finditer(_flat(d[S_6939_BLOT])):
            ut_blot.append({
                "kode": m.group(1).replace(" ", ""),
                "omrade": m.group(2),
                "dyp": m.group(3),
                "lat": _gm(m.group(4), m.group(5)),
                "lng": _gm(m.group(6), m.group(7)),
            })

    if os.path.exists(sti_5669):
        d2 = pymupdf.open(sti_5669)
        for i, m in enumerate(RE_SLEDE.finditer(_flat(d2[S_5669_SLEDE])), start=1):
            ut_slede.append({
                "nr": i,
                "lat": _gm(m.group(1), m.group(2)),
                "lng": _gm(m.group(3), m.group(4)),
                "latStopp": _gm(m.group(5), m.group(6)),
                "lngStopp": _gm(m.group(7), m.group(8)),
                "dyp": " ".join(m.group(9).split()),
            })
    return ut_strand, ut_blot, ut_slede
