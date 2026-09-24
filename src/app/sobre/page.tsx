import { LinkButton } from "@/components/link-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getWhatsappHref, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "Sobre",
  description: "Conheça a abordagem profissional de Artur Carletto, Engenheiro de Software em Joinville, Santa Catarina.",
  path: "/sobre",
});

const principles = [
  ["Entender antes de estimar", "Escopo e prazo só fazem sentido depois de identificar o problema, as restrições e quem vai usar."],
  ["Texto também é interface", "Se a oferta não está compreensível, nenhum acabamento visual corrige a experiência."],
  ["Mobile não é sobra", "Conteúdo, toque e ritmo são revisados nas telas em que a maior parte dos contatos acontece."],
  ["Código precisa continuar legível", "Uma entrega profissional deve poder ser mantida, revisada e ampliada sem depender de improviso."],
];

export default function AboutPage() {
  const whatsapp = getWhatsappHref("Olá, Artur. Conheci sua abordagem e gostaria de solicitar uma conversa.");

  return (
    <div className="portfolio-page about-page"><SiteHeader /><main id="conteudo">
      <section className="about-hero shell"><div className="about-hero__mark"><span>AC</span><b>Trabalho direto comigo,<br />do diagnóstico à entrega.</b><small>ARTUR CARLETTO<br />JOINVILLE · SC</small></div><div className="about-hero__copy"><p className="eyebrow">Sobre Artur</p><h1>Produto, interface e código <em>na mesma conversa.</em></h1><p>Sou Artur Carletto, Engenheiro de Software em {siteConfig.shortLocation}. Eu entendo o problema, organizo a experiência e participo da implementação — sem repassar cada etapa para uma pessoa diferente.</p></div></section>
      <section className="about-story"><div className="shell about-story__grid"><p className="eyebrow eyebrow--light">Minha abordagem</p><div><h2>Começar pelo contexto evita soluções bonitas para o problema errado.</h2><p>Antes de escolher tecnologia ou direção visual, procuro entender quem vai usar, o que precisa ser comunicado, onde o processo trava hoje e qual resultado tornaria o projeto útil.</p><p>Conteúdo influencia layout. Layout influencia performance. Engenharia influencia manutenção. Tratar essas decisões juntas reduz retrabalho e deixa a entrega mais coerente.</p></div></div></section>
      <section className="section shell"><SectionHeading eyebrow="Princípios" title="O que orienta meu trabalho." /><div className="principles-grid">{principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="about-context shell"><div><p className="eyebrow">Capacidade técnica</p><h2>Engenharia que sustenta a experiência.</h2></div><div><p>Trabalho com aplicações web, interfaces, integrações e evolução de software. React, TypeScript e Next.js fazem parte da base atual, mas a escolha técnica sempre responde ao produto — não o contrário.</p><p>Para sites, isso se traduz em carregamento rápido, boa estrutura semântica, comportamento responsivo e uma base que outro profissional consegue manter.</p></div></section>
      <section className="cta-section shell"><p className="eyebrow">Próximo passo</p><h2>Tem um problema concreto para resolver?</h2><p>Conte o contexto, o que existe hoje e o que precisa mudar.</p><LinkButton href={whatsapp ?? "/sites"} variant="blue" external={Boolean(whatsapp)}>Solicitar uma conversa</LinkButton></section>
    </main><SiteFooter /></div>
  );
}

