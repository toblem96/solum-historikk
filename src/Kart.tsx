/**
 * Kartet. Ekte Kartverket-fliser under, ekte Vannmiljø-stasjoner oppå.
 *
 * Bakgrunnen er Kartverkets åpne cache. Merk akserekkefølgen: {z}/{y}/{x} — ikke
 * den vanlige {z}/{x}/{y}. Med x og y byttet om svarer tjenesten 200 med en tom
 * flis, så feilen gir et blankt kart uten en eneste feilmelding.
 *
 * Filtreringen følger kravet: er en rapport valgt, vises KUN dens punkter, dens
 * tiltak og dens kilder. Alt annet tegnes ikke — det dempes ikke.
 */
import { useEffect, useMemo, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  STASJONER, KILDER, TILTAK, klassefarge, klasseNavn, klassetekstfarge,
  finnRapport, finnKilde, finnTiltak, stasjonerForRapport, alleStasjonerForRapport,
  stasjonerForTiltak, stasjonerForKilde, tiltakForRapport, kilderForRapport,
  OMRADE, GEOGRAFI,
  type Stasjon,
} from "./domene";
import { useTilstand, type Bakgrunn } from "./tilstand";

const FLISER: Record<Bakgrunn, { url: string; navn: string; kreditt: string }> = {
  graatone: {
    url: "https://cache.kartverket.no/v1/wmts/1.0.0/topograatone/default/webmercator/{z}/{y}/{x}.png",
    navn: "Gråtone",
    kreditt: '&copy; <a href="https://kartverket.no">Kartverket</a>',
  },
  topo: {
    url: "https://cache.kartverket.no/v1/wmts/1.0.0/topo/default/webmercator/{z}/{y}/{x}.png",
    navn: "Topografisk",
    kreditt: '&copy; <a href="https://kartverket.no">Kartverket</a>',
  },
  sjokart: {
    url: "https://cache.kartverket.no/v1/wmts/1.0.0/sjokartraster/default/webmercator/{z}/{y}/{x}.png",
    navn: "Sjøkart",
    kreditt: '&copy; <a href="https://kartverket.no">Kartverket</a> · sjøkartraster',
  },
};

/* Førstevisningen.
 *
 * Bærer minst halvparten av stasjonene områdets eget navn, rammer vi inn dem —
 * i Vikkilen gjør 40 av 70 det, og de øvrige ligger spredt utover kommunen og
 * ville trukket utsnittet så langt ut at selve kilen ble uleselig. Er navnet
 * bare en del av området, som «Bjørvika» i Oslo havn, rammer vi inn alt.
 * Uansett zoomer kartet til punktene når man velger et kort i lista.
 */
function forsteRamme(): L.LatLngBounds {
  /* Ordgrense, ikke delstreng: «Fevikkilen» er et annet sted enn «Vikkilen». */
  const navn = new RegExp(`(^|[^a-zæøå])${OMRADE.navn.toLowerCase()}([^a-zæøå]|$)`, "i");
  const med = STASJONER.filter((s) => navn.test(s.navn));
  if (med.length >= STASJONER.length / 2 && med.length >= 3) {
    return L.latLngBounds(med.map((s) => [s.lat, s.lng] as [number, number])).pad(0.12);
  }
  const b = GEOGRAFI.bbox;
  return L.latLngBounds([b.s, b.v], [b.n, b.o]).pad(0.06);
}

/** Meter rundt hvert tiltakspunkt før omrisset legges. Uten den blir flaten en
 *  skarp trekant mellom ytterpunktene; med den følger den punktskyen. */
const TILTAK_BUFFER_M = 50;

/** Punktene erstattet av en ring på 50 m rundt hvert av dem. Omrisset rundt alle
 *  ringene blir da en avrundet flate i stedet for en kantet mangekant. */
