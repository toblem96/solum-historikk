"""felles.py — det som er likt for alle områder.

Kolonnene i Vannmiljøs faktaark-eksport, oversettelsen til M-608-nøkler,
klassifiseringen og de små hjelpefunksjonene. Ingenting her vet hvilket område
som bygges — områdets egne tabeller ligger i omrade_<id>.py, og selve
rørledningen i bygg_omrade.py.

Regler som er brukt:

  Klassifisering   M-608 (rev. 2020, tabell 3.3) for marint sediment. Båndene
                   leses ut av src/data/m608.ts, så det finnes bare én kopi av
                   dem. Bare parametere som har grenseverdi i M-608 klassifiseres.

  Måleverdier      Bare målinger med operator «=» klassifiseres. Verdier oppgitt
                   som «<» (under deteksjonsgrensen) telles for seg og brukes
                   ikke til å sette klasse — deteksjonsgrensen er ikke en måling.

  Hotspot          M-409 § 3.3 og § 3.4.1. Trinn 1 er M-608s grense mellom
                   klasse II og III, unntatt TBT der den forvaltningsbaserte
                   grensen på 35 µg/kg gjelder.
"""

import html
import io
import json
import math
import os
import re

HER = os.path.dirname(os.path.abspath(__file__))
INN_ROT = os.path.join(HER, "hentet")
DATA_ROT = os.path.join(os.path.dirname(HER), "src", "data")
FIGURMAPPE = os.path.join(os.path.dirname(HER), "public", "figurer")

# ── kolonner i faktaark-eksporten ────────────────────────────────────────────
C_KODE, C_NAVN, C_BETEGN, C_AKTIVITET = 0, 1, 2, 3
C_GIVER, C_TAKER = 4, 5
C_PARAM = 7
C_MEDIUM = 9
C_TID = 13
C_OPERATOR, C_VERDI = 16, 17
C_ENHET = 19

# Vannmiljøs parameternavn -> M-608-nøkkel. Bare disse har grenseverdi i M-608.
TIL_M608 = {
    "Arsen": "As", "Bly": "Pb", "Kadmium": "Cd", "Kobber": "Cu", "Krom": "Cr",
    "Kvikksølv": "Hg", "Nikkel": "Ni", "Sink": "Zn",
    "Naftalen": "Naftalen", "Antracen": "Antracen", "Fenantren": "Fenantren",
    "Fluoranten": "Fluoranten", "Pyren": "Pyren",
    "Benzo[a]antracen": "BaA", "Benzo[a]pyren": "BaP",
    "Sum PAH16 (USEPA)": "PAH16", "Sum PCB7": "PCB7",
    "Tributyltinn kation (TBT)": "TBT",
}

# M-409 § 3.3: forvaltningsbasert Trinn 1-grense for TBT.
TRINN1_TBT = 35.0

def rydd_nummer(n):
    """Nummeret uten skilletegn på slutten. Tom streng hvis det ikke er et nummer."""
    n = re.sub(r"[.,;:)\]]+$", "", (n or "").strip())
    return n if re.search(r"\d", n) else ""


AARSUFFIKS = re.compile(r"^(\d{3,6})-(?:19|20)\d{2}$")


def kanonisk_nummer(n):
    """Samme rapport, samme nummer.

    NIVA skriver 5040 som «OR-5040» og «5040-2005»; begge er rapport 5040. NGIs
    numre har ikke den formen — «1060036-005» og «20051785-00-472» er egne
    rapporter og røres ikke. Regelen treffer bare et firesifret årstall til slutt.
    """
    if n.upper().startswith("OR-"):
        n = n[3:]
    m = AARSUFFIKS.match(n)
    return m.group(1) if m else n


def nummernokler(n):
    """Nøklene et rapportnummer kan slås opp under.

    Bare nummeret selv og den kanoniske formen. Vi korter aldri ned et nummer for
    å få treff — «20051785-00-529-R» skal ikke kunne finne «20051785-00-472».
    """
    k = kanonisk_nummer(n)
    return [n] if k == n else [n, k]


def les_ts(navn):
    """Leser JSON-literalen ut av en generert .ts-fil."""
    s = io.open(os.path.join(DATA_ROT, navn), encoding="utf-8").read()
    i = s.index("=", s.index("export const"))
    return json.loads(s[i + 1:].strip().rstrip(";"))


def rader(sti):
    s = io.open(sti, encoding="utf-8", errors="replace").read()
    ut = []
    for r in re.findall(r"<tr>(.*?)</tr>", s, re.S):
        c = [html.unescape(re.sub("<[^>]+>", "", x)).strip()
             for x in re.findall(r"<td[^>]*>(.*?)</td>", r, re.S)]
        if len(c) >= 22:
            ut.append(c)
    return ut


def aar_av(t):
    y = t.split("/")[-1][:4] if "/" in t else t[:4]
    return int(y) if y.isdigit() else None


def tall(s):
    try:
        return float(s.replace(",", "."))
    except ValueError:
        return None


def avstand_km(a_lat, a_lng, b_lat, b_lng):
    dy = (a_lat - b_lat) * 111.0
    dx = (a_lng - b_lng) * 111.0 * math.cos(math.radians((a_lat + b_lat) / 2))
    return math.hypot(dx, dy)


# ── klassifisering ───────────────────────────────────────────────────────────

M608 = les_ts("m608.ts")
PARAM = {p["noekkel"]: p for p in M608["parametere"]}


def klasse_av(noekkel, verdi):
    p = PARAM[noekkel]
    for b in p["baand"]:
        if verdi <= b["ovre"]:
            return b["niva"]
    return 5


def trinn1(noekkel):
    """Trinn 1 = grensen mellom klasse II og III. TBT har egen forvaltningsgrense."""
    if noekkel == "TBT":
        return TRINN1_TBT
    for b in PARAM[noekkel]["baand"]:
        if b["niva"] == 2:
            return float(b["ovre"])
    return None


def grense_iii_iv(noekkel):
    for b in PARAM[noekkel]["baand"]:
        if b["niva"] == 3:
            return float(b["ovre"])
    return None
