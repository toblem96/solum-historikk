/* Generert av verktoy/bygg_omrade.py vikkilen3 — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/vikkilen3/ og hentes av hent_omrade.py vikkilen3.
 *
 * Rapportene er funnet fra punktene og ut, ikke fra registeret og inn.
 *
 *   1. Les rapportnummeret ut av beskrivelsesfeltet på stasjonene i Vannmiljø.
 *      4 numre er navngitt av punktene her.
 *   2. Slå nummeret opp i utgiverens egen serie i Nasjonalt vitenarkiv
 *      (NIVA-rapport, hele serien paginert ned).
 *   3. Ta rapporten med bare hvis nummeret stemmer eksakt.
 *
 * Ingen rapport er funnet på annet vis. Vi søker ikke på stedsnavn, årstall eller
 * oppdragsgiver: et treff på stedsnavnet i en tittel er ikke det samme som rapporten
 * bak en måling.
 *
 * 30 av de 4 numrene lot seg slå opp.
 * 0 står med status «ikke_funnet»: punktene navngir dem, registeret
 * har dem ikke. Det er ikke en mangel i søket, det er svaret.
 *
 * Tittel, år, rapportnummer, forfattere, sidetall og sammendrag er registerets egne
 * felt. Sammendraget er rapportens eget. noekkelfunn er setninger derfra, kortet ned.
 * 
 * Denne fanen bruker en videre regel enn den vanlige Vikkilen-fanen. Rapportene
 * punktene navngir er de samme fire, men i tillegg tas alt referanselistene i
 * PDF-ene peker på, to hopp ut. Sitatene er lest ut av PDF-ene av sitater.py, og
 * hvert funn bærer med seg sida og linja det står på.
 *
 * Et sitert nummer må slå til eksakt i NIVA-serien for å komme med. Numre
 * referanselistene nevner uten at arkivet har dem, utelates — de er like ofte
 * OCR-støy fra de skannede rapportene som ekte rapporter.
 *
 * Regelen slipper inn rapporter som ikke handler om dette stedet: metoderapporter,
 * klassifiseringsveiledere og regionale oversikter for Aust-Agder. De står i lista
 * med hva de er. Fortellingen bruker dem ikke — «brukteRapporter» i historie.ts
 * sier hvilke den faktisk hviler på.
 */
