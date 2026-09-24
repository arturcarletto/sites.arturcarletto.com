import { LinkButton } from "@/components/link-button";
import { ModelCard } from "@/components/model-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getWhatsappHref } from "@/config/site";
import { createPageMetadata } from "@/config/metadata";
import { modelConcepts } from "@/data/models";

export const metadata = createPageMetadata({
  title: "Demonstrações de sites",
  description: "Conceitos demonstrativos de sites para climatização, móveis planejados, estética automotiva e odontologia.",
  path: "/modelos",
});

export default function ModelsPage() {
  const whatsapp = getWhatsappHref("Olá, Artur. Vi as demonstrações e quero conversar sobre um site para minha empresa.");

  return (
    <div className="portfolio-page models-page"><SiteHeader /><main id="conteudo">
      <section className="models-hero shell"><div><p className="eyebrow"><span /> Biblioteca de demonstrações</p><h1>Sites que você pode <em>ver antes de explicar.</em></h1></div><div><p>Quatro conceitos, quatro identidades e decisões diferentes para cada tipo de negócio.</p><div className="concept-disclaimer"><strong>Conceitos demonstrativos</strong><span>Não representam clientes, empresas ou resultados reais.</span></div></div></section>
      <section className="shell models-gallery" aria-label="Galeria de conceitos">{modelConcepts.map((model, index) => <ModelCard model={model} key={model.slug} priority={index < 2} />)}</section>
      <section className="models-explainer shell"><span>Por que demonstrar?</span><p>Porque “site profissional” pode significar muitas coisas. Aqui, a qualidade, o cuidado com o mobile e a adaptação para cada segmento ficam concretos. O projeto real começa depois, com a identidade, a oferta e o contexto da sua empresa.</p></section>
      <section className="cta-section shell"><p className="eyebrow">Um ponto de partida</p><h2>Gostou de uma direção, mas precisa de algo com a sua identidade?</h2><p>Os conceitos não são temas prontos. Eles mostram possibilidades para uma solução feita a partir do seu negócio.</p><LinkButton href={whatsapp ?? "/sites"} variant="blue" external={Boolean(whatsapp)}>Falar sobre meu site</LinkButton></section>
    </main><SiteFooter /></div>
  );
}
