import Image from "next/image";
import Link from "next/link";
import { ConceptBar } from "@/components/concept-bar";
import { DemoNote } from "@/components/demo-note";
import { Accordion } from "@/components/accordion";
import { ArrowRight, Check } from "@/components/icons";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "Conceito de site para odontologia",
  description: "Conceito demonstrativo acolhedor para uma clínica odontológica fictícia.",
  path: "/modelos/odontologia",
});

const treatments = [
  { title: "Prevenção e cuidado", content: "Acompanhamento periódico e orientações apresentadas de forma simples, sempre a partir da avaliação de cada caso." },
  { title: "Odontologia restauradora", content: "Possibilidades de cuidado explicadas com clareza, incluindo etapas, alternativas e o que precisa ser acompanhado depois." },
  { title: "Estética do sorriso", content: "Uma conversa responsável sobre expectativas e possibilidades, respeitando as características de cada pessoa." },
  { title: "Atendimento infantil", content: "Acolhimento, linguagem adequada à idade e tempo para a criança se familiarizar com a consulta." },
];

const firstConversation = [
  ["01", "Escuta", "Você conta o que motivou a visita, suas dúvidas e o que espera entender."],
  ["02", "Avaliação", "A necessidade é observada antes de qualquer proposta de cuidado."],
  ["03", "Próximo passo", "As possibilidades e etapas são explicadas para que a decisão seja tranquila."],
];

const faq = [
  { title: "Como funciona a primeira consulta?", content: "A primeira conversa serve para entender sua necessidade, avaliar o caso e explicar possibilidades com transparência." },
  { title: "Posso conversar antes de iniciar um tratamento?", content: "Sim. O conceito prioriza um momento de orientação para que nenhuma decisão precise ser tomada com pressa." },
  { title: "Quais tratamentos são oferecidos?", content: "A página real listaria apenas os tratamentos e profissionais verificados da clínica." },
];

export default function OdontoPage() {
  return (
    <div className="concept-page odonto-page"><ConceptBar />
      <header className="odonto-header"><Link href="/modelos/odontologia" className="odonto-logo"><i>C</i><span>Carla<small>odontologia · clínica fictícia</small></span></Link><nav aria-label="Navegação do conceito"><a href="#tratamentos">Tratamentos</a><a href="#experiencia">A clínica</a><a href="#duvidas">Dúvidas</a></nav><a href="#agendar">Agendar conversa</a></header>
      <main id="conteudo">
        <section className="odonto-hero"><div className="odonto-hero__copy"><p>Cuidado próximo, decisões tranquilas</p><h1>Seu sorriso merece <em>clareza em cada etapa.</em></h1><span>Uma odontologia acolhedora, com explicações simples e atenção ao que você realmente precisa.</span><a href="#agendar">Quero agendar <ArrowRight /></a></div><div className="odonto-hero__image"><Image src="/images/odontologia-hero.png" alt="Consultório odontológico acolhedor com luz natural" fill loading="eager" fetchPriority="high" sizes="(max-width: 800px) 100vw, 55vw" /><span>Ambiente pensado para acolher</span></div></section>

        <section className="odonto-reassurance"><div><strong>Escuta</strong><span>para entender antes de propor</span></div><div><strong>Clareza</strong><span>para decidir sem pressão</span></div><div><strong>Cuidado</strong><span>em cada momento da consulta</span></div></section>

        <section className="odonto-treatments" id="tratamentos"><div className="odonto-heading"><p>Tratamentos</p><h2>Cuidado completo,<br />explicado com calma.</h2><span>Escolha um tema para entender como a informação pode preparar a primeira conversa.</span><a href="#agendar">Agendar uma conversa <ArrowRight /></a></div><Accordion items={treatments} className="odonto-treatment-accordion" initialOpen={0} /></section>

        <section className="odonto-first-talk"><div><p>Como funciona a primeira conversa</p><h2>Sem pressa para decidir.</h2></div><ol>{firstConversation.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

        <section className="odonto-experience" id="experiencia"><div className="odonto-experience__image"><Image src="/images/odontologia-recepcao.png" alt="Recepção e sala de conversa de uma clínica odontológica acolhedora" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div><p>Uma experiência mais humana</p><h2>A confiança começa antes da cadeira odontológica.</h2><span>Recepção, conversa e orientação também fazem parte do atendimento. O ambiente deve reduzir ansiedade e deixar cada escolha compreensível.</span><ul><li><Check /> Tempo para ouvir suas necessidades</li><li><Check /> Explicação de etapas e possibilidades</li><li><Check /> Orientações claras para depois da consulta</li></ul></div></section>

        <section className="odonto-faq" id="duvidas"><div><p>Antes da visita</p><h2>Dúvidas comuns,<br />respostas diretas.</h2></div><Accordion items={faq} className="odonto-faq-accordion" /></section>

        <section className="odonto-contact" id="agendar"><div><p>Estamos aqui para ouvir</p><h2>Comece com uma conversa tranquila.</h2></div><DemoNote accent="#307d76" /></section>
      </main>
      <footer className="odonto-footer"><span>Carla <small>clínica fictícia</small></span><p>Conceito demonstrativo por Artur Carletto.</p></footer>
    </div>
  );
}
