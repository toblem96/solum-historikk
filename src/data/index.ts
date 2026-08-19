/**
 * Datasettene, ett per område.
 *
 * Hvert område ligger i sin egen mappe, generert av verktoy/bygg_omrade.py av
 * de samme registrene etter den samme metoden. Filene under redigeres ikke for
 * hånd. m608 og m409 er felles — de er forvaltningens grenseverdier, ikke data
 * om et sted.
 *
 * Å legge til et område er å legge til en mappe her og en linje i DATASETT.
 */
import * as bjorvika from "./bjorvika";
import * as vikkilen from "./vikkilen";
import * as vikkilen2 from "./vikkilen2";
import * as vikkilen3 from "./vikkilen3";

export { D_M608 } from "./m608";
export { D_M409 } from "./m409";

export const DATASETT = { vikkilen, bjorvika, vikkilen2, vikkilen3 };

export type OmradeId = keyof typeof DATASETT;

/** Området flaten åpner på. */
export const STANDARD_OMRADE: OmradeId = "vikkilen";

/**
 * Fanene over flaten. Navn og kommune leses ut av datasettet selv, slik at et
 * nytt område ikke krever en tekst her.
 */
export const OMRADE_FANER = (Object.keys(DATASETT) as OmradeId[]).map((id) => {
  const m = DATASETT[id].D_STASJONER_META as unknown as {
    omrade?: string; fane?: string; kommune?: string; antall?: number;
  };
  return {
    id,
    /* Fanen kan ha et eget navn: to av områdene er samme sted, og «Vikkilen»
       to ganger sier ikke hva som skiller dem. */
    navn: m.fane ?? m.omrade ?? id,
    kommune: m.kommune ?? "",
    antallStasjoner: m.antall ?? 0,
  };
});
