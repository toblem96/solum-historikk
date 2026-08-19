/**
 * Domenetyper og utledninger over det ekte grunnlaget.
 *
 * Datafilene under `src/data/<område>/` er generert rett ut av kildene
 * (Vannmiljø, Grunnforurensning og Nasjonalt vitenarkiv) av
 * verktoy/bygg_omrade.py, og redigeres ikke for hånd. Her legger vi bare typer
 * og oppslag oppå dem — ingen tall oppstår i denne fila.
 *
 * Flaten viser ett område av gangen. Datasettene er derfor levende bindinger:
 * `settOmrade(id)` peker dem på en annen mappe, og komponentene som allerede har
 * importert dem, ser den nye verdien. Arbeidsflaten monteres på nytt ved bytte,
 * så ingen valgt rapport eller stasjon overlever fra det forrige området.
 */
import {
  DATASETT, D_M608, STANDARD_OMRADE, type OmradeId,
} from "./data";

export type { OmradeId };
export { OMRADE_FANER, STANDARD_OMRADE } from "./data";

/* ── Typer ────────────────────────────────────────────────────────────── */

export interface Maaling {
  stoff: string;
  verdi: number;
  enhet: string;
  klasse: number;
  n: number;
}

export interface Stasjon {
  navn: string;
  kode: string;
  lat: number;
  lng: number;
  klasse: number | null;
  aarFra: number | null;
  aarTil: number | null;
  utforende: string;
  oppdragsgiver: string;
  medium: string;
  faktaark: string | null;
  verdier: Maaling[];
  /** Hvilket register eller hvilken rapport punktet kommer fra. */
  opphav?: string;
  /** Feltbeskrivelsen fra rapporten, for punkter uten kjemiske analyser. */
  feltnotat?: string;
  dyp?: string;
}

export interface Figur {
  fil: string;
  tittel: string;
  side: number | null;
  beskrivelse: string;
}

export interface RapportPunkt {
  navn: string;
  /** Hva rapporten selv kaller punktet — «St. 8», «B 30». */
  navnIRapport: string;
  side: number | null;
  tekst: string;
  verdier: Record<string, string | number>;
  enheter: Record<string, string>;
}

export type RapportStatus = "lest" | "ikke_lest" | "ikke_funnet";

export interface Rapport {
  id: string;
  aar: number | null;
  /** Første og siste måleår blant punktene som navngir rapporten. Brukes
   *  når rapporten ikke finnes i arkivet og derfor ikke har utgivelsesår. */
  maaltFra?: number | null;
  maaltTil?: number | null;
  tittel: string;
  utforer: string;
  oppdragsgiver: string | null;
  folk: string | null;
  status: RapportStatus;
  tillit: "hoy" | "middels" | "lav";
  rapportnummer: string | null;
  sider: string | null;
  url: string | null;
  begrunnelse: string | null;
  kobling: { type: string; tekst: string } | null;
  dekkerPunkter: string[];
  figurer: Figur[];
  sammendrag: string | null;
  noekkelfunn: string[];
  punkter: RapportPunkt[];
  punkterForbehold: string | null;
  referanser: string | null;
  kildeIder: string[];
  tiltakIder: string[];
  /** Punkter rapporten bringer som ikke finnes i Vannmiljø. */
  nyePunkter: string[];
  /** Hvordan rapporten ble funnet: navngitt av et punkt, eller via sitatgrafen. */
  /** Hvor mange hopp ut i referanselistene rapporten ble funnet. */
  hopp?: number;
  /** Sitatene som førte hit — retning, motpart, side og linja det står på. */
  sitatBelegg?: {
    retning: string; motpart: string; side: number;
    sitat: string; iReferanseliste: boolean;
  }[];
  /** Sann når rapporten ikke finnes i arkivet, men PDF-en gjør det. */
  ikkeIArkivet?: boolean;
  funnetVia: "punkt" | "sitat";
  /** Én setning om beleggets art, vist på kortet og i panelet. */
  belegg: string;
}

