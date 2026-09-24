import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { getEmailHref, isConfigured, siteConfig, whatsappContactHref } from "@/config/site";

export function SiteFooter() {
  const contacts = [
    { label: "WhatsApp", value: whatsappContactHref },
    { label: "E-mail", value: getEmailHref() },
    { label: "LinkedIn", value: siteConfig.contact.LINKEDIN_URL },
    { label: "GitHub", value: siteConfig.contact.GITHUB_URL },
  ].filter((item): item is { label: string; value: string } => Boolean(item.value && isConfigured(item.value)));

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <Link href="/" className="footer-name">Artur Carletto</Link>
          <p>Engenharia de software e desenvolvimento web, com trabalho direto do diagnóstico à entrega.</p>
        </div>
        <div>
          <span className="footer-label">Navegação</span>
          <Link href="/sites">Sites para empresas</Link>
          <Link href="/modelos">Demonstrações</Link>
          <Link href="/sobre">Sobre</Link>
        </div>
        <div>
          <span className="footer-label">Base</span>
          <p>{siteConfig.shortLocation}</p>
          {contacts.map((item) => item.value.startsWith("http") ? (
            <a key={item.label} href={item.value} target="_blank" rel="noreferrer">{item.label} <ArrowUpRight /></a>
          ) : (
            <a key={item.label} href={item.value}>{item.label} <ArrowUpRight /></a>
          ))}
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <span>© {new Date().getFullYear()} Artur Carletto</span>
        <span>Projetado e desenvolvido em Joinville.</span>
      </div>
    </footer>
  );
}

