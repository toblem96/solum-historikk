/**
 * Én tilstand for hele flaten, med en reducer. Alt som skjer i appen går gjennom
 * en handling herfra — komponentene eier ingen egen sannhet om hva som er valgt.
 *
 * Tidsaksen er tatt bort, og med den årsfilteret: kartet viser alle punkter, og
 * det er valget i lista som avgjør hva som vises.
 */
import { createContext, useContext } from "react";

export type Bakgrunn = "graatone" | "topo" | "sjokart";

/** Hvilken kildeflyt overlegget viser — hele området, eller én rapports. */
export type Flyt = null | { slag: "total" } | { slag: "rapport"; id: string };

export interface Tilstand {
  /** Hva som eier panelet til høyre. Bare én om gangen. */
  valg:
    | { slag: "ingen" }
    | { slag: "oppsummering" }
    | { slag: "rapport"; id: string }
    | { slag: "kilde"; id: string }
    | { slag: "tiltak"; id: string }
    | { slag: "stasjon"; navn: string };
  /** Rapporten musepekeren hviler over. Kartet viser den så lenge ingenting
     annet er valgt — du ser hva kortet gjelder før du klikker. */
  forhandsvist: string | null;
  visKilder: boolean;
  visTiltak: boolean;
  bakgrunn: Bakgrunn;
  flyt: Flyt;
  figurApen: { fil: string; tittel: string; tekst: string } | null;
  /** Teller opp hver gang kartet skal zoome til det valgte. */
  zoomOnske: number;
}

export const startTilstand: Tilstand = {
  valg: { slag: "ingen" },
  forhandsvist: null,
  visKilder: false,
  visTiltak: true,
  bakgrunn: "graatone",
  flyt: null,
  figurApen: null,
  zoomOnske: 0,
};

export type Handling =
  | { type: "forhandsvis"; id: string | null }
  | { type: "velgOppsummering" }
  | { type: "velgRapport"; id: string | null }
  | { type: "velgKilde"; id: string | null }
  | { type: "velgTiltak"; id: string | null }
  | { type: "velgStasjon"; navn: string | null }
  | { type: "tomtValg" }
  | { type: "veksle"; felt: "visKilder" | "visTiltak" }
  | { type: "settBakgrunn"; bakgrunn: Bakgrunn }
  | { type: "apneFlyt"; flyt: Flyt }
  | { type: "lukkFlyt" }
  | { type: "apneFigur"; figur: { fil: string; tittel: string; tekst: string } }
  | { type: "lukkFigur" }
  | { type: "zoomTilValg" };

export function reducer(s: Tilstand, h: Handling): Tilstand {
  switch (h.type) {
    case "forhandsvis":
      if (s.forhandsvist === h.id) return s;
      return { ...s, forhandsvist: h.id };
    case "velgOppsummering":
      /* Oppsummeringen viser hele området: alle punkter, alle kilder, alle tiltak. */
      return {
        ...s,
        valg: { slag: "oppsummering" },
        visKilder: true,
        visTiltak: true,
        zoomOnske: s.zoomOnske + 1,
      };
    case "velgRapport":
      if (!h.id) return { ...s, valg: { slag: "ingen" } };
      return { ...s, valg: { slag: "rapport", id: h.id }, forhandsvist: null, zoomOnske: s.zoomOnske + 1 };
    case "velgKilde":
      if (!h.id) return { ...s, valg: { slag: "ingen" } };
      /* Å velge en kilde skrur på kildelaget — ellers peker panelet på noe kartet
         ikke viser. */
      return { ...s, valg: { slag: "kilde", id: h.id }, visKilder: true, zoomOnske: s.zoomOnske + 1 };
    case "velgTiltak":
      if (!h.id) return { ...s, valg: { slag: "ingen" } };
      return { ...s, valg: { slag: "tiltak", id: h.id }, visTiltak: true, zoomOnske: s.zoomOnske + 1 };
    case "velgStasjon":
      if (!h.navn) return { ...s, valg: { slag: "ingen" } };
      return { ...s, valg: { slag: "stasjon", navn: h.navn } };
    case "tomtValg":
      return { ...s, valg: { slag: "ingen" } };
    case "veksle":
      return { ...s, [h.felt]: !s[h.felt] } as Tilstand;
    case "settBakgrunn":
      return { ...s, bakgrunn: h.bakgrunn };
    case "apneFlyt":
      return { ...s, flyt: h.flyt };
    case "lukkFlyt":
      return { ...s, flyt: null };
    case "apneFigur":
      return { ...s, figurApen: h.figur };
    case "lukkFigur":
      return { ...s, figurApen: null };
    case "zoomTilValg":
      return { ...s, zoomOnske: s.zoomOnske + 1 };
    default:
      return s;
  }
}

export const TilstandCtx = createContext<{
  s: Tilstand;
  send: (h: Handling) => void;
}>({ s: startTilstand, send: () => {} });

export const useTilstand = () => useContext(TilstandCtx);
