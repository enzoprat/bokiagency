export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  related: { href: string; label: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "combien-coute-creation-site-internet-montauban",
    title: "Combien coûte la création d'un site internet à Montauban ?",
    excerpt:
      "Comprendre ce qui fait varier le prix d'un site : type, pages, contenu, fonctionnalités, maintenance.",
    metaTitle:
      "Combien coûte la création d'un site internet à Montauban ?",
    metaDescription:
      "Les facteurs qui influencent le prix d'un site internet à Montauban : type, pages, contenu, fonctionnalités, maintenance, hébergement.",
    category: "Tarifs",
    related: [
      { href: "/tarifs-creation-site-internet", label: "Page tarifs" },
      { href: "/services/site-vitrine-montauban", label: "Site vitrine Montauban" },
    ],
  },
  {
    slug: "site-vitrine-ou-page-facebook-artisan",
    title: "Site vitrine ou page Facebook : que choisir pour un artisan ?",
    excerpt:
      "Pourquoi un site vitrine offre plus de contrôle, de crédibilité et de visibilité long terme qu'une simple page sociale.",
    metaTitle: "Site vitrine ou page Facebook : que choisir pour un artisan ?",
    metaDescription:
      "Les différences clés entre un site vitrine et une page Facebook pour un artisan : contrôle, crédibilité, visibilité, SEO.",
    category: "Stratégie",
    related: [
      { href: "/site-internet-artisan-montauban", label: "Site internet pour artisan" },
      { href: "/services/site-vitrine-montauban", label: "Site vitrine Montauban" },
    ],
  },
  {
    slug: "pourquoi-artisan-montauban-site-internet",
    title: "Pourquoi un artisan à Montauban devrait avoir un site internet ?",
    excerpt:
      "Confiance, visibilité locale, demandes qualifiées : les raisons concrètes d'avoir un site quand on est artisan.",
    metaTitle: "Pourquoi un artisan à Montauban devrait avoir un site internet ?",
    metaDescription:
      "Les raisons concrètes d'avoir un site internet quand on est artisan à Montauban : confiance, SEO local, demandes qualifiées.",
    category: "Artisans",
    related: [
      { href: "/site-internet-artisan-montauban", label: "Site internet pour artisan Montauban" },
      { href: "/creation-site-internet-montauban", label: "Création site internet Montauban" },
    ],
  },
  {
    slug: "site-vitrine-ou-site-ecommerce",
    title: "Site vitrine ou site e-commerce : comment choisir ?",
    excerpt:
      "Présenter une activité ou vendre en ligne : les bons critères pour décider sans se tromper.",
    metaTitle: "Site vitrine ou site e-commerce : comment choisir ?",
    metaDescription:
      "Les bons critères pour choisir entre un site vitrine et un site e-commerce selon votre activité et vos objectifs.",
    category: "Stratégie",
    related: [
      { href: "/services/site-vitrine-montauban", label: "Site vitrine" },
      { href: "/services/site-ecommerce-shopify-montauban", label: "E-commerce Shopify" },
    ],
  },
  {
    slug: "webflow-ou-shopify",
    title: "Webflow ou Shopify : que choisir ?",
    excerpt:
      "Site de marque ou boutique en ligne : comprendre quand chaque outil prend tout son sens.",
    metaTitle: "Webflow ou Shopify : que choisir pour votre projet ?",
    metaDescription:
      "Comprendre quand utiliser Webflow ou Shopify selon votre projet : site de marque, e-commerce, contenu.",
    category: "Outils",
    related: [
      { href: "/creation-site-shopify-montauban", label: "Création site Shopify Montauban" },
      { href: "/creation-site-webflow-montauban", label: "Création site Webflow Montauban" },
    ],
  },
  {
    slug: "freelance-ou-agence-web-montauban",
    title: "Freelance ou agence web à Montauban : comment choisir ?",
    excerpt:
      "Coût, organisation, garanties, suivi : les vraies différences entre un freelance et une agence.",
    metaTitle: "Freelance ou agence web à Montauban : comment choisir ?",
    metaDescription:
      "Les vraies différences entre un freelance et une agence web à Montauban : organisation, suivi, garanties, coût.",
    category: "Stratégie",
    related: [
      { href: "/agence-web-montauban", label: "Agence web Montauban" },
      { href: "/creation-site-internet-montauban", label: "Création site internet Montauban" },
    ],
  },
  {
    slug: "preparer-creation-site-internet",
    title: "Comment bien préparer la création de son site internet ?",
    excerpt:
      "Les éléments à préparer avant de lancer un projet pour avancer vite et bien.",
    metaTitle: "Comment bien préparer la création de son site internet ?",
    metaDescription:
      "Liste des éléments à préparer avant de lancer la création d'un site internet : contenu, photos, identité, objectifs.",
    category: "Méthode",
    related: [
      { href: "/contact", label: "Lancer un projet" },
      { href: "/services/site-vitrine-montauban", label: "Site vitrine" },
    ],
  },
  {
    slug: "site-fiche-google-business",
    title: "Comment un site peut aider une fiche Google Business ?",
    excerpt:
      "Le rôle d'un site bien structuré pour renforcer la cohérence et la visibilité d'une fiche Google Business.",
    metaTitle: "Comment un site peut aider une fiche Google Business ?",
    metaDescription:
      "Le rôle d'un site internet pour renforcer la cohérence et la visibilité d'une fiche Google Business locale.",
    category: "SEO local",
    related: [
      { href: "/creation-site-internet-montauban", label: "Création site internet Montauban" },
      { href: "/site-internet-artisan-montauban", label: "Site internet pour artisan" },
    ],
  },
  {
    slug: "shopify-petites-entreprises",
    title: "Shopify est-il adapté aux petites entreprises ?",
    excerpt:
      "Pourquoi Shopify reste un excellent choix pour les indépendants, artisans et petites marques.",
    metaTitle: "Shopify est-il adapté aux petites entreprises ?",
    metaDescription:
      "Pourquoi Shopify reste un excellent choix pour les indépendants, artisans et petites marques qui veulent vendre en ligne.",
    category: "Outils",
    related: [
      { href: "/services/site-ecommerce-shopify-montauban", label: "E-commerce Shopify" },
      { href: "/creation-site-shopify-montauban", label: "Création site Shopify Montauban" },
    ],
  },
  {
    slug: "click-and-collect-commerces",
    title: "Click & collect : pour quels commerces est-ce utile ?",
    excerpt:
      "Boulangeries, traiteurs, fleuristes, cavistes : les commerces qui en tirent le plus parti.",
    metaTitle: "Click & collect : pour quels commerces est-ce utile ?",
    metaDescription:
      "Quels commerces ont vraiment intérêt à proposer un click & collect : boulangeries, traiteurs, fleuristes, cavistes…",
    category: "Click & collect",
    related: [
      { href: "/services/click-and-collect-montauban", label: "Click & collect Montauban" },
      { href: "/services/site-ecommerce-shopify-montauban", label: "E-commerce Shopify" },
    ],
  },
];
