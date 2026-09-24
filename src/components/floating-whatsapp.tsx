"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Whatsapp } from "@/components/icons";
import { getWhatsappHref } from "@/config/site";

const demoContact = {
  "/modelos/climatizacao": {
    label: "Solicitar orçamento",
    subject: "climatização",
  },
  "/modelos/odontologia": {
    label: "Agendar conversa",
    subject: "odontologia",
  },
  "/modelos/moveis-planejados": {
    label: "Solicitar projeto",
    subject: "móveis planejados",
  },
  "/modelos/estetica-automotiva": {
    label: "Solicitar avaliação",
    subject: "estética automotiva",
  },
} as const;

export function FloatingWhatsapp() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileVisible, setIsMobileVisible] = useState(false);
  const [isNearInlineContact, setIsNearInlineContact] = useState(false);
  const demo = demoContact[pathname as keyof typeof demoContact];
  const href = getWhatsappHref(demo
    ? `Olá, Artur. Vi o conceito demonstrativo de ${demo.subject} e gostaria de conversar sobre um site para minha empresa.`
    : "Olá, Artur. Vi seu site e gostaria de conversar sobre um projeto para minha empresa.");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  useEffect(() => {
    const updateVisibility = () => setIsMobileVisible(window.scrollY > 360);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    const contactSections = document.querySelectorAll(".cta-section, .site-footer");
    const observer = new IntersectionObserver(
      (entries) => setIsNearInlineContact(entries.some((entry) => entry.isIntersecting)),
      { rootMargin: "0px 0px -18% 0px", threshold: 0.05 },
    );
    contactSections.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      observer.disconnect();
    };
  }, [pathname]);

  if (!href) return null;

  if (demo) {
    return (
      <>
        <button
          className="floating-whatsapp floating-whatsapp--demo"
          type="button"
          aria-haspopup="dialog"
          onClick={() => setIsOpen(true)}
        >
          <Whatsapp />
          <span><small>Neste conceito</small>{demo.label}</span>
        </button>
        <dialog
          ref={dialogRef}
          className="demo-contact-dialog"
          aria-labelledby="demo-contact-title"
          onCancel={() => setIsOpen(false)}
          onClose={() => setIsOpen(false)}
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <button
            className="demo-contact-dialog__close"
            type="button"
            aria-label="Fechar janela"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <p className="demo-contact-dialog__eyebrow">Conceito demonstrativo</p>
          <h2 id="demo-contact-title">Esta empresa é fictícia.</h2>
          <p>
            O botão faz parte da experiência criada para este modelo. Se você quer uma página com esse nível de cuidado para uma empresa real, a conversa é diretamente com Artur Carletto.
          </p>
          <a href={href} target="_blank" rel="noreferrer">
            <Whatsapp /> Conversar com Artur no WhatsApp
          </a>
        </dialog>
      </>
    );
  }

  return (
    <a
      className={`floating-whatsapp floating-whatsapp--artur${isMobileVisible && !isNearInlineContact ? " is-mobile-visible" : ""}`}
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