export interface Kilde {
  id: string;
  rang: number;
  navn: string;
  poeng: number;
  belegg: "belagt" | "antatt";
  type: string;
  presisjon: "punkt" | "omrade" | "diffus";
  lat: number | null;
  lng: number | null;
  status: string;
  stoffer: string[];
  grunnlag: string;
  versteStasjon: string | null;
  koblet: string[];
}

export interface Tiltak {
  id: string;
  navn: string;
  type: string;
  aarFra: number | null;
  aarTil: number | null;
  utforer: string | null;
  oppdragsgiver: string | null;
  beskrivelse: string;
  omfang: { merkelapp: string; verdi: string }[];
  punkter: string[];
  rapportId: string | null;
  resultat: string | null;
}

export interface Hendelse {
  aar: number;
  type: "rapport" | "tiltak" | "kilde" | "mangler";
  merkelapp: string;
  tittel: string;
  rapportId?: string | null;
  tiltakId?: string | null;
  kildeId?: string | null;
}

/** Ett belegg bak et utsagn i fortellingen. */
export interface Belegg {
  slag: "rapport" | "register" | "maaling";
  /** Rapport-id, registernavn, eller navnet på et utregnet tall. */
  ref: string;
  /** Hvor i kilden det står — sidetall, kapittel, feltnavn. */
  sted?: string;
}

export interface HistorieAvsnitt {
  tekst: string;
  belegg: Belegg[];
  punkter?: string[];
  kilder?: string[];
  tiltak?: string[];
}

export interface HistorieKapittel {
  id: string;
  aarFra: number;
  aarTil: number;
  overskrift: string;
  avsnitt: HistorieAvsnitt[];
}

/** Én rad på tidslinja: ett år, med hva som ble målt og hva som er beskrevet. */
export interface TidslinjeAar {
  aar: number;
  /** Stasjoner målt dette året. */
  malt: number;
  /** Hvor mange av dem som er navngitt av minst én rapport. */
  beskrevet: number;
  punkter: string[];
  rapporter: string[];
  kapitler: string[];
  tiltak: string[];
  /** Antall år uten noe som helst rett før denne raden. */
  hopp: number;
}

export interface Historie {
  innledning: string;
  kapitler: HistorieKapittel[];
  tidslinje: TidslinjeAar[];
  /** Tallene i teksten, med regnestykket bak hvert av dem. */
  tall: Record<string, { verdi: string | number; enhet: string; forklaring: string }>;
  brukteRapporter: string[];
  antallRapporter: number;
  merknad: string;
}

/** Én ting en aktør gjorde, forankret i et år og i punktene den gjaldt. */
export interface AktorHendelse {
  aar: number;
  slag: "bestilte" | "utforte" | "utga" | "bestilte_rapport"
      | "tiltak_utfort" | "tiltak_bestilt";
  tekst: string;
  ref: string;
  antall: number;
  punkter: string[];
}

/**
 * En aktør, slik registrene beskriver den.
 *
 * Rollene er ikke satt for hånd. «bestiller» og «utfører» er hva Vannmiljø og
 * rapportene sier aktøren gjorde; «kilde» krever at Grunnforurensning eller en
 * rapport belegger den. Ingen kalles myndighet eller forurenser her — den
 * slutningen tilhører leseren.
 */
export interface Aktor {
  id: string;
  navn: string;
  roller: ("kilde" | "bestiller" | "utfører")[];
  /** Navneformene aktøren står med i kildene, før sammenslåing. */
  skrivematter: string[];
  hendelser: AktorHendelse[];
  aarFra: number | null;
  aarTil: number | null;
  antall: Record<string, number>;
  kildeId: string | null;
  kildeGrunnlag: string | null;
  grunnlag: string;
}

export interface Undersokelse {
  id: string;
  aar: number;
  utforende: string;
  oppdragsgiver: string;
  antallStasjoner: number;
  stasjoner: string[];
  rapportId: string | null;
}

