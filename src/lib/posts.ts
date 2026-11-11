export type Post = { slug: string; title: string; description: string; date: string; body: string[] };

// Posts iniciais do blog. Para postar sem mexer aqui, a próxima etapa é um painel de postagem.
export const POSTS: Post[] = [
  {
    slug: "quando-trocar-a-borracha-da-panela-de-pressao",
    title: "Quando trocar a borracha da panela de pressão?",
    description: "Sinais de que a borracha (anel de vedação) da sua panela de pressão precisa ser trocada, e por que isso é mais barato que comprar panela nova.",
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
    description: "Dicas para descobrir o modelo do seu liquidificador e encontrar o copo de reposição certo em Salto e região.",
    date: "2026-11-11",
    body: [
      "O copo do liquidificador quebrou? Antes de comprar outro aparelho, vale procurar só o copo. Olhe a etiqueta embaixo da base: lá estão a marca e o modelo.",
      "Se a etiqueta sumiu, traga a base até a loja. Temos dezenas de modelos de copo e conferimos o encaixe na hora.",
    ],
  },
];
