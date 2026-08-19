# Historikk for område

Prototype av historikkflaten i Natura. Ekte kart, ekte stasjoner, ekte rapporter.

Spørsmålet flaten stiller er: *hva vet vi egentlig om forurensningshistorikken i
et sjøområde, og hvor vet vi det fra?* Den viser tre faner øverst — bygget av de
samme registrene etter samme metode.

| | Vikkilen | Bjørvika | Vikkilen · historien |
|---|---|---|---|
| Målepunkter | 70 | 176 | 70 |
| Sedimentmålinger | 2 652 | 4 285 | 2 652 |
| Referanseregel | bare punktenes egne | bare punktenes egne | + to hopp i referanselistene |
| Rapporter i lista | 4 | 8 | 30 |
| Funnet i arkivet | **4 av 4** | **0 av 8** | 30 av 46 siterte |
| Framstilling | rapportkort | rapportkort | fortelling med referanser |
| Tiltak | 1 | 4 | 1 |
| Kilder, hvorav belagt | 7, én belagt | 7, ingen belagt | 7, én belagt |

**Vikkilen og Bjørvika** viser hva den strengeste regelen gir. I Vikkilen
navngir punktene fire NIVA-rapporter, og alle fire ligger åpent i Nasjonalt
vitenarkiv — NIVA 5040 skriver rett ut at «hovedkilden til forurensningen har vært
aktivitetene ved AS Nymo». I Bjørvika navngir punktene åtte NGI-rapporter skrevet
for Oslo Havn, og ingen av dem er publisert i et åpent arkiv. Vi har alle
målingene fra mudringen, tildekkingen og etterkontrollen, og ingen av rapportene
som beskriver dem — og dermed heller ingen kilde som kan belegges.

**Vikkilen · historien** er samme sted og samme målinger, men to ting er
annerledes. Referanseregelen utvides to hopp: en rapport er også med hvis den
siterer eller siteres av en rapport punktene navngir. Og framstillingen er en
fortelling i stedet for kort — hvert avsnitt oppgir hva det bygger på, og trykker
du på merkelappen, felles referansen ut med sidetall og den faktiske linja fra
PDF-en. Tallene i teksten er regnet ut av måledataene under byggingen, ikke
skrevet inn for hånd.

## Start

    npm install
    npm run dev

Kartet henter fliser fra Kartverket, så maskinen må være på nett.

## Regelen

En rapport kommer bare med hvis et målepunkt navngir nettopp den. Søket går
**fra punktene og ut**, ikke fra registeret og inn:

1. Les rapportnummeret ut av beskrivelsesfeltet på stasjonen i Vannmiljø.
2. Slå nummeret opp i utgiverens egen serie i Nasjonalt vitenarkiv.
3. Ta rapporten med bare hvis nummeret stemmer eksakt.

Finner vi ikke akkurat den rapporten punktet navngir, tar vi ingen. Vi søker
aldri på stedsnavn, årstall eller oppdragsgiver — et treff på «Vikkilen» i en
tittel er ikke det samme som rapporten bak en måling. Et fritekstsøk på
«Vikkilen» gir 22 treff i arkivet, blant dem en steinalderboplass.

To ting er verdt å merke seg om oppslaget:

* Fritekstsøk på det stasjonsbeskrivelsen kaller rapporten («Miljøgifter i
  sedimenter 2004») gir null treff. Den teksten beskriver undersøkelsen, ikke
  rapportens tittel. Nummeret er den eneste identifikatoren som holder.
* For NIVA 3622 er tittelen i Vannmiljø («Miljøtilstanden i Aust-Agder,
  Grimstad») en annen enn arkivets («Tilstanden i sjøområdene ved Grimstad før
  start av biologisk renseanlegg på Groos»). Det er nummeret som knytter dem
  sammen, ikke tittelen.

Rapporter som ikke finnes, forsvinner ikke fra lista. De får et eget kort som
sier hvorfor de mangler, hvor mange punkter som navngir dem, og at målingene
deres likevel ligger i Vannmiljø.

