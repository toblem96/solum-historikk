/* Generert av verktoy/bygg_omrade.py vikkilen — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/vikkilen/ og hentes av hent_omrade.py vikkilen.
 */
export const D_HOTSPOT = {
 "tittel": "TBT ligger over hele kilen — bly og kvikksølv sitter i flekker",
 "undertittel": "11 av 18 klassifiserte stoffer er over Trinn 1 på mer enn halvparten av målingene og regnes som utbredte, 3 har hotspot-indikasjon etter M-409 § 3.4.1, og 4 er friskmeldt. Tributyltinn er verst: høyeste måling er 93000 µg/kg, 2657 ganger den forvaltningsbaserte Trinn 1-grensen, og NIVA navngir AS Nymo som hovedkilden. Ingen kilde i grunnlaget er belagt for PAH.",
 "antallVurderteStoffer": 18,
 "statusfordeling": {
  "utbredt": 11,
  "hotspot": 3,
  "friskmeldt": 4
 },
 "antallHotspot": 3,
 "antallUtbredt": 11,
 "antallFriskmeldt": 4,
 "antallStoffINett": 7,
 "antallKilderINett": 5,
 "antallLenker": 17,
 "hotspots": [
  {
   "stoff": "Tributyltinn (TBT)",
   "enhet": "µg/kg",
   "maks": 93000.0,
   "faktor": 2657.1,
   "nOver": 65,
   "n": 68,
   "trinn1": 35.0,
   "status": "utbredt",
   "versteStasjon": "Vikkilen B06",
   "kildeId": "K-01",
   "kildeNavn": "AS Nymo — verftet i Vikkilen (sjø og land)",
   "kildePoeng": 0.97,
   "kildeType": "Skipsverft og båtslipper"
  },
  {
   "stoff": "Sink",
   "enhet": "mg/kg",
   "maks": 23500.0,
   "faktor": 169.1,
   "nOver": 37,
   "n": 53,
   "trinn1": 139.0,
   "status": "utbredt",
   "versteStasjon": "Vikkilen 24",
   "kildeId": "K-01",
   "kildeNavn": "AS Nymo — verftet i Vikkilen (sjø og land)",
   "kildePoeng": 0.97,
   "kildeType": "Skipsverft og båtslipper"
  },
  {
   "stoff": "Pyren",
   "enhet": "µg/kg",
   "maks": 13172.0,
   "faktor": 156.8,
   "nOver": 45,
   "n": 48,
   "trinn1": 84.0,
   "status": "utbredt",
   "versteStasjon": "Grimstad havn, S3",
   "kildeId": null,
   "kildeNavn": null,
   "kildePoeng": null,
   "kildeType": null
  },
  {
   "stoff": "Antracen",
   "enhet": "µg/kg",
   "maks": 683.0,
   "faktor": 142.3,
   "nOver": 46,
   "n": 48,
   "trinn1": 4.8,
   "status": "utbredt",
   "versteStasjon": "Grimstad havn, S3",
   "kildeId": null,
   "kildeNavn": null,
   "kildePoeng": null,
   "kildeType": null
  },
  {
   "stoff": "Benzo(a)antracen",
   "enhet": "µg/kg",
   "maks": 2653.0,
   "faktor": 44.2,
   "nOver": 44,
   "n": 48,
   "trinn1": 60.0,
   "status": "utbredt",
   "versteStasjon": "Grimstad havn, S3",
   "kildeId": null,
   "kildeNavn": null,
   "kildePoeng": null,
   "kildeType": null
  }
 ],
 "regel": "M-409 § 3.4.1. Friskmelding: snittet er under Trinn 1 og ingen enkeltverdi er over det høyeste av 2 × Trinn 1 og klassegrensen III/IV. Utbredt: over Trinn 1 på minst halvparten av målingene. Hotspot-indikasjon: maksverdi delt på medianverdi er 2 eller mer. Trinn 1 er M-608s grense mellom klasse II og III, unntatt for TBT der M-409 § 3.3 setter den forvaltningsbaserte grensen til 35 µg/kg."
};
