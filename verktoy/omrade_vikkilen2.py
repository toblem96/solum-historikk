"""omrade_vikkilen2.py — Vikkilen fortalt som historie i stedet for kort.

Samme sted, samme registre og samme målinger som omrade_vikkilen.py. To ting er
annerledes:

  Referansene.  Regelen «bare rapporter punktene navngir» utvides to hopp:
                en rapport er også med hvis den siterer eller siteres av en
                rapport punktene navngir. Sitatene leses ut av referanselistene i
                PDF-ene av sitater.py, ikke skrevet inn for hånd, og hvert funn
                bærer med seg sida og linja det står på. Nummeret må dessuten
                slå til eksakt i NIVA-serien for å bli med.

  Framstillingen.  Ingen rapportkort. Flaten forteller hva som har skjedd i
                området, kronologisk, og hvert avsnitt oppgir hva det bygger på —
                en rapport, et register, eller et tall regnet ut av måledataene.
                Referanselista ligger under, slik at hver påstand kan følges.

Alt som er felles med den vanlige Vikkilen-fanen, hentes derfra. Det som står
her, er referanseregelen og fortellingen.
"""

from omrade_vikkilen import (  # noqa: F401
    AKTOR_ALIAS, BBOX, GIVER_ALIAS, INN, KILDEOPPSETT, KILDETYPE_M350, SERIER, STEDSNAVN,
    STEDSNAVN_ALIAS, TILTAK, beriker, ekstra_stasjoner, hotspot_tittel,
    innenfor, kilde_punkter, verste_for_kilde,
)
from omrade_vikkilen import RAPPORTOPPSETT as _PUNKTOPPSETT

# ── referanseregelen ─────────────────────────────────────────────────────────

# To hopp fra rapportene punktene navngir.
SITAT_HOPP = 2

# PDF-ene sitatgrafen leses ut av. Alle elleve ligger i hentet/. De fire første
# er rapportene punktene navngir; resten er kommet inn gjennom referansene, og
# er tatt med her fordi referanselistene deres er det neste hoppet.
PDF_ER = {
    "1919": "1919_200dpi.pdf",
    "1920": "1920_72dpi.pdf",
    "3622": "3622_72dpi.pdf",
    "4473": "4473_200dpi.pdf",
    "5040": "niva-5040-2005.pdf",
    "5669": "5669-2008_72dpi.pdf",
    "5670": "5670-2008_150dpi.pdf",
    "6272": "6272-2011_72dpi.pdf",
    "6608": "6608-2013_200dpi.pdf",
    "6688": "6688-2014_72dpi.pdf",
    "6939": "6939-2015_200dpi_revidert.pdf",
}

# Det kuraterte laget på rapportene. Punktrapportene arver oppsettet fra den
# vanlige Vikkilen-fanen; de siterte får bare oppdragsgiver, siden sammendraget
# kommer fra registeret.
RAPPORTOPPSETT = dict(_PUNKTOPPSETT)
RAPPORTOPPSETT.update({
    "1919": {"oppdragsgiver": "Aust-Agder fylkeskommune"},
    "1920": {"oppdragsgiver": "Aust-Agder fylkeskommune"},
    "4302": {"oppdragsgiver": "Grimstad kommune"},
    "4473": {"oppdragsgiver": "Fylkesmannen i Aust-Agder"},
    "5670": {"oppdragsgiver": "Grimstad kommune"},
    "6272": {"oppdragsgiver": "AS Nymo"},
    "6608": {"oppdragsgiver": "AS Nymo"},
    # 6688 finnes ikke i NIVA-serien i Nasjonalt vitenarkiv, men PDF-en ligger i
    # hentet/. Alt under er lest av rapportens egen forside og sammendragsside.
    "6688": {
        "oppdragsgiver": "AS Nymo",
        "aar": 2014,
        "tittel": "Risikovurdering og revidert tiltaksplan for sjøsedimentene i Vikkilen",
        "folk": "Torgeir Bakke, Kristoffer Næs",
        "sider": 36,
        "sammendrag": (
            "På oppdrag fra Nymo AS har NIVA utarbeidet revidert tiltaksplan for "
            "sjøsedimentene i Vikkilen. Revisjonen er gjort på grunnlag av tidligere "
            "innsendt tiltaksplan (NIVA l.nr 6360-2012) og diskusjon mellom "
            "Miljødirektoratet og Nymo av 19.02.2014. Sedimentene er sterkt forurenset av "
            "TBT og betydelig forurenset av andre miljøgifter. Kilen er inndelt i tre "
            "delområder for risiko- og tiltaksvurdering: delområde A nærmest Nymos verft, "
            "delområde B nord for Skjevika og delområde C resten ut til munningen."),
        "punkterForbehold": (
            "Tittel, år, forfattere, sidetall og sammendrag er lest av rapportens egen "
            "forside og sammendragsside (s. 1 og 2 i PDF-en), ikke hentet fra et register. "
            "Nummeret finnes ikke i NIVA-serien i Nasjonalt vitenarkiv."),
    },
})

