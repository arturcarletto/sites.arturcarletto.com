import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  style: "normal",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const newsreader = localFont({
  src: "./fonts/newsreader-latin.woff2",
  variable: "--font-newsreader",
  weight: "200 800",
  style: "normal",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Artur Carletto — Sites e landing pages",
    template: "%s — Artur Carletto",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "Artur Carletto — Sites e landing pages",
    description: siteConfig.description,
    siteName: "Artur Carletto",
  },
  twitter: {
    card: "summary",
    title: "Artur Carletto — Sites e landing pages",
    description: siteConfig.description,
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f2ed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personId = `${siteConfig.professionalBaseUrl}/#artur-carletto`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Joinville",
          addressRegion: "SC",
          addressCountry: "BR",
        },
        url: siteConfig.professionalBaseUrl,
        email: `mailto:${siteConfig.contact.EMAIL}`,
        telephone: `+${siteConfig.contact.WHATSAPP_NUMBER}`,
        sameAs: [siteConfig.contact.LINKEDIN_URL],
      },
      {
        "@type": "Service",
        "@id": `${siteConfig.baseUrl}/#sites-e-landing-pages`,
        name: "Desenvolvimento de sites e landing pages",
        serviceType: "Desenvolvimento de sites e landing pages",
        url: siteConfig.baseUrl,
        areaServed: ["Joinville", "Santa Catarina"],
        description: siteConfig.description,
        provider: { "@id": personId },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: `+${siteConfig.contact.WHATSAPP_NUMBER}`,
          email: siteConfig.contact.EMAIL,
        },
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        {children}
        <FloatingWhatsapp />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
