/* Generert av verktoy/bygg_omrade.py bjorvika — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/bjorvika/ og hentes av hent_omrade.py bjorvika.
 */
export const D_HOTSPOT = {
 "tittel": "Havnebassenget er forurenset over hele flaten — og ingen rapport forklarer hvorfor",
 "undertittel": "5 av 18 klassifiserte stoffer er over Trinn 1 på mer enn halvparten av målingene og regnes som utbredte, 9 har hotspot-indikasjon etter M-409 § 3.4.1, og 4 er friskmeldt. Tributyltinn er verst: høyeste måling er 1660 µg/kg, 47 ganger den forvaltningsbaserte Trinn 1-grensen. Ingen av kildene under er belagt — å belegge en kilde krever en rapport som navngir sammenhengen, og ingen av de åtte rapportene punktene navngir, finnes i arkivet.",
 "antallVurderteStoffer": 18,
 "statusfordeling": {
  "utbredt": 5,
  "hotspot": 9,
  "friskmeldt": 4
 },
 "antallHotspot": 9,
 "antallUtbredt": 5,
 "antallFriskmeldt": 4,
 "antallStoffINett": 6,
 "antallKilderINett": 6,
 "antallLenker": 19,
 "hotspots": [
  {
   "stoff": "Antracen",
   "enhet": "µg/kg",
   "maks": 2900.0,
   "faktor": 604.2,
   "nOver": 106,
   "n": 106,
   "trinn1": 4.8,
   "status": "utbredt",
   "versteStasjon": "Bjørvika F2b",
   "kildeId": null,
   "kildeNavn": null,
   "kildePoeng": null,
   "kildeType": null
  },
  {
   "stoff": "Naftalen",
   "enhet": "µg/kg",
   "maks": 5800.0,
   "faktor": 214.8,
   "nOver": 71,
   "n": 106,
   "trinn1": 27.0,
   "status": "utbredt",
   "versteStasjon": "Bjørvika L3",
   "kildeId": null,
   "kildeNavn": null,
   "kildePoeng": null,
   "kildeType": null
  },
  {
   "stoff": "Kvikksølv",
   "enhet": "mg/kg",
   "maks": 82.0,
   "faktor": 157.7,
   "nOver": 52,
   "n": 132,
   "trinn1": 0.52,
   "status": "hotspot",
   "versteStasjon": "B6b SED3 Prøvetaking etter utbygging av felt B6b",
   "kildeId": null,
   "kildeNavn": null,
   "kildePoeng": null,
   "kildeType": null
  },
  {
   "stoff": "Sum PCB-7",
   "enhet": "µg/kg",
   "maks": 465.0,
   "faktor": 113.4,
   "nOver": 72,
   "n": 93,
   "trinn1": 4.1,
   "status": "utbredt",
   "versteStasjon": "Bjørvika/Revier D1a",
   "kildeId": "K-01",
   "kildeNavn": "Nylands Verksted — skipsverftet i Bjørvika",
   "kildePoeng": 0.6,
   "kildeType": "Skipsverft og båtslipper"
  },
  {
   "stoff": "Pyren",
   "enhet": "µg/kg",
   "maks": 5100.0,
   "faktor": 60.7,
   "nOver": 13,
   "n": 14,
   "trinn1": 84.0,
   "status": "utbredt",
   "versteStasjon": "Indre Oslofjord, Akerselvas utløp Aker 11",
   "kildeId": null,
   "kildeNavn": null,
   "kildePoeng": null,
   "kildeType": null
  }
 ],
 "regel": "M-409 § 3.4.1. Friskmelding: snittet er under Trinn 1 og ingen enkeltverdi er over det høyeste av 2 × Trinn 1 og klassegrensen III/IV. Utbredt: over Trinn 1 på minst halvparten av målingene. Hotspot-indikasjon: maksverdi delt på medianverdi er 2 eller mer. Trinn 1 er M-608s grense mellom klasse II og III, unntatt for TBT der M-409 § 3.3 setter den forvaltningsbaserte grensen til 35 µg/kg."
};