TEKSTER = {
    "tidsrom": (
        "Årene 1990–1997 kommer fra én enkelt trendstasjon («Grimstad», "
        "Miljødirektoratets basisovervåking), som er målt hvert år. Områdedekkende "
        "undersøkelser starter i 1998."),
    "rapporter": (
        "\n * Denne fanen bruker en videre regel enn den vanlige Vikkilen-fanen. Rapportene\n"
        " * punktene navngir er de samme fire, men i tillegg tas alt referanselistene i\n"
        " * PDF-ene peker på, to hopp ut. Sitatene er lest ut av PDF-ene av sitater.py, og\n"
        " * hvert funn bærer med seg sida og linja det står på.\n"
        " *\n"
        " * Et sitert nummer må slå til eksakt i NIVA-serien for å komme med. Numre\n"
        " * referanselistene nevner uten at arkivet har dem, utelates — de er like ofte\n"
        " * OCR-støy fra de skannede rapportene som ekte rapporter.\n"
        " *\n"
        " * Regelen slipper inn rapporter som ikke handler om dette stedet: metoderapporter,\n"
        " * klassifiseringsveiledere og regionale oversikter for Aust-Agder. De står i lista\n"
        " * med hva de er. Fortellingen bruker dem ikke — «brukteRapporter» i historie.ts\n"
        " * sier hvilke den faktisk hviler på."),
    "kilder": (
        "Bare AS Nymo har en slik kobling: Vannmiljø oppgir Nymo\n"
        " * som oppdragsgiver for stasjonene. De andre kildene står uten punkter — vi vet at\n"
        " * de finnes, ikke at de har satt spor i disse målingene."),
    "flyt": (
        "PAH har ingen lenke: ingen kilde i grunnlaget er belagt for\n"
        " * PAH, selv om PAH-nivåene er høye."),
    "tiltak": (
        "Ett tiltak er dokumentert i grunnlaget: tildekkingen i 2016.\n"
        " * Kildene er Grunnforurensning, der «PRI1 - AS Nymo - sjø» står med status\n"
        " * «tiltakGjennomført», og de åtte stasjonene i Vannmiljø som er merket «Miljøgifter\n"
        " * i tildekkede sedimenter ved verftet Nymo AS»."),
}


# ── tall som regnes ut av måledataene ────────────────────────────────────────

