import type { Metadata } from "next";
import { LocalPage } from "@/components/templates/LocalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Création site Shopify à Montauban | Boki Agency",
  description:
    "Création de boutiques Shopify à Montauban : catalogue clair, pages produits soignées et expérience d'achat fluide pour vos clients.",
  alternates: { canonical: "/creation-site-shopify-montauban" },
};

export default function Page() {
  return (
    <LocalPage
      url={`${SITE.url}/creation-site-shopify-montauban`}
      metaTitle="Création site Shopify Montauban"
      metaDescription="Création de boutiques Shopify à Montauban."
      eyebrow="Shopify Montauban"
      crumbs={[{ href: "/creation-site-shopify-montauban", label: "Création site Shopify Montauban" }]}
      h1={
        <>
          Création de <span className="gradient-text">boutique Shopify à Montauban</span>
        </>
      }
      intro="Vendre en ligne avec une plateforme robuste : catalogue structuré, pages produits soignées et parcours d'achat fluide."
      body={[
        {
          title: "Pourquoi Shopify",
          text: "Shopify est une plateforme e-commerce éprouvée, fiable, mise à jour régulièrement et adaptée aussi bien aux indépendants qu'aux marques en croissance. Elle permet de se concentrer sur les produits et la marque sans se perdre dans la technique.",
        },
        {
          title: "Une expérience d'achat soignée",
          text: "La structure du catalogue, les pages produits et la navigation mobile sont travaillées pour rendre l'achat évident, rapide et agréable.",
        },
        {
          title: "Une marque mise en avant",
          text: "Le design valorise votre univers, pas seulement vos produits. Photos, contenus de marque et codes graphiques sont intégrés avec soin.",
        },
      ]}
      bullets={[
        "Création Shopify",
        "Pages produits soignées",
        "Collections structurées",
        "Design responsive",
        "Parcours d'achat optimisé",
        "Pages institutionnelles",
        "Préparation SEO de base",
      ]}
      services={[
        { href: "/services/site-ecommerce-shopify-montauban", label: "Service Shopify détaillé", desc: "Le détail complet de la prestation." },
        { href: "/services/click-and-collect-montauban", label: "Click & collect", desc: "Si une partie retrait est souhaitée." },
        { href: "/services/refonte-site-internet-montauban", label: "Refonte de site", desc: "Si un Shopify existant doit évoluer." },
      ]}
      zones={["Montauban", "Castelsarrasin", "Moissac", "Caussade", "Montech", "Toulouse", "Agen"]}
      internalLinks={[
        { href: "/services/site-ecommerce-shopify-montauban", label: "E-commerce Shopify Montauban" },
        { href: "/creation-site-internet-montauban", label: "Création site internet Montauban" },
      ]}
      faqItems={[
        {
          q: "Shopify est-il adapté aux petites entreprises ?",
          a: "Oui. Shopify est très bien adapté aux indépendants, artisans et petites marques qui veulent vendre en ligne avec un outil fiable et évolutif.",
        },
        {
          q: "Combien coûte une boutique Shopify ?",
          a: "Le tarif dépend du nombre de produits, des fonctionnalités, du contenu à intégrer et du design souhaité. Une estimation peut être proposée après analyse du projet.",
        },
      ]}
    />
  );
}
