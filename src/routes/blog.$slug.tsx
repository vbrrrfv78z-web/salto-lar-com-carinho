import type React from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { WhatsCta } from "@/components/site-layout";
import { POSTS } from "@/lib/posts";
import { pageHead, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? {
          ...pageHead(`/blog/${params.slug}`, (loaderData.seoTitle.includes("Salto Lar") ? loaderData.seoTitle : `${loaderData.seoTitle} | Salto Lar`), loaderData.description, "article"),
          scripts: [
            ...pageHead(`/blog/${params.slug}`, (loaderData.seoTitle.includes("Salto Lar") ? loaderData.seoTitle : `${loaderData.seoTitle} | Salto Lar`), loaderData.description, "article").scripts,
            { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: loaderData.title, description: loaderData.description, datePublished: loaderData.date, ...(loaderData.image ? { image: SITE_URL + loaderData.image } : {}), mainEntityOfPage: SITE_URL + `/blog/${params.slug}`, author: { "@type": "Organization", name: "Equipe Salto Lar", url: SITE_URL + "/sobre" }, publisher: { "@type": "Organization", name: "Salto Lar", "@id": SITE_URL + "/#organization" } }) },
          ],
        }
      : { meta: [{ title: "Artigo não encontrado | Salto Lar" }, { name: "robots", content: "noindex" }] },
  component: PostPage,
  errorComponent: () => <div className="mx-auto max-w-3xl px-5 py-14"><h1 className="font-display text-3xl text-brand-deep">Não foi possível carregar o artigo</h1><Link to="/blog" className="mt-4 inline-block text-primary underline">Voltar ao blog</Link></div>,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-20 text-center">
      <h1 className="font-display text-3xl text-brand-deep">Artigo não encontrado</h1>
      <Link to="/blog" className="mt-4 inline-block font-bold text-primary">Voltar ao blog</Link>
    </div>
  ),
});

const RELATED_LINKS: Record<string, { to: "/produtos" | "/duvidas" | "/sobre" | "/cidades-atendidas"; label: string }[]> = {
  "mangueira-e-regulador-de-gas-em-salto": [{ to: "/duvidas", label: "Tire suas dúvidas antes de vir à loja" }],
  "utilidades-domesticas-em-salto": [{ to: "/sobre", label: "Conheça a história da Salto Lar" }, { to: "/cidades-atendidas", label: "Veja as cidades atendidas" }],
};

function PostPage() {
  const post = Route.useLoaderData();
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) {
      const items = list;
      blocks.push(
        <ul key={`ul-${blocks.length}`} className="list-disc space-y-2 pl-6">
          {items.map((li) => {
            const [label, ...rest] = li.split(": ");
            return <li key={li}><strong className="text-brand-deep">{label}:</strong> {rest.join(": ")}</li>;
          })}
        </ul>,
      );
      list = [];
    }
  };
  post.body.forEach((line, i) => {
    if (line.startsWith("- ")) return void list.push(line.slice(2));
    flush();
    if (line.startsWith("## ")) blocks.push(<h2 key={i} className="pt-4 font-display text-2xl font-semibold text-brand-deep">{line.slice(3)}</h2>);
    else blocks.push(<p key={i}>{line}</p>);
  });
  flush();
  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <Link to="/blog" className="text-sm font-bold text-primary">← Blog</Link>
      <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-brand-deep md:text-4xl">{post.title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">Por <Link to="/sobre" rel="author" className="text-primary underline">Equipe Salto Lar</Link> · <time dateTime={post.date}>{post.date.split("-").reverse().join("/")}</time></p>
      {post.image && <img src={post.image} alt={post.imageAlt ?? post.title} width={1200} height={800} className="mt-8 aspect-[3/2] w-full rounded-2xl object-cover" />}
      <div className="mt-8 space-y-4 text-lg text-foreground/85">{blocks}</div>
      <p className="mt-6 text-lg text-foreground/85">Veja também nossa <Link to="/produtos" className="font-semibold text-primary underline">linha completa de produtos e peças</Link>{(RELATED_LINKS[post.slug] ?? []).map((l) => <span key={l.to}> · <Link to={l.to} className="font-semibold text-primary underline">{l.label}</Link></span>)}.</p>
      <div className="mt-10 rounded-2xl bg-secondary p-6">
        {post.ctaTitle && <h2 className="font-display text-2xl font-semibold text-brand-deep">{post.ctaTitle}</h2>}
        {post.ctaText && <p className="mt-2 mb-5 text-foreground/85">{post.ctaText}</p>}
        <WhatsCta text={post.ctaLabel ?? "Chamar no WhatsApp"} />
      </div>
      <nav aria-label="Leia também" className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-brand-deep">Leia também</h2>
        <ul className="mt-4 space-y-2">
          {others.map((o) => <li key={o.slug}><Link to="/blog/$slug" params={{ slug: o.slug }} className="text-primary underline">{o.title}</Link></li>)}
        </ul>
      </nav>
    </article>
  );
}
