import Image from "next/image";
import Link from "next/link";
import { ConceptBar } from "@/components/concept-bar";
import { AutoInspectionExplorer } from "@/components/auto-inspection-explorer";
import { DemoNote } from "@/components/demo-note";
import { ArrowRight } from "@/components/icons";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "Conceito de site para estética automotiva",
  description: "Conceito demonstrativo de landing page para um estúdio fictício de estética automotiva.",
  path: "/modelos/estetica-automotiva",
  ogImage: "/og/estetica-automotiva",
  ogImageAlt: "Conceito demonstrativo de site para estética automotiva criado por Artur Carletto",
});

const autoServices = [["Proteção", "Vitrificação", "Camada de proteção aplicada após limpeza e preparação da pintura."], ["Correção", "Polimento técnico", "Tratamento para reduzir marcas e recuperar a uniformidade visual da pintura."], ["Interior", "Higienização", "Limpeza de bancos, carpetes e superfícies internas conforme o material."], ["Manutenção", "Proteção de superfícies", "Aplicação apropriada ao tipo de material, acompanhada de orientação de cuidado."]];

export default function AutoPage() {
  return (
    <div className="concept-page auto-page"><ConceptBar />
      <header className="auto-header"><Link href="/modelos/estetica-automotiva" className="auto-logo">NÍVEL<span>estúdio automotivo · fictício</span></Link><nav aria-label="Navegação do conceito"><a href="#servicos">Serviços</a><a href="#metodo">Método</a><a href="#agenda">Agendar</a></nav><a href="#agenda">Solicitar avaliação</a></header>
      <main id="conteudo">
        <section className="auto-hero">
          <Image src="/images/automotiva-hero.png" alt="Automóvel grafite recebendo detalhamento em estúdio escuro" fill loading="eager" fetchPriority="high" sizes="100vw" />
          <div className="auto-hero__shade" />
          <div className="auto-hero__content"><p>Detailing studio / conceito</p><h1>O detalhe muda<br />a <em>presença.</em></h1><span>Polimento, vitrificação, higienização e proteção organizados pelo estado do veículo e pelo objetivo de uso.</span><a href="#agenda">Avaliar meu veículo <ArrowRight /></a></div>
        </section>

        <section className="auto-statement"><span>Precisão em cada etapa</span><h2>O serviço parte do estado do veículo.<br /><em>Não de um pacote genérico.</em></h2></section>

        <section className="auto-services" id="servicos">{autoServices.map(([signal, title, text]) => <article key={title}><span>{signal}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}<a className="auto-services__action" href="#agenda">Solicitar avaliação do veículo <ArrowRight /></a></section>

        <AutoInspectionExplorer />

        <section className="auto-method" id="metodo"><div><p>Método de atendimento</p><h2>Inspecionar.<br />Corrigir.<br /><em>Proteger.</em></h2></div><ol><li><span>01</span><p>Avaliação visual e definição do objetivo.</p></li><li><span>02</span><p>Preparação detalhada das superfícies.</p></li><li><span>03</span><p>Execução sob iluminação controlada.</p></li><li><span>04</span><p>Revisão final e orientação de cuidado.</p></li></ol></section>

        <section className="auto-contact" id="agenda"><div><p>Seu carro, no melhor estado possível.</p><h2>Solicite uma avaliação.</h2></div><DemoNote accent="#d09a5d" /></section>
      </main>
      <footer className="auto-footer"><span>NÍVEL <small>marca fictícia</small></span><p>Conceito demonstrativo criado por Artur Carletto.</p></footer>
    </div>
  );
}

