import { Whatsapp } from "@/components/icons";
import { getWhatsappHref } from "@/config/site";

export function FloatingWhatsapp() {
  const href = getWhatsappHref(
    "Olá, Artur. Vi seu site e gostaria de conversar sobre um projeto para minha empresa.",
  );

  if (!href) return null;

  return (
    <a
      className="floating-whatsapp"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com Artur pelo WhatsApp"
    >
      <Whatsapp />
      <span><small>Contato direto</small>Falar com Artur</span>
    </a>
  );
}
