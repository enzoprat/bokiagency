import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { GUIDES } from "@/lib/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPaths = [
    "/",
    "/services",
    "/services/site-vitrine-montauban",
    "/services/site-ecommerce-shopify-montauban",
    "/services/click-and-collect-montauban",
    "/services/refonte-site-internet-montauban",
    "/creation-site-internet-montauban",
    "/creation-site-internet-tarn-et-garonne",
    "/site-internet-artisan-montauban",
    "/creation-site-shopify-montauban",
    "/creation-site-webflow-montauban",
    "/agence-web-montauban",
    "/developpeur-web-montauban",
    "/webdesigner-montauban",
    "/tarifs-creation-site-internet",
    "/secteurs",
    "/a-propos",
    "/guides",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
    "/conditions-de-prestation",
  ];

  const guides = GUIDES.map((g) => `/guides/${g.slug}`);

  const all = [...staticPaths, ...guides];

  return all.map((p) => ({
    url: `${base}${p === "/" ? "" : p}`,
    lastModified: now,
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : p.startsWith("/guides/") ? 0.6 : 0.8,
  }));
}
