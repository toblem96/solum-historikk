"""omrade_bjorvika.py — det kuraterte laget for Bjørvika i Oslo.

Samme oppbygning som omrade_vikkilen.py, og samme regel: en rapport kommer bare
med hvis et målepunkt navngir nettopp den, og nummeret slås opp eksakt i
utgiverens egen serie i Nasjonalt vitenarkiv.

Her gir den regelen et helt annet svar enn i Vikkilen. De 176 punktene innenfor
rammen navngir åtte rapportnumre. Alle åtte er NGI-rapporter skrevet for Oslo
Havn, og ingen av dem finnes i NGIs serie i Nasjonalt vitenarkiv. Vi har altså
alle målingene fra mudringen, tildekkingen og etterkontrollen — og ingen av
rapportene som beskriver dem.

Det er ikke en mangel i søket. Det er svaret, og det er verdt å se ved siden av
Vikkilen, der fire av fire numre slo til.

Ingen PDF er lastet ned for dette området, så figurer[] og punkter[] er tomme
overalt.
"""

import os

from felles import INN_ROT

# Rammen er tegnet for hånd på kartet og dekker Bjørvika, Bispevika, Sørenga,
# Lohavn og Grønlia — havnebassenget innenfor Vippetangen, avgrenset i nord av
# jernbanen ved Oslo S og i sør av Grønlia.
#
# Utenfor faller resten av Oslo havn: Pipervika, Tjuvholmen, Akershuskaia,
# Hovedøya, Bekkelagsbassenget, Sjursøya og Kongshavn. Det har en konsekvens som
# er verdt å vite om: de seks NIVA-rapportene punktene i Oslo havn navngir —
# 3552, 4651, 4686, 5338, 5540 og 5569 — hører alle til punkter utenfor denne
# rammen. Innenfor står bare NGI-rapportene, og ingen av dem er i arkivet.
BBOX = {"v": 10.7405, "o": 10.7600, "s": 59.8962, "n": 59.9095}

# Punktene her viser til to utgivere. Begge seriene slås opp; hvilken som
# treffer, avgjør dataene. Her treffer ingen av dem.
SERIER = ["NIVA-rapport", "NGI-rapport"]

# Stedsnavnene geografien grupperes på — de som faktisk står i stasjonsnavnene.
STEDSNAVN = ["Bjørvika/Revier", "Bjørvika", "Bispevika", "Lohavn", "Sørenga",
             "Grønli", "Vippetangen", "Indre Oslofjord"]
STEDSNAVN_ALIAS = {"Bjørvika/Revier": "Revierkaia", "Grønli": "Grønlia",
                   "Indre Oslofjord": "Indre Oslofjord (referanse)"}

# Oslo Havn står oppført både som «Oslo Havn» og «Oslo Havn KF» i Vannmiljø.
# Det er samme oppdragsgiver.
GIVER_ALIAS = {"oslo havn": "Oslo Havn"}

# Navneformene aktørene står med i registrene, slått sammen. Første treff vinner.
# De opprinnelige formene beholdes i dataene, så sammenslåingen kan etterprøves.
AKTOR_ALIAS = [
    ("oslo havn", "Oslo Havn"),
    ("oslo kommune", "Oslo kommune"),
    ("secora", "Secora"),
    ("ramb", "Rambøll"),
    ("multiconsult", "Multiconsult"),
    ("statens vegvesen", "Statens vegvesen"),
    ("statsbygg", "Statsbygg"),
    ("selvaag", "Selvaagbygg"),
    ("norsk hydro", "Norsk Hydro"),
    ("niva", "NIVA"),
    ("ngi", "NGI"),
    ("ngu", "NGU"),
    ("sft", "SFT"),
    ("ikke oppgitt", "Ikke oppgitt"),
]

INN = os.path.join(INN_ROT, "bjorvika")

# Ingen PDF-er er hentet for dette området.
PDF_ER = {}

