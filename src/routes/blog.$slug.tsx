import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { WhatsCta } from "@/components/site-layout";
import { POSTS } from "@/lib/posts";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? {
          ...pageHead(`/blog/${params.slug}`, `${loaderData.title} | Salto Lar`, loaderData.description, "article"),
          scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: loaderData.title, datePublished: loaderData.date }) }],
        }
      : { meta: [{ title: "Artigo não encontrado | Salto Lar" }, { name: "robots", content: "noindex" }] },
  component: PostPage,
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
      <div className="mt-6 space-y-4 text-lg text-foreground/85">
        {post.body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
      </div>
      <div className="mt-10"><WhatsCta /></div>
    </article>
  );
}
