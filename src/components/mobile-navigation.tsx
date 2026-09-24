"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { Menu } from "@/components/icons";

type NavigationItem = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  navigation: NavigationItem[];
  action: NavigationItem;
  actionExternal: boolean;
};

export function MobileNavigation({
  navigation,
  action,
  actionExternal,
}: MobileNavigationProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu({ returnFocus = false } = {}) {
    const details = detailsRef.current;
    if (!details) return;

    details.open = false;
    setIsOpen(false);
    if (returnFocus) summaryRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDetailsElement>) {
    if (event.key !== "Escape" || !detailsRef.current?.open) return;

    event.preventDefault();
    closeMenu({ returnFocus: true });
  }

  return (
    <details
      ref={detailsRef}
      className="mobile-nav"
      onKeyDown={handleKeyDown}
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary
        ref={summaryRef}
        aria-label={isOpen ? "Fechar navegação" : "Abrir navegação"}
      >
        <Menu />
      </summary>
      <nav aria-label="Navegação móvel">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => closeMenu()}>
            {item.label}
          </Link>
        ))}
        {actionExternal ? (
          <a href={action.href} target="_blank" rel="noreferrer" onClick={() => closeMenu()}>
            {action.label}
          </a>
        ) : (
          <Link href={action.href} onClick={() => closeMenu()}>{action.label}</Link>
        )}
      </nav>
    </details>
  );
}
