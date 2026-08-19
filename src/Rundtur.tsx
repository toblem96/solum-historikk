/**
 * En kort omvisning som vises første gang flaten åpnes.
 *
 * Fire steg, og hvert av dem viser tegnet det snakker om — ikke en beskrivelse
 * av et symbol, men symbolet selv. Da slipper man å oversette mellom teksten og
 * kartet. Den huskes i nettleseren, og kan hentes fram igjen med «?» over kartet.
 */
import { useEffect, useState } from "react";
import { KLASSER, klassefarge } from "./domene";

const HUSK = "natura-rundtur-sett";

export function harSettRundtur() {
  try {
    return window.localStorage.getItem(HUSK) === "ja";
  } catch {
    return false;
  }
}

function Punkt({ klasse, stiplet }: { klasse: number | null; stiplet?: boolean }) {
  return (
    <span
      className="rt-punkt"
      style={{
        background: stiplet ? "var(--paper)" : klassefarge(klasse),
        borderStyle: stiplet ? "dashed" : "solid",
        borderColor: stiplet ? "var(--teal)" : "var(--paper)",
      }}
    />
  );
}

const STEG = [
  {
    tittel: "Punktene",
    tegn: (
      <>
        {KLASSER.map((k) => <Punkt key={k.niva} klasse={k.niva} />)}
        <Punkt klasse={null} />
        <span className="rt-skille" />
        <Punkt klasse={null} stiplet />
      </>
    ),
    tekst: (
      <>
        Fylt prikk er en målt stasjon i Vannmiljø, farget etter verste
        tilstandsklasse — blå er bakgrunn, rød er svært dårlig. Stiplet ring er et punkt
        som bare er beskrevet i en rapport, uten målinger i registeret.
      </>
    ),
  },
  {
    tittel: "Kildene",
    tegn: (
      <>
        <span className="rt-trekant mork" />
        <span className="rt-skille" />
        <span className="rt-trekant lys" />
      </>
    ),
    tekst: (
      <>
        Rød trekant er en forurensningskilde. Mørk når den er belagt — dokumentert i en
        rapport eller en måling — lysere når den bare er antatt ut fra bransje. Skru laget
        av og på med <b>Kilder</b> over kartet.
      </>
    ),
  },
  {
    tittel: "Tiltaket",
    tegn: <span className="rt-flate" />,
    tekst: (
      <>
        Stiplet oransje flate er et gjennomført tiltak. Omrisset er lagt 50 meter utenfor
        punktene som ble målt i tiltaket — det er ikke den virkelige tiltaksgrensen, og
        den finnes ikke stedfestet i noen av kildene.
      </>
    ),
  },
  {
    tittel: "Kildeflyten",
    tegn: <span className="rt-flyt">kilde → bransje → stoff → klasse</span>,
    tekst: (
      <>
        Velg en rapport i lista og trykk <b>Åpne kildeflyt</b> nederst i panelet. Da ser du
        hvilke kilder som er knyttet til hvilke stoffer, og hvordan målingene fordeler seg
        på tilstandsklasser. Hvil over en søyle, så lyser alt som henger sammen med den.
      </>
    ),
  },
];

export function Rundtur({ onLukk }: { onLukk: () => void }) {
  const [n, settN] = useState(0);
  const siste = n === STEG.length - 1;

  useEffect(() => {
    const paaTast = (e: KeyboardEvent) => {
      if (e.key === "Escape") onLukk();
      if (e.key === "ArrowRight" && !siste) settN((x) => x + 1);
      if (e.key === "ArrowLeft" && n > 0) settN((x) => x - 1);
    };
    window.addEventListener("keydown", paaTast);
    return () => window.removeEventListener("keydown", paaTast);
  }, [n, siste, onLukk]);

  const steg = STEG[n];
  return (
    <div className="rundtur" role="dialog" aria-label="Omvisning">
      <div className="rt-hode">
        <span className="rt-teller">{n + 1} av {STEG.length}</span>
        <h3>{steg.tittel}</h3>
      </div>
      <div className="rt-tegn">{steg.tegn}</div>
      <p>{steg.tekst}</p>
      <div className="rt-bunn">
        <button type="button" className="rt-hopp" onClick={onLukk}>
          {siste ? "Lukk" : "Hopp over"}
        </button>
        <span className="rt-prikker">
          {STEG.map((_, i) => (
            <i key={i} className={i === n ? "paa" : ""} onClick={() => settN(i)} />
          ))}
        </span>
        {n > 0 && (
          <button type="button" className="knapp" onClick={() => settN(n - 1)}>Forrige</button>
        )}
        <button
          type="button"
          className="knapp fyll"
          onClick={() => (siste ? onLukk() : settN(n + 1))}
        >
          {siste ? "Ferdig" : "Neste"}
        </button>
      </div>
    </div>
  );
}

export function husk() {
  try {
    window.localStorage.setItem(HUSK, "ja");
  } catch {
    /* privat modus — da vises omvisningen igjen neste gang, og det er greit */
  }
}
