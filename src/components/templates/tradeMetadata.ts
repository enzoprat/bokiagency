import type { Metadata } from "next";
import type { TradeData } from "@/lib/data/trades";

/**
 * Server-only metadata builder pour les pages métier × Montauban.
 */
export function buildTradeMetadata(trade: TradeData): Metadata {
  const url = `/site-internet-${trade.slug}`;
  return {
    title: `Site internet ${trade.trade} Montauban (82) — Agence web`,
    description: `Création de site internet pour ${trade.trade} à Montauban et dans le Tarn-et-Garonne. Galerie chantiers, formulaire de devis, SEO local et boutons d'appel mobile. Pensé pour les ${trade.tradePlural} du 82.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Site internet ${trade.trade} Montauban — Boki Agency`,
      description: `Site internet pensé pour les ${trade.tradePlural} de Montauban et du Tarn-et-Garonne.`,
      url,
      type: "website",
    },
    keywords: [
      `site internet ${trade.trade} Montauban`,
      `site web ${trade.trade} 82`,
      `création site ${trade.trade} Tarn-et-Garonne`,
      ...trade.keywords,
    ],
  };
}