## Hva som er ekte

| Del | Kilde |
|---|---|
| Bakgrunnskart | Kartverkets åpne cache — gråtone, topografisk og sjøkart. Merk akserekkefølgen `{z}/{y}/{x}`; med `{z}/{x}/{y}` svarer tjenesten 200 med en tom flis, så kartet blir blankt uten feilmelding |
| Stasjoner og måleverdier | Vannmiljø (Miljødirektoratet), via ArcGIS REST og faktaark-eksporten. Ingen API-nøkkel |
| Tilstandsklasser | M-608 (rev. 2020, tabell 3.3) for marint sediment. Bare målinger med operator «=» klassifiseres; «<» deteksjonsgrensen telles for seg |
| Hotspot og friskmelding | M-409 § 3.3 og § 3.4.1. Trinn 1 er M-608s grense mellom klasse II og III, unntatt TBT der den forvaltningsbaserte grensen på 35 µg/kg gjelder |
| Kilder | Grunnforurensning (Miljødirektoratet), pluss kilder som bare er navngitt i rapport |
| Bransje → stoff | M-350 vedlegg X, tabell X-1, som M-409 § 3.2.2 fotnote 2 viser til |
| Rapporter | Nasjonalt vitenarkiv (`api.nva.unit.no`) — tittel, år, rapportnummer, forfattere, sidetall og sammendrag er registerets egne felt |

Datafilene under `src/data/<område>/` er generert av `verktoy/bygg_omrade.py` og
redigeres ikke for hånd. Hver fil har en topptekst som sier hvor tallene kommer
fra og hvilken regel som er brukt.

## Slik virker flaten

**Fanene øverst bytter prosjekt.** Arbeidsflaten monteres på nytt ved bytte, så
ingen valgt rapport eller stasjon følger med over.

**Lista er rapportene, med oppsummeringen øverst.** Oppsummeringskortet er ikke
en rapport — det er hele området: alle punkter, alle kilder, alle tiltak og
spredningsbildet på én gang.

**Velger du et kort, viker lista for panelet.** Kartet får plassen. «Tilbake til
lista» henter lista fram igjen.

**Velger du en rapport, viser kartet bare den.** Rapportens punkter, tiltak og
kilder — alt annet tegnes ikke, det dempes ikke. Punktene rapporten bringer selv,
som ikke finnes i Vannmiljø, tegnes som stiplede ringer og telles i kortet.

**Kildeflyten åpnes fra panelet**, ikke fra kartet. Oppsummeringen gir hele
områdets flyt fra kilde via bransje til stoff og tilstandsklasse; en enkelt
rapport gir bare sin egen. Hvil over en søyle, så lyser alt som henger sammen
med den.

**Tiltaksflatene er ikke tiltaksgrenser.** De er omrisset rundt målepunktene som
bærer tiltakets beskrivelse, lagt 50 m utenfor punktene. Ligger punktene i
atskilte grupper, tegnes ett omriss per gruppe — én innhylling over alt ville
påstått at havnebassenget imellom også var tiltaksområde. Det står i
verktøytipset på flaten.

**Historikkfanen åpner med tidslinja.** Den er ikke en liste over hendelser, men
spørsmålet flaten stiller, tegnet som ett bilde. Ryggraden er året. Til venstre
ligger rapportene, én prikk per rapport utgitt det året. Til høyre ligger
målingene: stolpen er stasjonene som ble målt, og den mørke delen er de av dem en
rapport faktisk navngir.

Da blir begge hullene synlige, og de peker hver sin vei. Prikker uten stolpe er
rapporter om år registeret ikke har målinger fra — 1986-rapportene beskriver
feltarbeid fra 1982–85, mens Vannmiljø starter i 1990. Stolpe uten mørk del er
det motsatte: noen målte, og ingen rapport beskriver det. 2016 er tiltaksåret —
ni stasjoner, ingen rapport. Hvil over en rad for tallene, trykk for å se året i
kartet.

