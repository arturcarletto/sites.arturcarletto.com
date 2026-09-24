import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  ogImage?: `/${string}`;
  ogImageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = "/og/home",
  ogImageAlt = "Artur Carletto — sites para empresas",
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.baseUrl).toString();
  const imageUrl = new URL(ogImage, siteConfig.baseUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      title,
      description,
      siteName: "Artur Carletto",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: imageUrl, alt: ogImageAlt }],
    },
  };
}
