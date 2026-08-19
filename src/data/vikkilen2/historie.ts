/* Generert av verktoy/bygg_omrade.py vikkilen2 — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/vikkilen2/ og hentes av hent_omrade.py vikkilen2.
 *
 * Historikken fortalt som tekst, ikke som rapportkort. Hvert avsnitt bærer med seg
 * hva det bygger på, og hvilke punkter, kilder og tiltak i kartet det handler om.
 * Tallene i teksten er regnet ut av måledataene under byggingen — de er ikke skrevet
 * inn for hånd, og «tall» under sier hvordan hvert av dem er regnet.
 *
 * Byggingen stopper hvis et avsnitt viser til en rapport, en kilde, et tiltak eller
 * et punkt som ikke finnes i datasettet.
 */
export const D_HISTORIE = {
 "innledning": "Vikkilen er en trang, terskeldelt kile innerst i Groosefjorden ved Grimstad. Historien her handler om at problemet skiftet karakter: i 1986 var det kloakk, i 2005 var det tinn. Alt under er hentet fra 30 rapporter og fra 70 målepunkter i Vannmiljø. 4 av rapportene er navngitt av punktene selv; 26 er funnet i referanselistene til dem, to hopp ut. Hvert avsnitt sier hva det bygger på.",
 "kapitler": [
  {
   "id": "k-1986",
   "aarFra": 1982,
   "aarTil": 1986,
   "overskrift": "Problemet var kloakk",
   "avsnitt": [
    {
     "tekst": "De eldste undersøkelsene vi finner spor av, er to NIVA-rapporter fra 1986 om Groosefjorden og Vikkilen. Hydrografirapporten fant ikke dramatisk overgjødsling, men et høyt — tildels meget høyt — oksygenforbruk i dypvannet, og slo fast at man må forvente årviss dannelse av hydrogensulfid i bunnvannet i Groosefjorden.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva1919",
       "sted": "rapportens eget sammendrag"
      }
     ],
     "punkter": [
      "Groosefjorden",
      "Grooseholmen"
     ]
    },
    {
     "tekst": "Bunnfaunarapporten samme år undersøkte fire stasjoner over tre år. Alle tilstandsparametre pekte i retning av at stasjonene i fjordbassenget hadde gjennomgått en utvikling mot sterkere organisk belastning — men utviklingen var ikke dramatisk. Ingen av de to rapportene nevner tinn.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva1920",
       "sted": "rapportens eget sammendrag"
      }
     ],
     "punkter": [
      "Groosefjorden",
      "Grooseholmen"
     ]
    },
    {
     "tekst": "Ingen målepunkter i Vannmiljø navngir disse to. De er funnet fordi rapporten fra 1997 siterer dem i referanselista si — og fordi vi har PDF-en, kan sitatet vises fram. Det er hele grunnen til at de er med her og ikke i den vanlige Vikkilen-fanen.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva3622",
       "sted": "referanselista"
      },
      {
       "slag": "maaling",
       "ref": "ref_sitat"
      }
     ]
    }
   ]
  },
  {
   "id": "k-1997",
   "aarFra": 1995,
   "aarTil": 1997,
   "overskrift": "Før renseanlegget på Groos",
   "avsnitt": [
    {
     "tekst": "I 1995 undersøkte NIVA sjøområdene ved Grimstad for å dokumentere tilstanden før det nye biologiske renseanlegget på Groos ble satt i drift. Bunnområdene var tydelig påvirket av det kommunale utslippet, med lave oksygenkonsentrasjoner i bunnvannet og hydrogensulfid i sedimentene ved utslippspunktet. I overflatelaget var det bare svake effekter, og det var ingen større endringer siden 1980-tallet.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva3622",
       "sted": "rapportens eget sammendrag"
      }
     ],
     "punkter": [
      "Groosefjorden",
      "Grooseholmen"
     ],
     "kilder": [
      "K-03"
     ]
    },
    {
     "tekst": "To stasjoner i Groosefjorden oppgir denne rapporten i beskrivelsesfeltet sitt. Merk at Vannmiljø kaller den «Miljøtilstanden i Aust-Agder, Grimstad», mens arkivets tittel er en annen — det er rapportnummeret som knytter punkt og rapport sammen, ikke tittelen.",
     "belegg": [
      {
       "slag": "register",
       "ref": "vannmiljo",
       "sted": "beskrivelsesfeltet på stasjonene"
      }
     ],
     "punkter": [
      "Groosefjorden",
      "Grooseholmen"
     ]
    }
   ]
  },
  {
   "id": "k-2002",
   "aarFra": 2000,
   "aarTil": 2002,
   "overskrift": "Småbåthavnene, og et første tinn-varsel",
   "avsnitt": [
    {
     "tekst": "I oktober 2000 undersøkte NIVA bunnsedimentene i ni småbåthavner i Aust-Agder, to av dem i Grimstad: Barselkilen og Grømbukt. Havnene var til dels betydelig forurenset av tjærestoffer, tributyltinn og oljekomponenter. I alle havnene unntatt Grømbukt var sedimentet sort og luktet hydrogensulfid.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva4473",
       "sted": "rapportens eget sammendrag"
      }
     ],
     "punkter": [
      "Barselkilen",
      "Grømbukt"
     ]
    },
    {
     "tekst": "Året etter utredet NIVA konsekvensene av å utvide småbåthavnen i Barselkilen, og fant bunnsedimentene der sterkt forurenset av olje og TBT. Ingen av de to rapportene handler om Vikkilen — men de viser at TBT var et kjent problem i Grimstad flere år før noen målte i kilen.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva4302",
       "sted": "rapportens eget sammendrag"
      }
     ],
     "punkter": [
      "Barselkilen"
     ],
     "kilder": [
      "K-02"
     ]
    }
   ]
  },
  {
   "id": "k-2005",
   "aarFra": 2004,
   "aarTil": 2005,
   "overskrift": "Tinnet finnes, og kilden navngis",
   "avsnitt": [
    {
     "tekst": "På oppdrag fra AS Nymo kartla NIVA sedimentene i Vikkilen i 2004. Konklusjonen var utvetydig: det forurensningsmessige hovedproblemet er TBT, verdiene er svært høye, og hele fjordområdet må karakteriseres som meget sterkt forurenset. Rapporten navngir kilden: «Hovedkilden til forurensningen har vært aktivitetene ved AS Nymo.»",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva5040",
       "sted": "rapportens eget sammendrag"
      }
     ],
     "kilder": [
      "K-01"
     ]
    },
    {
     "tekst": "Rapporten peker også på mindre kilder — småbåthavn og generell skipstrafikk — og slår fast at kilen er markert til meget sterkt forurenset av PAH, uten å peke ut hvor PAH-en kommer fra. Det hullet står fortsatt åpent: ingen kilde i grunnlaget er belagt for PAH.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva5040",
       "sted": "rapportens eget sammendrag"
      },
      {
       "slag": "register",
       "ref": "m350",
       "sted": "vedlegg X, tabell X-1 — bransjesignaturene"
      }
     ],
     "kilder": [
      "K-02"
     ]
    },
    {
     "tekst": "Måledataene bekrefter bildet den dag i dag. Høyeste TBT-måling i området er 93000 µg/kg — 2657 ganger den forvaltningsbaserte Trinn 1-grensen — målt på Vikkilen B06. 65 av TBT-målingene ligger over Trinn 1, og stoffet regnes derfor som utbredt etter M-409, ikke som en flekk.",
     "belegg": [
      {
       "slag": "maaling",
       "ref": "tbt_maks"
      },
      {
       "slag": "maaling",
       "ref": "tbt_faktor"
      },
      {
       "slag": "maaling",
       "ref": "tbt_verste"
      },
      {
       "slag": "maaling",
       "ref": "tbt_over"
      },
      {
       "slag": "register",
       "ref": "m409",
       "sted": "§ 3.3 og § 3.4.1"
      }
     ]
    }
   ]
  },
  {
   "id": "k-2008",
   "aarFra": 2008,
   "aarTil": 2008,
   "overskrift": "Uakseptabel risiko",
   "avsnitt": [
    {
     "tekst": "Etter pålegg fra SFT gjorde NIVA supplerende undersøkelser i 2008. Konklusjonen var at sedimentene utgjør en uakseptabel risiko både for human helse og for økologiske effekter, etter Trinn 2 og Trinn 3 i SFTs risikoveileder. Vikkilen ble foreslått delt i tre områder for tiltak: mudring til minst 20 cm med etterdekking utenfor Nymo, 2 × 20 cm tildekking i resten av indre del, og 2 × 10 cm ytterst.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva5669",
       "sted": "rapportens eget sammendrag"
      }
     ],
     "kilder": [
      "K-01"
     ]
    },
    {
     "tekst": "Rapporten er også en av de få stedene grunnlaget rommer en selvkorreksjon: analyser av porevann, TBT-flukser og TBT i bunnfauna viste at SFTs egen risikoveileder overestimerer både transport og bioakkumulasjon.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva5669",
       "sted": "rapportens eget sammendrag"
      }
     ]
    }
   ]
  },
  {
   "id": "k-2013",
   "aarFra": 2005,
   "aarTil": 2013,
   "overskrift": "Sneglene svarer",
   "avsnitt": [
    {
     "tekst": "Fra 2005 undersøkte NIVA kjønnsforstyrrelse hos fire sneglearter i Vikkilen — imposex og intersex, som TBT utløser. Resultatene fram til 2013 viser entydig forbedring hos strandsnegl og nettsnegl, selv om utviklingen flatet ut etter 2011. Ved Nymo gikk strandsnegl fra 99 % sterilitet i 2005 til rundt 20 % forstyrrelse i 2013.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva6608",
       "sted": "rapportens eget sammendrag"
      }
     ],
     "kilder": [
      "K-01"
     ]
    },
    {
     "tekst": "Det er fortsatt en klart økende forstyrrelse innover i kilen mot Nymo. Denne rapporten er ikke navngitt av noe målepunkt — den er funnet fordi resipientundersøkelsen fra 2015 siterer den. Uten sitatgrafen ville den eneste biologiske tidsserien i området vært usynlig her.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva6939",
       "sted": "referanselista"
      }
     ]
    }
   ]
  },
  {
   "id": "k-2014",
   "aarFra": 2011,
   "aarTil": 2014,
   "overskrift": "Planene, og den som mangler",
   "avsnitt": [
    {
     "tekst": "I 2012 leverte NIVA en revidert risikovurdering og tiltaksplan for delområde B og C. Sedimentene utgjorde en risiko for skade på sedimentlevende dyr, men porevannet var ikke giftig for mikroalger og krepsdyr, og analyser av sjømat tydet på at risikoen fra PCB ikke var reell. Beregnet utlekking av TBT ga risiko, men porevannsanalysene tydet på at heller ikke den var reell.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva6272",
       "sted": "rapportens eget sammendrag"
      }
     ],
     "kilder": [
      "K-01"
     ]
    },
    {
     "tekst": "I 2014 kom den reviderte tiltaksplanen som ble lagt til grunn for arbeidet. Den deler kilen i delområde A nærmest verftet, B nord for Skjevika og C ut til munningen, og bygger på en tidligere tiltaksplan fra 2012. Den planen finner vi ikke: 2014-rapporten oppgir den som «NIVA l.nr 6360-2012», og det nummeret finnes ikke i NIVA-serien. Vi tar den ikke med på et omtrentlig treff.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva6688",
       "sted": "sammendraget på s. 2 i PDF-en"
      }
     ],
     "tiltak": [
      "t-tildekking-2016"
     ]
    }
   ]
  },
  {
   "id": "k-2015",
   "aarFra": 2015,
   "aarTil": 2015,
   "overskrift": "Groosefjorden tjue år etter",
   "avsnitt": [
    {
     "tekst": "Resipientundersøkelsen i 2015 dekket næringssalter, oksygen, strandsone, hardbunn, bløtbunnsfauna, sedimentprofilfotografering og miljøgifter. I nærområdet til utslippet i Groosefjorden var bunnen moderat påvirket; i dypområdet var tilstanden mindre god, men mest trolig naturlig betinget. Endringene siden 1995 var små — altså siden den samme undersøkelsen de to punktene også viser til.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva6939",
       "sted": "rapportens eget sammendrag"
      }
     ],
     "punkter": [
      "Groosefjorden",
      "Grooseholmen",
      "GS5",
      "GS6"
     ],
     "kilder": [
      "K-03"
     ]
    },
    {
     "tekst": "Samme år undersøkte NIVA naboresipienten i Homborsund, der kommunen ville utvide renseanlegget fra 600 til 1600 personekvivalenter. Den rapporten handler ikke om Vikkilen, men den kom med hit fordi 2015-rapporten siterer den — et eksempel på at sitatregelen også slipper inn naboområder.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva5670",
       "sted": "referanselista i NIVA 6939"
      }
     ]
    }
   ]
  },
  {
   "id": "k-2016",
   "aarFra": 2016,
   "aarTil": 2016,
   "overskrift": "Tiltaket, som ingen rapport beskriver",
   "avsnitt": [
    {
     "tekst": "I 2016 ble sjøbunnen utenfor AS Nymo dekket til. At det skjedde, står to steder: Grunnforurensning fører lokaliteten «PRI1 - AS Nymo - sjø» med status «tiltakGjennomført», og 8 stasjoner i Vannmiljø er merket «Miljøgifter i tildekkede sedimenter ved verftet Nymo AS».",
     "belegg": [
      {
       "slag": "register",
       "ref": "grunnforurensning",
       "sted": "lokaliteten «PRI1 - AS Nymo - sjø»"
      },
      {
       "slag": "maaling",
       "ref": "tiltakspunkter"
      }
     ],
     "tiltak": [
      "t-tildekking-2016"
     ]
    },
    {
     "tekst": "Hva som faktisk ble lagt ut, og over hvor stort areal, står ikke i noen kilde vi har. Lagtykkelsene i tiltakskortet er de planlagte fra 2014-rapporten, ikke de utførte. Flaten i kartet er omrisset rundt målepunktene, 50 meter utenfor dem — ikke tiltaksgrensen. Den finnes ikke stedfestet noe sted i grunnlaget.",
     "belegg": [
      {
       "slag": "rapport",
       "ref": "r-niva6688",
       "sted": "sammendraget på s. 2 i PDF-en"
      }
     ],
     "tiltak": [
      "t-tildekking-2016"
     ]
    }
   ]
  },
  {
   "id": "k-etterpaa",
   "aarFra": 2018,
   "aarTil": 2024,
   "overskrift": "Etterpå: tall uten tekst",
   "avsnitt": [
    {
     "tekst": "Målingene fortsetter til 2024. Men 6 av undersøkelsene i måledataene har ingen rapport i dette datasettet — verken navngitt av et punkt eller nådd gjennom to hopp i referanselistene. Det gjelder også tiltaksåret 2016, det tettest målte året etter 2008.",
     "belegg": [
      {
       "slag": "maaling",
       "ref": "uten_rapport"
      },
      {
       "slag": "maaling",
       "ref": "aar_til"
      }
     ],
     "tiltak": [
      "t-tildekking-2016"
     ]
    },
    {
     "tekst": "Det er den ærlige enden på historien: vi vet at kilen er målt hvert par år siden tiltaket, vi har alle tallene, og vi kan se at TBT fortsatt ligger over Trinn 1 på 39 stasjoner. Men hvem som konkluderte hva av det, og hva de anbefalte videre, står ikke i noe vi kan finne.",
     "belegg": [
      {
       "slag": "maaling",
       "ref": "tbt_stasjoner"
      },
      {
       "slag": "register",
       "ref": "vannmiljo",
       "sted": "måleverdiene på stasjonene"
      }
     ]
    }
   ]
  }
 ],
 "tall": {
  "tbt_maks": {
   "verdi": 93000,
   "enhet": "µg/kg",
   "forklaring": "Høyeste målte TBT-verdi blant 68 klassifiserbare TBT-målinger i marint sediment innenfor rammen. Vannmiljø, operator «=»."
  },
  "tbt_faktor": {
   "verdi": 2657,
   "enhet": "ganger Trinn 1",
   "forklaring": "Høyeste TBT-verdi delt på den forvaltningsbaserte Trinn 1-grensen på 35 µg/kg, som M-409 § 3.3 setter for TBT."
  },
  "tbt_verste": {
   "verdi": "Vikkilen B06",
   "enhet": "",
   "forklaring": "Stasjonen med den høyeste enkeltmålingen av TBT."
  },
  "tbt_stasjoner": {
   "verdi": 39,
   "enhet": "stasjoner",
   "forklaring": "Antall av de 70 stasjonene som har minst én TBT-måling."
  },
  "tbt_over": {
   "verdi": 65,
   "enhet": "målinger",
   "forklaring": "Antall TBT-målinger over Trinn 1, av 68 i alt. Andelen avgjør om stoffet regnes som utbredt etter M-409 § 3.4.1."
  },
  "punkter": {
   "verdi": 70,
   "enhet": "punkter",
   "forklaring": "Stasjoner med marint sediment innenfor rammen, fra Vannmiljø."
  },
  "tiltakspunkter": {
   "verdi": 8,
   "enhet": "stasjoner",
   "forklaring": "Stasjoner i Vannmiljø merket «Miljøgifter i tildekkede sedimenter ved verftet Nymo AS»."
  },
  "aar_fra": {
   "verdi": 1990,
   "enhet": "",
   "forklaring": "Første måleår blant stasjonene innenfor rammen."
  },
  "aar_til": {
   "verdi": 2024,
   "enhet": "",
   "forklaring": "Siste måleår blant stasjonene innenfor rammen."
  },
  "ref_alle": {
   "verdi": 30,
   "enhet": "rapporter",
   "forklaring": "Hele referanselista: navngitt av punkt pluss funnet via sitat."
  },
  "ref_punkt": {
   "verdi": 4,
   "enhet": "rapporter",
   "forklaring": "Rapporter et målepunkt navngir i beskrivelsesfeltet i Vannmiljø."
  },
  "ref_sitat": {
   "verdi": 26,
   "enhet": "rapporter",
   "forklaring": "Rapporter funnet i referanselistene til dem punktene navngir, to hopp ut. Nummeret måtte slå til eksakt i NIVA-serien."
  },
  "uten_rapport": {
   "verdi": 6,
   "enhet": "undersøkelser",
   "forklaring": "Av 10 undersøkelser i måledataene er dette de som ingen rapport i datasettet kan knyttes til."
  }
 },
 "brukteRapporter": [
  "r-niva1919",
  "r-niva1920",
  "r-niva3622",
  "r-niva4302",
  "r-niva4473",
  "r-niva5040",
  "r-niva5669",
  "r-niva5670",
  "r-niva6272",
  "r-niva6608",
  "r-niva6688",
  "r-niva6939"
 ],
 "antallRapporter": 30,
 "merknad": "Hvert avsnitt oppgir hva det bygger på. «rapport» peker på en rapport i referanselista under, «register» på Vannmiljø, Grunnforurensning eller en veileder, og «måling» på et tall som er regnet ut av måledataene her og nå — hold pekeren over tallet, så står regnestykket der. Byggeskriptet stopper hvis et avsnitt viser til noe som ikke finnes i datasettet, så lista kan ikke komme i utakt med teksten."
};