TEKSTER = {
    "tidsrom": (
        "Målingene her følger tiltakene, ikke en fast overvåking: to tette år og "
        "lange opphold. 2007 er tettest med 71 stasjoner — tildekkingen med leire og "
        "miljøkontrollen etter mudring — og 2011 nest tettest med 56, mudringen ved "
        "Revierkaia og de siste Ren Oslofjord-punktene. Mellom 2014 og 2018 er det "
        "ingen målinger i rammen i det hele tatt."),
    "rapporter": (
        "\n * Her er utfallet et annet enn i Vikkilen. Ingen av de åtte numrene lot seg\n"
        " * slå opp. Alle åtte er NGI-rapporter skrevet for Oslo Havn, og NGIs serie i\n"
        " * Nasjonalt vitenarkiv har 222 poster som i hovedsak er snøskredfaglige notater —\n"
        " * oppdragsrapportene for havna er ikke lagt inn der.\n"
        " *\n"
        " * Rapportene mangler altså ikke fordi vi lette for lite, men fordi de ikke er\n"
        " * publisert i et åpent arkiv. Målingene deres ligger likevel i Vannmiljø, og de\n"
        " * er tegnet i kartet.\n"
        " *\n"
        " * Ett punkt viser til «Oppdrag 1100501 ... Rambøll». Et oppdragsnummer er ikke et\n"
        " * rapportnummer og kan ikke slås opp i en rapportserie, så det faller utenfor\n"
        " * regelen."),
    "kilder": (
        "Her er den tom for alle: koblingen mellom kilde og punkt\n"
        " * krever en rapport som navngir sammenhengen, og ingen av rapportene punktene\n"
        " * viser til, finnes. Alle kildene står derfor som antatt — vi vet at de finnes i\n"
        " * Grunnforurensning, ikke at de har satt spor i disse målingene."),
    "flyt": (
        "Ingen lenke her hviler på en rapport. Alle går via M-350\n"
        " * Tabell X-1: bransjen lokaliteten er registrert med, føres opp med stoffet.\n"
        " * Derfor er hver eneste lenke stiplet."),
    "tiltak": (
        "Ingen av tiltakene peker på en rapport: alle numrene\n"
        " * punktene navngir, mangler i arkivet. Det som står om omfang, er hentet fra\n"
        " * beskrivelsesfeltet i Vannmiljø og fra Grunnforurensning, ikke fra en\n"
        " * tiltaksplan."),
}


def innenfor(lat, lng):
    b = BBOX
    return b["v"] <= lng <= b["o"] and b["s"] <= lat <= b["n"]


# ═════════════════════════════════════════════════════════════════════════════
#  KURATERT — tekst hentet ordrett eller sammenfattet fra navngitte kilder
# ═════════════════════════════════════════════════════════════════════════════

# Rapportnummer -> det vi legger oppå registerposten. Ingen av numrene her lot
# seg slå opp, så det finnes verken sammendrag eller forfattere å hente. Det
# eneste vi har, er hva punktene selv sier om rapporten — og det står i
# koblingsteksten, ordrett.
#
# aar er utelatt med vilje. NGIs prosjektnumre begynner med et årstall
# (20071396 -> 2007), men det er prosjektåret, ikke utgivelsesåret, og vi kan
# ikke slå det opp. Byggeskriptet plasserer i stedet rapporten på måleårene til
# punktene som navngir den.
RAPPORTOPPSETT = {
    "20051785-00-472": {
        "oppdragsgiver": "Oslo Havn",
        "tittel": "Ren Oslofjord — NGI-rapport 20051785-00-472",
        "koblingstekst": (
            "Seks stasjoner oppgir «Ren Oslofjord. NGI-rapport 20051785-00-472». Nummeret "
            "finnes ikke i NGI-serien i Nasjonalt vitenarkiv."),
    },
    "20051785-00-529-R": {
        "oppdragsgiver": "Oslo Havn",
        "tittel": "Ren Oslofjord — NGI-rapport 20051785-00-529-R",
        "koblingstekst": (
            "38 stasjoner oppgir «Ren Oslofjord. NGI-rapport 20051785-00-529-R, rev 01». "
            "Dette er rapporten som ville forklart mudringen i havnebassenget — den vi "
            "ikke har. Nummeret finnes ikke i NGI-serien i Nasjonalt vitenarkiv."),
    },
    "20061705-1": {
        "oppdragsgiver": "Oslo kommune",
        "tittel": "Miljøgifter i sedimenter — småbåthavner og badestrender",
        "koblingstekst": (
            "Ett punkt i rammen oppgir «Miljøgifter i sedimenter (småbåthavner og "
            "badestrender), NGI-rapport 20061705-1». De øvrige 26 punktene som navngir den, "
            "ligger utenfor rammen, ved småbåthavnene lenger ute i fjorden."),
    },
    "20071396-2": {
        "oppdragsgiver": "Oslo Havn",
        "tittel": "Tildekking av forurenset sediment med leire i Oslo Havn",
        "koblingstekst": (
            "61 stasjoner — flere enn noen annen rapport her — oppgir «Tildekking av "
            "forurenset sediment med leire i Oslo Havn. NGI-rapport 20071396-2». Nummeret "
            "finnes ikke i NGI-serien i Nasjonalt vitenarkiv."),
    },
    "1060036": {
        "oppdragsgiver": "Secora",
        "tittel": "Miljøkontroll etter mudring",
        "koblingstekst": (
            "17 stasjoner oppgir «Miljøkontroll etter mudring. NGI-rapport 1060036». "
            "Rapporten står i fem deler i Vannmiljøs beskrivelser (1060036 og -002 til "
            "-005); to av delene navngis av punkter i denne rammen. Ingen av dem er i "
            "Nasjonalt vitenarkiv, og hvilken mudring de kontrollerer, står ikke i "
            "registeret."),
    },
    "1060036-002": {
        "oppdragsgiver": "Secora",
        "tittel": "Miljøkontroll etter mudring — del 002",
        "koblingstekst": (
            "Ett punkt i rammen oppgir «Miljøkontroll etter mudring. NGI-rapport "
            "1060036-002». De øvrige tre ligger utenfor."),
    },
    "20110489-00-8-R": {
        "oppdragsgiver": "Oslo Havn",
        "tittel": "Mudring ved Revierkaia",
        "koblingstekst": (
            "25 stasjoner oppgir «Mudring ved Revierkaia. NGI-rapport 20110489-00-8-R». "
            "Beskrivelsen står med to skrivemåter i Vannmiljø, med og uten dobbelt "
            "mellomrom; det er samme rapport. I Grunnforurensning ligger lokaliteten "
            "«Revierkaia» med status «tiltakGjennomført» — registeret bekrefter altså at "
            "noe ble gjort, uten at rapporten om det er å finne."),
    },
    "20190266-01-R": {
        "oppdragsgiver": "Oslo Havn",
        "tittel": ("Overvåking 2019: tiltaksområder og dypvannsdeponiet etter "
                   "Ren Oslofjord"),
        "koblingstekst": (
            "Sju stasjoner oppgir «Overvåking 2019 i vannforekomsten Oslo havn og by: "
            "Tiltaksområder og dypvannsdeponiet etter Ren Oslofjord-prosjektet. NGI Rapport "
            "20190266-01-R.» Dette er den ferskeste oppfølgingen punktene navngir, og den "
            "eneste som uttrykkelig sier at den følger opp tiltaksområdene. Heller ikke den "
            "finnes i arkivet."),
    },
}

