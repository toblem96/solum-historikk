/**
 * Historikken fortalt som tekst.
 *
 * Denne flaten har ingen rapportkort. Den forteller hva som har skjedd i
 * området, kronologisk, og hvert avsnitt bærer med seg hva det bygger på:
 *
 *   ▸ en rapport      merkelappen viser nummeret. Trykk, og referansen felles ut
 *                     med tittel, forfattere, hvordan den ble funnet, og lenke
 *                     til arkivposten.
 *   ▸ et register     Vannmiljø, Grunnforurensning eller en veileder, med hvor
 *                     i den det står.
 *   ▸ en måling       et tall regnet ut av måledataene under byggingen. Hold
 *                     pekeren over, så står regnestykket der.
 *
 * Hviler du over et avsnitt, viser kartet punktene, kildene og tiltakene det
 * handler om. Trykker du, blir det stående.
 *
 * Nederst ligger hele referanselista — også de rapportene fortellingen ikke
 * bruker. De kom med fordi referanselistene peker på dem, og det skal være mulig
 * å se hva regelen faktisk drar inn.
 */
import { useMemo, useState } from "react";
import {
  HISTORIE, OMRADE, RAPPORTER, finnRapport,
  type Belegg, type HistorieAvsnitt, type Rapport,
  avsnittId,
} from "./domene";
import { Tidslinje } from "./Tidslinje";
import { useTilstand } from "./tilstand";

const REGISTERNAVN: Record<string, string> = {
  vannmiljo: "Vannmiljø",
  grunnforurensning: "Grunnforurensning",
  m608: "M-608",
  m409: "M-409",
  m350: "M-350",
};

/** Kort merkelapp på et belegg — det som står inne i teksten. */
function beleggMerke(b: Belegg): string {
  if (b.slag === "rapport") {
    const r = finnRapport(b.ref);
    return r?.rapportnummer ?? b.ref;
  }
  if (b.slag === "register") return REGISTERNAVN[b.ref] ?? b.ref;
  return "målt";
}

