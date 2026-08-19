/* Generert av verktoy/bygg_omrade.py vikkilen — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/vikkilen/ og hentes av hent_omrade.py vikkilen.
 *
 * 70 stasjoner med marint sediment innenfor rammen rundt Vikkilen, hentet
 * fra Vannmiljøs stasjonslag og faktaark-eksport.
 *
 * navn          Vannmiljø-navnet, utvidet med betegnelsen når den sier noe nytt.
 *               Er navnet fortsatt likt et annet, står stasjonsnummeret i parentes.
 * klasse        verste M-608-klasse blant verdiene, null = ingen klassifiserte funn
 * verdier       ett innslag per stoff som har grenseverdi i M-608: høyeste målte
 *               verdi, klassen den gir, og n = antall målinger bak den
 *
 * 7322 målinger totalt, 2652 av dem i marint saltvannssediment.
 * 254 av sedimentmålingene er oppgitt som «<» deteksjonsgrensen og er ikke
 * brukt til å sette klasse. 48 stasjoner har klassifiserte funn.
 * 18 av punktene kommer fra rapportene selv, ikke fra Vannmiljø.
 */
export const D_STASJONER = [
 {
  "navn": "Barselkilen",
  "kode": "01.21-29183",
  "lat": 58.33891,
  "lng": 8.62335,
  "klasse": 5,
  "aarFra": 2000,
  "aarTil": 2000,
  "utforende": "NIVA",
  "oppdragsgiver": "Fylkesmannen i Aust-Agder",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/29183",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 212.28,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 69.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 2.52,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 49.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 114.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 225.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 5.5,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 86.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 50.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 57.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 140.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 66.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Grømbukt",
  "kode": "01.21-29184",
  "lat": 58.33255,
  "lng": 8.58588,
  "klasse": 5,
  "aarFra": 2000,
  "aarTil": 2000,
  "utforende": "NIVA",
  "oppdragsgiver": "Fylkesmannen i Aust-Agder",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/29184",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 268.4,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 198.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 4.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 19.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 21.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 20.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 44.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.51,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 62.9,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.057,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 13.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 36.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 1.94,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Bly",
    "verdi": 12.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Grooseholmen",
  "kode": "01.21-32174",
  "lat": 58.32567,
  "lng": 8.5882,
  "klasse": 4,
  "aarFra": 2015,
  "aarTil": 2015,
  "utforende": "NIVA",
  "oppdragsgiver": "Grimstad kommune",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/32174",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 47.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 160.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 310.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2200.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 170.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 46.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 210.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 350.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.211,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 100.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 13.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 27.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 16.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Groosefjorden",
  "kode": "01.21-32176",
  "lat": 58.31869,
  "lng": 8.59218,
  "klasse": null,
  "aarFra": 2015,
  "aarTil": 2015,
  "utforende": "NIVA",
  "oppdragsgiver": "Grimstad kommune",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/32176",
  "verdier": [],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Grimstad BR1",
  "kode": "01.21-42019",
  "lat": 58.32529,
  "lng": 8.6295,
  "klasse": null,
  "aarFra": 1990,
  "aarTil": 2024,
  "utforende": "NIVA, NIVA/HI, Norconsult AS",
  "oppdragsgiver": "Miljødirektoratet, SFT",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/42019",
  "verdier": [],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Holvika st. 1",
  "kode": "01.21-56130",
  "lat": 58.32376,
  "lng": 8.57756,
  "klasse": 3,
  "aarFra": 2010,
  "aarTil": 2010,
  "utforende": "Multiconsult",
  "oppdragsgiver": "Fylkesmannen i Aust-Agder",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/56130",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 12.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.28,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 24.6,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 0.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 2.95,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 12.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 8.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 5.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 53.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 0.288,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Holvika st. 2",
  "kode": "01.21-56131",
  "lat": 58.32328,
  "lng": 8.57714,
  "klasse": 2,
  "aarFra": 2010,
  "aarTil": 2010,
  "utforende": "Multiconsult",
  "oppdragsgiver": "Fylkesmannen i Aust-Agder",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/56131",
  "verdier": [
   {
    "stoff": "Sum PCB-7",
    "verdi": 1.86,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 4.2,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.41,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 3.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 10.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 4.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 18.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 0.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 1",
  "kode": "01.21-57263",
  "lat": 58.34493,
  "lng": 8.60254,
  "klasse": 5,
  "aarFra": 2005,
  "aarTil": 2005,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57263",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1500.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 10
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 2",
  "kode": "01.21-57264",
  "lat": 58.34758,
  "lng": 8.60742,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57264",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 590.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 3",
  "kode": "01.21-57265",
  "lat": 58.35143,
  "lng": 8.60964,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57265",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 760.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 41.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 200.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 210.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 340.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2333.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 43.6,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 140.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 400.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 70.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.17,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 26.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 121.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 2.84,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 4",
  "kode": "01.21-57266",
  "lat": 58.35362,
  "lng": 8.60806,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57266",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 950.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 160.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 730.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 760.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 108.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 1200.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 8059.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 63.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 170.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 6.42,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 62.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 590.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.31,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 6",
  "kode": "01.21-57268",
  "lat": 58.3562,
  "lng": 8.6111,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57268",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 308.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 16000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 200.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 960.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 1000.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1800.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 1500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 10373.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 65.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 317.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 20.2,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 96.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 700.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.25,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 8",
  "kode": "01.21-57270",
  "lat": 58.35765,
  "lng": 8.61221,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57270",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 390.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 4200.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 2040.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 54000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 2300.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 2600.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 4700.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 2620.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 18338.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 483.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 2100.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 97.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 12.3,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.36,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 12",
  "kode": "01.21-57274",
  "lat": 58.35825,
  "lng": 8.61193,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57274",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 400.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 5000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 3530.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 63000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 2100.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 2000.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 3700.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 2680.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 15411.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 386.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 1700.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 120.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 8.04,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.9,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.17,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 13",
  "kode": "01.21-57275",
  "lat": 58.3584,
  "lng": 8.61355,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57275",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 347.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 18000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 150.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 770.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 970.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 1500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 10226.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 194.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 870.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 270.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 619.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 27.4,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.47,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 14",
  "kode": "01.21-57276",
  "lat": 58.3594,
  "lng": 8.61196,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57276",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 256.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 16000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 560.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 620.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1100.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 980.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 6757.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.67,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 91.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 393.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 26.8,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 118.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 670.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 15",
  "kode": "01.21-57277",
  "lat": 58.35792,
  "lng": 8.61489,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2005,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57277",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 8900.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 11
   },
   {
    "stoff": "Antracen",
    "verdi": 44.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 260.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 450.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 112.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 220.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 380.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 176.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2775.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 4.85,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 54.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 200.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 26.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 16",
  "kode": "01.21-57278",
  "lat": 58.3599,
  "lng": 8.61602,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2005,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57278",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 4300.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 11
   },
   {
    "stoff": "Antracen",
    "verdi": 57.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 320.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 580.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 113.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 36.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 490.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 213.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3523.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 4.94,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 65.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 260.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.24,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 20",
  "kode": "01.21-57282",
  "lat": 58.36235,
  "lng": 8.61306,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57282",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 228.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 7500.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 160.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 540.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1200.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 870.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 6117.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 577.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 93.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 580.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.051,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 19.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 1.62,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 22",
  "kode": "01.21-57284",
  "lat": 58.36125,
  "lng": 8.61221,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57284",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 800.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 16.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 92.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 286.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 55.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 44.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 57.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 72.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 130.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 60.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 6.4,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 671.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 2.01,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.008,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 24",
  "kode": "01.21-57286",
  "lat": 58.36051,
  "lng": 8.61239,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57286",
  "verdier": [
   {
    "stoff": "Bly",
    "verdi": 3980.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 1690.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 23500.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 5100.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 62.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 840.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 9.69,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 37.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 630.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 4291.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 550.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 1.65,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.04,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 26",
  "kode": "01.21-57288",
  "lat": 58.35959,
  "lng": 8.61135,
  "klasse": 5,
  "aarFra": 2004,
  "aarTil": 2004,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57288",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 1010.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 17000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 43.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 1930.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 220.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 210.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 592.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 380.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2562.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 220.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 2.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 12.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 3.81,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.035,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 30",
  "kode": "01.21-57291",
  "lat": 58.3596,
  "lng": 8.61426,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57291",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 168.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 6200.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 59.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 510.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 630.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 400.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 47.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 570.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 246.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 4304.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 15.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 87.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 310.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.26,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.27,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 31",
  "kode": "01.21-57292",
  "lat": 58.36037,
  "lng": 8.61417,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57292",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 161.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 3700.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 64.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 480.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 630.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 380.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 81.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 600.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 273.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 4386.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 13.8,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 78.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 350.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.29,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.24,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 32",
  "kode": "01.21-57293",
  "lat": 58.36187,
  "lng": 8.61441,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57293",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 4400.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 89.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 520.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 590.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 870.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 146.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 45.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 780.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 340.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 5477.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 18.2,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 92.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 480.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.44,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.26,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 33",
  "kode": "01.21-57294",
  "lat": 58.36245,
  "lng": 8.61413,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57294",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2500.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 90.2,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 17.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 150.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 250.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 277.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 180.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 52.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 110.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.28,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1666.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 0.52,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.05,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 34",
  "kode": "01.21-57295",
  "lat": 58.3585,
  "lng": 8.61665,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57295",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1900.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 24.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 180.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 200.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 40.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 250.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 41.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 120.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 260.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.26,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 81.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.098,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 122.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1837.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 3.88,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 35",
  "kode": "01.21-57296",
  "lat": 58.36029,
  "lng": 8.6167,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57296",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1800.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 52.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 470.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 610.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 103.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 400.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 46.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 560.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 204.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 4060.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 7.58,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 71.9,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.31,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 36",
  "kode": "01.21-57297",
  "lat": 58.36212,
  "lng": 8.61879,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57297",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 860.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 53.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 430.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 550.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 83.9,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 350.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 42.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 500.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 158.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3574.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 49.6,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 210.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.76,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 61.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.36,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 37",
  "kode": "01.21-57298",
  "lat": 58.36159,
  "lng": 8.61948,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57298",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1500.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 71.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 530.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 750.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 102.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 450.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 73.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 640.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 229.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 4822.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 8.92,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 70.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 340.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.65,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.34,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 38",
  "kode": "01.21-57299",
  "lat": 58.36005,
  "lng": 8.61901,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57299",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 770.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 70.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 480.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 670.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 450.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 42.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 590.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 142.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 4174.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 19.6,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 51.6,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 290.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.27,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 68.9,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.23,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 39",
  "kode": "01.21-57300",
  "lat": 58.35928,
  "lng": 8.62052,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57300",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1100.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 180.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 1100.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 1100.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1600.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 86.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 1400.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 9402.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 44.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 195.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 8.63,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 58.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 720.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.31,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen 40",
  "kode": "01.21-57301",
  "lat": 58.3564,
  "lng": 8.61619,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57301",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1600.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 56.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 450.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 570.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 87.7,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 400.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 31.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 510.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 149.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3777.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 9.41,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 61.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 250.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.29,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen B01",
  "kode": "01.21-57302",
  "lat": 58.35595,
  "lng": 8.61324,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57302",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1600.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 20.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 120.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 190.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 150.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 220.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 50.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.069,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 16.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1351.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 2.11,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 25.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 77.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen B03",
  "kode": "01.21-57303",
  "lat": 58.33942,
  "lng": 8.60094,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57303",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 320.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 220.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 930.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 960.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1600.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 1400.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 10099.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 940.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 960.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 155.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 69.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.41,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 47.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen B05V",
  "kode": "01.21-57304",
  "lat": 58.34298,
  "lng": 8.6055,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57304",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 13.3,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 960.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 160.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 930.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 1000.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1600.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 97.3,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 1400.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 9132.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 90.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 196.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 15.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 99.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 530.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.52,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen B06",
  "kode": "01.21-57305",
  "lat": 58.35828,
  "lng": 8.61187,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57305",
  "verdier": [
   {
    "stoff": "Fluoranten",
    "verdi": 2300.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 1752.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 93000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 220.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 1500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 1600.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 2100.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 1039.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 14164.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 192.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 1100.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 56.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 8.61,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.82,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.22,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen B16",
  "kode": "01.21-57306",
  "lat": 58.35972,
  "lng": 8.61583,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "Nymo AS",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/57306",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 316.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1500.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 54.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 380.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 520.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 320.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 78.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 460.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 442.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3354.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 7.06,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 79.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 240.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen (83174)",
  "kode": "01.21-83174",
  "lat": 58.36078,
  "lng": 8.61422,
  "klasse": 4,
  "aarFra": 2016,
  "aarTil": 2021,
  "utforende": "NIVA",
  "oppdragsgiver": "NYMO AS v/P.S Windegaard, Nymo, Nymo AS Grimstad",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/83174",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 57.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 350.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Fluoranten",
    "verdi": 510.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Kobber",
    "verdi": 120.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 3
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 320.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Pyren",
    "verdi": 430.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sink",
    "verdi": 220.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 3
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3700.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 7.3,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 16.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 81.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 3
   },
   {
    "stoff": "Fenantren",
    "verdi": 190.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.65,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 3
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.165,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 3
   },
   {
    "stoff": "Naftalen",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Arsen",
    "verdi": 9.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 3
   },
   {
    "stoff": "Krom",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 3
   },
   {
    "stoff": "Nikkel",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 3
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen (83175)",
  "kode": "01.21-83175",
  "lat": 58.35891,
  "lng": 8.61352,
  "klasse": 5,
  "aarFra": 2016,
  "aarTil": 2021,
  "utforende": "NIVA",
  "oppdragsgiver": "NYMO AS v/P.S Windegaard, Nymo, Nymo AS Grimstad",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/83175",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 640.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 3
   },
   {
    "stoff": "Antracen",
    "verdi": 110.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 770.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 900.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1300.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Pyren",
    "verdi": 1100.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Sink",
    "verdi": 890.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 3
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 9300.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 49.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 3
   },
   {
    "stoff": "Bly",
    "verdi": 230.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 3
   },
   {
    "stoff": "Naftalen",
    "verdi": 210.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 5.8,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 720.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.29,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 3
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.176,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 3
   },
   {
    "stoff": "Krom",
    "verdi": 58.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 3
   },
   {
    "stoff": "Nikkel",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 3
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen (83176)",
  "kode": "01.21-83176",
  "lat": 58.35693,
  "lng": 8.61191,
  "klasse": 3,
  "aarFra": 2016,
  "aarTil": 2016,
  "utforende": "NIVA",
  "oppdragsgiver": "NYMO AS v/P.S Windegaard",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/83176",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 20.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 110.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 160.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 140.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 55.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 180.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 27.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1100.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 3.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Bly",
    "verdi": 14.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.065,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 8.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.024,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Nikkel",
    "verdi": 5.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen (83177)",
  "kode": "01.21-83177",
  "lat": 58.35958,
  "lng": 8.61362,
  "klasse": 5,
  "aarFra": 2016,
  "aarTil": 2016,
  "utforende": "NIVA",
  "oppdragsgiver": "NYMO AS v/P.S Windegaard",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/83177",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 190.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 2
   },
   {
    "stoff": "Antracen",
    "verdi": 54.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 520.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 690.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 440.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 32.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 590.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 290.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 5100.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 5.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 130.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Fenantren",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.235,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Arsen",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.18,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 43.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Nikkel",
    "verdi": 24.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen (83178)",
  "kode": "01.21-83178",
  "lat": 58.35942,
  "lng": 8.61229,
  "klasse": 5,
  "aarFra": 2016,
  "aarTil": 2016,
  "utforende": "NIVA",
  "oppdragsgiver": "NYMO AS v/P.S Windegaard",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/83178",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 300.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 2
   },
   {
    "stoff": "Antracen",
    "verdi": 130.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 710.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 830.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1200.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 1200.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 7900.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 400.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 39.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 130.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Fenantren",
    "verdi": 540.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.21,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.177,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Naftalen",
    "verdi": 23.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 14.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 43.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Nikkel",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen (83179)",
  "kode": "01.21-83179",
  "lat": 58.34305,
  "lng": 8.60532,
  "klasse": 5,
  "aarFra": 2016,
  "aarTil": 2021,
  "utforende": "NIVA",
  "oppdragsgiver": "NYMO AS v/P.S Windegaard, Nymo, Nymo AS Grimstad",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/83179",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 303.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 2
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 350.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 982.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 1000.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1800.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Pyren",
    "verdi": 1830.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 10600.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Naftalen",
    "verdi": 49.4,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sink",
    "verdi": 180.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 15.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Bly",
    "verdi": 88.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Fenantren",
    "verdi": 629.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.26,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Kobber",
    "verdi": 79.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.447,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Arsen",
    "verdi": 14.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 39.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Nikkel",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen (83180)",
  "kode": "01.21-83180",
  "lat": 58.35972,
  "lng": 8.61605,
  "klasse": 4,
  "aarFra": 2016,
  "aarTil": 2016,
  "utforende": "NIVA",
  "oppdragsgiver": "NYMO AS v/P.S Windegaard",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/83180",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 44.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 320.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Fluoranten",
    "verdi": 480.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Kobber",
    "verdi": 98.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 250.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Naftalen",
    "verdi": 33.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Pyren",
    "verdi": 390.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sink",
    "verdi": 170.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3100.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 7.5,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Bly",
    "verdi": 60.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 230.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.29,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Arsen",
    "verdi": 8.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.12,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Nikkel",
    "verdi": 18.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vikkilen (83181)",
  "kode": "01.21-83181",
  "lat": 58.35597,
  "lng": 8.6134,
  "klasse": 5,
  "aarFra": 2016,
  "aarTil": 2021,
  "utforende": "NIVA",
  "oppdragsgiver": "NYMO AS v/P.S Windegaard, Nymo, Nymo AS Grimstad",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/83181",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 340.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 95.2,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 203.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 194.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Naftalen",
    "verdi": 33.9,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 290.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2250.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Fenantren",
    "verdi": 260.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Fluoranten",
    "verdi": 333.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Kobber",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.09,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 0.6,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Arsen",
    "verdi": 6.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Bly",
    "verdi": 24.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.081,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 14.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Nikkel",
    "verdi": 8.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Sink",
    "verdi": 61.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Grimstad, Vikkilen S1",
  "kode": "01.21-91568",
  "lat": 58.35898,
  "lng": 8.61543,
  "klasse": 4,
  "aarFra": 1998,
  "aarTil": 1998,
  "utforende": "NIVA",
  "oppdragsgiver": "SFT, SNT m.fl.",
  "medium": "Biota bløtdeler, Biota lever, Biota muskelvev, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/91568",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 79.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 725.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 855.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 442.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 31.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 706.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 9.26,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 349.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Grimstad havn, S2",
  "kode": "01.21-91569",
  "lat": 58.3328,
  "lng": 8.59518,
  "klasse": 4,
  "aarFra": 1998,
  "aarTil": 1998,
  "utforende": "NIVA",
  "oppdragsgiver": "SFT, SNT m.fl.",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/91569",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 72.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 450.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 601.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 324.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 523.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 4.48,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 277.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 18.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Grimstad havn, S3",
  "kode": "01.21-91570",
  "lat": 58.33785,
  "lng": 8.59587,
  "klasse": 5,
  "aarFra": 1998,
  "aarTil": 1998,
  "utforende": "NIVA",
  "oppdragsgiver": "SFT, SNT m.fl.",
  "medium": "Biota bløtdeler, Biota lever, Biota muskelvev, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/91570",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 683.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 16650.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 13172.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 2653.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 2579.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 2652.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 184.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 28.64,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "GRA-2 Groos",
  "kode": "01.21-113730",
  "lat": 58.32721,
  "lng": 8.58425,
  "klasse": 1,
  "aarFra": 2022,
  "aarTil": 2022,
  "utforende": "ALS/Rambøll",
  "oppdragsgiver": "Grimstad kommune",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/113730",
  "verdier": [
   {
    "stoff": "Arsen",
    "verdi": 0.93,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 1.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 1.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 1.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.014,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 1.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 16.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "GS5",
  "kode": "01.21-115655",
  "lat": 58.32242,
  "lng": 8.59288,
  "klasse": null,
  "aarFra": 2023,
  "aarTil": 2023,
  "utforende": "",
  "oppdragsgiver": "",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/115655",
  "verdier": [],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "GS6",
  "kode": "01.21-115656",
  "lat": 58.32387,
  "lng": 8.58827,
  "klasse": null,
  "aarFra": 2023,
  "aarTil": 2023,
  "utforende": "",
  "oppdragsgiver": "",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/115656",
  "verdier": [],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "St. 5 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 5",
  "lat": 58.35537,
  "lng": 8.61,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "11,1 m dyp. silt/leire. farge: gråsort. lukt: ingen. Ikke liv å se.",
  "dyp": "11,1"
 },
 {
  "navn": "St. 7 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 7",
  "lat": 58.35698,
  "lng": 8.612,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "11,1 m dyp. silt/leire. farge: sort. lukt: moderat lukt av \"gørrsaule\" (ikke h2s). Ikke liv å se.",
  "dyp": "11,1"
 },
 {
  "navn": "St. 9 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 9",
  "lat": 58.35733,
  "lng": 8.61307,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "16,5 m dyp. farge: svakt grønnskjær i overflaten (ca 1 mm), gråsort lenger ned silt/leire. lukt: moderat lukt av \"gørrsaule\" (ikke h2s).",
  "dyp": "16,5"
 },
 {
  "navn": "St. 10 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 10",
  "lat": 58.35645,
  "lng": 8.61308,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "17,4 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (1mm), resten gråsort. lukt: ingen lukt.",
  "dyp": "17,4"
 },
 {
  "navn": "St. 11 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 11",
  "lat": 58.35727,
  "lng": 8.61368,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "16,9 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (1mm), resten gråsort. lukt: meget svak lukt av \"gørrsaule\" (ikke h2s).",
  "dyp": "16,9"
 },
 {
  "navn": "St. 17 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 17",
  "lat": 58.3608,
  "lng": 8.61812,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "14,4 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (1mm), resten gråsort. lukt: ingen.",
  "dyp": "14,4"
 },
 {
  "navn": "St. 18 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 18",
  "lat": 58.35972,
  "lng": 8.61438,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "15,2 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (1mm), resten gråsort. lukt: ingen.",
  "dyp": "15,2"
 },
 {
  "navn": "St. 19 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 19",
  "lat": 58.3606,
  "lng": 8.61432,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "15,0 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (1mm), resten gråsort. lukt: ingen.",
  "dyp": "15,0"
 },
 {
  "navn": "St. 21 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 21",
  "lat": 58.36177,
  "lng": 8.6126,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "8,0 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (1mm), resten gråsort. lukt: litt lukt av \"gørrsaule\" (ikke h2s).",
  "dyp": "8,0"
 },
 {
  "navn": "St. 23 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 23",
  "lat": 58.36085,
  "lng": 8.61247,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "10,0 m dyp. silt/leire. farge: olivengrønn sedimentoverflate (1mm), resten gråsort. lukt: lite/ingen lukt (ikke h2s). Sedimentet inneholdt også en del stein/rustbiter og døde skjell.",
  "dyp": "10,0"
 },
 {
  "navn": "St. 25 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 25",
  "lat": 58.36017,
  "lng": 8.61143,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "6,3 m dyp. silt/leire. farge: sort. lukt: ingen. Mange store døde blåskjell-skall.",
  "dyp": "6,3"
 },
 {
  "navn": "St. 27 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 27",
  "lat": 58.35865,
  "lng": 8.61128,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "5,6 m dyp. fin sand. farge: grå. lukt: ingen. Sandblåsersand?.",
  "dyp": "5,6"
 },
 {
  "navn": "St. 28 · NIVA 5040",
  "kode": "NIVA 5040-2005 st. 28",
  "lat": 58.35797,
  "lng": 8.61162,
  "klasse": null,
  "aarFra": null,
  "aarTil": null,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Sediment saltvann — feltbeskrivelse, ingen kjemisk analyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5040-2005",
  "feltnotat": "7,2 m dyp. farge: olivengrønn sedimentoverflate (1mm), resten sort. lukt: ingen.",
  "dyp": "7,2"
 },
 {
  "navn": "GR05 Lillegroos Groosefjorden · NIVA 6939",
  "kode": "NIVA 6939-2015 GR05",
  "lat": 58.3269,
  "lng": 8.58404,
  "klasse": null,
  "aarFra": 2015,
  "aarTil": 2015,
  "utforende": "NIVA",
  "oppdragsgiver": "Grimstad kommune",
  "medium": "Strandsone — organismesamfunn, ingen sedimentanalyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 6939-2015",
  "feltnotat": "Strandsonestasjon undersøkt 28. juli 2015. Posisjon i WGS84 fra tabell 4, s. 23.",
  "dyp": null
 },
 {
  "navn": "GR06 Groos skjær Groosefjorden · NIVA 6939",
  "kode": "NIVA 6939-2015 GR06",
  "lat": 58.3275,
  "lng": 8.58619,
  "klasse": null,
  "aarFra": 2015,
  "aarTil": 2015,
  "utforende": "NIVA",
  "oppdragsgiver": "Grimstad kommune",
  "medium": "Strandsone — organismesamfunn, ingen sedimentanalyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 6939-2015",
  "feltnotat": "Strandsonestasjon undersøkt 28. juli 2015. Posisjon i WGS84 fra tabell 4, s. 23.",
  "dyp": null
 },
 {
  "navn": "GR08 Kalven Groosefjorden · NIVA 6939",
  "kode": "NIVA 6939-2015 GR08",
  "lat": 58.3229,
  "lng": 8.5974,
  "klasse": null,
  "aarFra": 2015,
  "aarTil": 2015,
  "utforende": "NIVA",
  "oppdragsgiver": "Grimstad kommune",
  "medium": "Strandsone — organismesamfunn, ingen sedimentanalyse",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 6939-2015",
  "feltnotat": "Strandsonestasjon undersøkt 28. juli 2015. Posisjon i WGS84 fra tabell 4, s. 23.",
  "dyp": null
 },
 {
  "navn": "Sledetrekk 1 · NIVA 5669",
  "kode": "NIVA 5669-2008 sledetrekk 1",
  "lat": 58.35867,
  "lng": 8.61667,
  "klasse": null,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Bunnorganismer samlet med slede — ikke en sedimentstasjon",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5669-2008",
  "feltnotat": "Sledetrekk for innsamling av bunnorganismer til TBT-analyse, 16-18 m dyp. Trekket går fra 58.35867, 8.61667 til 58.35767, 8.615 — punktet i kartet er startposisjonen. Vedlegg C, s. 74.",
  "dyp": "16-18"
 },
 {
  "navn": "Sledetrekk 2 · NIVA 5669",
  "kode": "NIVA 5669-2008 sledetrekk 2",
  "lat": 58.34662,
  "lng": 8.60758,
  "klasse": null,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "NIVA",
  "oppdragsgiver": "AS Nymo",
  "medium": "Bunnorganismer samlet med slede — ikke en sedimentstasjon",
  "faktaark": null,
  "verdier": [],
  "opphav": "NIVA 5669-2008",
  "feltnotat": "Sledetrekk for innsamling av bunnorganismer til TBT-analyse, 30 m dyp. Trekket går fra 58.34662, 8.60758 til 58.34528, 8.60645 — punktet i kartet er startposisjonen. Vedlegg C, s. 74.",
  "dyp": "30"
 }
];
