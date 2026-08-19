/* Generert av verktoy/bygg_omrade.py bjorvika — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/bjorvika/ og hentes av hent_omrade.py bjorvika.
 *
 * Ett innslag per stoff som har grenseverdi i M-608 og er målt i marint sediment her.
 * n, maks og median er regnet av de faktiske målingene (bare operator «=»).
 * status følger M-409 § 3.4.1 — se D_HOTSPOT.regel.
 */
export const D_STOFF = [
 {
  "navn": "Antracen",
  "tegn": "Antracen",
  "status": "utbredt",
  "faktor": 604.2,
  "enhet": "µg/kg",
  "maks": 2900.0,
  "median": 71.0,
  "trinn1": 4.8,
  "nOver": 106,
  "n": 106,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "3": 32,
   "4": 54,
   "5": 20
  },
  "klassefordelingParameter": "Antracen",
  "antallStasjonerKlassifisert": 106
 },
 {
  "navn": "Naftalen",
  "tegn": "Naftalen",
  "status": "utbredt",
  "faktor": 214.8,
  "enhet": "µg/kg",
  "maks": 5800.0,
  "median": 53.5,
  "trinn1": 27.0,
  "nOver": 71,
  "n": 106,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 35,
   "3": 70,
   "4": 1
  },
  "klassefordelingParameter": "Naftalen",
  "antallStasjonerKlassifisert": 106
 },
 {
  "navn": "Kvikksølv",
  "tegn": "Hg",
  "status": "hotspot",
  "faktor": 157.7,
  "enhet": "mg/kg",
  "maks": 82.0,
  "median": 0.2875,
  "trinn1": 0.52,
  "nOver": 52,
  "n": 132,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "1": 15,
   "2": 63,
   "3": 3,
   "4": 14,
   "5": 35
  },
  "klassefordelingParameter": "Kvikksølv",
  "antallStasjonerKlassifisert": 130
 },
 {
  "navn": "Sum PCB-7",
  "tegn": "PCB7",
  "status": "utbredt",
  "faktor": 113.4,
  "enhet": "µg/kg",
  "maks": 465.0,
  "median": 13.5,
  "trinn1": 4.1,
  "nOver": 72,
  "n": 93,
  "fraTyper": [
   "Skipsverft og båtslipper"
  ],
  "fraKilder": [
   "K-01"
  ],
  "klassefordeling": {
   "2": 20,
   "3": 47,
   "4": 21,
   "5": 1
  },
  "klassefordelingParameter": "Sum PCB-7",
  "antallStasjonerKlassifisert": 89
 },
 {
  "navn": "Pyren",
  "tegn": "Pyren",
  "status": "utbredt",
  "faktor": 60.7,
  "enhet": "µg/kg",
  "maks": 5100.0,
  "median": 202.0,
  "trinn1": 84.0,
  "nOver": 13,
  "n": 14,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 1,
   "3": 12,
   "4": 1
  },
  "klassefordelingParameter": "Pyren",
  "antallStasjonerKlassifisert": 14
 },
 {
  "navn": "Benzo(a)antracen",
  "tegn": "BaA",
  "status": "utbredt",
  "faktor": 48.3,
  "enhet": "µg/kg",
  "maks": 2900.0,
  "median": 105.0,
  "trinn1": 60.0,
  "nOver": 9,
  "n": 13,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 4,
   "3": 8,
   "4": 1
  },
  "klassefordelingParameter": "Benzo(a)antracen",
  "antallStasjonerKlassifisert": 13
 },
 {
  "navn": "Tributyltinn (TBT)",
  "tegn": "TBT",
  "status": "hotspot",
  "faktor": 47.4,
  "enhet": "µg/kg",
  "maks": 1660.0,
  "median": 9.0,
  "trinn1": 35.0,
  "nOver": 36,
  "n": 140,
  "fraTyper": [
   "Skipstrafikk / havnevirksomhet",
   "Skipsverft og båtslipper"
  ],
  "fraKilder": [
   "K-01",
   "K-02",
   "K-03",
   "K-05"
  ],
  "klassefordeling": {
   "1": 5,
   "2": 43,
   "3": 41,
   "4": 34,
   "5": 13
  },
  "klassefordelingParameter": "Tributyltinn (TBT)",
  "antallStasjonerKlassifisert": 136
 },
 {
  "navn": "Sum PAH-16",
  "tegn": "PAH16",
  "status": "hotspot",
  "faktor": 46.0,
  "enhet": "µg/kg",
  "maks": 92000.0,
  "median": 1100.0,
  "trinn1": 2000.0,
  "nOver": 57,
  "n": 151,
  "fraTyper": [
   "Elv og urban avrenning",
   "Skipstrafikk / havnevirksomhet"
  ],
  "fraKilder": [
   "K-02",
   "K-03",
   "K-04",
   "K-06"
  ],
  "klassefordeling": {
   "1": 46,
   "2": 46,
   "3": 26,
   "4": 18,
   "5": 11
  },
  "klassefordelingParameter": "Sum PAH-16",
  "antallStasjonerKlassifisert": 147
 },
 {
  "navn": "Fluoranten",
  "tegn": "Fluoranten",
  "status": "hotspot",
  "faktor": 37.5,
  "enhet": "µg/kg",
  "maks": 15000.0,
  "median": 170.0,
  "trinn1": 400.0,
  "nOver": 43,
  "n": 135,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "1": 5,
   "2": 87,
   "4": 31,
   "5": 12
  },
  "klassefordelingParameter": "Fluoranten",
  "antallStasjonerKlassifisert": 135
 },
 {
  "navn": "Kadmium",
  "tegn": "Cd",
  "status": "hotspot",
  "faktor": 32.4,
  "enhet": "mg/kg",
  "maks": 81.0,
  "median": 0.26,
  "trinn1": 2.5,
  "nOver": 19,
  "n": 152,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "1": 69,
   "2": 58,
   "3": 18,
   "4": 1
  },
  "klassefordelingParameter": "Kadmium",
  "antallStasjonerKlassifisert": 146
 },
 {
  "navn": "Benzo(a)pyren",
  "tegn": "BaP",
  "status": "hotspot",
  "faktor": 21.9,
  "enhet": "µg/kg",
  "maks": 4000.0,
  "median": 140.0,
  "trinn1": 183.0,
  "nOver": 50,
  "n": 118,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 68,
   "3": 5,
   "4": 45
  },
  "klassefordelingParameter": "Benzo(a)pyren",
  "antallStasjonerKlassifisert": 118
 },
 {
  "navn": "Sink",
  "tegn": "Zn",
  "status": "hotspot",
  "faktor": 12.9,
  "enhet": "mg/kg",
  "maks": 1800.0,
  "median": 110.0,
  "trinn1": 139.0,
  "nOver": 74,
  "n": 182,
  "fraTyper": [
   "Elv og urban avrenning",
   "Skipsverft og båtslipper"
  ],
  "fraKilder": [
   "K-01",
   "K-04"
  ],
  "klassefordeling": {
   "1": 67,
   "2": 40,
   "3": 62,
   "4": 7
  },
  "klassefordelingParameter": "Sink",
  "antallStasjonerKlassifisert": 176
 },
 {
  "navn": "Kobber",
  "tegn": "Cu",
  "status": "hotspot",
  "faktor": 6.3,
  "enhet": "mg/kg",
  "maks": 529.0,
  "median": 33.5,
  "trinn1": 84.0,
  "nOver": 38,
  "n": 182,
  "fraTyper": [
   "Elv og urban avrenning",
   "Skipstrafikk / havnevirksomhet",
   "Skipsverft og båtslipper"
  ],
  "fraKilder": [
   "K-01",
   "K-02",
   "K-03",
   "K-04",
   "K-05"
  ],
  "klassefordeling": {
   "1": 35,
   "2": 105,
   "4": 12,
   "5": 24
  },
  "klassefordelingParameter": "Kobber",
  "antallStasjonerKlassifisert": 176
 },
 {
  "navn": "Arsen",
  "tegn": "As",
  "status": "hotspot",
  "faktor": 5.3,
  "enhet": "mg/kg",
  "maks": 95.0,
  "median": 7.4,
  "trinn1": 18.0,
  "nOver": 5,
  "n": 179,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "1": 161,
   "2": 7,
   "3": 4,
   "4": 1
  },
  "klassefordelingParameter": "Arsen",
  "antallStasjonerKlassifisert": 173
 },
 {
  "navn": "Bly",
  "tegn": "Pb",
  "status": "friskmeldt",
  "faktor": 5.2,
  "enhet": "mg/kg",
  "maks": 780.0,
  "median": 26.5,
  "trinn1": 150.0,
  "nOver": 21,
  "n": 182,
  "fraTyper": [
   "Elv og urban avrenning",
   "Skipstrafikk / havnevirksomhet",
   "Skipsverft og båtslipper"
  ],
  "fraKilder": [
   "K-01",
   "K-04",
   "K-06"
  ],
  "klassefordeling": {
   "1": 86,
   "2": 69,
   "3": 21
  },
  "klassefordelingParameter": "Bly",
  "antallStasjonerKlassifisert": 176
 },
 {
  "navn": "Fenantren",
  "tegn": "Fenantren",
  "status": "friskmeldt",
  "faktor": 2.7,
  "enhet": "µg/kg",
  "maks": 2100.0,
  "median": 125.0,
  "trinn1": 780.0,
  "nOver": 1,
  "n": 14,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 13,
   "3": 1
  },
  "klassefordelingParameter": "Fenantren",
  "antallStasjonerKlassifisert": 14
 },
 {
  "navn": "Nikkel",
  "tegn": "Ni",
  "status": "friskmeldt",
  "faktor": 1.3,
  "enhet": "mg/kg",
  "maks": 55.4,
  "median": 29.0,
  "trinn1": 42.0,
  "nOver": 12,
  "n": 182,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "1": 94,
   "2": 70,
   "3": 12
  },
  "klassefordelingParameter": "Nikkel",
  "antallStasjonerKlassifisert": 176
 },
 {
  "navn": "Krom",
  "tegn": "Cr",
  "status": "friskmeldt",
  "faktor": 0.3,
  "enhet": "mg/kg",
  "maks": 200.0,
  "median": 37.0,
  "trinn1": 620.0,
  "nOver": 0,
  "n": 182,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "1": 145,
   "2": 31
  },
  "klassefordelingParameter": "Krom",
  "antallStasjonerKlassifisert": 176
 }
];
