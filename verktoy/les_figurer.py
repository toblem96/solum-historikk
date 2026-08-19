"""les_figurer.py — henter figurer ut av rapport-PDF-ene.

Figurene ligger som innebygde bilder i PDF-en, og figurteksten står som vanlig
tekst på samme side. Vi parer dem i rekkefølge: er det like mange bilder som
figurtekster på sida, hører det n-te bildet til den n-te teksten. Er det ikke
det, får bildene den første teksten på sida, og det står i beskrivelsen at
paringen er usikker.

Små bilder siles bort — logoer, linjer og dekor er typisk under 200 piksler på
den korteste kanten eller under 12 kB. Flere av PDF-ene legger samme figur inn to
ganger, så bildene dedupliseres på innhold.

Utvalget prioriterer det som sier noe om hvor og hvor mye: stasjonskart først,
så konsentrasjonsfigurer, så resten.
"""

import hashlib
import os
import re


# Figurer som er verdt plassen, i prioritert rekkefølge.
VEKT = [
    (re.compile(r"kart over|stasjonsplassering|lokaliteter for|beliggenhet", re.I), 0),
    (re.compile(r"konsentrasjon", re.I), 1),
    (re.compile(r"fordeling|nivå", re.I), 2),
]


def _vekt(tekst):
    for m, v in VEKT:
        if m.search(tekst):
            return v
    return 9


FIGURTEKST = re.compile(r"^(Figur\s+\d+[.:]?\s*.*)$", re.M)
MIN_KANT = 200
MIN_BYTES = 12_000

# Formater nettleseren viser direkte. Alt annet — typisk JPEG 2000 fra skannede
# rapporter — konverteres til PNG, ellers blir figuren bare et tomt felt.
WEBFORMAT = {"png", "jpeg", "jpg", "gif", "webp"}


def _tekster(side):
    t = side.get_text()
    ut = []
    for m in FIGURTEKST.finditer(t):
        linje = " ".join(m.group(1).split())
        if len(linje) > 12:
            ut.append(linje)
    return ut


def hent(sti, rapportnr, utmappe, maks=4):
    """Skriver figurene til utmappe og returnerer figurpostene, prioritert."""
    if not os.path.exists(sti):
        return []
    try:
        import pymupdf
    except ImportError:
        return []
    d = pymupdf.open(sti)
    os.makedirs(utmappe, exist_ok=True)
    ut, sett = [], set()
    for pn in range(d.page_count):
        side = d[pn]
        bilder = side.get_images(full=True)
        if not bilder:
            continue
        tekster = _tekster(side)
        if not tekster:
            continue
        gode = []
        for x in bilder:
            info = d.extract_image(x[0])
            if min(info["width"], info["height"]) < MIN_KANT:
                continue
            if len(info["image"]) < MIN_BYTES:
                continue
            sum_ = hashlib.sha1(info["image"]).hexdigest()
            if sum_ in sett:
                continue
            sett.add(sum_)
            gode.append(info)
        if not gode:
            continue
        sikker = len(gode) == len(tekster)
        for i, info in enumerate(gode):
            tekst = tekster[i] if sikker else teksters_forste(tekster)
            ext = info["ext"] if info["ext"] in WEBFORMAT else "png"
            navn = f"niva-{rapportnr}-s{pn + 1}-{i + 1}.{ext}"
            tittel = tekst.split(".")[0] if "." in tekst[:12] else tekst[:40]
            ut.append({
                "fil": f"figurer/{navn}",
                "tittel": tittel.strip(),
                "side": pn + 1,
                "beskrivelse": tekst + ("" if sikker else
                                        " (Sida har flere bilder enn figurtekster — "
                                        "paringen mellom bilde og tekst er usikker.)"),
                "_vekt": _vekt(tekst),
                "_bytes": info["image"],
                "_xref": x[0],
            })

    # Flere PDF-er deler én figur i et bunnbilde og et overlegg. De havner på
    # samme side med samme figurtekst; da beholder vi bare det største.
    beste = {}
    for f in ut:
        n = (f["side"], f["tittel"])
        if n not in beste or len(f["_bytes"]) > len(beste[n]["_bytes"]):
            beste[n] = f
    ut = list(beste.values())

    ut.sort(key=lambda f: (f["_vekt"], f["side"]))
    valgt = ut[:maks]
    for f in valgt:
        sti_ut = os.path.join(utmappe, os.path.basename(f["fil"]))
        raa = f.pop("_bytes")
        xref = f.pop("_xref")
        if f["fil"].endswith(".png") and not raa.startswith(bytes([137, 80, 78, 71])):
            # ikke et PNG fra før — tegn det om via pixmap
            pm = pymupdf.Pixmap(d, xref)
            if pm.colorspace and pm.colorspace.n > 3:
                pm = pymupdf.Pixmap(pymupdf.csRGB, pm)
            pm.save(sti_ut)
        else:
            with open(sti_ut, "wb") as fp:
                fp.write(raa)
        f.pop("_vekt")
    return valgt


def teksters_forste(tekster):
    return tekster[0]
