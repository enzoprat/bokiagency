export type Realisation = {
  slug: string;
  href: string;
  name: string;
  url: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  problem: string;
  solution: string;
  structure: string[];
  features: string[];
  art: string;
  relatedService: { href: string; label: string };
  // Couleurs pour mockup visuel
  palette: { from: string; to: string };
};

export const REALISATIONS: Realisation[] = [
  {
    slug: "nils-bouchilloux",
    href: "/realisations/nils-bouchilloux",
    name: "Nils Bouchilloux",
    url: "https://www.nilsbouchilloux.fr",
    category: "Site vitrine",
    shortDescription:
      "Site vitrine professionnel pour présenter une activité, structurer les services et faciliter la prise de contact.",
    longDescription:
      "Site vitrine pensé comme un véritable support de présentation : structure claire, contenu hiérarchisé et parcours guidé vers le formulaire de contact.",
    problem:
      "Avoir un site qui inspire confiance, met en valeur l'activité et permet de centraliser les informations utiles aux prospects.",
    solution:
      "Un site vitrine épuré, mobile first, avec un parcours conçu pour amener naturellement à la prise de contact.",
    structure: [
      "Hero avec présentation claire",
      "Présentation de l'activité",
      "Services détaillés",
      "Réalisations / preuves",
      "Formulaire de contact",
    ],
    features: [
      "Design responsive",
      "Formulaire de contact",
      "Boutons d'appel et email",
      "Optimisation SEO de base",
    ],
    art: "Direction artistique sobre et premium, mise en avant des services et de l'identité.",
    relatedService: {
      href: "/services/site-vitrine-montauban",
      label: "Découvrir le service site vitrine",
    },
    palette: { from: "#0A0A0A", to: "#3F3F3F" },
  },
  {
    slug: "castagne-couverture",
    href: "/realisations/castagne-couverture",
    name: "Castagné Couverture",
    url: "https://www.castagnecouverture.fr",
    category: "Site vitrine artisan",
    shortDescription:
      "Site vitrine pour une entreprise de couverture, conçu pour présenter les prestations, les zones d'intervention et générer des demandes.",
    longDescription:
      "Site dédié à un artisan couvreur, avec un focus sur la confiance, les zones d'intervention et la mise en avant des prestations.",
    problem:
      "Donner à une entreprise de couverture un support web crédible et utile pour générer des demandes qualifiées.",
    solution:
      "Site vitrine SEO local avec présentation des prestations, des zones et un formulaire bien visible.",
    structure: [
      "Hero local",
      "Prestations de couverture",
      "Zones d'intervention",
      "Galerie de réalisations",
      "Formulaire de contact",
    ],
    features: [
      "Mobile first",
      "Boutons d'appel rapides",
      "SEO local",
      "Photos de réalisations",
    ],
    art: "Identité sérieuse, professionnelle, adaptée au secteur du bâtiment.",
    relatedService: {
      href: "/site-internet-artisan-montauban",
      label: "Site internet pour artisan",
    },
    palette: { from: "#141414", to: "#525252" },
  },
  {
    slug: "adjadj-compagnie",
    href: "/realisations/adjadj-compagnie",
    name: "ADJADJ Compagnie",
    url: "https://adjadjcompagnie.fr",
    category: "E-commerce / B2B",
    shortDescription:
      "Site e-commerce professionnel pour une activité de grossiste, avec catalogue structuré et expérience adaptée aux clients professionnels.",
    longDescription:
      "Site e-commerce pensé pour un usage B2B, avec un catalogue lisible et un parcours adapté aux clients professionnels.",
    problem:
      "Proposer une expérience d'achat claire à une clientèle professionnelle, avec une structure catalogue lisible.",
    solution:
      "Boutique en ligne professionnelle, structure catalogue claire et parcours d'achat fluide adapté au B2B.",
    structure: [
      "Hero marque",
      "Catégories produits",
      "Pages produits détaillées",
      "Pages de marque / contenu",
      "Parcours d'achat optimisé",
    ],
    features: [
      "Structure catalogue",
      "Pages produits",
      "Collections",
      "Design responsive",
    ],
    art: "Direction artistique professionnelle adaptée à une activité de grossiste.",
    relatedService: {
      href: "/services/site-ecommerce-shopify-montauban",
      label: "E-commerce Shopify",
    },
    palette: { from: "#0A0A0A", to: "#737373" },
  },
  {
    slug: "starsonstage",
    href: "/realisations/starsonstage",
    name: "Stars On Stage",
    url: "https://www.starsonstage.fr",
    category: "Site vitrine événementiel",
    shortDescription:
      "Site de présentation pour une activité événementielle, pensé pour valoriser l'univers, les prestations et la crédibilité du projet.",
    longDescription:
      "Site dédié à un univers événementiel, conçu pour transmettre l'identité du projet et faciliter les demandes.",
    problem:
      "Mettre en avant un univers événementiel et valoriser la crédibilité du projet auprès des prospects.",
    solution:
      "Site vitrine immersif, narration claire et mise en avant des prestations et de l'identité.",
    structure: [
      "Hero immersif",
      "Univers du projet",
      "Prestations",
      "Galerie",
      "Contact",
    ],
    features: [
      "Direction artistique forte",
      "Mobile first",
      "Galerie",
      "Formulaire de contact",
    ],
    art: "Univers visuel marqué, premium, adapté à un projet événementiel.",
    relatedService: {
      href: "/services/site-vitrine-montauban",
      label: "Site vitrine professionnel",
    },
    palette: { from: "#1F1F1F", to: "#A3A3A3" },
  },
  {
    slug: "couverture-gironde",
    href: "/realisations/couverture-gironde",
    name: "Couverture Gironde",
    url: "https://www.couverturegironde.fr",
    category: "Site vitrine SEO local",
    shortDescription:
      "Site vitrine orienté visibilité locale, conçu pour présenter les services, rassurer les prospects et renforcer la présence en ligne.",
    longDescription:
      "Site SEO local pensé pour une activité de couverture en Gironde, avec un focus fort sur les zones desservies et la prise de contact.",
    problem:
      "Renforcer la présence en ligne locale d'une entreprise de couverture en Gironde et faciliter les demandes.",
    solution:
      "Site vitrine SEO local avec structure claire, zones desservies et formulaire bien positionné.",
    structure: [
      "Hero SEO local",
      "Services de couverture",
      "Zones d'intervention",
      "Réalisations",
      "Contact",
    ],
    features: [
      "SEO local",
      "Boutons d'appel",
      "Photos de chantier",
      "Mobile first",
    ],
    art: "Identité sobre, lisible et adaptée à un public local.",
    relatedService: {
      href: "/site-internet-artisan-montauban",
      label: "Site internet pour artisan",
    },
    palette: { from: "#141414", to: "#7A7A7A" },
  },
  {
    slug: "westerfield-london",
    href: "/realisations/westerfield-london",
    name: "Westerfield London",
    url: "https://www.westerfieldlondon.com",
    category: "Site vitrine premium",
    shortDescription:
      "Site professionnel avec direction artistique soignée, pensé pour présenter une marque et ses services avec crédibilité.",
    longDescription:
      "Site vitrine premium, avec une direction artistique soignée et une narration claire de la marque.",
    problem:
      "Présenter une marque haut de gamme avec une vraie crédibilité en ligne.",
    solution:
      "Direction artistique premium, narration claire, mise en avant des services et de l'identité.",
    structure: [
      "Hero marque",
      "Présentation",
      "Services",
      "Galerie / portfolio",
      "Contact",
    ],
    features: [
      "DA premium",
      "Mobile first",
      "Galerie",
      "Formulaire pro",
    ],
    art: "Identité premium, élégante, internationale.",
    relatedService: {
      href: "/services/site-vitrine-montauban",
      label: "Site vitrine premium",
    },
    palette: { from: "#0A0A0A", to: "#525252" },
  },
  {
    slug: "sm-couverture-pau",
    href: "/realisations/sm-couverture-pau",
    name: "SM Couverture Pau",
    url: "https://www.smcouverturepau.fr",
    category: "Site vitrine artisan",
    shortDescription:
      "Site vitrine pour une entreprise de couverture, structuré pour présenter l'activité, les prestations et les zones d'intervention.",
    longDescription:
      "Site dédié à un couvreur à Pau, structuré pour la confiance et la prise de contact.",
    problem:
      "Donner à une entreprise de couverture un support web professionnel et utile pour les demandes.",
    solution:
      "Site vitrine clair, mobile first, avec présentation des prestations et zones d'intervention.",
    structure: [
      "Hero local",
      "Prestations",
      "Zones d'intervention",
      "Galerie",
      "Formulaire de contact",
    ],
    features: [
      "SEO local",
      "Boutons d'appel",
      "Mobile first",
      "Galerie photos",
    ],
    art: "Identité sobre et crédible adaptée au secteur du bâtiment.",
    relatedService: {
      href: "/site-internet-artisan-montauban",
      label: "Site internet pour artisan",
    },
    palette: { from: "#1F1F1F", to: "#525252" },
  },
];
