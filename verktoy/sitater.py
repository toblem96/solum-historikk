"""sitater.py — leser referanselistene i PDF-ene og bygger sitatgrafen.

Regelen for hvilke rapporter som er relevante for et område, kan utvides ett
hakk uten å slippe gjetting inn: en rapport er også relevant hvis den **siterer
eller siteres av** en rapport et målepunkt navngir. Da må sitatet være et faktum,
ikke en antakelse — og derfor leses det her ut av PDF-ene selv, ikke skrevet inn
for hånd.

Gangen:

  1. Finn referanselista i PDF-en. Overskriften «Referanser» eller «Litteratur»
     står også i innholdsfortegnelsen, så vi tar den siste forekomsten som ikke
     har et sidetall rett etter seg.
  2. Trekk ut NIVA-rapportnumre av lista. NIVA skriver dem på et halvt dusin
     måter — «NIVA-rapport nr. 2194», «NIVA rapport l.nr. 5669-2008»,
     «NIVA rapport nr. 3622/97» — og alle er samme nummer.
  3. Dokumentets eget nummer står i sidehodet på hver side og filtreres bort.

Resultatet er en liste med kanter: (fra, til, side, sitat). «sitat» er linja
rapporten faktisk står på, slik at påstanden kan etterprøves uten å åpne PDF-en.

Rapporter uten tekstlag leses fra OCR-teksten i hentet/ocr/ hvis den finnes.
"""

import io
import os
import re

HER = os.path.dirname(os.path.abspath(__file__))

# Overskriften på referanselista. Tallet foran er kapittelnummeret.
OVERSKRIFT = re.compile(
    r"^\s*(?:\d+\.?\s*)?(?:REFERANSER|Referanser|LITTERATUR|Litteratur|"
    r"REFERENCES|References)\s*$", re.M)

# Et NIVA-rapportnummer, slik NIVA selv skriver det i referanselister.
#
# Enten ordet «rapport» eller et «nr»-merke må stå der. Uten det kravet fanger
# mønsteret årstall: NIVA 6272 siterer NIVA 5669 som «NIVA 2008. Miljøtekniske
# undersøkelser ved Nymo as i Vikkilen» — forfatter og år, ikke rapportnummer.
NIVA_NR = re.compile(
    r"NIVA[\s.\-]*(?:"
    r"(?:rapport|report)[\s.:]*(?:l\.?\s*nr\.?|nr\.?|no\.?)?"
    r"|(?:l\.?\s*nr\.?|nr\.?|no\.?)"
    r")[\s.:]*(\d{3,4})\b", re.I)

# «l.nr. 6360-2012» uten NIVA foran — brukes når instituttet er nevnt tidligere
# i samme referanse.
LOPENR = re.compile(r"\bl\.?\s*nr\.?\s*(\d{3,4})\b", re.I)

# NIVAs skrivemåte på 1980-tallet: prosjektnummer skråstrek løpenummer, som
# «0-81112/1815. Niva, Oslo. 28 s.» Rapportnummeret er tallet etter skråstreken.
# Bare relevant for de to skannede rapportene fra 1986.
GAMMEL_NR = re.compile(r"\b[O0][\s.\-]?\d{5}\s*/\s*(\d{4})\b")


def _sider(sti):
    """Teksten side for side. Faller tilbake på OCR for rene skann."""
    import pymupdf
    d = pymupdf.open(sti)
    sider = [d[p].get_text() for p in range(d.page_count)]
    if sum(len(t) for t in sider) / max(1, len(sider)) < 60:
        nummer = os.path.basename(sti).split("_")[0].split("-")[0]
        ocr_fil = os.path.join(HER, "hentet", "ocr", f"{nummer}.txt")
        if os.path.exists(ocr_fil):
            tekst = io.open(ocr_fil, encoding="utf-8").read()
            sider = re.split(r"=====\s*side\s*\d+\s*=====", tekst)[1:] or sider
    return sider


def _referansestart(sider):
    """Sida referanselista begynner på.

    Overskriften står flere steder: i innholdsfortegnelsen, over selve lista, og
    — i de eldste rapportene — i sidehodet på hver eneste side i lista. Å ta den
    siste forekomsten treffer da siste side, ikke første. Vi tar i stedet første
    side i den siste sammenhengende rekka av treff: innholdsfortegnelsen står
    alene tidlig, referanselista henger sammen.
    """
    treff = [p for p, t in enumerate(sider) if OVERSKRIFT.search(t)]
    if not treff:
        return None
    start = treff[-1]
    for p in reversed(treff[:-1]):
        if start - p <= 1:
            start = p
        else:
            break
    return start


def _numre(tekst, egen):
    """Rapportnumrene i teksten, med linja de står på."""
    ut = {}
    for linje in tekst.splitlines():
        for m in (list(NIVA_NR.finditer(linje)) + list(LOPENR.finditer(linje))
                  + list(GAMMEL_NR.finditer(linje))):
            nr = m.group(1)
            if nr == egen:
                continue
            ut.setdefault(nr, " ".join(linje.split())[:220])
    return ut


def les(sti, eget_nummer):
    """Rapportene denne PDF-en siterer.

    Returnerer {nummer: {"side": trykt sideindeks, "sitat": linja, "iListe": bool}}.
    Numre som bare står i løpende tekst, får iListe=False — de er ekte
    henvisninger, men svakere belegg enn en oppføring i referanselista.
    """
    if not os.path.exists(sti):
        return {}
    sider = _sider(sti)
    start = _referansestart(sider)
    ut = {}
    for p, tekst in enumerate(sider):
        i_liste = start is not None and p >= start
        for nr, sitat in _numre(tekst, eget_nummer).items():
            if nr not in ut or (i_liste and not ut[nr]["iListe"]):
                ut[nr] = {"side": p + 1, "sitat": sitat, "iListe": i_liste}
    return ut


def graf(pdf_er):
    """Sitatgrafen for et sett PDF-er. {fra: {til: belegg}}"""
    return {nr: les(sti, nr) for nr, sti in pdf_er.items()}


if __name__ == "__main__":
    import sys

    inn = os.path.join(HER, "hentet")
    prov = {
        "3622": "3622_72dpi.pdf",
        "5040": "niva-5040-2005.pdf",
        "5669": "5669-2008_72dpi.pdf",
        "6939": "6939-2015_200dpi_revidert.pdf",
        "1919": "1919_200dpi.pdf",
        "1920": "1920_72dpi.pdf",
        "5670": "5670-2008_150dpi.pdf",
        "6608": "6608-2013_200dpi.pdf",
        "6688": "6688-2014_72dpi.pdf",
        "6272": "6272-2011_72dpi.pdf",
        "4473": "4473_200dpi.pdf",
    }
    sys.stdout.reconfigure(encoding="utf-8")
    for nr, fil in prov.items():
        t = les(os.path.join(inn, fil), nr)
        i_liste = sorted((k for k, v in t.items() if v["iListe"]), key=int)
        bare_tekst = sorted((k for k, v in t.items() if not v["iListe"]), key=int)
        print(f"NIVA {nr}: {len(i_liste)} i referanselista, {len(bare_tekst)} bare i tekst")
        print(f"   liste: {', '.join(i_liste)}")
        if bare_tekst:
            print(f"   tekst: {', '.join(bare_tekst)}")
