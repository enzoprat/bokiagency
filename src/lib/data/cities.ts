/**
 * Données structurées des villes secondaires du Tarn-et-Garonne (82).
 * Chaque ville a une vraie spécificité économique pour éviter le
 * "template swap" et donner du contenu réellement unique à Google.
 */

export type CityData = {
  slug: string;
  name: string; // affichage propre
  nameShort?: string; // pour titres oversized (sans diacritiques compliqués)
  postalCode: string;
  population: string; // approximatif, pour donner contexte sans risquer faux chiffre
  geo: { lat: number; lng: number };
  /** Phrase d'accroche unique au territoire — utilisée en intro */
  pitch: string;
  /** Spécificité économique locale (utilisée dans le body) */
  economicContext: string;
  /** Cibles métier locales prioritaires */
  targetSectors: string[];
  /** Villes/communes voisines (pour maillage + areaServed) */
  neighbors: string[];
  /** Distance à Montauban (texte naturel) */
  distanceFromMontauban: string;
  /** Question locale spécifique pour la FAQ */
  localFaq: { q: string; a: string };
};

export const CITIES: CityData[] = [
  {
    slug: "castelsarrasin",
    name: "Castelsarrasin",
    postalCode: "82100",
    population: "13 000 habitants",
    geo: { lat: 44.0392, lng: 1.1075 },
    pitch:
      "Sous-préfecture du Tarn-et-Garonne, Castelsarrasin concentre commerces de centre, artisans et entreprises de services autour d'un bassin de vie actif.",
    economicContext:
      "Le tissu économique castelsarrasinois mêle commerces de proximité, artisanat du bâtiment, transport et services aux entreprises. Sur ce marché, un site internet clair fait souvent la différence avant même le premier appel : il permet de présenter l'activité, les zones d'intervention et les coordonnées de manière professionnelle.",
    targetSectors: [
      "Commerces de centre-ville",
      "Artisans du bâtiment",
      "Transport & logistique",
      "Services aux entreprises",
      "Professions libérales",
    ],
    neighbors: ["Moissac", "Saint-Nicolas-de-la-Grave", "Montech", "Montbeton"],
    distanceFromMontauban: "à 13 km à l'ouest de Montauban",
    localFaq: {
      q: "Intervenez-vous sur Castelsarrasin et autour ?",
      a: "Oui. Boki Agency accompagne les professionnels de Castelsarrasin (82100), Moissac, Montech, Saint-Nicolas-de-la-Grave et plus largement dans tout le Tarn-et-Garonne. Les échanges peuvent se faire sur place ou à distance selon vos préférences.",
    },
  },
  {
    slug: "moissac",
    name: "Moissac",
    postalCode: "82200",
    population: "12 000 habitants",
    geo: { lat: 44.1056, lng: 1.0844 },
    pitch:
      "Ville d'art et d'histoire connue pour son abbaye et son chasselas IGP, Moissac vit du tourisme, de l'agriculture et d'un commerce de centre dynamique.",
    economicContext:
      "À Moissac, la clientèle web est multiple : visiteurs de passage qui préparent leur séjour, locaux qui cherchent un artisan, producteurs et restaurateurs qui veulent vendre directement. Un site clair, mobile first, structuré pour Google Business Profile fait gagner des demandes qualifiées toute l'année — pas seulement en haute saison.",
    targetSectors: [
      "Restaurants & cafés",
      "Producteurs & viticulteurs (chasselas)",
      "Hébergement touristique",
      "Artisanat d'art",
      "Commerces de centre",
    ],
    neighbors: ["Castelsarrasin", "Lauzerte", "La Ville-Dieu-du-Temple", "Lafrançaise"],
    distanceFromMontauban: "à 30 km au nord-ouest de Montauban",
    localFaq: {
      q: "Pouvez-vous créer un site pour un producteur ou un hébergement à Moissac ?",
      a: "Oui. Pour les producteurs (chasselas, fruits, vins) ou les hébergements touristiques moissagais, on conçoit des sites avec galerie photos, page de présentation, calendrier ou catalogue, et formulaire de réservation/contact. Tout est pensé pour convertir les visiteurs Google ou Tripadvisor en demandes.",
    },
  },
  {
    slug: "caussade",
    name: "Caussade",
    postalCode: "82300",
    population: "7 000 habitants",
    geo: { lat: 44.1606, lng: 1.5408 },
    pitch:
      "Capitale historique du chapeau de paille, Caussade reste une ville artisanale et commerçante au cœur du nord du Tarn-et-Garonne.",
    economicContext:
      "Caussade et son bassin (Septfonds, Albias, Saint-Étienne-de-Tulmont) regroupent un artisanat dense — bâtiment, chapellerie, agroalimentaire — et des commerces de proximité. Beaucoup de pros y travaillent au bouche-à-oreille, mais un site internet bien fait double le canal d'acquisition sans dépendre des réseaux sociaux.",
    targetSectors: [
      "Artisans du bâtiment",
      "Chapelliers & artisanat textile",
      "Commerces locaux",
      "Restaurants",
      "Services aux particuliers",
    ],
    neighbors: ["Septfonds", "Albias", "Saint-Étienne-de-Tulmont", "Nègrepelisse"],
    distanceFromMontauban: "à 22 km au nord-est de Montauban",
    localFaq: {
      q: "Travaillez-vous avec les artisans de Caussade et du nord du 82 ?",
      a: "Oui, c'est même une cible prioritaire. Pour les artisans de Caussade, Septfonds, Albias ou Saint-Étienne-de-Tulmont, on conçoit des sites vitrines pensés pour la prise de contact : présentation des prestations, photos de chantier, zones d'intervention, formulaire et boutons d'appel directs.",
    },
  },
  {
    slug: "montech",
    name: "Montech",
    postalCode: "82700",
    population: "6 500 habitants",
    geo: { lat: 43.9536, lng: 1.2350 },
    pitch:
      "Traversée par le canal latéral à la Garonne et célèbre pour sa pente d'eau, Montech combine attrait touristique, commerce local et activités d'artisans à proximité immédiate de Montauban.",
    economicContext:
      "À 12 km au sud de Montauban, Montech bénéficie de la dynamique de l'agglomération sans en avoir l'encombrement : artisans, commerces, professions libérales et activités touristiques en profitent. Pour ces pros, un site clair fait office de vitrine permanente sur Google — souvent plus efficace qu'une page Facebook qui n'apparaît plus dans les recherches.",
    targetSectors: [
      "Artisans du bâtiment",
      "Commerces de proximité",
      "Activités touristiques (canal)",
      "Restaurants",
      "Professions libérales",
    ],
    neighbors: ["Bressols", "Montbeton", "La Ville-Dieu-du-Temple", "Labastide-Saint-Pierre"],
    distanceFromMontauban: "à 12 km au sud de Montauban",
    localFaq: {
      q: "Faut-il être basé à Montech pour travailler avec vous ?",
      a: "Non. Notre approche est la même qu'à Montauban : on échange par téléphone, visio ou sur place selon votre préférence. Beaucoup de pros de Montech, Bressols et Labastide-Saint-Pierre passent par nous pour gagner du temps sans complexité technique.",
    },
  },
  {
    slug: "valence-dagen",
    name: "Valence d'Agen",
    postalCode: "82400",
    population: "5 000 habitants",
    geo: { lat: 44.1117, lng: 0.8961 },
    pitch:
      "À l'ouest du Tarn-et-Garonne, Valence d'Agen est un pôle économique autour de la centrale de Golfech, de l'agriculture et d'un tissu artisanal solide.",
    economicContext:
      "Le bassin de Valence d'Agen — Golfech, Donzac, Auvillar — concentre des activités très variées : sous-traitants énergie, agroalimentaire, artisanat, commerces. Pour ces structures, un site internet permet de toucher la clientèle d'Agen, du sud-Lot-et-Garonne et du nord-Tarn-et-Garonne sans dépendre uniquement du local.",
    targetSectors: [
      "Sous-traitants industriels (Golfech)",
      "Artisans du bâtiment",
      "Agriculture & agroalimentaire",
      "Commerces & services",
      "Restaurants",
    ],
    neighbors: ["Golfech", "Donzac", "Auvillar", "Lamagistère"],
    distanceFromMontauban: "à 50 km à l'ouest de Montauban",
    localFaq: {
      q: "Vous adressez-vous aussi à des pros qui travaillent autour d'Agen ?",
      a: "Oui. Beaucoup de nos clients de Valence d'Agen, Auvillar ou Donzac travaillent à cheval sur le 82 et le 47. On conçoit des sites pensés pour ce double bassin, avec un référencement local qui couvre les deux zones.",
    },
  },
  {
    slug: "beaumont-de-lomagne",
    name: "Beaumont-de-Lomagne",
    postalCode: "82500",
    population: "4 000 habitants",
    geo: { lat: 43.8806, lng: 0.9856 },
    pitch:
      "Bastide médiévale connue pour son ail blanc IGP de Lomagne, Beaumont est le cœur économique d'un territoire agricole et artisanal entre 82 et Gers.",
    economicContext:
      "Beaumont-de-Lomagne vit de l'agriculture (ail, agro), de l'artisanat et d'un commerce de bastide vivant. Un site internet bien construit permet aux pros de Beaumont de toucher une clientèle qui dépasse le bourg : Lavit, Auvillar, mais aussi le sud-ouest de Montauban et l'est du Gers.",
    targetSectors: [
      "Producteurs & agriculteurs",
      "Artisans du bâtiment",
      "Commerces & marchés",
      "Restaurants & restaurations",
      "Services aux particuliers",
    ],
    neighbors: ["Lavit", "Auvillar", "Beaumont-de-Lomagne", "Saint-Nicolas-de-la-Grave"],
    distanceFromMontauban: "à 35 km à l'ouest de Montauban",
    localFaq: {
      q: "Pouvez-vous créer un site pour un producteur ou un commerce de Beaumont ?",
      a: "Oui. Pour les producteurs d'ail, les marchés, les artisans ou les commerces de Beaumont-de-Lomagne et du nord-Gers, on conçoit des sites qui présentent l'activité, mettent en avant les produits ou prestations, et facilitent la prise de commande ou de contact.",
    },
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}