# Tiltakene er dokumentert av punktene selv: en gruppe stasjoner i Vannmiljø
# bærer samme beskrivelse, og beskrivelsen navngir tiltaket. aarFra/aarTil settes
# ikke her — byggeskriptet leser dem av målingene, slik at et tiltak aldri
# påstår et årstall som ikke finnes i dataene. Merk at årene er måleårene, ikke
# anleggsperioden.
TILTAK = [
    {
        "id": "t-ren-oslofjord-mudring",
        "navn": "Ren Oslofjord — mudring i havnebassenget",
        "type": "mudring",
        "aarFra": None,
        "aarTil": None,
        "utforer": "NGI",
        "oppdragsgiver": "Oslo Havn",
        "beskrivelse": (
            "44 stasjoner i rammen bærer beskrivelsen «Ren Oslofjord» med et "
            "NGI-rapportnummer — 38 med 20051785-00-529-R og 6 med 20051785-00-472. Alle "
            "er målt av NGI for Oslo Havn. Ingen av de to rapportene finnes i Nasjonalt "
            "vitenarkiv, så hva som ble mudret, hvor dypt og hvor mye, står ikke i noen "
            "kilde vi har. Årene under er måleårene på punktene, ikke anleggsperioden."),
        "omfang": [
            {"merkelapp": "Metode", "verdi": "Mudring med deponering på dypt vann"},
            {"merkelapp": "Utførende", "verdi": "NGI, på oppdrag for Oslo Havn — begge fra Vannmiljø"},
            {"merkelapp": "Dokumentasjon", "verdi": "NGI-rapport 20051785-00-472 og 20051785-00-529-R — ingen av dem i Nasjonalt vitenarkiv"},
            {"merkelapp": "Mudret volum og areal", "verdi": "ikke oppgitt i noen kilde vi har"},
            {"merkelapp": "Årene", "verdi": "måleårene på de 44 punktene, ikke anleggsperioden"},
            {"merkelapp": "Flaten i kartet", "verdi": "omrisset rundt punktgruppene, 50 m utenfor punktene — ikke tiltaksgrensen"},
        ],
        "rapportId": None,
        "resultat": None,
        "_stasjonsbeskrivelse": [
            "Ren Oslofjord. NGI-rapport 20051785-00-529-R, rev 01",
            "Ren Oslofjord. NGI-rapport 20051785-00-472",
        ],
    },
    {
        "id": "t-tildekking-leire",
        "navn": "Tildekking av forurenset sjøbunn med leire",
        "type": "tildekking",
        "aarFra": None,
        "aarTil": None,
        "utforer": "NGI",
        "oppdragsgiver": "Oslo Havn",
        "beskrivelse": (
            "61 stasjoner er merket «Tildekking av forurenset sediment med leire i Oslo "
            "Havn. NGI-rapport 20071396-2» — den største punktgruppa i rammen, alle målt av "
            "NGI for Oslo Havn. Rapporten finnes ikke i arkivet, så lagtykkelse og areal er "
            "ikke kjent. Leirmassene i Oslo havn kom fra graving av traseen for "
            "senketunnelen; det står i NIVA 5540 — men den rapporten navngis bare av punkter "
            "i Bekkelagsbassenget, utenfor denne rammen, og er derfor ikke med her."),
        "omfang": [
            {"merkelapp": "Metode", "verdi": "Tildekking med rene leirmasser"},
            {"merkelapp": "Utførende", "verdi": "NGI, på oppdrag for Oslo Havn — begge fra Vannmiljø"},
            {"merkelapp": "Dokumentasjon", "verdi": "NGI-rapport 20071396-2 — ikke i Nasjonalt vitenarkiv"},
            {"merkelapp": "Lagtykkelse og areal", "verdi": "ikke oppgitt i noen kilde vi har"},
            {"merkelapp": "Flaten i kartet", "verdi": "omrisset rundt punktgruppene, 50 m utenfor punktene — ikke tiltaksgrensen"},
        ],
        "rapportId": None,
        "resultat": None,
        "_stasjonsbeskrivelse": "Tildekking av forurenset sediment med leire i Oslo Havn. NGI-rapport 20071396-2",
    },
    {
        "id": "t-mudring-revierkaia",
        "navn": "Mudring ved Revierkaia",
        "type": "mudring",
        "aarFra": None,
        "aarTil": None,
        "utforer": "NGI",
        "oppdragsgiver": "Oslo Havn",
        "beskrivelse": (
            "25 stasjoner er merket «Mudring ved Revierkaia. NGI-rapport 20110489-00-8-R», "
            "alle målt samme år av NGI for Oslo Havn. I Grunnforurensning ligger lokaliteten "
            "«Revierkaia» med status «tiltakGjennomført». Dette er det eneste tiltaket i "
            "rammen der registeret og punktene sier det samme om samme sted — men rapporten "
            "finnes likevel ikke i arkivet."),
        "omfang": [
            {"merkelapp": "Metode", "verdi": "Mudring"},
            {"merkelapp": "Register", "verdi": "Grunnforurensning, lokalitet 22776 «Revierkaia», status «tiltakGjennomført»"},
            {"merkelapp": "Utførende", "verdi": "NGI, på oppdrag for Oslo Havn — begge fra Vannmiljø"},
            {"merkelapp": "Dokumentasjon", "verdi": "NGI-rapport 20110489-00-8-R — ikke i Nasjonalt vitenarkiv"},
            {"merkelapp": "Flaten i kartet", "verdi": "omrisset rundt de 25 punktene, 50 m utenfor dem"},
        ],
        "rapportId": None,
        "resultat": None,
        "_stasjonsbeskrivelse": [
            "Mudring  ved Revierkaia. NGI-rapport 20110489-00-8-R",
            "Mudring ved Revierkaia. NGI-rapport 20110489-00-8-R",
        ],
    },
    {
        "id": "t-miljokontroll-mudring",
        "navn": "Miljøkontroll etter mudring",
        "type": "kontroll",
        "aarFra": None,
        "aarTil": None,
        "utforer": "Rambøll",
        "oppdragsgiver": "Secora",
        "beskrivelse": (
            "18 stasjoner bærer beskrivelsen «Miljøkontroll etter mudring» med "
            "NGI-rapportnummer 1060036. De er målt av Rambøll for mudringsentreprenøren "
            "Secora — de eneste tiltakspunktene i rammen som ikke er målt av NGI for Oslo "
            "Havn. Hvilken mudring de kontrollerer, står ikke i registeret, og "
            "rapportnumrene finnes ikke i Nasjonalt vitenarkiv. Punktene er tatt med fordi "
            "de er ekte målinger fra en tiltakskontroll — men vi kan ikke knytte dem til et "
            "bestemt tiltak uten å gjette."),
        "omfang": [
            {"merkelapp": "Metode", "verdi": "Kontrollmåling etter mudring"},
            {"merkelapp": "Utførende", "verdi": "Rambøll, på oppdrag for Secora — begge fra Vannmiljø"},
            {"merkelapp": "Dokumentasjon", "verdi": "NGI-rapport 1060036 og -002 — ingen av dem i Nasjonalt vitenarkiv"},
            {"merkelapp": "Hvilken mudring", "verdi": "ikke oppgitt i noen kilde vi har"},
            {"merkelapp": "Flaten i kartet", "verdi": "omrisset rundt kontrollpunktene, 50 m utenfor dem"},
        ],
        "rapportId": None,
        "resultat": None,
        "_stasjonsbeskrivelse": [
            "Miljøkontroll etter mudring. NGI-rapport 1060036",
            "Miljøkontroll etter mudring. NGI-rapport 1060036-002",
        ],
    },
]

