/**
 * Données structurées par métier × Montauban.
 * Chaque métier a ses vraies problématiques business, ses canaux
 * d'acquisition et ses freins clients. Pas du "template swap".
 */

export type TradeData = {
  slug: string;
  trade: string; // nom du métier (singulier)
  tradePlural: string; // forme plurielle / collective
  emoji?: string; // optionnel pour le hero (pas affiché par défaut)
  /** Phrase d'accroche unique au métier */
  pitch: string;
  /** Problématiques business spécifiques au métier */
  problems: { title: string; text: string }[];
  /** Solutions concrètes (fonctionnalités du site) */
  solutions: { title: string; text: string }[];
  /** Pages-types incluses pour ce métier */
  pages: string[];
  /** Fonctionnalités utiles spécifiques au métier */
  features: string[];
  /** Mots-clés SEO secondaires à intégrer dans le contenu */
  keywords: string[];
  /** FAQ métier-spécifique */
  faq: { q: string; a: string }[];
  /** Métiers connexes pour cross-linking */
  related: string[];
};

export const TRADES: TradeData[] = [
  {
    slug: "couvreur-montauban",
    trade: "couvreur",
    tradePlural: "couvreurs",
    pitch:
      "Pour un couvreur à Montauban, le site internet est souvent le premier point de contact après un appel manqué ou une recherche Google urgente. Il doit rassurer en quelques secondes : zone d'intervention, photos de chantiers, certifications, formulaire et bouton d'appel direct.",
    problems: [
      {
        title: "Les demandes urgentes partent à la concurrence",
        text: "Une fuite, une tuile cassée après orage : les prospects appellent les 3 premiers résultats Google. Sans site clair, vous êtes invisible au moment où vos clients en ont le plus besoin.",
      },
      {
        title: "Difficile de prouver le sérieux du travail",
        text: "Sans photos de chantiers, sans présentation des prestations (zinguerie, démoussage, isolation), les prospects hésitent. Un site bien construit transforme un doute en confiance en moins de 30 secondes.",
      },
      {
        title: "Trop de demandes hors zone ou hors budget",
        text: "Quand le site n'affiche pas clairement les zones d'intervention et les types de prestations, vous perdez du temps à filtrer les demandes inadaptées.",
      },
    ],
    solutions: [
      {
        title: "Galerie chantiers avant / après",
        text: "Mettre en valeur vos réalisations en couverture, zinguerie, démoussage. Photos optimisées pour rester légères et nettes sur mobile.",
      },
      {
        title: "Bouton d'appel ultra-visible",
        text: "Sur mobile, un bouton 'Appeler maintenant' permanent. Sur desktop, votre numéro dans le header en gros. Pour ne plus rater une urgence.",
      },
      {
        title: "Page certifications & garanties",
        text: "Qualibat, RGE, assurance décennale : les éléments qui rassurent et qui font basculer la décision côté client.",
      },
      {
        title: "Zones d'intervention listées",
        text: "Montauban, Castelsarrasin, Caussade, Moissac, Montech… Une page claire évite les demandes hors zone.",
      },
    ],
    pages: [
      "Accueil avec présentation et CTA",
      "Prestations détaillées (couverture, zinguerie, démoussage, isolation)",
      "Galerie chantiers / avant-après",
      "Zones d'intervention (Montauban + 82)",
      "Certifications & assurances",
      "Formulaire de devis",
      "Contact & coordonnées",
    ],
    features: [
      "Formulaire de devis rapide",
      "Boutons d'appel sticky mobile",
      "Galerie photos chantiers",
      "Carte des zones d'intervention",
      "Page certifications RGE / Qualibat",
      "SEO local (couvreur + ville)",
      "Mobile first ultra-rapide",
    ],
    keywords: [
      "couvreur Montauban",
      "couverture toiture Montauban",
      "zinguerie 82",
      "rénovation toiture Tarn-et-Garonne",
      "démoussage toiture Montauban",
    ],
    faq: [
      {
        q: "Le site peut-il afficher mes certifications Qualibat / RGE ?",
        a: "Oui. Une page dédiée mettant en avant vos certifications (Qualibat, RGE, garanties décennales) est intégrée pour rassurer les prospects et faciliter l'éligibilité aux aides type MaPrimeRénov'.",
      },
      {
        q: "Comment gérer les demandes d'urgence (fuite, tempête) ?",
        a: "Le site est conçu mobile first avec un bouton d'appel ultra-visible. Sur smartphone, votre numéro est accessible en un tap depuis n'importe quelle page. Le formulaire de devis peut aussi être configuré pour notifier votre email instantanément.",
      },
      {
        q: "Peut-on intégrer une galerie chantiers ?",
        a: "Oui. Une galerie photos avec avant/après est essentielle pour un couvreur : elle prouve le sérieux du travail. Les photos sont optimisées pour rester légères et nettes sur mobile.",
      },
    ],
    related: ["plombier-montauban", "electricien-montauban"],
  },
  {
    slug: "plombier-montauban",
    trade: "plombier",
    tradePlural: "plombiers",
    pitch:
      "Pour un plombier-chauffagiste à Montauban, le site internet doit gérer deux types de demandes très différents : l'urgence (fuite, panne chaudière) et le projet planifié (rénovation salle de bain, installation). Un site bien structuré transforme les deux en demandes qualifiées.",
    problems: [
      {
        title: "Les urgences passent par téléphone, et c'est tout",
        text: "Un dégât des eaux à 22h : le client appelle. Sans site visible sur 'plombier urgent Montauban', vous n'êtes pas dans la course. Et sans bouton d'appel mobile bien placé, vous loupez les appels.",
      },
      {
        title: "Les projets longs (salle de bain, chaudière) demandent à voir",
        text: "Pour une rénovation à 8 000€, le client veut voir des réalisations, des avis, des certifications. Pas juste un numéro. Sans page projet visuelle, vous perdez face aux concurrents mieux présentés.",
      },
      {
        title: "Difficile de filtrer les bons clients",
        text: "Beaucoup d'appels pour des prestations que vous ne faites pas (chauffe-eau spécifique, fosses, climatisation). Un site clair sur vos prestations évite ces appels qui font perdre du temps.",
      },
    ],
    solutions: [
      {
        title: "Bandeau urgences + numéro sticky",
        text: "Un bandeau 'Dépannage 7j/7' avec votre numéro visible en permanence. Le bouton d'appel suit l'utilisateur sur mobile.",
      },
      {
        title: "Page rénovation salle de bain visuelle",
        text: "Photos avant/après, étapes de chantier, types de finitions. Pour vendre les projets à fort panier.",
      },
      {
        title: "Page chauffage & énergies",
        text: "Chaudière, pompe à chaleur, ballon thermodynamique : mettre en avant les certifications RGE pour les aides.",
      },
      {
        title: "Formulaire de devis intelligent",
        text: "Type de prestation, urgence ou planifié, photos jointes. Vous arrivez chez le client avec déjà les bonnes infos.",
      },
    ],
    pages: [
      "Accueil avec dépannage + projets",
      "Dépannage urgent (fuite, chaudière)",
      "Rénovation salle de bain",
      "Chauffage & énergies (RGE)",
      "Zones d'intervention",
      "Formulaire devis",
      "Contact 7j/7",
    ],
    features: [
      "Bouton appel sticky mobile",
      "Bandeau urgences",
      "Galerie chantiers salle de bain",
      "Page certifications RGE",
      "Formulaire devis avec upload photo",
      "Carte zones d'intervention",
      "SEO local (plombier + ville)",
    ],
    keywords: [
      "plombier Montauban",
      "plombier chauffagiste 82",
      "dépannage plomberie Montauban",
      "rénovation salle de bain Tarn-et-Garonne",
      "installation chaudière Montauban",
    ],
    faq: [
      {
        q: "Le site peut-il prioriser les demandes urgentes ?",
        a: "Oui. On peut intégrer un bandeau 'Dépannage 7j/7', un bouton d'appel sticky et un formulaire avec champ 'Urgence' qui notifie votre email instantanément. Les demandes urgentes sont visuellement distinctes des demandes de devis planifiées.",
      },
      {
        q: "Peut-on séparer dépannage et projets longs ?",
        a: "Oui, c'est même recommandé. Deux pages distinctes : une pour les urgences (numéro visible, formulaire court), une pour les projets type rénovation salle de bain (photos avant/après, étapes, devis détaillé). Chacune avec son intent search.",
      },
      {
        q: "Mes certifications RGE peuvent être mises en avant ?",
        a: "Oui. Une page dédiée présentation des certifications (RGE, Qualibat, garantie décennale) pour rassurer les clients et permettre l'éligibilité aux aides énergétiques.",
      },
    ],
    related: ["couvreur-montauban", "electricien-montauban"],
  },
  {
    slug: "electricien-montauban",
    trade: "électricien",
    tradePlural: "électriciens",
    pitch:
      "Pour un électricien à Montauban, le site internet doit jouer sur deux tableaux : la confiance (mise aux normes, dépannage rapide) et la modernité (domotique, IRVE, panneaux solaires). Un site clair fait gagner les clients qui hésitent entre vous et le concurrent.",
    problems: [
      {
        title: "Les clients ne voient pas que vous faites de la domotique",
        text: "Beaucoup d'électriciens proposent IRVE (borne véhicule), domotique, photovoltaïque, mais leur site reste centré sur 'tableau électrique'. Résultat : ils ratent les projets modernes à forte marge.",
      },
      {
        title: "Mise aux normes : un sujet qui se vend mal sans pédagogie",
        text: "La mise en conformité d'une installation est une obligation, mais le client ne comprend pas. Une page pédagogique fait basculer le doute en demande de devis.",
      },
      {
        title: "Les demandes urgentes vont au mieux référencé",
        text: "Panne de courant, court-circuit : le client appelle le premier sur Google. Sans présence claire sur les recherches d'urgence, vous êtes invisible au pire moment.",
      },
    ],
    solutions: [
      {
        title: "Page IRVE / borne de recharge",
        text: "Le segment qui explose. Une page dédiée 'installation borne véhicule électrique' positionne sur un marché en croissance, avec aide ADVENIR à clé.",
      },
      {
        title: "Page mise aux normes pédagogique",
        text: "Expliquer simplement les obligations, les risques, la procédure. Avec photos avant/après. Le client se sent informé, pas vendu.",
      },
      {
        title: "Page photovoltaïque & autoconsommation",
        text: "Pour les électriciens RGE QualiPV. Mise en avant des aides MaPrimeRénov' et autoconsommation.",
      },
      {
        title: "Bouton d'appel + dépannage 7j/7",
        text: "Numéro visible permanent, badge 'Dépannage 7j/7' pour les urgences. Mobile first impératif.",
      },
    ],
    pages: [
      "Accueil avec services modernes mis en avant",
      "Mise aux normes (pédagogique)",
      "Domotique & maison connectée",
      "IRVE / borne véhicule",
      "Photovoltaïque & autoconsommation",
      "Dépannage urgent",
      "Zones d'intervention",
      "Formulaire devis",
    ],
    features: [
      "Page IRVE avec aide ADVENIR",
      "Page photovoltaïque avec aides",
      "Calculateur autoconsommation simple",
      "Galerie installations",
      "Page certifications (QualiPV, QualiFelec, IRVE)",
      "Bouton appel sticky",
      "SEO local métier",
    ],
    keywords: [
      "électricien Montauban",
      "installation IRVE Montauban",
      "borne recharge véhicule électrique 82",
      "photovoltaïque Tarn-et-Garonne",
      "mise aux normes électriques Montauban",
    ],
    faq: [
      {
        q: "Le site peut-il mettre en avant l'installation de bornes IRVE ?",
        a: "Oui. Une page dédiée 'installation borne véhicule électrique' avec mention de la certification IRVE, des aides ADVENIR et un formulaire de devis adapté. Le segment est en forte croissance.",
      },
      {
        q: "Mes certifications QualiPV / QualiFelec peuvent être valorisées ?",
        a: "Oui. Les certifications sont des éléments décisifs pour les aides MaPrimeRénov' et la confiance client. Une page dédiée présente vos qualifications avec les avantages pour le client (aides, garanties).",
      },
      {
        q: "Peut-on intégrer un formulaire pour les demandes de devis solaire ?",
        a: "Oui. Un formulaire adapté avec champs surface toit, orientation, consommation actuelle. Vous arrivez chez le client avec déjà l'essentiel pour un premier chiffrage.",
      },
    ],
    related: ["plombier-montauban", "couvreur-montauban"],
  },
  {
    slug: "paysagiste-montauban",
    trade: "paysagiste",
    tradePlural: "paysagistes",
    pitch:
      "Pour un paysagiste à Montauban, le site internet est avant tout un outil visuel. Les clients achètent une vision, un avant-après. Un site bien construit présente vos créations et transforme l'inspiration en demande de devis.",
    problems: [
      {
        title: "Vos créations sont enterrées sur Instagram",
        text: "Les photos de jardins partent dans le feed et disparaissent en 48h. Sans portfolio web structuré, vos plus belles créations ne ramènent plus de clients après une semaine.",
      },
      {
        title: "L'entretien et la création ne sont pas dans la même boîte mentale",
        text: "Le client cherche soit 'entretien jardin Montauban', soit 'paysagiste création jardin'. Ce sont deux intents très différents. Un site qui mélange les deux perd les deux.",
      },
      {
        title: "La saisonnalité tue la régularité",
        text: "Forte demande en mars-juin, creux en automne-hiver. Sans site qui capte toute l'année (tailles, arrosage auto, élagage hiver), vous dépendez d'un seul pic.",
      },
    ],
    solutions: [
      {
        title: "Portfolio visuel structuré",
        text: "Galerie projets par type : terrasse, jardin contemporain, piscine, allée. Photos haute qualité optimisées web pour rester rapides.",
      },
      {
        title: "Pages distinctes entretien / création",
        text: "Une page 'Création de jardin' (panier élevé, projet long), une page 'Entretien & tailles' (récurrent, contrat annuel). Chacune avec son SEO et son formulaire.",
      },
      {
        title: "Page services hors saison",
        text: "Élagage d'hiver, arrosage automatique, dallage et terrasses : couvrir toute l'année pour lisser le chiffre.",
      },
      {
        title: "Formulaire 'décrire mon projet'",
        text: "Surface du terrain, type de projet (création / entretien), photos joignables. Vous arrivez préparé au RDV.",
      },
    ],
    pages: [
      "Accueil visuel avec hero photo",
      "Création de jardin (portfolio)",
      "Entretien & tailles (contrat annuel)",
      "Élagage & abattage",
      "Terrasses & allées",
      "Arrosage automatique",
      "Zones d'intervention",
      "Formulaire 'décrire mon projet'",
    ],
    features: [
      "Portfolio photos optimisé",
      "Carte zones d'intervention",
      "Formulaire avec upload photo",
      "Pages saison (élagage, arrosage)",
      "Boutons d'appel mobile",
      "Galerie avant/après par projet",
      "SEO local métier",
    ],
    keywords: [
      "paysagiste Montauban",
      "création jardin Tarn-et-Garonne",
      "entretien jardin Montauban",
      "élagage 82",
      "terrasse bois Montauban",
    ],
    faq: [
      {
        q: "Le site peut-il avoir un vrai portfolio photo ?",
        a: "Oui. Un portfolio structuré par type de projet (création de jardin, terrasse, piscine, allée) est essentiel pour un paysagiste. Les photos sont optimisées pour rester nettes et rapides sur mobile.",
      },
      {
        q: "Peut-on séparer création et entretien ?",
        a: "Oui, c'est recommandé. Le client qui cherche 'entretien jardin' a un intent différent de celui qui cherche 'création paysagiste'. Deux pages dédiées avec leur SEO et leur formulaire propre permettent de capter les deux.",
      },
      {
        q: "Comment gérer la saisonnalité ?",
        a: "Le site est conçu pour générer des demandes toute l'année. Pages dédiées élagage (automne-hiver), arrosage auto (printemps), création (printemps-été), entretien régulier (toute l'année). Chacune avec son SEO local pour capter les recherches saisonnières.",
      },
    ],
    related: ["couvreur-montauban"],
  },
  {
    slug: "restaurant-montauban",
    trade: "restaurant",
    tradePlural: "restaurants",
    pitch:
      "Pour un restaurant à Montauban, le site internet n'est pas un luxe — c'est un outil de réservation, de carte, de présentation. Avec Google + TripAdvisor + Instagram, le client veut tout vérifier avant de pousser la porte. Un site propre fait la différence.",
    problems: [
      {
        title: "Les clients abandonnent sans voir la carte",
        text: "Si la carte n'est pas accessible en 1 clic, le client va voir ailleurs. Pas de PDF qui se télécharge mal sur mobile : une vraie carte web rapide et à jour.",
      },
      {
        title: "Les réservations passent par le téléphone aux mauvais moments",
        text: "Vous êtes en service, le téléphone sonne. Vous perdez des réservations ou de la qualité de service. Un système de réservation en ligne récupère 30% des demandes à votre place.",
      },
      {
        title: "Vous n'apparaissez nulle part sur Google",
        text: "Google priorise les fiches Google Business + les sites bien structurés. Sans site, vous dépendez à 100% des plateformes (qui prennent leurs commissions).",
      },
    ],
    solutions: [
      {
        title: "Carte web mobile-friendly",
        text: "Pas de PDF lourd. Une vraie carte web, à jour, avec photos. Mise à jour facile par vous-même via interface simple.",
      },
      {
        title: "Bouton 'Réserver une table'",
        text: "Lien direct vers votre solution de réservation (TheFork, Resy, ZenChef) ou formulaire de réservation par email. Visible sur toutes les pages.",
      },
      {
        title: "Galerie ambiance + plats signature",
        text: "Photos pro de la salle, terrasse, plats signature. Le client doit avoir envie avant même de venir.",
      },
      {
        title: "Page menus / événements / privatisation",
        text: "Menu midi, brunch, événements privés, mariages : autant de leviers de chiffre que peu de sites mettent en avant.",
      },
    ],
    pages: [
      "Accueil avec ambiance et CTA réservation",
      "Carte / menus (toujours à jour)",
      "Galerie photos salle et plats",
      "Réservation en ligne",
      "Événements & privatisation",
      "Brunch / menu midi",
      "Horaires & accès",
      "Contact",
    ],
    features: [
      "Carte web mobile-friendly (pas de PDF)",
      "Bouton 'Réserver' sticky",
      "Galerie photos optimisée",
      "Page événements / privatisation",
      "Horaires et accès Google Maps",
      "SEO local restaurant",
      "Intégration TheFork / Resy",
    ],
    keywords: [
      "restaurant Montauban",
      "réserver restaurant Montauban",
      "menu midi Montauban",
      "restaurant Tarn-et-Garonne",
      "brunch Montauban",
    ],
    faq: [
      {
        q: "La carte peut-elle être mise à jour facilement ?",
        a: "Oui. Une vraie carte web (pas un PDF) avec une interface d'édition simple pour vous permettre de modifier les plats, prix et disponibilités sans intervention technique.",
      },
      {
        q: "Peut-on intégrer un système de réservation ?",
        a: "Oui. Selon votre besoin : intégration TheFork, Resy, ZenChef, ou bouton vers un formulaire de réservation par email. L'objectif : récupérer les réservations qui passent en ligne sans saturer le téléphone.",
      },
      {
        q: "Comment mettre en avant les événements privés ?",
        a: "Une page dédiée 'Privatisation & événements' avec photos de la salle, capacités, formules. Beaucoup de restaurants oublient ce levier qui rapporte un panier moyen 3 à 5x plus élevé qu'un service classique.",
      },
    ],
    related: [],
  },
];

export function getTradeBySlug(slug: string): TradeData | undefined {
  return TRADES.find((t) => t.slug === slug);
}
