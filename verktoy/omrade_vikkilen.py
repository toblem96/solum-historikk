"""omrade_vikkilen.py — det kuraterte laget for Vikkilen i Grimstad.

Alt som er skrevet for hånd om dette området, ligger her. Byggeskriptet
bygg_omrade.py er likt for alle områder og henter dette derfra. Hver formulering
oppgir hvilken rapport eller hvilket register den er hentet fra.

Rapportene er de fire målepunktene selv navngir. Lista kan ikke utvides med
rapporter ingen punkter viser til — det er hele regelen.
"""

import math
import os

import les_5040
import les_5669
import les_ekstrapunkter
from felles import INN_ROT

# Rammen er tegnet for hånd på kartet og dekker Vikkilen og Grimstad havn.
# Sørkanten er lagt så vidt lavere enn den tegnede for å få med Groosefjorden
# (58,3187 N) — den og Grooseholmen er de to punktene som navngir NIVA 3622 og
# 6939, så uten dem mister to av rapportene sitt grunnlag. Utenfor faller Fevik,
# Fevikkilen og Moysand.
BBOX = {"v": 8.575, "o": 8.635, "s": 58.317, "n": 58.368}

# Serien rapportnumrene slås opp i, og utgiveren rapportnumrene skrives med.
SERIER = ["NIVA-rapport"]
UTGIVER = "NIVA"

# Stedsnavnene geografien grupperes på — de som faktisk står i stasjonsnavnene.
STEDSNAVN = ["Vikkilen", "Fevikkilen", "Groose", "Grimstad havn", "Holvika",
             "Moysand", "Barselkilen", "Grømbukt", "Fevik", "GRA-2 Groos"]
STEDSNAVN_ALIAS = {"Groose": "Groosefjorden"}

# AS Nymo står oppført på fire måter i Vannmiljø. Det er samme oppdragsgiver.
GIVER_ALIAS = {"nymo": "AS Nymo"}

# Navneformene aktørene står med i registrene, slått sammen. Første treff på
# delstrengen vinner, så rekkefølgen betyr noe: «Aust-Agder fylkeskommune» og
# «Fylkesmannen i Aust-Agder» er to forskjellige organer og må skilles før
# «aust-agder» får slå til på begge. De opprinnelige formene beholdes i dataene,
# slik at sammenslåingen kan etterprøves.
AKTOR_ALIAS = [
    ("nymo", "AS Nymo"),
    ("fylkesmannen", "Fylkesmannen i Aust-Agder"),
    ("fylkeskommune", "Aust-Agder fylkeskommune"),
    ("grimstad kommune", "Grimstad kommune"),
    ("sft", "SFT"),
    ("miljødirektorat", "Miljødirektoratet"),
    ("niva", "NIVA"),
    ("multiconsult", "Multiconsult"),
    ("norsk hydro", "Norsk Hydro"),
    ("ikke oppgitt", "Ikke oppgitt"),
]

# Vikkilen-PDF-ene ligger i hentet/ fra før av, ikke under hentet/vikkilen/.
INN = INN_ROT


def innenfor(lat, lng):
    b = BBOX
    return b["v"] <= lng <= b["o"] and b["s"] <= lat <= b["n"]


# Setninger som bare gjelder dette området, og som byggeskriptet setter inn i
# toppteksten på de genererte filene.
TEKSTER = {
    "tidsrom": (
        "Årene 1990–1997 kommer fra én enkelt trendstasjon («Grimstad», "
        "Miljødirektoratets basisovervåking), som er målt hvert år. Områdedekkende "
        "undersøkelser starter i 1998."),
    "rapporter": (
        "\n * Et fritekstsøk på «Vikkilen» gir 22 treff i Nasjonalt vitenarkiv — "
        "snegleundersøkelser,\n * tiltaksplaner, en konsekvensutredning, en "
        "steinalderboplass — og ingen av dem er\n * navngitt av et punkt. De er derfor ute. "
        "Konsekvensen er at åtte av tolv\n * undersøkelser står uten rapport."),
    "kilder": (
        "Bare AS Nymo har en slik kobling: Vannmiljø oppgir Nymo\n"
        " * som oppdragsgiver for stasjonene. De andre kildene står uten punkter — vi vet at\n"
        " * de finnes, ikke at de har satt spor i disse målingene."),
    "flyt": (
        "PAH har ingen lenke: ingen kilde i grunnlaget er belagt for\n"
        " * PAH, selv om PAH-nivåene er høye."),
    "tiltak": (
        "Ett tiltak er dokumentert i grunnlaget: tildekkingen i 2016.\n"
        " * Kildene er Grunnforurensning, der «PRI1 - AS Nymo - sjø» står med status\n"
        " * «tiltakGjennomført», og de åtte stasjonene i Vannmiljø som er merket «Miljøgifter\n"
        " * i tildekkede sedimenter ved verftet Nymo AS». Hva som faktisk ble lagt ut, og hvor\n"
        " * stort areal det gjaldt, går ikke fram av noe punkt eller register her."),
}


