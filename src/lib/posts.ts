export type Post = { slug: string; title: string; seoTitle: string; description: string; date: string; body: string[] };

// Posts iniciais do blog. Para postar sem mexer aqui, a próxima etapa é um painel de postagem.
export const POSTS: Post[] = [
  {
    slug: "quando-trocar-a-borracha-da-panela-de-pressao",
    title: "Quando trocar a borracha da panela de pressão?",
    seoTitle: "Quando Trocar a Borracha da Panela de Pressão?",
    description: "Veja quando trocar a borracha da panela de pressão e como conferir o modelo. A Salto Lar, em Salto, ajuda a encontrar a peça de vedação correta.",
    date: "2026-11-11",
    body: [
      "A borracha de vedação é a peça que mais se desgasta na panela de pressão. Se o vapor escapa pela tampa, se a panela demora para pegar pressão ou se a borracha está ressecada e rachada, está na hora de trocar.",
      "Na maioria dos casos, trocar só a borracha resolve — e custa muito menos que uma panela nova. Traga a tampa ou mande uma foto da marca e do tamanho pelo WhatsApp que a gente confere o modelo certo.",
      "Atendemos clientes de Salto, Itu, Indaiatuba, Porto Feliz e região, direto no balcão da loja no Centro de Salto.",
    ],
  },
  {
    slug: "como-achar-o-copo-certo-do-liquidificador",
    title: "Como achar o copo certo do seu liquidificador",
    seoTitle: "Como Achar o Copo Certo do Liquidificador",
    description: "Saiba como encontrar o copo certo do liquidificador com a marca, o modelo e o encaixe. Confira a reposição na Salto Lar, em Salto, antes de trocar.",
    date: "2026-11-11",
    body: [
      "O copo do liquidificador quebrou? Antes de comprar outro aparelho, vale procurar só o copo. Olhe a etiqueta embaixo da base: lá estão a marca e o modelo.",
      "Se a etiqueta sumiu, traga a base até a loja. Temos dezenas de modelos de copo e conferimos o encaixe na hora.",
    ],
  },
];
