/* Generert av verktoy/bygg_omrade.py vikkilen2 — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/vikkilen2/ og hentes av hent_omrade.py vikkilen2.
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
    "aar": 2012,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva6272",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 6272"
   },
   {
    "aar": 2013,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva6608",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 6608"
   },
   {
    "aar": 2014,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva6688",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 6688"
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
   "bestilte_rapport": 5,
   "tiltak_bestilt": 1
  },
  "kildeId": "K-01",
  "kildeGrunnlag": "Dokumentert konklusjon i fagrapport",
  "grunnlag": "Rollene er hva registrene sier aktøren gjorde — oppdragsgiver eller utførende på undersøkelsene i Vannmiljø, utgiver eller oppdragsgiver på rapportene, og for kilder: belagt i Grunnforurensning. Navnet står som «AS Nymo», «AS Nymo — verftet i Vikkilen (sjø og land)» i kildene."
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
    "aar": 2001,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva4302",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 4302"
   },
   {
    "aar": 2008,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva5670",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 5670"
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
   "bestilte_rapport": 4
  },
  "kildeId": null,
  "kildeGrunnlag": null,
  "grunnlag": "Rollene er hva registrene sier aktøren gjorde — oppdragsgiver eller utførende på undersøkelsene i Vannmiljø, utgiver eller oppdragsgiver på rapportene, og for kilder: belagt i Grunnforurensning."
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
    "aar": 2002,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva4473",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 4473"
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
   "bestilte_rapport": 2
  },
  "kildeId": null,
  "kildeGrunnlag": null,
  "grunnlag": "Rollene er hva registrene sier aktøren gjorde — oppdragsgiver eller utførende på undersøkelsene i Vannmiljø, utgiver eller oppdragsgiver på rapportene, og for kilder: belagt i Grunnforurensning."
 },
 {
  "id": "a-aust-agder-fylkeskommune",
  "navn": "Aust-Agder fylkeskommune",
  "roller": [
   "bestiller"
  ],
  "skrivematter": [
   "Aust-Agder fylkeskommune"
  ],
  "hendelser": [
   {
    "aar": 1986,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva1919",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 1919"
   },
   {
    "aar": 1986,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva1920",
    "slag": "bestilte_rapport",
    "tekst": "oppdragsgiver for NIVA 1920"
   }
  ],
  "aarFra": 1986,
  "aarTil": 1986,
  "antall": {
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
    "aar": 1985,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva1815",
    "slag": "utga",
    "tekst": "ga ut NIVA 1815"
   },
   {
    "aar": 1986,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva1866",
    "slag": "utga",
    "tekst": "ga ut NIVA 1866"
   },
   {
    "aar": 1986,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva1898",
    "slag": "utga",
    "tekst": "ga ut NIVA 1898"
   },
   {
    "aar": 1986,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva1919",
    "slag": "utga",
    "tekst": "ga ut NIVA 1919"
   },
   {
    "aar": 1986,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva1920",
    "slag": "utga",
    "tekst": "ga ut NIVA 1920"
   },
   {
    "aar": 1986,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva1939",
    "slag": "utga",
    "tekst": "ga ut NIVA 1939"
   },
   {
    "aar": 1987,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva1978",
    "slag": "utga",
    "tekst": "ga ut NIVA 1978"
   },
   {
    "aar": 1988,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva2103",
    "slag": "utga",
    "tekst": "ga ut NIVA 2103"
   },
   {
    "aar": 1988,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva2173",
    "slag": "utga",
    "tekst": "ga ut NIVA 2173"
   },
   {
    "aar": 1992,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva2686",
    "slag": "utga",
    "tekst": "ga ut NIVA 2686"
   },
   {
    "aar": 1994,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva3154",
    "slag": "utga",
    "tekst": "ga ut NIVA 3154"
   },
   {
    "aar": 1995,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva3347",
    "slag": "utga",
    "tekst": "ga ut NIVA 3347"
   },
   {
    "aar": 1996,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva3378",
    "slag": "utga",
    "tekst": "ga ut NIVA 3378"
   },
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
    "aar": 1998,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva3869",
    "slag": "utga",
    "tekst": "ga ut NIVA 3869"
   },
   {
    "aar": 1998,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva3908",
    "slag": "utga",
    "tekst": "ga ut NIVA 3908"
   },
   {
    "aar": 1999,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva4052",
    "slag": "utga",
    "tekst": "ga ut NIVA 4052"
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
    "aar": 2001,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva4302",
    "slag": "utga",
    "tekst": "ga ut NIVA 4302"
   },
   {
    "aar": 2002,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva4473",
    "slag": "utga",
    "tekst": "ga ut NIVA 4473"
   },
   {
    "aar": 2002,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva4548",
    "slag": "utga",
    "tekst": "ga ut NIVA 4548"
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
    "aar": 2006,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva5200",
    "slag": "utga",
    "tekst": "ga ut NIVA 5200"
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
    "aar": 2008,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva5670",
    "slag": "utga",
    "tekst": "ga ut NIVA 5670"
   },
   {
    "aar": 2011,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva6249",
    "slag": "utga",
    "tekst": "ga ut NIVA 6249"
   },
   {
    "aar": 2012,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva6272",
    "slag": "utga",
    "tekst": "ga ut NIVA 6272"
   },
   {
    "aar": 2012,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva6432",
    "slag": "utga",
    "tekst": "ga ut NIVA 6432"
   },
   {
    "aar": 2013,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva6608",
    "slag": "utga",
    "tekst": "ga ut NIVA 6608"
   },
   {
    "aar": 2014,
    "punkter": [],
    "antall": 0,
    "ref": "r-niva6688",
    "slag": "utga",
    "tekst": "ga ut NIVA 6688"
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
  "aarFra": 1985,
  "aarTil": 2021,
  "antall": {
   "utforte": 8,
   "utga": 30
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
