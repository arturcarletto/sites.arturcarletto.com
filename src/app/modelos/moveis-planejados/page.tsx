import Image from "next/image";
import Link from "next/link";
import { ConceptBar } from "@/components/concept-bar";
import { DemoNote } from "@/components/demo-note";
import { ArrowRight } from "@/components/icons";
import { MaterialSelector } from "@/components/material-selector";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "Conceito de site para móveis planejados",
  description: "Conceito demonstrativo editorial para uma empresa fictícia de móveis planejados.",
  path: "/modelos/moveis-planejados",
});

export default function MoveisPage() {
  return (
    <div className="concept-page moveis-page"><ConceptBar />
      <header className="moveis-header"><Link href="/modelos/moveis-planejados" className="moveis-logo">Lume<span>marcenaria autoral · marca fictícia</span></Link><nav aria-label="Navegação do conceito"><a href="#ambientes">Ambientes</a><a href="#processo">Processo</a><a href="#contato">Orçamento</a></nav><a href="#contato">Iniciar projeto</a></header>
      <main id="conteudo">
        <section className="moveis-hero">
          <Image src="/images/moveis-hero.png" alt="Cozinha sofisticada com marcenaria sob medida em madeira e pedra natural" fill loading="eager" fetchPriority="high" sizes="100vw" />
          <div className="moveis-hero__wash" />
          <div className="moveis-hero__content"><p>Marcenaria feita para o seu modo de viver</p><h1>Espaços com<br /><em>intenção.</em></h1><span>Projetos sob medida que unem arquitetura, matéria e a rotina de quem habita.</span><a href="#contato">Conversar sobre um ambiente <ArrowRight /></a></div>
        </section>

        <section className="moveis-intro"><p>O que fazemos</p><h2>Não ocupamos espaços.<br /><em>Damos sentido a eles.</em></h2><span>Cada projeto parte das medidas, mas não termina nelas. Proporção, circulação, materiais e hábitos cotidianos definem uma solução verdadeiramente particular.</span></section>

        <section className="moveis-editorial" id="ambientes">
          <article className="moveis-editorial__large"><div><Image src="/images/moveis-home-office.png" alt="Home office planejado com estante em madeira e área de leitura" fill sizes="(max-width: 800px) 100vw, 65vw" /></div><span>01 / Home office e leitura</span><h3>Marcenaria que organiza trabalho, pausa e permanência no mesmo ambiente.</h3></article>
          <div className="moveis-editorial__aside"><p>Ambientes</p><article><span>02</span><h3>Cozinhas</h3><p>Fluxo de uso, armazenamento e materiais definidos em conjunto.</p></article><article><span>03</span><h3>Dormitórios</h3><p>Organização silenciosa e materiais que convidam ao descanso.</p></article><article><span>04</span><h3>Corporativo</h3><p>Espaços que apoiam a operação e expressam a marca.</p></article></div>
        </section>

        <section className="moveis-material"><MaterialSelector /><div><p>Matéria e permanência</p><h2>Bonito de longe.<br />Preciso de perto.</h2><span>Explore os materiais ao lado. Cada acabamento é avaliado por toque, luz, uso e manutenção — para permanecer bom muito depois da primeira fotografia.</span></div></section>

        <section className="moveis-process" id="processo"><div><p>Nosso processo</p><h2>Do primeiro traço<br />ao último ajuste.</h2></div><ol><li><span>01</span><div><h3>Imersão</h3><p>Entendemos o espaço, a rotina e as referências.</p></div></li><li><span>02</span><div><h3>Projeto</h3><p>Desenvolvemos layout, materiais e detalhes construtivos.</p></div></li><li><span>03</span><div><h3>Produção</h3><p>Acompanhamos a execução com critérios definidos.</p></div></li><li><span>04</span><div><h3>Instalação</h3><p>Finalizamos o ambiente e revisamos cada encontro.</p></div></li></ol></section>

        <section className="moveis-quote"><span>Princípio de projeto</span><h2>Um móvel sob medida precisa pertencer ao espaço — na proporção, na rotina e no acabamento.</h2></section>

        <section className="moveis-contact" id="contato"><div><p>Seu espaço, sua história</p><h2>Vamos desenhar o ambiente que ainda não existe?</h2></div><DemoNote accent="#7b302e" /></section>
      </main>
      <footer className="moveis-footer"><span>Lume <small>marca fictícia</small></span><p>Conceito demonstrativo por Artur Carletto.</p></footer>
    </div>
  );
}