function BeleggListe({ belegg }: { belegg: Belegg[] }) {
  const [apen, settApen] = useState<string | null>(null);
  const tall = HISTORIE?.tall ?? {};

  return (
    <div className="belegg">
      {belegg.map((b, i) => {
        const id = `${b.slag}-${b.ref}-${i}`;
        const r = b.slag === "rapport" ? finnRapport(b.ref) : null;
        const t = b.slag === "maaling" ? tall[b.ref] : null;
        return (
          <span key={id} className="belegg-rad">
            <button
              type="button"
              className={["belegg-merke", b.slag, apen === id ? "apen" : ""]
                .filter(Boolean).join(" ")}
              onClick={(e) => { e.stopPropagation(); settApen(apen === id ? null : id); }}
              title={t ? `${t.verdi} ${t.enhet} — ${t.forklaring}` : undefined}
            >
              {beleggMerke(b)}
            </button>
            {apen === id && (
              <span className="belegg-boks">
                {r && (
                  <>
                    <b>{r.tittel}</b>
                    <span className="d">
                      {r.utforer}{r.aar ? ` ${r.aar}` : ""}
                      {r.folk ? ` · ${r.folk}` : ""}
                      {r.sider ? ` · ${r.sider} s.` : ""}
                    </span>
                    {b.sted && <span className="d">Står i: {b.sted}</span>}
                    <span className="d">{r.begrunnelse}</span>
                    {r.url && (
                      <a href={r.url} target="_blank" rel="noreferrer">Åpne arkivposten →</a>
                    )}
                  </>
                )}
                {b.slag === "register" && (
                  <>
                    <b>{REGISTERNAVN[b.ref] ?? b.ref}</b>
                    {b.sted && <span className="d">{b.sted}</span>}
                  </>
                )}
                {t && (
                  <>
                    <b>{t.verdi} {t.enhet}</b>
                    <span className="d">{t.forklaring}</span>
                    <span className="d">
                      Regnet ut av måledataene under byggingen, ikke skrevet inn for hånd.
                    </span>
                  </>
                )}
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

function Avsnitt({ a, id }: { a: HistorieAvsnitt; id: string }) {
  const { s, send } = useTilstand();
  const valgt = s.valg.slag === "avsnitt" && s.valg.id === id;
  const antall =
    (a.punkter?.length ?? 0) + (a.kilder?.length ?? 0) + (a.tiltak?.length ?? 0);

  return (
    <div
      className={["avsnitt", valgt ? "valgt" : ""].filter(Boolean).join(" ")}
      onMouseEnter={() => antall && send({ type: "forhandsvisAvsnitt", id })}
      onMouseLeave={() => send({ type: "forhandsvisAvsnitt", id: null })}
    >
      <p>{a.tekst}</p>
      <div className="avsnitt-bunn">
        <BeleggListe belegg={a.belegg} />
        {antall > 0 && (
          <button
            type="button"
            className="vis-i-kart"
            onClick={() => send({ type: valgt ? "tomtValg" : "velgAvsnitt", id })}
          >
            {valgt ? "vis alt igjen" : "vis i kartet"}
          </button>
        )}
      </div>
    </div>
  );
}

function Referanse({ r }: { r: Rapport }) {
  const [apen, settApen] = useState(false);
  const brukt = HISTORIE?.brukteRapporter.includes(r.id);
  return (
    <li className={["ref-rad", brukt ? "brukt" : ""].filter(Boolean).join(" ")}>
      <button type="button" className="ref-hode" onClick={() => settApen(!apen)}>
        <span className="ref-nr">{r.rapportnummer}</span>
        <span className="ref-tittel">{r.tittel}</span>
        <span className="ref-merke">
          {r.funnetVia === "punkt" ? "navngitt av punkt" : `sitat, hopp ${r.hopp ?? 1}`}
        </span>
      </button>
      {apen && (
        <div className="ref-mer">
          <span className="d">
            {r.folk ?? "forfattere ikke oppgitt"}
            {r.sider ? ` · ${r.sider} s.` : ""}
            {r.oppdragsgiver ? ` · for ${r.oppdragsgiver}` : ""}
          </span>
          <span className="d">{r.begrunnelse}</span>
          {r.sitatBelegg?.map((b, i) => (
            <span key={i} className="sitat">
              <i>{b.retning} {b.motpart}, s. {b.side}
                {b.iReferanseliste ? " (referanselista)" : " (i teksten)"}:</i>{" "}
              «{b.sitat}»
            </span>
          ))}
          {r.sammendrag && <p className="ref-sammendrag">{r.sammendrag}</p>}
          {r.url && <a href={r.url} target="_blank" rel="noreferrer">Åpne arkivposten →</a>}
        </div>
      )}
    </li>
  );
}

export function Historie() {
  const { send } = useTilstand();
  const h = HISTORIE;
  const [visAlle, settVisAlle] = useState(false);

  const { brukte, ovrige } = useMemo(() => {
    const b = new Set(h?.brukteRapporter ?? []);
    const sortert = [...RAPPORTER].sort((x, y) => (x.aar ?? 0) - (y.aar ?? 0));
    return {
      brukte: sortert.filter((r) => b.has(r.id)),
      ovrige: sortert.filter((r) => !b.has(r.id)),
    };
  }, [h]);

  /* Tidslinja er oversikten; kapitlene er teksten. Trykker du på et kapittel
     der oppe, ruller vi ned til det i stedet for å åpne noe nytt. */
  const tilKapittel = (id: string) => {
    document.getElementById(`kap-${id}`)?.scrollIntoView({
      behavior: "smooth", block: "start",
    });
  };

  if (!h) return null;

  return (
    <div className="historie">
      <div className="hist-hode">
        <span className="hist-merke">{OMRADE.navn} · historien</span>
        <p className="hist-inn">{h.innledning}</p>
        <button type="button" className="hist-alt" onClick={() => send({ type: "tomtValg" })}>
          vis hele området i kartet
        </button>
      </div>

      <Tidslinje paaKapittel={tilKapittel} />

      {h.kapitler.map((k) => (
        <section key={k.id} id={`kap-${k.id}`} className="kapittel">
          <div className="kap-hode">
            <span className="kap-aar">
              {k.aarFra}{k.aarTil !== k.aarFra ? `–${k.aarTil}` : ""}
            </span>
            <h3>{k.overskrift}</h3>
          </div>
          {k.avsnitt.map((a, i) => (
            <Avsnitt key={i} a={a} id={avsnittId(k.id, i)} />
          ))}
        </section>
      ))}

      <section className="referanser">
        <h3>Referanser</h3>
        <p className="d">{h.merknad}</p>
        <ul>
          {brukte.map((r) => <Referanse key={r.id} r={r} />)}
        </ul>
        {ovrige.length > 0 && (
          <>
            <button
              type="button"
              className="hist-alt"
              onClick={() => settVisAlle(!visAlle)}
            >
              {visAlle ? "skjul" : "vis"} de {ovrige.length} øvrige referansene
            </button>
            <p className="d">
              Disse kom med fordi referanselistene peker på dem, men fortellingen bygger
              ikke på dem: metoderapporter, klassifiseringsveiledere og undersøkelser fra
              andre steder i Aust-Agder. De står her fordi regelen dro dem inn, og det skal
              være mulig å se hva regelen faktisk gjør.
            </p>
            {visAlle && <ul>{ovrige.map((r) => <Referanse key={r.id} r={r} />)}</ul>}
          </>
        )}
      </section>
    </div>
  );
}