# Rapportnummer -> det vi legger oppå registerposten. Sammendraget hentes fra
# Nasjonalt vitenarkiv og skrives ikke her. Nøkkelfunnene er setninger fra det
# samme sammendraget, kortet ned. Bare numre som står i et punkts
# beskrivelsesfelt i Vannmiljø kan stå her — lista kan ikke utvides med rapporter
# ingen punkter navngir.
RAPPORTOPPSETT = {
    "3622": {
        "oppdragsgiver": "Grimstad kommune",
        "koblingstekst": (
            "To stasjoner i Groosefjorden oppgir «NIVA-rapport 3622-1997» i beskrivelsen. "
            "Merk at teksten i Vannmiljø kaller rapporten «Miljøtilstanden i Aust-Agder, "
            "Grimstad», mens arkivets tittel er en annen — det er rapportnummeret som "
            "knytter dem sammen, ikke tittelen."),
        "noekkelfunn": [
            "Groosefjorden ble undersøkt i 1995 for å dokumentere tilstanden før det nye biologiske renseanlegget ble satt i drift.",
            "Bunnområdene var tydelig påvirket av det kommunale utslippet på Groos, med lave oksygenkonsentrasjoner i bunnvannet.",
            "Nær utslippet var bløtbunnsfaunaen dominert av arter som opptrer ved tung organisk belastning, og det ble registrert hydrogensulfid i sedimentene ved utslippspunktet.",
            "I overflatelaget ble det bare funnet svake effekter, og det var ingen større endringer siden undersøkelsen på 1980-tallet.",
        ],
    },
    "5040": {
        "oppdragsgiver": "AS Nymo / Fylkesmannen i Aust-Agder",
        "kildeIder": ["K-01"],
        "koblingstekst": (
            "15 stasjoner har «Miljøgifter i sedimenter 2004. NIVA-rapport OR-5040.» i "
            "beskrivelsesfeltet. Nummeret er slått opp i NIVA-serien og stemmer."),
        "noekkelfunn": [
            "Det forurensningsmessige hovedproblemet i Vikkilen er TBT — verdiene er svært høye, og hele fjordområdet må karakteriseres som meget sterkt forurenset.",
            "Hovedkilden til forurensningen har vært aktivitetene ved AS Nymo. Andre, mindre kilder er småbåthavn og generell skipstrafikk.",
            "Kilen er markert til meget sterkt forurenset av PAH.",
            "Vikkilen er i liten grad forurenset av PCB, og relativt lite forurenset av tungmetaller bortsett fra enkelte steder nær AS Nymo.",
            "Spredningen fra Nymo er i dag lokal og avtagende, men sedimentene vil være en kilde i lang tid framover.",
        ],
    },
    "5669": {
        "oppdragsgiver": "AS Nymo",
        "kildeIder": ["K-01"],
        "koblingstekst": (
            "16 stasjoner har «Miljøgifter i sedimenter 2008. NIVA-rapport OR-5669.» i "
            "beskrivelsesfeltet. Nummeret er slått opp i NIVA-serien og stemmer."),
        "noekkelfunn": [
            "Sedimentene utgjør en uakseptabel risiko for effekter på human helse og for økologiske effekter, både etter Trinn 2 og Trinn 3 i SFTs veileder.",
            "Vikkilen foreslås delt i tre områder for tiltak: mudring til minst 20 cm med etterdekking utenfor Nymo, 2 × 20 cm tildekking i resten av indre del, og 2 × 10 cm i ytre del.",
            "Bunnfaunaen er relativt rik ytterst, men forverres innover i kilen.",
            "Analyser av porevann, TBT-flukser og TBT i bunnfauna viser at SFTs risikoveileder overestimerer transport og bioakkumulasjon.",
            "Oppvirvling fra skipspropeller er beregnet til å tilføre ca. 1800 kg suspendert stoff per hendelse.",
        ],
    },
    "6939": {
        "oppdragsgiver": "Grimstad kommune",
        "koblingstekst": (
            "De samme to stasjonene i Groosefjorden oppgir «Overvåking av sjøområdene i "
            "Grimstad. NIVA-rapport 6939-2015.» Her stemmer både tittel og nummer."),
        "noekkelfunn": [
            "Undersøkelsen omfattet næringssalter og oksygen, strandsone, hardbunn, bløtbunnsfauna, sedimentprofilfotografering og miljøgifter i bunnsedimenter.",
            "I nærområdet til utslippet i Groosefjorden var bunnområdene moderat påvirket; ved utslippet i Homborsund ble det ikke funnet effekter.",
            "I dypområdet av Groosefjorden var tilstanden mindre god, men mest trolig naturlig betinget.",
            "Det var mindre endringer i tilstanden sammenlignet med undersøkelsen i 1995 — den samme som stasjonene også viser til.",
        ],
    },
}

