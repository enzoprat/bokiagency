import type { Metadata } from "next";
import { LocalPage } from "@/components/templates/LocalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Webdesigner à Montauban | Boki Agency",
  description:
    "Webdesigner à Montauban : design moderne, interface mobile first, identité visuelle cohérente et expérience claire pour vos clients.",
  alternates: { canonical: "/webdesigner-montauban" },
};

export default function Page() {
  return (
    <LocalPage
      url={`${SITE.url}/webdesigner-montauban`}
      metaTitle="Webdesigner Montauban"
      metaDescription="Webdesigner à Montauban."
      eyebrow="Webdesign Montauban"
      crumbs={[{ href: "/webdesigner-montauban", label: "Webdesigner Montauban" }]}
      h1={
        <>
          Webdesigner à <span className="gradient-text">Montauban</span>
        </>
      }
      intro="Un design soigné qui sert votre activité, sans surcharge ni effets gadgets : interface claire, identité cohérente, mobile first."
      body={[
        {
          title: "Design utile",
          text: "Le design n'est pas une fin en soi, c'est un outil au service de votre message et de la conversion.",
        },
        {
          title: "Identité cohérente",
          text: "Couleurs, typographies, hiérarchie visuelle et photos sont travaillées pour rester cohérentes avec votre marque.",
        },
        {
          title: "Mobile first",
          text: "Le design est pensé d'abord pour mobile, puis adapté pour tablette et ordinateur.",
        },
      ]}
      bullets={[
        "Direction artistique",
        "Mise en page premium",
        "Mobile first",
        "Identité cohérente",
        "Photos valorisées",
        "Animations maîtrisées",
      ]}
      services={[
        { href: "/services/site-vitrine-montauban", label: "Site vitrine", desc: "Présentation soignée." },
        { href: "/services/refonte-site-internet-montauban", label: "Refonte", desc: "Moderniser un site existant." },
        { href: "/services/site-ecommerce-shopify-montauban", label: "Shopify", desc: "DA marque + e-commerce." },
      ]}
      internalLinks={[
        { href: "/agence-web-montauban", label: "Agence web Montauban" },
        { href: "/developpeur-web-montauban", label: "Développeur web Montauban" },
        { href: "/creation-site-internet-montauban", label: "Création site internet Montauban" },
      ]}
      faqItems={[
        {
          q: "Faites-vous le logo ?",
          a: "La création d'un logo simple peut être proposée en option. Pour un travail plus poussé d'identité visuelle, un accompagnement spécifique est défini en amont.",
        },
        {
          q: "Pouvez-vous repartir d'une identité existante ?",
          a: "Oui. Nous savons travailler à partir d'une identité existante, en l'adaptant pour le web tout en respectant ses codes.",
        },
      ]}
    />
  );
}
