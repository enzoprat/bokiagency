import type { Metadata } from "next";
import { LocalPage } from "@/components/templates/LocalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Site internet pour artisan à Montauban | Boki Agency",
  description:
    "Création de sites internet pour artisans à Montauban : couvreurs, plombiers, électriciens, peintres, menuisiers, paysagistes. Sites vitrines clairs, mobile first, SEO local.",
  alternates: { canonical: "/site-internet-artisan-montauban" },
};

export default function Page() {
  return (
    <LocalPage
      url={`${SITE.url}/site-internet-artisan-montauban`}
      metaTitle="Site internet pour artisan Montauban"
      metaDescription="Création de sites internet pour artisans et entreprises locales à Montauban."
      eyebrow="Artisans"
      crumbs={[{ href: "/site-internet-artisan-montauban", label: "Site internet artisan Montauban" }]}
      h1={
        <>
          Site internet pour <span className="gradient-text">artisan à Montauban</span>
        </>
      }
      intro="Un site clair, crédible et utile pour les artisans de Montauban et du Tarn-et-Garonne : couvreurs, plombiers, électriciens, peintres, menuisiers, paysagistes."
      body={[
        {
          title: "Un support de présentation crédible",
          text: "Pour un artisan, le site web est souvent le premier point de contact après une recommandation, une fiche Google Business ou un appel manqué. Il doit transmettre la confiance, montrer le travail et faciliter la prise de contact.",
        },
        {
          title: "Centraliser les informations utiles",
          text: "Prestations, photos de chantier, zones d'intervention, formulaire, boutons d'appel : tout ce qu'un prospect veut vérifier avant de vous joindre est centralisé sur le site.",
        },
        {
          title: "Pensé pour le mobile",
          text: "La majorité des recherches locales sont mobiles. Un site clair sur mobile transforme bien plus de visites en demandes.",
        },
        {
          title: "SEO local",
          text: "La structure et le contenu sont préparés pour viser les recherches comme “couvreur Montauban”, “plombier Castelsarrasin” ou “électricien Moissac”.",
        },
      ]}
      bullets={[
        "Présentation claire des prestations",
        "Photos de réalisations",
        "Zones d'intervention",
        "Formulaire de contact",
        "Boutons d'appel rapides",
        "Mobile first",
        "SEO local",
        "Mise en ligne accompagnée",
      ]}
      services={[
        { href: "/services/site-vitrine-montauban", label: "Site vitrine", desc: "La base pour un artisan." },
        { href: "/services/refonte-site-internet-montauban", label: "Refonte de site", desc: "Si un site existant est dépassé." },
        { href: "/agence-web-montauban", label: "Agence web Montauban", desc: "Vue d'ensemble de l'agence." },
      ]}
      zones={[
        "Montauban",
        "Castelsarrasin",
        "Moissac",
        "Caussade",
        "Montech",
        "Valence d'Agen",
        "Beaumont-de-Lomagne",
        "Saint-Nicolas-de-la-Grave",
        "Verdun-sur-Garonne",
        "Grisolles",
      ]}
      internalLinks={[
        { href: "/realisations/castagne-couverture", label: "Réalisation : Castagné Couverture" },
        { href: "/realisations/couverture-gironde", label: "Réalisation : Couverture Tarn-et-Garonne" },
        { href: "/realisations/sm-couverture-pau", label: "Réalisation : SM Couverture Pau" },
        { href: "/creation-site-internet-montauban", label: "Création site internet Montauban" },
      ]}
      faqItems={[
        {
          q: "Créez-vous des sites pour artisans ?",
          a: "Oui. Couvreurs, plombiers, électriciens, peintres, menuisiers, paysagistes : nous concevons des sites vitrines pensés pour la confiance et la prise de contact local.",
        },
        {
          q: "Combien coûte un site pour artisan ?",
          a: "Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation peut être proposée après analyse du projet.",
        },
        {
          q: "Faut-il fournir des photos de chantier ?",
          a: "Idéalement oui. Les photos de réalisations sont un élément clé pour rassurer les prospects et valoriser le savoir-faire.",
        },
      ]}
    />
  );
}
