import type { Metadata } from "next";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Création site click & collect à Montauban | Boki Agency",
  description:
    "Mise en place d'un site click & collect à Montauban : commande en ligne, retrait en magasin, expérience mobile claire et catalogue organisé.",
  alternates: { canonical: "/services/click-and-collect-montauban" },
};

export default function Page() {
  const url = `${SITE.url}/services/click-and-collect-montauban`;
  return (
    <ServiceDetail
      url={url}
      title="Création de site click & collect à Montauban"
      description="Une solution simple pour permettre à vos clients de commander en ligne et récupérer sur place."
      eyebrow="Click & collect"
      h1={
        <>
          Création de <span className="gradient-text">site click & collect à Montauban</span>
        </>
      }
      intro="Une solution pratique pour permettre à vos clients de commander en ligne et récupérer sur place, avec une expérience mobile claire et un catalogue organisé."
      bullets={[
        "Catalogue produits",
        "Commande en ligne",
        "Organisation des catégories",
        "Expérience mobile",
        "Formulaire ou tunnel adapté",
        "Mise en place selon le besoin",
        "Pages institutionnelles",
        "SEO de base",
      ]}
      why={[
        {
          title: "Pratique pour vos clients",
          text: "Pré-commander, gagner du temps en magasin, retirer rapidement.",
        },
        {
          title: "Adapté au commerce local",
          text: "Idéal pour les commerces avec passage en boutique et clientèle de proximité.",
        },
        {
          title: "Mobile first",
          text: "L'usage principal du click & collect est mobile, tout est pensé pour ce contexte.",
        },
        {
          title: "Catalogue organisé",
          text: "Une structure claire permet de retrouver vite ce qu'on cherche.",
        },
        {
          title: "Mise en place selon le besoin",
          text: "Solution adaptée à votre type de produits et à votre organisation.",
        },
        {
          title: "Évolutif",
          text: "Ajout de catégories, produits, options ou nouvelles offres ensuite.",
        },
      ]}
      process={[
        { title: "Cadrage", text: "Type de produits, organisation, parcours client." },
        { title: "Architecture", text: "Catégories, pages produits, tunnel de commande." },
        { title: "Design & intégration", text: "Interface mobile claire et lisible." },
        { title: "Mise en ligne", text: "Tests, formation rapide, publication." },
      ]}
      faqItems={[
        {
          q: "Click & collect : pour quels commerces est-ce utile ?",
          a: "Boulangeries, traiteurs, épiceries, fleuristes, cavistes, commerces locaux : tous les commerces avec retrait en boutique peuvent en tirer parti.",
        },
        {
          q: "Faut-il une plateforme spécifique ?",
          a: "Cela dépend du projet. Selon les besoins, la solution est mise en place sur Shopify ou via un site dédié avec formulaire / tunnel adapté.",
        },
        {
          q: "Combien coûte un site click & collect ?",
          a: "Le tarif dépend du nombre de produits, des fonctionnalités et du design souhaité. Une estimation peut être proposée après analyse du projet.",
        },
      ]}
      relatedHref="/services/site-ecommerce-shopify-montauban"
      relatedLabel="E-commerce Shopify à Montauban"
    />
  );
}
