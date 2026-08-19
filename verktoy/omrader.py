"""omrader.py — områdene flaten kan vise.

Ett oppslag per område. Alt annet i rørledningen er likt: samme uttrekk fra
Vannmiljø, samme oppslag i Grunnforurensning, samme regel for å finne rapporter
(punktet navngir rapportnummeret, nummeret slås opp i en rapportserie i Nasjonalt
vitenarkiv, eksakt treff eller ingenting).

bbox er rammen flaten dekker. Vi henter litt videre enn den og beskjærer i
byggingen, så rammen kan justeres uten å hente på nytt.
"""

OMRADER = {
    "vikkilen": {
        "id": "vikkilen",
        "navn": "Vikkilen",
        "kommune": "Grimstad",
        "undertittel": "TBT fra verftet AS Nymo — kartlagt 2004, tiltak i 2016, fulgt opp til 2024",
        "senter": (58.3551, 8.6110),
        "radius_km": 4.0,
        # Rammen er tegnet for hånd på kartet. Sørkanten ligger så vidt lavere enn
        # den tegnede for å få med Groosefjorden — den og Grooseholmen er de to
        # punktene som navngir NIVA 3622 og 6939.
        "bbox": {"v": 8.575, "o": 8.635, "s": 58.317, "n": 58.368},
        # Rapportseriene punktene her viser til.
        "serier": ["NIVA-rapport"],
    },
    "bjorvika": {
        "id": "bjorvika",
        "navn": "Bjørvika",
        "kommune": "Oslo",
        "undertittel": ("Fire tiltak i havnebassenget — mudring, tildekking med leire og "
                        "kontroll. Alle åtte rapportene punktene navngir, mangler i arkivet"),
        "senter": (59.9020, 10.7430),
        "radius_km": 3.0,
        # Rammen ligger i omrade_bjorvika.py, sammen med begrunnelsen for den.
        # Her henter vi litt videre enn den og beskjærer i byggingen.
        "serier": ["NIVA-rapport", "NGI-rapport"],
    },
}


def hent(omrade_id):
    if omrade_id not in OMRADER:
        raise SystemExit(f"ukjent område: {omrade_id}. Velg blant {', '.join(OMRADER)}")
    return OMRADER[omrade_id]
