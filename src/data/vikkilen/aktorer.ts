/* Generert av verktoy/bygg_omrade.py vikkilen — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/vikkilen/ og hentes av hent_omrade.py vikkilen.
 *
 * Hvem gjorde hva, og på hvems regning.
 *
 * Lista er ikke skrevet. Den faller ut av registrene: alle som står som
 * oppdragsgiver eller utførende på en undersøkelse i Vannmiljø, på en rapport eller
 * på et tiltak, pluss kildene som er belagt i Grunnforurensning.
 *
 * Rollene er heller ikke satt for hånd. «bestiller», «utfører» og «kilde» er hva
 * registrene sier aktøren faktisk gjorde. Ingen kalles myndighet eller forurenser
 * uten at et register sier det — den slutningen overlater vi til leseren.
 *
 * skrivematter[] er navneformene aktøren står med i kildene. De er slått sammen med
 * AKTOR_ALIAS i områdemodulen, og de opprinnelige formene beholdes så
 * sammenslåingen kan etterprøves.
 */
export const D_AKTORER = [
 {
  "id": "a-as-nymo",
  "navn": "AS Nymo",
  "roller": [
   "kilde",
   "bestiller"
  ],
  "skrivematter": [
   "AS Nymo",
   "AS Nymo — verftet i Vikkilen (sjø og land)"
  ],
  "hendelser": [
   {
    "aar": 2004,
    "punkter": [
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
    "antall": 14,
    "ref": "u-niva-2004",
    "slag": "bestilte",
    "tekst": "bestilte 14 stasjoner"
   },
   {
    "aar": 2005,
    "punkter": [
     "Vikkilen 1",
     "Vikkilen 15",
     "Vikkilen 16"
    ],
    "antall": 3,
    "ref": "u-niva-2005",
    "slag": "bestilte",
    "tekst": "bestilte 3 stasjoner"
   },
   {
    "aar": 2005,
    "punkter": [
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
    "antall": 15,
    "ref": "r-niva5040",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 5040"
   },
   {
    "aar": 2008,
    "punkter": [
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
    "antall": 16,
    "ref": "u-niva-2008",
    "slag": "bestilte",
    "tekst": "bestilte 16 stasjoner"
   },
   {
    "aar": 2008,
    "punkter": [
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
    "antall": 16,
    "ref": "r-niva5669",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 5669"
   },
   {
    "aar": 2016,
    "punkter": [
     "Vikkilen (83174)",
     "Vikkilen (83175)",
     "Vikkilen (83176)",
     "Vikkilen (83177)",
     "Vikkilen (83178)",
     "Vikkilen (83179)",
     "Vikkilen (83180)",
     "Vikkilen (83181)"
    ],
    "antall": 8,
    "ref": "u-niva-2016",
    "slag": "bestilte",
    "tekst": "bestilte 8 stasjoner"
   },
   {
    "aar": 2016,
    "punkter": [
     "Vikkilen (83174)",
     "Vikkilen (83175)",
     "Vikkilen (83176)",
     "Vikkilen (83177)",
     "Vikkilen (83178)",
     "Vikkilen (83179)",
     "Vikkilen (83180)",
     "Vikkilen (83181)"
    ],
    "antall": 8,
    "ref": "t-tildekking-2016",
    "slag": "tiltak_bestilt",
    "tekst": "bestilte tildekking av forurenset sjøbunn utenfor as nymo"
   },
   {
    "aar": 2021,
    "punkter": [
     "Vikkilen (83174)",
     "Vikkilen (83175)",
     "Vikkilen (83179)",
     "Vikkilen (83181)"
    ],
    "antall": 4,
    "ref": "u-niva-2021",
    "slag": "bestilte",
    "tekst": "bestilte 4 stasjoner"
   }
  ],
  "aarFra": 2004,
  "aarTil": 2021,
  "antall": {
   "bestilte": 5,
   "bestilte_rapport": 2,
   "tiltak_bestilt": 1
  },
  "kildeId": "K-01",
  "kildeGrunnlag": "Dokumentert konklusjon i fagrapport",
  "grunnlag": "Rollene er hva registrene sier aktøren gjorde — oppdragsgiver eller utførende på undersøkelsene i Vannmiljø, utgiver eller oppdragsgiver på rapportene, og for kilder: belagt i Grunnforurensning. Navnet står som «AS Nymo», «AS Nymo — verftet i Vikkilen (sjø og land)» i kildene."
 },
 {
  "id": "a-fylkesmannen-i-aust-agder",
  "navn": "Fylkesmannen i Aust-Agder",
  "roller": [
   "bestiller"
  ],
  "skrivematter": [
   "Fylkesmannen i Aust-Agder"
  ],
  "hendelser": [
   {
    "aar": 2000,
    "punkter": [
     "Barselkilen",
     "Grømbukt"
    ],
    "antall": 2,
    "ref": "u-niva-2000",
    "slag": "bestilte",
    "tekst": "bestilte 2 stasjoner"
   },
   {
    "aar": 2005,
    "punkter": [
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
    "antall": 15,
    "ref": "r-niva5040",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 5040"
   },
   {
    "aar": 2010,
    "punkter": [
     "Holvika st. 1",
     "Holvika st. 2"
    ],
    "antall": 2,
    "ref": "u-multiconsult-2010",
    "slag": "bestilte",
    "tekst": "bestilte 2 stasjoner"
   }
  ],
  "aarFra": 2000,
  "aarTil": 2010,
  "antall": {
   "bestilte": 2,
   "bestilte_rapport": 1
  },
  "kildeId": null,
  "kildeGrunnlag": null,
  "grunnlag": "Rollene er hva registrene sier aktøren gjorde — oppdragsgiver eller utførende på undersøkelsene i Vannmiljø, utgiver eller oppdragsgiver på rapportene, og for kilder: belagt i Grunnforurensning."
 },
 {
  "id": "a-grimstad-kommune",
  "navn": "Grimstad kommune",
  "roller": [
   "bestiller"
  ],
  "skrivematter": [
   "Grimstad kommune"
  ],
  "hendelser": [
   {
    "aar": 1997,
    "punkter": [
     "Groosefjorden",
     "Grooseholmen"
    ],
    "antall": 2,
    "ref": "r-niva3622",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 3622"
   },
   {
    "aar": 2015,
    "punkter": [
     "Groosefjorden",
     "Grooseholmen"
    ],
    "antall": 2,
    "ref": "u-niva-2015",
    "slag": "bestilte",
    "tekst": "bestilte 2 stasjoner"
   },
   {
    "aar": 2015,
    "punkter": [
     "Groosefjorden",
     "Grooseholmen",
     "GS5",
     "GS6"
    ],
    "antall": 4,
    "ref": "r-niva6939",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 6939"
   }
  ],
  "aarFra": 1997,
  "aarTil": 2015,
  "antall": {
   "bestilte": 1,
   "bestilte_rapport": 2
  },
  "kildeId": null,
  "kildeGrunnlag": null,
  "grunnlag": "Rollene er hva registrene sier aktøren gjorde — oppdragsgiver eller utførende på undersøkelsene i Vannmiljø, utgiver eller oppdragsgiver på rapportene, og for kilder: belagt i Grunnforurensning."
 },
 {
  "id": "a-ikke-oppgitt",
  "navn": "Ikke oppgitt",
  "roller": [
   "bestiller",
   "utfører"
  ],
  "skrivematter": [
   "Ikke oppgitt i kildene",
   "ikke oppgitt"
  ],
  "hendelser": [
   {
    "aar": 2016,
    "punkter": [
     "Vikkilen (83174)",
     "Vikkilen (83175)",
     "Vikkilen (83176)",
     "Vikkilen (83177)",
     "Vikkilen (83178)",
     "Vikkilen (83179)",
     "Vikkilen (83180)",
     "Vikkilen (83181)"
    ],
    "antall": 8,
    "ref": "t-tildekking-2016",
    "slag": "tiltak_utfort",
    "tekst": "utførte tildekking av forurenset sjøbunn utenfor as nymo"
   },
   {
    "aar": 2023,
    "punkter": [
     "GS5",
     "GS6"
    ],
    "antall": 2,
    "ref": "u-ikke-oppgitt-2023",
    "slag": "bestilte",
    "tekst": "bestilte 2 stasjoner"
   },
   {
    "aar": 2023,
    "punkter": [
     "GS5",
     "GS6"
    ],
    "antall": 2,
    "ref": "u-ikke-oppgitt-2023",
    "slag": "utforte",
    "tekst": "målte 2 stasjoner"
   }
  ],
  "aarFra": 2016,
  "aarTil": 2023,
  "antall": {
   "bestilte": 1,
   "tiltak_utfort": 1,
   "utforte": 1
  },
  "kildeId": null,
  "kildeGrunnlag": null,
  "grunnlag": "Rollene er hva registrene sier aktøren gjorde — oppdragsgiver eller utførende på undersøkelsene i Vannmiljø, utgiver eller oppdragsgiver på rapportene, og for kilder: belagt i Grunnforurensning. Navnet står som «Ikke oppgitt i kildene», «ikke oppgitt» i kildene."
 },
 {
  "id": "a-sft",
  "navn": "SFT",
  "roller": [
   "bestiller"
  ],
  "skrivematter": [
   "SFT, SNT m.fl."
  ],
  "hendelser": [
   {
    "aar": 1998,
    "punkter": [
     "Grimstad havn, S2",
     "Grimstad havn, S3",
     "Grimstad, Vikkilen S1"
    ],
    "antall": 3,
    "ref": "u-niva-1998",
    "slag": "bestilte",
    "tekst": "bestilte 3 stasjoner"
   }
  ],
  "aarFra": 1998,
  "aarTil": 1998,
  "antall": {
   "bestilte": 1
  },
  "kildeId": null,
  "kildeGrunnlag": null,
  "grunnlag": "Rollene er hva registrene sier aktøren gjorde — oppdragsgiver eller utførende på undersøkelsene i Vannmiljø, utgiver eller oppdragsgiver på rapportene, og for kilder: belagt i Grunnforurensning."
 },
 {
  "id": "a-niva",
  "navn": "NIVA",
  "roller": [
   "utfører"
  ],
  "skrivematter": [
   "NIVA"
  ],
  "hendelser": [
   {
    "aar": 1997,
    "punkter": [
     "Groosefjorden",
     "Grooseholmen"
    ],
    "antall": 2,
    "ref": "r-niva3622",
    "slag": "utga",
    "tekst": "ga ut NIVA 3622"
   },
   {
    "aar": 1998,
    "punkter": [
     "Grimstad havn, S2",
     "Grimstad havn, S3",
     "Grimstad, Vikkilen S1"
    ],
    "antall": 3,
    "ref": "u-niva-1998",
    "slag": "utforte",
    "tekst": "målte 3 stasjoner"
   },
   {
    "aar": 2000,
    "punkter": [
     "Barselkilen",
     "Grømbukt"
    ],
    "antall": 2,
    "ref": "u-niva-2000",
    "slag": "utforte",
    "tekst": "målte 2 stasjoner"
   },
   {
    "aar": 2004,
    "punkter": [
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
    "antall": 14,
    "ref": "u-niva-2004",
    "slag": "utforte",
    "tekst": "målte 14 stasjoner"
   },
   {
    "aar": 2005,
    "punkter": [
     "Vikkilen 1",
     "Vikkilen 15",
     "Vikkilen 16"
    ],
    "antall": 3,
    "ref": "u-niva-2005",
    "slag": "utforte",
    "tekst": "målte 3 stasjoner"
   },
   {
    "aar": 2005,
    "punkter": [
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
    "antall": 15,
    "ref": "r-niva5040",
    "slag": "utga",
    "tekst": "ga ut NIVA 5040"
   },
   {
    "aar": 2008,
    "punkter": [
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
    "antall": 16,
    "ref": "u-niva-2008",
    "slag": "utforte",
    "tekst": "målte 16 stasjoner"
   },
   {
    "aar": 2008,
    "punkter": [
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
    "antall": 16,
    "ref": "r-niva5669",
    "slag": "utga",
    "tekst": "ga ut NIVA 5669"
   },
   {
    "aar": 2015,
    "punkter": [
     "Groosefjorden",
     "Grooseholmen"
    ],
    "antall": 2,
    "ref": "u-niva-2015",
    "slag": "utforte",
    "tekst": "målte 2 stasjoner"
   },
   {
    "aar": 2015,
    "punkter": [
     "Groosefjorden",
     "Grooseholmen",
     "GS5",
     "GS6"
    ],
    "antall": 4,
    "ref": "r-niva6939",
    "slag": "utga",
    "tekst": "ga ut NIVA 6939"
   },
   {
    "aar": 2016,
    "punkter": [
     "Vikkilen (83174)",
     "Vikkilen (83175)",
     "Vikkilen (83176)",
     "Vikkilen (83177)",
     "Vikkilen (83178)",
     "Vikkilen (83179)",
     "Vikkilen (83180)",
     "Vikkilen (83181)"
    ],
    "antall": 8,
    "ref": "u-niva-2016",
    "slag": "utforte",
    "tekst": "målte 8 stasjoner"
   },
   {
    "aar": 2021,
    "punkter": [
     "Vikkilen (83174)",
     "Vikkilen (83175)",
     "Vikkilen (83179)",
     "Vikkilen (83181)"
    ],
    "antall": 4,
    "ref": "u-niva-2021",
    "slag": "utforte",
    "tekst": "målte 4 stasjoner"
   }
  ],
  "aarFra": 1997,
  "aarTil": 2021,
  "antall": {
   "utforte": 8,
   "utga": 4
  },
  "kildeId": null,
  "kildeGrunnlag": null,
  "grunnlag": "Rollene er hva registrene sier aktøren gjorde — oppdragsgiver eller utførende på undersøkelsene i Vannmiljø, utgiver eller oppdragsgiver på rapportene, og for kilder: belagt i Grunnforurensning."
 },
 {
  "id": "a-multiconsult",
  "navn": "Multiconsult",
  "roller": [
   "utfører"
  ],
  "skrivematter": [
   "Multiconsult"
  ],
  "hendelser": [
   {
    "aar": 2010,
    "punkter": [
     "Holvika st. 1",
     "Holvika st. 2"
    ],
    "antall": 2,
    "ref": "u-multiconsult-2010",
    "slag": "utforte",
    "tekst": "målte 2 stasjoner"
   }
  ],
  "aarFra": 2010,
  "aarTil": 2010,
  "antall": {
   "utforte": 1
  },
  "kildeId": null,
  "kildeGrunnlag": null,
  "grunnlag": "Rollene er hva registrene sier aktøren gjorde — oppdragsgiver eller utførende på undersøkelsene i Vannmiljø, utgiver eller oppdragsgiver på rapportene, og for kilder: belagt i Grunnforurensning."
 }
];
