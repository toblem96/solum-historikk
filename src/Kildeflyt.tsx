/**
 * Kildeflyten som sankey: faktisk kilde → bransje/kildetype → stoff → tilstandsklasse.
 * Alle tall kommer fra kildeanalysen; klassefordelingen per stoff er talt opp av
 * de faktiske målingene. Klikk en kildesøyle for å åpne kilden.
 */
import { useMemo, useState } from "react";
import {
  KILDER, KILDETYPER, STOFF, KLASSER, klassefarge, kilderForRapport,
  stasjonerForRapport, type Rapport,
} from "./domene";

const B = 10;           // søylebredde
const W = 1180;         // bredde
const TOPP = 30;
const BUNN = 14;
const GAP = 11;
const RAD = 16;         // laveste rad — under dette blir etiketten uleselig

/* Høyden følger den lengste kolonnen. Med fast høyde ble radene klippet i
   områder som har flere stoffer enn det var plass til. */
const H = Math.max(
  470,
  ...[KILDER.length, KILDETYPER.length, STOFF.length, KLASSER.length].map(
    (n) => TOPP + BUNN + n * RAD + GAP * Math.max(0, n - 1)
  )
);

interface Boks { y: number; h: number; }

function fordel<T>(rader: T[], vekt: (t: T) => number): Boks[] {
  const sum = rader.reduce((a, r) => a + Math.max(0.0001, vekt(r)), 0);
  const plass = H - TOPP - BUNN - GAP * (rader.length - 1);
  let y = TOPP;
  return rader.map((r) => {
    const h = Math.max(RAD, (plass * Math.max(0.0001, vekt(r))) / sum);
    const b = { y, h };
    y += h + GAP;
    return b;
  });
}

function bue(x1: number, y1: number, x2: number, y2: number) {
  const m = (x1 + x2) / 2;
  return `M${x1} ${y1} C ${m} ${y1}, ${m} ${y2}, ${x2} ${y2}`;
}

/** SVG-tekst brytes ikke. Lange sitater må kortes, ellers renner de over resten
 *  av diagrammet. Hele teksten ligger i tittelen og vises ved å holde over. */
function kort(t: string, n: number): string {
  if (t.length <= n) return t;
  const i = t.lastIndexOf(" ", n);
  return (i < 0 ? t.slice(0, n) : t.slice(0, i)) + " …";
}

function brekk(t: string, n: number): [string, string | null] {
  if (t.length <= n) return [t, null];
  const i = t.lastIndexOf(" ", n);
  return i < 0 ? [t, null] : [t.slice(0, i), t.slice(i + 1)];
}

type Node =
  | { slag: "kilde"; id: string }
  | { slag: "type"; id: string }
  | { slag: "stoff"; id: string }
  | { slag: "klasse"; id: number };