SAMLET = {
    "samlet": (
        "Bjørvika er tett målt og dårlig dokumentert. 176 stasjoner i Vannmiljø ligger "
        "innenfor rammen, og de navngir åtte rapporter. Ingen av dem finnes i Nasjonalt "
        "vitenarkiv. Alle åtte er NGI-rapporter skrevet for Oslo Havn, og det er nettopp de "
        "som beskriver hva som ble gjort: mudringen i Ren Oslofjord, tildekkingen med "
        "leire, mudringen ved Revierkaia, miljøkontrollen etterpå og overvåkingen i 2019. "
        "Vi kan se at fire tiltak er gjennomført — punktene bærer beskrivelsene, og "
        "Grunnforurensning fører Revierkaia som gjennomført tiltak — men vi kan ikke lese "
        "hva som ble gjort, hvor tykt laget var, hvor stort arealet var eller hva som ble "
        "anbefalt videre. Til sammenligning navngir punktene i Vikkilen fire rapporter, og "
        "alle fire ligger åpent i arkivet."),
    "utvikling": [
        "2006: den eldste målingen i rammen er ett enkelt punkt fra en undersøkelse av småbåthavner og badestrender.",
        "2007: forurenset sjøbunn i havnebassenget dekkes til med leire. 61 stasjoner bærer beskrivelsen — den største punktgruppa her, og 2007 er det tettest målte året.",
        "2007–2008: Rambøll måler 18 kontrollstasjoner for mudringsentreprenøren Secora under beskrivelsen «Miljøkontroll etter mudring».",
        "2009–2011: 44 stasjoner måles av NGI for Oslo Havn under beskrivelsen «Ren Oslofjord».",
        "2011: Revierkaia mudres. Grunnforurensning fører lokaliteten som gjennomført tiltak, og 25 stasjoner måles samme år.",
        "2019: sju stasjoner overvåker tiltaksområdene og dypvannsdeponiet etter Ren Oslofjord.",
        "2014–2018: ingen målinger i rammen. Etter 2019 kommer noen få punkter til, men ingen av dem navngir en rapport.",
    ],
    "uenighet": [
        "Beskrivelsen «Mudring ved Revierkaia. NGI-rapport 20110489-00-8-R» står med to skrivemåter i Vannmiljø, med og uten dobbelt mellomrom. Det er samme rapport og samme tiltak; her er de slått sammen.",
        "NGIs prosjektnumre begynner med et årstall — 20071396 med 2007, 20110489 med 2011. Det er prosjektåret, ikke utgivelsesåret, og vi kan ikke slå det opp. Rapportene er derfor plassert på måleårene til punktene som navngir dem, ikke på et årstall vi har lest ut av nummeret.",
    ],
    "hull": [
        "Alle åtte rapportnumrene mangler. NGIs serie i Nasjonalt vitenarkiv har 222 poster, i hovedsak snøskredfaglige notater; oppdragsrapportene for Oslo Havn er ikke lagt inn der. Konsekvensen er at ingen av de fire tiltakene kan peke på en rapport, og at ingen kilde kan belegges med en rapport.",
        "Rammen stopper ved Vippetangen. De seks NIVA-rapportene punktene i Oslo havn ellers navngir — undersøkelsene ved Tjuvholmen og Sjursøya og før- og etterundersøkelsen i Bekkelagsbassenget — hører til punkter utenfor rammen, og er derfor ikke med. Utvides rammen til hele havna, kommer de inn.",
        "Ett punkt viser til «Oppdrag 1100501 ... Rambøll». Det er et oppdragsnummer, ikke et rapportnummer, og kan derfor ikke slås opp. Vi gjetter ikke på hvilken publikasjon det er.",
        "Ingen PDF er lastet ned for dette området — det finnes ingen å laste ned. Derfor er figurer[] og punkter[] tomme overalt, og ingen rapport har sammendrag.",
    ],
}

