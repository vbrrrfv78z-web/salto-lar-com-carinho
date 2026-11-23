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

const BREADCRUMB_LABELS: Record<string, string> = {
  "/produtos": "Produtos e peças", "/sobre": "Sobre a Salto Lar",
  "/cidades-atendidas": "Cidades atendidas", "/duvidas": "Dúvidas frequentes",
  "/blog": "Blog", "/privacidade": "Privacidade",
};

export function breadcrumbSchema(path: string, title: string) {
  const items = [{ "@type": "ListItem", position: 1, name: "Início", item: SITE_URL + "/" }];
  if (path.startsWith("/blog/")) items.push({ "@type": "ListItem", position: 2, name: "Blog", item: SITE_URL + "/blog" });
  if (path !== "/") items.push({ "@type": "ListItem", position: items.length + 1, name: BREADCRUMB_LABELS[path] ?? title.replace(/ \| Salto Lar$/, ""), item: SITE_URL + path });
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}

export const BUSINESS_SCHEMA = {
  "@context": "https://schema.org", "@type": ["Store", "Organization"],
  "@id": SITE_URL + "/#organization", name: "Salto Lar", url: SITE_URL + "/",
  telephone: "+551140281879",
  address: { "@type": "PostalAddress", streetAddress: "R. Nove de Julho, 849 — Centro", addressLocality: "Salto", addressRegion: "SP", addressCountry: "BR" },
  areaServed: CIDADES,
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "13:00" },
  ],
};

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
    scripts: [
      ...(path === "/" ? [
        { type: "application/ld+json", children: JSON.stringify(BUSINESS_SCHEMA) },
        { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", "@id": SITE_URL + "/#website", name: "Salto Lar", url: SITE_URL + "/", inLanguage: "pt-BR", publisher: { "@id": SITE_URL + "/#organization" } }) },
      ] : [{ type: "application/ld+json", children: JSON.stringify(breadcrumbSchema(path, title)) }]),
    ],
  };
}
export const CONTATO_DISPLAY = "(11) 98457-1465";
export const CONTATO_TEL = "tel:+5511984571465";
export const WHATSAPP_DISPLAY = "(11) 94533-8583";