/* ── Datasettene, typet ──────────────────────────────────── */

interface Datasett {
  STASJONER: Stasjon[];
  RAPPORTER: Rapport[];
  KILDER: Kilde[];
  TILTAK: Tiltak[];
  HENDELSER: Hendelse[];
  UNDERSOKELSER: Undersokelse[];
  AKTORER: Aktor[];
  KILDETYPER: { navn: string; antallKilder: number; m350relasjon: string }[];
  STOFF: {
    navn: string; status: string; faktor: number | null;
    fraTyper: string[]; fraKilder: string[];
    klassefordeling: Record<string, number> | null;
  }[];
  FLYT: { fra: string; til: string; vekt: number }[];
  HOTSPOT: Record<string, unknown>;
  SAMLET: { samlet: string; utvikling: string[]; uenighet: string[]; hull: string[] };
  META: Record<string, unknown>;
  TIDSROM: { fra: number; til: number; merknad?: string };
  MALINGER_PER_AAR: Record<string, number>;
  /** Bare områdene som forteller historikken som tekst har denne. */
  HISTORIE: Historie | null;
  GEOGRAFI: {
    bbox: { v: number; s: number; o: number; n: number };
    senter: { lat: number; lng: number };
    stedsnavn: { navn: string; lat: number; lng: number; antallStasjoner: number; grunnlag: string }[];
    merknad: string;
  };
}

function lastDatasett(id: OmradeId): Datasett {
  const d = DATASETT[id];
  return {
    STASJONER: d.D_STASJONER as unknown as Stasjon[],
    RAPPORTER: d.D_RAPPORTER as unknown as Rapport[],
    KILDER: d.D_KILDER as unknown as Kilde[],
    TILTAK: d.D_TILTAK as unknown as Tiltak[],
    HENDELSER: d.D_HENDELSER as unknown as Hendelse[],
    UNDERSOKELSER: d.D_UNDERSOKELSER as unknown as Undersokelse[],
    AKTORER: d.D_AKTORER as unknown as Aktor[],
    KILDETYPER: d.D_KILDETYPER as unknown as Datasett["KILDETYPER"],
    STOFF: d.D_STOFF as unknown as Datasett["STOFF"],
    FLYT: d.D_FLYT as unknown as Datasett["FLYT"],
    HOTSPOT: d.D_HOTSPOT as unknown as Record<string, unknown>,
    SAMLET: d.D_SAMLET as unknown as Datasett["SAMLET"],
    META: d.D_STASJONER_META as unknown as Record<string, unknown>,
    TIDSROM: d.D_TIDSROM as unknown as Datasett["TIDSROM"],
    MALINGER_PER_AAR: d.D_MALINGER_PER_AAR as unknown as Record<string, number>,
    HISTORIE: ("D_HISTORIE" in d
      ? (d as { D_HISTORIE: unknown }).D_HISTORIE as Historie
      : null),
    GEOGRAFI: d.D_GEOGRAFI as unknown as Datasett["GEOGRAFI"],
  };
}

let aktivId: OmradeId = STANDARD_OMRADE;
let D = lastDatasett(aktivId);

export let STASJONER = D.STASJONER;
export let RAPPORTER = D.RAPPORTER;
export let KILDER = D.KILDER;
export let TILTAK = D.TILTAK;
export let HENDELSER = D.HENDELSER;
export let UNDERSOKELSER = D.UNDERSOKELSER;
export let AKTORER = D.AKTORER;
export let KILDETYPER = D.KILDETYPER;
export let STOFF = D.STOFF;
export let FLYT = D.FLYT;
export let HOTSPOT = D.HOTSPOT;
export let SAMLET = D.SAMLET;
export let META = D.META;
export let TIDSROM = D.TIDSROM;
export let MALINGER_PER_AAR = D.MALINGER_PER_AAR;
export let GEOGRAFI = D.GEOGRAFI;
export let HISTORIE = D.HISTORIE;