TILTAK = [{
    "id": "t-tildekking-2016",
    "navn": "Tildekking av forurenset sjøbunn utenfor AS Nymo",
    "type": "tildekking",
    "aarFra": 2016,
    "aarTil": 2016,
    "utforer": "Ikke oppgitt i kildene",
    "oppdragsgiver": "AS Nymo",
    "beskrivelse": (
        "At tiltaket er gjennomført, står i to kilder som hører til punktene: "
        "Grunnforurensning fører lokaliteten «PRI1 - AS Nymo - sjø» med status "
        "«tiltakGjennomført», og åtte stasjoner i Vannmiljø er merket «Miljøgifter i "
        "tildekkede sedimenter ved verftet Nymo AS». Hva som var planlagt, står i "
        "tiltaksplanen NIVA 6688 (2014): 20 cm sand i delområde A og innenfor "
        "manøvreringsområdet for Nordsjøskip, 10 cm i resten av området påvirket av "
        "skipsmanøvrering. Massene skulle legges ut fra fallbunnslekter, med to "
        "sanddeponier — ett nord for den gamle dypvannskaia og ett ved Bjelkestranda — og "
        "kontrolleres med målestaver, multistråle-ekkolodd, dykker og video. "
        "Hva som faktisk ble lagt ut i 2016, står ikke i noen kilde vi har."),
    "omfang": [
        {"merkelapp": "Utført år", "verdi": "2016 — året de åtte stasjonene ble målt"},
        {"merkelapp": "Metode", "verdi": "Tildekking med rene masser"},
        {"merkelapp": "Anbefalt i NIVA 5669 (2008)", "verdi": "mudring til minst 20 cm med tilsvarende etterdekking utenfor Nymo, 2 × 20 cm i resten av indre del, 2 × 10 cm i ytre del"},
        {"merkelapp": "Planlagt i NIVA 6688 (2014)", "verdi": "20 cm i delområde A og i manøvreringsområdet for Nordsjøskip, 10 cm i resten"},
        {"merkelapp": "Planlagt areal", "verdi": "ca. 25 000 m² gjensto i delområde A, pluss 64 000 m² og 44 000 m² manøvreringsområde — 108 000 m² til sammen"},
        {"merkelapp": "Kalkulert kostnad", "verdi": "13,1 mNOK for tildekkingen, 1,2 mNOK for kontroll og overvåking (NIVA 6688)"},
        {"merkelapp": "Faktisk utført areal", "verdi": "ikke oppgitt i noen kilde vi har"},
        {"merkelapp": "Flaten i kartet", "verdi": "omrisset rundt de åtte overvåkingsstasjonene, ikke tiltaksgrensen"},
    ],
    # NIVA 6688 er ikke i rapportlista lenger, så tiltaket peker ikke på den.
    # Tallene fra planen står fortsatt i omfang, med rapportnummeret i teksten.
    "rapportId": None,
    "resultat": None,   # regnes ut av måledataene i main()
    "_stasjonsbeskrivelse": "Miljøgifter i tildekkede sedimenter ved verftet Nymo AS.",
}]