# M-350-koblingene som er sitert ordrett. Bare typer der sitatet er kjent, får et
# sitat; de øvrige oppgir hva Grunnforurensning selv sier om bransjen.
KILDETYPE_M350 = {
    "Skipsverft og båtslipper": (
        "M-350 Tabell X-1, «Skipsverft: Tungmetaller, TBT, PCB». M-409 § 3.3 begrunner den "
        "forvaltningsbaserte TBT-grensen med at den «vil sikre at minst 75 % av aktive og "
        "nedlagte norske skipsverft vil måtte gå videre til Trinn 2»."),
    "Skipstrafikk / havnevirksomhet": (
        "M-350 Vedlegg X: «Forurensning fra bunnstoff vil som regel finnes i havneområder og "
        "områder med stor skips/båttrafikk.» M-409 § 4.2 regner skipsoppvirvling som egen "
        "spredningsvei (Vedlegg IX)."),
    "Elv og urban avrenning": (
        "M-350 Vedlegg X regner tilførsel fra elv og urban avrenning som en av hovedveiene "
        "for miljøgifter til sediment i byområder. Kapittel 1 krever at diffuse kilder tas "
        "med i vurderingen av forurensningssituasjonen."),
    "Kommunalt avløpsvann": (
        "M-350 Vedlegg X: «Utslipp fra avløpsrenseanlegg kan være av betydning spesielt for "
        "større tettsteder/byer.» Kapittel 1 krever at diffuse kilder som kommunalt avløp tas "
        "med i vurderingen av forurensningssituasjonen."),
}