function bufferPunkter(p: [number, number][], meter = TILTAK_BUFFER_M, kanter = 24) {
  const ut: [number, number][] = [];
  for (const [lat, lng] of p) {
    const dLat = meter / 111000;
    const dLng = meter / (111000 * Math.cos((lat * Math.PI) / 180));
    for (let i = 0; i < kanter; i++) {
      const v = (2 * Math.PI * i) / kanter;
      ut.push([lat + dLat * Math.sin(v), lng + dLng * Math.cos(v)]);
    }
  }
  return ut;
}

/** Konveks innhylling i grader — omrisset rundt punktene et tiltak dekker. */
function konveksInnhylling(p: [number, number][]): [number, number][] {
  if (p.length < 3) return p;
  const s = [...p].sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  const kryss = (o: number[], a: number[], b: number[]) =>
    (a[1] - o[1]) * (b[0] - o[0]) - (a[0] - o[0]) * (b[1] - o[1]);
  const ned: [number, number][] = [];
  for (const q of s) {
    while (ned.length >= 2 && kryss(ned[ned.length - 2], ned[ned.length - 1], q) <= 0) ned.pop();
    ned.push(q);
  }
  const opp: [number, number][] = [];
  for (const q of [...s].reverse()) {
    while (opp.length >= 2 && kryss(opp[opp.length - 2], opp[opp.length - 1], q) <= 0) opp.pop();
    opp.push(q);
  }
  ned.pop();
  opp.pop();
  return ned.concat(opp);
}

/** Meter mellom to punkter, godt nok på disse avstandene. */
function meter(a: [number, number], b: [number, number]) {
  const dy = (a[0] - b[0]) * 111000;
  const dx = (a[1] - b[1]) * 111000 * Math.cos(((a[0] + b[0]) / 2 * Math.PI) / 180);
  return Math.hypot(dx, dy);
}

/** Punkter som hører sammen — ingen i en klynge er lenger enn KLYNGE_M fra en
 *  annen i samme klynge. Enkeltlenket gruppering, som følger punktskyen i stedet
 *  for å legge et rutenett over den. */
const KLYNGE_M = 450;

function klynger(p: [number, number][], grense = KLYNGE_M): [number, number][][] {
  const igjen = [...p];
  const ut: [number, number][][] = [];
  while (igjen.length) {
    const k = [igjen.pop() as [number, number]];
    let vokste = true;
    while (vokste) {
      vokste = false;
      for (let i = igjen.length - 1; i >= 0; i--) {
        if (k.some((q) => meter(q, igjen[i]) <= grense)) {
          k.push(igjen.splice(i, 1)[0]);
          vokste = true;
        }
      }
    }
    ut.push(k);
  }
  return ut;
}

/**
 * Flatene et tiltak dekker.
 *
 * Én konveks innhylling over alle punktene ville trukket en flate tvers over
 * havnebassenget der punktene i virkeligheten ligger i atskilte grupper — og
 * påstått at alt imellom var tiltaksområde. Derfor ett omriss per klynge.
 * Enkeltpunkter og par blir en ring på {TILTAK_BUFFER_M} meter, ikke en strek.
 */
function tiltaksflater(pkt: [number, number][]): [number, number][][] {
  return klynger(pkt).map((k) => konveksInnhylling(bufferPunkter(k)));
}

