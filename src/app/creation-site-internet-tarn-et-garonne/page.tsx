import type { Metadata } from "next";
import { LocalPage } from "@/components/templates/LocalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Création site internet Tarn-et-Garonne (82) | Boki Agency",
  description:
    "Création de site internet dans le Tarn-et-Garonne : Montauban, Castelsarrasin, Moissac, Caussade, Montech, Valence d'Agen. Sites vitrines, e-commerce et click & collect pour les pros locaux.",
  alternates: { canonical: "/creation-site-internet-tarn-et-garonne" },
};

export default function Page() {
  return (
    <LocalPage
      url={`${SITE.url}/creation-site-internet-tarn-et-garonne`}
      metaTitle="Création site internet Tarn-et-Garonne"
      metaDescription="Création de sites internet professionnels dans le Tarn-et-Garonne."
      eyebrow="Tarn-et-Garonne (82)"
      crumbs={[{ href: "/creation-site-internet-tarn-et-garonne", label: "Création site internet Tarn-et-Garonne" }]}
      h1={
        <>
          Création de <span className="gradient-text">site internet dans le Tarn-et-Garonne</span>
        </>
      }
      intro="De Montauban à Moissac, en passant par Castelsarrasin, Caussade ou Valence d'Agen, nous accompagnons les professionnels du Tarn-et-Garonne dans la création de sites clairs et utiles."
      body={[
        {
          title: "Une présence en ligne adaptée à votre territoire",
          text: "Le Tarn-et-Garonne regroupe des marchés très différents : Montauban, communes périurbaines, zones rurales et bassins agricoles. Un site bien pensé prend en compte vos zones d'intervention, vos cibles et la manière dont vos clients vous cherchent en ligne.",
        },
        {
          title: "SEO local dans le Tarn-et-Garonne",
          text: "Pour viser des recherches locales (création de site internet à Montauban, à Castelsarrasin, à Moissac, à Caussade, à Valence d'Agen...), il faut une structure claire, un contenu spécifique et un maillage interne logique entre vos pages locales.",
        },
        {
          title: "Pour quels professionnels ?",
          text: "Artisans du bâtiment, commerces, indépendants, prestataires de services, e-commerce et entreprises locales : un site bien construit est souvent le premier point de contact avec vos prospects.",
        },
      ]}
      bullets={[
        "Mobile first",
        "Pages locales possibles",
        "Formulaire de contact",
        "Photos de réalisations",
        "Boutons d'appel",
        "SEO local",
        "Mise en ligne accompagnée",
      ]}
      services={[
        { href: "/services/site-vitrine-montauban", label: "Site vitrine", desc: "Pour présenter votre activité." },
        { href: "/services/site-ecommerce-shopify-montauban", label: "E-commerce Shopify", desc: "Pour vendre en ligne." },
        { href: "/services/click-and-collect-montauban", label: "Click & collect", desc: "Commande et retrait en boutique." },
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
        "Toulouse",
        "Agen",
        "Tarn-et-Garonne",
      ]}
      internalLinks={[
        { href: "/creation-site-internet-montauban", label: "Création site internet Montauban" },
        { href: "/site-internet-artisan-montauban", label: "Site internet pour artisan" },
        { href: "/agence-web-montauban", label: "Agence web Montauban" },
        { href: "/realisations", label: "Voir les réalisations" },
      ]}
      faqItems={[
        {
          q: "Intervenez-vous dans tout le Tarn-et-Garonne ?",
          a: "Oui. Boki Agency accompagne les professionnels à Montauban, Castelsarrasin, Moissac, Caussade, Montech, Valence d'Agen, Beaumont-de-Lomagne, Saint-Nicolas-de-la-Grave, Verdun-sur-Garonne et dans d'autres villes du 82. L'accompagnement peut aussi se faire à distance selon les besoins du projet.",
        },
        {
          q: "Pouvez-vous créer plusieurs pages pour mes zones d'intervention ?",
          a: "Oui. La création de pages locales dédiées à chaque ville ou secteur d'intervention est une stratégie efficace pour le SEO local.",
        },
        {
          q: "Combien coûte la création d'un site internet dans le Tarn-et-Garonne ?",
          a: "Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation peut être proposée après analyse du projet.",
        },
      ]}
    />
  );
}
