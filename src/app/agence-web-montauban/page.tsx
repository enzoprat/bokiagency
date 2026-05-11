import type { Metadata } from "next";
import { LocalPage } from "@/components/templates/LocalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agence web à Montauban | Boki Agency",
  description:
    "Boki Agency, agence web à Montauban : création de sites vitrines, e-commerce Shopify, click & collect et refonte de sites pour les pros locaux.",
  alternates: { canonical: "/agence-web-montauban" },
};

export default function Page() {
  return (
    <LocalPage
      url={`${SITE.url}/agence-web-montauban`}
      metaTitle="Agence web Montauban"
      metaDescription="Boki Agency, agence web à Montauban."
      eyebrow="Agence web Montauban"
      crumbs={[{ href: "/agence-web-montauban", label: "Agence web Montauban" }]}
      h1={
        <>
          Boki Agency : <span className="gradient-text">agence web à Montauban</span>
        </>
      }
      intro="Boki Agency est une agence web basée à Montauban, spécialisée dans la création de sites internet pensés pour la confiance et la conversion."
      body={[
        {
          title: "Une agence orientée résultats",
          text: "L'objectif n'est pas seulement de créer un beau site, mais un support de présentation utile, qui rassure, présente et oriente vers le contact.",
        },
        {
          title: "Une expertise locale",
          text: "Montauban et le Tarn-et-Garonne ont leurs spécificités : marchés artisans, commerces, services aux pros, projets touristiques. Nous accompagnons les pros locaux avec une approche simple et concrète.",
        },
        {
          title: "Sites vitrines, Shopify, click & collect",
          text: "Trois grandes typologies de sites pour couvrir l'essentiel des besoins des pros locaux, avec une méthode claire et un cadre maîtrisé.",
        },
      ]}
      bullets={[
        "Sites vitrines",
        "E-commerce Shopify",
        "Click & collect",
        "Refonte de site",
        "SEO local",
        "Mise en ligne accompagnée",
      ]}
      services={[
        { href: "/services/site-vitrine-montauban", label: "Site vitrine", desc: "Le plus demandé." },
        { href: "/services/site-ecommerce-shopify-montauban", label: "Shopify", desc: "Vendre en ligne." },
        { href: "/services/click-and-collect-montauban", label: "Click & collect", desc: "Commande + retrait." },
      ]}
      internalLinks={[
        { href: "/creation-site-internet-montauban", label: "Création site internet Montauban" },
        { href: "/site-internet-artisan-montauban", label: "Site internet pour artisan" },
        { href: "/webdesigner-montauban", label: "Webdesigner Montauban" },
        { href: "/developpeur-web-montauban", label: "Développeur web Montauban" },
        { href: "/realisations", label: "Voir les réalisations" },
        { href: "/a-propos", label: "À propos de l'agence" },
      ]}
      faqItems={[
        {
          q: "Êtes-vous une agence web à Montauban ?",
          a: "Oui. Boki Agency est une agence web qui accompagne les professionnels à Montauban, dans le Tarn-et-Garonne et à distance selon les besoins.",
        },
        {
          q: "Travaillez-vous avec des freelances ou en interne ?",
          a: "L'organisation s'adapte au projet, avec une responsabilité claire de l'agence sur la cohérence, la qualité et les délais.",
        },
        {
          q: "Combien coûte un site avec une agence web ?",
          a: "Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation peut être proposée après analyse du projet.",
        },
      ]}
    />
  );
}