export const D_RAPPORTER = [
 {
  "id": "r-niva1815",
  "aar": 1985,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Overvåking av sjøområdet utenfor Utnes, Hisøy.Delrapport 4: Overflatens vannkvalitet i perioden juni 1983 - juni 1985",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "K. Næs",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937a8112a-96a9513a-cef4-455f-b7bc-36377cc1bc67",
  "rapportnummer": "NIVA 1815",
  "sider": "28",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 1919), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 1919"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Kvaliteten av overflatevannet (0-2 m) i Utnesområdet er god. Med hensyn på bakterieinnhold tilfredsstilte vannet helsemyndighetenes krav til godt badevann. Næringssaltkonsentrasjonen er relativt lav og i samme størrelsesorden som for kystområdet. Det har vært en nedgang i bakterieinnholdet og i konsentrasjonen av total nitrogen i perioden 1984-85 sammenlignet med 1981-83. Det er ikke mulig å spore direkte påvirkning fra utslippet til renseanlegget, den dominerende faktoren er Nidelva. Det er ingen tegn til gjennomslag til overflaten av utslippet fra renseanlegget",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 1919",
    "side": 34,
    "sitat": "juni 1983 - juni 1985. 0-81112/1815. Niva, Oslo. 28 s.",
    "iReferanseliste": false
   }
  ],
  "belegg": "sitert av NIVA 1919"
 },
 {
  "id": "r-niva1866",
  "aar": 1986,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Overvåking av fjordene ved Lillesand Hydrografisk-kjemiske undersøkelser januar - desember 1985",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "K. Næs",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937dac864-e2d350db-7faa-4969-bf53-986d6066fa03",
  "rapportnummer": "NIVA 1866",
  "sider": "49",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 1919), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 1919"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Det er gode utskiftingsforhold i Tingsakerfjorden, men dårlige i dypvannet i Skallerfjorden. På de andre stasjonene var oksygenforholdene gode. Stasjonen midt i Tingsakerfjorden, stasjonen ved Julbauen og stasjonen i Gullholmrenna tilfredsstilte ikke myndighetenes krav til godt badevann med hensyn på bakterieinnhold. Særlig ved Julbauen var det tildels meget høye bakteriekonsentrasjoner. Kloakktilførslene til Tingsakerfjorden ved Julbanen medfører sannsynligvis økt planktonproduksjon som muligens belaster dypvannet i Skallefjorden. Det var ingen klare utviklinger sammenlignet med undersøkelsene i 1983/84.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 1919",
    "side": 34,
    "sitat": "1985. 0-83045/1866. Niva, Oslo/Grimstad, 49 s.",
    "iReferanseliste": false
   }
  ],
  "belegg": "sitert av NIVA 1919"
 },
 {
  "id": "r-niva1898",
  "aar": 1986,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Egnethetsundersøkelser for havbruk i Aust-Agder fylke",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "P.B. Wikander",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/0199377a1261-9b5beb92-7e02-4c64-98a5-8468dc14adff",
  "rapportnummer": "NIVA 1898",
  "sider": "159",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 3622), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 3622"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Det er foretatt kvantitativ bunnprøvetaking på 25 lokaliteter langs hele kysten av Aust-Agder. Stasjonene ble valgt på forhånd på grunnlag av kartmessige betraktninger. Ved fortolkninger av materialet er det lagt vekt på biologiske parametre: Artsindeks, artsmangfold, andel ømfintlige arter og log-normalfordeling. Det er utviklet en ny parameter: egnethetsindeks som integrerer artsindeks og artsmangfoldet. Dette har gjordt det mulig å komme frem til et tallmessig uttrykk for egnethet.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 3622",
    "side": 66,
    "sitat": "Wikander, P.B. 1986a. Egnethetsundersøkelser for havbruk i Aust-Agder fylke. NIVA-rapport 1898.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 3622"
 },
 {
  "id": "r-niva1919",
  "aar": 1986,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Overvåking av Groosefjorden/Vikkilen, Grimstad kommune. Hydrografiske/hydrokjemiske undersøkelser 1982-1985",
  "utforer": "NIVA",
  "oppdragsgiver": "Aust-Agder fylkeskommune",
  "folk": "K. Næs",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/01993782d2bb-88ddd6c0-7216-420d-aac1-c39651cc85ef",
  "rapportnummer": "NIVA 1919",
  "sider": "62",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 3622), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 3622"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Det er ikke dramatiske tegn til overgjødsling av fjordområdet, Men fosfor viser noe forhøyede verdier. Det er et høyt, tildels meget høyt, oksygenforbruk i dypvannet. Man må forvente årviss dannelse av hydrogensulfid i bunnvannet i Groosefjorden. Det er sannsynlig at sedimenterbart finstoff er en vesentlig årsak til dette. Bakterietallet i hovedvannmassene er generelt lavt om sommeren, men høye enkeltverdier observeres om vinteren. Bortsett fra fôr bakterier er det ingen forskjell mellom stasjonen ved Saltvik og referansestasjonen.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 3622",
    "side": 65,
    "sitat": "/hydrokjemiske undersøkelser 1982 - 1985. NIVA-rapport l.nr. 1919, 62 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 3622"
 },
 {
  "id": "r-niva1920",
  "aar": 1986,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Overvåking av Groosefjorden/Vikkilen, Grimstad kommune. Bunnfaunaundersøkelse 1983 - 1985",
  "utforer": "NIVA",
  "oppdragsgiver": "Aust-Agder fylkeskommune",
  "folk": "P.B. Wikander",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937b84112-2346118b-eaa9-4b32-85d5-d27cfe38c84f",
  "rapportnummer": "NIVA 1920",
  "sider": "62",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 3622, sitert av NIVA 5669), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 3622, sitert av NIVA 5669"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Det er tatt kvantitative bunnprøver på fire stasjoner i 1983,1984 og 1985. Tre stasjoner lå i Vikkilen-Groosefjordbassenget. En stasjon fungerte som referansestasjon. Det er utregnet en rekke parametre for å beskrive tilstand og utviklingstendens. Alle tilstandsparametre peker i retning av at stasjonene i fjordbassenget har gjennomgått en utvikling mot sterkere organisk belastning. Utviklingen var ikke dramatisk. Dyprennen i Groosefjorden har årlig oksygensvikt av varierende styrke og varighet. For å holde forurensningsvirkningene på et lavt moderat nivå må nåværende belastning øke og helst redusere.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 3622",
    "side": 66,
    "sitat": "Bunnfaunaundersøkelsene 1983-1985. NIVA-rapport1920, 62 s.",
    "iReferanseliste": true
   },
   {
    "retning": "sitert av",
    "motpart": "NIVA 5669",
    "side": 62,
    "sitat": "Bunnfaunaundersøkelsene 1983-1985. NIVA rapport nr 1920-1986",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 3622, sitert av NIVA 5669"
 },
 {
  "id": "r-niva1939",
  "aar": 1986,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Overvåking av sjøområdet utenfor Utnes, Hisøy. Delrapport 7: Bløtbunnsfauna 1981, 1983 og 1985. Sedimenter",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "P.B. Wikander",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937755569-cd1bac53-db58-4871-b9e4-ced6ed71253d",
  "rapportnummer": "NIVA 1939",
  "sider": "79",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 4473), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 4473"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Det er påvist sterk økning i antall arter og individer fra 1981 til 1985 på stasjonen nærmest utslippet. Dette er tolket slik at utslippet hittil har hatt en stimulerende effekt på produksjonen og at de organiske tilførsler til nærområdet har vært omsatt av organismesamfunnet. Tilstanden kan være labil og kan endres raskt. Sømskilen var det området som visste sterkest tegn på organisk overbelastning. Årsaken er transport fra Nideelva. De øvrige stasjonene synes upåvirket av utslipp og elvetransport.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 4473",
    "side": 36,
    "sitat": "1981, 1983 og 1985. Sedimenter. NIVA rapport nr. 1939. 79 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 4473"
 },
 {
  "id": "r-niva1978",
  "aar": 1987,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Bløtbunnfaunaen i Tvedestrandsfjorden. Resultatene fra 1983, 1984 og 1986",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "P.B. Wikander",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937c8bf87-d457dfd0-5220-4578-a7d8-bea2a39feed6",
  "rapportnummer": "NIVA 1978",
  "sider": "72",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 4473), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 4473"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Syv stasjoner er prøvetatt i tre år: 1983, 1984 og 1986. Bunnmiljøet i fjorden til og med Sagesund var sterkt forstyrret, med sulfider i sedimentet alle tre årene. Den dypeste stasjonen var azooisk ved alle prøvetakinger. De øvrige stasjonene innenfor Sagesund var dels azooiske dels med en ekstrem utarmet fauna. Det kunne ikke påvises noen utviklingstendens på disse. På de ytre stasjonene (utenfor Sagesund) viste 1986 en til dels sterk øking i antall arter og individer i forhold til de foregående år. Forklaringen er usikker. Tre forhold styrer miljøet i fjorden: Hemmet vannutskifting, deponert sagflis og kommunale utslipp. Elementer i et tilførselsbudsjett er satt opp. Det er gitt enkelte konkrete anbefalinger.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 4473",
    "side": 36,
    "sitat": "NIVA rapport nr. 1978. 72 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 4473"
 },
 {
  "id": "r-niva2103",
  "aar": 1988,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Tiltaksanalyse for Indre Oslofjord. Forurensning fra fritidsbåter og skip",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "K. Baalsrud, R. Gulbrandsen",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937f3c509-2cfcf4a7-6174-4084-b57d-c7718c47dfee",
  "rapportnummer": "NIVA 2103",
  "sider": "39",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 4473), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 4473"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Rapporten gir en oversikt over forurensninger av toalettavløp, søppel og olje fra fritidsbåter og skip i Indre Oslofjord. Det er lite forurensning av søppel og olje. Totalt antas 86.000 fritidsbåter, hvorav 50.000 tilfører fjorden toalettavløp. Dette antas å innebære utslipp av 0,8 tonn fosfor, 12 tonn organisk stoff (TOC) og 6,6 tonn nitrogen årlig. Det foreslås at oppsamlingstank for toalettavløp i båtene påbys og at mottakeranlegg i båthavnene bygges ut. Tiltakene vil være fullt effektive etter 10 år og antas å gi en redusert belastning på 1 tonn fosfor. Skip i Indre Oslofjord slipper 0,1 tonn fosfor, 1,5 tonn organisk stoff (TOC) og 0,6 tonn nitrogen. Tiltak som allerede er planlagt vil redusere utslippene med ca 70 %. Det anbefales at det utarbeides forskrifter for utslipp fra fritidsbåter og skip.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 4473",
    "side": 35,
    "sitat": "og skip. NIVA rapport 2103. 39 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 4473"
 },
 {
  "id": "r-niva2173",
  "aar": 1988,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Skadevirkninger på Chrysochromulina-oppblomstring på utvalgte stasjoner i Aust-Agder",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "P.B. Wikander, N. Green",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937bb8a49-a67ebbf8-082e-467b-8f24-651dcf2d9ea1",
  "rapportnummer": "NIVA 2173",
  "sider": "52",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 3622), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 3622"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Det er undersøkt seks grunnvanns-/dykkestasjoner og tre dypvanns- /bløtbunnstasjoner. Gruntvannstasjonene var historisk sett nye. To av bløtbunnstasjonene har vært prøvetatt siden 1983. På alle stasjonene ble det, hvis mulig/hensiktsmessig tatt kvantitative og kvalitative prøver. Pr. 16. juni var skadevirkningene på bløtbunn ubetydelige til ikke registrerbare, men det er fullt mulig at skader kan oppstå på lengre sikt. På dykkerstasjoner ble 20 arter hvirvelløse dyr og to algearter registrert med skade/dødelighet.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 3622",
    "side": 66,
    "sitat": "stasjoner i Aust-Agder. NIVA-rapport 2173. 52s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 3622"
 },
 {
  "id": "r-niva2686",
  "aar": 1992,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Bunnfauna i terskelfjorder i Aust-Agder. Undersøkelser etter vannutskiftningene vinteren 1989",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "E. Oug",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937951ac7-04c59639-a48b-4958-a3d8-75f3845bd6d4",
  "rapportnummer": "NIVA 2686",
  "sider": "26",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 3622), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 3622"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "I en rekke fjorder på Sørlandet ble råttent dypvann løftet til få meters dyp vinteren 1989 og forårsaket dødelighet av fisk og bunndyr. Prøvetaking av bløtbunnsfauna ble foretatt i Gjevingpollen ved Risør, Høydal i Tvedestrandsfjorden, Sjøverstø/Låddalsfjorden i Moland, Isefjærfjorden i Høvåg og Eidekilen ved Grimstad. Generelt viste undersøkelsen at dyrelivet i fjordene ikke ble påført alvorlige skader ved vannutskiftningene, men i indre Isefjærfjorden var faunaen unormal, muligens på grunn av dødelighet. Det var svært arts- og individrike prøver fra Gjevingpollen, Tvedestrandfjorden og ytre Isefjærfjorden.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 3622",
    "side": 65,
    "sitat": "vinteren 1989. NIVA rapport nr. 2686. 26 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 3622"
 },
 {
  "id": "r-niva3154",
  "aar": 1994,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Miljøstatus i vannforekomster i Aust-Agder. Del II. Marine resipienter",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "T. Jacobsen, E. Dahl, E. Oug",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937adc4b8-b6f219f5-9753-4091-93f3-03fc7fe577d4",
  "rapportnummer": "NIVA 3154",
  "sider": "115",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 3622), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 3622"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Rapporten gir en oppdatert oversikt over resipient- og miljøundersøkelser i sjøområdene i Aust-Agder. Hver av kystkommunene - Risør, Tvedestrand, Grimstad, Lillesand er behandlet separat. Oversikten er inndelt etter emnene tilførsler, hydrografi/hydrokjemi, plankton, hardbunnssamfunn, bløtbunnssamfunn, tarmbakterier og miljøgifter. Videre er det gitt en oversikt over tilstanden i de undersøkte områdene. I rapporten gis det en vurdering av de tidligere og igangværende undersøkelsene som grunnlag for fremtidige resipientundersøkelser og overvåking. Det blir også gitt anbefalinger om undersøkelser som kan samordnes mellom kommunene.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 3622",
    "side": 64,
    "sitat": "resipienter. NIVA-rapport 3154, 115s + vedl.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 3622"
 },
 {
  "id": "r-niva3347",
  "aar": 1995,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Indikatorer for miljøtilstand på marin bløtbunn. Klassifisering av 73 arter/taksa. En ny indeks for miljøtilstand, basert på innslag av tolerante og ømfintlige arter på lokaliteten",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "B. Rygg",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937a1545d-22dd460a-03e5-49a7-82ed-c70e38c09e40",
  "rapportnummer": "NIVA 3347",
  "sider": "68",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 3622), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 3622"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Toleranse overfor dårlige miljøforhold kan variere mye fra art til art. En snakker om tolerante og ømfintlige arter. Ved dårlige forhold, f.eks. forårsaket av forurensning, vil ømfintlige arter slås ut og tolerante arter ofte øke i mengde. Dette betyr at artsmangfoldet (diversiteten) går ned. 73 arter/taksa er klassifisert etter graden av toleranse eller ømfintlighet. Det enkelte taksons ømfintlighetsgrad er fastsatt ved gjennomsnittlig verdi av de fem laveste ES1OO-verdier blant de prøvene hvor taksonet forekom, basert på et omfattende materiale fra norske fjorder og kystfarvann. Denne verdien betegnes som taksonets ES 10Omins-verdi. Indikatorartenes innslag i faunaen på en lokalitet kan benyttes i utrekningen av en verdi for indikatorartsindeks, som har sammenheng med lokalitetens miljøtilstand.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 3622",
    "side": 65,
    "sitat": "NIVA rapport nr. 3347. 68 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 3622"
 },
 {
  "id": "r-niva3378",
  "aar": 1996,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Vannkvalitet i kystområdene i Arendal 1992-1994. (Water quality in the coastal areas of Arendal, Norway 1992-1994)",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "T. Jacobsen, E. Oug, J. Magnusson",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937ec21a8-c240c880-8469-4585-9f24-251f62d12492",
  "rapportnummer": "NIVA 3378",
  "sider": "100",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 3622), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 3622"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Undersøkelse av miljøtilstanden er foretatt i indre kystområder i Arendal, fra Utnes (Hisøy) i vest til Eikelandsfjorden i øst. Undersøkelsen omfatter hydrografiske og hydrokjemiske målinger i vannmassene, undersøkelser av bløtbunnsfauna i dypområdene og undersøkelser av fastsittende alger og dyr i strandsonen. Undersøkelsene viser at Flosterfjorden og Eikelandsfjorden, samt delvis Strengereid og Kilsund er organisk belastet. Forholdene i Flosterfjorden og Eikelandsfjorden kan være naturlig betinget, men det er enkelte tegn som også tyder på lokale tilførsler. I Arendal havn viste både vannmasser og strandsonesamfunn effekter av lokale tilførsler. Ved det gamle utslippsstedet ved Utnes har bløtbunnsfaunaen gjennomgått en positiv utvikling etter at utslippet ble flyttet. Det er pr. idag ingen større effekter på bløtbunnsfaunaen ved det nye utslippsstedet ved Ærey.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 3622",
    "side": 65,
    "sitat": "1994. NIVA rapport nr. 3378. 100 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 3622"
 },
 {
  "id": "r-niva3622",
  "aar": 1997,
  "tittel": "Tilstanden i sjøområdene ved Grimstad før start av biologisk renseanlegg på Groos",
  "utforer": "NIVA",
  "oppdragsgiver": "Grimstad kommune",
  "folk": "T. Jacobsen, E. Dahl, E. Oug, T. Johannessen, F. Moy",
  "status": "lest",
  "tillit": "hoy",
  "url": "https://nva.sikt.no/registration/0199379af536-26e4c552-848a-4e8a-8cd0-a5ccd318f461",
  "rapportnummer": "NIVA 3622",
  "sider": "91",
  "begrunnelse": "2 stasjoner oppgir rapportnummeret i beskrivelsesfeltet i Vannmiljø. Nummeret er slått opp i NIVA-serien i Nasjonalt vitenarkiv og stemmer eksakt. Sammendraget under er rapportens eget, hentet fra registeret.",
  "kobling": {
   "type": "navngitt_i_vannmiljo",
   "tekst": "To stasjoner i Groosefjorden oppgir «NIVA-rapport 3622-1997» i beskrivelsen. Merk at teksten i Vannmiljø kaller rapporten «Miljøtilstanden i Aust-Agder, Grimstad», mens arkivets tittel er en annen — det er rapportnummeret som knytter dem sammen, ikke tittelen."
  },
  "dekkerPunkter": [
   "Groosefjorden",
   "Grooseholmen"
  ],
  "figurer": [
   {
    "fil": "figurer/niva-3622-s22-1.png",
    "tittel": "Figur 2",
    "side": 22,
    "beskrivelse": "Figur 2. Beliggenheten av de tre undersøkte hydrografistasjonene i Groosefjorden, Grimstad, i 1995."
   },
   {
    "fil": "figurer/niva-3622-s32-1.png",
    "tittel": "Figur 7",
    "side": 32,
    "beskrivelse": "Figur 7. Stasjonsplassering ved undersøkelse av strandsone og dykk i Grimstad-skjærgården 1995. (Sida har flere bilder enn figurtekster — paringen mellom bilde og tekst er usikker.)"
   },
   {
    "fil": "figurer/niva-3622-s24-1.png",
    "tittel": "Figur 3",
    "side": 24,
    "beskrivelse": "Figur 3. Isopleter for temperatur (°C), saltholdighet (psu), tetthet (sigma t) og oksygenkonsentrasjon (Sida har flere bilder enn figurtekster — paringen mellom bilde og tekst er usikker.)"
   },
   {
    "fil": "figurer/niva-3622-s44-1.png",
    "tittel": "Figur 12",
    "side": 44,
    "beskrivelse": "Figur 12. Stasjoner for prøvetaking av bløtbunnsfauna i Grimstad kommune i 1995. • : stasjoner (Sida har flere bilder enn figurtekster — paringen mellom bilde og tekst er usikker.)"
   }
  ],
  "sammendrag": "I 1995 ble Groosefjorden undersøkt for å dokumentere tilstanden før igangsetting av nytt biologisk renseanlegg. Det ble også gjort undersøkelser i andre kystområder i Grimstad kommune for å vurdere tilstanden. Undersøkelsene omfattet vannkjemiske målinger (oksygen, næringssalter, temperatur og saltholdighet), bløtbunnprøver, hardbunnundersøkelser (strandsone og dykk) samt undersøkelse av fiskeforekomster. Undersøkelsene viste at bunnområdene i Groosefjorden var tydelig påvirket av det kommunale utslippet på Groos. Bunnvannet hadde lave oksygenkonsentrasjoner og nær utslippet var bløtbunnsfaunaen dominert av arter som opptrer ved tung organisk belastning, men det var ingen større endringer i tilstanden siden forrige undersøkelse på 1980-tallet. Ved dykking ble det i tillegg registrert hydrogensulfid i sedimentene ved utslippspunktet. I overflatelaget ble det kun funnet svake effekter av utslippet. I Homborsund var det ingen større effekter av utslippet, men resultatene tyder på at området er sårbart for økning i tilførslene.",
  "noekkelfunn": [
   "Groosefjorden ble undersøkt i 1995 for å dokumentere tilstanden før det nye biologiske renseanlegget ble satt i drift.",
   "Bunnområdene var tydelig påvirket av det kommunale utslippet på Groos, med lave oksygenkonsentrasjoner i bunnvannet.",
   "Nær utslippet var bløtbunnsfaunaen dominert av arter som opptrer ved tung organisk belastning, og det ble registrert hydrogensulfid i sedimentene ved utslippspunktet.",
   "I overflatelaget ble det bare funnet svake effekter, og det var ingen større endringer siden undersøkelsen på 1980-tallet."
  ],
  "punkter": [],
  "punkterForbehold": "Ingen punktverdier er lest ut av denne rapporten. PDF-en er ikke lastet ned — nedlastingsruta i Nasjonalt vitenarkiv svarer 403 uten innlogging. Måleverdiene for stasjonene rapporten dekker, ligger likevel i Vannmiljø og vises på punktene i kartet.",
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "punkt",
  "belegg": "Navngitt av 2 målepunkter i Vannmiljø.",
  "maaltFra": 2015,
  "maaltTil": 2015
 },
 {
  "id": "r-niva3869",
  "aar": 1998,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Tilstanden i Harkmarkfjorden, Mandal kommune. Tåler fjorden økt belastning?",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "T. Jacobsen, J. Magnusson, E. Oug",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/01993798d07b-7afa4522-126d-46de-9888-24aa18c62581",
  "rapportnummer": "NIVA 3869",
  "sider": "44",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 4473), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 4473"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Undersøkelser av vannmasser, sedimenter og organismesamfunn på grunt vann i Harkmarkfjorden viste at fjorden var overbelastet med næringssalter/organisk stoff. Bunnvannet i indre del av Harkmarkfjorden hadde hydrogensulfid i hele prøvetakingsperioden, mens ytre del av fjorden hadde periodevis råttent bunnvann. Etter SFTs klassifiseringssystem kan tilstanden i fjorden klassifiseres som meget dårlig. Strandsonen var flere steder preget av hurtigvoksende grønnalger, og vegetasjonen var nedslammet. Bunnsedimentene på 5 og 10 meters dyp hadde høyt innhold av organisk materiale. Næringssaltinnholdet i overflatelaget var stort sett innenfor det normale, men med noe høye nitrogenverdier i en tilførselselv. Den meget dårlige tilstanden i bunnområdene skyldes hovedsakelig naturlige tilførsler av næringssalter/organisk stoff og det faktum at fjorden er svært innelukket med dårlig vannutskiftning, men antropogene (menneskeskapte) tilførsler har også bidratt til dagens tilstand. En eventuell økning i tilførsler av næringssalter/organisk stoff vil gi negative effekter på hele fjordsystemet.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 4473",
    "side": 35,
    "sitat": "fjorden økt belastning ? NIVA rapport nr. 3869. 44 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 4473"
 },
 {
  "id": "r-niva3908",
  "aar": 1998,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Miljøtilstanden i Risørs kystområder før igangsetting av nytt renseanlegg. Oksygenforhold, hardbunnsorganismer og bløtbunnsfauna",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "T. Kroglund, E. Gahl, E. Oug",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/0199379960cd-8139b5eb-1b95-48d8-a88d-3a411b0909f2",
  "rapportnummer": "NIVA 3908",
  "sider": "58",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 4473), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 4473"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Undersøkelser av oksygeninnhold i vannmassene (5 stasjoner), hardbunnsorganismer i strandsonen (12 stasjoner) og bløtbunnsfauna i dypbassengene (4 stasjoner) ble gjennomført i kystområdene rundt Risør i 1996 og 1997 for å kartlegge dagens tilstand. De undersøkte områdene omfattet Flisvika, ytre del av Sandnesfjorden, Nordfjorden og Sørfjorden. Undersøkelsene viste at tilstanden i ytre del av Sandnesfjorden var god, både i dypvannet og på grunt vann. I Flisvika var laveste målte oksygenkonsentrasjon i tilstandsklasse IV (dårlig), sedimentene var noe organisk anriket, mens tilstanden for bløtbunnsfaunaen var fortsatt god. Strandsonen hadde en rik og upåvirket vegetasjon. På 80 meters dyp i Nordfjorden var oksygenforholdene gode, men sedimentene hadde høyt organisk innhold og det var en noe artsfattig bløtbunnsfauna. I Røedsfjorden var oksygenforholdene gode ned til 20 meter, men i bunnvannet var oksygeninnholdet i meget dårlig tilstand. Ved en måling var det H2S på 75 meter. Bunnfauna og sedimenter på 31 meter indikerte meget god tilstand, men trolig er det perioder med dårlige oksygenforhold og stor avsetning av organisk materiale. Strandsonen i Sørfjorden var preget av stor begroing av forurensningstolerante arter som indikerer at området er overgjødslet av næringssalter.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 4473",
    "side": 35,
    "sitat": "renseanlegg. Oksygenforhold, hardbunnsorganismer og bløtbunnsfauna. NIVA rapport nr. 3908-",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 4473"
 },
 {
  "id": "r-niva4052",
  "aar": 1999,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Miljøtilstanden i Lillesands kystområder. Oksygenforhold, hardbunnsorganismer og bløtbunnfauna",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "T. Kroglund, E. Oug, E. Dahl",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/0199377500fd-8a4b8cd1-22f4-414f-9869-1def2fda01a6",
  "rapportnummer": "NIVA 4052",
  "sider": "75",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 4473), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 4473"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Undersøkelser av oksygeninnhold i vannmasser, hardbunnsorganismer i strandsonen og bløtbunnsfauna ble gjennomført i Skallefjorden, Tingsakerfjorden og Isefjærfjorden i Lillesand kommune i perioden 1995 -1998. Tingsakerfjorden hadde god vannutskiftning, gode oksygenforhold i bunnvannet og en frisk og artsrik bunnfauna. På grunt vann var strandsonen preget av noe næringsrike forhold, spesielt ved Tingsaker og i Lillesand havn. Resultatene tyder ikke på større endringer i tilstanden etter igangsetting av renseanlegg. Skallefjorden hadde dårlige oksygenforhold i bunnvannet (tilstandsklasse dårlig) og bunnfaunaen var artsfattig (tilstandsklasse mindre god). Den reduserte tilstanden skyldes tilførsler av organisk materiale og nedsatt utskiftning av bunnvannet. På grunt vann var forholdene gode. Isefjærfjorden hadde reduserte oksygenforhold (tilstandsklasse meget dårlig ) fra 10 m dyp (hydrogensulfid), men det var en forholdsvis artsrik bunnfauna ned til 10 m. Resultatene tyder på at vanngjennomstrømningen i fjordens ytre deler har økt, og at hydrogensulfidkonsentrasjonen i dypvannet har blitt redusert etter gjenåpning av kanalen mellom Kirkekilen og Kvanneidfjorden. Tilstanden i Kirkekilen har blitt betraktelig bedre på grunn av den økte vannutskiftningen, med blant annet friskere bunnsedimenter og flere arter i strandsonen.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 4473",
    "side": 35,
    "sitat": "hardbunnsorganismer og bløtbunnsfauna. NIVA rapport nr. 4052-99. 75 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 4473"
 },
 {
  "id": "r-niva4302",
  "aar": 2001,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Konsekvensutredning for utvidet småbåthavn i Barselkilen, Grimstad kommune",
  "utforer": "NIVA",
  "oppdragsgiver": "Grimstad kommune",
  "folk": "E. Oug, F. Kroglund",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937a12895-3f89443d-535a-41a1-a7d3-092717ffd7bc",
  "rapportnummer": "NIVA 4302",
  "sider": null,
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 4473), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 4473"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "I Barselkilen ved Grimstad er en eksisterende småbåthavn under utvidelse. Utredningen tar sikte på å belyse hvilke konsekvenser utvidelsen kan ha for miljøtilstanden i Barselkilen og den tilstøtende Osterkilen. Begge områdene har terskler og er sårbare for forurensninger. Områdene er meget attraktive for fritidsbruk, men er noe påvirket av næringsanrikning. I båthavnen er bunnsedimentene sterkt forurenset av olje og miljøgiften TBT. De viktigste miljøeffekter ved fritidsbåter kan knyttes til søl av oljeprodukter, utslipp av eksos, utslipp av organisk avfall, utlekking av miljøgifter og oppvirvling av bunnslam fra propellvann. I Barselkilen og Osterkilen vil trolig det meste av tilførte forurensninger bli oppholdt i området pga områdenes topografi og liten vannutskiftning. Områdene vil være særlig sårbare for organiske tilførsler og miljøgifter. Alle utslipp av organisk materiale og miljøgifter utover dagens nivå vil gi økt belastning på naturmiljøet. Vinteropplag av båter, som vil medføre risiko for økte tilførsler av miljøgifter i forbindelse med rengjøring og bunnsmøring, frarådes.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 4473",
    "side": 36,
    "sitat": "kommune. NIVA rapport nr. 4302. 20 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 4473"
 },
 {
  "id": "r-niva4473",
  "aar": 2002,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Miljøgifter i småbåthavner i Aust-Agder 2000. Metaller, klororganiske forbindelser, PAH, TBT og olje i bunnsedimenter",
  "utforer": "NIVA",
  "oppdragsgiver": "Fylkesmannen i Aust-Agder",
  "folk": "K. Næs, E. Oug, J. Håvardstun",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/0199378695b1-7496b1e9-3ae2-4e9e-a3ac-16af4cb8ed26",
  "rapportnummer": "NIVA 4473",
  "sider": "37",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 6939, siterer NIVA 3622), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 6939, siterer NIVA 3622"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Bunnsedimenter i ni småbåthavner i Aust-Agder ble undersøkt for miljøgifter i oktober 2000. Havnene var Mindalen (Risør kommune), Østeråbukta (Tvedestrand kommune), Ubekilen og Varmekrogen (Arendal kommune), Sømskilen, Fevik, Barselkilen og Grømbukt (Grimstad kommune) og Tingsaker (Lillesand kommune). Småbåthavnene var til dels betydelig forurenset av tjærestoffer (PAH), tributyl-tinn (TBT) og oljekomponenter, men også i noen grad kadmium. Det var for det meste moderat til lav forurensning av tungmetaller og PCB, og av andre klororganiske forbindelser. I alle havnene med unntak for Grømbukt var sedimentet sort, luktet av hydrogensulfid og hadde høyt organisk innhold. Småbåthavner som ligger i tilknytning til større skipshavner og bosettingsområder (Varmekrogen, Fevik) var påvirket av ulike kilder. I Grømbukt, Sømskilen, Barselkilen og Tingsaker, som alle ligger lenger fra større industrivirksomhet, var forurensningsmønsteret nokså likt. Det organiske innholdet i sedimentet var signifikant relatert til miljøgiftinnholdet, mens andre faktorer som båthavnens størrelse og vinteropplag av båter, syntes å være av relativt mindre betydning. Undersøkelsen viser at det er behov for tiltak for å begrense forurensningene, og at havnenes beliggenhet og lokale forhold har betydning og bør vurderes ved utbygginger og nyanlegg.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 6939",
    "side": 59,
    "sitat": "forbindelser, PAH, TBT og olje i bunnsedimenter. NIVA rapport 4473-2002. 37 s.",
    "iReferanseliste": true
   },
   {
    "retning": "siterer",
    "motpart": "NIVA 3622",
    "side": 35,
    "sitat": "før start av biologisk renseanlegg på Groos. NIVA rapport nr. 3622. 91 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 6939, siterer NIVA 3622"
 },
 {
  "id": "r-niva4548",
  "aar": 2002,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Indicator species index for assessing benthic ecological quality in marine waters of Norway",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "B. Rygg",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/0199378c4db3-7ea70780-231d-4724-8d27-c7eb977a9c67",
  "rapportnummer": "NIVA 4548",
  "sider": "32",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 5670), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 5670"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "An indicator species index (ISI) for assessing ecological benthic quality is presented. Development of the index was based on data from Norwegian soft-bottom fauna stations. Different species react differently to detrimental environmental conditions. Diversity values at the stations were used as indicators of stress levels endured by the species occurring at that stations, thus establishing specific sensitivities. Sensitivity values were determined for 200 common taxa. The occurrence or absence of such indicator species in a sample can be used for calculating an indicator species index value (biotic index) of the sample. This value is used as an indicator of ecological quality. The indicator species index value (ISI) of a sample is defined as the average of the sensitivity values of the species occurring in the sample. Only presence/abscence of indicator species, not their abundance, is considered. Species which occur in the sample, but having no sensitivity values assigned to them, are ignored in the calculation of ISI. Examples of application of the index are shown for the Lillesand, Tvedestrand and Hvaler area, Norway.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 5670",
    "side": 29,
    "sitat": "Norway. NIVA rapport 4548-2002. 32 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 5670"
 },
 {
  "id": "r-niva5040",
  "aar": 2005,
  "tittel": "Sedimentundersøkelser i Vikkilen knyttet til fylkesvis tiltaksplan",
  "utforer": "NIVA",
  "oppdragsgiver": "AS Nymo / Fylkesmannen i Aust-Agder",
  "folk": "K. Næs",
  "status": "lest",
  "tillit": "hoy",
  "url": "https://nva.sikt.no/registration/019937c64939-81f9c553-2293-46c8-b748-13422794fffb",
  "rapportnummer": "NIVA 5040",
  "sider": "58",
  "begrunnelse": "15 stasjoner oppgir rapportnummeret i beskrivelsesfeltet i Vannmiljø. Nummeret er slått opp i NIVA-serien i Nasjonalt vitenarkiv og stemmer eksakt. Sammendraget under er rapportens eget, hentet fra registeret.",
  "kobling": {
   "type": "navngitt_i_vannmiljo",
   "tekst": "15 stasjoner har «Miljøgifter i sedimenter 2004. NIVA-rapport OR-5040.» i beskrivelsesfeltet. Nummeret er slått opp i NIVA-serien og stemmer."
  },
  "dekkerPunkter": [
   "Vikkilen 1",
   "Vikkilen 12",
   "Vikkilen 13",
   "Vikkilen 14",
   "Vikkilen 15",
   "Vikkilen 16",
   "Vikkilen 2",
   "Vikkilen 20",
   "Vikkilen 22",
   "Vikkilen 24",
   "Vikkilen 26",
   "Vikkilen 3",
   "Vikkilen 4",
   "Vikkilen 6",
   "Vikkilen 8"
  ],
  "figurer": [
   {
    "fil": "figurer/niva-5040-s9-1.png",
    "tittel": "Figur 1",
    "side": 9,
    "beskrivelse": "Figur 1. Kart over prøvetakingsstasjoner i Vikkilen. Sedimentstasjonene er merket med røde sirkler."
   },
   {
    "fil": "figurer/niva-5040-s10-1.png",
    "tittel": "Figur 2",
    "side": 10,
    "beskrivelse": "Figur 2. Kart over stasjoner for innsamling av blåskjell og strandsnegl."
   },
   {
    "fil": "figurer/niva-5040-s14-1.png",
    "tittel": "Figur 3",
    "side": 14,
    "beskrivelse": "Figur 3. Konsentrasjon av kadmium i overflatesedimentene (0-2 cm)."
   },
   {
    "fil": "figurer/niva-5040-s14-2.png",
    "tittel": "Figur 4",
    "side": 14,
    "beskrivelse": "Figur 4. Konsentrasjon av kobber i overflatesedimentene (0-2 cm)."
   }
  ],
  "sammendrag": "Forurensningssituasjonen i Vikkilen er blitt kartlagt gjennom undersøkelser av bunnsedimentet og blåskjell. Vikkilen er i liten grad forurenset av PCB. Fjordområdet er relativt lite forurenset av tungmetaller bortsett fra enkelte steder i nærområdet til AS Nymo. Kilen er markert til meget sterkt forurenset av PAH. Det forurensningsmessige hovedproblemet i Vikkilen er knyttet til TBT. Verdiene er svært høye og hele fjorområdet må karakteriseres som meget sterkt forurenset. Hovedkilden til forurensningen har vært aktivitetene ved AS Nymo. Imidlertid er det også andre mindre kilder som småbåthavn og generell skipstrafikk. Resultatene tyder på at spredningen fra aktivitetene ved AS Nymo i dag er lokal og avtagende. Belastningen på Vikkilen har avtatt og vil fortsatt avta som følge av restriksjoner på bruk av TBT-holdig bunnstoff. Imidlertid vil sedimentene representere en kilde til forurensning i lang tid fremover og tiltak mot sedimentforurensningen må vurderes dersom man vil redusere belastningen ytterligere. Eventuelle tiltak må være forankret i miljømål for Vikkilen og kost/nytte-vurderinger må gjøres før tiltak besluttes.",
  "noekkelfunn": [
   "Det forurensningsmessige hovedproblemet i Vikkilen er TBT — verdiene er svært høye, og hele fjordområdet må karakteriseres som meget sterkt forurenset.",
   "Hovedkilden til forurensningen har vært aktivitetene ved AS Nymo. Andre, mindre kilder er småbåthavn og generell skipstrafikk.",
   "Kilen er markert til meget sterkt forurenset av PAH.",
   "Vikkilen er i liten grad forurenset av PCB, og relativt lite forurenset av tungmetaller bortsett fra enkelte steder nær AS Nymo.",
   "Spredningen fra Nymo er i dag lokal og avtagende, men sedimentene vil være en kilde i lang tid framover."
  ],
  "punkter": [
   {
    "navn": "Vikkilen 3",
    "navnIRapport": "St. 3",
    "side": 27,
    "tekst": "19,4 m dyp. silt/leire. farge: olivengrønn overflate, resten grå med grønnskjær. lukt: ingen. Posisjon 58 21,086 N, 8 36,578 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "760",
     "PAH (SFT)": "2527,2",
     "Cu": "70,2",
     "Pb": "43,6",
     "Zn": "121",
     "Cd": "<0,2",
     "Hg": "0,17",
     "PCB7": "2,84",
     "Olje": "<100",
     "TS %": "35,3"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 4",
    "navnIRapport": "St. 4",
    "side": 27,
    "tekst": "14,4 m dyp. silt/leire. farge: olivengrønn overflate, resten grå med grønnskjær. lukt: svak lukt av \"gørrsaule\" (ikke h2s). Posisjon 58 21,217 N, 8 36,484 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s950",
     "PAH (SFT)": "8726",
     "Cu": "108",
     "Pb": "62,7",
     "Zn": "170",
     "Cd": "0,4",
     "Hg": "0,31",
     "PCB7": "6,42",
     "Olje": "<100",
     "TS %": "30,3"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 6",
    "navnIRapport": "St. 6",
    "side": 27,
    "tekst": "11,1 m dyp. silt/leire. farge: olivengrønn overflate, resten gråsort. lukt: svak lukt av \"gørrsaule\" (ikke h2s). Posisjon 58 21,372 N, 8 36,666 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s16000",
     "PAH (SFT)": "11228",
     "Cu": "308",
     "Pb": "96,1",
     "Zn": "317",
     "Cd": "0,4",
     "Hg": "0,25",
     "PCB7": "20,2",
     "Olje": "<100",
     "TS %": "38,5"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 8",
    "navnIRapport": "St. 8",
    "side": 27,
    "tekst": "12,2 m dyp. silt/leire. farge: sort. lukt: moderat lukt av \"gørrsaule\" (ikke h2s). Posisjon 58 21,459 N, 8 36,733 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s54000",
     "PAH (SFT)": "29441",
     "Cu": "2040",
     "Pb": "483",
     "Zn": "2620",
     "Cd": "1,4",
     "Hg": "0,36",
     "PCB7": "12,3",
     "Olje": "120",
     "TS %": "20,7"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 12",
    "navnIRapport": "St. 12",
    "side": 27,
    "tekst": "12,8 m dyp. silt/leire. farge: sort. lukt: moderat lukt av \"gørrsaule\" (ikke h2s). Posisjon 58 21,495 N, 8 36,716 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s63000",
     "PAH (SFT)": "26091",
     "Cu": "3530",
     "Pb": "386",
     "Zn": "2680",
     "Cd": "1,9",
     "Hg": "0,17",
     "PCB7": "8,04",
     "Olje": "160",
     "TS %": "19"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 13",
    "navnIRapport": "St. 13",
    "side": 27,
    "tekst": "15,9 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (1mm), resten gråsort. lukt: meget svak lukt av \"gørrsaule\" (ikke h2s). Noen få stein (1-2 cm) i grabben + levende \"kuskjell\"?. Posisjon 58 21,504 N, 8 36,813 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s18000",
     "PAH (SFT)": "10856",
     "Cu": "347",
     "Pb": "194",
     "Zn": "619",
     "Cd": "0,4",
     "Hg": "0,47",
     "PCB7": "27,4",
     "Olje": "120",
     "TS %": "36,3"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 14",
    "navnIRapport": "St. 14",
    "side": 27,
    "tekst": "10,9 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (1mm), resten gråsort. lukt: meget svak lukt av \"gørrsaule\" (ikke h2s). Noen skjell (Corbula gibba) på overflaten - de vi sjekket var døde. Posisjon 58 21,564 N, 8 36,718 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s16000",
     "PAH (SFT)": "7296",
     "Cu": "256",
     "Pb": "118",
     "Zn": "393",
     "Cd": "0,5",
     "Hg": "0,67",
     "PCB7": "26,8",
     "Olje": "160",
     "TS %": "42,6"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 15",
    "navnIRapport": "St. 15",
    "side": 27,
    "tekst": "16,5 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (0-5mm), resten gråsort. lukt: ingen. Levende \"Echinocardium\" ble observert. Posisjon 58 21,475 N, 8 36,893 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s3600",
     "PAH (SFT)": "2969,3",
     "Cu": "112",
     "Pb": "54",
     "Zn": "176",
     "Cd": "0,2",
     "Hg": "0,2",
     "PCB7": "4,85",
     "Olje": "<100",
     "TS %": "36,7"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 16",
    "navnIRapport": "St. 16",
    "side": 27,
    "tekst": "16,5 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (1mm), resten gråsort. lukt: meget svak lukt av \"gørrsaule\" (ikke h2s). Levende \"kuskjell\"?. Posisjon 58 21,594 N, 8 36,961 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s3600",
     "PAH (SFT)": "3837",
     "Cu": "113",
     "Pb": "65,7",
     "Zn": "213",
     "Cd": "0,3",
     "Hg": "0,24",
     "PCB7": "4,94",
     "Olje": "<100",
     "TS %": "33,6"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 20",
    "navnIRapport": "St. 20",
    "side": 27,
    "tekst": "7,4 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (1mm), resten sort. lukt: litt lukt av \"gørrsaule\" (ikke h2s). Posisjon 58 21,741 N, 8 36,783 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s7500",
     "PAH (SFT)": "6617,8",
     "Cu": "228",
     "Pb": "93,1",
     "Zn": "577",
     "Cd": "0,5",
     "Hg": "0,051",
     "PCB7": "1,62",
     "Olje": "<100",
     "TS %": "39,8"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 22",
    "navnIRapport": "St. 22",
    "side": 27,
    "tekst": "9,3 m dyp. silt/leire. farge: gråsort i hele dybden. lukt: ingen lukt. Sedimentet så litt \"kunstig\" ut\". Posisjon 58 21,675 N, 8 36,733 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s800",
     "PAH (SFT)": "712",
     "Cu": "60,7",
     "Pb": "57,7",
     "Zn": "286",
     "Cd": "<0,2",
     "Hg": "0,008",
     "PCB7": "2,01",
     "Olje": "<100",
     "TS %": "72,4"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 24",
    "navnIRapport": "St. 24",
    "side": 27,
    "tekst": "10,6 m dyp. silt/leire. farge: sort. lukt: ingen. Mange store biter (sannsynligvis jern/rust). Posisjon 58 21,631 N, 8 36,744 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s5100",
     "PAH (SFT)": "4573,7",
     "Cu": "1690",
     "Pb": "3980",
     "Zn": "23500",
     "Cd": "9,69",
     "Hg": "0,04",
     "PCB7": "1,65",
     "Olje": "100",
     "TS %": "66,7"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 26",
    "navnIRapport": "St. 26",
    "side": 27,
    "tekst": "6,5 m dyp. silt/sand. farge: sort/gråsort. lukt: svak lukt av \"gørrsaule\" (ikke h2s). Posisjon 58 21,575 N, 8 36,681 Ø (vedlegg A, s. 25). Tinnorganiske forbindelser, PAH og olje står på s. 30, PCB på s. 28.",
    "verdier": {
     "TBT": "s17000",
     "PAH (SFT)": "2759,8",
     "Cu": "1010",
     "Pb": "592",
     "Zn": "1930",
     "Cd": "2,2",
     "Hg": "0,035",
     "PCB7": "3,81",
     "Olje": "100",
     "TS %": "43,2"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH (SFT)": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "Olje": "µg/g",
     "TS %": "%"
    }
   }
  ],
  "punkterForbehold": "Verdiene er lest ut av rapportens egne vedlegg: metaller og tørrstoff fra s. 27, PCB fra s. 28, tinnorganiske forbindelser, PAH og olje fra s. 30, og feltbeskrivelsen fra stasjonsoversikten på s. 25. Rapporten beskriver 28 feltstasjoner; 13 av dem er analysert kjemisk, og 13 av feltstasjonene finnes ikke igjen i Vannmiljø og er tegnet i kartet med egen markering. Noen tinnorganiske verdier er skrevet med «s» foran i rapporten; rapporten forklarer ikke tegnet, og verdiene er gjengitt slik de står. Vannmiljø har de samme tallene uten prefiks.",
  "referanser": "NIVA-rapport 5040-2005, vedlegg A (s. 25–26) og vedlegg B (s. 27–30).",
  "kildeIder": [
   "K-01"
  ],
  "tiltakIder": [],
  "nyePunkter": [
   "St. 5 · NIVA 5040",
   "St. 7 · NIVA 5040",
   "St. 9 · NIVA 5040",
   "St. 10 · NIVA 5040",
   "St. 11 · NIVA 5040",
   "St. 17 · NIVA 5040",
   "St. 18 · NIVA 5040",
   "St. 19 · NIVA 5040",
   "St. 21 · NIVA 5040",
   "St. 23 · NIVA 5040",
   "St. 25 · NIVA 5040",
   "St. 27 · NIVA 5040",
   "St. 28 · NIVA 5040"
  ],
  "funnetVia": "punkt",
  "belegg": "Navngitt av 15 målepunkter i Vannmiljø.",
  "maaltFra": 2004,
  "maaltTil": 2005
 },
 {
  "id": "r-niva5200",
  "aar": 2006,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Collection and interpretation of Sediment Profile Images (SPI) using the Benthic Habitat Quality (BHQ) index and successional models",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "H. Nilsson, R. Rosenberg",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/0199379076ce-f8946c11-c442-4611-984f-c4bc6e4c0e14",
  "rapportnummer": "NIVA 5200",
  "sider": "26",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 6939), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 6939"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Sediment profile imaging (SPI) has a history back to the early 70’s, however, it was during the 90’s with the introduction of digital cameras and image analysis softwares that the use of the method expands. This could be tracked in the publication rate of scientific papers where SPI have been used. The sediment profile camera work as an upside-down periscope penetrating the sediment surface and looking horizontally into the sediment. The image is about 17 cm wide and 26 cm high, with a typical penetration depth of 15 cm. Sediment profile image analysis according to the benthic habitat quality index (BHQ) is based on sediment surface structures, subsurface structures and the measurement of the apparent redox potential discontinuity (RPD). This paper focuses on the interpretation of features observed in SPIs and the analysis of SPIs according to the BHQ-index. It also shows how the image analysis could be correlated to successional models and benthic classification according to European Union Water Framework Directive (WFD).",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 6939",
    "side": 59,
    "sitat": "Benthic Habitat Quality (BHQ) index and successional models. NIVA rapport 5200-2006. 26 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 6939"
 },
 {
  "id": "r-niva5669",
  "aar": 2008,
  "tittel": "Miljøtekniske undersøkelser ved Nymo as i Vikkilen. Supplerende undersøkelser, risiko- og tiltaksvurdering",
  "utforer": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "folk": "T. Bakke, J. Håvardstun, K. Næs, M. Schaanning, E. Oug",
  "status": "lest",
  "tillit": "hoy",
  "url": "https://nva.sikt.no/registration/019937a56bd9-2cbdfc32-4653-4019-b68f-a636d3c92afd",
  "rapportnummer": "NIVA 5669",
  "sider": "80",
  "begrunnelse": "16 stasjoner oppgir rapportnummeret i beskrivelsesfeltet i Vannmiljø. Nummeret er slått opp i NIVA-serien i Nasjonalt vitenarkiv og stemmer eksakt. Sammendraget under er rapportens eget, hentet fra registeret.",
  "kobling": {
   "type": "navngitt_i_vannmiljo",
   "tekst": "16 stasjoner har «Miljøgifter i sedimenter 2008. NIVA-rapport OR-5669.» i beskrivelsesfeltet. Nummeret er slått opp i NIVA-serien og stemmer."
  },
  "dekkerPunkter": [
   "Vikkilen 30",
   "Vikkilen 31",
   "Vikkilen 32",
   "Vikkilen 33",
   "Vikkilen 34",
   "Vikkilen 35",
   "Vikkilen 36",
   "Vikkilen 37",
   "Vikkilen 38",
   "Vikkilen 39",
   "Vikkilen 40",
   "Vikkilen B01",
   "Vikkilen B03",
   "Vikkilen B05V",
   "Vikkilen B06",
   "Vikkilen B16"
  ],
  "figurer": [
   {
    "fil": "figurer/niva-5669-s32-1.jpeg",
    "tittel": "Figur 6",
    "side": 32,
    "beskrivelse": "Figur 6. Stasjonsplassering for turbiditetsmålinger i Vikkilen. Posisjonen for de to fartøyene (Sida har flere bilder enn figurtekster — paringen mellom bilde og tekst er usikker.)"
   }
  ],
  "sammendrag": "Supplerende undersøkelser, risiko- og tiltaksvurdering av bunnsedimentene i Vikkilen er gjort etter pålegg fra SFT. Sedimentundersøkelsene bekrefter tidligere nivåer og mønster av miljøgifter. Bunnfaunaer er relativt rik ytterst, men forverres innover i kilen. Analyser av porevann, TBT-flukser og TBT i bunnfauna viser at SFTs risikoveileder overestimerer transport og bioakkumulasjon. Estimert tilførsel av suspendert stoff fra oppvirvlet sediment fra skipspropeller er ca 1800 kg pr hendelse. Sedimentene utgjør en uakseptabel risiko for effekter på human helse og for økologiske effekter både i sediment og vann både etter Trinn 2 og Trinn 3 i SFTs veileder. Vikkilen foreslås delt i tre områder for tiltak. Utenfor Nymo foreslås mudring til minst 20 cm og tilsvarende etterdekking, i resten av indre del 2 x 20 cm tildekking, dels erosjonssikker, og i ytre del 2 x 10 cm tildekking. Forslag til oppfølgende miljøovervåking dekker sedimentkarakteristikk, miljøgifter i organismer og tilstand i bunnfauna.",
  "noekkelfunn": [
   "Sedimentene utgjør en uakseptabel risiko for effekter på human helse og for økologiske effekter, både etter Trinn 2 og Trinn 3 i SFTs veileder.",
   "Vikkilen foreslås delt i tre områder for tiltak: mudring til minst 20 cm med etterdekking utenfor Nymo, 2 × 20 cm tildekking i resten av indre del, og 2 × 10 cm i ytre del.",
   "Bunnfaunaen er relativt rik ytterst, men forverres innover i kilen.",
   "Analyser av porevann, TBT-flukser og TBT i bunnfauna viser at SFTs risikoveileder overestimerer transport og bioakkumulasjon.",
   "Oppvirvling fra skipspropeller er beregnet til å tilføre ca. 1800 kg suspendert stoff per hendelse."
  ],
  "punkter": [
   {
    "navn": "Vikkilen B01",
    "navnIRapport": "B 1",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "1600",
     "PAH16": "1351",
     "Cu": "50,1",
     "Pb": "25",
     "Zn": "77",
     "Cd": "<0,20",
     "Hg": "0,069",
     "PCB7": "2,11",
     "TOC": "23,3",
     "TS %": "46,2"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen B03",
    "navnIRapport": "B 3",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "320",
     "PAH16": "10099",
     "Cu": "47,7",
     "Pb": "69,5",
     "Zn": "155",
     "Cd": "0,41",
     "Hg": "0,4",
     "PCB7": "10,00",
     "TOC": "36,3",
     "TS %": "43,8"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen B05V",
    "navnIRapport": "B 5",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "960",
     "PAH16": "9132",
     "Cu": "97,3",
     "Pb": "99",
     "Zn": "196",
     "Cd": "0,52",
     "Hg": "13,3",
     "PCB7": "15,10",
     "TOC": "60,5",
     "TS %": "26,4"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen B06",
    "navnIRapport": "B 6",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "s93000",
     "PAH16": "14164",
     "Cu": "1752",
     "Pb": "192",
     "Zn": "1039",
     "Cd": "0,82",
     "Hg": "0,22",
     "PCB7": "8,61",
     "TOC": "44,6",
     "TS %": "29,8"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen B16",
    "navnIRapport": "B 16",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "1500",
     "PAH16": "3354",
     "Cu": "316",
     "Pb": "79,3",
     "Zn": "442",
     "Cd": "<0,2",
     "Hg": "0,2",
     "PCB7": "7,06",
     "TOC": "34,8",
     "TS %": "34,7"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 30",
    "navnIRapport": "B 30",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "6200s",
     "PAH16": "4304",
     "Cu": "168",
     "Pb": "87,1",
     "Zn": "246",
     "Cd": "0,26",
     "Hg": "0,27",
     "PCB7": "15,07",
     "TOC": "37,6",
     "TS %": "39,1"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 31",
    "navnIRapport": "B 31",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "3700",
     "PAH16": "4386",
     "Cu": "161",
     "Pb": "78,3",
     "Zn": "273",
     "Cd": "0,29",
     "Hg": "0,24",
     "PCB7": "13,78",
     "TOC": "35,3",
     "TS %": "36,3"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 32",
    "navnIRapport": "B 32",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "4400",
     "PAH16": "5477",
     "Cu": "146",
     "Pb": "92,3",
     "Zn": "340",
     "Cd": "0,44",
     "Hg": "0,26",
     "PCB7": "18,18",
     "TOC": "40,4",
     "TS %": "36,6"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 33",
    "navnIRapport": "B 33",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "2500",
     "PAH16": "1666",
     "Cu": "90,2",
     "Pb": "52,7",
     "Zn": "277",
     "Cd": "0,28",
     "Hg": "0,05",
     "PCB7": "0,52",
     "TOC": "25,2",
     "TS %": "57,0"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 34",
    "navnIRapport": "B 34",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "1900",
     "PAH16": "1837",
     "Cu": "81,5",
     "Pb": "41,1",
     "Zn": "122",
     "Cd": "0,26",
     "Hg": "0,098",
     "PCB7": "3,88",
     "TOC": "33,3",
     "TS %": "40,7"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 35",
    "navnIRapport": "B 35",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "1800",
     "PAH16": "4060",
     "Cu": "103",
     "Pb": "71,9",
     "Zn": "204",
     "Cd": "<0,20",
     "Hg": "0,31",
     "PCB7": "7,58",
     "TOC": "37,7",
     "TS %": "34,4"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 36",
    "navnIRapport": "B 36",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "860",
     "PAH16": "3574",
     "Cu": "61,3",
     "Pb": "49,6",
     "Zn": "158",
     "Cd": "0,76",
     "Hg": "0,36",
     "PCB7": "83,90",
     "TOC": "34,6",
     "TS %": "39,9"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 37",
    "navnIRapport": "B 37",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "1500",
     "PAH16": "4822",
     "Cu": "102",
     "Pb": "70,5",
     "Zn": "229",
     "Cd": "0,65",
     "Hg": "0,34",
     "PCB7": "8,92",
     "TOC": "43,4",
     "TS %": "32,2"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 38",
    "navnIRapport": "B 38",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "770",
     "PAH16": "4174",
     "Cu": "68,9",
     "Pb": "51,6",
     "Zn": "142",
     "Cd": "0,27",
     "Hg": "0,23",
     "PCB7": "19,56",
     "TOC": "32,3",
     "TS %": "37,7"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 39",
    "navnIRapport": "B 39",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "1100",
     "PAH16": "9402",
     "Cu": "86",
     "Pb": "58,1",
     "Zn": "195",
     "Cd": "1,30",
     "Hg": "0,31",
     "PCB7": "8,63",
     "TOC": "58,4",
     "TS %": "26,3"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "Vikkilen 40",
    "navnIRapport": "B 40",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve fra 2008-undersøkelsen. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "1600",
     "PAH16": "3777",
     "Cu": "87,7",
     "Pb": "61,7",
     "Zn": "149",
     "Cd": "0,20",
     "Hg": "0,29",
     "PCB7": "s9,41",
     "TOC": "36,6",
     "TS %": "37,7"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Cu": "mg/kg",
     "Pb": "mg/kg",
     "Zn": "mg/kg",
     "Cd": "mg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "C 1 · NIVA 5669",
    "navnIRapport": "C 1",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve tatt av entreprenørfirmaet AF i 2007. Finnes ikke i Vannmiljø, og rapporten oppgir ingen posisjon for den. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "s5000",
     "PAH16": "1918",
     "Hg": "0,032",
     "PCB7": "0,00",
     "TOC": "13,7",
     "TS %": "58,0"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "C 2 · NIVA 5669",
    "navnIRapport": "C 2",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve tatt av entreprenørfirmaet AF i 2007. Finnes ikke i Vannmiljø, og rapporten oppgir ingen posisjon for den. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "500",
     "PAH16": "7070",
     "Hg": "0,039",
     "PCB7": "0,00",
     "TOC": "29,7",
     "TS %": "43,0"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   },
   {
    "navn": "C 3 · NIVA 5669",
    "navnIRapport": "C 3",
    "side": 22,
    "tekst": "Prøvedyp 0-5 cm. Prøve tatt av entreprenørfirmaet AF i 2007. Finnes ikke i Vannmiljø, og rapporten oppgir ingen posisjon for den. Tungmetaller og tørrstoff står på s. 22, PCB og PAH på s. 23, tinnorganiske forbindelser på s. 24.",
    "verdier": {
     "TBT": "s2000",
     "PAH16": "2421",
     "Hg": "0,051",
     "PCB7": "4,00",
     "TOC": "17,9",
     "TS %": "55,0"
    },
    "enheter": {
     "TBT": "µg/kg",
     "PAH16": "µg/kg",
     "Hg": "mg/kg",
     "PCB7": "µg/kg",
     "TOC": "mg/g",
     "TS %": "%"
    }
   }
  ],
  "punkterForbehold": "Verdiene er lest ut av rapportens egne tabeller: tungmetaller og tørrstoff fra tabell 2 (s. 22), PCB og PAH fra tabell 3 (s. 23), og tinnorganiske forbindelser fra tabell 4 (s. 24). Tabellene gjengir også 2004-prøvene til sammenligning; de hører til NIVA 5040 og står der. 3 av radene er prøver entreprenørfirmaet AF tok i 2007 — de finnes ikke i Vannmiljø, og rapporten oppgir ingen posisjon for dem, så de kan ikke tegnes i kartet. Rapporten merker dem C 41–43 i tabell 2 og 3, men C 1–3 i tabell 4; det er de samme tre prøvene, og de er slått sammen her. Noen tinnorganiske verdier står med «s» foran; rapporten forklarer ikke tegnet, og verdiene er gjengitt slik de står.",
  "referanser": "NIVA-rapport 5669-2008, tabell 2–4 (s. 22–24). Hele rapporten ligger i verktoy/hentet/.",
  "kildeIder": [
   "K-01"
  ],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "punkt",
  "belegg": "Navngitt av 16 målepunkter i Vannmiljø.",
  "maaltFra": 2008,
  "maaltTil": 2008
 },
 {
  "id": "r-niva5670",
  "aar": 2008,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Undersøkelse av sjøresipienten i Homborsund, Grimstad kommune. Strandsone, bløtbunn og oksygen i vannmasser",
  "utforer": "NIVA",
  "oppdragsgiver": "Grimstad kommune",
  "folk": "E. Oug, T. Kroglund, J. Håvardstun",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937ca7735-8cfd44d1-c4cc-436c-891b-5c0986d02eb4",
  "rapportnummer": "NIVA 5670",
  "sider": "32",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 6939, siterer NIVA 3622), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 6939, siterer NIVA 3622"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "I Homborsund har Grimstad kommune et mekanisk/kjemisk renseanlegg for kommunalt avløpsvann som ønskes utvidet fra 600 personekvivalenter (pe) til 1600 pe. Avløpsvannet føres i ledning ut på 25 m dyp utenfor Homborsund brygge. Undersøkelsen beskriver tilstanden i resipienten, vurderer denne for et større utslipp og avklarer om det finnes særlig sårbare naturforhold i resipientområdet. I strandsonen var det artsrike organismesamfunn med nokså lik sammensetning på alle stasjoner. Andel rødalger var lavere og andel brunalger høyere enn ved undersøkelse i 1995, og det ble registrert større totalmengde alger. På bløtbunn var det artsrike organismesamfunn med normale verdier for antall arter, individtettheter og artsmangfold. Bunnsedimentene hadde høyt organisk innhold, men var visuelt vurdert normale. Inspeksjon av bunnsedimentene med profilkamera (SPI) viste normalt sandig eller bløtt fjordsediment i hele området, stedvis med rester av skjell. Oksygenforholdene i bunnvannet var gode ved utslippsstedet, men dårlige i det dypeste området av resipienten. Generelt viser undersøkelsen at tilstanden i resipienten var god, med unntak for det dypeste området. Det forventes ikke at økte tilførsler av avløpsvann skal ha vesentlige negative effekter med de krav som stilles til rensing av avløpsvannet.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 6939",
    "side": 59,
    "sitat": "kommune. Strandsone, bløtbunn og oksygen i vannmasser. NIVA rapport 5670-2008. 32 s.",
    "iReferanseliste": true
   },
   {
    "retning": "siterer",
    "motpart": "NIVA 3622",
    "side": 29,
    "sitat": "start av biologisk renseanlegg på Groos. NIVA rapport 3622-1997. 91 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 6939, siterer NIVA 3622"
 },
 {
  "id": "r-niva6249",
  "aar": 2011,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Tildekking av TBT-forurensede sedimenter ved Fiskerstrand verft, Møre og Romsdal - faunatilstand før tildekking og et år etter",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "H. Trannum, B. Beylich, G. Borgersen, M. Schaanning",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937c3b488-09eeab5c-7587-4626-aaad-5bea202fa4bb",
  "rapportnummer": "NIVA 6249",
  "sider": "19",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 6272), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 6272"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "I forbindelse med tildekking av TBT-forurensede sedimenter ved Fiskerstrand verft er det foretatt en undersøkelse av faunatilstanden før og et år etter tildekking. To testfelt ble dekket med hhv. biokalk (KA) og biokalk iblandet aktivt kull (AC). Et tredje område fungerte som referanse og ble ikke behandlet. Et år etter tildekking viste faunasammensetningen på testfeltene større grad av likhet med referansestasjonen enn før tildekking. Dette ble tolket som et positivt resultat av endret bunnsubstrat. Det var ikke klare forskjeller mellom de to testmaterialene i faunaresponsen, men artsantallet og diversitetsindeksene indikerte noe bedre utvikling på KA enn på AC. Et år er for kort tid til at faunatilstanden kan bli normal, og faunasammensetningen etter tildekking var typisk for et samfunn i et tidlig suksesjonsstadium. Således er det for tidlig å vurdere hvorvidt tildekkingen gir opphav til en artsrik og sunn bunnfauna på sikt.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 6272",
    "side": 47,
    "sitat": "NIVA Rapport nr 6249-2011. 19 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 6272"
 },
 {
  "id": "r-niva6272",
  "aar": 2012,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Revidert risikovurdering og tiltaksplan for sjøsedimentene i Vikkilen, delområde B og C",
  "utforer": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "folk": "T. Bakke, J. Håvardstun, A. Lillicrap, A. Macken, I. Allan, K. Næs",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937d0f05e-628c0a92-84a3-4723-abd7-e511b1e796f1",
  "rapportnummer": "NIVA 6272",
  "sider": "32",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (siterer NIVA 5669), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "siterer NIVA 5669"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Supplerende undersøkelser, revidert risikovurdering og utarbeidelse av forslag til tiltaksplan for bunnsedimentene i delområde B og C i Vikkilen er gjort på oppdrag fra AS Nymo. Sedimentene representerer en risiko for skade på sedimentlevende dyr, men porevannet fra sedimentene var ikke toksiske overfor mikroalger og krepsdyr. Benzo(a)pyren, til dels også PCB, bly og sink utgjorde risiko for skade på human helse. Analyser av sjømat tyder på at risikoen fra PCB ikke er reell. Analyse av PAH i sjømat anbefales. Utlekking av TBT utgjør en beregnet risiko for effekter på organismer i vannsøylen i begge områdene, men porevannsanalyser indikerer at risikoen ikke er reell. Samlet synes undersøkelsene å vise at den reelle risikoen fra miljøgiftene i sedimentet er betydelig lavere enn tidligere beregnet og relativt lik i delområde B og C. Forholdene tilsier at man som første alternativ for tiltak både i område B og C velger naturlig forbedring kombinert med overvåking. Dersom forventet hastighet av naturlig forbedring ikke er akseptabel, anbefales tynnsjiktstildekking. Usikkerhetene i risikobilde tilsier at dette i første omgang bare gjøres i delområde B. Det anbefales at tildekking skjer med et materiale som erfaringsmessig har vist seg å påskynde forbedringen.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "siterer",
    "motpart": "NIVA 5669",
    "side": 47,
    "sitat": "og tiltaksvurdering. NIVA Rapport 5669-2008. 80 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "siterer NIVA 5669"
 },
 {
  "id": "r-niva6432",
  "aar": 2012,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Coordinated environmental monitoring programme (CEMP). Hazardous substances in fjords and coastal waters – 2011. Levels, trends and effects. Long-term monitoring of environmental quality in Norwegian coastal waters",
  "utforer": "NIVA",
  "oppdragsgiver": null,
  "folk": "Norman Whitaker Green, Merete Schøyen, Sigurd Øxnevad, Anders Ruus, Tore Høgåsen, Bjørnar Beylich",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/0198cc4d870d-6d4ea815-3842-4d78-9516-775093c26ed0",
  "rapportnummer": "NIVA 6432",
  "sider": "264",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 6608), i hopp 2 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 6608"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "The Norwegian contribution to OSPAR’s Coordinated Environmental Monitoring Programme (CEMP) includes the monitoring of micropollutants (contaminants) in sediment and marine organisms (blue mussel, snails, prawns, cod, flatfish and deep water fish) along the coast of Norway from the Oslofjord and Hvaler region in the southeast to the Varangerfjord in the northeast. The stations are located both in areas with known or presumed point sources of contaminants, in areas of diffuse load of contamination like city areas, and in more remote areas exposed to presumed low and diffuse pollution. The mussel sites include supplementary stations for the Norwegian Index Programme. The programme includes the monitoring metals, organochlorines, pesticides, dioxins, brominated flame retardants, perfluorinated compounds, as well as biological effects methods. The results from 2011 supplied data to a total of 1035 time series of selected contaminants or biomarkers. Of these, 329 showed statistically significant trends of which 277 were downwards and 52 upwards. The dominance of downward trends indicates that the level of most contaminants is decreasing. Of the 628 median contaminant concentrations assessed in 2011 that could also be classified by Klifs environmental classification system, 78.5% were classified as insignificantly polluted, 16.9% as moderately polluted, 3.5% as markedly polluted (mostly cadmium, lead, chromium, HCB, PAHs), 0.6% as severely polluted (benzo[a]pyrene, carcinogen-PAHs, ppDDE) and 0.5% as extremely polluted (dioxins).",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 2,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 6608",
    "side": 21,
    "sitat": "of environmental quality in Norwegian coastal waters. NIVA-rapport 6432, Klima- og",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 6608"
 },
 {
  "id": "r-niva6608",
  "aar": 2013,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Undersøkelser av imposex og intersex i marine snegler i Vikkilen ved Grimstad i perioden 2005-2013",
  "utforer": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "folk": "L. Tveiten, T. Bakke",
  "status": "lest",
  "tillit": "middels",
  "url": "https://nva.sikt.no/registration/019937cb8542-7d4240bb-6719-4c0c-9a0d-dfc4c7478b6f",
  "rapportnummer": "NIVA 6608",
  "sider": "26",
  "begrunnelse": "Ingen målepunkter navngir denne. Den er funnet i referanselista til en rapport punktene navngir (sitert av NIVA 6939, siterer NIVA 5040), i hopp 1 av 2. Nummeret er slått opp i NIVA-serien og stemmer eksakt.",
  "kobling": {
   "type": "sitat",
   "tekst": "sitert av NIVA 6939, siterer NIVA 5040"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "Sedimentene i Vikkilen ved Grimstad er sterkt forurenset av tributyltinn (TBT) fra verftsvirksomheten til AS Nymo. TBT er meget giftig og forårsaker kjønnsforstyrrelse hos marine snegl. Forstyrrelsen kalles imposex hos nettsnegl, kongsnegl og purpursnegl og intersex hos strandsnegl. Siden 2005 er kjønnsforstyrrelse hos fire sneglearter blitt undersøkt i Vikkilen. Resultatene fram til 2013 viser entydig forbedring av kjønnstilstanden hos strandsnegl og nettsnegl, selv om utviklingen synes å ha flatet ut noe etter 2011. Det er fortsatt en klart økende forstyrrelse innover i kilen mot Nymo. Ved Nymo har strandsnegl gått fra 99 % sterilitet i 2005 til ca. 20 % forstyrrelse i 2013. For nettsnegl går bedringen langsommere siden arten er mer følsom for TBT og lever direkte i sedimentet. Undersøkelse av kongsnegl startet i 2013 og viser samme grad av forstyrrelse som nettsnegl, men med lavere vevsinnhold av TBT. Purpursnegl finnes bare på kontrollstasjonen Håøya, og siden det ikke var tegn til imposex i 2011 ble ikke arten undersøkt i 2013. Nettsnegl og kongsnegl vil være påvirket av TBT i flere år så lenge TBT-nivåene i sedimentet vedvarer. Det er viktig å følge utviklingen i kjønnsforstyrrelse videre, ikke minst for å følge virkningene av tiltak.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": null,
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "sitert av",
    "motpart": "NIVA 6939",
    "side": 59,
    "sitat": "i perioden 2005-2013. NIVA rapport 6608-2013. 26 s.",
    "iReferanseliste": true
   },
   {
    "retning": "siterer",
    "motpart": "NIVA 5040",
    "side": 22,
    "sitat": "tiltaksplan. NIVA-rapport 5040. 60 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "sitert av NIVA 6939, siterer NIVA 5040"
 },
 {
  "id": "r-niva6688",
  "aar": 2014,
  "maaltFra": null,
  "maaltTil": null,
  "tittel": "Risikovurdering og revidert tiltaksplan for sjøsedimentene i Vikkilen",
  "utforer": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "folk": "Torgeir Bakke, Kristoffer Næs",
  "status": "lest",
  "tillit": "hoy",
  "url": null,
  "rapportnummer": "NIVA 6688",
  "sider": 36,
  "begrunnelse": "Ingen målepunkter navngir denne, og nummeret finnes ikke i NIVA-serien i Nasjonalt vitenarkiv. Den er likevel med, fordi PDF-en ligger i verktoy/hentet/ — fila er et sterkere belegg enn en registerpost. Funnet via referanselista (siterer NIVA 5040). Tittel, år og forfattere er lest av rapportens egen forside.",
  "kobling": {
   "type": "sitat",
   "tekst": "siterer NIVA 5040"
  },
  "dekkerPunkter": [],
  "figurer": [],
  "sammendrag": "På oppdrag fra Nymo AS har NIVA utarbeidet revidert tiltaksplan for sjøsedimentene i Vikkilen. Revisjonen er gjort på grunnlag av tidligere innsendt tiltaksplan (NIVA l.nr 6360-2012) og diskusjon mellom Miljødirektoratet og Nymo av 19.02.2014. Sedimentene er sterkt forurenset av TBT og betydelig forurenset av andre miljøgifter. Kilen er inndelt i tre delområder for risiko- og tiltaksvurdering: delområde A nærmest Nymos verft, delområde B nord for Skjevika og delområde C resten ut til munningen.",
  "noekkelfunn": [],
  "punkter": [],
  "punkterForbehold": "Tittel, år, forfattere, sidetall og sammendrag er lest av rapportens egen forside og sammendragsside (s. 1 og 2 i PDF-en), ikke hentet fra et register. Nummeret finnes ikke i NIVA-serien i Nasjonalt vitenarkiv.",
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "sitat",
  "hopp": 1,
  "sitatBelegg": [
   {
    "retning": "siterer",
    "motpart": "NIVA 5040",
    "side": 36,
    "sitat": "tiltaksplan. NIVA Rapport 5040-2005. 60 s.",
    "iReferanseliste": true
   }
  ],
  "belegg": "siterer NIVA 5040 · PDF-en finnes, registerposten ikke",
  "ikkeIArkivet": true
 },
 {
  "id": "r-niva6939",
  "aar": 2015,
  "tittel": "Overvåking av sjøområdene i Grimstad. Resipientundersøkelser i Groosefjorden og Homborsundfjorden i 2015",
  "utforer": "NIVA",
  "oppdragsgiver": "Grimstad kommune",
  "folk": "Eivind Oug, Jarle Håvardstun, Tone Kroglund, Janne Kim Gitmark, Hilde Cecilie Trannum, Medyan Antonsen",
  "status": "lest",
  "tillit": "hoy",
  "url": "https://hdl.handle.net/11250/2372528",
  "rapportnummer": "NIVA 6939",
  "sider": "84",
  "begrunnelse": "2 stasjoner oppgir rapportnummeret i beskrivelsesfeltet i Vannmiljø. Nummeret er slått opp i NIVA-serien i Nasjonalt vitenarkiv og stemmer eksakt. Sammendraget under er rapportens eget, hentet fra registeret.",
  "kobling": {
   "type": "navngitt_i_vannmiljo",
   "tekst": "De samme to stasjonene i Groosefjorden oppgir «Overvåking av sjøområdene i Grimstad. NIVA-rapport 6939-2015.» Her stemmer både tittel og nummer. I tillegg gir rapportens egen bløtbunnstabell (s. 39) posisjoner som er identiske med Vannmiljø-stasjonene GS5, GS6 — samme punkt, null meters avvik."
  },
  "dekkerPunkter": [
   "Groosefjorden",
   "Grooseholmen",
   "GS5",
   "GS6"
  ],
  "figurer": [
   {
    "fil": "figurer/niva-6939-s18-1.jpeg",
    "tittel": "Figur 4",
    "side": 18,
    "beskrivelse": "Figur 4. Lokaliteter for prøvetaking av næringssalter (grønn) og oksygen i vannmassene (hvit) i Groosefjorden og (Sida har flere bilder enn figurtekster — paringen mellom bilde og tekst er usikker.)"
   },
   {
    "fil": "figurer/niva-6939-s41-1.jpeg",
    "tittel": "Figur 20",
    "side": 41,
    "beskrivelse": "Figur 20. Lokaliteter for prøvetaking av bløtbunnsfauna (brun sirkel) og miljøgifter i bunnsedimenter (blå (Sida har flere bilder enn figurtekster — paringen mellom bilde og tekst er usikker.)"
   },
   {
    "fil": "figurer/niva-6939-s28-1.png",
    "tittel": "Figur 10",
    "side": 28,
    "beskrivelse": "Figur 10. Fordeling (arter) mellom algegruppene rødalger, brunalger og grønnalger på den enkelte stasjon"
   },
   {
    "fil": "figurer/niva-6939-s12-1.png",
    "tittel": "Figur 1",
    "side": 12,
    "beskrivelse": "Figur 1. Kystområdene i Grimstad kommune med lokalisering av resipientene i Groosefjorden og Homborsund. (Sida har flere bilder enn figurtekster — paringen mellom bilde og tekst er usikker.)"
   }
  ],
  "sammendrag": "Groosefjorden og Homborsundfjorden i Grimstad kommune er resipienter for utslipp av avløpsvann fra kommunale renseanlegg. Foreliggende undersøkelse ble gjennomført i 2015 for å dokumentere tilstanden i resipientene og avklare eventuelle utviklingstendenser i forhold til tidligere undersøkelser. Miljøtilstanden er klassifisert etter kravene i vanndirektivet. Undersøkelsen omfattet næringssalter og oksygen i vannmassene, organismesamfunn i strandsonen, dykkertransekt på hardbunn, bløtbunnsfauna, sedimentprofilfotografering(SPI) og miljøgifter i bunnsedimenter. I begge resipientene var det generelt god tilstand i øvre vannmasser, vist ved normale verdier for næringssalter og normalt utviklede organismesamfunn i strandsonen. I nærområdet til utslippet i Groosefjorden var bunnområdene i moderat påvirket, mens det ikke ble funnet effekter ved utslippet i Homborsund. I dypområdet av Groosefjorden var tilstanden mindre god, men mest trolig er dette naturlig betinget. Det var mindre endringer i tilstanden i forhold til undersøkelser i 1995 (Groosefjorden) og 2008 (Homborsund). I begge resipienter var det lave verdier for metaller, PCB og TBT, men forhøyde verdier for flere PAH-forbindelser. Samlet sett vurderes kjemisk tilstand i begge resipienter til ‘oppnår ikke god’ på bakgrunn av prioriterte PAH-forbindelser som overskrider grenseverdier for sedimenter, mens økologisk tilstand vurderes til ‘moderat’ (klasse III) ved kombinasjon av biologiske kvalitetselementer (nedre voksegrense alger, bløtbunnsfauna) og ikke-prioriterte miljøgifter som støtteparametre.",
  "noekkelfunn": [
   "Undersøkelsen omfattet næringssalter og oksygen, strandsone, hardbunn, bløtbunnsfauna, sedimentprofilfotografering og miljøgifter i bunnsedimenter.",
   "I nærområdet til utslippet i Groosefjorden var bunnområdene moderat påvirket; ved utslippet i Homborsund ble det ikke funnet effekter.",
   "I dypområdet av Groosefjorden var tilstanden mindre god, men mest trolig naturlig betinget.",
   "Det var mindre endringer i tilstanden sammenlignet med undersøkelsen i 1995 — den samme som stasjonene også viser til."
  ],
  "punkter": [],
  "punkterForbehold": "Ingen punktverdier er lest ut av denne rapporten. PDF-en er ikke lastet ned — nedlastingsruta i Nasjonalt vitenarkiv svarer 403 uten innlogging. Måleverdiene for stasjonene rapporten dekker, ligger likevel i Vannmiljø og vises på punktene i kartet.",
  "referanser": null,
  "kildeIder": [],
  "tiltakIder": [],
  "nyePunkter": [],
  "funnetVia": "punkt",
  "belegg": "Navngitt av 2 målepunkter i Vannmiljø.",
  "maaltFra": 2015,
  "maaltTil": 2015
 }
];
