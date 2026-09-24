import Link from "next/link";
import { ArrowRight, Check } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ModelCard } from "@/components/model-card";
import { directContactHref, getWhatsappHref } from "@/config/site";
import { createPageMetadata } from "@/config/metadata";
import { modelConcepts } from "@/data/models";

export const metadata = createPageMetadata({
  title: "Sites e landing pages para empresas",
  description: "Sites profissionais, landing pages e páginas de geração de leads para empresas em Joinville e região.",
  path: "/sites",
});

const deliverables = [
  ["Para uma oferta", "Landing pages", "Página focada em uma oferta ou serviço específico, organizada para levar o visitante rapidamente até o contato."],
  ["Para a empresa", "Sites institucionais", "Apresenta empresa, serviços, diferenciais, regiões atendidas e formas de contato em uma estrutura clara."],
  ["Para campanhas", "Páginas de captação", "Estrutura enxuta para campanhas e anúncios, com foco em gerar contato ou pedido de orçamento."],
  ["Para continuar", "Manutenção e evolução", "Melhorias, novas páginas e correções sem precisar reconstruir todo o projeto."],
];

const included = ["Diagnóstico e estrutura", "Conteúdo e hierarquia", "Design responsivo", "Desenvolvimento", "WhatsApp e formulários", "SEO técnico básico", "Performance", "Configuração e publicação", "Revisão final", "Base preparada para manutenção"];

export default function SitesPage() {
  const whatsapp = getWhatsappHref("Olá, Artur. Quero conversar sobre um site para minha empresa.");
  const contactHref = whatsapp ?? directContactHref;
  const contactExternal = Boolean(contactHref?.startsWith("http"));

  return (
    <div className="portfolio-page sites-page">
      <SiteHeader />
      <main id="conteudo">
        <section className="sites-hero shell">
          <div><p className="eyebrow"><span /> Sites para empresas</p><h1>Seu site precisa fazer o trabalho <em>antes da conversa.</em></h1></div>
          <div className="sites-hero__aside"><p>Explicar o que sua empresa faz. Mostrar por que ela é uma escolha segura. Facilitar o pedido de orçamento.</p><LinkButton href={contactHref ?? "#entrega"} variant="blue" external={contactExternal}>{contactHref ? "Falar sobre meu site" : "Ver o que está incluído"}</LinkButton></div>
        </section>

        <section className="sites-proof"><div className="shell sites-proof__grid">
          <div className="sites-proof__statement"><p>Critério de projeto</p><h2>Bonito é o começo.<br />Útil é o critério.</h2></div>
          <div className="sites-proof__copy"><p>Um site comercial precisa responder às dúvidas que travam o contato: “é para mim?”, “parece confiável?”, “como funciona?” e “como peço um orçamento?”.</p><p>Por isso, conteúdo, hierarquia, mobile e velocidade são tratados como parte do produto — não como acabamento.</p></div>
        </div></section>

        <section className="section shell" id="entrega">
          <SectionHeading eyebrow="O que eu desenvolvo" title="O formato depende do que precisa ser vendido." copy="Uma página pode bastar para uma oferta direta. Empresas com mais serviços precisam de uma arquitetura maior. O escopo segue a decisão do cliente, não um pacote pronto." />
          <div className="deliverables-grid">{deliverables.map(([signal, title, text]) => <article key={title}><span>{signal}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="service-action"><p>Não sabe qual formato faz sentido? Comece pelo problema que precisa resolver.</p>{contactHref && <LinkButton href={contactHref} variant="blue" external={contactExternal}>Solicitar uma conversa</LinkButton>}</div>
        </section>

        <section className="included-section"><div className="shell included-grid">
          <div><p className="eyebrow eyebrow--light">O que entra em um projeto</p><h2>Da primeira pergunta à publicação.</h2><p>O escopo é ajustado à necessidade da empresa, mas a entrega considera conteúdo, experiência e implementação como um único trabalho.</p></div>
          <ul>{included.map((item) => <li key={item}><Check /> {item}</li>)}</ul>
        </div></section>

        <section className="section shell sites-demos">
          <SectionHeading eyebrow="Veja isso funcionando" title="Não precisa imaginar o nível da entrega." copy="Abra conceitos completos para segmentos diferentes. São demonstrações autorais — não clientes ou resultados apresentados como reais." />
          <div className="sites-demo-grid">
            {modelConcepts.slice(0, 3).map((model, index) => <ModelCard model={model} key={model.slug} priority={index === 0} />)}
          </div>
          <div className="section-link-row"><Link href="/modelos" className="text-link">Ver os quatro conceitos <ArrowRight /></Link></div>
        </section>

        <section className="section shell results-section">
          <SectionHeading eyebrow="Decisões de produto" title="O site assume parte do trabalho comercial." />
          <div className="commercial-outcomes">
            <article><span>Clareza</span><h3>O visitante encontra</h3><p>Serviços, área atendida, diferenciais e o próximo passo sem depender de uma troca longa de mensagens.</p></article>
            <article><span>Confiança</span><h3>A empresa ganha</h3><p>Uma apresentação consistente para indicações, prospecção, campanhas e busca local.</p></article>
            <article><span>Continuidade</span><h3>O projeto mantém</h3><p>Boa performance, conteúdo editável no código e uma estrutura que aceita novas páginas.</p></article>
          </div>
        </section>

        <section className="process-section"><div className="shell">
          <SectionHeading eyebrow="Como funciona" title="Do diagnóstico à publicação, sem etapas escondidas." />
          <ol className="sites-steps"><li><span>01</span><div><h3>Contexto</h3><p>Entendo a empresa, a oferta, o público e a origem dos acessos.</p></div></li><li><span>02</span><div><h3>Estrutura</h3><p>Organizo mensagem, páginas, fluxos e direção visual.</p></div></li><li><span>03</span><div><h3>Construção</h3><p>Desenvolvo, testo, reviso no mobile e preparo para publicação.</p></div></li><li><span>04</span><div><h3>Evolução</h3><p>O site pode ganhar novas páginas e melhorias com o negócio.</p></div></li></ol>
        </div></section>

        <section className="cta-section shell" id="contato">
          <p className="eyebrow">Seu projeto</p><h2>Vamos entender o que o seu site precisa resolver?</h2>
          <p>{contactHref ? "Envie o contexto da empresa, o que já existe hoje e o objetivo principal da página." : "Os canais diretos ainda não foram publicados. Você pode avaliar o nível de execução nos conceitos completos."}</p>
          {contactHref ? <LinkButton href={contactHref} variant="blue" external={contactExternal}>{whatsapp ? "Conversar no WhatsApp" : "Enviar um e-mail"}</LinkButton> : <LinkButton href="/modelos" variant="blue">Avaliar os conceitos</LinkButton>}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

