import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
import { ModelCard } from "@/components/model-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { directContactHref, siteConfig, whatsappContactHref } from "@/config/site";
import { modelConcepts } from "@/data/models";

const capabilities = [
  { signal: "Sob medida", title: "Produtos web", text: "Aplicações e interfaces para operações que não cabem em uma página pronta.", href: "/sobre" },
  { signal: "Foco comercial", title: "Sites para empresas", text: "Sites institucionais e landing pages que explicam a oferta e encurtam o caminho até o orçamento.", href: "/sites" },
  { signal: "Base durável", title: "Evolução de software", text: "Correções de arquitetura, experiência e performance em produtos que já estão em uso.", href: "/sobre" },
];

const process = [
  ["01", "Entendimento", "Negócio, público, contexto e o que precisa acontecer depois da visita."],
  ["02", "Direção", "Conteúdo, arquitetura da informação e linguagem visual antes dos detalhes."],
  ["03", "Construção", "Implementação responsiva, revisão técnica e refinamento da experiência."],
  ["04", "Entrega", "Publicação preparada, orientações claras e base pronta para evoluir."],
];

export default function Home() {
  const primaryAction = whatsappContactHref
    ? { href: whatsappContactHref, label: "Conversar pelo WhatsApp", external: true }
    : { href: "/sites", label: "Ver como trabalho com empresas", external: false };

  return (
    <div className="portfolio-page">
      <SiteHeader />
      <main id="conteudo">
        <section className="home-hero shell">
          <div className="home-hero__copy">
            <p className="eyebrow"><span /> Engenheiro de Software · sites para empresas</p>
            <h1>Sites para empresas<br /><em>que abrem conversas.</em></h1>
            <p className="hero-lead">Eu sou Artur Carletto, Engenheiro de Software em {siteConfig.shortLocation}. Desenvolvo sites institucionais, landing pages e soluções web que apresentam melhor a empresa, funcionam bem no celular e facilitam o contato comercial.</p>
            <div className="hero-actions">
              <LinkButton href={primaryAction.href} variant="blue" external={primaryAction.external}>{primaryAction.label}</LinkButton>
              <Link href="/modelos" className="text-link">Ver demonstrações <ArrowRight /></Link>
            </div>
          </div>
          <aside className="home-hero__visual" aria-label="Prévias de conceitos demonstrativos navegáveis">
            <div className="home-demo-stack">
              <Link href="/modelos/estetica-automotiva" className="home-demo-preview home-demo-preview--main" aria-label="Abrir conceito de estética automotiva">
                <Image src="/images/automotiva-hero.png" alt="Recorte do conceito demonstrativo de estética automotiva" fill sizes="(max-width: 700px) 78vw, 420px" priority />
                <span><small>Conceito navegável</small>Estética automotiva <ArrowRight /></span>
              </Link>
              <Link href="/modelos/odontologia" className="home-demo-preview home-demo-preview--top" aria-label="Abrir conceito de odontologia">
                <Image src="/images/odontologia-hero.png" alt="Recorte do conceito demonstrativo de odontologia" fill sizes="190px" />
                <span>Odontologia</span>
              </Link>
              <Link href="/modelos/climatizacao" className="home-demo-preview home-demo-preview--mobile" aria-label="Abrir conceito de climatização">
                <Image src="/images/climatizacao-hero.png" alt="Recorte do conceito demonstrativo de climatização em formato mobile" fill sizes="150px" />
                <span>Climatização</span>
              </Link>
              <p className="home-demo-stack__note">Direções visuais diferentes.<br />A mesma base técnica.</p>
            </div>
          </aside>
        </section>

        <section className="manifesto-section">
          <div className="shell manifesto-grid">
            <p className="eyebrow eyebrow--light">Como eu penso</p>
            <p className="manifesto-copy">Um projeto bom reduz explicações: a pessoa entende a oferta, encontra o próximo passo e <em>não percebe o esforço técnico</em> que mantém tudo rápido e confiável.</p>
          </div>
        </section>

        <section className="section shell" id="atuacao">
          <SectionHeading eyebrow="Atuação" title="Três frentes. O mesmo padrão de execução." copy="Entendo o contexto, organizo a experiência e implemento a solução. Sem separar decisões de produto do que será possível manter depois." />
          <div className="capability-list">
            {capabilities.map(({ signal, title, text, href }) => (
              <article key={title}><span>{signal}</span><h3>{title}</h3><p>{text}</p><Link href={href} aria-label={`Conhecer ${title}`}><ArrowRight /></Link></article>
            ))}
          </div>
        </section>

        <section className="business-feature">
          <div className="shell business-feature__grid">
            <div className="business-feature__copy">
              <p className="eyebrow eyebrow--light">Sites para empresas</p>
              <h2>Não basta estar online. É preciso deixar claro por que escolher sua empresa.</h2>
              <p>Estruturo páginas que ajudam o visitante a entender a oferta, confiar no negócio e pedir um orçamento sem esforço — especialmente no celular.</p>
              <ul>
                <li><Check /> Oferta e diferenciais bem explicados</li>
                <li><Check /> Caminho curto até o contato</li>
                <li><Check /> Performance e SEO técnico desde a base</li>
              </ul>
              <LinkButton href="/sites" variant="light">Conhecer a oferta</LinkButton>
            </div>
            <div className="business-feature__visual">
              <div className="browser-card browser-card--back"><Image src="/images/moveis-hero.png" alt="Prévia do conceito de móveis planejados" fill sizes="400px" /></div>
              <div className="browser-card browser-card--front">
                <div className="browser-dots"><i /><i /><i /></div>
                <Image src="/images/climatizacao-hero.png" alt="Prévia do conceito de climatização" fill sizes="500px" />
                <div className="browser-overlay"><span>Projetado para</span><strong>ser entendido.</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section shell">
          <SectionHeading eyebrow="Demonstrações selecionadas" title="Qualidade que você pode abrir e navegar." copy="Conceitos autorais para segmentos diferentes. Não são clientes reais: são uma amostra concreta da direção que um projeto pode alcançar." />
          <div className="model-grid model-grid--home">
            {modelConcepts.slice(0, 2).map((model, index) => <ModelCard model={model} key={model.slug} priority={index === 0} />)}
          </div>
          <div className="section-link-row"><Link href="/modelos" className="text-link">Explorar todos os conceitos <ArrowRight /></Link></div>
        </section>

        <section className="process-section">
          <div className="shell">
            <SectionHeading eyebrow="Processo" title="O que acontece depois do primeiro contato." copy="Quatro etapas, decisões registradas e revisão real no mobile antes de qualquer publicação." />
            <ol className="process-list">
              {process.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="section shell about-preview">
          <div className="about-preview__mark" aria-hidden="true"><span>AC</span><i>JOINVILLE · SC</i></div>
          <div className="about-preview__copy">
            <p className="eyebrow">Sobre Artur</p>
            <h2>Um engenheiro presente do começo ao fim.</h2>
            <p>Eu sou Artur Carletto, Engenheiro de Software em Joinville. Gosto de transformar problemas difusos em produtos claros — entendendo o contexto, desenhando a experiência e cuidando da implementação.</p>
            <Link href="/sobre" className="text-link">Conhecer minha abordagem <ArrowRight /></Link>
          </div>
        </section>

        <section className="tech-strip" aria-label="Capacidade técnica">
          <div className="shell"><p>Base técnica para produtos que precisam durar</p><div><span>TypeScript</span><span>React</span><span>Next.js</span><span>APIs</span><span>Performance</span><span>UX</span></div></div>
        </section>

        <section className="cta-section shell">
          <p className="eyebrow">Próximo passo</p>
          <h2>{directContactHref ? "Tem um projeto em mente?" : "Quer entender se este trabalho serve para sua empresa?"}<br /><em>{directContactHref ? "Vamos avaliar o contexto." : "Veja a entrega antes do contato."}</em></h2>
          <p>{directContactHref ? "Conte o contexto. Eu respondo com perguntas objetivas e um caminho possível." : "Os canais diretos ainda não foram publicados. A página comercial mostra escopo, processo e exemplos navegáveis."}</p>
          <LinkButton href={primaryAction.href} variant="blue" external={primaryAction.external}>{directContactHref ? "Falar sobre meu projeto" : primaryAction.label}</LinkButton>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
