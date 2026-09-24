import Image from "next/image";
import Link from "next/link";
import { ConceptBar } from "@/components/concept-bar";
import { DemoNote } from "@/components/demo-note";
import { Accordion } from "@/components/accordion";
import { ArrowRight, Check } from "@/components/icons";
import { SantaCatarinaMap } from "@/components/santa-catarina-map";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "Conceito de site para climatização",
  description: "Conceito demonstrativo de landing page para uma empresa fictícia de climatização.",
  path: "/modelos/climatizacao",
});

const services = [
  ["Novo ambiente", "Instalação", "Dimensionamento, instalação cuidadosa e orientação de uso."],
  ["Prevenir falhas", "Manutenção", "Diagnóstico e manutenção preventiva para evitar paradas."],
  ["Qualidade do ar", "Higienização", "Limpeza técnica para melhorar o ar e o desempenho do equipamento."],
  ["Cada rotina", "Residencial e comercial", "Soluções pensadas para o perfil de cada ambiente."],
];

const faq = [
  {
    title: "Como saber a capacidade ideal do aparelho?",
    content: "A metragem é só o começo. Incidência solar, quantidade de pessoas e equipamentos também entram no dimensionamento.",
  },
  {
    title: "Quando a higienização deve ser feita?",
    content: "A frequência depende do uso e do ambiente. Uma avaliação identifica o intervalo mais adequado para cada caso.",
  },
  {
    title: "Vocês atendem ambientes comerciais?",
    content: "Este conceito prevê atendimento residencial e comercial, com escopo confirmado antes do agendamento.",
  },
];

export default function ClimatizacaoPage() {
  return (
    <div className="concept-page clima-page">
      <ConceptBar />
      <header className="clima-header"><Link href="/modelos/climatizacao" className="clima-logo"><i>F</i><span>Frost<strong>Ar</strong><small>empresa fictícia</small></span></Link><nav aria-label="Navegação do conceito"><a href="#servicos">Serviços</a><a href="#processo">Como funciona</a><a href="#duvidas">Dúvidas</a></nav><a className="clima-cta" href="#orcamento">Pedir orçamento</a></header>
      <main id="conteudo">
        <section className="clima-hero">
          <Image src="/images/climatizacao-hero.png" alt="Ambiente residencial climatizado com aparelho integrado à arquitetura" fill loading="eager" fetchPriority="high" sizes="100vw" />
          <div className="clima-hero__shade" />
          <div className="clima-hero__content"><p>Conforto térmico para a sua rotina</p><h1>O clima certo.<br />Sem complicação.</h1><span>Instalação, manutenção e higienização com atendimento claro do primeiro contato à entrega.</span><a href="#orcamento">Solicitar orçamento <ArrowRight /></a></div>
          <div className="clima-hero__badge"><strong>Residencial</strong><span>e comercial</span></div>
        </section>

        <section className="clima-trust" aria-label="Diferenciais demonstrados"><span>Atendimento organizado</span><span>Orientação técnica</span><span>Cuidado com o ambiente</span><span>Contato direto</span></section>

        <section className="clima-section" id="servicos">
          <div className="clima-heading"><div><p>Soluções completas</p><h2>Do primeiro cálculo ao ar limpo todos os dias.</h2></div><span>Serviços apresentados de forma simples para o cliente encontrar rápido o que precisa.</span></div>
          <div className="clima-services">{services.map(([signal, title, text]) => <article key={title}><span>{signal}</span><h3>{title}</h3><p>{text}</p><a href="#orcamento">Quero este serviço <ArrowRight /></a></article>)}</div>
        </section>

        <section className="clima-split">
          <div className="clima-split__image"><Image src="/images/climatizacao-servico.png" alt="Técnico realizando manutenção cuidadosa em aparelho de ar-condicionado" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <div className="clima-split__content"><p>Serviço bem executado</p><h2>Manutenção sem improviso dentro do seu espaço.</h2><span>O conceito mostra o que normalmente decide a confiança: diagnóstico antes da indicação, proteção da área e explicação do que foi feito.</span><ul><li><Check /> Avaliação de necessidade</li><li><Check /> Proteção da área de trabalho</li><li><Check /> Testes antes da finalização</li></ul><a href="#orcamento">Quero avaliar meu ambiente <ArrowRight /></a></div>
        </section>

        <section className="clima-process clima-section" id="processo"><div className="clima-heading"><div><p>Como funciona</p><h2>Um caminho curto até o conforto.</h2></div></div><ol><li><span>01</span><h3>Conte o que precisa</h3><p>Ambiente, tipo de equipamento e o melhor horário para falar.</p></li><li><span>02</span><h3>Receba a orientação</h3><p>A necessidade é entendida antes de indicar a solução.</p></li><li><span>03</span><h3>Agende o serviço</h3><p>Data combinada e preparação explicada com antecedência.</p></li></ol></section>

        <section className="clima-area"><div><p>Área de atendimento demonstrativa</p><h2>Joinville e região</h2><span>O mapa localiza Joinville no Norte de Santa Catarina. A cobertura real seria definida pela empresa antes da publicação.</span></div><SantaCatarinaMap /></section>

        <section className="clima-faq clima-section" id="duvidas"><div><p>Dúvidas frequentes</p><h2>Informação clara antes de agendar.</h2></div><Accordion items={faq} className="clima-accordion" /></section>

        <section className="clima-contact" id="orcamento"><div><p>Respire melhor. Viva com mais conforto.</p><h2>Pronto para cuidar da climatização do seu espaço?</h2></div><DemoNote accent="#20b9d6" /></section>
      </main>
      <footer className="clima-footer"><span>FrostAr <small>marca fictícia</small></span><p>Conceito de landing page por Artur Carletto.</p></footer>
    </div>
  );
}