# Kildene, i rangert rekkefølge. lokalitetId peker inn i Grunnforurensning-
# uttrekket; posisjon, påvirkningsgrad, bransje og status hentes derfra.
#
# Ingen av dem er belagt. Å belegge en kilde krever en rapport som navngir
# sammenhengen mellom kilden og målingene, og ingen av rapportene punktene her
# viser til, finnes. Det er den viktigste forskjellen fra Vikkilen, der NIVA 5040
# skriver rett ut at «hovedkilden til forurensningen har vært aktivitetene ved
# AS Nymo».
KILDEOPPSETT = [
    {
        "id": "K-01", "lokalitetId": 1016,
        "navn": "Nylands Verksted — skipsverftet i Bjørvika",
        "type": "Skipsverft og båtslipper", "belegg": "antatt", "poeng": 0.6,
        "presisjon": "punkt", "fraRapport": [],
        "stoffer": ["Tributyltinn (TBT)", "Bly", "Kobber", "Sink", "Sum PCB-7"],
        "grunnlag": (
            "Det tyngste registerfunnet innenfor rammen. Grunnforurensning fører "
            "«NYLANDS VERKSTED» under bransje 35.110 «Bygging og reparasjon av skip» med "
            "ikke akseptabel forurensning og status «tiltakGjennomført», og lokaliteten "
            "«PRI1 - Nyland verksted» med ukjent påvirkningsgrad og uavklart saksbehandling. "
            "Ingen rapport i grunnlaget knytter verkstedet til sedimentmålingene — de åtte "
            "rapportene punktene navngir, finnes ikke i arkivet. Stoffene er "
            "bransjesignaturen fra M-350 Tabell X-1, ikke et målt funn her."),
        "bevisklasse": "Stoffsignatur (M-350 Tabell X-1)",
    },
    {
        "id": "K-02", "lokalitetId": 1086,
        "navn": "Lasting og lossing i Bjørvika",
        "type": "Skipstrafikk / havnevirksomhet", "belegg": "antatt", "poeng": 0.45,
        "presisjon": "punkt", "fraRapport": [],
        "stoffer": ["Tributyltinn (TBT)", "Kobber", "Sum PAH-16"],
        "grunnlag": (
            "Grunnforurensning fører «Dronning Eufemias gate 8 m.fl. - Bjørvika» under "
            "bransje 63.111 «Lasting og lossing tilknyttet sjøtransport», med ikke akseptabel "
            "forurensning og uavklart saksbehandling. M-350 Vedlegg X regner bunnstoff i "
            "havneområder som en påregnelig kilde. Ingen måling i grunnlaget knytter "
            "lokaliteten til sedimentene."),
        "bevisklasse": "Registrert i Grunnforurensning",
    },
    {
        "id": "K-03", "lokalitetId": 938,
        "navn": "Sørengkaia og Sørengutstikkeren",
        "type": "Skipstrafikk / havnevirksomhet", "belegg": "antatt", "poeng": 0.4,
        "presisjon": "punkt", "fraRapport": [],
        "stoffer": ["Tributyltinn (TBT)", "Kobber", "Sum PAH-16"],
        "grunnlag": (
            "Grunnforurensning fører «SØRENGKAIA» under bransje 63.120 «Lagring» med ukjent "
            "påvirkningsgrad, og flere nabolokaliteter på Sørengutstikkeren under 63.112 "
            "«Lasting og lossing tilknyttet sjøtransport» og 63.221 «Drift av havne- og "
            "kaianlegg». Flere av landlokalitetene står med gjennomført tiltak. Stoffene er "
            "bransjesignatur, ikke målte funn i sjøen."),
        "bevisklasse": "Registrert i Grunnforurensning",
    },
    {
        "id": "K-04", "lokalitetId": 6924,
        "navn": "Akerselva — utløpet i Bjørvika",
        "type": "Elv og urban avrenning", "belegg": "antatt", "poeng": 0.4,
        "presisjon": "diffus", "fraRapport": [],
        "stoffer": ["Sum PAH-16", "Bly", "Sink", "Kobber"],
        "grunnlag": (
            "Akerselva munner ut midt i Bjørvika. Grunnforurensning fører «Munchbrua - "
            "Vestre og Østre Akerselvkai» og flere lokaliteter på Akerselvallmenningen som "
            "forurenset grunn med gjennomført tiltak, og avløpsprosjektet Midgardsormen "
            "ligger inne med en rekke delstrekninger langs elva. M-350 Vedlegg X regner elv "
            "og urban avrenning som en av hovedveiene for miljøgifter til sediment i "
            "byområder. Ingen måling i grunnlaget skiller elvas bidrag fra de øvrige."),
        "bevisklasse": "Mistanke etter M-350 Vedlegg X, ikke dokumentert",
    },
    {
        "id": "K-05", "lokalitetId": 22776,
        "navn": "Revierkaia",
        "type": "Skipstrafikk / havnevirksomhet", "belegg": "antatt", "poeng": 0.35,
        "presisjon": "punkt", "fraRapport": [],
        "stoffer": ["Tributyltinn (TBT)", "Kobber"],
        "grunnlag": (
            "Grunnforurensning fører «Revierkaia» med akseptabel forurensning og status "
            "«tiltakGjennomført», og en eldre lokalitet med samme navn som uavklart. 25 "
            "målepunkter her bærer beskrivelsen «Mudring ved Revierkaia». Registeret og "
            "punktene peker på samme sted og samme hendelse — men rapporten som ville knyttet "
            "forurensningen til en kilde, finnes ikke."),
        "bevisklasse": "Registrert i Grunnforurensning",
    },
    {
        "id": "K-06", "lokalitetId": 1139,
        "navn": "Grønlikaia",
        "type": "Skipstrafikk / havnevirksomhet", "belegg": "antatt", "poeng": 0.3,
        "presisjon": "punkt", "fraRapport": [],
        "stoffer": ["Sum PAH-16", "Bly"],
        "grunnlag": (
            "Grunnforurensning fører «Grønlikaia» med akseptabel forurensning og uavklart "
            "saksbehandling, og «Ledningstraseer Grønlia» med gjennomført undersøkelse. "
            "Grønlikaia er den sørlige enden av rammen. Stoffene er bransjesignatur, ikke "
            "målte funn på lokaliteten."),
        "bevisklasse": "Registrert i Grunnforurensning",
    },
    {
        "id": "K-07", "lokalitetId": None,
        "navn": "Kommunalt avløp og overvann til havnebassenget",
        "type": "Kommunalt avløpsvann", "belegg": "antatt", "poeng": 0.25,
        "presisjon": "diffus", "fraRapport": [],
        "stoffer": [],
        "grunnlag": (
            "Diffus kilde uten koordinat. Avløpsprosjektet Midgardsormen, som ligger inne i "
            "Grunnforurensning med en rekke delstrekninger rundt Bjørvika, ble bygget nettopp "
            "for å samle opp overløp som tidligere gikk til havnebassenget. M-350 Vedlegg X "
            "regner utslipp fra avløp som betydelig for større byer. Kilden står oppført uten "
            "stoffer fordi ingen kilde i grunnlaget sier hvilke det gjelder."),
        "bevisklasse": "Mistanke etter M-350 Vedlegg X, ikke dokumentert",
    },
]


