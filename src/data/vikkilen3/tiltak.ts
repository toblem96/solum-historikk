/* Generert av verktoy/bygg_omrade.py vikkilen3 — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/vikkilen3/ og hentes av hent_omrade.py vikkilen3.
 *
 * resultat er regnet ut av målingene på tiltakspunktene, ikke hentet fra en
 * oppfølgingsrapport. punkter[] er stasjonene som bærer tiltakets beskrivelse i
 * Vannmiljø. Ett tiltak er dokumentert i grunnlaget: tildekkingen i 2016.
 * Kildene er Grunnforurensning, der «PRI1 - AS Nymo - sjø» står med status
 * «tiltakGjennomført», og de åtte stasjonene i Vannmiljø som er merket «Miljøgifter
 * i tildekkede sedimenter ved verftet Nymo AS».
 */
export const D_TILTAK = [
 {
  "id": "t-tildekking-2016",
  "navn": "Tildekking av forurenset sjøbunn utenfor AS Nymo",
  "type": "tildekking",
  "aarFra": 2016,
  "aarTil": 2016,
  "utforer": "Ikke oppgitt i kildene",
  "oppdragsgiver": "AS Nymo",
  "beskrivelse": "At tiltaket er gjennomført, står i to kilder som hører til punktene: Grunnforurensning fører lokaliteten «PRI1 - AS Nymo - sjø» med status «tiltakGjennomført», og åtte stasjoner i Vannmiljø er merket «Miljøgifter i tildekkede sedimenter ved verftet Nymo AS». Hva som var planlagt, står i tiltaksplanen NIVA 6688 (2014): 20 cm sand i delområde A og innenfor manøvreringsområdet for Nordsjøskip, 10 cm i resten av området påvirket av skipsmanøvrering. Massene skulle legges ut fra fallbunnslekter, med to sanddeponier — ett nord for den gamle dypvannskaia og ett ved Bjelkestranda — og kontrolleres med målestaver, multistråle-ekkolodd, dykker og video. Hva som faktisk ble lagt ut i 2016, står ikke i noen kilde vi har.",
  "omfang": [
   {
    "merkelapp": "Utført år",
    "verdi": "2016 — året de åtte stasjonene ble målt"
   },
   {
    "merkelapp": "Metode",
    "verdi": "Tildekking med rene masser"
   },
   {
    "merkelapp": "Anbefalt i NIVA 5669 (2008)",
    "verdi": "mudring til minst 20 cm med tilsvarende etterdekking utenfor Nymo, 2 × 20 cm i resten av indre del, 2 × 10 cm i ytre del"
   },
   {
    "merkelapp": "Planlagt i NIVA 6688 (2014)",
    "verdi": "20 cm i delområde A og i manøvreringsområdet for Nordsjøskip, 10 cm i resten"
   },
   {
    "merkelapp": "Planlagt areal",
    "verdi": "ca. 25 000 m² gjensto i delområde A, pluss 64 000 m² og 44 000 m² manøvreringsområde — 108 000 m² til sammen"
   },
   {
    "merkelapp": "Kalkulert kostnad",
    "verdi": "13,1 mNOK for tildekkingen, 1,2 mNOK for kontroll og overvåking (NIVA 6688)"
   },
   {
    "merkelapp": "Faktisk utført areal",
    "verdi": "ikke oppgitt i noen kilde vi har"
   },
   {
    "merkelapp": "Flaten i kartet",
    "verdi": "omrisset rundt de åtte overvåkingsstasjonene, ikke tiltaksgrensen"
   }
  ],
  "rapportId": null,
  "resultat": "Regnet ut av målingene på tiltakspunktene, ikke hentet fra en rapport. 2016: 8 stasjoner, 189 klassifiserbare målinger, verste tilstandsklasse V. 2021: 4 stasjoner, 70 klassifiserbare målinger, verste tilstandsklasse V. Tributyltinn er ikke målt på disse punktene i 2016, bare i 2021. Måledataene gir derfor ingen før- og etterverdi for TBT på tiltaksflaten.",
  "punkter": [
   "Vikkilen (83174)",
   "Vikkilen (83175)",
   "Vikkilen (83176)",
   "Vikkilen (83177)",
   "Vikkilen (83178)",
   "Vikkilen (83179)",
   "Vikkilen (83180)",
   "Vikkilen (83181)"
  ]
 }
];
