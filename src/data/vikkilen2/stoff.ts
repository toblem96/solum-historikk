/* Generert av verktoy/bygg_omrade.py vikkilen2 — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/vikkilen2/ og hentes av hent_omrade.py vikkilen2.
 *
 * Ett innslag per stoff som har grenseverdi i M-608 og er målt i marint sediment her.
 * n, maks og median er regnet av de faktiske målingene (bare operator «=»).
 * status følger M-409 § 3.4.1 — se D_HOTSPOT.regel.
 */
export const D_STOFF = [
 {
  "navn": "Tributyltinn (TBT)",
  "tegn": "TBT",
  "status": "utbredt",
  "faktor": 2657.1,
  "enhet": "µg/kg",
  "maks": 93000.0,
  "median": 1500.0,
  "trinn1": 35.0,
  "nOver": 65,
  "n": 68,
  "fraTyper": [
   "Skipstrafikk / havnevirksomhet",
   "Skipsverft og båtslipper"
  ],
  "fraKilder": [
   "K-01",
   "K-02",
   "K-04"
  ],
  "klassefordeling": {
   "2": 1,
   "3": 2,
   "4": 1,
   "5": 35
  },
  "klassefordelingParameter": "Tributyltinn (TBT)",
  "antallStasjonerKlassifisert": 39
 },
 {
  "navn": "Sink",
  "tegn": "Zn",
  "status": "utbredt",
  "faktor": 169.1,
  "enhet": "mg/kg",
  "maks": 23500.0,
  "median": 180.0,
  "trinn1": 139.0,
  "nOver": 37,
  "n": 53,
  "fraTyper": [
   "Deponier og forurenset grunn",
   "Skipsverft og båtslipper"
  ],
  "fraKilder": [
   "K-01",
   "K-04",
   "K-05",
   "K-06"
  ],
  "klassefordeling": {
   "1": 5,
   "2": 3,
   "3": 29,
   "4": 5,
   "5": 1
  },
  "klassefordelingParameter": "Sink",
  "antallStasjonerKlassifisert": 43
 },
 {
  "navn": "Pyren",
  "tegn": "Pyren",
  "status": "utbredt",
  "faktor": 156.8,
  "enhet": "µg/kg",
  "maks": 13172.0,
  "median": 565.0,
  "trinn1": 84.0,
  "nOver": 45,
  "n": 48,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 1,
   "3": 27,
   "4": 14,
   "5": 1
  },
  "klassefordelingParameter": "Pyren",
  "antallStasjonerKlassifisert": 43
 },
 {
  "navn": "Antracen",
  "tegn": "Antracen",
  "status": "utbredt",
  "faktor": 142.3,
  "enhet": "µg/kg",
  "maks": 683.0,
  "median": 60.5,
  "trinn1": 4.8,
  "nOver": 46,
  "n": 48,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 1,
   "3": 6,
   "4": 32,
   "5": 4
  },
  "klassefordelingParameter": "Antracen",
  "antallStasjonerKlassifisert": 43
 },
 {
  "navn": "Benzo(a)antracen",
  "tegn": "BaA",
  "status": "utbredt",
  "faktor": 44.2,
  "enhet": "µg/kg",
  "maks": 2653.0,
  "median": 390.0,
  "trinn1": 60.0,
  "nOver": 44,
  "n": 48,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 2,
   "3": 25,
   "4": 16
  },
  "klassefordelingParameter": "Benzo(a)antracen",
  "antallStasjonerKlassifisert": 43
 },
 {
  "navn": "Kobber",
  "tegn": "Cu",
  "status": "utbredt",
  "faktor": 42.0,
  "enhet": "mg/kg",
  "maks": 3530.0,
  "median": 87.7,
  "trinn1": 84.0,
  "nOver": 28,
  "n": 53,
  "fraTyper": [
   "Skipstrafikk / havnevirksomhet",
   "Skipsverft og båtslipper"
  ],
  "fraKilder": [
   "K-01",
   "K-02",
   "K-04",
   "K-05"
  ],
  "klassefordeling": {
   "1": 2,
   "2": 14,
   "4": 12,
   "5": 15
  },
  "klassefordelingParameter": "Kobber",
  "antallStasjonerKlassifisert": 43
 },
 {
  "navn": "Fluoranten",
  "tegn": "Fluoranten",
  "status": "utbredt",
  "faktor": 41.6,
  "enhet": "µg/kg",
  "maks": 16650.0,
  "median": 620.0,
  "trinn1": 400.0,
  "nOver": 35,
  "n": 48,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 10,
   "4": 29,
   "5": 4
  },
  "klassefordelingParameter": "Fluoranten",
  "antallStasjonerKlassifisert": 43
 },
 {
  "navn": "Naftalen",
  "tegn": "Naftalen",
  "status": "utbredt",
  "faktor": 35.6,
  "enhet": "µg/kg",
  "maks": 960.0,
  "median": 38.5,
  "trinn1": 27.0,
  "nOver": 31,
  "n": 46,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 12,
   "3": 30
  },
  "klassefordelingParameter": "Naftalen",
  "antallStasjonerKlassifisert": 42
 },
 {
  "navn": "Bly",
  "tegn": "Pb",
  "status": "hotspot",
  "faktor": 26.5,
  "enhet": "mg/kg",
  "maks": 3980.0,
  "median": 60.85,
  "trinn1": 150.0,
  "nOver": 7,
  "n": 52,
  "fraTyper": [
   "Skipsverft og båtslipper"
  ],
  "fraKilder": [
   "K-01",
   "K-04",
   "K-05"
  ],
  "klassefordeling": {
   "1": 7,
   "2": 29,
   "3": 6,
   "5": 1
  },
  "klassefordelingParameter": "Bly",
  "antallStasjonerKlassifisert": 43
 },
 {
  "navn": "Kvikksølv",
  "tegn": "Hg",
  "status": "hotspot",
  "faktor": 25.6,
  "enhet": "mg/kg",
  "maks": 13.3,
  "median": 0.2,
  "trinn1": 0.52,
  "nOver": 2,
  "n": 51,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "1": 6,
   "2": 33,
   "3": 1,
   "5": 1
  },
  "klassefordelingParameter": "Kvikksølv",
  "antallStasjonerKlassifisert": 41
 },
 {
  "navn": "Sum PCB-7",
  "tegn": "PCB7",
  "status": "utbredt",
  "faktor": 20.5,
  "enhet": "µg/kg",
  "maks": 83.9,
  "median": 6.93,
  "trinn1": 4.1,
  "nOver": 34,
  "n": 48,
  "fraTyper": [
   "Skipsverft og båtslipper"
  ],
  "fraKilder": [
   "K-05"
  ],
  "klassefordeling": {
   "2": 12,
   "3": 30,
   "4": 1
  },
  "klassefordelingParameter": "Sum PCB-7",
  "antallStasjonerKlassifisert": 43
 },
 {
  "navn": "Benzo(a)pyren",
  "tegn": "BaP",
  "status": "utbredt",
  "faktor": 14.2,
  "enhet": "µg/kg",
  "maks": 2600.0,
  "median": 460.0,
  "trinn1": 183.0,
  "nOver": 38,
  "n": 48,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 7,
   "3": 4,
   "4": 32
  },
  "klassefordelingParameter": "Benzo(a)pyren",
  "antallStasjonerKlassifisert": 43
 },
 {
  "navn": "Sum PAH-16",
  "tegn": "PAH16",
  "status": "utbredt",
  "faktor": 9.2,
  "enhet": "µg/kg",
  "maks": 18338.0,
  "median": 4060.0,
  "trinn1": 2000.0,
  "nOver": 35,
  "n": 45,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "1": 2,
   "2": 5,
   "3": 19,
   "4": 14
  },
  "klassefordelingParameter": "Sum PAH-16",
  "antallStasjonerKlassifisert": 40
 },
 {
  "navn": "Kadmium",
  "tegn": "Cd",
  "status": "friskmeldt",
  "faktor": 3.9,
  "enhet": "mg/kg",
  "maks": 9.69,
  "median": 0.285,
  "trinn1": 2.5,
  "nOver": 2,
  "n": 46,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "1": 6,
   "2": 28,
   "3": 2
  },
  "klassefordelingParameter": "Kadmium",
  "antallStasjonerKlassifisert": 36
 },
 {
  "navn": "Fenantren",
  "tegn": "Fenantren",
  "status": "hotspot",
  "faktor": 3.4,
  "enhet": "µg/kg",
  "maks": 2652.0,
  "median": 280.0,
  "trinn1": 780.0,
  "nOver": 6,
  "n": 48,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "2": 37,
   "3": 5,
   "4": 1
  },
  "klassefordelingParameter": "Fenantren",
  "antallStasjonerKlassifisert": 43
 },
 {
  "navn": "Arsen",
  "tegn": "As",
  "status": "friskmeldt",
  "faktor": 1.3,
  "enhet": "mg/kg",
  "maks": 23.0,
  "median": 4.35,
  "trinn1": 18.0,
  "nOver": 1,
  "n": 22,
  "fraTyper": [],
  "fraKilder": [],
  "klassefordeling": {
   "1": 11,
   "3": 1
  },
  "klassefordelingParameter": "Arsen",
  "antallStasjonerKlassifisert": 12
 },
 {
  "navn": "Nikkel",
  "tegn": "Ni",
  "status": "friskmeldt",
  "faktor": 0.7,
  "enhet": "mg/kg",
  "maks": 29.0,
  "median": 8.1,
  "trinn1": 42.0,
  "nOver": 0,
  "n": 21,
  "fraTyper": [
   "Deponier og forurenset grunn"
  ],
  "fraKilder": [
   "K-06"
  ],
  "klassefordeling": {
   "1": 11
  },
  "klassefordelingParameter": "Nikkel",
  "antallStasjonerKlassifisert": 11
 },
 {
  "navn": "Krom",
  "tegn": "Cr",
  "status": "friskmeldt",
  "faktor": 0.1,
  "enhet": "mg/kg",
  "maks": 58.0,
  "median": 13.5,
  "trinn1": 620.0,
  "nOver": 0,
  "n": 22,
  "fraTyper": [
   "Deponier og forurenset grunn"
  ],
  "fraKilder": [
   "K-06"
  ],
  "klassefordeling": {
   "1": 12
  },
  "klassefordelingParameter": "Krom",
  "antallStasjonerKlassifisert": 12
 }
];