function popupHtml(s: Stasjon): string {
  const rader = s.verdier
    .slice()
    .sort((a, b) => (b.klasse ?? 0) - (a.klasse ?? 0))
    .slice(0, 8)
    .map(
      (v) =>
        `<tr><td>${v.stoff}</td><td style="text-align:right">${String(v.verdi).replace(".", ",")}` +
        ` <span style="opacity:.6">${v.enhet.replace(" TS", "")}</span></td>` +
        `<td style="text-align:right"><span class="kl" style="background:${klassefarge(v.klasse)};` +
        `color:${klassetekstfarge(v.klasse)}">${v.klasse}</span></td></tr>`
    )
    .join("");
  const aar = s.aarFra == null ? "år ukjent" : s.aarFra === s.aarTil ? `${s.aarFra}` : `${s.aarFra}–${s.aarTil}`;
  const fraRapport = Boolean(s.opphav && s.opphav !== "Vannmiljø");
  return (
    `<div style="min-width:230px">` +
    `<div style="font-weight:650;font-size:.92rem;margin-bottom:.1rem">${s.navn}</div>` +
    `<div style="font-family:var(--font-mono);font-size:.68rem;color:var(--muted);margin-bottom:.45rem">` +
    `${s.kode} · ${aar} · ${s.utforende || "utførende ukjent"}</div>` +
    (s.verdier.length
      ? `<table style="width:100%;border-collapse:collapse;font-family:var(--font-mono);font-size:.68rem">${rader}</table>` +
        (s.verdier.length > 8 ? `<div style="font-size:.66rem;color:var(--muted);margin-top:.3rem">+ ${s.verdier.length - 8} stoffer til</div>` : "")
      : fraRapport
      ? `<div style="font-size:.72rem;color:var(--muted)">Feltstasjon fra ${s.opphav}. Ikke analysert kjemisk.` +
        (s.feltnotat ? `<br>${s.feltnotat}` : "") + `</div>`
      : `<div style="font-size:.72rem;color:var(--muted)">Ingen klassifiserte funn</div>`) +
    `<div style="margin-top:.5rem;font-size:.7rem;color:var(--muted)">Klikk punktet for hele stasjonen</div>` +
    `</div>`
  );
}

