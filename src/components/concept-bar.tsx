import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export function ConceptBar() {
  return (
    <aside className="concept-bar" aria-label="Aviso de conceito demonstrativo">
      <span><i aria-hidden="true" /> Conceito demonstrativo criado por Artur Carletto</span>
      <Link href="/modelos">Voltar ao portfólio <ArrowRight /></Link>
    </aside>
  );
}

