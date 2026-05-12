import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { GUIDES } from "@/lib/data/guides";

/**
 * Sitemap structuré avec priorités et changefreq cohérentes :
 * - Homepage : prio 1, weekly
 * - Money pages locales : prio 0.9, monthly
 * - Pages services détail : prio 0.85, monthly
 * - Pages tarifs / institutionnelles : prio 0.7, monthly
 * - Guides : prio 0.6, monthly
 * - Pages légales : prio 0.3, yearly
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  // Money pages locales — priorité SEO forte
  const moneyPages: string[] = [
    "/creation-site-internet-montauban",
    "/creation-site-internet-tarn-et-garonne",
    "/site-internet-artisan-montauban",
    "/creation-site-shopify-montauban",
    "/creation-site-webflow-montauban",
    "/agence-web-montauban",
    "/developpeur-web-montauban",
    "/webdesigner-montauban",
  ];

  // Pages services détail
  const servicePages: string[] = [
    "/services/site-vitrine-montauban",
    "/services/site-ecommerce-shopify-montauban",
    "/services/click-and-collect-montauban",
    "/services/refonte-site-internet-montauban",
  ];

  // Pages institutionnelles + listing
  const institutionalPages: string[] = [
    "/services",
    "/tarifs-creation-site-internet",
    "/secteurs",
    "/a-propos",
    "/guides",
    "/contact",
  ];

  // Pages légales
  const legalPages: string[] = [
    "/mentions-legales",
    "/politique-confidentialite",
    "/conditions-de-prestation",
  ];

  // Guides dynamiques
  const guidePaths: string[] = GUIDES.map((g) => `/guides/${g.slug}`);

  const entries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...moneyPages.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...servicePages.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...institutionalPages.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...guidePaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...legalPages.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  return entries;
}
