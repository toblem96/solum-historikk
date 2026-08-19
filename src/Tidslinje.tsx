/**
 * Tidslinja — målt mot beskrevet, år for år.
 *
 * Dette er ikke en liste over hendelser. Det er spørsmålet flaten stiller,
 * tegnet som ett bilde: hvor mye feltarbeid ble gjort hvert år, og hvor mye av
 * det finnes det en rapport om?
 *
 * Ryggraden i midten er nåtidsaksen. To ting leses ut fra den:
 *
 *   ← venstre    rapportene. Én prikk per rapport utgitt det året.
 *   høyre →      målingene. Stolpen er stasjonene som ble målt, og den mørke
 *                delen er de av dem en rapport faktisk navngir.
 *
 * Da blir begge hullene synlige, og de peker hver sin vei:
 *
 *   prikker uten stolpe   noen skrev om et år registeret ikke har målinger fra.
 *                         1986-rapportene beskriver feltarbeid fra 1982–85;
 *                         Vannmiljø starter i 1990.
 *   stolpe uten mørk del  noen målte, og ingen rapport vi kan finne beskriver
 *                         det. 2016 er tiltaksåret — ni stasjoner, ingen rapport.
 *
 * Tallene står ikke på. De kommer når du hviler over en rad.
 */
import { HISTORIE, finnRapport, type TidslinjeAar } from "./domene";
import { useTilstand } from "./tilstand";

/** År uten noe som helst hoppes over — men bruddet tegnes, det skjules ikke. */
function Brudd({ aar }: { aar: number }) {
  return (
    <div className="tl2-brudd" aria-hidden>
      <span>{aar === 1 ? "1 år uten noe" : `${aar} år uten noe`}</span>
    </div>
  );
}

function Rad({ r, maks }: { r: TidslinjeAar; maks: number }) {
  const { s, send } = useTilstand();
  const valgt = s.valg.slag === "aar" && s.valg.aar === r.aar;
  const hvilt = s.forhandsvistAar === r.aar;
  const udekket = r.malt - r.beskrevet;

  return (
    <div
      className={["tl2-rad", valgt ? "valgt" : "", hvilt ? "hvilt" : ""]
        .filter(Boolean).join(" ")}
      onMouseEnter={() => r.malt && send({ type: "forhandsvisAar", aar: r.aar })}
      onMouseLeave={() => send({ type: "forhandsvisAar", aar: null })}
    >
      <button
        type="button"
        className="tl2-flate"
        disabled={!r.malt}
        onClick={() => send({ type: valgt ? "tomtValg" : "velgAar", aar: r.aar })}
        title={
          r.malt
            ? `${r.aar}: ${r.malt} stasjoner målt, ${r.beskrevet} av dem navngitt av en rapport`
            : `${r.aar}: ingen målinger i registeret`
        }
      >
        {/* venstre: rapportene */}
        <span className="tl2-venstre">
          {r.rapporter.map((id) => {
            const rap = finnRapport(id);
            return (
              <i
                key={id}
                className={["tl2-prikk", rap?.funnetVia === "punkt" ? "punkt" : "sitat"]
                  .join(" ")}
                title={`${rap?.rapportnummer} · ${rap?.tittel}`}
              />
            );
          })}
        </span>

        <span className="tl2-aar">{r.aar}</span>

        {/* høyre: målingene, delt i beskrevet og ikke beskrevet */}
        <span className="tl2-hoyre">
          {r.beskrevet > 0 && (
            <i className="tl2-stolpe beskrevet"
               style={{ width: `${(r.beskrevet / maks) * 100}%` }} />
          )}
          {udekket > 0 && (
            <i className="tl2-stolpe udekket"
               style={{ width: `${(udekket / maks) * 100}%` }} />
          )}
          {r.tiltak.length > 0 && <i className="tl2-tiltak" title="tiltak" />}
          {hvilt || valgt ? (
            <span className="tl2-tall">
              {r.malt} målt{r.beskrevet ? `, ${r.beskrevet} beskrevet` : ""}
            </span>
          ) : null}
        </span>
      </button>
    </div>
  );
}

export function Tidslinje({ paaKapittel }: { paaKapittel: (id: string) => void }) {
  const h = HISTORIE;
  if (!h?.tidslinje.length) return null;
  const maks = Math.max(...h.tidslinje.map((r) => r.malt), 1);
  const utenRapport = h.tidslinje.reduce((n, r) => n + (r.malt - r.beskrevet), 0);

  return (
    <div className="tl2">
      <div className="tl2-topp">
        <span className="tl2-merke">rapporter</span>
        <span className="tl2-merke h">målte stasjoner</span>
      </div>

      <div className="tl2-kropp">
        {h.tidslinje.map((r) => {
          const kap = r.kapitler[0]
            ? h.kapitler.find((k) => k.id === r.kapitler[0])
            : undefined;
          return (
            <div key={r.aar}>
              {r.hopp > 0 && <Brudd aar={r.hopp} />}
              {/* Kapittelet får sin egen linje. Da grupperer tidslinja seg selv,
                  og tittelen legger seg ikke oppå stolpene. */}
              {kap && (
                <button
                  type="button"
                  className="tl2-kaphode"
                  onClick={() => paaKapittel(kap.id)}
                >
                  {kap.overskrift}
                </button>
              )}
              <Rad r={r} maks={maks} />
            </div>
          );
        })}
      </div>

      <div className="tl2-tegn">
        <span><i className="tl2-prikk punkt" /> rapport et punkt navngir</span>
        <span><i className="tl2-prikk sitat" /> funnet via referanselista</span>
        <span><i className="tl2-rute beskrevet" /> målt og beskrevet</span>
        <span><i className="tl2-rute udekket" /> målt, ingen rapport</span>
      </div>
      <p className="tl2-note">
{utenRapport} ganger er en stasjon målt et år uten at noen rapport navngir den.
        Prikker uten stolpe er det motsatte hullet: rapporter om år registeret ikke
        har målinger fra. Hvil over en rad for tallene, trykk for å se året i kartet.
      </p>
    </div>
  );
}
