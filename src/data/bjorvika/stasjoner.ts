/* Generert av verktoy/bygg_omrade.py bjorvika — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/bjorvika/ og hentes av hent_omrade.py bjorvika.
 *
 * 176 stasjoner med marint sediment innenfor rammen rundt Bjørvika, hentet
 * fra Vannmiljøs stasjonslag og faktaark-eksport.
 *
 * navn          Vannmiljø-navnet, utvidet med betegnelsen når den sier noe nytt.
 *               Er navnet fortsatt likt et annet, står stasjonsnummeret i parentes.
 * klasse        verste M-608-klasse blant verdiene, null = ingen klassifiserte funn
 * verdier       ett innslag per stoff som har grenseverdi i M-608: høyeste målte
 *               verdi, klassen den gir, og n = antall målinger bak den
 *
 * 4509 målinger totalt, 4285 av dem i marint saltvannssediment.
 * 1149 av sedimentmålingene er oppgitt som «<» deteksjonsgrensen og er ikke
 * brukt til å sette klasse. 176 stasjoner har klassifiserte funn.
 * 0 av punktene kommer fra rapportene selv, ikke fra Vannmiljø.
 */
export const D_STASJONER = [
 {
  "navn": "Indre Oslofjord, Akerselvas utløp Aker 11",
  "kode": "01.01-56291",
  "lat": 59.90463,
  "lng": 10.7537,
  "klasse": 5,
  "aarFra": 2006,
  "aarTil": 2006,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/56291",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 1500.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 6000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 310.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.7,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 37000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 273.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 2900.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 3500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 5100.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 160.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 190.0,
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
    "verdi": 440.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 52.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 490.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
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
    "stoff": "Krom",
    "verdi": 93.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 11.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A1b",
  "kode": "01.01-58409",
  "lat": 59.90555,
  "lng": 10.74692,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58409",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 50.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 30.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 180.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 13.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 17.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 140.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 48.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 330.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.8,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 59.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.42,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1900.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A10b",
  "kode": "01.01-58410",
  "lat": 59.90401,
  "lng": 10.75418,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58410",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 41.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
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
    "stoff": "Sink",
    "verdi": 185.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 6.32,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 6.5,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 79.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 48.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 170.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.737,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 69.8,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.416,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1080.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.73,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 58.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A11a",
  "kode": "01.01-58411",
  "lat": 59.90428,
  "lng": 10.75541,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58411",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 160.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 250.0,
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
    "stoff": "Naftalen",
    "verdi": 190.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 153.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3700.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 11.8,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 41.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.504,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 58.8,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.361,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.39,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 53.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A11b",
  "kode": "01.01-58412",
  "lat": 59.90391,
  "lng": 10.75495,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58412",
  "verdier": [
   {
    "stoff": "Fluoranten",
    "verdi": 16.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 22.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.121,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 7.77,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0794,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 39.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 23.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 68.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 42.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier A2b",
  "kode": "01.01-58413",
  "lat": 59.90538,
  "lng": 10.74778,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58413",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 610.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 233.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 2.8,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 170.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 1700.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 2000.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 18300.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 275.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 188.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 3.15,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 520.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 42.1,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 534.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 81.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 12.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A3a",
  "kode": "01.01-58414",
  "lat": 59.90564,
  "lng": 10.74887,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58414",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 22.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.38,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 5.79,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0642,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 34.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 21.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 59.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier A3b",
  "kode": "01.01-58415",
  "lat": 59.90519,
  "lng": 10.74852,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58415",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 820.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 2600.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 397.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 5.19,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 24900.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 2500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 980.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 257.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 59.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 312.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 8.97,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 710.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 48.9,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 139.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 14.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A4a",
  "kode": "01.01-58416",
  "lat": 59.90564,
  "lng": 10.74964,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58416",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 230.0,
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
    "verdi": 1400.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 7300.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 80.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 270.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 14.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 17.7,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 92.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 73.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier A4b",
  "kode": "01.01-58417",
  "lat": 59.90503,
  "lng": 10.74936,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58417",
  "verdier": [
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 16.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 30.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.0653,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 0.96,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 0.775,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 12.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0378,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 18.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 24.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 17.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 67.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 175.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A5a",
  "kode": "01.01-58418",
  "lat": 59.90551,
  "lng": 10.75049,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58418",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 670.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 2.9,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 22000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 1900.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 130.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 67.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 45.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 190.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 330.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 560.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 310.0,
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
    "stoff": "Nikkel",
    "verdi": 32.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 55.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A5b",
  "kode": "01.01-58419",
  "lat": 59.90482,
  "lng": 10.75024,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58419",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 250.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 490.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 960.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 60.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 6000.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.065,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.6,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 5.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 18.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 21.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 21.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 69.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A6a",
  "kode": "01.01-58420",
  "lat": 59.90522,
  "lng": 10.75139,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58420",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 50.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 30.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 9.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 19.8,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 90.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 27.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 230.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.16,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 97.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1300.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 4.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.078,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 24.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 22.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A6b",
  "kode": "01.01-58421",
  "lat": 59.90466,
  "lng": 10.75103,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58421",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 25.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 0.856,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 4.98,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0695,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 39.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 23.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 64.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A8b",
  "kode": "01.01-58422",
  "lat": 59.90432,
  "lng": 10.75264,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58422",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 90.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 92.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2460.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 9.59,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 7.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 160.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 37.9,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 370.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.408,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 49.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.283,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 32.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 131.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.57,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 51.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A9b",
  "kode": "01.01-58423",
  "lat": 59.90419,
  "lng": 10.75346,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58423",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 310.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 660.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 129.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.989,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 140.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 307.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3810.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 26.6,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 80.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.51,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 70.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.83,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika B10a",
  "kode": "01.01-58424",
  "lat": 59.90354,
  "lng": 10.7541,
  "klasse": 3,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58424",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 23.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 46.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 24.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.0933,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 15.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 3.3,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 3.94,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 11.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.118,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 36.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 19.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 76.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 282.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika B10b",
  "kode": "01.01-58425",
  "lat": 59.90321,
  "lng": 10.75365,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58425",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 90.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 240.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 96.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 160.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2570.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 11.9,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 38.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 360.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.541,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 61.6,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.269,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 31.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 4.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 50.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier B1a-a",
  "kode": "01.01-58426",
  "lat": 59.90509,
  "lng": 10.74659,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58426",
  "verdier": [
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 25.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 31.9,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.5,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 5.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 14.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0863,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 18.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 47.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 75.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 110.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier B1b",
  "kode": "01.01-58427",
  "lat": 59.90485,
  "lng": 10.74607,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58427",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 74.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 240.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 33.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 57.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 43.6,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2640.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 13.5,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 30.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 330.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.227,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 42.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 63.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.231,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 131.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.04,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier B2a",
  "kode": "01.01-58428",
  "lat": 59.90492,
  "lng": 10.74735,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58428",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 140.0,
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
    "verdi": 500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 39.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.651,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 140.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 201.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3890.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 22.7,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 69.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.843,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 84.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 37.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.44,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 50.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier B2b",
  "kode": "01.01-58429",
  "lat": 59.90451,
  "lng": 10.74703,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58429",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 850.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 5500.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 529.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 5.92,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 30800.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 3100.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 1230.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 326.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 64.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 369.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 11.6,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 640.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 54.4,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 16.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 174.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier B3a",
  "kode": "01.01-58430",
  "lat": 59.90464,
  "lng": 10.74832,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58430",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 350.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 1200.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1900.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.864,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 11900.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 190.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
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
    "stoff": "Sum PCB-7",
    "verdi": 27.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 6.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 83.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.803,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 63.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 35.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.69,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 56.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier B3b",
  "kode": "01.01-58431",
  "lat": 59.90436,
  "lng": 10.74805,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58431",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 300.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.69,
    "enhet": "mg/kg TS",
    "klasse": 5,
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
    "verdi": 1400.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 123.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 10500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 200.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 333.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 26.4,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 20.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 137.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.61,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 67.8,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 34.6,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.01,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier B4a",
  "kode": "01.01-58432",
  "lat": 59.90461,
  "lng": 10.74899,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58432",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 36.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 38.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 88.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 150.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 31.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.163,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1060.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 3.72,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.59,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 16.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.162,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 29.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 17.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 88.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier B4b",
  "kode": "01.01-58433",
  "lat": 59.90413,
  "lng": 10.74839,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58433",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 940.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1300.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.1,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 9050.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 230.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 243.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 33.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 15.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 88.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.13,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 81.6,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 53.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 29.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika B5a",
  "kode": "01.01-58434",
  "lat": 59.90443,
  "lng": 10.74981,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58434",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 1900.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 7400.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 440.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 6.6,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 48000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 130.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 3400.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 1800.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 159.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 780.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 9.3,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 480.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 17.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 130.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier B5b",
  "kode": "01.01-58435",
  "lat": 59.90405,
  "lng": 10.74951,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58435",
  "verdier": [
   {
    "stoff": "Bly",
    "verdi": 45.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 18.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 2.32,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.121,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 12.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 22.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 13.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 56.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 67.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika B8a",
  "kode": "01.01-58436",
  "lat": 59.90388,
  "lng": 10.75236,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58436",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 98.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 31.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.673,
    "enhet": "mg/kg TS",
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
    "stoff": "Sink",
    "verdi": 194.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2570.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 23.1,
    "enhet": "µg/kg TS",
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
    "verdi": 66.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 380.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.673,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 72.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 60.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 39.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika B8b",
  "kode": "01.01-58437",
  "lat": 59.90351,
  "lng": 10.75204,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58437",
  "verdier": [
   {
    "stoff": "Fluoranten",
    "verdi": 17.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 0.18,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 2.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 7.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 32.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 21.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 82.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 45.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika B9a",
  "kode": "01.01-58438",
  "lat": 59.90373,
  "lng": 10.75315,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58438",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 0.135,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 0.741,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 5.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0437,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 17.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 17.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 59.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika B9b",
  "kode": "01.01-58439",
  "lat": 59.90332,
  "lng": 10.75289,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58439",
  "verdier": [
   {
    "stoff": "Fluoranten",
    "verdi": 17.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 23.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.085,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.18,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 8.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0824,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 31.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 17.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 64.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 44.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier C1b",
  "kode": "01.01-58440",
  "lat": 59.90366,
  "lng": 10.74561,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58440",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 160.0,
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
    "verdi": 770.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 32.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 170.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 5000.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 34.3,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 37.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.369,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 40.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.292,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 126.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 33.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 22.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier C2a",
  "kode": "01.01-58441",
  "lat": 59.90403,
  "lng": 10.74699,
  "klasse": 3,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58441",
  "verdier": [
   {
    "stoff": "Sum PCB-7",
    "verdi": 4.36,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 17.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 69.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 37.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 21.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.0839,
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
    "stoff": "Arsen",
    "verdi": 5.84,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0574,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 39.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 77.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 203.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier C2b",
  "kode": "01.01-58442",
  "lat": 59.9036,
  "lng": 10.74683,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58442",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 600.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 2500.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
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
    "stoff": "Kvikksølv",
    "verdi": 0.938,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 16500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 106.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 182.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 91.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.532,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 54.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 34.8,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.3,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.22,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 48.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier C3a",
  "kode": "01.01-58443",
  "lat": 59.90391,
  "lng": 10.7476,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58443",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 440.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 2300.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 1200.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.21,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 14300.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
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
    "verdi": 214.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 6.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 8.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 85.6,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.781,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 59.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 60.6,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 36.6,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.43,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier C3b",
  "kode": "01.01-58444",
  "lat": 59.9035,
  "lng": 10.74715,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58444",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 450.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.96,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 1700.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 1700.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 131.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 14800.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 99.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 60.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 229.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 340.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 304.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.71,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 73.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 37.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 10.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier C4a",
  "kode": "01.01-58445",
  "lat": 59.90377,
  "lng": 10.74828,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58445",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 2.97,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 130.0,
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
    "verdi": 680.0,
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
    "stoff": "Bly",
    "verdi": 154.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 390.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 4480.0,
    "enhet": "µg/kg TS",
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
    "stoff": "Tributyltinn (TBT)",
    "verdi": 5.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.84,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 65.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 33.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 10.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier C4b",
  "kode": "01.01-58446",
  "lat": 59.90354,
  "lng": 10.74813,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58446",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 780.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 5200.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 194.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 7.21,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 33800.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 4000.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 1090.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 19.8,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 369.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 3.78,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 610.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 44.5,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 78.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier C5a",
  "kode": "01.01-58447",
  "lat": 59.90358,
  "lng": 10.74926,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58447",
  "verdier": [
   {
    "stoff": "Fluoranten",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 32.8,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.8,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 0.79,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 8.43,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.078,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 22.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 13.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 64.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier C5b",
  "kode": "01.01-58448",
  "lat": 59.90309,
  "lng": 10.74905,
  "klasse": 3,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58448",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 14.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 5.5,
    "enhet": "µg/kg TS",
    "klasse": 3,
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
    "stoff": "Fluoranten",
    "verdi": 67.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 29.8,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.0956,
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
    "stoff": "Sink",
    "verdi": 90.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 450.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.88,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 14.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.129,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 28.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 23.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika C6a",
  "kode": "01.01-58449",
  "lat": 59.90338,
  "lng": 10.75019,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58449",
  "verdier": [
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 18.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 29.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 96.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 1.4,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 2.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 12.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 32.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 179.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika C6b",
  "kode": "01.01-58450",
  "lat": 59.90293,
  "lng": 10.74988,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58450",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 49.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 76.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 12.2,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 110.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 170.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.338,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 44.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.252,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 95.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1300.0,
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
    "verdi": 2.13,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 36.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 24.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika C7a",
  "kode": "01.01-58451",
  "lat": 59.9035,
  "lng": 10.7509,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58451",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 360.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.6,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 770.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 2000.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 100.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 10000.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 27.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 210.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 280.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 22.9,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 97.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 47.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika C7b",
  "kode": "01.01-58452",
  "lat": 59.90279,
  "lng": 10.75064,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58452",
  "verdier": [
   {
    "stoff": "Fluoranten",
    "verdi": 20.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 22.8,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 0.989,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 7.82,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0807,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 31.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 22.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 66.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 46.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika C8a",
  "kode": "01.01-58453",
  "lat": 59.90305,
  "lng": 10.75195,
  "klasse": 4,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58453",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 60.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 28.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 30.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 16.6,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 140.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 290.0,
    "enhet": "µg/kg TS",
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
    "verdi": 0.16,
    "enhet": "mg/kg TS",
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
    "stoff": "Sum PAH-16",
    "verdi": 1700.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 4.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.14,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 25.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika C8b",
  "kode": "01.01-58454",
  "lat": 59.90293,
  "lng": 10.75145,
  "klasse": 4,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58454",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 180.0,
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
    "stoff": "Benzo(a)pyren",
    "verdi": 230.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
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
    "stoff": "Sum PAH-16",
    "verdi": 3200.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 41.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.14,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 5.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.15,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 81.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika C9a",
  "kode": "01.01-58455",
  "lat": 59.90287,
  "lng": 10.75262,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58455",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 22.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 2.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 5.8,
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
    "verdi": 22.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 88.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier D1a",
  "kode": "01.01-58456",
  "lat": 59.90338,
  "lng": 10.74533,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58456",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 950.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 2700.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 436.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 5.72,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 31000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 465.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 3400.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 1140.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 372.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 8.71,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 760.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 54.1,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 5.3,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 17.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 164.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier D2a",
  "kode": "01.01-58457",
  "lat": 59.90322,
  "lng": 10.74613,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58457",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 530.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
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
    "verdi": 1700.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.12,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 11500.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 43.2,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 35.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 190.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 216.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 97.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.08,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 82.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 62.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 36.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.46,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D2b",
  "kode": "01.01-58458",
  "lat": 59.90307,
  "lng": 10.74587,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58458",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 6.2,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 30.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 32.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 5.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 30.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.039,
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
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 170.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier D3a",
  "kode": "01.01-58459",
  "lat": 59.90306,
  "lng": 10.74692,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58459",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 197.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 2.16,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 290.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 950.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 980.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 8680.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 105.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 86.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 157.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 2.81,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 250.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 435.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 71.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 38.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 11.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D3b",
  "kode": "01.01-58460",
  "lat": 59.90261,
  "lng": 10.74669,
  "klasse": 1,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58460",
  "verdier": [
   {
    "stoff": "Arsen",
    "verdi": 0.571,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 5.73,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0639,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 17.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 26.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 15.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 48.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika/Revier D4a",
  "kode": "01.01-58461",
  "lat": 59.90287,
  "lng": 10.74785,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58461",
  "verdier": [
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 14.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 30.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 3.3,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 0.743,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 4.67,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.059,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 13.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 20.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 13.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 50.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 151.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D4b",
  "kode": "01.01-58462",
  "lat": 59.90248,
  "lng": 10.74749,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58462",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 20.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 0.599,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 5.67,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0657,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 26.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 17.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 57.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D5a",
  "kode": "01.01-58463",
  "lat": 59.90296,
  "lng": 10.74869,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58463",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 80.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 80.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
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
    "verdi": 34.0,
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
   },
   {
    "stoff": "Naftalen",
    "verdi": 20.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 91.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
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
    "verdi": 6.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 25.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D5b",
  "kode": "01.01-58464",
  "lat": 59.90249,
  "lng": 10.74863,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58464",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 80.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 36.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 350.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2100.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 9.3,
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
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 300.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 36.0,
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
   },
   {
    "stoff": "Sink",
    "verdi": 93.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D6a",
  "kode": "01.01-58465",
  "lat": 59.90252,
  "lng": 10.74958,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58465",
  "verdier": [
   {
    "stoff": "Sum PCB-7",
    "verdi": 0.12,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 2.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 6.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 18.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 83.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D6b",
  "kode": "01.01-58466",
  "lat": 59.9021,
  "lng": 10.74934,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58466",
  "verdier": [
   {
    "stoff": "Fluoranten",
    "verdi": 12.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 24.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 0.92,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 15.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0787,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 31.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 21.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 58.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 24.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D7a",
  "kode": "01.01-58467",
  "lat": 59.90232,
  "lng": 10.7504,
  "klasse": 1,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58467",
  "verdier": [
   {
    "stoff": "Arsen",
    "verdi": 1.12,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 6.07,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.071,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 19.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 39.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 27.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 66.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D7b",
  "kode": "01.01-58468",
  "lat": 59.90201,
  "lng": 10.74993,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58468",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 140.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 370.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 810.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.1,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 30.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 190.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 4400.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 6.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 77.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 53.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.17,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D8a",
  "kode": "01.01-58469",
  "lat": 59.90216,
  "lng": 10.7512,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58469",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 24.8,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.27,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 7.18,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.074,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 31.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 24.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 66.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E2a",
  "kode": "01.01-58470",
  "lat": 59.90242,
  "lng": 10.74561,
  "klasse": 5,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58470",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 860.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 4500.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 335.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 3.8,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 27800.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 2400.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 770.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 179.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 279.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 7.13,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 760.0,
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
    "stoff": "Krom",
    "verdi": 115.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 37.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 13.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E2b",
  "kode": "01.01-58471",
  "lat": 59.90197,
  "lng": 10.74534,
  "klasse": 3,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58471",
  "verdier": [
   {
    "stoff": "Nikkel",
    "verdi": 55.4,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 13.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 33.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 28.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 60.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.0859,
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
    "stoff": "Sink",
    "verdi": 115.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.6,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.69,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 22.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0533,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 184.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E3a",
  "kode": "01.01-58472",
  "lat": 59.90226,
  "lng": 10.74642,
  "klasse": 3,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58472",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 30.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 66.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 26.9,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 328.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 2.15,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 8.34,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0414,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 28.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.046,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 21.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 69.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E3b",
  "kode": "01.01-58473",
  "lat": 59.90359,
  "lng": 10.74591,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58473",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 1.5,
    "enhet": "mg/kg TS",
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
    "stoff": "Benzo(a)pyren",
    "verdi": 580.0,
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
    "stoff": "Sum PAH-16",
    "verdi": 6800.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 34.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 110.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 370.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 37.8,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 69.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
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
    "stoff": "Kobber",
    "verdi": 82.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 29.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 27.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E4a",
  "kode": "01.01-58474",
  "lat": 59.90207,
  "lng": 10.74723,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58474",
  "verdier": [
   {
    "stoff": "Fluoranten",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 0.51,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.02,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 5.21,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.04,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 19.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 36.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 22.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 58.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E4b",
  "kode": "01.01-58475",
  "lat": 59.9016,
  "lng": 10.74709,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58475",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 31.8,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.1,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 4.97,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0604,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 35.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 24.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 61.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E5a",
  "kode": "01.01-58476",
  "lat": 59.90184,
  "lng": 10.74819,
  "klasse": 1,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58476",
  "verdier": [
   {
    "stoff": "Arsen",
    "verdi": 1.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 4.42,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0524,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 18.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 36.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 24.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 57.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E5b",
  "kode": "01.01-58477",
  "lat": 59.90144,
  "lng": 10.74781,
  "klasse": 4,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58477",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 37.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 41.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 5.58,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 12.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 29.9,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 160.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.21,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.165,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 92.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1080.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.18,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 41.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E6a",
  "kode": "01.01-58478",
  "lat": 59.90167,
  "lng": 10.74894,
  "klasse": 2,
  "aarFra": 2011,
  "aarTil": 2011,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58478",
  "verdier": [
   {
    "stoff": "Fluoranten",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 20.3,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 5.27,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0477,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 32.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 18.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 57.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E6b",
  "kode": "01.01-58479",
  "lat": 59.9014,
  "lng": 10.74897,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58479",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 750.0,
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
    "verdi": 226.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 6.1,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 21000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 1700.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 117.4,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 92.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 190.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 520.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 71.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 25.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika F2a",
  "kode": "01.01-58480",
  "lat": 59.90155,
  "lng": 10.74499,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58480",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 160.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.6,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 71.5,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 65.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 160.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 2.6,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 460.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 20.0,
    "enhet": "µg/kg TS",
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
    "verdi": 51.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 27.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 60.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika F2b",
  "kode": "01.01-58481",
  "lat": 59.90053,
  "lng": 10.7542,
  "klasse": 5,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58481",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 2900.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 10000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 250.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 2.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 61000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 3300.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 138.4,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 99.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 240.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 6.1,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 430.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 640.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 17.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 83.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A1, A2, A4",
  "kode": "01.01-58482",
  "lat": 59.90129,
  "lng": 10.74093,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58482",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 31.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 28.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 9.9,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 15.4,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 75.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 120.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 36.0,
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
   },
   {
    "stoff": "Nikkel",
    "verdi": 39.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 120.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 910.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.13,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 39.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika A3",
  "kode": "01.01-58483",
  "lat": 59.90071,
  "lng": 10.74232,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58483",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 88.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 430.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.1,
    "enhet": "mg/kg TS",
    "klasse": 4,
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
    "stoff": "Naftalen",
    "verdi": 63.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 200.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2700.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 7.28,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 72.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.52,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 62.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 42.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 12.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 44.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika B1, B2, B3, B4",
  "kode": "01.01-58484",
  "lat": 59.9018,
  "lng": 10.74529,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58484",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 8.3,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 15.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 47.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 35.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.13,
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
    "stoff": "Nikkel",
    "verdi": 40.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 110.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.63,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 220.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika C1, C2, C3, C4",
  "kode": "01.01-58485",
  "lat": 59.90112,
  "lng": 10.74414,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58485",
  "verdier": [
   {
    "stoff": "Fluoranten",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 39.0,
    "enhet": "mg/kg TS",
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
    "verdi": 6.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 16.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.05,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 39.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.05,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 57.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D1",
  "kode": "01.01-58486",
  "lat": 59.90124,
  "lng": 10.74665,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58486",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 380.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 150.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 4.8,
    "enhet": "mg/kg TS",
    "klasse": 5,
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
    "stoff": "Sum PAH-16",
    "verdi": 12000.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 190.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 240.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 590.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 2.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 42.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 1.1,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.77,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 56.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika D2, D3, D4",
  "kode": "01.01-58487",
  "lat": 59.90089,
  "lng": 10.7461,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58487",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 92.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.29,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 14.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 6.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.03,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 30.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E1",
  "kode": "01.01-58488",
  "lat": 59.90054,
  "lng": 10.74553,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58488",
  "verdier": [
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 8.6,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 44.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 8.9,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 37.0,
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
   },
   {
    "stoff": "Nikkel",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 110.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.09,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 72.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E2",
  "kode": "01.01-58489",
  "lat": 59.9002,
  "lng": 10.74495,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58489",
  "verdier": [
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 8.6,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 8.9,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 25.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 42.0,
    "enhet": "mg/kg TS",
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
    "verdi": 7.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 40.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.03,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 72.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 0.993,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E3",
  "kode": "01.01-58490",
  "lat": 59.89991,
  "lng": 10.74564,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58490",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 9.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 17.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 41.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 8.4,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 96.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.37,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 21.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 250.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika E4",
  "kode": "01.01-58491",
  "lat": 59.90026,
  "lng": 10.74621,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58491",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 0.98,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 26.0,
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
    "stoff": "Benzo(a)pyren",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 60.0,
    "enhet": "mg/kg TS",
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
    "stoff": "Kadmium",
    "verdi": 0.38,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 44.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 23.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1100.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.68,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika F1",
  "kode": "01.01-58492",
  "lat": 59.90094,
  "lng": 10.74848,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58492",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 12.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 16.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 47.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 24.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.11,
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
    "stoff": "Tributyltinn (TBT)",
    "verdi": 3.29,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.08,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 30.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 88.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika F2",
  "kode": "01.01-58493",
  "lat": 59.90066,
  "lng": 10.74804,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58493",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 8.2,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 15.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 32.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 24.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.13,
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
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.99,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 16.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.11,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 26.0,
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
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 220.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika F3",
  "kode": "01.01-58494",
  "lat": 59.90038,
  "lng": 10.74872,
  "klasse": 1,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58494",
  "verdier": [
   {
    "stoff": "Arsen",
    "verdi": 7.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 12.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 6.4,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 19.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 32.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.04,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 76.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 18.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 0.497,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika F4",
  "kode": "01.01-58495",
  "lat": 59.90066,
  "lng": 10.74916,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58495",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 28.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 6.89,
    "enhet": "µg/kg TS",
    "klasse": 3,
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
    "verdi": 42.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.34,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.33,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 18.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 130.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 610.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika G1",
  "kode": "01.01-58496",
  "lat": 59.90032,
  "lng": 10.74746,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58496",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 1.8,
    "enhet": "mg/kg TS",
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
    "stoff": "Naftalen",
    "verdi": 46.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 160.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 4.7,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 140.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 61.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 270.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.46,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 42.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1800.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 3.5,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 12.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 40.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika G2",
  "kode": "01.01-58497",
  "lat": 59.89997,
  "lng": 10.74689,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58497",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 7.4,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 8.98,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 28.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 13.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 19.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 30.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.05,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 27.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 72.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 170.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika G3",
  "kode": "01.01-58498",
  "lat": 59.89968,
  "lng": 10.74759,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58498",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 25.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 37.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 86.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 14.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 530.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 3.96,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 13.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 32.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.05,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 74.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika G4",
  "kode": "01.01-58499",
  "lat": 59.90003,
  "lng": 10.74816,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58499",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1220.0,
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
    "stoff": "Benzo(a)pyren",
    "verdi": 490.0,
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
    "stoff": "Sum PAH-16",
    "verdi": 6300.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 49.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 170.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.37,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.49,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 120.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika H1",
  "kode": "01.01-58500",
  "lat": 59.89963,
  "lng": 10.74634,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58500",
  "verdier": [
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 7.6,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 15.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 25.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.07,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
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
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.9,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 17.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.07,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 43.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika H2, H3, H4",
  "kode": "01.01-58501",
  "lat": 59.89931,
  "lng": 10.74582,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58501",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 6.8,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 9.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 13.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 29.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 25.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 6.9,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 97.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 18.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.12,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 40.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 190.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika I1",
  "kode": "01.01-58502",
  "lat": 59.90037,
  "lng": 10.74986,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58502",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 2.1,
    "enhet": "mg/kg TS",
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
    "stoff": "Benzo(a)pyren",
    "verdi": 450.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 590.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 120.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 70.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 59.6,
    "enhet": "µg/kg TS",
    "klasse": 4,
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
    "stoff": "Sink",
    "verdi": 250.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 4700.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 73.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.6,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 45.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 27.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika I2, I3, I4",
  "kode": "01.01-58503",
  "lat": 59.90009,
  "lng": 10.74942,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58503",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 15.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 24.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 68.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.14,
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
    "stoff": "Sum PAH-16",
    "verdi": 370.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 4.97,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 18.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 30.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 90.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika J1",
  "kode": "01.01-58504",
  "lat": 59.89974,
  "lng": 10.74885,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58504",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 110.0,
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
    "verdi": 700.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
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
    "stoff": "Sum PAH-16",
    "verdi": 3600.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 13.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 5.59,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.11,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 5.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 16.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.07,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 19.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 25.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 74.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika J2",
  "kode": "01.01-58505",
  "lat": 59.8994,
  "lng": 10.74827,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58505",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 18.0,
    "enhet": "µg/kg TS",
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
    "stoff": "Benzo(a)pyren",
    "verdi": 54.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
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
    "stoff": "Nikkel",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 610.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.69,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 14.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.05,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.04,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 87.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika J3",
  "kode": "01.01-58506",
  "lat": 59.89911,
  "lng": 10.74896,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58506",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 15.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 34.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 86.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.24,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 17.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 480.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 2.3,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 3.49,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.06,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 32.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 82.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika J4",
  "kode": "01.01-58507",
  "lat": 59.89946,
  "lng": 10.74953,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58507",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 25.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 9.4,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 61.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 150.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 21.0,
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
    "stoff": "Nikkel",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 94.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 820.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.72,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 41.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
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
  "navn": "Bjørvika K1, K2, K3, K4",
  "kode": "01.01-58508",
  "lat": 59.89905,
  "lng": 10.7477,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58508",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 22.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.05,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 7.8,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.05,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 89.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 28.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika L1, L2",
  "kode": "01.01-58509",
  "lat": 59.89978,
  "lng": 10.75137,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58509",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 6.8,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 12.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 35.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.08,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 6.9,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.64,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 16.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.05,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 89.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 190.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika L3",
  "kode": "01.01-58510",
  "lat": 59.89923,
  "lng": 10.75148,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58510",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 1700.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 15000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.7,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 92000.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
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
    "stoff": "Naftalen",
    "verdi": 5800.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 28.9,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 180.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 20.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 84.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.2,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 60.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 30.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika L4",
  "kode": "01.01-58511",
  "lat": 59.89958,
  "lng": 10.75205,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58511",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 126.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 110.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 590.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
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
    "stoff": "Naftalen",
    "verdi": 120.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3200.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.35,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 34.0,
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
   },
   {
    "stoff": "Sink",
    "verdi": 95.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 21.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika M1, M3",
  "kode": "01.01-58512",
  "lat": 59.89917,
  "lng": 10.75023,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58512",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 8.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 29.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.13,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 96.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.41,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 19.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 40.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 150.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika M2",
  "kode": "01.01-58513",
  "lat": 59.89883,
  "lng": 10.74966,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58513",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 9.2,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 8.5,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 20.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 46.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.37,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 31.0,
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
   },
   {
    "stoff": "Naftalen",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 19.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 81.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika M4",
  "kode": "01.01-58514",
  "lat": 59.89888,
  "lng": 10.75091,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58514",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 8.2,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 13.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 33.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 21.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.06,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 6.5,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.31,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 16.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.06,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 87.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 190.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika N1",
  "kode": "01.01-58515",
  "lat": 59.89848,
  "lng": 10.74908,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58515",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 76.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 49.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 52.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 24.0,
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
    "stoff": "Bly",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 290.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.35,
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
    "verdi": 0.25,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 110.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1800.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika N2",
  "kode": "01.01-58516",
  "lat": 59.89813,
  "lng": 10.74851,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58516",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 420.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 8.5,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1660.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 55.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 920.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 24.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 310.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 7.6,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 43.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 46.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 14.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 160.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 190.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 130.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1700.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika N3",
  "kode": "01.01-58517",
  "lat": 59.89785,
  "lng": 10.74919,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58517",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 0.98,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 35.2,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 9.8,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 190.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 26.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 55.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 41.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.1,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 73.0,
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
    "stoff": "Nikkel",
    "verdi": 32.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 11.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 46.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 280.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika N4",
  "kode": "01.01-58518",
  "lat": 59.8982,
  "lng": 10.74977,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58518",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 9.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 61.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 42.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 24.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.06,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 6.3,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 470.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.18,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 14.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 30.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 27.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 68.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika O1",
  "kode": "01.01-58519",
  "lat": 59.89809,
  "lng": 10.74749,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58519",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 170.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 3.7,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 171.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 110.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 290.0,
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
    "stoff": "Kadmium",
    "verdi": 2.6,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 82.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 380.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3200.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 34.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 120.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 62.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika O2",
  "kode": "01.01-58520",
  "lat": 59.89779,
  "lng": 10.74794,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58520",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 22.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 98.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 42.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
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
  "navn": "Bjørvika O3",
  "kode": "01.01-58521",
  "lat": 59.8975,
  "lng": 10.74864,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58521",
  "verdier": [
   {
    "stoff": "Bly",
    "verdi": 30.0,
    "enhet": "mg/kg TS",
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
    "stoff": "Kobber",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.35,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 130.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 7.7,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 42.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 23.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika O4",
  "kode": "01.01-58522",
  "lat": 59.89721,
  "lng": 10.74932,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58522",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 350.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 4.6,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 130.0,
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
    "verdi": 550.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 60.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 12.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 79.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 43.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 560.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3100.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 11.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 150.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 200.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 12.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika P1",
  "kode": "01.01-58523",
  "lat": 59.89894,
  "lng": 10.75195,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58523",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 22.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 32.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 16.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.05,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 89.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika P2",
  "kode": "01.01-58524",
  "lat": 59.89859,
  "lng": 10.75159,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58524",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 250.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 5.5,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 67.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 38.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 160.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 3.2,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 50.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 480.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 15.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 17.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 140.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 270.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 77.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1700.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika P3",
  "kode": "01.01-58525",
  "lat": 59.89825,
  "lng": 10.75102,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58525",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 1.7,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 37.0,
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
    "stoff": "Tributyltinn (TBT)",
    "verdi": 42.9,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 200.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 63.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 68.0,
    "enhet": "mg/kg TS",
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
    "stoff": "Kadmium",
    "verdi": 1.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 21.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 810.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 3.5,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 10.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 43.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika P4",
  "kode": "01.01-58526",
  "lat": 59.89796,
  "lng": 10.75172,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58526",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 260.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 5.6,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 564.0,
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
    "stoff": "Benzo(a)pyren",
    "verdi": 810.0,
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
    "stoff": "Sum PAH-16",
    "verdi": 8400.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 45.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 180.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 3.7,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 200.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 560.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 18.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 81.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika Q1",
  "kode": "01.01-58527",
  "lat": 59.89791,
  "lng": 10.75047,
  "klasse": 5,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58527",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 260.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 5.4,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 292.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 240.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 170.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 3.3,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 67.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 540.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 2700.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 20.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 18.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 390.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 76.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika Q2",
  "kode": "01.01-58528",
  "lat": 59.89756,
  "lng": 10.74989,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58528",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 64.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 33.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 9.5,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 8.09,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 99.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 170.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 25.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.14,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
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
    "verdi": 6.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.19,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 85.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika Q3",
  "kode": "01.01-58529",
  "lat": 59.89728,
  "lng": 10.75058,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58529",
  "verdier": [
   {
    "stoff": "Nikkel",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 13.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 8.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.03,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 85.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 21.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika Q4",
  "kode": "01.01-58530",
  "lat": 59.89762,
  "lng": 10.75115,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58530",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 8.5,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 22.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 51.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.06,
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
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.06,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 13.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 30.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 27.0,
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
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 290.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika Bjør1+3",
  "kode": "01.01-58531",
  "lat": 59.90768,
  "lng": 10.74921,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58531",
  "verdier": [
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 9.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 17.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.07,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 98.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.71,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 19.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bjørvika Bjør2",
  "kode": "01.01-58532",
  "lat": 59.90793,
  "lng": 10.74973,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58532",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 15.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 7.74,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 51.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 26.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 79.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.18,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 17.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 130.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 550.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 5.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.14,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bispevika Bisp-A1",
  "kode": "01.01-58533",
  "lat": 59.90568,
  "lng": 10.75577,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58533",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 29.0,
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
    "stoff": "Benzo(a)pyren",
    "verdi": 61.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 120.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 24.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.08,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 750.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.03,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 5.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 17.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 30.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 79.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bispevika Bisp-A2",
  "kode": "01.01-58534",
  "lat": 59.90541,
  "lng": 10.75647,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58534",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 140.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 20.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
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
    "verdi": 0.38,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 45.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.39,
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
    "stoff": "Nikkel",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 4.46,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 39.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 260.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bispevika Bisp-A3",
  "kode": "01.01-58535",
  "lat": 59.90576,
  "lng": 10.75702,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58535",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 39.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 39.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 78.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 160.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.18,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 110.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1000.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 3.93,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 22.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bispevika Bisp-A4",
  "kode": "01.01-58536",
  "lat": 59.90604,
  "lng": 10.75632,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58536",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 130.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 270.0,
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
    "stoff": "Naftalen",
    "verdi": 120.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 140.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3400.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 12.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 41.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.35,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 39.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.48,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 3.7,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 5.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bispevika Bisp-B1+B2",
  "kode": "01.01-58537",
  "lat": 59.90639,
  "lng": 10.75828,
  "klasse": 2,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58537",
  "verdier": [
   {
    "stoff": "Nikkel",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.04,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 83.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 5.3,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 0.908,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bispevika Bisp-C1",
  "kode": "01.01-58538",
  "lat": 59.90584,
  "lng": 10.75687,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58538",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 62.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.83,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 55.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 190.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 12.5,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 130.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 50.0,
    "enhet": "mg/kg TS",
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
    "verdi": 0.68,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 55.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1600.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 43.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bispevika Bisp-C2",
  "kode": "01.01-58539",
  "lat": 59.90556,
  "lng": 10.75757,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58539",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 27.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 81.0,
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
    "verdi": 21.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.06,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 25.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 890.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 3.82,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 87.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bispevika Bisp-C3",
  "kode": "01.01-58540",
  "lat": 59.90592,
  "lng": 10.75812,
  "klasse": 4,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58540",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 82.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 190.0,
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
    "stoff": "Sum PAH-16",
    "verdi": 2300.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 16.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 6.12,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 390.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 27.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.12,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 5.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.12,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 30.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 87.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bispevika Bisp-C4",
  "kode": "01.01-58541",
  "lat": 59.90619,
  "lng": 10.75744,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58541",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 5.7,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 17.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 32.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 22.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.07,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 6.9,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 93.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.38,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 10.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 17.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 190.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Bispevika Bisp-D1,D2,D3,D4",
  "kode": "01.01-58542",
  "lat": 59.90513,
  "lng": 10.75718,
  "klasse": 3,
  "aarFra": 2007,
  "aarTil": 2007,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58542",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 7.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 17.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 34.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 25.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.09,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 9.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 32.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 94.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.91,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 9.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 18.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.08,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 200.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn LO1",
  "kode": "01.01-58543",
  "lat": 59.90238,
  "lng": 10.75712,
  "klasse": 1,
  "aarFra": 2010,
  "aarTil": 2010,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58543",
  "verdier": [
   {
    "stoff": "Arsen",
    "verdi": 0.787,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 4.44,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0658,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 12.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 11.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 9.09,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 39.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn LO2",
  "kode": "01.01-58544",
  "lat": 59.90201,
  "lng": 10.75667,
  "klasse": 1,
  "aarFra": 2010,
  "aarTil": 2010,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58544",
  "verdier": [
   {
    "stoff": "Arsen",
    "verdi": 0.741,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 5.28,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0524,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 10.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 14.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 10.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 38.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn LO3",
  "kode": "01.01-58545",
  "lat": 59.90182,
  "lng": 10.75568,
  "klasse": 1,
  "aarFra": 2010,
  "aarTil": 2010,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58545",
  "verdier": [
   {
    "stoff": "Arsen",
    "verdi": 5.83,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 5.56,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0696,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 12.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 13.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 10.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 50.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn LO4",
  "kode": "01.01-58546",
  "lat": 59.90157,
  "lng": 10.75622,
  "klasse": 1,
  "aarFra": 2010,
  "aarTil": 2010,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58546",
  "verdier": [
   {
    "stoff": "Arsen",
    "verdi": 0.454,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 4.65,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0435,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 9.83,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 8.89,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 7.02,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 31.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn LO5",
  "kode": "01.01-58547",
  "lat": 59.90135,
  "lng": 10.7549,
  "klasse": 1,
  "aarFra": 2010,
  "aarTil": 2010,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58547",
  "verdier": [
   {
    "stoff": "Arsen",
    "verdi": 0.625,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 5.62,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0695,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 19.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 12.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 11.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 43.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn LO6",
  "kode": "01.01-58548",
  "lat": 59.90079,
  "lng": 10.7551,
  "klasse": 2,
  "aarFra": 2010,
  "aarTil": 2010,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58548",
  "verdier": [
   {
    "stoff": "Fluoranten",
    "verdi": 15.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 6.31,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0667,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 17.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 30.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 17.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 55.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 31.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn LO7",
  "kode": "01.01-58549",
  "lat": 59.89851,
  "lng": 10.75366,
  "klasse": 2,
  "aarFra": 2010,
  "aarTil": 2010,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58549",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 0.134,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Arsen",
    "verdi": 0.622,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Bly",
    "verdi": 4.96,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0571,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Kobber",
    "verdi": 16.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 12.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Nikkel",
    "verdi": 8.83,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Sink",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn Lohavn1",
  "kode": "01.01-58550",
  "lat": 59.90106,
  "lng": 10.75005,
  "klasse": 2,
  "aarFra": 2009,
  "aarTil": 2009,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58550",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 4.7,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 0.354,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 2.86,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 8.22,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 11.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 7.38,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 27.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn Lohavn2",
  "kode": "01.01-58551",
  "lat": 59.90008,
  "lng": 10.7518,
  "klasse": 4,
  "aarFra": 2009,
  "aarTil": 2009,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58551",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 22.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 0.146,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 4.03,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0241,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 16.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 14.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 11.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 32.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn Lohavn3",
  "kode": "01.01-58552",
  "lat": 59.90025,
  "lng": 10.75353,
  "klasse": 1,
  "aarFra": 2009,
  "aarTil": 2009,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58552",
  "verdier": [
   {
    "stoff": "Arsen",
    "verdi": 0.218,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 3.33,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0421,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 13.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 11.1,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 35.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn Lohavn4",
  "kode": "01.01-58553",
  "lat": 59.89955,
  "lng": 10.75368,
  "klasse": 1,
  "aarFra": 2009,
  "aarTil": 2009,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58553",
  "verdier": [
   {
    "stoff": "Bly",
    "verdi": 2.36,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0118,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 13.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 11.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 9.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 28.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn Lohavn5",
  "kode": "01.01-58554",
  "lat": 59.8985,
  "lng": 10.75298,
  "klasse": 2,
  "aarFra": 2009,
  "aarTil": 2009,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58554",
  "verdier": [
   {
    "stoff": "Sum PCB-7",
    "verdi": 0.1,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 1.89,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 9.37,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 7.73,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 6.32,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 23.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Lohavn Lohavn6",
  "kode": "01.01-58555",
  "lat": 59.89788,
  "lng": 10.75238,
  "klasse": 2,
  "aarFra": 2009,
  "aarTil": 2009,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58555",
  "verdier": [
   {
    "stoff": "Sum PCB-7",
    "verdi": 0.12,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 1.3,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 0.174,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 4.17,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.0225,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 13.4,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 11.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 9.36,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 29.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Vippetangen VIP 1",
  "kode": "01.01-58590",
  "lat": 59.90261,
  "lng": 10.74262,
  "klasse": 4,
  "aarFra": 2008,
  "aarTil": 2008,
  "utforende": "Rambøll",
  "oppdragsgiver": "Secora",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/58590",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 180.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 670.0,
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
    "stoff": "Sum PAH-16",
    "verdi": 7200.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 52.6,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 100.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 300.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.72,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 70.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 270.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.55,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 73.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 25.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "Indre Oslofjord, KH-S36",
  "kode": "01.01-61656",
  "lat": 59.89681,
  "lng": 10.75169,
  "klasse": 5,
  "aarFra": 2010,
  "aarTil": 2010,
  "utforende": "Rambøll",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/61656",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 155.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 120.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 6300.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 436.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
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
    "verdi": 92.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.87,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 36.9,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 8.48,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 46.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "B1 Bjørvika NGI 2013",
  "kode": "01.01-62451",
  "lat": 59.90837,
  "lng": 10.75005,
  "klasse": 5,
  "aarFra": 2013,
  "aarTil": 2019,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62451",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 304.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 2
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 2.22,
    "enhet": "mg/kg TS",
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
    "verdi": 239.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 10400.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 75.2,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 70.3,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 171.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 62.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 320.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 601.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Bly",
    "verdi": 123.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Fenantren",
    "verdi": 144.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 333.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Nikkel",
    "verdi": 30.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Arsen",
    "verdi": 8.22,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 41.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L1 Lohavn NGI 2013",
  "kode": "01.01-62452",
  "lat": 59.9018,
  "lng": 10.75698,
  "klasse": 4,
  "aarFra": 2013,
  "aarTil": 2013,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62452",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 52.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 38.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 136.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1240.0,
    "enhet": "µg/kg TS",
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
    "verdi": 4.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 19.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.18,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 20.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L2 Lohavn NGI 2013",
  "kode": "01.01-62476",
  "lat": 59.90203,
  "lng": 10.75622,
  "klasse": 3,
  "aarFra": 2013,
  "aarTil": 2013,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62476",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 16.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 132.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 677.0,
    "enhet": "µg/kg TS",
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
    "verdi": 4.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 17.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.11,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 34.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 21.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L3 Lohavn NGI 2013",
  "kode": "01.01-62477",
  "lat": 59.90133,
  "lng": 10.75579,
  "klasse": 3,
  "aarFra": 2013,
  "aarTil": 2013,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62477",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 6.8,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 105.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1590.0,
    "enhet": "µg/kg TS",
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
    "verdi": 2.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 9.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 19.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L4 Lohavn NGI 2013",
  "kode": "01.01-62478",
  "lat": 59.90071,
  "lng": 10.75485,
  "klasse": 3,
  "aarFra": 2013,
  "aarTil": 2013,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62478",
  "verdier": [
   {
    "stoff": "Sink",
    "verdi": 201.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 5.5,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 9.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 31.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.24,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 62.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.14,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1420.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 6.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 54.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L5 Lohavn NGI 2013",
  "kode": "01.01-62479",
  "lat": 59.90015,
  "lng": 10.75382,
  "klasse": 4,
  "aarFra": 2013,
  "aarTil": 2019,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62479",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 38.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 25.2,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 65.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 155.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 166.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 71.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 27.9,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Fenantren",
    "verdi": 75.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 159.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 54.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Naftalen",
    "verdi": 24.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 930.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 2.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Arsen",
    "verdi": 5.6,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.16,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 48.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L6 Lohavn NGI 2013",
  "kode": "01.01-62480",
  "lat": 59.89978,
  "lng": 10.7531,
  "klasse": 3,
  "aarFra": 2013,
  "aarTil": 2013,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62480",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 8.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 123.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 672.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 1.1,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 4.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 19.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.11,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 40.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 22.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L7 Lohavn NGI 2013",
  "kode": "01.01-62481",
  "lat": 59.89908,
  "lng": 10.75071,
  "klasse": 3,
  "aarFra": 2013,
  "aarTil": 2013,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62481",
  "verdier": [
   {
    "stoff": "Sink",
    "verdi": 161.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 7.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 10.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 41.0,
    "enhet": "mg/kg TS",
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
    "stoff": "Kobber",
    "verdi": 56.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 64.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.35,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1650.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 10.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L8 Lohavn NGI 2013",
  "kode": "01.01-62482",
  "lat": 59.89854,
  "lng": 10.74994,
  "klasse": 4,
  "aarFra": 2013,
  "aarTil": 2019,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62482",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 42.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 49.1,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 95.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 197.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 168.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 9.1,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 112.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 47.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Fenantren",
    "verdi": 92.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 205.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.41,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Kobber",
    "verdi": 69.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.43,
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
    "stoff": "Nikkel",
    "verdi": 36.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1530.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Arsen",
    "verdi": 10.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 60.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 2
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L9 lohavn NGI 2013",
  "kode": "01.01-62483",
  "lat": 59.89833,
  "lng": 10.74941,
  "klasse": 3,
  "aarFra": 2013,
  "aarTil": 2013,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62483",
  "verdier": [
   {
    "stoff": "Sink",
    "verdi": 157.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 7.4,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 12.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 42.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.32,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 55.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 63.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.37,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 1360.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 10.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L10 Lohavn NGI 2013",
  "kode": "01.01-62484",
  "lat": 59.89715,
  "lng": 10.7471,
  "klasse": 4,
  "aarFra": 2013,
  "aarTil": 2013,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62484",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 96.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.1,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 84.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 267.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 5610.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 37.3,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 141.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 74.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 39.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 15.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L11 Lohavn NGI 2013",
  "kode": "01.01-62485",
  "lat": 59.89652,
  "lng": 10.74714,
  "klasse": 5,
  "aarFra": 2013,
  "aarTil": 2019,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62485",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 156.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 2
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 1.5,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 150.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 2
   },
   {
    "stoff": "Antracen",
    "verdi": 68.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 47.4,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 2
   },
   {
    "stoff": "Arsen",
    "verdi": 19.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 155.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 191.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
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
    "stoff": "Nikkel",
    "verdi": 44.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Pyren",
    "verdi": 303.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 351.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 5100.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Bly",
    "verdi": 113.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Fenantren",
    "verdi": 150.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 318.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 95.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L12 Lohavn NGI 2013",
  "kode": "01.01-62486",
  "lat": 59.89748,
  "lng": 10.74844,
  "klasse": 3,
  "aarFra": 2013,
  "aarTil": 2013,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/62486",
  "verdier": [
   {
    "stoff": "Nikkel",
    "verdi": 47.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 35.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 72.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 135.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 365.0,
    "enhet": "µg/kg TS",
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
    "stoff": "Tributyltinn (TBT)",
    "verdi": 2.7,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 12.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "B2 Bjørvika NGI 2019",
  "kode": "01.01-100577",
  "lat": 59.90483,
  "lng": 10.74768,
  "klasse": 3,
  "aarFra": 2019,
  "aarTil": 2019,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/100577",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 19.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 98.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 141.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 18.7,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 50.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 64.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 29.5,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 47.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 102.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 51.4,
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
    "verdi": 650.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 2.2,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 2.25,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.18,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 23.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 15.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "B3 Bjørvika NGI 2019",
  "kode": "01.01-100578",
  "lat": 59.90425,
  "lng": 10.74679,
  "klasse": 3,
  "aarFra": 2019,
  "aarTil": 2019,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/100578",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 8.34,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 27.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 13.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 12.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 8.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 87.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "B4 Bjørvika NGI 2019",
  "kode": "01.01-100579",
  "lat": 59.90307,
  "lng": 10.74639,
  "klasse": 3,
  "aarFra": 2019,
  "aarTil": 2019,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/100579",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 18.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 116.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 45.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 52.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 53.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 89.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 21.1,
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
    "verdi": 630.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 3.41,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 1.99,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 16.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 19.5,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 16.2,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 61.7,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "B6 Bjørvika NGI 2019",
  "kode": "01.01-100593",
  "lat": 59.90341,
  "lng": 10.75322,
  "klasse": 4,
  "aarFra": 2019,
  "aarTil": 2019,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/100593",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 84.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 268.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 469.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 138.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 26.5,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 246.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
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
    "verdi": 510.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 333.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3100.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 26.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 70.7,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 202.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.91,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 5.83,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 47.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "B10 Bjørvika NGI 2019",
  "kode": "01.01-100594",
  "lat": 59.90153,
  "lng": 10.74708,
  "klasse": 4,
  "aarFra": 2019,
  "aarTil": 2019,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/100594",
  "verdier": [
   {
    "stoff": "Antracen",
    "verdi": 36.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 26.3,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 105.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 207.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 141.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 6.4,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 111.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 39.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 130.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 229.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 0.25,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 55.7,
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
    "stoff": "Sum PAH-16",
    "verdi": 1400.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 3.8,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 33.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 22.9,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "B12 Bjørvika NGI 2019",
  "kode": "01.01-100595",
  "lat": 59.90442,
  "lng": 10.7536,
  "klasse": 5,
  "aarFra": 2019,
  "aarTil": 2019,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/100595",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 180.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 96.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 342.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 674.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 0.87,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 334.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 55.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 617.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 392.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 3800.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 26.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 19.3,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 89.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 301.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 1.17,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 33.9,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 5.42,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 52.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "L1 Lohavn NGI 2019",
  "kode": "01.01-100678",
  "lat": 59.90233,
  "lng": 10.75708,
  "klasse": 4,
  "aarFra": 2019,
  "aarTil": 2019,
  "utforende": "NGI",
  "oppdragsgiver": "Oslo Havn KF",
  "medium": "Saltvann, Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/100678",
  "verdier": [
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 27.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 21.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 124.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 180.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 58.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 65.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 46.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 53.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 136.0,
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
    "verdi": 75.4,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 14.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 740.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PCB-7",
    "verdi": 3.2,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 7.17,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 41.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.3,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "S3",
  "kode": "01.01-104457",
  "lat": 59.90627,
  "lng": 10.75217,
  "klasse": 4,
  "aarFra": 2021,
  "aarTil": 2021,
  "utforende": "Golder Associates AS",
  "oppdragsgiver": "Braathen Landskapsentreprenører AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/104457",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 85.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 190.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 48.0,
    "enhet": "mg/kg TS",
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
    "stoff": "Nikkel",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 10.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 49.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "S2",
  "kode": "01.01-104461",
  "lat": 59.9066,
  "lng": 10.75222,
  "klasse": 5,
  "aarFra": 2021,
  "aarTil": 2021,
  "utforende": "Golder Associates AS",
  "oppdragsgiver": "Braathen Landskapsentreprenører AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/104461",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 300.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 2
   },
   {
    "stoff": "Kvikksølv",
    "verdi": 2.8,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 2
   },
   {
    "stoff": "Bly",
    "verdi": 250.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Kadmium",
    "verdi": 4.2,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Sink",
    "verdi": 750.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 2
   },
   {
    "stoff": "Krom",
    "verdi": 67.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 2
   },
   {
    "stoff": "Nikkel",
    "verdi": 33.0,
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
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "S1",
  "kode": "01.01-104462",
  "lat": 59.90688,
  "lng": 10.75227,
  "klasse": 4,
  "aarFra": 2021,
  "aarTil": 2021,
  "utforende": "Golder Associates AS",
  "oppdragsgiver": "Braathen Landskapsentreprenører AS",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/104462",
  "verdier": [
   {
    "stoff": "Kobber",
    "verdi": 120.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 270.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 75.0,
    "enhet": "mg/kg TS",
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
    "verdi": 0.28,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 12.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 47.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "B6b SED3 Prøvetaking etter utbygging av felt B6b",
  "kode": "01.01-123483",
  "lat": 59.90605,
  "lng": 10.75757,
  "klasse": 5,
  "aarFra": 2025,
  "aarTil": 2025,
  "utforende": "Multiconsult Norge AS",
  "oppdragsgiver": "Bispevika B6b, Vannkunsten Syd",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/123483",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 82.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 195.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 18.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 24.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 37.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 21.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 130.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 11.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 17.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 50.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 39.0,
    "enhet": "µg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "B6b SED1 Prøvetaking etter utbygging av felt B6b",
  "kode": "01.01-123484",
  "lat": 59.90524,
  "lng": 10.75744,
  "klasse": 5,
  "aarFra": 2025,
  "aarTil": 2025,
  "utforende": "Multiconsult Norge AS",
  "oppdragsgiver": "Bispevika B6b, Vannkunsten Syd",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/123484",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 23.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 402.0,
    "enhet": "µg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 68.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 95.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 81.0,
    "enhet": "mg/kg TS",
    "klasse": 4,
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
    "stoff": "Naftalen",
    "verdi": 30.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 320.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 160.0,
    "enhet": "mg/kg TS",
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
    "verdi": 53.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fenantren",
    "verdi": 330.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Fluoranten",
    "verdi": 330.0,
    "enhet": "µg/kg TS",
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
    "stoff": "Sum PAH-16",
    "verdi": 1900.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 41.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 29.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 },
 {
  "navn": "B6b SED2 Prøvetaking etter utbygging av felt B6b",
  "kode": "01.01-123485",
  "lat": 59.90563,
  "lng": 10.75755,
  "klasse": 5,
  "aarFra": 2025,
  "aarTil": 2025,
  "utforende": "Multiconsult Norge AS",
  "oppdragsgiver": "Bispevika B6b, Vannkunsten Syd",
  "medium": "Sediment saltvann",
  "faktaark": "https://vannmiljofaktaark.miljodirektoratet.no/Home/Details/123485",
  "verdier": [
   {
    "stoff": "Kvikksølv",
    "verdi": 24.0,
    "enhet": "mg/kg TS",
    "klasse": 5,
    "n": 1
   },
   {
    "stoff": "Tributyltinn (TBT)",
    "verdi": 46.0,
    "enhet": "µg/kg TS",
    "klasse": 4,
    "n": 1
   },
   {
    "stoff": "Antracen",
    "verdi": 7.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Arsen",
    "verdi": 66.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Kadmium",
    "verdi": 12.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Naftalen",
    "verdi": 59.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Pyren",
    "verdi": 170.0,
    "enhet": "µg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Sink",
    "verdi": 160.0,
    "enhet": "mg/kg TS",
    "klasse": 3,
    "n": 1
   },
   {
    "stoff": "Benzo(a)antracen",
    "verdi": 52.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Benzo(a)pyren",
    "verdi": 67.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Bly",
    "verdi": 33.0,
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
    "verdi": 130.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Kobber",
    "verdi": 47.0,
    "enhet": "mg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Sum PAH-16",
    "verdi": 750.0,
    "enhet": "µg/kg TS",
    "klasse": 2,
    "n": 1
   },
   {
    "stoff": "Krom",
    "verdi": 41.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   },
   {
    "stoff": "Nikkel",
    "verdi": 28.0,
    "enhet": "mg/kg TS",
    "klasse": 1,
    "n": 1
   }
  ],
  "opphav": "Vannmiljø"
 }
];
