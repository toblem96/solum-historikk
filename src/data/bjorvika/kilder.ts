/* Generert av verktoy/bygg_omrade.py bjorvika — ikke redigert for hånd.
 * Råmaterialet ligger i verktoy/hentet/bjorvika/ og hentes av hent_omrade.py bjorvika.
 *
 * Kildene er registrerte lokaliteter i Grunnforurensning innenfor samme utsnitt som
 * stasjonene, pluss kilder som bare er navngitt i rapport. Posisjon, påvirkningsgrad,
 * bransje og saksstatus kommer fra Grunnforurensning; belegg og poeng er satt etter
 * hva slags bevis som finnes: dokumentert konklusjon i fagrapport veier tyngst, ren
 * registeroppføring minst. stoffer[] er bransjesignatur fra M-350 Tabell X-1 der ingen
 * måling knytter lokaliteten til sedimentet — det står i grunnlagsteksten hvilken av
 * delene det er.
 *
 * koblet[] er stasjonene kilden faktisk kan knyttes til. Her er den tom for alle: koblingen mellom kilde og punkt
 * krever en rapport som navngir sammenhengen, og ingen av rapportene punktene
 * viser til, finnes. Alle kildene står derfor som antatt — vi vet at de finnes i
 * Grunnforurensning, ikke at de har satt spor i disse målingene.
 */
