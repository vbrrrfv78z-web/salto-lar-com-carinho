import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsCta } from "@/components/site-layout";
import { pageHead } from "@/lib/site";
import fachada from "@/assets/fachada.jpg.asset.json";

export const Route = createFileRoute("/sobre")({
  staticData: { sitemap: true },
  head: () =>
    pageHead(
      "/sobre",
      "Sobre a Salto Lar — Loja de Família no Centro de Salto, SP",
      "Conheça a Salto Lar, loja de família no Centro de Salto: atendimento sincero, conserto antes da troca e a peça certa para sua casa.",
    ),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <PageHero eyebrow="Sobre nós" title="Uma loja de família no Centro de Salto" text="A gente prefere ver sua panela voltar a funcionar do que te vender uma nova. É assim que a Salto Lar atende há anos." />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2">
        <img src={fachada.url} alt="Fachada lilás da loja Salto Lar em Salto, SP" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
        <div>
          <h2 className="font-display text-3xl font-semibold text-brand-deep">Nosso jeito de atender</h2>
          <p className="mt-4 text-muted-foreground">Atendimento no balcão, com calma. Você traz o problema, a gente olha junto e explica as opções — inclusive quando a mais simples é a melhor pra você.</p>
          <h3 className="mt-8 font-display text-xl font-semibold text-primary">Consertar primeiro</h3>
          <p className="mt-1 text-muted-foreground">Se dá pra arrumar, a gente fala. Trocar é a última opção.</p>
          <h3 className="mt-6 font-display text-xl font-semibold text-primary">Conversa sincera</h3>
          <p className="mt-1 text-muted-foreground">Indicamos o que resolve, não o que vende mais.</p>
          <h3 className="mt-6 font-display text-xl font-semibold text-primary">A loja lilás do Centro</h3>
          <p className="mt-1 text-muted-foreground">Na R. Nove de Julho, fácil de achar e de estacionar por perto.</p>
          <div className="mt-8"><WhatsCta text="Falar com a família Salto Lar" /></div>
        </div>
      </section>
    </>
  );
}
