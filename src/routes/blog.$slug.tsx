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
          ...pageHead(`/blog/${params.slug}`, `${loaderData.seoTitle} | Salto Lar`, loaderData.description, "article"),
          scripts: [
            ...pageHead(`/blog/${params.slug}`, `${loaderData.seoTitle} | Salto Lar`, loaderData.description, "article").scripts,
            { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: loaderData.title, description: loaderData.description, datePublished: loaderData.date, mainEntityOfPage: SITE_URL + `/blog/${params.slug}`, author: { "@type": "Organization", name: "Equipe Salto Lar", url: SITE_URL + "/sobre" }, publisher: { "@type": "Organization", name: "Salto Lar", "@id": SITE_URL + "/#organization" } }) },
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

function PostPage() {
  const post = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <Link to="/blog" className="text-sm font-bold text-primary">← Blog</Link>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-deep">{post.title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">Por <Link to="/sobre" rel="author" className="text-primary underline">Equipe Salto Lar</Link> · <time dateTime={post.date}>{post.date.split("-").reverse().join("/")}</time></p>
      <h2 className="mt-8 font-display text-2xl font-semibold text-brand-deep">{post.slug.includes("borracha") ? "Borracha da panela de pressão: sinais e cuidados" : "Copo do liquidificador: marca, modelo e encaixe"}</h2>
      <div className="mt-6 space-y-4 text-lg text-foreground/85">
        {post.body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
      </div>
      <div className="mt-10"><WhatsCta /></div>
    </article>
  );
}
