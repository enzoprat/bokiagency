import type { LucideIcon } from "lucide-react";
import {
  Globe,
  ShoppingBag,
  Store,
  RefreshCw,
  Search,
  Target,
} from "lucide-react";

export type ServiceCard = {
  slug: string;
  href: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  bullets: string[];
};

export const SERVICES: ServiceCard[] = [
  {
    slug: "site-vitrine-montauban",
    href: "/services/site-vitrine-montauban",
    icon: Globe,
    title: "Site vitrine",
    intro:
      "Un site clair, moderne et professionnel pour présenter votre entreprise, vos services, vos réalisations et faciliter les demandes de contact.",
    bullets: [
      "Présentation de l'entreprise",
      "Présentation des services",
      "Photos des prestations",
      "Zones d'intervention",
      "Formulaire de contact",
      "Boutons d'appel ou de contact",
      "Site responsive",
      "SEO de base",
    ],
  },
  {
    slug: "site-ecommerce-shopify-montauban",
    href: "/services/site-ecommerce-shopify-montauban",
    icon: ShoppingBag,
    title: "E-commerce Shopify",
    intro:
      "Une boutique en ligne professionnelle pour vendre vos produits, structurer votre catalogue et offrir une expérience d'achat fluide.",
    bullets: [
      "Création Shopify",
      "Pages produits",
      "Collections",
      "Design responsive",
      "Parcours d'achat optimisé",
      "Mise en valeur de la marque",
      "Structure catalogue",
    ],
  },
  {
    slug: "click-and-collect-montauban",
    href: "/services/click-and-collect-montauban",
    icon: Store,
    title: "Click & collect",
    intro:
      "Une solution pratique pour permettre à vos clients de commander en ligne et récupérer sur place.",
    bullets: [
      "Catalogue produits",
      "Commande en ligne",
      "Organisation des catégories",
      "Expérience mobile",
      "Formulaire ou tunnel adapté",
      "Mise en place selon le besoin",
    ],
  },
  {
    slug: "refonte-site-internet-montauban",
    href: "/services/refonte-site-internet-montauban",
    icon: RefreshCw,
    title: "Refonte de site",
    intro:
      "Moderniser un site existant pour le rendre plus clair, plus rapide et mieux structuré pour le SEO et la conversion.",
    bullets: [
      "Audit du site existant",
      "Restructuration des pages",
      "Nouvelle direction artistique",
      "Mobile first",
      "Optimisation SEO de base",
      "Migration de contenu",
      "Mise en ligne accompagnée",
    ],
  },
];

export const SECONDARY_SERVICES = [
  {
    icon: Search,
    title: "SEO local",
    text:
      "Préparer le site pour qu'il soit clair, structuré et adapté aux recherches locales sur Montauban et le Tarn-et-Garonne.",
  },
  {
    icon: Target,
    title: "Landing pages",
    text:
      "Pages dédiées à une offre, un service ou une campagne, conçues pour transformer les visites en demandes.",
  },
];
