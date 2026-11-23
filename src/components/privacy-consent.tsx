import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CONSENT_KEY, parseConsent, type Consent } from "@/lib/consent";

export function PrivacyConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState(false);
  useEffect(() => {
    try { setConsent(parseConsent(localStorage.getItem(CONSENT_KEY))); } catch { /* Storage unavailable: ask for consent. */ }
    setReady(true);
  }, []);
  useEffect(() => {
    if (consent !== "accepted" || document.getElementById("salto-gtm")) return;
    const win = window as Window & { dataLayer?: unknown[] };
    win.dataLayer = win.dataLayer ?? [];
    win.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const script = document.createElement("script");
    script.id = "salto-gtm";
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PR5N4VFT";
    document.head.appendChild(script);
  }, [consent]);
  function choose(value: Consent) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch { /* Consent still applies to this visit. */ }
    const withdrawing = consent === "accepted" && value === "rejected";
    setConsent(value);
    setSettings(false);
    if (withdrawing) window.location.reload();
  }
  return (
    <>
      <Button variant="link" className="h-auto whitespace-normal px-0 text-primary-foreground/80" onClick={() => setSettings(true)}>Preferências de cookies</Button>
      {ready && (consent === null || settings) && (
        <section aria-label="Privacidade e cookies" className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background p-4 shadow-soft">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm text-foreground">Com sua autorização, usamos ferramentas de medição para entender as visitas ao site. Você pode recusar e continuar navegando. <Link to="/privacidade" className="font-bold text-primary underline">Política de privacidade</Link>.</p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => choose("rejected")}>Recusar opcionais</Button>
              <Button onClick={() => choose("accepted")}>Aceitar medição</Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}