SAMLET = {
    "samlet": (
        "Fire rapporter er navngitt av målepunktene i dette området, og de forteller to "
        "historier som møtes. Den ene er Groosefjorden, der NIVA i 1995 dokumenterte "
        "tilstanden før det biologiske renseanlegget på Groos og i 2015 fant at bunnen "
        "fortsatt var moderat påvirket ved utslippet, men lite endret. Den andre er "
        "Vikkilen, der kartleggingen i 2004 pekte ut tributyltinn fra verftet AS Nymo som "
        "hovedproblemet, og undersøkelsen i 2008 konkluderte med uakseptabel risiko for "
        "både human helse og økologi og foreslo tre tiltaksområder. I 2016 ble sjøbunnen "
        "utenfor verftet dekket til — det står i Grunnforurensning, og åtte stasjoner ble "
        "målt i tildekket sediment samme år."),
    "utvikling": [
        "1997: tilstanden i Groosefjorden dokumenteres før renseanlegget på Groos settes i drift (NIVA 3622).",
        "2005: Vikkilen kartlegges for AS Nymo. TBT er hovedproblemet, verftet er hovedkilden (NIVA 5040).",
        "2008: sedimentene utgjør uakseptabel risiko. Tre tiltaksområder foreslås, med mudring og tildekking utenfor Nymo (NIVA 5669).",
        "2015: resipientundersøkelsen i Groosefjorden viser moderat påvirkning ved utslippet og små endringer siden 1995 (NIVA 6939).",
        "2016: tiltaket gjennomføres. Grunnforurensning fører sjølokaliteten som «tiltakGjennomført», og åtte stasjoner måles i tildekket sediment.",
    ],
    "uenighet": [
        "Vannmiljø kaller NIVA-rapport 3622-1997 for «Miljøtilstanden i Aust-Agder, Grimstad», mens arkivets tittel er «Tilstanden i sjøområdene ved Grimstad før start av biologisk renseanlegg på Groos». Det er rapportnummeret som knytter punkt og rapport sammen — tittelen i beskrivelsesfeltet gjør det ikke.",
    ],
    "hull": [
        "Åtte av tolv undersøkelser har ingen rapport. Ingen av punktene deres navngir en, og da leter vi ikke videre: et treff på «Vikkilen» i en tittel er ikke det samme som rapporten bak målingen. Det gjelder også 2016 — tiltaksåret, og det tettest målte året etter 2008.",
        "Ingen kilde i grunnlaget er belagt for PAH. NIVA 5040 slår fast at kilen er markert til meget sterkt forurenset av PAH, men peker ikke ut hvor det kommer fra. TBT-kilden er derimot navngitt.",
        "Selve PDF-ene er ikke lest. NIVAs gamle arkiv (niva.brage.unit.no) er nedlagt — domenet finnes ikke lenger, så lenkene søkemotorene fortsatt viser dit, er døde. Rapportene ligger i Nasjonalt vitenarkiv, der metadata og sammendrag er åpne, men nedlastingsruta svarte 403 uten innlogging. Sammendragene her er rapportenes egne; tabellverdier og figurer er ikke hentet ut.",
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
    "Kommunalt avløpsvann": (
        "M-350 Vedlegg X: «Utslipp fra avløpsrenseanlegg kan være av betydning spesielt for "
        "større tettsteder/byer.» Kapittel 1 krever at diffuse kilder som kommunalt avløp tas "
        "med i vurderingen av forurensningssituasjonen."),
    "Deponier og forurenset grunn": (
        "M-350 Vedlegg X: «Områder med deponier eller forurenset grunn kan være kilder til "
        "sedimentforurensning, særlig der deponiet eller det forurensede området er lokalisert "
        "i strandsonen/nær sjø.» Spredning til sjø må beregnes stedsspesifikt (TA-1629)."),
}

# Kildene, i rangert rekkefølge. lokalitetId peker inn i Grunnforurensning-
# uttrekket; posisjon, påvirkningsgrad, bransje og status hentes derfra.
KILDEOPPSETT = [
    {
        "id": "K-01", "lokalitetId": 11044,
        "navn": "AS Nymo — verftet i Vikkilen (sjø og land)",
        "type": "Skipsverft og båtslipper", "belegg": "belagt", "poeng": 0.97,
        "presisjon": "punkt",
        "stoffer": ["Tributyltinn (TBT)", "Bly", "Kobber", "Sink"],
        "grunnlag": (
            "Dokumentert konklusjon i fagrapport. NIVA 5040 (2005), som 15 av punktene "
            "navngir: «Hovedkilden til forurensningen har vært aktivitetene ved AS Nymo.» "
            "NIVA 5669 (2008), som 16 punkter navngir, bekrefter nivåene og mønsteret og "
            "konkluderer med uakseptabel risiko. I Grunnforurensning ligger verftet med to "
            "lokaliteter: «PRI1 - AS NYMO - land» med ikke akseptabel forurensning, og "
            "«PRI1 - AS Nymo - sjø», der tiltaket er gjennomført. M-350 Tabell X-1 fører "
            "skipsverft opp med tungmetaller, TBT og PCB."),
        "bevisklasse": "Dokumentert konklusjon i fagrapport",
    },
    {
        "id": "K-02", "lokalitetId": None,
        "navn": "Småbåthavn og generell skipstrafikk i kilen",
        "type": "Skipstrafikk / havnevirksomhet", "belegg": "belagt", "poeng": 0.55,
        "presisjon": "diffus",
        "stoffer": ["Tributyltinn (TBT)", "Kobber"],
        "grunnlag": (
            "Nevnt i fagrapport. NIVA 5040 (2005): «Imidlertid er det også andre mindre kilder "
            "som småbåthavn og generell skipstrafikk.» Rapporten fester ikke kilden til et "
            "koordinat, og den er derfor tegnet som diffus. NIVA 5669 (2008) beregner at "
            "oppvirvling fra skipspropeller tilfører ca. 1800 kg suspendert stoff per hendelse."),
        "bevisklasse": "Mistanke nevnt i fagrapport, ikke dokumentert",
    },
    {
        "id": "K-03", "lokalitetId": None,
        "navn": "Kommunalt avløp på Groos",
        "type": "Kommunalt avløpsvann", "belegg": "belagt", "poeng": 0.5,
        "presisjon": "diffus",
        "stoffer": [],
        "grunnlag": (
            "Dokumentert konklusjon i fagrapport, i to av rapportene punktene navngir. "
            "NIVA 3622 (1997) fant at bunnområdene i Groosefjorden var tydelig påvirket av "
            "det kommunale utslippet på Groos, med lave oksygenkonsentrasjoner i bunnvannet "
            "og hydrogensulfid i sedimentet ved utslippspunktet. NIVA 6939 (2015) fant "
            "området fortsatt moderat påvirket ved utslippet, med små endringer siden 1995. "
            "Begge handler om organisk belastning og oksygen — ingen av miljøgiftene i "
            "datasettet er knyttet til utslippet."),
        "bevisklasse": "Dokumentert konklusjon i fagrapport",
    },
    {
        "id": "K-04", "lokalitetId": 3149,
        "navn": "Scandia Ship Service",
        "type": "Skipsverft og båtslipper", "belegg": "antatt", "poeng": 0.35,
        "presisjon": "punkt",
        "stoffer": ["Tributyltinn (TBT)", "Bly", "Kobber", "Sink"],
        "grunnlag": (
            "Registrert i Grunnforurensning under bransje 35.111 «Bygging og reparasjon av skip "
            "og skrog», med påvirkningsgrad «ukjent» og status «uavklart». Ingen rapport i "
            "grunnlaget knytter lokaliteten til målinger i sjøen. Stoffene er bransjesignaturen "
            "fra M-350 Tabell X-1, ikke et målt funn."),
        "bevisklasse": "Stoffsignatur (M-350 Tabell X-1)",
    },
    {
        "id": "K-05", "lokalitetId": 3144,
        "navn": "Norsk Skipsopphugging",
        "type": "Skipsverft og båtslipper", "belegg": "antatt", "poeng": 0.32,
        "presisjon": "punkt",
        "stoffer": ["Bly", "Kobber", "Sink", "Sum PCB-7"],
        "grunnlag": (
            "Registrert i Grunnforurensning under bransje 37.100 «Gjenvinning av metallholdig "
            "avfall og skrap», med akseptabel forurensning og avsluttet saksbehandling. "
            "Stoffene er bransjesignatur, ikke målte funn i denne lokaliteten."),
        "bevisklasse": "Stoffsignatur (M-350 Tabell X-1)",
    },
    {
        "id": "K-06", "lokalitetId": 3146,
        "navn": "Agder Fornikling A/S",
        "type": "Deponier og forurenset grunn", "belegg": "antatt", "poeng": 0.3,
        "presisjon": "punkt",
        "stoffer": ["Krom", "Nikkel", "Sink"],
        "grunnlag": (
            "Registrert i Grunnforurensning under bransje 25.610 «Overflatebehandling av "
            "metaller», med akseptabel forurensning og avsluttet saksbehandling. "
            "Overflatebehandling er en kjent kilde til krom og nikkel, men ingen måling i "
            "grunnlaget knytter lokaliteten til sedimentene."),
        "bevisklasse": "Registrert i Grunnforurensning",
    },
    {
        "id": "K-07", "lokalitetId": 3138,
        "navn": "Hesnes avfallsplass",
        "type": "Deponier og forurenset grunn", "belegg": "antatt", "poeng": 0.25,
        "presisjon": "omrade",
        "stoffer": [],
        "grunnlag": (
            "Registrert i Grunnforurensning med ukjent påvirkningsgrad og pålegg om overvåking. "
            "Ligger utenfor selve kilen. Tatt med fordi M-350 Vedlegg X regner deponier i "
            "strandsonen som mulig kilde, ikke fordi noe i grunnlaget peker hit."),
        "bevisklasse": "Registrert i Grunnforurensning",
    },
]


# ── rapporten vi har PDF-en til ──────────────────────────────────────────────


# Rapportnummer -> PDF-fila i hentet/. Alle fire er lastet ned fra Nasjonalt
# vitenarkiv; figurene hentes ut av dem.
# Bare rapportene punktene navngir. De øvrige PDF-ene ligger fortsatt i hentet/,
# men brukes ikke — sitatgrafen er slått av.
PDF_ER = {
    "3622": "3622_72dpi.pdf",
    "5040": "niva-5040-2005.pdf",
    "5669": "5669-2008_72dpi.pdf",
    "6939": "6939-2015_200dpi_revidert.pdf",
}

# Rapporter uten tekstlag — rene skann. Vi har PDF-en, men ingenting kan leses ut
# av den uten OCR, og det gjør vi ikke her.
UTEN_TEKSTLAG = {"1919", "1920"}

PDF_5040 = "niva-5040-2005.pdf"
PDF_5669 = "5669-2008_72dpi.pdf"
R5040 = les_5040.les(os.path.join(INN, PDF_5040))
R5669 = les_5669.les(os.path.join(INN, PDF_5669))


def punkter_5669(stasjoner):
    """Rapportens egne tabellverdier: 2008-prøvene og de tre fra 2007.

    A-radene er 5040-rapportens tall, gjengitt til sammenligning, og hører til
    den rapporten — de tas ikke med her.
    """
    if not R5669:
        return []
    finnes = {s["navn"] for s in stasjoner}
    t = R5669["trykt"]
    ut = []
    for nokkel in sorted(R5669["rader"], key=lambda k: (k[0], int(k.split()[1]))):
        bokstav = nokkel[0]
        if bokstav == "A":
            continue
        v = R5669["rader"][nokkel]
        navn = les_5669.til_vannmiljonavn(nokkel, finnes)
        egen = bokstav == "C"
        ut.append({
            "navn": navn or f"{nokkel} · NIVA 5669",
            "navnIRapport": nokkel,
            "side": t["metall"],
            "tekst": (
                f'Prøvedyp {v.get("Prøvedyp", "?")} cm. '
                + ("Prøve tatt av entreprenørfirmaet AF i 2007. Finnes ikke i Vannmiljø, "
                   "og rapporten oppgir ingen posisjon for den. "
                   if egen else "Prøve fra 2008-undersøkelsen. ")
                + f'Tungmetaller og tørrstoff står på s. {t["metall"]}, '
                + f'PCB og PAH på s. {t["organisk"]}, '
                + f'tinnorganiske forbindelser på s. {t["tinn"]}.'),
            "verdier": {k: v[k] for k, _ in les_5669.PUNKTFELT
                        if v.get(k) not in (None, "", "-")},
            "enheter": {k: e for k, e in les_5669.PUNKTFELT
                        if v.get(k) not in (None, "", "-")},
        })
    return ut


def punkter_5040(stasjoner):
    """Rapportens egne tabellverdier, som punkter på rapporten."""
    if not R5040:
        return []
    finnes = {s["navn"] for s in stasjoner}
    t = R5040["trykt"]
    ut = []
    for nr in sorted(R5040["felt"]):
        v = R5040["verdier"].get(nr) or {}
        if not v:
            continue                                # beskrevet i felt, ikke analysert
        f = R5040["felt"][nr]
        navn = f"Vikkilen {nr}"
        ut.append({
            "navn": navn if navn in finnes else f"St. {nr} · NIVA 5040",
            "navnIRapport": f"St. {nr}",
            "side": t["metall"],
            "tekst": (les_5040.feltbeskrivelse(f)
                      + f' Posisjon {f["posisjonTekst"]} (vedlegg A, s. {t["vedleggA"]}).'
                      + f' Tinnorganiske forbindelser, PAH og olje står på s. {t["org"]},'
                      + f' PCB på s. {t["pcb"]}.'),
            "verdier": {k: v[k] for k, _ in les_5040.PUNKTFELT if v.get(k) not in (None, "")},
            "enheter": {k: e for k, e in les_5040.PUNKTFELT if v.get(k) not in (None, "")},
        })
    return ut


def _avstand(a_lat, a_lng, b_lat, b_lng):
    dy = (a_lat - b_lat) * 111000
    dx = (a_lng - b_lng) * 111000 * math.cos(math.radians((a_lat + b_lat) / 2))
    return math.hypot(dx, dy)


def ekstrapunkter(stasjoner):
    """Punkter med posisjon fra NIVA 6939 og 5669 som ikke finnes i Vannmiljø.

    Returnerer (nye_stasjoner, treff_6939) der treff_6939 er navnene på
    Vannmiljø-stasjoner rapporten dekker fordi koordinatene er identiske.
    """
    strand, blot, slede = les_ekstrapunkter.les(
        os.path.join(INN, PDF_ER.get("6939", "")),
        os.path.join(INN, PDF_ER.get("5669", "")))
    t = les_ekstrapunkter.TRYKT
    nye, treff = [], []

    def finnes(lat, lng, grense=25):
        for s_ in stasjoner:
            if _avstand(lat, lng, s_["lat"], s_["lng"]) <= grense:
                return s_
        return None

    for r in strand:
        if not innenfor(r["lat"], r["lng"]):
            continue
        if finnes(r["lat"], r["lng"]):
            continue
        nye.append({
            "navn": f'{r["kode"]} {r["navn"]} · NIVA 6939',
            "kode": f'NIVA 6939-2015 {r["kode"]}',
            "lat": r["lat"], "lng": r["lng"],
            "klasse": None, "aarFra": 2015, "aarTil": 2015,
            "utforende": "NIVA", "oppdragsgiver": "Grimstad kommune",
            "medium": "Strandsone — organismesamfunn, ingen sedimentanalyse",
            "faktaark": None, "verdier": [],
            "opphav": "NIVA 6939-2015",
            "feltnotat": (f'Strandsonestasjon undersøkt 28. juli 2015. Posisjon i WGS84 fra '
                          f'tabell 4, s. {t["6939_strandsone"]}.'),
            "dyp": None,
        })

    for r in blot:
        if not innenfor(r["lat"], r["lng"]):
            continue
        m = finnes(r["lat"], r["lng"])
        if m:
            treff.append(m["navn"])          # samme punkt som Vannmiljø har
        # bløtbunnsstasjoner uten treff finnes ikke her, så ingen ny-gren

    for r in slede:
        if not innenfor(r["lat"], r["lng"]):
            continue
        nye.append({
            "navn": f'Sledetrekk {r["nr"]} · NIVA 5669',
            "kode": f'NIVA 5669-2008 sledetrekk {r["nr"]}',
            "lat": r["lat"], "lng": r["lng"],
            "klasse": None, "aarFra": 2008, "aarTil": 2008,
            "utforende": "NIVA", "oppdragsgiver": "AS Nymo",
            "medium": "Bunnorganismer samlet med slede — ikke en sedimentstasjon",
            "faktaark": None, "verdier": [],
            "opphav": "NIVA 5669-2008",
            "feltnotat": (f'Sledetrekk for innsamling av bunnorganismer til TBT-analyse, '
                          f'{r["dyp"]} m dyp. Trekket går fra {r["lat"]}, {r["lng"]} til '
                          f'{r["latStopp"]}, {r["lngStopp"]} — punktet i kartet er startposisjonen. '
                          f'Vedlegg C, s. {t["5669_slede"]}.'),
            "dyp": r["dyp"],
        })
    return nye, treff


def feltstasjoner_5040(stasjoner):
    """Feltstasjonene i rapporten som ikke finnes i Vannmiljø.

    De har posisjon og feltbeskrivelse, men ingen kjemiske analyser. De tegnes i
    kartet med egen markering, og opphav-feltet sier hvor de kommer fra.
    """
    if not R5040:
        return []
    finnes = {s["navn"] for s in stasjoner}
    ut = []
    for nr in sorted(R5040["felt"]):
        if f"Vikkilen {nr}" in finnes or R5040["verdier"].get(nr):
            continue
        f = R5040["felt"][nr]
        if f["lat"] is None:
            continue
        ut.append({
            "navn": f"St. {nr} · NIVA 5040",
            "kode": f"NIVA 5040-2005 st. {nr}",
            "lat": f["lat"], "lng": f["lng"],
            "klasse": None, "aarFra": None, "aarTil": None,
            "utforende": "NIVA", "oppdragsgiver": "AS Nymo",
            "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
            "faktaark": None,
            "verdier": [],
            "opphav": "NIVA 5040-2005",
            "feltnotat": les_5040.feltbeskrivelse(f),
            "dyp": f["dyp"],
        })
    return ut


# ── hendelser på tidsaksen ──────────────────────────────────────
# Tidsaksen kan bare peke på ting som finnes i datasettet: de fire rapportene
# punktene navngir, tiltaket i Grunnforurensning, og hullene der målinger finnes
# uten at noe punkt navngir en rapport.
HENDELSER = [
    {"aar": 1997, "type": "rapport", "merkelapp": "før renseanlegget",
     "tittel": "NIVA dokumenterer tilstanden i Groosefjorden før det biologiske renseanlegget på Groos settes i drift. Bunnen er tydelig påvirket av det kommunale utslippet.",
     "rapportId": "r-niva3622"},
    {"aar": 2005, "type": "rapport", "merkelapp": "kartlegging",
     "tittel": "NIVA kartlegger Vikkilen for AS Nymo og konkluderer: TBT er hovedproblemet, og hovedkilden har vært aktivitetene ved verftet.",
     "rapportId": "r-niva5040"},
    {"aar": 2008, "type": "rapport", "merkelapp": "uakseptabel risiko",
     "tittel": "Etter pålegg fra SFT konkluderer NIVA med at sedimentene utgjør uakseptabel risiko for human helse og økologi, og foreslår tre tiltaksområder.",
     "rapportId": "r-niva5669"},
    {"aar": 2015, "type": "rapport", "merkelapp": "resipient",
     "tittel": "Resipientundersøkelsen i Groosefjorden viser moderat påvirkning ved utslippet og små endringer siden 1995.",
     "rapportId": "r-niva6939"},
    {"aar": 2016, "type": "tiltak", "merkelapp": "tildekking",
     "tittel": "Sjøbunnen utenfor AS Nymo dekkes til. Grunnforurensning fører lokaliteten «PRI1 - AS Nymo - sjø» som gjennomført tiltak, og åtte stasjoner måles i tildekket sediment samme år.",
     "tiltakId": "t-tildekking-2016"},
    {"aar": 2016, "type": "mangler", "merkelapp": "mangler",
     "tittel": "Tiltaksåret er det tettest målte året etter 2008 — 510 målinger på åtte stasjoner — men ingen av punktene navngir en rapport. Vi har tallene, ikke beskrivelsen av dem.",
     "rapportId": None},
]


def hotspot_tittel(stoff, tbt):
    return {
        "tittel": "TBT ligger over hele kilen — bly og kvikksølv sitter i flekker",
        "hale": (
            "Tributyltinn er verst: høyeste måling er "
            f"{int(tbt['maks']) if tbt else ''} µg/kg, {int(tbt['faktor']) if tbt else ''} ganger "
            "den forvaltningsbaserte Trinn 1-grensen, og NIVA navngir AS Nymo som hovedkilden. "
            "Ingen kilde i grunnlaget er belagt for PAH."),
    }


# ── koblinger som bare gjelder her ───────────────────────────────

def kilde_punkter(kilde, stasjoner):
    """Stasjonene en kilde faktisk kan knyttes til.

    Koblingen må være et faktum, ikke en antakelse. For AS Nymo er den det:
    Vannmiljø oppgir Nymo som oppdragsgiver for nettopp disse stasjonene. De
    øvrige kildene har ingen slik kobling og står derfor uten punkter.
    """
    if kilde["id"] != "K-01":
        return []
    return [s["navn"] for s in stasjoner if "nymo" in (s["oppdragsgiver"] or "").lower()]


def verste_for_kilde(kilde, koblet, stasjoner):
    if not koblet:
        return None
    return max((s for s in stasjoner if s["navn"] in koblet),
               key=lambda s: (s["klasse"] or 0,
                              max((v["verdi"] for v in s["verdier"]
                                   if v["stoff"] == "Tributyltinn (TBT)"), default=0)))["navn"]


def ekstra_stasjoner(stasjoner):
    """Punkter rapportene selv stedfester, som ikke finnes i Vannmiljø."""
    nye = feltstasjoner_5040(stasjoner)
    flere, treff = ekstrapunkter(stasjoner)
    return nye + flere, treff


def beriker(rapporter, stasjoner):
    """Legger rapportenes egne tabellverdier på de rapportene vi har PDF-en til."""
    punkter = punkter_5040(stasjoner)
    nye = feltstasjoner_5040(stasjoner)
    antall_felt = len(R5040["felt"]) if R5040 else 0
    p5669 = punkter_5669(stasjoner)
    _, treff = ekstrapunkter(stasjoner)

    for r in rapporter:
        if r["id"] == "r-niva5040" and punkter:
            r["punkter"] = punkter
            r["punkterForbehold"] = (
                "Verdiene er lest ut av rapportens egne vedlegg: metaller og tørrstoff fra "
                "s. 27, PCB fra s. 28, tinnorganiske forbindelser, PAH og olje fra s. 30, "
                "og feltbeskrivelsen fra stasjonsoversikten på s. 25. "
                f"Rapporten beskriver {antall_felt} feltstasjoner; "
                f"{len(punkter)} av dem er analysert kjemisk, og "
                f"{len(nye)} av feltstasjonene finnes ikke igjen i Vannmiljø og er tegnet "
                "i kartet med egen markering. "
                "Noen tinnorganiske verdier er skrevet med «s» foran i rapporten; "
                "rapporten forklarer ikke tegnet, og verdiene er gjengitt slik de står. "
                "Vannmiljø har de samme tallene uten prefiks.")
            r["referanser"] = (
                "NIVA-rapport 5040-2005, vedlegg A (s. 25–26) og vedlegg B (s. 27–30).")
            r["nyePunkter"] = [x["navn"] for x in nye]

        if r["id"] == "r-niva5669" and p5669:
            uten_posisjon = [x for x in p5669 if x["navnIRapport"].startswith("C")]
            r["punkter"] = p5669
            r["punkterForbehold"] = (
                "Verdiene er lest ut av rapportens egne tabeller: tungmetaller og tørrstoff "
                "fra tabell 2 (s. 22), PCB og PAH fra tabell 3 (s. 23), og tinnorganiske "
                "forbindelser fra tabell 4 (s. 24). Tabellene gjengir også 2004-prøvene til "
                "sammenligning; de hører til NIVA 5040 og står der. "
                f"{len(uten_posisjon)} av radene er prøver entreprenørfirmaet AF tok i 2007 — "
                "de finnes ikke i Vannmiljø, og rapporten oppgir ingen posisjon for dem, så de "
                "kan ikke tegnes i kartet. Rapporten merker dem C 41–43 i tabell 2 og 3, men "
                "C 1–3 i tabell 4; det er de samme tre prøvene, og de er slått sammen her. "
                "Noen tinnorganiske verdier står med «s» foran; rapporten forklarer ikke tegnet, "
                "og verdiene er gjengitt slik de står.")
            r["referanser"] = (
                "NIVA-rapport 5669-2008, tabell 2–4 (s. 22–24). Hele rapporten ligger i "
                "verktoy/hentet/.")

        # NIVA 6939s egen bløtbunnstabell gir koordinater som er identiske med to
        # Vannmiljø-stasjoner. Det er en sterkere kobling enn beskrivelsesfeltet.
        if r["id"] == "r-niva6939" and treff:
            for navn in treff:
                if navn not in r["dekkerPunkter"]:
                    r["dekkerPunkter"].append(navn)
            r["kobling"]["tekst"] += (
                f" I tillegg gir rapportens egen bløtbunnstabell (s. 39) posisjoner som er "
                f"identiske med Vannmiljø-stasjonene {', '.join(treff)} — samme punkt, "
                f"null meters avvik.")
