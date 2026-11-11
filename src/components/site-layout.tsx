import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ADDRESS, CIDADES, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/site";

export function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.6 2.1 1.1 1 2.1 1.3 2.4 1.4.3.2.5.1.6 0l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" />
    </svg>
  );
}

const NAV = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/cidades-atendidas", label: "Cidades atendidas" },
  { to: "/duvidas", label: "Dúvidas" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link to="/" className="leading-none" onClick={() => setOpen(false)}>
          <span className="block font-display text-xl font-semibold text-primary">Salto Lar</span>
          <span className="text-xs italic text-muted-foreground">Tudo para seu lar</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-semibold text-foreground/80 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="hover:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground">
            <WhatsIcon /> <span className="hidden sm:inline">Falar com a loja</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary lg:hidden"
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="block py-3 text-lg font-semibold text-foreground/85">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="bg-brand-deep py-10 text-sm text-primary-foreground/75">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg text-primary-foreground">Salto Lar</p>
            <p>Tudo para seu lar · Loja de família em Salto, SP</p>
          </div>
          <div>
            <p className="font-bold text-primary-foreground">Visite</p>
            <p>{ADDRESS}</p>
            <a href={PHONE_TEL} className="underline underline-offset-4">{PHONE_DISPLAY}</a>
          </div>
          <div>
            <p className="font-bold text-primary-foreground">Atendemos</p>
            <p>{CIDADES.join(", ")} e região.</p>
          </div>
        </div>
      </footer>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-soft md:hidden">
        <WhatsIcon />
      </a>
    </>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-lilac-gradient">
      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-deep">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-brand-deep sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-accent-foreground/85">{text}</p>
      </div>
    </section>
  );
}

export function WhatsCta({ text = "Chamar no WhatsApp" }: { text?: string }) {
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground shadow-soft">
      <WhatsIcon /> {text}
    </a>
  );
}
