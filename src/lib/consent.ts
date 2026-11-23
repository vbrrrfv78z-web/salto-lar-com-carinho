export const CONSENT_KEY = "salto-lar-measurement-consent";
export type Consent = "accepted" | "rejected";
export function parseConsent(value: string | null): Consent | null {
  return value === "accepted" || value === "rejected" ? value : null;
}
export function canLoadMeasurement(value: string | null) {
  return parseConsent(value) === "accepted";
}