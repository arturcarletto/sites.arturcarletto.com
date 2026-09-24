import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { ModelConcept } from "@/data/models";

export function ModelCard({ model, priority = false }: { model: ModelConcept; priority?: boolean }) {
  return (
    <Link href={`/modelos/${model.slug}`} className={`model-card model-card--${model.tone}`}>
      <div className="model-card__image">
        <Image
          src={model.image}
          alt={model.alt}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      <div className="model-card__content">
        <p>{model.eyebrow}</p>
        <h3>{model.title}</h3>
        <span>{model.summary}</span>
        <span className="model-card__link">Ver conceito <ArrowUpRight /></span>
      </div>
    </Link>
  );
}