/**
 * Området flaten handler om. Alt her kommer fra datafilene, slik at et bytte av
 * område bare krever nye data — ikke endringer i komponentene.
 */
function byggOmrade(d: Datasett) {
  const m = d.META as {
    id?: string; omrade?: string; kommune?: string; undertittel?: string;
    antall?: number; antallMalinger?: number; visning?: string;
  };
  return {
    id: m.id ?? aktivId,
    navn: m.omrade ?? "området",
    kommune: m.kommune ?? "",
    undertittel: m.undertittel ?? "",
    antallStasjoner: m.antall ?? d.STASJONER.length,
    antallMalinger: m.antallMalinger ?? 0,
    visning: m.visning ?? "kort",
    senter: d.GEOGRAFI.senter,
  };
}
export let OMRADE = byggOmrade(D);

let STASJON_ETTER_NAVN = new Map<string, Stasjon>(D.STASJONER.map((s) => [s.navn, s]));

/** Aksen dekker hele datasettet; den settes om når området byttes. */
export let AAR_FRA = D.TIDSROM.fra;
export let AAR_TIL = D.TIDSROM.til;

/** Hvilket område som er lastet nå. */
export const aktivtOmrade = (): OmradeId => aktivId;

/**
 * Peker alle bindingene over på et annet område.
 *
 * Kalles før arbeidsflaten monteres på nytt, aldri under en tegning — ellers
 * ville en komponent kunne lese halve det gamle og halve det nye datasettet.
 */
export function settOmrade(id: OmradeId): void {
  aktivId = id;
  D = lastDatasett(id);
  STASJONER = D.STASJONER;
  RAPPORTER = D.RAPPORTER;
  KILDER = D.KILDER;
  TILTAK = D.TILTAK;
  HENDELSER = D.HENDELSER;
  UNDERSOKELSER = D.UNDERSOKELSER;
  AKTORER = D.AKTORER;
  KILDETYPER = D.KILDETYPER;
  STOFF = D.STOFF;
  FLYT = D.FLYT;
  HOTSPOT = D.HOTSPOT;
  SAMLET = D.SAMLET;
  META = D.META;
  TIDSROM = D.TIDSROM;
  MALINGER_PER_AAR = D.MALINGER_PER_AAR;
  GEOGRAFI = D.GEOGRAFI;
  HISTORIE = D.HISTORIE;
  OMRADE = byggOmrade(D);
  STASJON_ETTER_NAVN = new Map(D.STASJONER.map((s) => [s.navn, s]));
  AAR_FRA = D.TIDSROM.fra;
  AAR_TIL = D.TIDSROM.til;
}

/* ── M-608 ────────────────────────────────────────────────────────────── */

export interface Klasse { niva: number; romertall: string; navn: string; farge: string; }
export const KLASSER = (D_M608 as unknown as { klasser: Klasse[] }).klasser;

const FARGE_ETTER_NIVA = new Map<number, string>(KLASSER.map((k) => [k.niva, k.farge]));
export const INGEN_DATA_FARGE = "#b9b3a8";

export function klassefarge(niva: number | null | undefined): string {
  if (niva == null) return INGEN_DATA_FARGE;
  return FARGE_ETTER_NIVA.get(niva) ?? INGEN_DATA_FARGE;
}

/** Klasse III er gul — hvit tekst på den er uleselig. */
export function klassetekstfarge(niva: number | null | undefined): string {
  return niva === 3 || niva == null ? "#0d2730" : "#ffffff";
}

export function klasseNavn(niva: number | null | undefined): string {
  if (niva == null) return "Ingen klassifiserte funn";
  const k = KLASSER.find((x) => x.niva === niva);
  return k ? `${k.romertall} — ${k.navn}` : String(niva);
}

/* ── Oppslag ──────────────────────────────────────────────────────────── */

export const finnStasjon = (navn: string) => STASJON_ETTER_NAVN.get(navn) ?? null;
export const finnRapport = (id: string | null) =>
  id ? RAPPORTER.find((r) => r.id === id) ?? null : null;
