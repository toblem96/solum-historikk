import { useEffect, useMemo, useReducer, useState } from "react";
import "./stil.css";
import { Kart, FLISER } from "./Kart";
import { Liste } from "./Liste";
import { Historie } from "./Historie";
import { Aktorbaner } from "./Aktorbaner";
import { Panel } from "./Panel";
import { Kildeflyt } from "./Kildeflyt";
import { Rundtur, harSettRundtur, husk } from "./Rundtur";
import { TilstandCtx, reducer, startTilstand, type Bakgrunn } from "./tilstand";
import {
  STASJONER, KLASSER, KILDER, RAPPORTER, OMRADE_FANER, STANDARD_OMRADE, HISTORIE,
  OMRADE, finnAktor, finnAktorHendelse, stasjonerForAktor, stasjonerForGruppe,
  hendelsegruppe,
  klassefarge, finnRapport, finnTiltak, alleStasjonerForRapport, kilderForRapport,
  finnAvsnitt, kartFor, stasjonerForAar,
  settOmrade, type OmradeId,
} from "./domene";

function Overlegg({ tittel, under, onLukk, note, children }: {
  tittel: string; under?: React.ReactNode; onLukk: () => void;
  note?: React.ReactNode; children: React.ReactNode;
}) {
  useEffect(() => {
    const paaTast = (e: KeyboardEvent) => { if (e.key === "Escape") onLukk(); };
    window.addEventListener("keydown", paaTast);
    return () => window.removeEventListener("keydown", paaTast);
  }, [onLukk]);
  return (
    <div className="overlegg" onClick={(e) => { if (e.target === e.currentTarget) onLukk(); }}>
      <div className="ovboks" style={{ maxWidth: 1240 }}>
        <div className="ovhode">
          <h2>{tittel}</h2>
          {under && <span className="under">{under}</span>}
          <button type="button" className="lukk" onClick={onLukk}>Lukk ✕</button>
        </div>
        <div className="ovkropp">{children}</div>
        {note && <div className="ovnote">{note}</div>}
      </div>
    </div>
  );
}

/** Kort navn på en rapport i kartstatusen. Har den ikke år — fordi den ikke
 *  finnes i arkivet — er rapportnummeret det eneste som identifiserer den. */
function merkelapp(r: { utforer: string; aar: number | null; rapportnummer?: string | null }) {
  if (r.aar) return `${r.utforer} ${r.aar}`;
  return r.rapportnummer ?? r.utforer;
}

/**
 * Arbeidsflaten for ett område.
 *
 * Den monteres på nytt når området byttes — nøkkelen i App er område-id-en. Da
 * nullstilles både valget, kartutsnittet og reduseren, og ingenting kan peke på
 * en rapport eller stasjon som hører til det forrige området.
 */
