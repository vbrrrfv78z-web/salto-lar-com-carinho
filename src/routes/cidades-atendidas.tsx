import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsCta } from "@/components/site-layout";
import { CIDADES, pageHead } from "@/lib/site";

export const Route = createFileRoute("/cidades-atendidas")({
  staticData: { sitemap: true },
  head: () =>
    pageHead(
      "/cidades-atendidas",
      "Conserto de Panela e Peças em Salto, Itu, Indaiatuba e Região | Salto Lar",
      "A Salto Lar atende clientes de Salto, Itu, Indaiatuba, Porto Feliz, Elias Fausto e Cabreúva com conserto de panela de pressão e peças para casa.",
    ),
  component: Cidades,
});

const detalhes: Record<string, string> = {
  Salto: "Estamos no Centro de Salto, na R. Nove de Julho. Passe no balcão ou mande foto pelo WhatsApp.",
  Itu: "A poucos minutos de Itu. Muitos clientes de Itu trazem a panela de pressão para conserto e levam no mesmo dia.",
  Indaiatuba: "Clientes de Indaiatuba podem confirmar a peça pelo WhatsApp antes de vir, para não perder a viagem.",
  "Porto Feliz": "Atendemos Porto Feliz com peças de panela, copos de liquidificador e resistências.",
  "Elias Fausto": "De Elias Fausto, mande a foto da peça e a gente separa para você retirar.",
  Cabreúva: "Clientes de Cabreúva encontram aqui as pecinhas difíceis de achar para casa.",
};

function Cidades() {
  return (
    <>
      <PageHero eyebrow="Cidades atendidas" title="Conserto de panela e peças para casa em Salto e região" text="Somos de Salto, mas recebemos clientes de toda a região. Confirme pelo WhatsApp se temos a peça e venha buscar." />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CIDADES.map((c) => (
            <article key={c} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-2xl font-semibold text-primary">{c}</h2>
              <h3 className="mt-2 text-sm font-bold text-brand-deep">Conserto de panela de pressão e peças em {c}</h3>
              <p className="mt-2 text-muted-foreground">{detalhes[c]}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center"><WhatsCta text="Confirmar peça antes de vir" /></div>
      </section>
    </>
  );
}
