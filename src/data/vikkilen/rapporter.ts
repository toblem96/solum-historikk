/* Generert av verktoy/bygg_omrade.py vikkilen — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/vikkilen/ og hentes av hent_omrade.py vikkilen.
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
 * 4 av de 4 numrene lot seg slå opp.
 * 0 står med status «ikke_funnet»: punktene navngir dem, registeret
 * har dem ikke. Det er ikke en mangel i søket, det er svaret.
 *
 * Tittel, år, rapportnummer, forfattere, sidetall og sammendrag er registerets egne
 * felt. Sammendraget er rapportens eget. noekkelfunn er setninger derfra, kortet ned.
 * 
 * Et fritekstsøk på «Vikkilen» gir 22 treff i Nasjonalt vitenarkiv — snegleundersøkelser,
 * tiltaksplaner, en konsekvensutredning, en steinalderboplass — og ingen av dem er
 * navngitt av et punkt. De er derfor ute. Konsekvensen er at åtte av tolv
 * undersøkelser står uten rapport.
 */
export const D_RAPPORTER = [
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
