import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { WHATSAPP } from "@/lib/site";
import { LEAD_API, UTM_KEYS, UTM_STORAGE, maskCelular, mergeUtms, type Utms } from "@/lib/lead";

export function WhatsLeadForm() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState("");
  const [utms, setUtms] = useState<Utms>(() => mergeUtms("", null));
  const nomeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const merged = mergeUtms(window.location.search, localStorage.getItem(UTM_STORAGE));
    localStorage.setItem(UTM_STORAGE, JSON.stringify(merged));
    setUtms(merged);
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest(".open-frm-whatsapp-1");
      if (!el) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    nomeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && !sending && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, sending]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!nome.trim()) { setError("Informe seu nome."); return; }
    if (telefone.replace(/\D/g, "").length < 10) { setError("Informe seu WhatsApp com DDD."); return; }
    setError("");
    setSending(true);
    try {
      await fetch(LEAD_API, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ nome: nome.trim(), telefone, ...utms }) });
    } catch (err) { console.error(err); }
    window.location.href = WHATSAPP;
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center" onClick={() => !sending && setOpen(false)}>
      <div role="dialog" aria-modal="true" aria-labelledby="whats-lead-title" className="w-full max-w-sm overflow-hidden rounded-2xl bg-background shadow-soft" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-3 bg-whatsapp px-5 py-4 text-primary-foreground">
          <div>
            <p id="whats-lead-title" className="text-lg font-bold">Fale com a Salto Lar</p>
            <p className="text-sm opacity-90">Preencha para começar uma conversa no WhatsApp</p>
          </div>
          <button type="button" aria-label="Fechar" onClick={() => setOpen(false)} disabled={sending} className="shrink-0 rounded-full p-1"><X className="h-5 w-5" /></button>
        </div>
        <form onSubmit={submit} className="space-y-3 p-5" noValidate>
          <input ref={nomeRef} id="nome" name="nome" aria-label="Nome" placeholder="Nome" autoComplete="name" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base" />
          <input id="telefone" name="telefone" aria-label="WhatsApp" placeholder="WhatsApp (11) 90000-0000" inputMode="tel" autoComplete="tel" value={telefone} onChange={(e) => setTelefone(maskCelular(e.target.value))} className="mask-telefone w-full rounded-lg border border-input bg-background px-4 py-3 text-base" />
          {UTM_KEYS.map((k) => <input key={k} type="hidden" id={k} name={k} value={utms[k]} />)}
          {error && <p role="alert" className="text-sm font-semibold text-destructive">{error}</p>}
          <button type="submit" disabled={sending} className="trackear-btn-enviar-formulario w-full rounded-lg bg-whatsapp px-4 py-3 font-bold uppercase text-primary-foreground disabled:opacity-70">
            {sending ? "Aguarde..." : "Iniciar conversa"}
          </button>
          <p className="text-center text-xs text-muted-foreground">Ao informar meus dados, eu concordo com a <Link to="/privacidade" onClick={() => setOpen(false)} className="underline">política de privacidade</Link>.</p>
        </form>
      </div>
    </div>
  );
}