# ── hendelser på tidsaksen ───────────────────────────────────────────────────
# Alt her kan følges tilbake til et punkt eller en registerpost. Ingenting kan
# følges tilbake til en rapport — det er ingen å følge til.
HENDELSER = [
    {"aar": 2006, "type": "mangler", "merkelapp": "første måling",
     "tittel": "Den eldste sedimentmålingen i rammen er ett enkelt punkt, knyttet til en undersøkelse av småbåthavner og badestrender. Også den rapporten mangler i arkivet.",
     "rapportId": None},
    {"aar": 2007, "type": "tiltak", "merkelapp": "tildekking",
     "tittel": "61 stasjoner måles under beskrivelsen «Tildekking av forurenset sediment med leire i Oslo Havn» — den største punktgruppa i rammen. Rapporten den viser til, finnes ikke i arkivet.",
     "tiltakId": "t-tildekking-leire"},
    {"aar": 2007, "type": "tiltak", "merkelapp": "kontroll",
     "tittel": "Rambøll måler 18 stasjoner for mudringsentreprenøren Secora under beskrivelsen «Miljøkontroll etter mudring». Hvilken mudring de kontrollerer, står ikke i registeret.",
     "tiltakId": "t-miljokontroll-mudring"},
    {"aar": 2009, "type": "tiltak", "merkelapp": "Ren Oslofjord",
     "tittel": "44 stasjoner måles av NGI for Oslo Havn under beskrivelsen «Ren Oslofjord». Årene er måleårene — når selve mudringen ble utført, står ikke i noen kilde vi har.",
     "tiltakId": "t-ren-oslofjord-mudring"},
    {"aar": 2011, "type": "tiltak", "merkelapp": "mudring",
     "tittel": "Revierkaia mudres. Grunnforurensning fører lokaliteten som gjennomført tiltak, og 25 stasjoner måles samme år.",
     "tiltakId": "t-mudring-revierkaia"},
    {"aar": 2019, "type": "mangler", "merkelapp": "mangler",
     "tittel": "Sju stasjoner overvåker tiltaksområdene og dypvannsdeponiet etter Ren Oslofjord. Rapporten de navngir, NGI 20190266-01-R, finnes ikke i Nasjonalt vitenarkiv — som ingen av de åtte numrene punktene her viser til.",
     "rapportId": None},
]


