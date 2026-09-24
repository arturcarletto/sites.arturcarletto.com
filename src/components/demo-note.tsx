import Link from "next/link";
import { getWhatsappHref } from "@/config/site";

export function DemoNote({ accent = "#2459e0" }: { accent?: string }) {
  const whatsapp = getWhatsappHref("Olá, Artur. Vi um dos seus conceitos demonstrativos e quero conversar sobre um site para minha empresa.");

  return (
    <div className="demo-note" style={{ "--demo-accent": accent } as React.CSSProperties}>
      <p><strong>Este contato é parte da demonstração.</strong> Em um projeto publicado, o botão levaria ao WhatsApp real da empresa.</p>
      {whatsapp ? <a href={whatsapp} target="_blank" rel="noreferrer">Falar com Artur no WhatsApp</a> : <Link href="/sites#contato">Falar sobre meu site</Link>}
    </div>
  );
}

