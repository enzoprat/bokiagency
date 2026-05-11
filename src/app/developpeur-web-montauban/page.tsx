import type { Metadata } from "next";
import { LocalPage } from "@/components/templates/LocalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Développeur web à Montauban | Boki Agency",
  description:
    "Développeur web à Montauban : intégration propre, sites rapides, mobile first et SEO de base. Boki Agency conçoit des sites durables pour les pros locaux.",
  alternates: { canonical: "/developpeur-web-montauban" },
};

export default function Page() {
  return (
    <LocalPage
      url={`${SITE.url}/developpeur-web-montauban`}
      metaTitle="Développeur web Montauban"
      metaDescription="Développeur web à Montauban."
      eyebrow="Dév web Montauban"
      crumbs={[{ href: "/developpeur-web-montauban", label: "Développeur web Montauban" }]}
      h1={
        <>
          Développeur web à <span className="gradient-text">Montauban</span>
        </>
      }
      intro="Une approche développeur orientée production : sites propres, rapides, mobile first et préparés pour le SEO."
      body={[
        {
          title: "Code propre et maintenable",
          text: "Un site doit être facile à maintenir et à faire évoluer dans le temps. Le code, la structure et les performances sont pensés pour durer.",
        },
        {
          title: "Performance & SEO de base",
          text: "Lighthouse, Core Web Vitals, structure HTML, balises : les fondamentaux techniques sont en place avant la mise en ligne.",
        },
        {
          title: "Stack moderne",
          text: "Next.js, React, Shopify, Webflow selon le projet : on choisit la bonne stack pour le bon usage.",
        },
      ]}
      bullets={[
        "Next.js / React",
        "Shopify",
        "Webflow",
        "Mobile first",
        "Performance",
        "SEO de base",
        "Mise en ligne accompagnée",
      ]}
      services={[
        { href: "/services/site-vitrine-montauban", label: "Site vitrine", desc: "Présentation pro." },
        { href: "/services/site-ecommerce-shopify-montauban", label: "Shopify", desc: "E-commerce." },
        { href: "/services/refonte-site-internet-montauban", label: "Refonte", desc: "Faire évoluer un site." },
      ]}
      internalLinks={[
        { href: "/agence-web-montauban", label: "Agence web Montauban" },
        { href: "/webdesigner-montauban", label: "Webdesigner Montauban" },
        { href: "/creation-site-internet-montauban", label: "Création site internet Montauban" },
      ]}
      faqItems={[
        {
          q: "Quelle stack utilisez-vous ?",
          a: "Next.js / React, Shopify ou Webflow selon le projet. Le choix est fait en fonction de l'usage, des objectifs et de la maintenance souhaitée.",
        },
        {
          q: "Le site est-il bien optimisé techniquement ?",
          a: "Oui. Performance, mobile first, structure HTML claire et SEO de base sont préparés avant la mise en ligne.",
        },
      ]}
    />
  );
}
