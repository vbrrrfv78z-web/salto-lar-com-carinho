export const SITE_URL = "https://salto-lar-com-carinho.lovable.app";
export const PHONE_DISPLAY = "(11) 4028-1879";
export const PHONE_TEL = "tel:+551140281879";
export const WHATSAPP =
  "https://wa.me/5511945338583?text=" + encodeURIComponent("Olá, Salto Lar! Gostaria de uma ajuda.");
export const ADDRESS = "R. Nove de Julho, 849 — Centro, Salto - SP";
export const MAPS =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Salto Lar, R. Nove de Julho, 849, Salto - SP");
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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
export const CONTATO_DISPLAY = "(11) 98457-1465";
export const CONTATO_TEL = "tel:+5511984571465";
export const WHATSAPP_DISPLAY = "(11) 94533-8583";