def historietall(ctx):
    """Tallene fortellingen bruker, regnet ut her og nå.

    Ingen tall i teksten er skrevet for hånd. Hvert av dem har en forklaring som
    sier hvordan det er regnet, og den vises i flaten når man holder pekeren over
    tallet. Endrer måledataene seg, endrer teksten seg med dem.
    """
    st = ctx["stasjoner"]
    stoff = {s["tegn"]: s for s in ctx["stoff"]}
    tbt = stoff.get("TBT")

    def med_stoff(navn):
        return [s for s in st if any(v["stoff"] == navn for v in s["verdier"])]

    tbt_st = med_stoff("Tributyltinn (TBT)")
    verst = max(tbt_st, key=lambda s: max(
        v["verdi"] for v in s["verdier"] if v["stoff"] == "Tributyltinn (TBT)"), default=None)

    fra_punkt = [r for r in ctx["rapporter"] if r["funnetVia"] == "punkt"]
    fra_sitat = [r for r in ctx["rapporter"] if r["funnetVia"] == "sitat"]
    tiltak = ctx["tiltak"][0] if ctx["tiltak"] else {"punkter": []}
    aar = [s["aarFra"] for s in st if s["aarFra"]] + [s["aarTil"] for s in st if s["aarTil"]]

    return {
        "tbt_maks": {
            "verdi": int(tbt["maks"]) if tbt else 0,
            "enhet": "µg/kg",
            "forklaring": (
                f'Høyeste målte TBT-verdi blant {tbt["n"] if tbt else 0} klassifiserbare '
                "TBT-målinger i marint sediment innenfor rammen. Vannmiljø, operator «=»."),
        },
        "tbt_faktor": {
            "verdi": int(tbt["faktor"]) if tbt and tbt["faktor"] else 0,
            "enhet": "ganger Trinn 1",
            "forklaring": (
                "Høyeste TBT-verdi delt på den forvaltningsbaserte Trinn 1-grensen på "
                "35 µg/kg, som M-409 § 3.3 setter for TBT."),
        },
        "tbt_verste": {
            "verdi": verst["navn"] if verst else "ingen",
            "enhet": "",
            "forklaring": "Stasjonen med den høyeste enkeltmålingen av TBT.",
        },
        "tbt_stasjoner": {
            "verdi": len(tbt_st),
            "enhet": "stasjoner",
            "forklaring": f"Antall av de {len(st)} stasjonene som har minst én TBT-måling.",
        },
        "tbt_over": {
            "verdi": tbt["nOver"] if tbt else 0,
            "enhet": "målinger",
            "forklaring": (
                f'Antall TBT-målinger over Trinn 1, av {tbt["n"] if tbt else 0} i alt. '
                "Andelen avgjør om stoffet regnes som utbredt etter M-409 § 3.4.1."),
        },
        "punkter": {
            "verdi": len(st), "enhet": "punkter",
            "forklaring": "Stasjoner med marint sediment innenfor rammen, fra Vannmiljø.",
        },
        "tiltakspunkter": {
            "verdi": len(tiltak["punkter"]), "enhet": "stasjoner",
            "forklaring": (
                "Stasjoner i Vannmiljø merket «Miljøgifter i tildekkede sedimenter ved "
                "verftet Nymo AS»."),
        },
        "aar_fra": {
            "verdi": min(aar) if aar else 0, "enhet": "",
            "forklaring": "Første måleår blant stasjonene innenfor rammen.",
        },
        "aar_til": {
            "verdi": max(aar) if aar else 0, "enhet": "",
            "forklaring": "Siste måleår blant stasjonene innenfor rammen.",
        },
        "ref_alle": {
            "verdi": len(ctx["rapporter"]), "enhet": "rapporter",
            "forklaring": "Hele referanselista: navngitt av punkt pluss funnet via sitat.",
        },
        "ref_punkt": {
            "verdi": len(fra_punkt), "enhet": "rapporter",
            "forklaring": "Rapporter et målepunkt navngir i beskrivelsesfeltet i Vannmiljø.",
        },
        "ref_sitat": {
            "verdi": len(fra_sitat), "enhet": "rapporter",
            "forklaring": (
                "Rapporter funnet i referanselistene til dem punktene navngir, to hopp ut. "
                "Nummeret måtte slå til eksakt i NIVA-serien."),
        },
        "uten_rapport": {
            "verdi": sum(1 for u in ctx["undersokelser"] if not u["rapportId"]),
            "enhet": "undersøkelser",
            "forklaring": (
                f'Av {len(ctx["undersokelser"])} undersøkelser i måledataene er dette de '
                "som ingen rapport i datasettet kan knyttes til."),
        },
    }


# ── fortellingen ─────────────────────────────────────────────────────────────
#
# Hvert avsnitt oppgir hva det bygger på:
#
#   slag «rapport»   ref er rapport-id-en. Sammendraget den viser til, er
#                    rapportens eget, hentet fra Nasjonalt vitenarkiv.
#   slag «register»  ref er registeret: vannmiljo, grunnforurensning, m608,
#                    m409, m350.
#   slag «maaling»   ref er navnet på et tall i historietall() — påstanden er
#                    regnet ut av måledataene, ikke lest i en rapport.
#
# «punkter», «kilder» og «tiltak» er hva kartet viser når avsnittet er valgt.