export const finnKilde = (id: string | null) =>
  id ? KILDER.find((k) => k.id === id) ?? null : null;
export const finnTiltak = (id: string | null) =>
  id ? TILTAK.find((t) => t.id === id) ?? null : null;

/** Tiltakene en rapport dokumenterer — koblingen ligger på tiltaket. */
export function tiltakForRapport(rapportId: string): Tiltak[] {
  return TILTAK.filter((t) => t.rapportId === rapportId);
}

/** Kildene som er knyttet til minst én av rapportens punkter. */
export function kilderForRapport(r: Rapport): Kilde[] {
  if (r.kildeIder.length) {
    return r.kildeIder.map((id) => finnKilde(id)).filter(Boolean) as Kilde[];
  }
  const dekket = new Set(r.dekkerPunkter);
  return KILDER.filter((k) => k.koblet.some((navn) => dekket.has(navn)));
}

/** Rapportene som navngir en stasjon. */
export function rapporterForStasjon(navn: string): Rapport[] {
  return RAPPORTER.filter((r) => r.dekkerPunkter.includes(navn));
}

export function kilderForStasjon(navn: string): Kilde[] {
  return KILDER.filter((k) => k.koblet.includes(navn));
}

/** Stasjonene en rapport dekker, som faktiske stasjoner. */
export function stasjonerForRapport(r: Rapport): Stasjon[] {
  return r.dekkerPunkter.map((n) => finnStasjon(n)).filter(Boolean) as Stasjon[];
}

/** Punktene rapporten bringer som ikke finnes i Vannmiljø. */
export function nyeStasjonerForRapport(r: Rapport): Stasjon[] {
  return r.nyePunkter.map((n) => finnStasjon(n)).filter(Boolean) as Stasjon[];
}

/** Alle punktene en rapport viser i kartet — dens egne og dens nye. */
export function alleStasjonerForRapport(r: Rapport): Stasjon[] {
  const sett = new Set<string>();
  return [...stasjonerForRapport(r), ...nyeStasjonerForRapport(r)].filter((s) => {
    if (sett.has(s.navn)) return false;
    sett.add(s.navn);
    return true;
  });
}

export function stasjonerForTiltak(t: Tiltak): Stasjon[] {
  return t.punkter.map((n) => finnStasjon(n)).filter(Boolean) as Stasjon[];
}

export function stasjonerForKilde(k: Kilde): Stasjon[] {
  return k.koblet.map((n) => finnStasjon(n)).filter(Boolean) as Stasjon[];
}

/* ── Tid ──────────────────────────────────────────────────────────────── */

export function klemAar(a: number): number {
  return Math.min(AAR_TIL, Math.max(AAR_FRA, Math.round(a)));
}

/** En stasjon er «kjent» ved et årstall når den første gang ble målt da eller før. */
export function synligVedAar(s: Stasjon, aar: number): boolean {
  return s.aarFra == null || s.aarFra <= aar;
}

/**
 * Lista er tidslinja i listeform: ett kort per rapport, eldst først.
 *
 * Undersøkelsene i måledataene står ikke i lista. De fleste av dem har ingen
 * rapport — punktene deres navngir ingen — og et kort per undersøkelse gjorde at
 * lista leste som om det fantes flere rapporter enn det gjør. Antallet står i
 * listehodet i stedet.
 */
export function byggListe(): Rapport[] {
  return [...RAPPORTER].sort((a, b) => {
    if (a.aar === null && b.aar === null) return 0;
    if (a.aar === null) return 1;
    if (b.aar === null) return -1;
    return a.aar - b.aar;
  });
}

/** Undersøkelser uten en rapport i datasettet. */
export function undersokelserUtenRapport(): Undersokelse[] {
  return UNDERSOKELSER.filter((u) => !u.rapportId || !finnRapport(u.rapportId));
}

