/* Generert av verktoy/bygg_omrade.py vikkilen2 — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/vikkilen2/ og hentes av hent_omrade.py vikkilen2.
 *
 * Kildene er registrerte lokaliteter i Grunnforurensning innenfor samme utsnitt som
 * stasjonene, pluss kilder som bare er navngitt i rapport. Posisjon, påvirkningsgrad,
 * bransje og saksstatus kommer fra Grunnforurensning; belegg og poeng er satt etter
 * hva slags bevis som finnes: dokumentert konklusjon i fagrapport veier tyngst, ren
 * registeroppføring minst. stoffer[] er bransjesignatur fra M-350 Tabell X-1 der ingen
 * måling knytter lokaliteten til sedimentet — det står i grunnlagsteksten hvilken av
 * delene det er.
 *
 * koblet[] er stasjonene kilden faktisk kan knyttes til. Bare AS Nymo har en slik kobling: Vannmiljø oppgir Nymo
 * som oppdragsgiver for stasjonene. De andre kildene står uten punkter — vi vet at
 * de finnes, ikke at de har satt spor i disse målingene.
 */
export const D_KILDER = [
 {
  "id": "K-01",
  "rang": 1,
  "navn": "AS Nymo — verftet i Vikkilen (sjø og land)",
  "poeng": 0.97,
  "belegg": "belagt",
  "type": "Skipsverft og båtslipper",
  "presisjon": "punkt",
  "lat": 58.36069,
  "lng": 8.61316,
  "koordinatKilde": "Grunnforurensning, lokalitet 11044 «PRI1 - AS Nymo - sjø», 0.05 km fra nærmeste målestasjon.",
  "status": "tiltakGjennomført",
  "statusGrunn": "Grunnforurensning oppgir påvirkningsgrad «akseptabelForurensning».",
  "stoffer": [
   "Tributyltinn (TBT)",
   "Bly",
   "Kobber",
   "Sink"
  ],
  "grunnlag": "Dokumentert konklusjon i fagrapport. NIVA 5040 (2005), som 15 av punktene navngir: «Hovedkilden til forurensningen har vært aktivitetene ved AS Nymo.» NIVA 5669 (2008), som 16 punkter navngir, bekrefter nivåene og mønsteret og konkluderer med uakseptabel risiko. I Grunnforurensning ligger verftet med to lokaliteter: «PRI1 - AS NYMO - land» med ikke akseptabel forurensning, og «PRI1 - AS Nymo - sjø», der tiltaket er gjennomført. M-350 Tabell X-1 fører skipsverft opp med tungmetaller, TBT og PCB.",
  "bevisklasse": "Dokumentert konklusjon i fagrapport",
  "versteStasjon": "Vikkilen B06",
  "koblet": [
   "Vikkilen 1",
   "Vikkilen 2",
   "Vikkilen 3",
   "Vikkilen 4",
   "Vikkilen 6",
   "Vikkilen 8",
   "Vikkilen 12",
   "Vikkilen 13",
   "Vikkilen 14",
   "Vikkilen 15",
   "Vikkilen 16",
   "Vikkilen 20",
   "Vikkilen 22",
   "Vikkilen 24",
   "Vikkilen 26",
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
   "Vikkilen B16",
   "Vikkilen (83174)",
   "Vikkilen (83175)",
   "Vikkilen (83176)",
   "Vikkilen (83177)",
   "Vikkilen (83178)",
   "Vikkilen (83179)",
   "Vikkilen (83180)",
   "Vikkilen (83181)"
  ]
 },
 {
  "id": "K-02",
  "rang": 2,
  "navn": "Småbåthavn og generell skipstrafikk i kilen",
  "poeng": 0.55,
  "belegg": "belagt",
  "type": "Skipstrafikk / havnevirksomhet",
  "presisjon": "diffus",
  "lat": null,
  "lng": null,
  "koordinatKilde": "Ingen koordinat i grunnlaget — kilden er beskrevet i rapport, ikke stedfestet.",
  "status": "beskrevet i rapport",
  "statusGrunn": "Ikke registrert i Grunnforurensning.",
  "stoffer": [
   "Tributyltinn (TBT)",
   "Kobber"
  ],
  "grunnlag": "Nevnt i fagrapport. NIVA 5040 (2005): «Imidlertid er det også andre mindre kilder som småbåthavn og generell skipstrafikk.» Rapporten fester ikke kilden til et koordinat, og den er derfor tegnet som diffus. NIVA 5669 (2008) beregner at oppvirvling fra skipspropeller tilfører ca. 1800 kg suspendert stoff per hendelse.",
  "bevisklasse": "Mistanke nevnt i fagrapport, ikke dokumentert",
  "versteStasjon": null,
  "koblet": []
 },
 {
  "id": "K-03",
  "rang": 3,
  "navn": "Kommunalt avløp på Groos",
  "poeng": 0.5,
  "belegg": "belagt",
  "type": "Kommunalt avløpsvann",
  "presisjon": "diffus",
  "lat": null,
  "lng": null,
  "koordinatKilde": "Ingen koordinat i grunnlaget — kilden er beskrevet i rapport, ikke stedfestet.",
  "status": "beskrevet i rapport",
  "statusGrunn": "Ikke registrert i Grunnforurensning.",
  "stoffer": [],
  "grunnlag": "Dokumentert konklusjon i fagrapport, i to av rapportene punktene navngir. NIVA 3622 (1997) fant at bunnområdene i Groosefjorden var tydelig påvirket av det kommunale utslippet på Groos, med lave oksygenkonsentrasjoner i bunnvannet og hydrogensulfid i sedimentet ved utslippspunktet. NIVA 6939 (2015) fant området fortsatt moderat påvirket ved utslippet, med små endringer siden 1995. Begge handler om organisk belastning og oksygen — ingen av miljøgiftene i datasettet er knyttet til utslippet.",
  "bevisklasse": "Dokumentert konklusjon i fagrapport",
  "versteStasjon": null,
  "koblet": []
 },
 {
  "id": "K-04",
  "rang": 4,
  "navn": "Scandia Ship Service",
  "poeng": 0.35,
  "belegg": "antatt",
  "type": "Skipsverft og båtslipper",
  "presisjon": "punkt",
  "lat": 58.33516,
  "lng": 8.59218,
  "koordinatKilde": "Grunnforurensning, lokalitet 3149 «Scandia Ship Service», 0.31 km fra nærmeste målestasjon.",
  "status": "uavklart",
  "statusGrunn": "Grunnforurensning oppgir påvirkningsgrad «ukjentPåvirkning» og bransje «35.111-Bygging og reparasjon av skip og skrog over 100 bruttotonn».",
  "stoffer": [
   "Tributyltinn (TBT)",
   "Bly",
   "Kobber",
   "Sink"
  ],
  "grunnlag": "Registrert i Grunnforurensning under bransje 35.111 «Bygging og reparasjon av skip og skrog», med påvirkningsgrad «ukjent» og status «uavklart». Ingen rapport i grunnlaget knytter lokaliteten til målinger i sjøen. Stoffene er bransjesignaturen fra M-350 Tabell X-1, ikke et målt funn.",
  "bevisklasse": "Stoffsignatur (M-350 Tabell X-1)",
  "versteStasjon": null,
  "koblet": []
 },
 {
  "id": "K-05",
  "rang": 5,
  "navn": "Norsk Skipsopphugging",
  "poeng": 0.32,
  "belegg": "antatt",
  "type": "Skipsverft og båtslipper",
  "presisjon": "punkt",
  "lat": 58.33749,
  "lng": 8.59282,
  "koordinatKilde": "Grunnforurensning, lokalitet 3144 «NORSK SKIPSOPPHUGGING», 0.18 km fra nærmeste målestasjon.",
  "status": "avsluttet",
  "statusGrunn": "Grunnforurensning oppgir påvirkningsgrad «akseptabelForurensning» og bransje «37.100-Gjenvinning av metallholdig avfall og skrap».",
  "stoffer": [
   "Bly",
   "Kobber",
   "Sink",
   "Sum PCB-7"
  ],
  "grunnlag": "Registrert i Grunnforurensning under bransje 37.100 «Gjenvinning av metallholdig avfall og skrap», med akseptabel forurensning og avsluttet saksbehandling. Stoffene er bransjesignatur, ikke målte funn i denne lokaliteten.",
  "bevisklasse": "Stoffsignatur (M-350 Tabell X-1)",
  "versteStasjon": null,
  "koblet": []
 },
 {
  "id": "K-06",
  "rang": 6,
  "navn": "Agder Fornikling A/S",
  "poeng": 0.3,
  "belegg": "antatt",
  "type": "Deponier og forurenset grunn",
  "presisjon": "punkt",
  "lat": 58.34341,
  "lng": 8.55513,
  "koordinatKilde": "Grunnforurensning, lokalitet 3146 «AGDER FORNIKLING A/S», 2.16 km fra nærmeste målestasjon.",
  "status": "avsluttet",
  "statusGrunn": "Grunnforurensning oppgir påvirkningsgrad «akseptabelForurensning» og bransje «25.610-Overflatebehandling av metaller».",
  "stoffer": [
   "Krom",
   "Nikkel",
   "Sink"
  ],
  "grunnlag": "Registrert i Grunnforurensning under bransje 25.610 «Overflatebehandling av metaller», med akseptabel forurensning og avsluttet saksbehandling. Overflatebehandling er en kjent kilde til krom og nikkel, men ingen måling i grunnlaget knytter lokaliteten til sedimentene.",
  "bevisklasse": "Registrert i Grunnforurensning",
  "versteStasjon": null,
  "koblet": []
 },
 {
  "id": "K-07",
  "rang": 7,
  "navn": "Hesnes avfallsplass",
  "poeng": 0.25,
  "belegg": "antatt",
  "type": "Deponier og forurenset grunn",
  "presisjon": "omrade",
  "lat": 58.34218,
  "lng": 8.62952,
  "koordinatKilde": "Grunnforurensning, lokalitet 3138 «Hesnes Avfallsplass», 0.51 km fra nærmeste målestasjon.",
  "status": "undersøkelseGjennomført",
  "statusGrunn": "Grunnforurensning oppgir påvirkningsgrad «ukjentPåvirkning».",
  "stoffer": [],
  "grunnlag": "Registrert i Grunnforurensning med ukjent påvirkningsgrad og pålegg om overvåking. Ligger utenfor selve kilen. Tatt med fordi M-350 Vedlegg X regner deponier i strandsonen som mulig kilde, ikke fordi noe i grunnlaget peker hit.",
  "bevisklasse": "Registrert i Grunnforurensning",
  "versteStasjon": null,
  "koblet": []
 }
];