def hotspot_tittel(stoff, tbt):
    return {
        "tittel": "Havnebassenget er forurenset over hele flaten — og ingen rapport forklarer hvorfor",
        "hale": (
            "Tributyltinn er verst: høyeste måling er "
            f"{int(tbt['maks']) if tbt else ''} µg/kg, {int(tbt['faktor']) if tbt else ''} ganger "
            "den forvaltningsbaserte Trinn 1-grensen. Ingen av kildene under er belagt — å "
            "belegge en kilde krever en rapport som navngir sammenhengen, og ingen av de åtte "
            "rapportene punktene navngir, finnes i arkivet."),
    }


# ── koblinger som bare gjelder her ───────────────────────────────────────────

def kilde_punkter(kilde, stasjoner):
    """Stasjonene en kilde faktisk kan knyttes til.

    Koblingen må være et faktum, ikke en antakelse: punktet må selv navngi
    rapporten som peker ut kilden. Her finnes ingen slik rapport, så lista er tom
    for alle kildene. Funksjonen står likevel med samme regel som i Vikkilen —
    får vi tak i en av NGI-rapportene, virker den uendret.
    """
    numre = kilde.get("fraRapport") or []
    if not numre:
        return []
    import bygg_omrade
    ut = []
    for s in stasjoner:
        funnet = {nr for _, nr in bygg_omrade.referanser_i(s["_beskrivelse"])}
        if funnet & set(numre):
            ut.append(s["navn"])
    return sorted(ut)


def verste_for_kilde(kilde, koblet, stasjoner):
    """Punktet med høyeste tilstandsklasse blant dem kilden er knyttet til."""
    if not koblet:
        return None
    med = [s for s in stasjoner if s["navn"] in koblet and s["verdier"]]
    if not med:
        return None
    return max(med, key=lambda s: (s["klasse"] or 0,
                                   max(v["verdi"] for v in s["verdier"])))["navn"]


def ekstra_stasjoner(stasjoner):
    """Ingen rapport er lest for dette området, så ingen punkter kommer fra rapport."""
    return [], []
