import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { PAGE_LINKS, searchSite } from "@/lib/navigation";
import { POSTS } from "@/lib/posts";

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = searchSite(query);
  return <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild><Button variant="ghost" size="icon" aria-label="Pesquisar no site" title="Pesquisar no site"><Search /></Button></DialogTrigger>
    <DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg">
      <DialogTitle>Pesquisar na Salto Lar</DialogTitle>
      <DialogDescription>Produtos, cidades, dúvidas e dicas de casa.</DialogDescription>
      <Input aria-label="O que você procura?" placeholder="O que você procura?" value={query} onChange={(event) => setQuery(event.target.value)} />
      <div aria-live="polite" className="space-y-3">
        {results.pages.map((page) => <Link key={page.to} to={page.to} onClick={() => setOpen(false)} className="block border-b border-border py-2 font-bold text-primary">{page.label}</Link>)}
        {results.posts.map((post) => <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} onClick={() => setOpen(false)} className="block border-b border-border py-2 font-bold text-primary">{post.title}</Link>)}
        {query.trim() && !results.pages.length && !results.posts.length && <p className="text-muted-foreground">Nenhum resultado para “{query}”.</p>}
      </div>
    </DialogContent>
  </Dialog>;
}

export function SiteBreadcrumbs() {
  const path = useLocation().pathname.replace(/\/$/, "") || "/";
  if (path === "/") return null;
  const page = PAGE_LINKS.find((item) => item.to === path);
  const post = POSTS.find((item) => `/blog/${item.slug}` === path);
  if (!page && !post && path !== "/privacidade") return null;
  return <nav aria-label="Caminho da página" className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-4 text-sm text-primary">
    <Link to="/" className="underline underline-offset-4">Início</Link><span aria-hidden>›</span>
    {post ? <><Link to="/blog" className="underline underline-offset-4">Blog</Link><span aria-hidden>›</span><Link to="/blog/$slug" params={{ slug: post.slug }} aria-current="page" className="underline underline-offset-4">{post.title}</Link></> : page ? <Link to={page.to} aria-current="page" className="underline underline-offset-4">{page.label}</Link> : <Link to="/privacidade" aria-current="page" className="underline underline-offset-4">Privacidade</Link>}
  </nav>;
}

export function RelatedPages() {
  const path = useLocation().pathname.replace(/\/$/, "") || "/";
  if (!PAGE_LINKS.some((page) => page.to === path) && !POSTS.some((post) => `/blog/${post.slug}` === path)) return null;
  return <section className="border-t border-border">
    <div className="mx-auto max-w-6xl px-5 py-8">
      <h2 className="font-display text-xl font-semibold text-brand-deep">Mais da Salto Lar</h2>
      <nav aria-label="Páginas relacionadas" className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
        {PAGE_LINKS.filter((page) => page.to !== path).map((page) => <Link key={page.to} to={page.to} className="font-semibold text-primary underline underline-offset-4">{page.label}</Link>)}
      </nav>
    </div>
  </section>;
}