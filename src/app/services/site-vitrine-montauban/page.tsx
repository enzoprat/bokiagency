import type { Metadata } from "next";
import { ServiceDetail } from "@/components/templates/ServiceDetail";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Création site vitrine à Montauban | Boki Agency",
  description:
    "Création de sites vitrines professionnels à Montauban : présentation claire, mobile first, formulaire de contact et SEO local. Pour artisans, indépendants et entreprises.",
  alternates: { canonical: "/services/site-vitrine-montauban" },
};

export default function Page() {
  const url = `${SITE.url}/services/site-vitrine-montauban`;
  return (
    <ServiceDetail
      url={url}
      title="Création de site vitrine à Montauban"
      description="Sites vitrines professionnels conçus pour présenter votre activité, rassurer vos prospects et générer des demandes."
      eyebrow="Site vitrine"
      h1={
        <>
          Création de <span className="gradient-text">site vitrine à Montauban</span>
        </>
      }
      intro="Un site vitrine clair, moderne et professionnel pour présenter votre entreprise, vos services, vos réalisations et faciliter les demandes de contact."
      bullets={[
        "Présentation de l'entreprise",
        "Présentation des services",
        "Photos des prestations",
        "Zones d'intervention",
        "Formulaire de contact",
        "Boutons d'appel ou de contact",
        "Site responsive",
        "SEO de base",
        "Structure claire",
        "Mise en ligne accompagnée",
      ]}
      why={[
        {
          title: "Crédibilité immédiate",
          text: "Un site bien construit rassure vos prospects avant le premier échange.",
        },
        {
          title: "Conçu pour la conversion",
          text: "Chaque section guide vers le formulaire ou le bouton d'appel.",
        },
        {
          title: "Mobile first",
          text: "Une expérience pensée d'abord pour la majorité des recherches : le mobile.",
        },
        {
          title: "SEO local",
          text: "Structure et balisage propres pour viser les recherches locales à Montauban.",
        },
        {
          title: "Photos valorisées",
          text: "Vos réalisations sont mises en valeur sans alourdir la page.",
        },
        {
          title: "Évolutif",
          text: "Des pages, services ou zones supplémentaires peuvent être ajoutés ensuite.",
        },
      ]}
      process={[
        { title: "Analyse", text: "Comprendre l'activité, les services et les cibles." },
        { title: "Architecture", text: "Structurer les pages et le parcours utilisateur." },
        { title: "Design & dev", text: "Créer une interface claire, responsive et soignée." },
        { title: "Mise en ligne", text: "Connexion au domaine, vérifications et publication." },
      ]}
      faqItems={[
        {
          q: "Combien de pages contient un site vitrine ?",
          a: "Cela dépend du projet. La majorité des sites vitrines comprennent une page d'accueil, une page services, une page à propos, une page contact et éventuellement des pages locales ou métiers.",
        },
        {
          q: "Le site est-il optimisé pour le SEO local ?",
          a: "Oui. La structure, le balisage, les contenus et la performance sont préparés pour viser des recherches locales à Montauban et dans le Tarn-et-Garonne.",
        },
        {
          q: "Combien coûte un site vitrine ?",
          a: "Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation peut être proposée après analyse du projet.",
        },
        {
          q: "Le formulaire de contact est-il inclus ?",
          a: "Oui. Un formulaire propre est inclus, avec gestion des emails et champs adaptés à votre activité.",
        },
      ]}
      relatedHref="/site-internet-artisan-montauban"
      relatedLabel="Site internet pour artisan à Montauban"
    />
  );
}
