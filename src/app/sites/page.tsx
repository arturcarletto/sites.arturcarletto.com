import Link from "next/link";
import { ArrowRight, Check } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { directContactHref, getWhatsappHref } from "@/config/site";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "Sites e landing pages para empresas",
  description: "Sites profissionais, landing pages e páginas de geração de leads para empresas em Joinville e região.",
  path: "/sites",
});

const deliverables = [
  ["Para uma oferta", "Landing pages", "Uma oferta específica, argumentos na ordem certa e um caminho curto até o contato."],
  ["Para a empresa", "Sites institucionais", "Serviços, áreas atendidas e diferenciais organizados para quem ainda não conhece a empresa."],
  ["Para campanhas", "Páginas de captação", "Estruturas para campanhas, formulários e pedidos de orçamento, sem distrações desnecessárias."],
  ["Para continuar", "Manutenção e evolução", "Novas páginas, correções e melhorias sem reconstruir tudo a cada mudança."],
];

const included = ["Integração direta com WhatsApp", "Formulários quando fizerem sentido", "SEO técnico e local básico", "Experiência responsiva de verdade", "Otimização de performance", "Estrutura preparada para manutenção"];

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
          <div className="sites-proof__statement"><span>01</span><h2>Bonito é o começo.<br />Útil é o critério.</h2></div>
          <div className="sites-proof__copy"><p>Um site comercial precisa responder às dúvidas que travam o contato: “é para mim?”, “parece confiável?”, “como funciona?” e “como peço um orçamento?”.</p><p>Por isso, conteúdo, hierarquia, mobile e velocidade são tratados como parte do produto — não como acabamento.</p></div>
        </div></section>

        <section className="section shell" id="entrega">
          <SectionHeading eyebrow="O que eu desenvolvo" title="O formato depende do que precisa ser vendido." copy="Uma página pode bastar para uma oferta direta. Empresas com mais serviços precisam de uma arquitetura maior. O escopo segue a decisão do cliente, não um pacote pronto." />
          <div className="deliverables-grid">{deliverables.map(([signal, title, text]) => <article key={title}><span>{signal}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="service-action"><p>Não sabe qual formato faz sentido? Comece pelo problema que precisa resolver.</p>{contactHref && <LinkButton href={contactHref} variant="blue" external={contactExternal}>Solicitar uma conversa</LinkButton>}</div>
        </section>

        <section className="included-section"><div className="shell included-grid">
          <div><p className="eyebrow eyebrow--light">Fundamentos da entrega</p><h2>Presença profissional, sem atrito no caminho.</h2><p>O projeto combina decisões de negócio com uma implementação cuidadosa. Tudo que o visitante percebe — e o que ele não deveria precisar perceber — faz parte.</p></div>
          <ul>{included.map((item) => <li key={item}><Check /> {item}</li>)}</ul>
        </div></section>

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

        <section className="model-invite shell"><div><p className="eyebrow">Veja antes de imaginar</p><h2>Conceitos completos para negócios locais.</h2></div><p>Explore páginas demonstrativas com identidades e estratégias diferentes. Elas mostram o padrão de execução, não clientes atendidos.</p><Link href="/modelos" className="text-link">Abrir galeria <ArrowRight /></Link></section>

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

