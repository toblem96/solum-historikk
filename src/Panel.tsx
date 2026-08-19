/**
 * Høyrepanelet. Én flate, fire innhold: rapport, kilde, tiltak, stasjon.
 * Rekkefølgen i rapportvisningen er avklart: kartfiguren først, så tekst, så tall.
 */
import {
  finnRapport, finnKilde, finnTiltak, finnStasjon, klassefarge, klassetekstfarge,
  klasseNavn, tiltakForRapport, kilderForRapport, rapporterForStasjon, kilderForStasjon,
  stasjonerForKilde, undersokelserUtenRapport,
  KILDER, RAPPORTER, TILTAK, STASJONER, UNDERSOKELSER, SAMLET, OMRADE, META,
  type Rapport, type Kilde, type Tiltak, type Stasjon,
} from "./domene";
import { useTilstand } from "./tilstand";

function Tilbake() {
  const { send } = useTilstand();
  return (
    <button type="button" className="tilbake" onClick={() => send({ type: "tomtValg" })}>
      ← Tilbake til lista
    </button>
  );
}

/* ── Oppsummering av hele området ─────────────────────────────────────── */

function OppsummeringVisning() {
  const { send } = useTilstand();
  const fraRapport = STASJONER.filter((x) => x.opphav && x.opphav !== "Vannmiljø");
  const utenRapport = undersokelserUtenRapport().length;
  const meta = META as { antallMalinger?: number; antallMedData?: number };

  return (
    <>
      <div className="pnl-hode">
        <Tilbake />
        <h2>{OMRADE.navn} — alt vi vet om området</h2>
        <p className="meta">{OMRADE.kommune} · {OMRADE.undertittel}</p>
      </div>

      <div className="pnl-kropp">
        <div className="sek">
          <h4>Grunnlaget</h4>
          <div className="rad"><b>Punkter</b><span>
            {STASJONER.length} i alt — {STASJONER.length - fraRapport.length} målte stasjoner i
            Vannmiljø og {fraRapport.length} feltstasjoner som bare er beskrevet i en rapport
          </span></div>
          <div className="rad"><b>Målinger</b><span>{meta.antallMalinger} i marint sediment, fordelt på {meta.antallMedData} stasjoner med klassifiserte funn</span></div>
          <div className="rad"><b>Undersøkelser</b><span>{UNDERSOKELSER.length}, hvorav {utenRapport} uten rapport</span></div>
          <div className="rad"><b>Rapporter</b><span>{RAPPORTER.length} — de punktene selv navngir</span></div>
          <div className="rad"><b>Kilder</b><span>{KILDER.length}, hvorav {KILDER.filter((k) => k.belegg === "belagt").length} belagt</span></div>
          <div className="rad"><b>Tiltak</b><span>{TILTAK.length}</span></div>
        </div>

        <div className="sek">
          <h4>Samlet</h4>
          <p>{SAMLET.samlet}</p>
        </div>

        <div className="sek">
          <h4>Utviklingen</h4>
          <ul className="funn">
            {SAMLET.utvikling.map((u, i) => <li key={i}>{u}</li>)}
          </ul>
        </div>

        {SAMLET.uenighet.length > 0 && (
          <div className="sek">
            <h4>Det som ikke stemmer overens</h4>
            <ul className="funn">{SAMLET.uenighet.map((u, i) => <li key={i}>{u}</li>)}</ul>
          </div>
        )}

        <div className="sek">
          <h4>Hull i grunnlaget</h4>
          <ul className="funn">{SAMLET.hull.map((h, i) => <li key={i}>{h}</li>)}</ul>
        </div>

        <div className="sek">
          <h4>Kildene i området</h4>
          {KILDER.map((k) => (
            <div key={k.id} className="kilderad stille">
              <span className="rang">#{k.rang}</span>
              <span>
                <span className="n">{k.navn}</span>
                <span className="d">{k.belegg} · {k.type} · poeng {String(k.poeng).replace(".", ",")}</span>
              </span>
            </div>
          ))}
          <div className="knapprad" style={{ marginTop: ".5rem" }}>
            <button
              type="button"
              className="knapp fyll"
              onClick={() => send({ type: "apneFlyt", flyt: { slag: "total" } })}
            >
              Åpne kildeflyt for hele området ⇉
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Rapport ──────────────────────────────────────────────────────────── */

function RapportVisning({ r }: { r: Rapport }) {
  const { send } = useTilstand();
  const tiltak = tiltakForRapport(r.id);
  const kilder = kilderForRapport(r);
  const mangler = r.status === "ikke_funnet";
  const stoffkolonner = r.punkter.length
    ? Object.keys(r.punkter[0].verdier).slice(0, 5)
    : [];

  return (
    <>
      <div className="pnl-hode">
        <Tilbake />
        <h2>{r.tittel}</h2>
        <p className="meta">
          {r.utforer}
          {r.oppdragsgiver ? ` for ${r.oppdragsgiver}` : ""}
          {r.aar ? ` · ${r.aar}` : r.maaltFra
            ? ` · punktene målt ${r.maaltFra}${r.maaltTil && r.maaltTil !== r.maaltFra ? "–" + r.maaltTil : ""}`
            : ""}
          {r.folk ? <><br />{r.folk}</> : null}
        </p>
        <span className="chips">
          {mangler ? <span className="chip lav">ikke funnet</span>
            : r.tillit === "hoy" ? <span className="chip ok">sikkert treff</span>
            : r.tillit === "middels" ? <span className="chip mid">ganske sikkert</span>
            : <span className="chip lav">usikkert treff</span>}
          <span className={"chip" + (r.funnetVia === "sitat" ? " mid" : " ok")}>
            {r.funnetVia === "sitat" ? "funnet via sitat" : "navngitt av punkt"}
          </span>
          {r.dekkerPunkter.length > 0 && <span className="chip">{r.dekkerPunkter.length} punkter</span>}
          {r.kobling && (
            <span className={"chip setning" + (r.kobling.type === "antatt" ? " lav" : "")}>{r.kobling.tekst}</span>
          )}
        </span>
      </div>

      <div className="pnl-kropp">
        {mangler ? (
          <>
            <div className="sek">
              <h4>Hvorfor den mangler</h4>
              <p className="forbehold">{r.begrunnelse}</p>
            </div>
            <div className="sek">
              <h4>Målingene finnes likevel</h4>
              <p>
                {r.dekkerPunkter.length} stasjoner i området er registrert i Vannmiljø med{" "}
                <b>{r.utforer}</b> som utførende{r.oppdragsgiver ? <> og <b>{r.oppdragsgiver}</b> som oppdragsgiver</> : null}
                {r.aar ? ` i ${r.aar}` : ""}. De er framhevet i kartet. Vi har tallene, men ikke
                beskrivelsen av hvordan de ble til eller hva som ble anbefalt.
              </p>
            </div>
            <div className="sek">
              <h4>Hva du kan gjøre</h4>
              <div className="knapprad">
                <button type="button" className="knapp">Last opp PDF</button>
                <button type="button" className="knapp">Lim inn lenke</button>
                <button type="button" className="knapp">Søk på nytt</button>
              </div>
              <p style={{ marginTop: ".5rem", fontSize: ".72rem", color: "var(--muted)" }}>
                Knappene er med for å vise flyten — de gjør ingenting i prototypen.
              </p>
            </div>
          </>
        ) : r.status === "ikke_lest" ? (
          <div className="sek">
            <h4>Ikke lest</h4>
            <p className="info">{r.begrunnelse ?? "Funnet i søket, men ikke lest ut."}</p>
            {r.url && (
              <p style={{ marginTop: ".6rem" }}>
                <a className="knapp" href={r.url} target="_blank" rel="noreferrer">Åpne kilden ↗</a>
              </p>
            )}
          </div>
        ) : (
          <>
            {r.noekkelfunn.length > 0 && (
              <div className="sek">
                <h4>Nøkkelfunn</h4>
                <ul className="funn">
                  {r.noekkelfunn.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            )}

            {r.sammendrag && (
              <div className="sek">
                <h4>Sammendrag</h4>
                <p>{r.sammendrag}</p>
              </div>
            )}

            {r.figurer.length > 0 && (
              <div className="sek">
                <h4>Figurer fra rapporten</h4>
                {r.figurer.map((f) => (
                  <button
                    key={f.fil}
                    type="button"
                    className="figur"
                    onClick={() => send({ type: "apneFigur", figur: { fil: f.fil, tittel: f.tittel, tekst: f.beskrivelse } })}
                  >
                    <img src={f.fil} alt={f.tittel} />
                    <figcaption>
                      <b>{f.tittel}</b>
                      {f.side != null && <> · side {f.side}</>}
                      <br />
                      {f.beskrivelse}
                    </figcaption>
                  </button>
                ))}
              </div>
            )}

            {r.punkter.length > 0 && (
              <div className="sek">
                <h4>Punkter med måleverdier — {r.punkter.length} lest ut av rapporten</h4>
                {/* Radene er ikke klikkbare. Punktene åpnes i kartet — der ser du
                    dem i sammenheng, og her ville to måter å gjøre det samme på
                    bare vært i veien. */}
                <table className="pt">
                  <thead>
                    <tr>
                      <th>Punkt</th>
                      {stoffkolonner.map((k) => <th key={k} style={{ textAlign: "right" }}>{k}</th>)}
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {r.punkter.map((p) => (
                      <tr key={p.navn}>
                        <td>{p.navn}</td>
                        {stoffkolonner.map((k) => (
                          <td className="v" key={k}>{p.verdier[k] ?? "–"}</td>
                        ))}
                        <td>{p.side != null && <span className="side">s. {p.side}</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {r.punkterForbehold && (
              <div className="sek">
                <h4>Forbehold</h4>
                <p className="forbehold">{r.punkterForbehold}</p>
              </div>
            )}

            {kilder.length > 0 && (
              <div className="sek">
                <h4>Kildeflyt</h4>
                {kilder.map((k) => (
                  <div key={k.id} className="kilderad stille">
                    <span className="rang">#{k.rang}</span>
                    <span>
                      <span className="n">{k.navn}</span>
                      <span className="d">{k.belegg} · poeng {String(k.poeng).replace(".", ",")}</span>
                    </span>
                  </div>
                ))}
                <div className="knapprad" style={{ marginTop: ".5rem" }}>
                  <button
                    type="button"
                    className="knapp fyll"
                    onClick={() => send({ type: "apneFlyt", flyt: { slag: "rapport", id: r.id } })}
                  >
                    Åpne kildeflyt for denne rapporten ⇉
                  </button>
                </div>
              </div>
            )}

            {tiltak.length > 0 && (
              <div className="sek">
                <h4>Tiltak rapporten dokumenterer</h4>
                {tiltak.map((t) => (
                  <button key={t.id} type="button" className="kilderad" onClick={() => send({ type: "velgTiltak", id: t.id })}>
                    <span className="rang">▨</span>
                    <span>
                      <span className="n">{t.navn}</span>
                      <span className="d">{t.type}{t.aarFra ? ` · ${t.aarFra}${t.aarTil && t.aarTil !== t.aarFra ? "–" + t.aarTil : ""}` : ""}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}

            <div className="sek">
              <h4>Referanser og original</h4>
              {r.referanser
                ? <p style={{ color: "var(--muted)", fontSize: ".78rem" }}>{r.referanser}</p>
                : <p style={{ color: "var(--muted)", fontSize: ".78rem" }}>
                    Kilden oppgir ingen egen referanseliste for denne rapporten.
                  </p>}
              {r.url && <a className="knapp" href={r.url} target="_blank" rel="noreferrer">Åpne PDF ↗</a>}
            </div>
          </>
        )}
      </div>
    </>
  );
}

/* ── Kilde ────────────────────────────────────────────────────────────── */

function KildeVisning({ k }: { k: Kilde }) {
  const { send } = useTilstand();
  const koblet = stasjonerForKilde(k);
  return (
    <>
      <div className="pnl-hode">
        <Tilbake />
        <h2>{k.navn}</h2>
        <p className="meta">Kilde {k.id} · rang {k.rang} av {KILDER.length}</p>
      </div>
      <div className="pnl-kropp">
        <div className="sek">
          <div className="poeng">
            <span className="bar"><i style={{ width: `${k.poeng * 100}%` }} /></span>
            <span className="tall">{String(k.poeng).replace(".", ",")}</span>
          </div>
          <div className="rad"><b>Belegg</b><span>{k.belegg === "belagt" ? "Belagt — dokumentert" : "Antatt — ingen enkeltmåling peker den ut"}</span></div>
          <div className="rad"><b>Type</b><span>{k.type}</span></div>
          <div className="rad"><b>Presisjon</b><span>
            {k.lat != null && k.lng != null
              ? `Koordinatfestet — ${String(k.lng).replace(".", ",")} Ø / ${String(k.lat).replace(".", ",")} N`
              : k.presisjon === "diffus"
              ? "Diffus — ingen enkeltkoordinat i kildene"
              : "Område — ingen enkeltkoordinat i kildene"}
          </span></div>
          <div className="rad"><b>Status</b><span>{k.status}</span></div>
          <div className="rad"><b>Stoffer</b><span>{k.stoffer.length ? k.stoffer.join(", ") : "ikke oppgitt"}</span></div>
          <div className="rad"><b>Grunnlag</b><span>{k.grunnlag}</span></div>
          {k.versteStasjon && <div className="rad"><b>Verste punkt</b><span>{k.versteStasjon}</span></div>}
          <div className="rad"><b>M-350</b><span>Bransjekobling via veileder M-350, vedlegg X, tabell X-1</span></div>
        </div>

        {k.lat == null && (
          <div className="sek">
            <p className="info">
              Denne kilden har ingen dokumentert koordinat i grunnlaget. I kartet er den
              plassert i tyngdepunktet til punktene den er koblet til, og streken dit viser
              koblingen — ikke en målt posisjon.
            </p>
          </div>
        )}

        <div className="sek">
          <h4>Koblede punkter — {koblet.length}</h4>
          {koblet.length ? (
            koblet.map((sn) => (
              <button key={sn.navn} type="button" className="kilderad" onClick={() => send({ type: "velgStasjon", navn: sn.navn })}>
                <span className="rang" style={{ color: klassefarge(sn.klasse) }}>●</span>
                <span><span className="n">{sn.navn}</span><span className="d">{klasseNavn(sn.klasse)}</span></span>
              </button>
            ))
          ) : (
            <p style={{ fontSize: ".78rem", color: "var(--muted)" }}>
              Ingen navngitt stasjon er koblet til denne kilden i grunnlaget.
            </p>
          )}
          <div className="knapprad" style={{ marginTop: ".5rem" }}>
            <button type="button" className="knapp fyll" onClick={() => send({ type: "apneFlyt", flyt: { slag: "total" } })}>Åpne kildeflyt for hele området ⇉</button>
          </div>
        </div>

        <div className="sek">
          <h4>Øvrige kilder</h4>
          {KILDER.filter((x) => x.id !== k.id).map((x) => (
            <button key={x.id} type="button" className="kilderad" onClick={() => send({ type: "velgKilde", id: x.id })}>
              <span className="rang">#{x.rang}</span>
              <span><span className="n">{x.navn}</span><span className="d">{x.belegg} · poeng {String(x.poeng).replace(".", ",")}</span></span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── Tiltak ───────────────────────────────────────────────────────────── */

function TiltakVisning({ t }: { t: Tiltak }) {
  const { send } = useTilstand();
  const rapport = t.rapportId ? finnRapport(t.rapportId) : null;
  return (
    <>
      <div className="pnl-hode">
        <Tilbake />
        <h2>{t.navn}</h2>
        <p className="meta">
          {t.type}
          {t.aarFra ? ` · ${t.aarFra}${t.aarTil && t.aarTil !== t.aarFra ? "–" + t.aarTil : ""}` : ""}
          <br />
          {t.utforer ?? "utfører ikke navngitt i kilden"}
          {t.oppdragsgiver ? ` for ${t.oppdragsgiver}` : ""}
        </p>
      </div>
      <div className="pnl-kropp">
        <div className="sek"><h4>Hva som ble gjort</h4><p>{t.beskrivelse}</p></div>
        {t.omfang.length > 0 && (
          <div className="sek">
            <h4>Omfang</h4>
            {t.omfang.map((o, i) => (
              <div className="rad" key={i}><b>{o.merkelapp}</b><span className="mono">{o.verdi}</span></div>
            ))}
          </div>
        )}
        {t.resultat && <div className="sek"><h4>Resultat</h4><p>{t.resultat}</p></div>}
        <div className="sek">
          <h4>Punkter tiltaket dekker</h4>
          <p style={{ fontSize: ".8rem" }}>
            {t.punkter.length
              ? `${t.punkter.length} stasjoner. Flaten i kartet er omrisset rundt dem.`
              : "Kilden knytter ikke tiltaket til navngitte stasjoner, så det tegnes ingen flate."}
          </p>
        </div>
        {rapport && (
          <div className="sek">
            <h4>Dokumentert i</h4>
            <button type="button" className="kilderad" onClick={() => send({ type: "velgRapport", id: rapport.id })}>
              <span className="rang">▣</span>
              <span><span className="n">{rapport.tittel}</span><span className="d">{rapport.utforer}{rapport.aar ? ` · ${rapport.aar}` : ""}</span></span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

/* ── Stasjon ──────────────────────────────────────────────────────────── */

function StasjonVisning({ st }: { st: Stasjon }) {
  const { send } = useTilstand();
  const rapporter = rapporterForStasjon(st.navn);
  const kilder = kilderForStasjon(st.navn);
  /* Radene rapportene har for nettopp dette punktet — rapportens egne tall,
     lest ut av PDF-en, ved siden av det Vannmiljø har. */
  const fraRapport = RAPPORTER.flatMap((r) =>
    r.punkter.filter((p) => p.navn === st.navn).map((p) => ({ r, p }))
  );
  const kunRapport = Boolean(st.opphav && st.opphav !== "Vannmiljø");
  return (
    <>
      <div className="pnl-hode">
        <Tilbake />
        <h2>{st.navn}</h2>
        <p className="meta">
          <span className="mono">{st.kode}</span> · {st.medium}
          <br />
          {st.aarFra == null ? "år ukjent" : st.aarFra === st.aarTil ? st.aarFra : `${st.aarFra}–${st.aarTil}`}
          {st.utforende ? ` · ${st.utforende}` : ""}
          {st.oppdragsgiver ? ` for ${st.oppdragsgiver}` : ""}
        </p>
        <span className="chips">
          <span className="chip" style={{ background: klassefarge(st.klasse), color: klassetekstfarge(st.klasse), borderColor: "transparent" }}>
            {klasseNavn(st.klasse)}
          </span>
          {st.opphav && <span className={"chip" + (kunRapport ? " mid" : "")}>{st.opphav}</span>}
          {st.dyp && <span className="chip">{st.dyp} m dyp</span>}
        </span>
      </div>
      <div className="pnl-kropp">
        {st.feltnotat && (
          <div className="sek">
            <h4>Feltbeskrivelse fra rapporten</h4>
            <p>{st.feltnotat}</p>
            {kunRapport && (
              <p className="forbehold">
                Punktet finnes bare i {st.opphav}. Det er ikke registrert i Vannmiljø, og
                rapporten oppgir ingen kjemiske analyser for det — bare posisjon, dyp og
                feltbeskrivelse.
              </p>
            )}
          </div>
        )}

        {fraRapport.length > 0 && (
          <div className="sek">
            <h4>Rapportens egne tall for punktet</h4>
            {fraRapport.map(({ r, p }) => (
              <div key={r.id + p.navnIRapport} style={{ marginBottom: ".7rem" }}>
                <p className="meta" style={{ marginBottom: ".3rem" }}>
                  <b>{r.rapportnummer ?? r.tittel}</b> · kalt <span className="mono">{p.navnIRapport}</span>
                  {p.side != null && <> · s. {p.side}</>}
                </p>
                <table className="pt">
                  <tbody>
                    {Object.entries(p.verdier).map(([k, v]) => (
                      <tr key={k}>
                        <td>{k}</td>
                        <td className="v">{String(v)}</td>
                        <td>{p.enheter[k] ?? ""}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {p.tekst && <p className="forbehold" style={{ marginTop: ".35rem" }}>{p.tekst}</p>}
              </div>
            ))}
          </div>
        )}

        <div className="sek">
          <h4>Måleverdier fra Vannmiljø — {st.verdier.length} stoffer</h4>
          {st.verdier.length ? (
            <table className="pt">
              <thead><tr><th>Stoff</th><th style={{ textAlign: "right" }}>Verdi</th><th>Enhet</th><th style={{ textAlign: "right" }}>n</th><th /></tr></thead>
              <tbody>
                {st.verdier.slice().sort((a, b) => b.klasse - a.klasse).map((v) => (
                  <tr key={v.stoff}>
                    <td>{v.stoff}</td>
                    <td className="v">{String(v.verdi).replace(".", ",")}</td>
                    <td>{v.enhet}</td>
                    <td className="v">{v.n}</td>
                    <td><span className="kl" style={{ background: klassefarge(v.klasse), color: klassetekstfarge(v.klasse) }}>{v.klasse}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p style={{ fontSize: ".8rem", color: "var(--muted)" }}>Ingen klassifiserte funn på denne stasjonen.</p>
          )}
        </div>

        <div className="sek">
          <h4>Rapporter som navngir stasjonen</h4>
          {rapporter.length ? rapporter.map((r) => (
            <button key={r.id} type="button" className="kilderad" onClick={() => send({ type: "velgRapport", id: r.id })}>
              <span className="rang">▣</span>
              <span><span className="n">{r.tittel}</span><span className="d">{r.utforer}{r.aar ? ` · ${r.aar}` : ""}</span></span>
            </button>
          )) : <p style={{ fontSize: ".78rem", color: "var(--muted)" }}>Ingen funnet rapport navngir denne stasjonen.</p>}
        </div>

        <div className="sek">
          <h4>Kilder koblet til stasjonen</h4>
          {kilder.length ? kilder.map((k) => (
            <div key={k.id} className="kilderad stille">
              <span className="rang">#{k.rang}</span>
              <span><span className="n">{k.navn}</span><span className="d">{k.belegg} · poeng {String(k.poeng).replace(".", ",")}</span></span>
            </div>
          )) : <p style={{ fontSize: ".78rem", color: "var(--muted)" }}>Ingen kilde er koblet til denne stasjonen.</p>}
        </div>

        {st.faktaark && (
          <div className="sek">
            <a className="knapp" href={st.faktaark} target="_blank" rel="noreferrer">Faktaark i Vannmiljø ↗</a>
          </div>
        )}
      </div>
    </>
  );
}

/* ── Velger ───────────────────────────────────────────────────────────── */

export function Panel() {
  const { s } = useTilstand();
  if (s.valg.slag === "oppsummering") {
    return <OppsummeringVisning />;
  }
  if (s.valg.slag === "rapport") {
    const r = finnRapport(s.valg.id);
    return r ? <RapportVisning r={r} /> : null;
  }
  if (s.valg.slag === "kilde") {
    const k = finnKilde(s.valg.id);
    return k ? <KildeVisning k={k} /> : null;
  }
  if (s.valg.slag === "tiltak") {
    const t = finnTiltak(s.valg.id);
    return t ? <TiltakVisning t={t} /> : null;
  }
  if (s.valg.slag === "stasjon") {
    const st = finnStasjon(s.valg.navn);
    return st ? <StasjonVisning st={st} /> : null;
  }
  return null;
}
