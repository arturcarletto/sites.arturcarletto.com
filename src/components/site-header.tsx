import Link from "next/link";
import { MobileNavigation } from "@/components/mobile-navigation";
import { directContactHref } from "@/config/site";

const navigation = [
  { href: "/sites", label: "Sites para empresas" },
  { href: "/modelos", label: "Demonstrações" },
  { href: "/sobre", label: "Sobre" },
];

export function SiteHeader() {
  const action = directContactHref
    ? { href: directContactHref, label: "Conversar no WhatsApp" }
    : { href: "/modelos", label: "Ver trabalho" };

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand" aria-label="Artur Carletto — início">
          <span className="brand__mark" aria-hidden="true">AC</span>
          <span className="brand__text">
            <strong>Artur Carletto</strong>
            <small>Engenheiro de Software</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
          {directContactHref ? <a href={action.href} className="nav-contact" target="_blank" rel="noreferrer">{action.label}</a> : <Link href={action.href} className="nav-contact">{action.label}</Link>}
        </nav>

        <MobileNavigation
          navigation={navigation}
          action={action}
          actionExternal={Boolean(directContactHref)}
        />
      </div>
    </header>
  );
}

