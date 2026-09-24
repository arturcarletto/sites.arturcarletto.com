export type ModelConcept = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  tone: "clima" | "moveis" | "auto" | "odonto";
};

export const modelConcepts: ModelConcept[] = [
  {
    slug: "climatizacao",
    eyebrow: "Serviços técnicos",
    title: "Climatização",
    summary:
      "Uma experiência objetiva para transformar urgência e intenção em pedidos de orçamento.",
    image: "/images/climatizacao-hero.png",
    alt: "Sala contemporânea com aparelho de ar-condicionado integrado à arquitetura",
    tone: "clima",
  },
  {
    slug: "moveis-planejados",
    eyebrow: "Interiores e arquitetura",
    title: "Móveis planejados",
    summary:
      "Composição editorial que valoriza materialidade, processo e projetos sob medida.",
    image: "/images/moveis-hero.png",
    alt: "Cozinha sofisticada com marcenaria em madeira e ilha de pedra natural",
    tone: "moveis",
  },
  {
    slug: "estetica-automotiva",
    eyebrow: "Cuidado automotivo",
    title: "Estética automotiva",
    summary:
      "Contraste, precisão e acabamento para comunicar um serviço de padrão superior.",
    image: "/images/automotiva-hero.png",
    alt: "Automóvel grafite em estúdio escuro recebendo acabamento detalhado",
    tone: "auto",
  },
  {
    slug: "odontologia",
    eyebrow: "Saúde e confiança",
    title: "Odontologia",
    summary:
      "Informação clara e uma atmosfera acolhedora para reduzir dúvidas antes do agendamento.",
    image: "/images/odontologia-hero.png",
    alt: "Consultório odontológico contemporâneo com luz natural e materiais acolhedores",
    tone: "odonto",
  },
];

