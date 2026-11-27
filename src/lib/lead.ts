export const LEAD_API = "https://script.google.com/macros/s/AKfycbwIfEPL1iVSa6wQRPcGV3RIzN66VQ8f4JcvsEXJn_7AU09oc9pLYTYlHvkcsaWgTVTvUA/exec";
export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
export type Utms = Record<(typeof UTM_KEYS)[number], string>;
export const UTM_STORAGE = "salto-lar-utms";

/** (11) 94533-8583 mask for Brazilian mobile numbers. */
export function maskCelular(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** URL UTMs win over stored ones; stored ones survive page changes. */
export function mergeUtms(search: string, stored: string | null): Utms {
  let prev: Partial<Utms> = {};
  try { prev = stored ? JSON.parse(stored) : {}; } catch { prev = {}; }
  const params = new URLSearchParams(search);
  const hasNew = UTM_KEYS.some((k) => params.get(k));
  return Object.fromEntries(UTM_KEYS.map((k) => [k, hasNew ? params.get(k) ?? "" : String(prev[k] ?? "")])) as Utms;
}
