/**
 * Aktørbanene — hvem gjorde hva, og på hvems regning.
 *
 * De andre visningene organiserer etter tid eller etter rapport. Denne
 * organiserer etter ansvar. Én bane per aktør, tid bortover, og et merke for
 * hver ting registrene sier de gjorde:
 *
 *   ●  bestilte en undersøkelse      ○  utførte målingene
 *   ▪  ga ut en rapport              ▨  tiltak
 *
 * Lista er ikke skrevet av noen. Den faller ut av oppdragsgiver- og
 * utførende-feltene i Vannmiljø, av rapportenes egne felt, og av kildene som er
 * belagt i Grunnforurensning. Rollene er hva registrene sier aktøren gjorde —
 * ingen kalles «myndighet» eller «forurenser» her. Den slutningen tilhører
 * leseren, og det er nettopp derfor visningen er verdt noe.
 */
import { useMemo, useState } from "react";
import {
  AKTORER, OMRADE, finnKilde, finnRapport,
  type Aktor, type AktorHendelse,
} from "./domene";
import { useTilstand } from "./tilstand";

const MERKE: Record<AktorHendelse["slag"], { tegn: string; navn: string }> = {
  bestilte:         { tegn: "bestilt", navn: "bestilte en undersøkelse" },
  bestilte_rapport: { tegn: "bestilt", navn: "oppdragsgiver for en rapport" },
  tiltak_bestilt:   { tegn: "tiltak",  navn: "bestilte et tiltak" },
  utforte:          { tegn: "utfort",  navn: "utførte målingene" },
  utga:             { tegn: "utgitt",  navn: "ga ut en rapport" },
  tiltak_utfort:    { tegn: "tiltak",  navn: "utførte et tiltak" },
};

const ROLLETEKST: Record<string, string> = {
  kilde: "ført opp som kilde i grunnlaget",
  bestiller: "bestiller eller oppdragsgiver",
  "utfører": "utførte målinger eller ga ut rapport",
};

