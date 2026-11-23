import { createFileRoute } from "@tanstack/react-router";
import { pageHead, PHONE_DISPLAY, PHONE_TEL, ADDRESS } from "@/lib/site";
import { PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ ...pageHead("/privacidade", "Política de Privacidade e Cookies | Salto Lar", "Saiba como a Salto Lar trata informações de contato, preferências de cookies e medição de visitas, e como solicitar seus direitos."), meta: [...pageHead("/privacidade", "Política de Privacidade e Cookies | Salto Lar", "Saiba como a Salto Lar trata informações de contato, preferências de cookies e medição de visitas, e como solicitar seus direitos.").meta, { name: "robots", content: "noindex, follow" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <>
    <PageHero eyebrow="Privacidade" title="Política de privacidade da Salto Lar" text="Suas informações merecem o mesmo cuidado que o atendimento no balcão." />
    <section className="mx-auto max-w-3xl space-y-8 px-5 py-12 text-foreground/85">
      <div><h2 className="font-display text-2xl text-brand-deep">Quem trata as informações</h2><p className="mt-3">A Salto Lar, em {ADDRESS}, utiliza informações fornecidas em conversas para responder dúvidas, conferir peças e atender solicitações. Para falar sobre privacidade ou solicitar acesso, correção ou exclusão de seus dados, entre em contato pelo telefone <a href={PHONE_TEL} className="font-bold text-primary underline">{PHONE_DISPLAY}</a>.</p></div>
      <div><h2 className="font-display text-2xl text-brand-deep">Contato com a loja</h2><p className="mt-3">Este site não possui formulário de cadastro. Ao abrir um link de WhatsApp, telefone ou mapa, você utiliza um serviço externo. Informações enviadas por você, como nome, telefone e fotos de peças, servem para atender sua solicitação. Evite enviar documentos ou informações sensíveis que não sejam necessários.</p></div>
      <div><h2 className="font-display text-2xl text-brand-deep">Cookies e ferramentas de medição</h2><p className="mt-3">Salvamos no seu navegador a escolha de aceitar ou recusar medição. O Google Tag Manager só é carregado após sua autorização; ele pode ativar ferramentas configuradas pela equipe, como Google Analytics. Essas ferramentas podem tratar dados de navegação, dispositivo e interação, conforme suas configurações e políticas. Antes da autorização, ou se você recusar, o site não inicia o contêiner de medição.</p><p className="mt-3">Você pode rever sua escolha em “Preferências de cookies” no rodapé. Ao retirar a autorização, a página recarrega e não inicia novamente a medição. Dados já enviados não são desfeitos; cookies previamente criados podem ser removidos nas configurações do navegador.</p></div>
      <div><h2 className="font-display text-2xl text-brand-deep">Serviços externos e conservação</h2><p className="mt-3">A hospedagem e os serviços externos podem processar registros técnicos, como endereço IP, para entregar o site e suas funções. WhatsApp, Google Maps e ferramentas de medição têm políticas próprias e podem processar dados fora do Brasil. As informações de atendimento são conservadas pelo tempo necessário à solicitação e às obrigações legais aplicáveis. Para esclarecimentos sobre prazos ou compartilhamento, fale com a loja.</p></div>
      <div><h2 className="font-display text-2xl text-brand-deep">Seus direitos</h2><p className="mt-3">Você pode solicitar confirmação do tratamento, acesso, correção, informações sobre compartilhamento e, quando cabível, exclusão e revogação do consentimento. A loja poderá pedir informações suficientes para confirmar sua identidade e atender a solicitação com segurança.</p></div>
    </section>
  </>;
}