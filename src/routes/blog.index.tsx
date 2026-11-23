import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-layout";
import { POSTS } from "@/lib/posts";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead(
      "/blog",
      "Blog de Panela de Pressão e Peças | Salto Lar",
      "Leia o blog da Salto Lar: dicas de panela de pressão, copos de liquidificador e peças de reposição para cuidar da casa e evitar trocas desnecessárias.",
    ),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Blog Salto Lar: dicas de panela de pressão e peças" text="Conselhos do balcão para sua casa durar mais — e gastar menos." />
      <section className="mx-auto grid max-w-4xl gap-6 px-5 py-14">
        {POSTS.map((p) => (
          <article key={p.slug} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-2xl font-semibold text-brand-deep">
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-primary">{p.title}</Link>
            </h2>
            <p className="mt-2 text-muted-foreground">{p.description}</p>
            <Link to="/blog/$slug" params={{ slug: p.slug }} className="mt-4 inline-block font-bold text-primary">Ler artigo →</Link>
          </article>
        ))}
      </section>
    </>
  );
}