**Under tidslinja leses historien ovenfra og ned.** Hvil over
et avsnitt, så viser kartet punktene, kildene og tiltakene det handler om; trykk
«vis i kartet», så blir det stående og kartet zoomer dit. Merkelappene under hvert
avsnitt er beleggene: en rapport, et register, eller et tall regnet ut av
måledataene. Trykk på en, så felles den ut med hele kjeden — for siterte
rapporter med sidetall og den faktiske linja fra PDF-en, i begge retninger.

`Esc` lukker det som står åpent. `?` over kartet henter fram omvisningen igjen.

## Bygge datasettene på nytt

Råmaterialet ligger ikke i repoet (206 MB, og PDF-ene er NIVAs egne rapporter).
Hent det og bygg:

    python verktoy/hent_omrade.py vikkilen
    python verktoy/bygg_omrade.py vikkilen

`hent_omrade.py` hopper over det som allerede er lastet ned. Registrene er
Vannmiljø, Grunnforurensning og Nasjonalt vitenarkiv — alle åpne, ingen
API-nøkkel. Merk at NVA svarer HTTP 500 på enkelte sidevinduer; skriptet deler
opp vinduet og går videre.

`verktoy/ocr.py` kjører Tesseract med norsk språkmodell over PDF-er uten
tekstlag. Krever `winget install --id UB-Mannheim.TesseractOCR` og
`nor.traineddata` i `verktoy/tessdata/` (ikke i repoet).

Koden er delt i tre lag:

* `verktoy/felles.py` — kolonner, klassifisering, M-608. Vet ingenting om noe sted
* `verktoy/bygg_omrade.py` — rørledningen, lik for alle områder
* `verktoy/omrade_<id>.py` — rammen og alt som er skrevet for hånd om ett sted

Et nytt område er en ny `omrade_<id>.py` og en linje i `verktoy/omrader.py`.

`verktoy/sitater.py` bygger sitatgrafen. Den finner referanselista i hver PDF,
trekker ut NIVA-rapportnumrene og noterer sida og linja hvert funn står på. To
grenser holder gjetting ute: antall hopp er oppgitt av området, og nummeret må
slå til eksakt i rapportserien. Numre referanselistene nevner uten at arkivet har
dem, utelates — de er like ofte OCR-støy fra de skannede rapportene som ekte.
Unntaket er rapporter vi har PDF-en til: da finnes rapporten, og fila er et
sterkere belegg enn en registerpost.

Fortellingen i `omrade_vikkilen2.py` er skrevet for hånd, men den kan ikke komme i
utakt med dataene. Byggingen stopper hvis et avsnitt viser til en rapport, en
kilde, et tiltak eller et punkt som ikke finnes i datasettet, og tallene i teksten
settes inn fra `historietall()` — de kan ikke skrives inn for hånd.

## Forbehold

Dette er en prototype, ikke et forvaltningsverktøy.

**Ingen PDF er lest for Bjørvika** — det finnes ingen å lese. For Vikkilen er
fire lest: punktverdiene i rapportpanelet for NIVA 5040 og 5669 er hentet rett ut
av rapportenes egne vedlegg og tabeller med `pymupdf`, med trykt sidetall på hver
rad. Figurene er hentet ut av de samme PDF-ene.

**Årstallene på rapporter som mangler i arkivet, er måleår**, ikke utgivelsesår.
NGIs prosjektnumre begynner med et årstall, men det er prosjektåret, og vi kan
ikke slå det opp. Kortene sier «målt 2007», ikke «2007».

**Tolkningene i tekstfeltene er kuraterte.** Tallene er regnet av måledataene, men
sammendrag, nøkkelfunn og kildevurderinger er skrevet for hånd og oppgir selv
hvilken rapport eller hvilket register formuleringen bygger på. Står det ikke i
en kilde, står det «ikke oppgitt i noen kilde vi har».
