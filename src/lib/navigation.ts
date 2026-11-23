import { POSTS } from "@/lib/posts";

export const PAGE_LINKS = [
  { to: "/", label: "Início", text: "Conserto de panela de pressão em Salto endereço telefone horários Reginaldo" },
  { to: "/produtos", label: "Produtos e peças", text: "borracha válvula cabo alça pino panela copo liquidificador chuveiro resistência aspirador móveis caixas de isopor toalhas churrasqueiras" },
  { to: "/sobre", label: "Sobre a Salto Lar", text: "loja de família atendimento balcão fachada" },
  { to: "/cidades-atendidas", label: "Cidades atendidas", text: "Salto Itu Indaiatuba Porto Feliz Elias Fausto Cabreúva região" },
  { to: "/duvidas", label: "Dúvidas frequentes", text: "conserto de panela de pressão peça liquidificador horário atendimento segunda sexta sábado domingo endereço" },
  { to: "/blog", label: "Blog Salto Lar", text: "dicas panela de pressão copo liquidificador" },
] as const;

export function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").trim();
}

export function searchSite(query: string) {
  const words = normalizeSearch(query).split(/\s+/).filter(Boolean);
  if (!words.length) return { pages: [], posts: [] };
  const matches = (text: string) => words.every((word) => normalizeSearch(text).includes(word));
  return {
    pages: PAGE_LINKS.filter((page) => matches(`${page.label} ${page.text}`)),
    posts: POSTS.filter((post) => matches(`${post.title} ${post.description} ${post.body.join(" ")}`)),
  };
}