export function Kart() {
  const { s, send } = useTilstand();
  const vertRef = useRef<HTMLDivElement | null>(null);
  const kartRef = useRef<L.Map | null>(null);
  const flisRef = useRef<L.TileLayer | null>(null);
  const lagRef = useRef<L.LayerGroup | null>(null);

  /* Hva som skal tegnes, avledet av tilstanden. Årsfilteret er borte — kartet
     viser alle punkter, og det er valget i lista som avgrenser. */
  const modell = useMemo(() => {
    /* Hviler du over et kort uten å ha valgt noe, viser kartet den rapporten. */
    const valgtRapport =
      s.valg.slag === "rapport"
        ? finnRapport(s.valg.id)
        : s.valg.slag === "ingen" && s.forhandsvist
        ? finnRapport(s.forhandsvist)
        : null;
    const valgtKilde = s.valg.slag === "kilde" ? finnKilde(s.valg.id) : null;
    const valgtTiltak = s.valg.slag === "tiltak" ? finnTiltak(s.valg.id) : null;
    const oppsummering = s.valg.slag === "oppsummering";

    if (oppsummering) {
      /* Hele området på én gang. */
      return {
        modus: "alt" as const,
        uendret: false,
        stasjoner: STASJONER,
        tiltak: TILTAK,
        kilder: KILDER,
      };
    }

    /* En rapport uten egne punkter skal ikke tømme kartet. */
    if (valgtRapport && alleStasjonerForRapport(valgtRapport).length > 0) {
      return {
        modus: "rapport" as const,
        uendret: false,
        stasjoner: alleStasjonerForRapport(valgtRapport),
        tiltak: tiltakForRapport(valgtRapport.id),
        kilder: kilderForRapport(valgtRapport),
      };
    }
    if (valgtTiltak) {
      return {
        modus: "tiltak" as const,
        uendret: false,
        stasjoner: stasjonerForTiltak(valgtTiltak),
        tiltak: [valgtTiltak],
        kilder: [],
      };
    }
    const rapporttiltak = valgtRapport ? tiltakForRapport(valgtRapport.id) : [];
    return {
      modus: "alt" as const,
      /* Sant når en punktløs rapport er valgt: da lot vi kartet stå, og da skal
         det heller ikke zoome. */
      uendret: Boolean(valgtRapport),
      stasjoner: STASJONER,
      tiltak: rapporttiltak.length ? rapporttiltak : s.visTiltak ? TILTAK : [],
      kilder: s.visKilder ? (valgtKilde ? [valgtKilde] : KILDER) : valgtKilde ? [valgtKilde] : [],
    };
  }, [s.valg, s.forhandsvist, s.visKilder, s.visTiltak]);

  /* Opprett kartet én gang. */
  useEffect(() => {
    if (!vertRef.current || kartRef.current) return;
    const kart = L.map(vertRef.current, {
      center: [OMRADE.senter.lat, OMRADE.senter.lng],
      zoom: 14,
      zoomControl: true,
      preferCanvas: true,
    });
    if (STASJONER.length > 1) {
      /* setView framfor fitBounds: fitBounds legger igjen en tegnejobb i neste
         animasjonsramme, og rives kartet før den kjører — som i React sin
         dobbeltmontering — kaster lerretet et unntak. */
      const ramme = forsteRamme();
      kart.setView(ramme.getCenter(), Math.min(16, kart.getBoundsZoom(ramme)), { animate: false });
    }
    kartRef.current = kart;
    lagRef.current = L.layerGroup().addTo(kart);
    return () => {
      kart.remove();
      kartRef.current = null;
    };
  }, []);

  /* Bytt bakgrunnsflis. */
  useEffect(() => {
    const kart = kartRef.current;
    if (!kart) return;
    if (flisRef.current) kart.removeLayer(flisRef.current);
    const f = FLISER[s.bakgrunn];
    flisRef.current = L.tileLayer(f.url, {
      attribution: f.kreditt + " · stasjoner: Vannmiljø, Miljødirektoratet",
      maxZoom: 19,
      minZoom: 10,
    }).addTo(kart);
    flisRef.current.bringToBack();
  }, [s.bakgrunn]);

  /* Tegn alle vektorlagene på nytt når modellen endrer seg. */
  useEffect(() => {
    const kart = kartRef.current;
    const lag = lagRef.current;
    if (!kart || !lag) return;
    lag.clearLayers();

    /* 1 · tiltaksflater — omrisset rundt punktene tiltaket dekker */
    for (const t of modell.tiltak) {
      const pkt = stasjonerForTiltak(t).map((x) => [x.lat, x.lng] as [number, number]);
      if (pkt.length < 2) continue;
      const deler = tiltaksflater(pkt);
      for (const hylle of deler) {
        const flate = L.polygon(hylle, {
          color: "#e8902e",
          weight: 2,
          dashArray: "7 5",
          fillColor: "#e8902e",
          fillOpacity: 0.12,
        }).addTo(lag);
        flate.bindTooltip(
          `${t.navn}${t.aarFra ? ` · ${t.aarFra}${t.aarTil && t.aarTil !== t.aarFra ? "–" + t.aarTil : ""}` : ""}` +
            `<br><span style="opacity:.75">${deler.length > 1 ? `én av ${deler.length} punktgrupper — o` : "O"}mrisset ` +
            `er lagt ${TILTAK_BUFFER_M} m utenfor overvåkingspunktene, det er ikke ` +
            `tiltaksgrensen</span>`,
          { sticky: true }
        );
        flate.on("click", (e) => {
          L.DomEvent.stop(e);
          send({ type: "velgTiltak", id: t.id });
        });
      }
    }

    /* 2 · kildestreker til punktene kilden er koblet til */
    for (const k of modell.kilder) {
      const koblet = stasjonerForKilde(k);
      const fra: [number, number] | null =
        k.lat != null && k.lng != null
          ? [k.lat, k.lng]
          : koblet.length
          ? [
              koblet.reduce((a, x) => a + x.lat, 0) / koblet.length,
              koblet.reduce((a, x) => a + x.lng, 0) / koblet.length,
            ]
          : null;
      if (!fra) continue;
      const framhevet = s.valg.slag === "kilde" && s.valg.id === k.id;
      for (const m of koblet) {
        L.polyline([fra, [m.lat, m.lng]], {
          color: "#854d0e",
          weight: framhevet ? 2 : 1.2,
          opacity: framhevet ? 0.9 : 0.55,
          dashArray: "5 4",
        }).addTo(lag);
      }
      /* Kildene er røde trekanter — de skal ikke kunne forveksles med målepunkter,
         som er sirkler. Trekanten tegnes som ikon, så den holder samme størrelse
         uansett zoom. */
      const side = framhevet ? 30 : 24;
      const merke = L.marker(fra, {
        icon: L.divIcon({
          className: "kildetrekant",
          html:
            `<span style="border-left:${side / 2}px solid transparent;` +
            `border-right:${side / 2}px solid transparent;` +
            `border-bottom:${side * 0.88}px solid ${k.belegg === "belagt" ? "#c0392b" : "#e08b80"};` +
            `filter:drop-shadow(0 0 1.5px #fffdf8) drop-shadow(0 0 1.5px #fffdf8)"></span>`,
          iconSize: [side, side * 0.88],
          iconAnchor: [side / 2, side * 0.44],
        }),
        keyboard: false,
      }).addTo(lag);
      merke.bindTooltip(
        `${k.navn}<br><span style="opacity:.7">${k.belegg} · poeng ${String(k.poeng).replace(".", ",")}` +
          `${k.lat == null ? " · posisjon avledet av koblede punkter" : ""}</span>`,
        { sticky: true }
      );
      merke.on("click", (e) => {
        L.DomEvent.stop(e);
        send({ type: "velgKilde", id: k.id });
      });
    }

    /* 3 · stasjonene */
    const valgtStasjon = s.valg.slag === "stasjon" ? s.valg.navn : null;
    for (const st of modell.stasjoner) {
      const erValgt = st.navn === valgtStasjon;
      /* Punkter som bare finnes i en rapport tegnes åpne og stiplet, så de ikke
         forveksles med målte Vannmiljø-stasjoner. */
      const fraRapport = Boolean(st.opphav && st.opphav !== "Vannmiljø");
      const m = L.circleMarker([st.lat, st.lng], {
        radius: erValgt ? 9 : fraRapport ? 5 : st.klasse != null && st.klasse >= 4 ? 6.5 : 5.5,
        color: erValgt ? "#1f7480" : fraRapport ? "#1f7480" : "#fffdf8",
        weight: erValgt ? 3 : fraRapport ? 1.6 : 1.4,
        dashArray: fraRapport && !erValgt ? "3 2" : undefined,
        fillColor: fraRapport ? "#fffdf8" : klassefarge(st.klasse),
        fillOpacity: fraRapport ? 0.75 : 1,
      }).addTo(lag);
      m.bindPopup(popupHtml(st), { closeButton: true, autoPan: false });
      m.on("mouseover", () => m.openPopup());
      m.on("mouseout", () => m.closePopup());
      m.on("click", (e) => {
        L.DomEvent.stop(e);
        send({ type: "velgStasjon", navn: st.navn });
      });
    }
  }, [modell, s.valg, send]);

  /* Zoom til det valgte. */
  useEffect(() => {
    const kart = kartRef.current;
    if (!kart || s.zoomOnske === 0) return;
    if ("uendret" in modell && modell.uendret) return;
    const pkt = modell.stasjoner.map((x) => [x.lat, x.lng] as [number, number]);
    if (pkt.length === 0) return;
    if (pkt.length === 1) kart.setView(pkt[0], 17, { animate: true });
    else kart.fitBounds(L.latLngBounds(pkt).pad(0.25), { animate: true, maxZoom: 17 });
  }, [s.zoomOnske]);

  return <div className="kart" ref={vertRef} role="application" aria-label={`Kart over ${OMRADE.navn}`} />;
}

export { FLISER };
