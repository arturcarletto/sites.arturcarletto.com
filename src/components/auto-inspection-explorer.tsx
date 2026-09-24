"use client";

import Image from "next/image";
import { useId, useState, type KeyboardEvent } from "react";
import { ArrowRight } from "@/components/icons";

const inspectionPoints = [
  {
    id: "pintura",
    label: "Pintura",
    title: "Estado da superfície",
    description: "Luz controlada ajuda a localizar marcas, diferenças de acabamento e áreas que exigem atenção antes do polimento.",
    criterion: "Define se a prioridade é limpeza, correção ou proteção.",
    position: "68% center",
    marker: ["69%", "49%"],
  },
  {
    id: "contornos",
    label: "Contornos",
    title: "Cantos e encontros",
    description: "Faróis, frisos, emblemas e mudanças de plano pedem uma abordagem compatível com o formato de cada peça.",
    criterion: "Evita tratar toda a carroceria como uma superfície uniforme.",
    position: "82% center",
    marker: ["74%", "58%"],
  },
  {
    id: "protecao",
    label: "Proteção",
    title: "Uso depois da entrega",
    description: "Rotina, exposição ao tempo e forma de lavagem orientam a escolha da proteção e os cuidados de manutenção.",
    criterion: "A recomendação precisa fazer sentido para o uso do veículo.",
    position: "48% center",
    marker: ["55%", "38%"],
  },
] as const;

export function AutoInspectionExplorer() {
  const [activeId, setActiveId] = useState<(typeof inspectionPoints)[number]["id"]>("pintura");
  const prefix = useId();
  const active = inspectionPoints.find((point) => point.id === activeId) ?? inspectionPoints[0];

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? inspectionPoints.length - 1
        : (index + (event.key === "ArrowRight" ? 1 : -1) + inspectionPoints.length) % inspectionPoints.length;

    setActiveId(inspectionPoints[nextIndex].id);
    event.currentTarget.parentElement
      ?.querySelectorAll<HTMLButtonElement>("[role='tab']")[nextIndex]
      ?.focus();
  }

  return (
    <section className="auto-inspection" aria-labelledby="auto-inspection-title">
      <div className="auto-inspection__visual">
        <Image
          src="/images/automotiva-detalhe.png"
          alt="Detalhe de capô e farol usado para explorar pontos de avaliação visual"
          fill
          sizes="(max-width: 800px) 100vw, 58vw"
          style={{ objectPosition: active.position }}
        />
        <span className="auto-inspection__badge">Exploração demonstrativa</span>
        <span
          className="auto-inspection__marker"
          style={{ left: active.marker[0], top: active.marker[1] }}
          aria-hidden="true"
        />
      </div>
      <div className="auto-inspection__content">
        <p>Avaliação antes do serviço</p>
        <h2 id="auto-inspection-title">O que observar antes de definir o processo.</h2>
        <div className="auto-inspection__tabs" role="tablist" aria-label="Pontos da avaliação visual">
          {inspectionPoints.map((point, index) => (
            <button
              id={`${prefix}-${point.id}-tab`}
              key={point.id}
              type="button"
              role="tab"
              aria-selected={active.id === point.id}
              aria-controls={`${prefix}-${point.id}-panel`}
              tabIndex={active.id === point.id ? 0 : -1}
              onClick={() => setActiveId(point.id)}
              onKeyDown={(event) => moveTab(event, index)}
            >
              {point.label}
            </button>
          ))}
        </div>
        <div
          className="auto-inspection__panel"
          id={`${prefix}-${active.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${prefix}-${active.id}-tab`}
          aria-live="polite"
        >
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <span>{active.criterion}</span>
        </div>
        <a href="#agenda">Solicitar avaliação do veículo <ArrowRight /></a>
      </div>
    </section>
  );
}
