"use client";

import Image from "next/image";
import { useId, useState, type KeyboardEvent } from "react";

const materials = [
  {
    id: "madeira",
    label: "Madeira",
    title: "Calor visual e desenho contínuo.",
    description: "Veios, tonalidade e sentido das peças ajudam a integrar volumes e criar uma presença mais acolhedora.",
    examples: "Painéis · armários · bancadas",
    image: "/images/moveis-home-office.png",
    imageAlt: "Home office planejado com marcenaria em madeira natural",
  },
  {
    id: "pedra",
    label: "Pedra",
    title: "Resistência nas superfícies de uso intenso.",
    description: "Textura, porosidade e manutenção orientam a escolha para que o acabamento funcione na rotina, não apenas na fotografia.",
    examples: "Tampos · ilhas · áreas molhadas",
    image: "/images/moveis-hero.png",
    imageAlt: "Cozinha planejada com ilha e superfície de pedra clara",
  },
  {
    id: "metal",
    label: "Metal",
    title: "Estrutura leve e detalhes precisos.",
    description: "Perfis, puxadores e apoios metálicos criam contraste, reforçam a estrutura e permitem encontros mais delicados.",
    examples: "Estruturas · puxadores · divisórias",
    image: "/images/moveis-metal.png",
    imageAlt: "Home office planejado com estruturas e detalhes em metal escuro",
  },
] as const;

export function MaterialSelector() {
  const [activeId, setActiveId] = useState<(typeof materials)[number]["id"]>("madeira");
  const prefix = useId();
  const active = materials.find((material) => material.id === activeId) ?? materials[0];

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? materials.length - 1
        : (index + (event.key === "ArrowRight" ? 1 : -1) + materials.length) % materials.length;

    setActiveId(materials[nextIndex].id);
    const buttons = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("[role='tab']");
    buttons?.[nextIndex]?.focus();
  }

  return (
    <div className={`material-selector material-selector--${active.id}`}>
      <div className="material-selector__image" aria-live="polite">
        <Image
          key={active.id}
          src={active.image}
          alt={active.imageAlt}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
        />
      </div>
      <div className="material-selector__tabs" role="tablist" aria-label="Conheça os materiais">
        {materials.map((material, index) => (
          <button
            id={`${prefix}-${material.id}-tab`}
            key={material.id}
            type="button"
            role="tab"
            aria-selected={active.id === material.id}
            aria-controls={`${prefix}-${material.id}-panel`}
            tabIndex={active.id === material.id ? 0 : -1}
            onClick={() => setActiveId(material.id)}
            onKeyDown={(event) => moveTab(event, index)}
          >
            {material.label}
          </button>
        ))}
      </div>
      <div
        className="material-selector__panel"
        id={`${prefix}-${active.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${prefix}-${active.id}-tab`}
      >
        <span className="material-selector__swatch" aria-hidden="true" />
        <p>{active.examples}</p>
        <h3>{active.title}</h3>
        <span>{active.description}</span>
      </div>
    </div>
  );
}