export const D_KILDER = [
 {
  "id": "K-01",
  "rang": 1,
  "navn": "Nylands Verksted — skipsverftet i Bjørvika",
  "poeng": 0.6,
  "belegg": "antatt",
  "type": "Skipsverft og båtslipper",
  "presisjon": "punkt",
  "lat": 59.90576,
  "lng": 10.75308,
  "koordinatKilde": "Grunnforurensning, lokalitet 1016 «NYLANDS VERKSTED», 0.08 km fra nærmeste målestasjon.",
  "status": "tiltakGjennomført",
  "statusGrunn": "Grunnforurensning oppgir påvirkningsgrad «ikkeAkseptabelForurensning» og bransje «35.110-Bygging og reparasjon av skip».",
  "stoffer": [
   "Tributyltinn (TBT)",
   "Bly",
   "Kobber",
   "Sink",
   "Sum PCB-7"
  ],
  "grunnlag": "Det tyngste registerfunnet innenfor rammen. Grunnforurensning fører «NYLANDS VERKSTED» under bransje 35.110 «Bygging og reparasjon av skip» med ikke akseptabel forurensning og status «tiltakGjennomført», og lokaliteten «PRI1 - Nyland verksted» med ukjent påvirkningsgrad og uavklart saksbehandling. Ingen rapport i grunnlaget knytter verkstedet til sedimentmålingene — de åtte rapportene punktene navngir, finnes ikke i arkivet. Stoffene er bransjesignaturen fra M-350 Tabell X-1, ikke et målt funn her.",
  "bevisklasse": "Stoffsignatur (M-350 Tabell X-1)",
  "versteStasjon": null,
  "koblet": []
 },
 {
  "id": "K-02",
  "rang": 2,
  "navn": "Lasting og lossing i Bjørvika",
  "poeng": 0.45,
  "belegg": "antatt",
  "type": "Skipstrafikk / havnevirksomhet",
  "presisjon": "punkt",
  "lat": 59.91113,
  "lng": 10.75774,
  "koordinatKilde": "Grunnforurensning, lokalitet 1086 «Dronning Eufemias gate 8 m.fl. - Bjørvika-Barcode», 0.53 km fra nærmeste målestasjon.",
  "status": "uavklart",
  "statusGrunn": "Grunnforurensning oppgir påvirkningsgrad «ikkeAkseptabelForurensning» og bransje «63.111-Lasting og lossing tilknyttet landtransport».",
  "stoffer": [
   "Tributyltinn (TBT)",
   "Kobber",
   "Sum PAH-16"
  ],
  "grunnlag": "Grunnforurensning fører «Dronning Eufemias gate 8 m.fl. - Bjørvika» under bransje 63.111 «Lasting og lossing tilknyttet sjøtransport», med ikke akseptabel forurensning og uavklart saksbehandling. M-350 Vedlegg X regner bunnstoff i havneområder som en påregnelig kilde. Ingen måling i grunnlaget knytter lokaliteten til sedimentene.",
  "bevisklasse": "Registrert i Grunnforurensning",
  "versteStasjon": null,
  "koblet": []
 },
 {
  "id": "K-03",
  "rang": 3,
  "navn": "Sørengkaia og Sørengutstikkeren",
  "poeng": 0.4,
  "belegg": "antatt",
  "type": "Skipstrafikk / havnevirksomhet",
  "presisjon": "punkt",
  "lat": 59.90331,
  "lng": 10.75541,
  "koordinatKilde": "Grunnforurensning, lokalitet 938 «SØRENGKAIA», 0.07 km fra nærmeste målestasjon.",
  "status": "uavklart",
  "statusGrunn": "Grunnforurensning oppgir påvirkningsgrad «ukjentPåvirkning» og bransje «63.120-Lagring».",
  "stoffer": [
   "Tributyltinn (TBT)",
   "Kobber",
   "Sum PAH-16"
  ],
  "grunnlag": "Grunnforurensning fører «SØRENGKAIA» under bransje 63.120 «Lagring» med ukjent påvirkningsgrad, og flere nabolokaliteter på Sørengutstikkeren under 63.112 «Lasting og lossing tilknyttet sjøtransport» og 63.221 «Drift av havne- og kaianlegg». Flere av landlokalitetene står med gjennomført tiltak. Stoffene er bransjesignatur, ikke målte funn i sjøen.",
  "bevisklasse": "Registrert i Grunnforurensning",
  "versteStasjon": null,
  "koblet": []
 },
 {
  "id": "K-04",
  "rang": 4,
  "navn": "Akerselva — utløpet i Bjørvika",
  "poeng": 0.4,
  "belegg": "antatt",
  "type": "Elv og urban avrenning",
  "presisjon": "diffus",
  "lat": 59.90634,
  "lng": 10.75506,
  "koordinatKilde": "Grunnforurensning, lokalitet 6924 «Munchbrua- Vestre og Østre Akerselvkai», 0.08 km fra nærmeste målestasjon.",
  "status": "tiltakGjennomført",
  "statusGrunn": "Grunnforurensning oppgir påvirkningsgrad «akseptabelForurensning».",
  "stoffer": [
   "Sum PAH-16",
   "Bly",
   "Sink",
   "Kobber"
  ],
  "grunnlag": "Akerselva munner ut midt i Bjørvika. Grunnforurensning fører «Munchbrua - Vestre og Østre Akerselvkai» og flere lokaliteter på Akerselvallmenningen som forurenset grunn med gjennomført tiltak, og avløpsprosjektet Midgardsormen ligger inne med en rekke delstrekninger langs elva. M-350 Vedlegg X regner elv og urban avrenning som en av hovedveiene for miljøgifter til sediment i byområder. Ingen måling i grunnlaget skiller elvas bidrag fra de øvrige.",
  "bevisklasse": "Mistanke etter M-350 Vedlegg X, ikke dokumentert",
  "versteStasjon": null,
  "koblet": []
 },
 {
  "id": "K-05",
  "rang": 5,
  "navn": "Revierkaia",
  "poeng": 0.35,
  "belegg": "antatt",
  "type": "Skipstrafikk / havnevirksomhet",
  "presisjon": "punkt",
  "lat": 59.90391,
  "lng": 10.74339,
  "koordinatKilde": "Grunnforurensning, lokalitet 22776 «Revierkaia», 0.12 km fra nærmeste målestasjon.",
  "status": "tiltakGjennomført",
  "statusGrunn": "Grunnforurensning oppgir påvirkningsgrad «akseptabelForurensning».",
  "stoffer": [
   "Tributyltinn (TBT)",
   "Kobber"
  ],
  "grunnlag": "Grunnforurensning fører «Revierkaia» med akseptabel forurensning og status «tiltakGjennomført», og en eldre lokalitet med samme navn som uavklart. 25 målepunkter her bærer beskrivelsen «Mudring ved Revierkaia». Registeret og punktene peker på samme sted og samme hendelse — men rapporten som ville knyttet forurensningen til en kilde, finnes ikke.",
  "bevisklasse": "Registrert i Grunnforurensning",
  "versteStasjon": null,
  "koblet": []
 },
 {
  "id": "K-06",
  "rang": 6,
  "navn": "Grønlikaia",
  "poeng": 0.3,
  "belegg": "antatt",
  "type": "Skipstrafikk / havnevirksomhet",
  "presisjon": "punkt",
  "lat": 59.90085,
  "lng": 10.75698,
  "koordinatKilde": "Grunnforurensning, lokalitet 1139 «Grønlikaia», 0.09 km fra nærmeste målestasjon.",
  "status": "uavklart",
  "statusGrunn": "Grunnforurensning oppgir påvirkningsgrad «akseptabelForurensning» og bransje «00.000-Uoppgitt».",
  "stoffer": [
   "Sum PAH-16",
   "Bly"
  ],
  "grunnlag": "Grunnforurensning fører «Grønlikaia» med akseptabel forurensning og uavklart saksbehandling, og «Ledningstraseer Grønlia» med gjennomført undersøkelse. Grønlikaia er den sørlige enden av rammen. Stoffene er bransjesignatur, ikke målte funn på lokaliteten.",
  "bevisklasse": "Registrert i Grunnforurensning",
  "versteStasjon": null,
  "koblet": []
 },
 {
  "id": "K-07",
  "rang": 7,
  "navn": "Kommunalt avløp og overvann til havnebassenget",
  "poeng": 0.25,
  "belegg": "antatt",
  "type": "Kommunalt avløpsvann",
  "presisjon": "diffus",
  "lat": null,
  "lng": null,
  "koordinatKilde": "Ingen koordinat i grunnlaget — kilden er beskrevet i rapport, ikke stedfestet.",
  "status": "beskrevet i rapport",
  "statusGrunn": "Ikke registrert i Grunnforurensning.",
  "stoffer": [],
  "grunnlag": "Diffus kilde uten koordinat. Avløpsprosjektet Midgardsormen, som ligger inne i Grunnforurensning med en rekke delstrekninger rundt Bjørvika, ble bygget nettopp for å samle opp overløp som tidligere gikk til havnebassenget. M-350 Vedlegg X regner utslipp fra avløp som betydelig for større byer. Kilden står oppført uten stoffer fordi ingen kilde i grunnlaget sier hvilke det gjelder.",
  "bevisklasse": "Mistanke etter M-350 Vedlegg X, ikke dokumentert",
  "versteStasjon": null,
  "koblet": []
 }
];
