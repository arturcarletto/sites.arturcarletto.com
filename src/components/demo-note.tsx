import Link from "next/link";
import { getWhatsappHref } from "@/config/site";

export function DemoNote({ accent = "#2459e0" }: { accent?: string }) {
  const whatsapp = getWhatsappHref("Olá, Artur. Vi um dos seus conceitos demonstrativos e quero conversar sobre um site para minha empresa.");

  return (
    <div className="demo-note" style={{ "--demo-accent": accent } as React.CSSProperties}>
      <p><strong>Esta é uma demonstração, não uma empresa real.</strong> Em um projeto publicado, este botão levaria ao WhatsApp da empresa. Para criar uma experiência assim para o seu negócio, a conversa é diretamente com Artur.</p>
      {whatsapp ? <a href={whatsapp} target="_blank" rel="noreferrer">Conversar com Artur</a> : <Link href="/sites#contato">Falar sobre meu site</Link>}
    </div>
  );
}

