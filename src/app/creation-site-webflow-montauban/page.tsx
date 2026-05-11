import type { Metadata } from "next";
import { LocalPage } from "@/components/templates/LocalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Création site Webflow à Montauban | Boki Agency",
  description:
    "Création de site internet sur Webflow à Montauban : design soigné, animations maîtrisées et structure pensée pour le SEO et la conversion.",
  alternates: { canonical: "/creation-site-webflow-montauban" },
};

export default function Page() {
  return (
    <LocalPage
      url={`${SITE.url}/creation-site-webflow-montauban`}
      metaTitle="Création site Webflow Montauban"
      metaDescription="Création de site Webflow à Montauban."
      eyebrow="Webflow Montauban"
      crumbs={[{ href: "/creation-site-webflow-montauban", label: "Création site Webflow Montauban" }]}
      h1={
        <>
          Création de <span className="gradient-text">site Webflow à Montauban</span>
        </>
      }
      intro="Sites Webflow soignés à Montauban : design premium, animations maîtrisées et structure pensée pour le SEO et la conversion."
      body={[
        {
          title: "Pourquoi Webflow",
          text: "Webflow permet de créer des sites au design très soigné avec une grande maîtrise visuelle et une bonne gestion du SEO de base.",
        },
        {
          title: "Quand le préférer",
          text: "Webflow est particulièrement adapté aux sites vitrines premium, aux sites de marque et aux landing pages qui veulent un rendu visuel marqué.",
        },
        {
          title: "Webflow ou Shopify ?",
          text: "Pour vendre en ligne, Shopify reste le choix le plus pertinent. Pour présenter une activité avec un design fort, Webflow est une excellente option.",
        },
      ]}
      bullets={[
        "Direction artistique soignée",
        "Animations maîtrisées",
        "Mobile first",
        "Structure SEO de base",
        "Pages institutionnelles",
        "Mise en ligne accompagnée",
      ]}
      services={[
        { href: "/services/site-vitrine-montauban", label: "Site vitrine", desc: "L'option la plus polyvalente." },
        { href: "/services/site-ecommerce-shopify-montauban", label: "E-commerce Shopify", desc: "Si vous voulez vendre en ligne." },
        { href: "/services/refonte-site-internet-montauban", label: "Refonte de site", desc: "Si un site existant doit évoluer." },
      ]}
      faqItems={[
        {
          q: "Webflow ou Shopify ?",
          a: "Webflow pour un site vitrine ou de marque au design soigné. Shopify pour vendre en ligne avec un catalogue structuré.",
        },
        {
          q: "Combien coûte un site Webflow ?",
          a: "Le tarif dépend du nombre de pages, des animations souhaitées et de la complexité. Une estimation peut être proposée après analyse du projet.",
        },
      ]}
    />
  );
}
