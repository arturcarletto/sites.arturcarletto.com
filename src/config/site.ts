const TODO = "TODO";

export const siteConfig = {
  name: "Artur Carletto",
  role: "Engenheiro de Software",
  location: "Joinville, Santa Catarina, Brasil",
  shortLocation: "Joinville, SC",
  description:
    "Sites, landing pages e soluções digitais pensados para apresentar melhor sua empresa e facilitar novas conversas comerciais.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sites.arturcarletto.com",
  professionalBaseUrl: "https://arturcarletto.com",
  contact: {
    WHATSAPP_NUMBER: "5547992002457",
    WHATSAPP_DISPLAY: "+55 (47) 9 9200-2457",
    EMAIL: "arturcarletto@gmail.com",
    LINKEDIN_URL: "https://www.linkedin.com/in/arturcarletto/",
    GITHUB_URL: TODO,
  },
} as const;

export function isConfigured(value: string) {
  return Boolean(value && value !== TODO);
}

export function getWhatsappHref(message?: string) {
  const number = siteConfig.contact.WHATSAPP_NUMBER.replace(/\D/g, "");

  if (!isConfigured(siteConfig.contact.WHATSAPP_NUMBER) || !number) {
    return null;
  }

  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : "";

  return `https://wa.me/${number}${text}`;
}

export function getEmailHref() {
  return isConfigured(siteConfig.contact.EMAIL)
    ? `mailto:${siteConfig.contact.EMAIL}`
    : null;
}

export const whatsappContactHref = getWhatsappHref(
  "Olá, Artur. Vi seu site e gostaria de conversar sobre um projeto.",
);

export const directContactHref = whatsappContactHref ?? getEmailHref();

