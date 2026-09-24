import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  "",
  "/sites",
  "/sobre",
  "/modelos",
  "/modelos/climatizacao",
  "/modelos/moveis-planejados",
  "/modelos/estetica-automotiva",
  "/modelos/odontologia",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/sites" ? 0.9 : 0.7,
  }));
}

