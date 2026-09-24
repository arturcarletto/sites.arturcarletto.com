import Image from "next/image";
import Link from "next/link";
import { ConceptBar } from "@/components/concept-bar";
import { DemoNote } from "@/components/demo-note";
import { ArrowRight, Check } from "@/components/icons";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "Conceito de site para odontologia",
  description: "Conceito demonstrativo acolhedor para uma clínica odontológica fictícia.",
  path: "/modelos/odontologia",
});

const treatments = [["Prevenção e cuidado", "Acompanhamento periódico e orientações para a saúde bucal."], ["Odontologia restauradora", "Tratamentos explicados com clareza e foco na preservação."], ["Estética do sorriso", "Planejamento responsável, alinhado às características de cada pessoa."], ["Atendimento infantil", "Uma experiência leve para construir confiança desde cedo."]];

export default function OdontoPage() {
  return (
    <div className="concept-page odonto-page"><ConceptBar />
      <header className="odonto-header"><Link href="/modelos/odontologia" className="odonto-logo"><i>C</i><span>Carla<small>odontologia · clínica fictícia</small></span></Link><nav aria-label="Navegação do conceito"><a href="#tratamentos">Tratamentos</a><a href="#experiencia">A clínica</a><a href="#duvidas">Dúvidas</a></nav><a href="#agendar">Agendar conversa</a></header>
      <main id="conteudo">
        <section className="odonto-hero"><div className="odonto-hero__copy"><p>Cuidado próximo, decisões tranquilas</p><h1>Seu sorriso merece <em>clareza em cada etapa.</em></h1><span>Uma odontologia acolhedora, com explicações simples e atenção ao que você realmente precisa.</span><a href="#agendar">Quero agendar <ArrowRight /></a><small>Este é um conceito demonstrativo. Não há profissionais reais anunciados.</small></div><div className="odonto-hero__image"><Image src="/images/odontologia-hero.png" alt="Consultório odontológico acolhedor com luz natural" fill loading="eager" fetchPriority="high" sizes="(max-width: 800px) 100vw, 55vw" /><span>Ambiente pensado para acolher</span></div></section>

        <section className="odonto-reassurance"><div><strong>Escuta</strong><span>para entender antes de propor</span></div><div><strong>Clareza</strong><span>para decidir sem pressão</span></div><div><strong>Cuidado</strong><span>em cada momento da consulta</span></div></section>

        <section className="odonto-treatments" id="tratamentos"><div className="odonto-heading"><p>Tratamentos</p><h2>Cuidado completo,<br />explicado com calma.</h2><span>Informações objetivas ajudam você a chegar à conversa mais seguro e preparado.</span><a href="#agendar">Agendar uma conversa <ArrowRight /></a></div><div className="odonto-treatment-grid">{treatments.map(([title, text]) => <article key={title}><div className="odonto-icon" aria-hidden="true"><i /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="odonto-experience" id="experiencia"><div className="odonto-experience__image"><Image src="/images/odontologia-recepcao.png" alt="Recepção e sala de conversa de uma clínica odontológica acolhedora" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div><p>Uma experiência mais humana</p><h2>A confiança começa antes da cadeira odontológica.</h2><span>Recepção, conversa e orientação também fazem parte do atendimento. O ambiente deve reduzir ansiedade e deixar cada escolha compreensível.</span><ul><li><Check /> Tempo para ouvir suas necessidades</li><li><Check /> Explicação de etapas e possibilidades</li><li><Check /> Orientações claras para depois da consulta</li></ul></div></section>

        <section className="odonto-faq" id="duvidas"><div><p>Antes da visita</p><h2>Dúvidas comuns,<br />respostas diretas.</h2></div><div>{["Como funciona a primeira consulta?", "Posso conversar antes de iniciar um tratamento?", "Quais tratamentos são oferecidos?"].map((question, index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{index === 0 ? "A primeira conversa serve para entender sua necessidade, avaliar o caso e explicar possibilidades com transparência." : index === 1 ? "Sim. O conceito prioriza um momento de orientação para que nenhuma decisão precise ser tomada com pressa." : "A página real listaria apenas os tratamentos e profissionais verificados da clínica."}</p></details>)}</div></section>

        <section className="odonto-contact" id="agendar"><div><p>Estamos aqui para ouvir</p><h2>Comece com uma conversa tranquila.</h2></div><DemoNote accent="#307d76" /></section>
      </main>
      <footer className="odonto-footer"><span>Carla <small>clínica fictícia</small></span><p>Conceito demonstrativo por Artur Carletto.</p></footer>
    </div>
  );
}
