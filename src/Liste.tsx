/**
 * Rapportlista — ett kort per rapport, eldst først, med oppsummeringen øverst.
 *
 * Tidsaksen og rull-synkroniseringen er tatt bort. Lista er nå bare en liste:
 * du velger et kort, panelet åpner seg, og lista viker for det.
 */
import { useMemo } from "react";
import {
  byggListe, RAPPORTER, UNDERSOKELSER, undersokelserUtenRapport,
  tiltakForRapport, kilderForRapport, OMRADE, KILDER, TILTAK, STASJONER,
  type Rapport,
} from "./domene";
import { useTilstand } from "./tilstand";

function tillitChip(r: Rapport) {
  if (r.status === "ikke_funnet") return <span className="chip lav">ikke funnet</span>;
  if (r.tillit === "hoy") return <span className="chip ok">sikkert treff</span>;
  if (r.tillit === "middels") return <span className="chip mid">ganske sikkert</span>;
  return <span className="chip lav">usikkert treff</span>;
}

function OppsummeringKort({ valgt, onKlikk }: { valgt: boolean; onKlikk: () => void }) {
  const fraRapport = STASJONER.filter((s) => s.opphav && s.opphav !== "Vannmiljø").length;
  /* «rapporter» i lista er rapportnumre punktene navngir. Hvor mange av dem som
     faktisk lot seg slå opp i et arkiv, er en annen sak — og den viktigste. */
  const funnet = RAPPORTER.filter((r) => r.status !== "ikke_funnet").length;
  return (
    <button
      type="button"
      className={["kort", "oppsum", valgt ? "valgt" : ""].filter(Boolean).join(" ")}
      onClick={onKlikk}
    >
      <span className="kort-thumb tom">hele{"\n"}området</span>
      <span className="kort-txt">
        <span className="kort-aar">Oppsummering</span>
        <h3>{OMRADE.navn} — alt vi vet om området</h3>
        <span className="meta">
          {funnet} av {RAPPORTER.length} rapporter funnet · {UNDERSOKELSER.length} undersøkelser
          {" · "}{KILDER.length} kilder
          <br />
          {STASJONER.length} punkter, {fraRapport} av dem bare kjent fra en rapport
        </span>
        <span className="chips">
          <span className="chip teal">alle punkter</span>
          <span className="chip">alle kilder</span>
          {TILTAK.length > 0 && <span className="chip">{TILTAK.length} tiltak</span>}
        </span>
      </span>
    </button>
  );
}

function RapportKort({ r, valgt, onKlikk, onHvil }: {
  r: Rapport; valgt: boolean; onKlikk: () => void; onHvil: (paa: boolean) => void;
}) {
  const tiltak = tiltakForRapport(r.id);
  const kilder = kilderForRapport(r);
  const figur = r.figurer[0];
  const mangler = r.status === "ikke_funnet";
  return (
    <button
      type="button"
      className={["kort", valgt ? "valgt" : "", mangler ? "mangler" : ""].filter(Boolean).join(" ")}
      onClick={onKlikk}
      onMouseEnter={() => onHvil(true)}
      onMouseLeave={() => onHvil(false)}
    >
      {figur ? (
        <span className="kort-thumb"><img src={figur.fil} alt="" /></span>
      ) : (
        <span className="kort-thumb tom">{mangler ? "ingen\nPDF" : "ingen\nfigur"}</span>
      )}
      <span className="kort-txt">
        <span className="kort-aar" title={r.aar ? undefined : "Rapporten finnes ikke i arkivet — året er måleåret til punktene som navngir den"}>
          {r.aar ?? (r.maaltFra ? `målt ${r.maaltFra}` : "år ukjent")}
        </span>
        <h3>{r.tittel}</h3>
        <span className="meta">
          {r.utforer}
          {r.oppdragsgiver ? ` for ${r.oppdragsgiver}` : ""}
          <br />
          {r.belegg}
        </span>
        <span className="chips">
          <span className={"chip" + (r.funnetVia === "sitat" ? " mid" : " ok")}>
            {r.funnetVia === "sitat" ? "via sitat" : "navngitt av punkt"}
          </span>
          {tillitChip(r)}
          {r.nyePunkter.length > 0 && (
            <span className="chip teal">{r.nyePunkter.length} nye punkter</span>
          )}
          {tiltak.length > 0 && <span className="chip">{tiltak.length} tiltak</span>}
          {kilder.length > 0 && <span className="chip">{kilder.length} kilder</span>}
        </span>
      </span>
    </button>
  );
}

export function Liste() {
  const { s, send } = useTilstand();
  const poster = useMemo<Rapport[]>(() => byggListe(), []);

  const valgtId = s.valg.slag === "rapport" ? s.valg.id : null;
  const antallRapporter = RAPPORTER.filter((r) => r.status !== "ikke_funnet").length;
  const antallMangler = RAPPORTER.filter((r) => r.status === "ikke_funnet").length;
  const utenRapport = undersokelserUtenRapport().length;

  return (
    <>
      <div className="listehode">
        <h2>{OMRADE.navn} — historikk i området</h2>
        <p className="under">
          {antallRapporter} {antallRapporter === 1 ? "rapport" : "rapporter"}
          {antallMangler > 0 ? `, ${antallMangler} mangler` : ""} — ett kort per rapport,
          eldst først.{" "}
          {utenRapport > 0 && (
            <>Ytterligere {utenRapport} undersøkelser finnes i måledataene uten at punktene
            navngir noen rapport.</>
          )}
        </p>
      </div>
      <div className="listekropp">
        <OppsummeringKort
          valgt={s.valg.slag === "oppsummering"}
          onKlikk={() => send({ type: "velgOppsummering" })}
        />
        {poster.map((r) => (
          <RapportKort
            key={r.id}
            r={r}
            valgt={valgtId === r.id}
            onKlikk={() => send({ type: "velgRapport", id: r.id })}
            onHvil={(paa) => send({ type: "forhandsvis", id: paa ? r.id : null })}
          />
        ))}
      </div>
    </>
  );
}