/* ── Fortellingen ─────────────────────────────────────────────────────── */

/** Id-en et avsnitt får: kapittelet pluss plassen i det. */
export const avsnittId = (kapittel: string, i: number) => `${kapittel}#${i}`;

export function finnAvsnitt(id: string | null): HistorieAvsnitt | null {
  if (!id || !HISTORIE) return null;
  const [kap, i] = id.split("#");
  return HISTORIE.kapitler.find((k) => k.id === kap)?.avsnitt[Number(i)] ?? null;
}

/**
 * Hva kartet skal vise for ett avsnitt.
 *
 * Nevner avsnittet punkter, er det de punktene. Nevner det bare en kilde eller
 * et tiltak, tar vi punktene som hører til dem — ellers ville kartet blitt tomt
 * for et avsnitt som handler om noe stedfestet.
 */
export function kartFor(a: HistorieAvsnitt): {
  stasjoner: Stasjon[]; kilder: Kilde[]; tiltak: Tiltak[];
} {
  const kilder = (a.kilder ?? []).map((id) => finnKilde(id)).filter(Boolean) as Kilde[];
  const tiltak = (a.tiltak ?? []).map((id) => finnTiltak(id)).filter(Boolean) as Tiltak[];
  const navn = new Set(a.punkter ?? []);
  if (!navn.size) {
    for (const t of tiltak) t.punkter.forEach((n) => navn.add(n));
    for (const k of kilder) k.koblet.forEach((n) => navn.add(n));
  }
  const stasjoner = [...navn].map((n) => finnStasjon(n)).filter(Boolean) as Stasjon[];
  return { stasjoner, kilder, tiltak };
}

/** Stasjonene som ble målt et gitt år, fra tidslinja. */
export function stasjonerForAar(aar: number): Stasjon[] {
  const rad = HISTORIE?.tidslinje.find((r) => r.aar === aar);
  return (rad?.punkter ?? []).map((n) => finnStasjon(n)).filter(Boolean) as Stasjon[];
}

/** Stasjonene en aktørhendelse gjelder. */
export function stasjonerForHendelse(h: AktorHendelse): Stasjon[] {
  return h.punkter.map((n) => finnStasjon(n)).filter(Boolean) as Stasjon[];
}

export const finnAktor = (id: string | null) =>
  id ? AKTORER.find((a) => a.id === id) ?? null : null;

/** Hendelsen bak en id på formen «a-as-nymo#3». */
export function finnAktorHendelse(id: string | null): AktorHendelse | null {
  if (!id) return null;
  const [aid, i] = id.split("#");
  return finnAktor(aid)?.hendelser[Number(i)] ?? null;
}

/**
 * Hendelsene bak et merke i en aktørbane.
 *
 * Ett merke er ett år og ett slag — ga NIVA ut fem rapporter i 1986, er det ett
 * merke, ikke fem oppå hverandre. Gruppa hentes fram igjen her, slik at kartet
 * og statuslinja viser alt merket dekker.
 */
export function hendelsegruppe(id: string | null): AktorHendelse[] {
  const en = finnAktorHendelse(id);
  const a = finnAktor((id ?? "").split("#")[0]);
  if (!en || !a) return en ? [en] : [];
  return a.hendelser.filter((h) => h.aar === en.aar && h.slag === en.slag);
}

/** Punktene et merke dekker, uten dubletter. */
export function stasjonerForGruppe(id: string | null): Stasjon[] {
  const navn = new Set(hendelsegruppe(id).flatMap((h) => h.punkter));
  return [...navn].map((n) => finnStasjon(n)).filter(Boolean) as Stasjon[];
}

/** Alle punktene en aktør har rørt, på tvers av hendelsene sine. */
export function stasjonerForAktor(a: Aktor): Stasjon[] {
  const navn = new Set(a.hendelser.flatMap((h) => h.punkter));
  return [...navn].map((n) => finnStasjon(n)).filter(Boolean) as Stasjon[];
}
