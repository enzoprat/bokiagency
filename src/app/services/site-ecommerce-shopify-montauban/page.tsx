import type { Metadata } from "next";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Création site Shopify e-commerce à Montauban | Boki Agency",
  description:
    "Création de boutiques Shopify professionnelles à Montauban : catalogue structuré, pages produits soignées et expérience d'achat fluide pour vos clients.",
  alternates: { canonical: "/services/site-ecommerce-shopify-montauban" },
};

export default function Page() {
  const url = `${SITE.url}/services/site-ecommerce-shopify-montauban`;
  return (
    <ServiceDetail
      url={url}
      title="Création de site e-commerce Shopify à Montauban"
      description="Boutiques Shopify professionnelles avec catalogue structuré et parcours d'achat fluide."
      eyebrow="E-commerce Shopify"
      h1={
        <>
          Création de <span className="gradient-text">site Shopify à Montauban</span>
        </>
      }
      intro="Une boutique en ligne professionnelle pour vendre vos produits, structurer votre catalogue et offrir une expérience d'achat fluide à vos clients."
      bullets={[
        "Création Shopify",
        "Pages produits soignées",
        "Collections structurées",
        "Design responsive",
        "Parcours d'achat optimisé",
        "Mise en valeur de la marque",
        "Structure catalogue claire",
        "Pages institutionnelles",
        "Préparation SEO de base",
        "Mise en ligne accompagnée",
      ]}
      why={[
        {
          title: "Plateforme robuste",
          text: "Shopify est une solution éprouvée, fiable, mise à jour et adaptée aux indépendants comme aux marques.",
        },
        {
          title: "Catalogue lisible",
          text: "Une structure claire fait gagner du temps aux clients et augmente le panier moyen.",
        },
        {
          title: "Expérience mobile",
          text: "La majorité des achats se font sur mobile : tout est pensé pour ce contexte.",
        },
        {
          title: "Marque mise en avant",
          text: "Le design valorise votre univers, pas seulement vos produits.",
        },
        {
          title: "Évolutif",
          text: "De nouvelles collections, pages ou fonctionnalités peuvent être ajoutées ensuite.",
        },
        {
          title: "Préparé pour le SEO",
          text: "Balises, structure et contenu sont travaillés pour viser une visibilité durable.",
        },
      ]}
      process={[
        { title: "Cadrage", text: "Cibles, catalogue, codes de marque, parcours type." },
        { title: "Architecture", text: "Collections, pages produits, contenus et menus." },
        { title: "Design & intégration", text: "Direction artistique et build Shopify propre." },
        { title: "Mise en ligne", text: "Vérifications, paiement, expéditions, publication." },
      ]}
      faqItems={[
        {
          q: "Shopify est-il adapté aux petites entreprises ?",
          a: "Oui. Shopify est très bien adapté aux indépendants, artisans et petites marques qui veulent vendre en ligne avec un outil fiable et évolutif.",
        },
        {
          q: "Pouvez-vous reprendre un Shopify existant ?",
          a: "Oui. Une refonte de boutique existante est possible : restructuration, redesign et nettoyage du catalogue.",
        },
        {
          q: "Combien coûte une boutique Shopify ?",
          a: "Le tarif dépend du nombre de produits, des fonctionnalités, du contenu à intégrer et du design souhaité. Une estimation peut être proposée après analyse du projet.",
        },
        {
          q: "Les abonnements Shopify sont-ils inclus ?",
          a: "Non. L'abonnement Shopify reste à la charge du client. Un accompagnement est possible pour le choix de l'offre.",
        },
      ]}
      relatedHref="/services/click-and-collect-montauban"
      relatedLabel="Click & collect à Montauban"
    />
  );
}
