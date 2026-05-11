import type { Metadata } from "next";
import { LocalPage } from "@/components/templates/LocalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Création site internet Montauban | Agence web Boki Agency",
  description:
    "Création de site internet à Montauban : sites vitrines, e-commerce Shopify et click & collect pour artisans, commerces et entreprises locales. Approche claire, mobile first, SEO local.",
  alternates: { canonical: "/creation-site-internet-montauban" },
};

export default function Page() {
  return (
    <LocalPage
      url={`${SITE.url}/creation-site-internet-montauban`}
      metaTitle="Création site internet Montauban"
      metaDescription="Création de sites internet professionnels à Montauban et dans le Tarn-et-Garonne."
      eyebrow="Montauban"
      crumbs={[{ href: "/creation-site-internet-montauban", label: "Création site internet Montauban" }]}
      h1={
        <>
          Création de <span className="gradient-text">site internet à Montauban</span>
        </>
      }
      intro="Boki Agency conçoit des sites vitrines, e-commerce et click & collect à Montauban. Une approche claire, mobile first, pensée pour générer des demandes qualifiées."
      body={[
        {
          title: "Pourquoi un site internet à Montauban change la donne",
          text: "À Montauban et dans le Tarn-et-Garonne, la majorité des prospects vous découvrent via une recherche Google, un réseau social ou une fiche Google Business. Un site internet clair, structuré et professionnel devient le support central qui rassure, présente et oriente vers le contact.",
        },
        {
          title: "Une approche orientée conversion",
          text: "Chaque page est pensée pour comprendre vite ce que vous proposez, pour qui, où, et comment vous contacter. Le design sert un objectif : amener naturellement à la prise de contact, sans surcharge ni effets gadgets.",
        },
        {
          title: "Mobile first et performance",
          text: "Vos visiteurs sont majoritairement sur mobile. Tous nos sites sont pensés mobile first, légers, rapides et adaptés à tous les écrans.",
        },
        {
          title: "SEO local préparé",
          text: "La structure, le balisage, les contenus et les performances sont préparés pour viser des recherches locales à Montauban et dans le Tarn-et-Garonne, sans surpromesse.",
        },
      ]}
      bullets={[
        "Site vitrine ou e-commerce",
        "Mobile first",
        "Formulaire de contact",
        "Boutons d'appel",
        "Photos de réalisations",
        "Zones d'intervention",
        "SEO de base",
        "Mise en ligne accompagnée",
      ]}
      services={[
        { href: "/services/site-vitrine-montauban", label: "Site vitrine Montauban", desc: "Présentation claire pour générer des demandes." },
        { href: "/services/site-ecommerce-shopify-montauban", label: "Shopify Montauban", desc: "Boutique en ligne professionnelle." },
        { href: "/services/click-and-collect-montauban", label: "Click & collect Montauban", desc: "Commande en ligne et retrait sur place." },
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
      ]}
      internalLinks={[
        { href: "/creation-site-internet-tarn-et-garonne", label: "Création site internet Tarn-et-Garonne" },
        { href: "/site-internet-artisan-montauban", label: "Site internet pour artisan Montauban" },
        { href: "/agence-web-montauban", label: "Agence web Montauban" },
        { href: "/webdesigner-montauban", label: "Webdesigner Montauban" },
        { href: "/developpeur-web-montauban", label: "Développeur web Montauban" },
        { href: "/tarifs-creation-site-internet", label: "Tarifs création de site" },
      ]}
      faqItems={[
        {
          q: "Créez-vous des sites internet à Montauban ?",
          a: "Oui. Boki Agency accompagne les professionnels à Montauban, dans le Tarn-et-Garonne et à distance selon les besoins du projet.",
        },
        {
          q: "Combien coûte un site internet à Montauban ?",
          a: "Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation peut être proposée après analyse du projet.",
        },
        {
          q: "Quel délai pour un site internet ?",
          a: "Le délai dépend du type de projet, du contenu disponible et des allers-retours. Une estimation est partagée au démarrage du projet.",
        },
        {
          q: "Le site est-il adapté au mobile ?",
          a: "Oui, tous les sites sont conçus en mobile first et restent parfaitement lisibles sur mobile, tablette et ordinateur.",
        },
      ]}
    />
  );
}