export function Kildeflyt({ rapport }: { rapport?: Rapport | null }) {
  /* Hviler du over en søyle, lyser alt som henger sammen med den. Det er den
     eneste interaksjonen — ingen klikk, ingenting som åpner seg. */
  const [over, settOver] = useState<Node | null>(null);

  const modell = useMemo(() => {
    /* Bare stoffene vi har en klassefordeling for — resten kan ikke tegnes ærlig. */
    let stoff = STOFF.filter((s) => s.klassefordeling && Object.keys(s.klassefordeling).length);
    let kilder = [...KILDER].sort((a, b) => a.rang - b.rang);

    /* Er en rapport valgt, vises bare dens kilder og de stoffene som faktisk er
       målt på punktene rapporten dekker. Resten hører ikke til den rapporten. */
    if (rapport) {
      const egne = kilderForRapport(rapport);
      kilder = egne.length ? [...egne].sort((a, b) => a.rang - b.rang) : [];
      const maalt = new Set(
        stasjonerForRapport(rapport).flatMap((st) => st.verdier.map((v) => v.stoff))
      );
      stoff = stoff.filter((x) => maalt.has(x.navn));
    }

    /* Antallet i typekolonnen må telle kildene som faktisk vises, ikke alle i
       datasettet — ellers står det «3 kilder» over én søyle. */
    const typer = KILDETYPER.filter((t) => kilder.some((k) => k.type === t.navn))
      .map((t) => ({ ...t, antallKilder: kilder.filter((k) => k.type === t.navn).length }));

    const sumStoff = (s: (typeof stoff)[number]) =>
      Object.values(s.klassefordeling!).reduce((a, b) => a + Number(b), 0);

    const klasseTotal: Record<string, number> = {};
    for (const s of stoff) {
      for (const [niva, n] of Object.entries(s.klassefordeling!)) {
        klasseTotal[niva] = (klasseTotal[niva] ?? 0) + Number(n);
      }
    }
    const klasser = Object.keys(klasseTotal)
      .map(Number)
      .sort((a, b) => a - b)
      .map((niva) => ({ niva, n: klasseTotal[String(niva)] }));

    return {
      kilder,
      typer,
      stoff,
      klasser,
      sumStoff,
      kY: fordel(kilder, (k) => k.poeng),
      tY: fordel(typer, (t) =>
        stoff.filter((s) => s.fraTyper.includes(t.navn)).reduce((a, s) => a + sumStoff(s), 0) || 1
      ),
      sY: fordel(stoff, sumStoff),
      klY: fordel(klasser, (k) => k.n),
    };
  }, [rapport]);

  /* Hva som henger sammen med det du hviler over — begge veier gjennom kjeden. */
  const rel = useMemo(() => {
    if (!over) return null;
    const r = {
      kilder: new Set<string>(), typer: new Set<string>(),
      stoff: new Set<string>(), klasser: new Set<number>(),
    };
    /* Ett hopp hver vei fra det du peker på — ikke lenger. Utvider vi videre,
       drar stoffene inn alle de andre kildene de deler bransje med, og da lyser
       hele diagrammet opp. Da er det ikke lenger en framheving. */
    const klasserFor = (navn: string) => {
      const st = modell.stoff.find((x) => x.navn === navn);
      Object.keys(st?.klassefordeling ?? {}).forEach((n) => r.klasser.add(Number(n)));
    };

    if (over.slag === "kilde") {
      const k = modell.kilder.find((x) => x.id === over.id);
      if (k) {
        r.kilder.add(k.id);
        r.typer.add(k.type);
        modell.stoff
          .filter((x) => x.fraKilder.includes(k.id))
          .forEach((x) => { r.stoff.add(x.navn); klasserFor(x.navn); });
      }
    } else if (over.slag === "type") {
      r.typer.add(over.id);
      modell.kilder.filter((k) => k.type === over.id).forEach((k) => r.kilder.add(k.id));
      modell.stoff
        .filter((x) => x.fraTyper.includes(over.id))
        .forEach((x) => { r.stoff.add(x.navn); klasserFor(x.navn); });
    } else if (over.slag === "stoff") {
      const st = modell.stoff.find((x) => x.navn === over.id);
      if (st) {
        r.stoff.add(st.navn);
        st.fraTyper.forEach((t) => r.typer.add(t));
        st.fraKilder.forEach((k) => r.kilder.add(k));
        klasserFor(st.navn);
      }
    } else {
      r.klasser.add(over.id);
      modell.stoff
        .filter((x) => Object.keys(x.klassefordeling ?? {}).includes(String(over.id)))
        .forEach((x) => {
          r.stoff.add(x.navn);
          x.fraTyper.forEach((t) => r.typer.add(t));
          x.fraKilder.forEach((k) => r.kilder.add(k));
        });
    }
    return r;
  }, [over, modell]);

  const paa = (slag: Node["slag"], id: string | number) => {
    if (!rel) return true;
    if (slag === "kilde") return rel.kilder.has(String(id));
    if (slag === "type") return rel.typer.has(String(id));
    if (slag === "stoff") return rel.stoff.has(String(id));
    return rel.klasser.has(Number(id));
  };
  /* Dempingen gjelder bare når noe er framhevet. */
  const d = (av: boolean) => (rel && !av ? 0.08 : 1);

  const x = [12, 372, 690, 1000];

  return (
    <svg className="sankey" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Kildeflyt fra kilde til tilstandsklasse">
      {["Faktisk kilde", "Bransje / kildetype", "Stoff", "Målinger per klasse"].map((t, i) => (
        <text key={t} className="kolonne" x={x[i]} y={14}>{t.toUpperCase()}</text>
      ))}

      {/* kilde → type */}
      {modell.kilder.map((k, i) => {
        const ti = modell.typer.findIndex((t) => t.navn === k.type);
        if (ti < 0) return null;
        const a = modell.kY[i], b = modell.tY[ti];
        const antatt = k.belegg === "antatt";
        return (
          <path
            key={`kt-${k.id}`}
            d={bue(x[0] + B, a.y + a.h / 2, x[1], b.y + b.h / 2)}
            fill="none"
            stroke={antatt ? "#b8a888" : "#1f7480"}
            strokeWidth={1 + k.poeng * 2.6}
            strokeDasharray={antatt ? "6 4" : undefined}
            opacity={(antatt ? 0.55 : 0.7) * d(paa("kilde", k.id) && paa("type", k.type))}
          />
        );
      })}

      {/* type → stoff */}
      {modell.stoff.flatMap((s, j) =>
        s.fraTyper.map((navn) => {
          const ti = modell.typer.findIndex((t) => t.navn === navn);
          if (ti < 0) return null;
          const a = modell.tY[ti], b = modell.sY[j];
          const hot = s.status === "hotspot";
          return (
            <path
              key={`ts-${s.navn}-${navn}`}
              d={bue(x[1] + B, a.y + a.h / 2, x[2], b.y + b.h / 2)}
              fill="none"
              stroke="#1f7480"
              strokeWidth={hot ? 4 : 2.2}
              opacity={(hot ? 0.6 : 0.32) * d(paa("type", navn) && paa("stoff", s.navn))}
            />
          );
        })
      )}

      {/* stoff → klasse */}
      {modell.stoff.flatMap((s, j) =>
        Object.entries(s.klassefordeling!).map(([niva, n]) => {
          const ki = modell.klasser.findIndex((k) => k.niva === Number(niva));
          if (ki < 0) return null;
          const a = modell.sY[j], b = modell.klY[ki];
          const tot = modell.sumStoff(s);
          return (
            <path
              key={`sk-${s.navn}-${niva}`}
              d={bue(x[2] + B, a.y + a.h / 2, x[3], b.y + b.h / 2)}
              fill="none"
              stroke={klassefarge(Number(niva))}
              strokeWidth={Math.max(2, (14 * Number(n)) / tot)}
              opacity={0.5 * d(paa("stoff", s.navn) && paa("klasse", Number(niva)))}
            />
          );
        })
      )}

      {/* søyler */}
      {modell.kilder.map((k, i) => {
        const a = modell.kY[i];
        const [l1, l2] = brekk(k.navn, 40);
        return (
          <g
            key={k.id}
            className="soyle"
            opacity={d(paa("kilde", k.id))}
            onMouseEnter={() => settOver({ slag: "kilde", id: k.id })}
            onMouseLeave={() => settOver(null)}
          >
            <rect x={x[0]} y={a.y} width={B} height={a.h} rx={2} fill={k.belegg === "belagt" ? "#1f7480" : "#b8a888"} />
            <text className="navn" x={x[0] + B + 9} y={a.y + 12}>{l1}</text>
            {l2 && <text className="navn" x={x[0] + B + 9} y={a.y + 25}>{l2}</text>}
            <text className="under" x={x[0] + B + 9} y={a.y + (l2 ? 38 : 25)}>
              {k.belegg} · poeng {String(k.poeng).replace(".", ",")}
            </text>
          </g>
        );
      })}

      {modell.typer.map((t, i) => {
        const a = modell.tY[i];
        return (
          <g
            key={t.navn}
            className="soyle"
            opacity={d(paa("type", t.navn))}
            onMouseEnter={() => settOver({ slag: "type", id: t.navn })}
            onMouseLeave={() => settOver(null)}
          >
            <rect x={x[1]} y={a.y} width={B} height={a.h} rx={2} fill="#1f7480" />
            <text className="navn" x={x[1] + B + 9} y={a.y + 12}>
              <title>{t.m350relasjon}</title>
              {t.navn}
            </text>
          </g>
        );
      })}

      {modell.stoff.map((s, i) => {
        const a = modell.sY[i];
        return (
          <g
            key={s.navn}
            className="soyle"
            opacity={d(paa("stoff", s.navn))}
            onMouseEnter={() => settOver({ slag: "stoff", id: s.navn })}
            onMouseLeave={() => settOver(null)}
          >
            <rect x={x[2]} y={a.y} width={B} height={a.h} rx={2} fill="#1f7480" />
            <text className="navn" x={x[2] + B + 9} y={a.y + 12}>{s.navn}</text>
          </g>
        );
      })}

      {modell.klasser.map((k, i) => {
        const a = modell.klY[i];
        const kl = KLASSER.find((x2) => x2.niva === k.niva);
        return (
          <g
            key={k.niva}
            className="soyle"
            opacity={d(paa("klasse", k.niva))}
            onMouseEnter={() => settOver({ slag: "klasse", id: k.niva })}
            onMouseLeave={() => settOver(null)}
          >
            <rect x={x[3]} y={a.y} width={B} height={a.h} rx={2} fill={klassefarge(k.niva)} />
            <text className="navn" x={x[3] + B + 9} y={a.y + 12}>Klasse {kl?.romertall ?? k.niva}</text>
            <text className="under" x={x[3] + B + 9} y={a.y + 25}>{k.n} målinger</text>
          </g>
        );
      })}
    </svg>
  );
}
