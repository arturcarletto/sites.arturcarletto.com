import Image from "next/image";
import Link from "next/link";
import { ConceptBar } from "@/components/concept-bar";
import { DemoNote } from "@/components/demo-note";
import { ArrowRight } from "@/components/icons";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "Conceito de site para estética automotiva",
  description: "Conceito demonstrativo de landing page para um estúdio fictício de estética automotiva.",
  path: "/modelos/estetica-automotiva",
});

const autoServices = [["Proteção", "Vitrificação", "Proteção e brilho com preparação criteriosa da pintura."], ["Correção", "Polimento técnico", "Correção de marcas e recuperação visual do acabamento."], ["Interior", "Higienização", "Cuidado profundo de bancos, carpetes e superfícies internas."], ["Acabamento", "Detalhamento", "Atenção minuciosa às áreas que uma lavagem comum ignora."]];

export default function AutoPage() {
  return (
    <div className="concept-page auto-page"><ConceptBar />
      <header className="auto-header"><Link href="/modelos/estetica-automotiva" className="auto-logo">NÍVEL<span>estúdio automotivo · fictício</span></Link><nav aria-label="Navegação do conceito"><a href="#servicos">Serviços</a><a href="#metodo">Método</a><a href="#agenda">Agendar</a></nav><a href="#agenda">Solicitar avaliação</a></header>
      <main id="conteudo">
        <section className="auto-hero">
          <Image src="/images/automotiva-hero.png" alt="Automóvel grafite recebendo detalhamento em estúdio escuro" fill loading="eager" fetchPriority="high" sizes="100vw" />
          <div className="auto-hero__shade" />
          <div className="auto-hero__content"><p>Detailing studio / conceito</p><h1>O detalhe muda<br />a <em>presença.</em></h1><span>Correção, proteção e acabamento para quem percebe a diferença entre limpo e impecável.</span><a href="#agenda">Avaliar meu veículo <ArrowRight /></a></div>
        </section>

        <section className="auto-statement"><span>Precisão em cada etapa</span><h2>Não é sobre esconder marcas.<br />É sobre <em>recuperar a leitura do carro.</em></h2></section>

        <section className="auto-services" id="servicos">{autoServices.map(([signal, title, text]) => <article key={title}><span>{signal}</span><div><h3>{title}</h3><p>{text}</p></div><a href="#agenda">Solicitar avaliação <ArrowRight /></a></article>)}</section>

        <section className="auto-feature"><div className="auto-feature__image"><Image src="/images/automotiva-detalhe.png" alt="Detalhe do capô e farol com reflexos precisos após correção de pintura" fill sizes="(max-width: 800px) 100vw, 58vw" /></div><div><p>Proteção de verdade</p><h2>Brilho é consequência de uma superfície bem preparada.</h2><span>A etapa mais importante acontece antes do produto final. Inspeção, descontaminação e correção determinam a qualidade do acabamento.</span><ul><li>Leitura da pintura sob luz controlada</li><li>Processo definido para cada superfície</li><li>Orientação de manutenção após a entrega</li></ul></div></section>

        <section className="auto-method" id="metodo"><div><p>Método NÍVEL</p><h2>Inspecionar.<br />Corrigir.<br /><em>Proteger.</em></h2></div><ol><li><span>01</span><p>Avaliação visual e definição do objetivo.</p></li><li><span>02</span><p>Preparação detalhada das superfícies.</p></li><li><span>03</span><p>Execução sob iluminação controlada.</p></li><li><span>04</span><p>Revisão final e orientação de cuidado.</p></li></ol></section>

        <section className="auto-contact" id="agenda"><div><p>Seu carro, no melhor estado possível.</p><h2>Solicite uma avaliação.</h2></div><DemoNote accent="#d09a5d" /></section>
      </main>
      <footer className="auto-footer"><span>NÍVEL <small>marca fictícia</small></span><p>Conceito demonstrativo criado por Artur Carletto.</p></footer>
    </div>
  );
}