HISTORIE = {
    "innledning": (
        "Vikkilen er en trang, terskeldelt kile innerst i Groosefjorden ved Grimstad. "
        "Historien her handler om at problemet skiftet karakter: i 1986 var det kloakk, "
        "i 2005 var det tinn. Alt under er hentet fra {ref_alle} rapporter og fra "
        "{punkter} målepunkter i Vannmiljø. {ref_punkt} av rapportene er navngitt av "
        "punktene selv; {ref_sitat} er funnet i referanselistene til dem, to hopp ut. "
        "Hvert avsnitt sier hva det bygger på."),
    "kapitler": [
        {
            "id": "k-1986",
            "aarFra": 1982, "aarTil": 1986,
            "overskrift": "Problemet var kloakk",
            "avsnitt": [
                {
                    "tekst": (
                        "De eldste undersøkelsene vi finner spor av, er to NIVA-rapporter fra "
                        "1986 om Groosefjorden og Vikkilen. Hydrografirapporten fant ikke "
                        "dramatisk overgjødsling, men et høyt — tildels meget høyt — "
                        "oksygenforbruk i dypvannet, og slo fast at man må forvente årviss "
                        "dannelse av hydrogensulfid i bunnvannet i Groosefjorden."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva1919",
                                "sted": "rapportens eget sammendrag"}],
                    "punkter": ["Groosefjorden", "Grooseholmen"],
                },
                {
                    "tekst": (
                        "Bunnfaunarapporten samme år undersøkte fire stasjoner over tre år. "
                        "Alle tilstandsparametre pekte i retning av at stasjonene i "
                        "fjordbassenget hadde gjennomgått en utvikling mot sterkere organisk "
                        "belastning — men utviklingen var ikke dramatisk. Ingen av de to "
                        "rapportene nevner tinn."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva1920",
                                "sted": "rapportens eget sammendrag"}],
                    "punkter": ["Groosefjorden", "Grooseholmen"],
                },
                {
                    "tekst": (
                        "Ingen målepunkter i Vannmiljø navngir disse to. De er funnet fordi "
                        "rapporten fra 1997 siterer dem i referanselista si — og fordi vi har "
                        "PDF-en, kan sitatet vises fram. Det er hele grunnen til at de er "
                        "med her og ikke i den vanlige Vikkilen-fanen."),
                    "belegg": [
                        {"slag": "rapport", "ref": "r-niva3622", "sted": "referanselista"},
                        {"slag": "maaling", "ref": "ref_sitat"},
                    ],
                },
            ],
        },
        {
            "id": "k-1997",
            "aarFra": 1995, "aarTil": 1997,
            "overskrift": "Før renseanlegget på Groos",
            "avsnitt": [
                {
                    "tekst": (
                        "I 1995 undersøkte NIVA sjøområdene ved Grimstad for å dokumentere "
                        "tilstanden før det nye biologiske renseanlegget på Groos ble satt i "
                        "drift. Bunnområdene var tydelig påvirket av det kommunale utslippet, "
                        "med lave oksygenkonsentrasjoner i bunnvannet og hydrogensulfid i "
                        "sedimentene ved utslippspunktet. I overflatelaget var det bare svake "
                        "effekter, og det var ingen større endringer siden 1980-tallet."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva3622",
                                "sted": "rapportens eget sammendrag"}],
                    "punkter": ["Groosefjorden", "Grooseholmen"],
                    "kilder": ["K-03"],
                },
                {
                    "tekst": (
                        "To stasjoner i Groosefjorden oppgir denne rapporten i "
                        "beskrivelsesfeltet sitt. Merk at Vannmiljø kaller den «Miljøtilstanden "
                        "i Aust-Agder, Grimstad», mens arkivets tittel er en annen — det er "
                        "rapportnummeret som knytter punkt og rapport sammen, ikke tittelen."),
                    "belegg": [{"slag": "register", "ref": "vannmiljo",
                                "sted": "beskrivelsesfeltet på stasjonene"}],
                    "punkter": ["Groosefjorden", "Grooseholmen"],
                },
            ],
        },
        {
            "id": "k-2002",
            "aarFra": 2000, "aarTil": 2002,
            "overskrift": "Småbåthavnene, og et første tinn-varsel",
            "avsnitt": [
                {
                    "tekst": (
                        "I oktober 2000 undersøkte NIVA bunnsedimentene i ni småbåthavner i "
                        "Aust-Agder, to av dem i Grimstad: Barselkilen og Grømbukt. Havnene var "
                        "til dels betydelig forurenset av tjærestoffer, tributyltinn og "
                        "oljekomponenter. I alle havnene unntatt Grømbukt var sedimentet sort "
                        "og luktet hydrogensulfid."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva4473",
                                "sted": "rapportens eget sammendrag"}],
                    "punkter": ["Barselkilen", "Grømbukt"],
                },
                {
                    "tekst": (
                        "Året etter utredet NIVA konsekvensene av å utvide småbåthavnen i "
                        "Barselkilen, og fant bunnsedimentene der sterkt forurenset av olje og "
                        "TBT. Ingen av de to rapportene handler om Vikkilen — men de viser at "
                        "TBT var et kjent problem i Grimstad flere år før noen målte i kilen."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva4302",
                                "sted": "rapportens eget sammendrag"}],
                    "punkter": ["Barselkilen"],
                    "kilder": ["K-02"],
                },
            ],
        },
        {
            "id": "k-2005",
            "aarFra": 2004, "aarTil": 2005,
            "overskrift": "Tinnet finnes, og kilden navngis",
            "avsnitt": [
                {
                    "tekst": (
                        "På oppdrag fra AS Nymo kartla NIVA sedimentene i Vikkilen i 2004. "
                        "Konklusjonen var utvetydig: det forurensningsmessige hovedproblemet er "
                        "TBT, verdiene er svært høye, og hele fjordområdet må karakteriseres som "
                        "meget sterkt forurenset. Rapporten navngir kilden: «Hovedkilden til "
                        "forurensningen har vært aktivitetene ved AS Nymo.»"),
                    "belegg": [{"slag": "rapport", "ref": "r-niva5040",
                                "sted": "rapportens eget sammendrag"}],
                    "kilder": ["K-01"],
                },
                {
                    "tekst": (
                        "Rapporten peker også på mindre kilder — småbåthavn og generell "
                        "skipstrafikk — og slår fast at kilen er markert til meget sterkt "
                        "forurenset av PAH, uten å peke ut hvor PAH-en kommer fra. Det hullet "
                        "står fortsatt åpent: ingen kilde i grunnlaget er belagt for PAH."),
                    "belegg": [
                        {"slag": "rapport", "ref": "r-niva5040",
                         "sted": "rapportens eget sammendrag"},
                        {"slag": "register", "ref": "m350",
                         "sted": "vedlegg X, tabell X-1 — bransjesignaturene"},
                    ],
                    "kilder": ["K-02"],
                },
                {
                    "tekst": (
                        "Måledataene bekrefter bildet den dag i dag. Høyeste TBT-måling i "
                        "området er {tbt_maks} µg/kg — {tbt_faktor} ganger den "
                        "forvaltningsbaserte Trinn 1-grensen — målt på {tbt_verste}. "
                        "{tbt_over} av TBT-målingene ligger over Trinn 1, og stoffet regnes "
                        "derfor som utbredt etter M-409, ikke som en flekk."),
                    "belegg": [
                        {"slag": "maaling", "ref": "tbt_maks"},
                        {"slag": "maaling", "ref": "tbt_faktor"},
                        {"slag": "maaling", "ref": "tbt_verste"},
                        {"slag": "maaling", "ref": "tbt_over"},
                        {"slag": "register", "ref": "m409",
                         "sted": "§ 3.3 og § 3.4.1"},
                    ],
                },
            ],
        },
        {
            "id": "k-2008",
            "aarFra": 2008, "aarTil": 2008,
            "overskrift": "Uakseptabel risiko",
            "avsnitt": [
                {
                    "tekst": (
                        "Etter pålegg fra SFT gjorde NIVA supplerende undersøkelser i 2008. "
                        "Konklusjonen var at sedimentene utgjør en uakseptabel risiko både for "
                        "human helse og for økologiske effekter, etter Trinn 2 og Trinn 3 i "
                        "SFTs risikoveileder. Vikkilen ble foreslått delt i tre områder for "
                        "tiltak: mudring til minst 20 cm med etterdekking utenfor Nymo, "
                        "2 × 20 cm tildekking i resten av indre del, og 2 × 10 cm ytterst."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva5669",
                                "sted": "rapportens eget sammendrag"}],
                    "kilder": ["K-01"],
                },
                {
                    "tekst": (
                        "Rapporten er også en av de få stedene grunnlaget rommer en "
                        "selvkorreksjon: analyser av porevann, TBT-flukser og TBT i bunnfauna "
                        "viste at SFTs egen risikoveileder overestimerer både transport og "
                        "bioakkumulasjon."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva5669",
                                "sted": "rapportens eget sammendrag"}],
                },
            ],
        },
        {
            "id": "k-2013",
            "aarFra": 2005, "aarTil": 2013,
            "overskrift": "Sneglene svarer",
            "avsnitt": [
                {
                    "tekst": (
                        "Fra 2005 undersøkte NIVA kjønnsforstyrrelse hos fire sneglearter i "
                        "Vikkilen — imposex og intersex, som TBT utløser. Resultatene fram til "
                        "2013 viser entydig forbedring hos strandsnegl og nettsnegl, selv om "
                        "utviklingen flatet ut etter 2011. Ved Nymo gikk strandsnegl fra 99 % "
                        "sterilitet i 2005 til rundt 20 % forstyrrelse i 2013."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva6608",
                                "sted": "rapportens eget sammendrag"}],
                    "kilder": ["K-01"],
                },
                {
                    "tekst": (
                        "Det er fortsatt en klart økende forstyrrelse innover i kilen mot Nymo. "
                        "Denne rapporten er ikke navngitt av noe målepunkt — den er funnet "
                        "fordi resipientundersøkelsen fra 2015 siterer den. Uten sitatgrafen "
                        "ville den eneste biologiske tidsserien i området vært usynlig her."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva6939",
                                "sted": "referanselista"}],
                },
            ],
        },
        {
            "id": "k-2014",
            "aarFra": 2011, "aarTil": 2014,
            "overskrift": "Planene, og den som mangler",
            "avsnitt": [
                {
                    "tekst": (
                        "I 2012 leverte NIVA en revidert risikovurdering og tiltaksplan for "
                        "delområde B og C. Sedimentene utgjorde en risiko for skade på "
                        "sedimentlevende dyr, men porevannet var ikke giftig for mikroalger og "
                        "krepsdyr, og analyser av sjømat tydet på at risikoen fra PCB ikke var "
                        "reell. Beregnet utlekking av TBT ga risiko, men porevannsanalysene "
                        "tydet på at heller ikke den var reell."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva6272",
                                "sted": "rapportens eget sammendrag"}],
                    "kilder": ["K-01"],
                },
                {
                    "tekst": (
                        "I 2014 kom den reviderte tiltaksplanen som ble lagt til grunn for "
                        "arbeidet. Den deler kilen i delområde A nærmest verftet, B nord for "
                        "Skjevika og C ut til munningen, og bygger på en tidligere tiltaksplan "
                        "fra 2012. Den planen finner vi ikke: 2014-rapporten oppgir den som "
                        "«NIVA l.nr 6360-2012», og det nummeret finnes ikke i NIVA-serien. "
                        "Vi tar den ikke med på et omtrentlig treff."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva6688",
                                "sted": "sammendraget på s. 2 i PDF-en"}],
                    "tiltak": ["t-tildekking-2016"],
                },
            ],
        },
        {
            "id": "k-2015",
            "aarFra": 2015, "aarTil": 2015,
            "overskrift": "Groosefjorden tjue år etter",
            "avsnitt": [
                {
                    "tekst": (
                        "Resipientundersøkelsen i 2015 dekket næringssalter, oksygen, "
                        "strandsone, hardbunn, bløtbunnsfauna, sedimentprofilfotografering og "
                        "miljøgifter. I nærområdet til utslippet i Groosefjorden var bunnen "
                        "moderat påvirket; i dypområdet var tilstanden mindre god, men mest "
                        "trolig naturlig betinget. Endringene siden 1995 var små — altså siden "
                        "den samme undersøkelsen de to punktene også viser til."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva6939",
                                "sted": "rapportens eget sammendrag"}],
                    "punkter": ["Groosefjorden", "Grooseholmen", "GS5", "GS6"],
                    "kilder": ["K-03"],
                },
                {
                    "tekst": (
                        "Samme år undersøkte NIVA naboresipienten i Homborsund, der kommunen "
                        "ville utvide renseanlegget fra 600 til 1600 personekvivalenter. Den "
                        "rapporten handler ikke om Vikkilen, men den kom med hit fordi "
                        "2015-rapporten siterer den — et eksempel på at sitatregelen også "
                        "slipper inn naboområder."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva5670",
                                "sted": "referanselista i NIVA 6939"}],
                },
            ],
        },
        {
            "id": "k-2016",
            "aarFra": 2016, "aarTil": 2016,
            "overskrift": "Tiltaket, som ingen rapport beskriver",
            "avsnitt": [
                {
                    "tekst": (
                        "I 2016 ble sjøbunnen utenfor AS Nymo dekket til. At det skjedde, står "
                        "to steder: Grunnforurensning fører lokaliteten «PRI1 - AS Nymo - sjø» "
                        "med status «tiltakGjennomført», og {tiltakspunkter} stasjoner i "
                        "Vannmiljø er merket «Miljøgifter i tildekkede sedimenter ved verftet "
                        "Nymo AS»."),
                    "belegg": [
                        {"slag": "register", "ref": "grunnforurensning",
                         "sted": "lokaliteten «PRI1 - AS Nymo - sjø»"},
                        {"slag": "maaling", "ref": "tiltakspunkter"},
                    ],
                    "tiltak": ["t-tildekking-2016"],
                },
                {
                    "tekst": (
                        "Hva som faktisk ble lagt ut, og over hvor stort areal, står ikke i "
                        "noen kilde vi har. Lagtykkelsene i tiltakskortet er de planlagte fra "
                        "2014-rapporten, ikke de utførte. Flaten i kartet er omrisset rundt "
                        "målepunktene, 50 meter utenfor dem — ikke tiltaksgrensen. Den finnes "
                        "ikke stedfestet noe sted i grunnlaget."),
                    "belegg": [{"slag": "rapport", "ref": "r-niva6688",
                                "sted": "sammendraget på s. 2 i PDF-en"}],
                    "tiltak": ["t-tildekking-2016"],
                },
            ],
        },
        {
            "id": "k-etterpaa",
            "aarFra": 2018, "aarTil": 2024,
            "overskrift": "Etterpå: tall uten tekst",
            "avsnitt": [
                {
                    "tekst": (
                        "Målingene fortsetter til {aar_til}. Men {uten_rapport} av "
                        "undersøkelsene i måledataene har ingen rapport i dette datasettet — "
                        "verken navngitt av et punkt eller nådd gjennom to hopp i "
                        "referanselistene. Det gjelder også tiltaksåret 2016, det tettest "
                        "målte året etter 2008."),
                    "belegg": [
                        {"slag": "maaling", "ref": "uten_rapport"},
                        {"slag": "maaling", "ref": "aar_til"},
                    ],
                    "tiltak": ["t-tildekking-2016"],
                },
                {
                    "tekst": (
                        "Det er den ærlige enden på historien: vi vet at kilen er målt hvert "
                        "par år siden tiltaket, vi har alle tallene, og vi kan se at TBT "
                        "fortsatt ligger over Trinn 1 på {tbt_stasjoner} stasjoner. Men "
                        "hvem som konkluderte hva av det, og hva de anbefalte videre, står "
                        "ikke i noe vi kan finne."),
                    "belegg": [
                        {"slag": "maaling", "ref": "tbt_stasjoner"},
                        {"slag": "register", "ref": "vannmiljo",
                         "sted": "måleverdiene på stasjonene"},
                    ],
                },
            ],
        },
    ],
}