function Bane({ a, fra, til }: { a: Aktor; fra: number; til: number }) {
  const { s, send } = useTilstand();
  const [apen, settApen] = useState(false);
  const valgt = s.valg.slag === "aktor" && s.valg.id === a.id;
  const spenn = Math.max(1, til - fra);
  const x = (aar: number) => ((aar - fra) / spenn) * 100;

  return (
    <div className={["bane", valgt ? "valgt" : ""].filter(Boolean).join(" ")}>
      <button
        type="button"
        className="bane-navn"
        onClick={() => { settApen(!apen); send({ type: valgt ? "tomtValg" : "velgAktor", id: a.id }); }}
        aria-expanded={apen}
      >
        <b>{a.navn}</b>
        <span className="bane-roller">
          {a.roller.map((r) => (
            <i key={r} className={"rolle " + r} title={ROLLETEKST[r]}>{r}</i>
          ))}
        </span>
      </button>

      <div className="bane-spor">
        <span className="bane-linje" />
        {grupper(a).map((g) => (
          <button
            key={g.nokkel}
            type="button"
            className={"merke " + MERKE[g.slag].tegn + (g.antall > 1 ? " flere" : "")}
            style={{ left: `${x(g.aar)}%` }}
            title={`${g.aar} · ${g.hendelser.map((h) => h.tekst).join(" · ")}`}
            onMouseEnter={() => send({ type: "forhandsvisAktor", id: `${a.id}#${g.forste}` })}
            onMouseLeave={() => send({ type: "forhandsvisAktor", id: null })}
            onClick={() => send({ type: "velgAktorHendelse", id: `${a.id}#${g.forste}` })}
          >
            <span className="sr">{g.aar}, {MERKE[g.slag].navn}, {g.antall} ganger</span>
          </button>
        ))}
      </div>

      {apen && (
        <div className="bane-mer">
          <p className="d">{a.grunnlag}</p>
          {a.kildeId && (
            <p className="d">
              Kilde i grunnlaget: <b>{finnKilde(a.kildeId)?.navn}</b> — {a.kildeGrunnlag}.
            </p>
          )}
          <ul>
            {a.hendelser.map((h, i) => {
              const r = finnRapport(h.ref);
              return (
                <li key={i}>
                  <span className="mono">{h.aar}</span>
                  <span>{h.tekst}</span>
                  {h.punkter.length > 0 && (
                    <button
                      type="button"
                      className="vis-i-kart"
                      onClick={() => send({ type: "velgAktorHendelse", id: `${a.id}#${i}` })}
                    >
                      {h.punkter.length} punkter i kartet
                    </button>
                  )}
                  {r?.url && (
                    <a href={r.url} target="_blank" rel="noreferrer" className="mono">arkiv →</a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Aktorbaner() {
  const { send } = useTilstand();

  const { fra, til, betaler, utforer, kilde } = useMemo(() => {
    const aar = AKTORER.flatMap((a) => a.hendelser.map((h) => h.aar));
    const b = [...AKTORER].sort(
      (x, y) => tell(y, "bestilte") + tell(y, "bestilte_rapport") + tell(y, "tiltak_bestilt")
              - (tell(x, "bestilte") + tell(x, "bestilte_rapport") + tell(x, "tiltak_bestilt")));
    const u = [...AKTORER].sort(
      (x, y) => tell(y, "utforte") + tell(y, "utga") + tell(y, "tiltak_utfort")
              - (tell(x, "utforte") + tell(x, "utga") + tell(x, "tiltak_utfort")));
    return {
      fra: Math.min(...aar), til: Math.max(...aar),
      betaler: b[0], utforer: u[0],
      kilde: AKTORER.find((a) => a.roller.includes("kilde")) ?? null,
    };
  }, []);

  const bestilteIalt = AKTORER.reduce((n, a) => n + tell(a, "bestilte"), 0);

  return (
    <div className="aktorer">
      <div className="akt-hode">
        <span className="hist-merke">{OMRADE.navn} · aktørene</span>
        <p className="akt-inn">
          Hvem gjorde hva, og på hvems regning. Lista er ikke skrevet — den faller ut av
          oppdragsgiver- og utførende-feltene i Vannmiljø, av rapportenes egne felt, og
          av kildene som er belagt i Grunnforurensning.
        </p>
        {kilde && tell(kilde, "bestilte") > 0 && (
          <p className="akt-funn">
            <b>{kilde.navn}</b> er den eneste aktøren som både er ført opp som kilde til
            forurensningen og betaler for undersøkelsene av den —{" "}
            {tell(kilde, "bestilte")} av {bestilteIalt} undersøkelser.
          </p>
        )}
        <p className="akt-inn">
          Rollene under er hva registrene sier aktøren gjorde. Ingen kalles «myndighet»
          eller «forurenser» her; det er en slutning, og den overlates til deg.
        </p>
        <button type="button" className="hist-alt" onClick={() => send({ type: "tomtValg" })}>
          vis hele området i kartet
        </button>
      </div>

      <div className="akt-akse">
        <span />
        <div className="akse-tall mono">
          <span>{fra}</span><span>{Math.round((fra + til) / 2)}</span><span>{til}</span>
        </div>
      </div>

      <div className="akt-baner">
        {AKTORER.map((a) => <Bane key={a.id} a={a} fra={fra} til={til} />)}
      </div>

      <div className="akt-tegn">
        <span><i className="merke bestilt statisk" /> bestilte</span>
        <span><i className="merke utfort statisk" /> utførte</span>
        <span><i className="merke utgitt statisk" /> ga ut rapport</span>
        <span><i className="merke tiltak statisk" /> tiltak</span>
      </div>

      <p className="akt-note">
        Mest bestilt: <b>{betaler.navn}</b>. Mest utført: <b>{utforer.navn}</b>.
        Trykk på et navn for hele lista, eller på et merke for å se punktene i kartet.
        Aktører som bare står som antatt kilde, har ingen bane — de har ikke gjort noe i
        registrene, og en tom bane ville påstått at de hadde.
      </p>
    </div>
  );
}

function tell(a: Aktor, slag: string) {
  return a.antall[slag] ?? 0;
}

/**
 * Merkene på en bane: ett per år og slag.
 *
 * NIVA ga ut fem rapporter i 1986. Uten gruppering blir det fem merker oppå
 * hverandre og banen leses som en strek. Gruppert blir det ett merke som er litt
 * større, og hele lista ligger i verktøytipset.
 */
function grupper(a: Aktor) {
  const kart = new Map<string, {
    nokkel: string; aar: number; slag: AktorHendelse["slag"];
    hendelser: AktorHendelse[]; forste: number; antall: number;
  }>();
  a.hendelser.forEach((h, i) => {
    const nokkel = `${h.aar}|${h.slag}`;
    const g = kart.get(nokkel);
    if (g) { g.hendelser.push(h); g.antall++; }
    else kart.set(nokkel, {
      nokkel, aar: h.aar, slag: h.slag, hendelser: [h], forste: i, antall: 1,
    });
  });
  return [...kart.values()];
}
