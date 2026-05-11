import type { Metadata } from "next";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refonte de site internet à Montauban | Boki Agency",
  description:
    "Refonte de site existant à Montauban : nouvelle direction artistique, mobile first, structure claire et préparation SEO pour relancer votre présence en ligne.",
  alternates: { canonical: "/services/refonte-site-internet-montauban" },
};

export default function Page() {
  const url = `${SITE.url}/services/refonte-site-internet-montauban`;
  return (
    <ServiceDetail
      url={url}
      title="Refonte de site internet à Montauban"
      description="Refonte d'un site existant pour le rendre plus clair, plus rapide et mieux structuré pour le SEO et la conversion."
      eyebrow="Refonte de site"
      h1={
        <>
          Refonte de <span className="gradient-text">site internet à Montauban</span>
        </>
      }
      intro="Moderniser un site existant pour le rendre plus clair, plus rapide et mieux structuré, tout en respectant ce qui fonctionne déjà."
      bullets={[
        "Audit du site existant",
        "Restructuration des pages",
        "Nouvelle direction artistique",
        "Mobile first",
        "Optimisation SEO de base",
        "Migration de contenu",
        "Mise en ligne accompagnée",
        "Préparation des redirections",
      ]}
      why={[
        {
          title: "Garder ce qui marche",
          text: "Une refonte ne repart pas de zéro : on conserve ce qui apporte de la valeur.",
        },
        {
          title: "Clarté & lisibilité",
          text: "Une structure plus claire améliore la compréhension et les demandes.",
        },
        {
          title: "Mobile first",
          text: "Refonte pensée d'abord pour le mobile, où se trouvent la majorité des visites.",
        },
        {
          title: "Préparation SEO",
          text: "Balises, structure et redirections gérées pour ne pas perdre les acquis SEO.",
        },
        {
          title: "Performance",
          text: "Site plus rapide, plus léger, plus agréable à utiliser.",
        },
        {
          title: "Évolutif",
          text: "Une base saine pour ajouter ensuite des pages, services ou zones locales.",
        },
      ]}
      process={[
        { title: "Audit", text: "Analyse de l'existant, contenus, performances, SEO." },
        { title: "Architecture", text: "Nouvelle structure, parcours, hiérarchie de l'info." },
        { title: "Design & dev", text: "Nouvelle DA et intégration responsive." },
        { title: "Migration", text: "Reprise des contenus, redirections, mise en ligne." },
      ]}
      faqItems={[
        {
          q: "Va-t-on perdre notre référencement actuel ?",
          a: "Une refonte propre prépare les redirections, conserve ce qui fonctionne et minimise l'impact SEO. La restructuration vise au contraire à renforcer la base SEO.",
        },
        {
          q: "Faut-il changer de domaine ?",
          a: "Pas nécessairement. La refonte peut tout à fait conserver le domaine actuel. Un changement de domaine se prépare avec des redirections soignées.",
        },
        {
          q: "Combien coûte une refonte ?",
          a: "Le tarif dépend du nombre de pages, de la complexité, du contenu à reprendre et des fonctionnalités souhaitées. Une estimation peut être proposée après analyse du projet.",
        },
      ]}
      relatedHref="/services/site-vitrine-montauban"
      relatedLabel="Création de site vitrine"
    />
  );
}
