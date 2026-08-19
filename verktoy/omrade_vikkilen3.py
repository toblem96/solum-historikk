"""omrade_vikkilen3.py — Vikkilen sett gjennom aktørene.

Samme sted, samme registre, samme rapporter og samme referanseregel som
omrade_vikkilen2.py. Det eneste som er annerledes, er hva flaten organiserer
etter: ikke tid, ikke rapporter, men hvem som gjorde hva og på hvems regning.

Modulen legger ikke til data. Aktørene utledes av registrene i bygg_omrade.py
og skrives til aktorer.ts for alle områder — denne fila finnes bare for at
oppsettet skal kunne stå som en egen fane ved siden av de andre.
"""

from omrade_vikkilen2 import (  # noqa: F401
    AKTOR_ALIAS, BBOX, GIVER_ALIAS, HISTORIE, INN, KILDEOPPSETT, KILDETYPE_M350,
    PDF_ER, RAPPORTOPPSETT, SERIER, SITAT_HOPP, STEDSNAVN, STEDSNAVN_ALIAS,
    TEKSTER, TILTAK, beriker, ekstra_stasjoner, historietall, hotspot_tittel,
    innenfor, kilde_punkter, verste_for_kilde,
)
