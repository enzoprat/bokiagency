import type { Metadata } from "next";
import type { CityData } from "@/lib/data/cities";

/**
 * Server-only — utilisé dans les `export const metadata` des pages.
 * Pas dans le composant CityPage (qui est un Client Component).
 */
export function buildCityMetadata(city: CityData): Metadata {
  return {
    title: `Création site internet ${city.name} (${city.postalCode}) — Agence web 82`,
    description: `Création de sites internet professionnels à ${city.name} et alentours (${city.postalCode}, Tarn-et-Garonne). Sites vitrines, e-commerce et SEO local pour les pros du 82.`,
    alternates: {
      canonical: `/creation-site-internet-${city.slug}`,
    },
    openGraph: {
      title: `Création site internet ${city.name} — Boki Agency`,
      description: `Sites internet pour les pros de ${city.name} (${city.postalCode}, Tarn-et-Garonne). Sites vitrines, e-commerce, SEO local.`,
      url: `/creation-site-internet-${city.slug}`,
      type: "website",
    },
  };
}
