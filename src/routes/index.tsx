import { createFileRoute } from "@tanstack/react-router";
import fachada from "@/assets/fachada.jpg.asset.json";
import pecasPanela from "@/assets/pecas-panela.jpg.asset.json";
import copos from "@/assets/copos-liquidificador.jpg.asset.json";
import moveis from "@/assets/acessorios-moveis.jpg.asset.json";
import churrasqueiras from "@/assets/churrasqueiras.jpg.asset.json";
import aspirador from "@/assets/sacos-aspirador.jpg.asset.json";
import toalhas from "@/assets/toalhas-mesa.jpg.asset.json";
import duchas from "@/assets/duchas-eletrica.jpg.asset.json";
import caixas from "@/assets/caixas-termicas.jpg.asset.json";

const PHONE_DISPLAY = "(11) 4567-8912";
const WHATSAPP = "https://wa.me/551145678912?text=" + encodeURIComponent("Olá, Salto Lar! Gostaria de uma ajuda.");
const ADDRESS = "R. Nove de Julho, 886 — Centro, Salto - SP";
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Salto Lar, R. Nove de Julho, 886, Salto - SP");

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Salto Lar — Conserto de panelas, peças e utilidades em Salto" },
      { name: "description", content: "Loja de família em Salto, SP. Consertamos panelas de pressão e ajudamos você a achar a peça certa — mesmo quando a melhor opção é a mais simples." },
      { property: "og:title", content: "Salto Lar — Tudo para seu lar" },
      { property: "og:description", content: "Conserto de panelas, peças e utilidades para casa em Salto, SP. Atendimento de família." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const categorias = [
  { img: pecasPanela.url, title: "Peças de panela", text: "Cabos, alças, válvulas e pinos de várias marcas." },
  { img: copos.url, title: "Copos de liquidificador", text: "Dezenas de modelos. Traga o seu que a gente acha." },
  { img: moveis.url, title: "Acessórios para móveis", text: "Pés, rodízios, puxadores e dobradiças." },
  { img: aspirador.url, title: "Sacos para aspirador", text: "Para Electrolux e outras marcas." },
  { img: duchas.url, title: "Duchas e elétrica", text: "Chuveiros, resistências, extensões e válvulas." },
  { img: churrasqueiras.url, title: "Churrasqueiras e fogareiros", text: "Grelhas, fogareiros e itens para gás." },
  { img: toalhas.url, title: "Toalhas de mesa", text: "Plástico de mesa vendido por metro." },
  { img: caixas.url, title: "Caixas térmicas", text: "Do 3 ao 45 litros." },
];

function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.6 2.1 1.1 1 2.1 1.3 2.4 1.4.3.2.5.1.6 0l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Topo */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#" className="leading-none">
            <span className="block font-display text-xl font-semibold text-primary">Salto Lar</span>
            <span className="text-xs italic text-muted-foreground">Tudo para seu lar</span>
          </a>
          <nav className="hidden gap-7 text-sm font-semibold text-foreground/80 md:flex">
            <a href="#conserto" className="hover:text-primary">Conserto</a>
            <a href="#pecas" className="hover:text-primary">Peças e utilidades</a>
            <a href="#familia" className="hover:text-primary">Nossa loja</a>
            <a href="#visite" className="hover:text-primary">Como chegar</a>
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground">
            <WhatsIcon /> <span className="hidden sm:inline">Falar com a loja</span><span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-lilac-gradient">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-10 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-deep">Loja de família · Salto, SP</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-brand-deep sm:text-5xl md:text-6xl">
              Antes de trocar, traz aqui que a gente olha.
            </h1>
            <p className="mt-5 max-w-md text-lg text-accent-foreground/85">
              Consertamos sua panela, achamos a peça que falta e explicamos as opções com sinceridade — mesmo quando a melhor saída é a mais barata.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground shadow-soft">
                <WhatsIcon /> Mandar foto pelo WhatsApp
              </a>
              <a href="#visite" className="inline-flex items-center justify-center rounded-full border-2 border-brand-deep/30 px-6 py-4 font-bold text-brand-deep">
                Ver endereço e horários
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={fachada.url} alt="Fachada lilás da loja Salto Lar, número 849" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-card px-4 py-3 shadow-soft">
              <p className="text-sm font-bold text-primary">A loja lilás do Centro</p>
              <p className="text-xs text-muted-foreground">Você não tem como errar 💜</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3">
          {[
            ["Consertar primeiro", "Se dá pra arrumar, a gente fala. Trocar é a última opção."],
            ["Conversa sincera", "Indicamos o que resolve pra você, não o que vende mais."],
            ["Peça certa de primeira", "Traga a peça antiga ou uma foto. A gente compara na hora."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="font-display text-xl font-semibold text-primary">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conserto — dobra roxa */}
      <section id="conserto" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <img src={pecasPanela.url} alt="Cabos, alças e válvulas para panela de pressão" className="aspect-square w-full rounded-3xl object-cover md:order-2" />
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-lilac">Conserto de panelas</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">Sua panela de pressão ainda tem muita história pra contar.</h2>
            <p className="mt-5 text-lg text-primary-foreground/85">Trocamos cabo, alça, borracha, válvula e pino de diversas marcas. Também damos uma olhada em pequenos eletrodomésticos.</p>
            <ol className="mt-8 space-y-4">
              {[
                ["Traga ou mande uma foto", "Pelo WhatsApp ou direto no balcão."],
                ["A gente avalia junto com você", "Explicamos o que tem e quanto custa."],
                ["Você decide", "Se não valer a pena consertar, a gente te conta."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lilac font-bold text-accent-foreground">{i + 1}</span>
                  <div><p className="font-bold">{t}</p><p className="text-primary-foreground/75">{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Peças */}
      <section id="pecas" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Peças e utilidades</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-brand-deep sm:text-4xl">Aquela pecinha que ninguém tem? Provavelmente está aqui.</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {categorias.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={c.img} alt={c.title} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <div className="p-3 sm:p-4">
                <h3 className="font-bold leading-snug text-brand-deep">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-2xl bg-secondary p-5 text-secondary-foreground">
          <strong>Dica de casa:</strong> antes de vir, mande no WhatsApp uma foto da peça e do modelo. A gente confere se tem e já separa pra você.
        </p>
      </section>

      {/* Família */}
      <section id="familia" className="bg-lilac-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Negócio de família</p>
          <blockquote className="mt-5 font-display text-2xl font-medium leading-snug text-brand-deep sm:text-3xl">
            “Aqui ninguém sai com o que não precisa. Se o conserto resolve, é o conserto. Se uma pecinha resolve, é a pecinha.”
          </blockquote>
          <p className="mt-5 text-muted-foreground">Atendimento no balcão, com calma e de olho no que é melhor pra sua casa.</p>
        </div>
      </section>

      {/* Visite — dobra roxa */}
      <section id="visite" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">Passa aqui. A gente te ajuda a resolver.</h2>
            <div className="mt-8 space-y-5 text-lg">
              <div><p className="text-sm font-bold uppercase tracking-wider text-lilac">Endereço</p><p>{ADDRESS}</p></div>
              <div><p className="text-sm font-bold uppercase tracking-wider text-lilac">Horários</p><p>Segunda a sexta, 8h às 17h<br />Sábado, 8h às 13h</p></div>
              <div><p className="text-sm font-bold uppercase tracking-wider text-lilac">Telefone</p><a href="tel:+551145678912" className="underline underline-offset-4">{PHONE_DISPLAY}</a></div>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-lg font-bold text-primary-foreground">
              <WhatsIcon /> Chamar no WhatsApp
            </a>
            <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-lilac px-6 py-4 text-lg font-bold text-accent-foreground">
              Abrir no mapa
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-brand-deep py-8 text-center text-sm text-primary-foreground/70">
        <p className="font-display text-lg text-primary-foreground">Salto Lar</p>
        <p>Tudo para seu lar · Salto, SP</p>
      </footer>

      {/* WhatsApp flutuante no celular */}
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-soft md:hidden">
        <WhatsIcon />
      </a>
    </div>
  );
}
