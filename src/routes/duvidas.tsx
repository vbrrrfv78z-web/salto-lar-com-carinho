import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsCta } from "@/components/site-layout";
import { breadcrumbSchema, pageHead } from "@/lib/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["Vocês consertam panela de pressão?", "Sim. Trocamos borracha de vedação, cabo, alça, válvula e pino de diversas marcas. Traga a panela ou mande uma foto pelo WhatsApp."],
  ["Como sei qual peça serve na minha panela?", "Traga a peça antiga ou a tampa. Se preferir, mande uma foto da marca e do tamanho pelo WhatsApp que a gente confere."],
  ["Vocês têm copo de liquidificador?", "Temos dezenas de modelos. Olhe a marca e o modelo na etiqueta embaixo da base, ou traga a base até a loja."],
  ["Qual o horário de atendimento?", "Segunda a sexta, das 8h às 18h, e sábado das 8h às 13h. Domingo fechado."],
  ["Onde fica a loja?", "Na R. Nove de Julho, no Centro de Salto, SP. É a loja de fachada lilás."],
  ["Atendem outras cidades?", "Sim. Recebemos clientes de Itu, Indaiatuba, Porto Feliz, Elias Fausto, Cabreúva e região."],
];

export const Route = createFileRoute("/duvidas")({
  head: () => ({
    ...pageHead(
      "/duvidas",
      "Dúvidas sobre Conserto de Panela | Salto Lar",
      "Respostas sobre conserto de panela de pressão, peças, copos de liquidificador, horários e cidades atendidas pela Salto Lar em Salto, SP.",
    ),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema("/duvidas", "Dúvidas frequentes")) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
        }),
      },
    ],
  }),
  component: Duvidas,
});

function Duvidas() {
  return (
    <>
      <PageHero eyebrow="Tire suas dúvidas" title="Dúvidas sobre conserto de panela de pressão e peças" text="Não achou sua resposta? Chama a gente no WhatsApp." />
      <section className="mx-auto max-w-3xl px-5 py-14">
        <h2 className="sr-only">Conserto de panela de pressão: perguntas e respostas</h2>
        <Accordion type="single" collapsible defaultValue="item-0">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-bold text-brand-deep">{q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 text-center"><WhatsCta /></div>
      </section>
    </>
  );
}
