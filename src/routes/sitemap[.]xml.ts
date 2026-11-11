import { createFileRoute } from "@tanstack/react-router";
import { POSTS } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

const PAGES = ["/", "/produtos", "/sobre", "/cidades-atendidas", "/duvidas", "/blog"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = [...PAGES, ...POSTS.map((p) => `/blog/${p.slug}`)];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE_URL}${u}</loc></url>`).join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