function Arbeidsflate({ rundturApen, settRundtur }: {
  rundturApen: boolean; settRundtur: (p: boolean) => void;
}) {
  const [s, send] = useReducer(reducer, startTilstand);
  const ctx = useMemo(() => ({ s, send }), [s]);

  useEffect(() => {
    const paaTast = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
      if (e.key === "Escape") send({ type: "tomtValg" });
    };
    window.addEventListener("keydown", paaTast);
    return () => window.removeEventListener("keydown", paaTast);
  }, []);

  const valgtRapport = s.valg.slag === "rapport" ? finnRapport(s.valg.id) : null;
  const valgtTiltak = s.valg.slag === "tiltak" ? finnTiltak(s.valg.id) : null;
  const oppsummering = s.valg.slag === "oppsummering";
  const valgtAvsnitt = s.valg.slag === "avsnitt" ? finnAvsnitt(s.valg.id) : null;

  /* Punktene rapporten viser — dens egne pluss dem den bringer selv. */
  const rapportPunkter = valgtRapport ? alleStasjonerForRapport(valgtRapport) : [];

  const synlige = rapportPunkter.length
    ? rapportPunkter.length
    : valgtTiltak
    ? valgtTiltak.punkter.length
    : STASJONER.length;

  /* Legenden teller det kartet faktisk viser — ellers står den og lyver om et
     utsnitt den ikke gjelder for. */
  const valgtAar = s.valg.slag === "aar" ? s.valg.aar : null;
  const valgtHendelse = s.valg.slag === "aktorHendelse" ? finnAktorHendelse(s.valg.id) : null;
  const valgtAktor = s.valg.slag === "aktor" ? finnAktor(s.valg.id) : null;
  const avsnittPunkter = valgtAvsnitt
    ? kartFor(valgtAvsnitt).stasjoner
    : valgtAar != null
    ? stasjonerForAar(valgtAar)
    : valgtHendelse
    ? stasjonerForGruppe(s.valg.slag === "aktorHendelse" ? s.valg.id : null)
    : valgtAktor
    ? stasjonerForAktor(valgtAktor)
    : [];

  const fordeling = useMemo(() => {
    const tiltakets = valgtTiltak
      ? (valgtTiltak.punkter.map((n) => STASJONER.find((x) => x.navn === n))
          .filter(Boolean) as typeof STASJONER)
      : [];
    const liste = avsnittPunkter.length
      ? avsnittPunkter
      : rapportPunkter.length
      ? rapportPunkter
      : tiltakets.length
      ? tiltakets
      : STASJONER;
    const m = new Map<number | null, number>();
    for (const st of liste) m.set(st.klasse, (m.get(st.klasse) ?? 0) + 1);
    return m;
  }, [valgtRapport, valgtTiltak, s.valg]);

  /* Lista viker for panelet — det er panelet som trenger plassen, og kartet får
     resten. «Tilbake til lista» i panelet henter den fram igjen. */
  /* Avsnitt og år styrer bare kartet — fortellingen skal bli stående, ellers
     mister man plassen sin i teksten hver gang man ser på noe. */
  const panelApent = !["ingen", "avsnitt", "aar", "aktor", "aktorHendelse"]
    .includes(s.valg.slag);

  const flytRapport = s.flyt?.slag === "rapport" ? finnRapport(s.flyt.id) : null;

  return (
    <TilstandCtx.Provider value={ctx}>
      <div className="ws">
        <div className="kartvert">
          <Kart />

          <div className="kartverktoy">
            <div className="vgruppe">
              {(Object.keys(FLISER) as Bakgrunn[]).map((b) => (
                <button
                  key={b}
                  type="button"
                  className={s.bakgrunn === b ? "on" : ""}
                  onClick={() => send({ type: "settBakgrunn", bakgrunn: b })}
                >
                  {FLISER[b].navn}
                </button>
              ))}
            </div>
            <div className="vgruppe">
              <button type="button" className={s.visKilder ? "on" : ""} onClick={() => send({ type: "veksle", felt: "visKilder" })}>
                Kilder
              </button>
              <button type="button" className={s.visTiltak ? "on" : ""} onClick={() => send({ type: "veksle", felt: "visTiltak" })}>
                Tiltak
              </button>
              <button type="button" title="Vis omvisningen igjen" onClick={() => settRundtur(true)}>
                ?
              </button>
            </div>
          </div>

          {(valgtRapport || valgtTiltak || oppsummering || valgtAvsnitt
            || valgtAar != null || valgtHendelse || valgtAktor) && (
            <div className="kartstatus">
              {valgtHendelse ? (
                <>
                  Kartet viser <b>{valgtHendelse.aar}</b> — {valgtHendelse.tekst}.
                </>
              ) : valgtAktor ? (
                <>
                  Kartet viser alt <b>{valgtAktor.navn}</b> har rørt —{" "}
                  {avsnittPunkter.length} punkter.
                </>
              ) : valgtAar != null ? (
                <>
                  Kartet viser <b>{valgtAar}</b> — {avsnittPunkter.length}{" "}
                  {avsnittPunkter.length === 1 ? "stasjon" : "stasjoner"} målt det året.
                </>
              ) : valgtAvsnitt ? (
                <>
                  Kartet viser <b>det avsnittet handler om</b> — {avsnittPunkter.length}{" "}
                  {avsnittPunkter.length === 1 ? "punkt" : "punkter"}
                  {(valgtAvsnitt.kilder?.length ?? 0) > 0 && <>, {valgtAvsnitt.kilder!.length} kilde</>}
                  {(valgtAvsnitt.tiltak?.length ?? 0) > 0 && <>, {valgtAvsnitt.tiltak!.length} tiltak</>}.
                </>
              ) : oppsummering ? (
                <>Kartet viser <b>hele området</b> — {STASJONER.length} punkter, {KILDER.length} kilder.</>
              ) : valgtRapport && rapportPunkter.length === 0 ? (
                <>
                  <b>{merkelapp(valgtRapport)}</b>{" "}
                  navngir ingen av sedimentstasjonene — kartet står som det var.
                </>
              ) : (
                <>
                  Kartet viser <b>bare</b> {valgtRapport ? "rapporten" : "tiltaket"}{" "}
                  <b>{valgtRapport ? merkelapp(valgtRapport) : valgtTiltak!.navn}</b>
                  {" "}— {synlige} punkter
                  {valgtRapport && valgtRapport.nyePunkter.length > 0 && (
                    <>, {valgtRapport.nyePunkter.length} av dem bare kjent fra rapporten</>
                  )}.
                </>
              )}
              <button type="button" onClick={() => send({ type: "tomtValg" })}>vis alt igjen</button>
            </div>
          )}


          <div className="legende">
            <div className="legende-rad">
              {KLASSER.map((k) => (
                <span key={k.niva}>
                  <i className="prikk" style={{ background: k.farge }} />
                  {k.romertall} <span className="tall">{fordeling.get(k.niva) ?? 0}</span>
                </span>
              ))}
              <span>
                <i className="prikk" style={{ background: klassefarge(null) }} />
                uten funn <span className="tall">{fordeling.get(null) ?? 0}</span>
              </span>
            </div>
            <div className="legende-rad">
              <span>Bakgrunn: {FLISER[s.bakgrunn].navn} fra Kartverket</span>
              <span>Fylt prikk: målt stasjon i Vannmiljø</span>
              <span>Stiplet ring: punkt bare beskrevet i en rapport</span>
            </div>
          </div>
        </div>

        {panelApent ? (
          <div className="panelvert bred"><Panel /></div>
        ) : OMRADE.visning === "aktorer" ? (
          <div className="listevert historievert"><Aktorbaner /></div>
        ) : HISTORIE ? (
          <div className="listevert historievert"><Historie /></div>
        ) : (
          <div className="listevert"><Liste /></div>
        )}
      </div>

      {s.flyt && (
        <Overlegg
          tittel={flytRapport ? `Kildeflyt — ${flytRapport.rapportnummer ?? flytRapport.tittel}` : "Kildeflyt for hele området"}
          under={
            flytRapport
              ? <>Bare stoffene og kildene som hører til denne rapporten
                  {" — "}{kilderForRapport(flytRapport).length}{" "}
                  {kilderForRapport(flytRapport).length === 1 ? "kilde" : "kilder"}.</>
              : <>{KILDER.length} kilder · {RAPPORTER.length} rapporter</>
          }
          onLukk={() => send({ type: "lukkFlyt" })}
          note={
            <>
              Heltrukket grønn = <b>belagt</b> kilde, dokumentert med måling eller rapport.
              Stiplet beige = <b>antatt</b>. Tykkelsen følger poengsummen. Bransjekoblingen
              mellom kildetype og stoff er M-350 vedlegg X tabell X-1, som M-409 § 3.2.2
              fotnote 2 viser til. Klassefordelingen per stoff er talt opp av de faktiske
              målingene i området. Hvil over en søyle — kilde, bransje, stoff eller klasse —
              så lyser alt som henger sammen med den.
            </>
          }
        >
          <Kildeflyt rapport={flytRapport} />
        </Overlegg>
      )}

      {rundturApen && <Rundtur onLukk={() => { husk(); settRundtur(false); }} />}

      {s.figurApen && (
        <Overlegg
          tittel={s.figurApen.tittel}
          onLukk={() => send({ type: "lukkFigur" })}
          note={s.figurApen.tekst}
        >
          <img src={s.figurApen.fil} alt={s.figurApen.tittel} />
        </Overlegg>
      )}
    </TilstandCtx.Provider>
  );
}

export default function App() {
  /* Hvilket prosjekt vi ser på. Fanene bytter mellom dem; arbeidsflaten under
     monteres på nytt, slik at ingenting følger med over. */
  const [omrade, velgOmrade] = useState<OmradeId>(STANDARD_OMRADE);

  /* Omvisningen vises første gang, og kan hentes fram igjen med «?» over kartet. */
  const [rundturApen, settRundtur] = useState(() => !harSettRundtur());

  const bytt = (id: OmradeId) => {
    if (id === omrade) return;
    settOmrade(id);
    velgOmrade(id);
  };

  return (
    <div className="app">
      <nav className="faner" aria-label="Prosjekt">
        {OMRADE_FANER.map((f) => (
          <button
            key={f.id}
            type="button"
            className={f.id === omrade ? "on" : ""}
            aria-current={f.id === omrade ? "page" : undefined}
            onClick={() => bytt(f.id)}
          >
            <b>{f.navn}</b>
            <span>{f.kommune} · {f.antallStasjoner} punkter</span>
          </button>
        ))}
      </nav>

      <Arbeidsflate key={omrade} rundturApen={rundturApen} settRundtur={settRundtur} />
    </div>
  );
}
