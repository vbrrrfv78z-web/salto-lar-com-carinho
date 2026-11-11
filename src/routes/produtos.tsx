import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsCta } from "@/components/site-layout";
import { pageHead } from "@/lib/site";
import pecasPanela from "@/assets/pecas-panela.jpg.asset.json";
import copos from "@/assets/copos-liquidificador.jpg.asset.json";
import moveis from "@/assets/acessorios-moveis.jpg.asset.json";
import churrasqueiras from "@/assets/churrasqueiras.jpg.asset.json";
import aspirador from "@/assets/sacos-aspirador.jpg.asset.json";
import toalhas from "@/assets/toalhas-mesa.jpg.asset.json";
import duchas from "@/assets/duchas-eletrica.jpg.asset.json";
import caixas from "@/assets/caixas-termicas.jpg.asset.json";

export const Route = createFileRoute("/produtos")({
  staticData: { sitemap: true },
  head: () =>
    pageHead(
      "/produtos",
      "Peças para Panela de Pressão, Copos de Liquidificador e Utilidades | Salto Lar",
      "Peças para panela de pressão, copos de liquidificador, resistências de chuveiro, sacos para aspirador e utilidades para casa em Salto, Itu e Indaiatuba.",
    ),
  component: Produtos,
});

const itens = [
  { img: pecasPanela.url, title: "Peças para panela de pressão", text: "Borrachas de vedação, cabos, alças, válvulas e pinos de várias marcas. Também fazemos o conserto." },
  { img: copos.url, title: "Copos de liquidificador", text: "Dezenas de modelos de copo, tampa e lâmina. Traga a base que a gente acha o encaixe." },
  { img: duchas.url, title: "Chuveiros, duchas e elétrica", text: "Resistências, chuveiros, extensões, tomadas e válvulas." },
  { img: aspirador.url, title: "Sacos para aspirador", text: "Para Electrolux e outras marcas." },
  { img: moveis.url, title: "Acessórios para móveis", text: "Pés, rodízios, puxadores e dobradiças." },
  { img: churrasqueiras.url, title: "Churrasqueiras e fogareiros", text: "Grelhas, fogareiros e itens para gás." },
  { img: toalhas.url, title: "Toalhas e plástico de mesa", text: "Plástico de mesa vendido por metro, várias estampas." },
  { img: caixas.url, title: "Caixas térmicas", text: "Do 3 ao 45 litros." },
];

function Produtos() {
  return (
    <>
      <PageHero eyebrow="Produtos e peças" title="Peças e utilidades para casa em Salto, SP" text="Aquela pecinha que ninguém tem? Provavelmente está aqui. Mande uma foto pelo WhatsApp e a gente confere antes de você vir." />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-3xl font-semibold text-brand-deep">Nossas categorias</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {itens.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={c.img} alt={c.title} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-brand-deep">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center">
          <h2 className="font-display text-3xl font-semibold">Não achou o que procura?</h2>
          <p className="mt-3 text-primary-foreground/85">Temos muito mais no balcão do que cabe aqui. Pergunte pra gente.</p>
          <div className="mt-6"><WhatsCta text="Perguntar se tem" /></div>
        </div>
      </section>
    </>
  );
}
