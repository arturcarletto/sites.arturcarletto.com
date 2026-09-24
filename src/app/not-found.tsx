import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="not-found shell">
        <p className="eyebrow">Erro 404</p>
        <h1>Esta página não está por aqui.</h1>
        <p>O endereço pode ter mudado ou nunca ter existido.</p>
        <Link className="text-link" href="/">Voltar ao início</Link>
      </main>
    </>
  );
}
