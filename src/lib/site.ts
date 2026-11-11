export const SITE_URL = "https://salto-lar-com-carinho.lovable.app";
export const PHONE_DISPLAY = "(11) 4567-8912";
export const PHONE_TEL = "tel:+551145678912";
export const WHATSAPP =
  "https://wa.me/551145678912?text=" + encodeURIComponent("Olá, Salto Lar! Gostaria de uma ajuda.");
export const ADDRESS = "R. Nove de Julho, 886 — Centro, Salto - SP";
export const MAPS =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Salto Lar, R. Nove de Julho, 886, Salto - SP");
export const CIDADES = ["Salto", "Itu", "Indaiatuba", "Porto Feliz", "Elias Fausto", "Cabreúva"];

/** Builds a per-page head() with title, description, og tags and self canonical. */
export function pageHead(path: string, title: string, description: string, type = "website") {
  const url = SITE_URL + path;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
