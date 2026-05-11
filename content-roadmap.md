# Roadmap contenu — Boki Agency

Document de pilotage SEO long terme. À mettre à jour au fil de la création des pages.

---

## 1. Pages livrées en V1 (priorité 1)

| Ordre | URL | Mot-clé principal | Intention |
|---|---|---|---|
| 1 | `/` | création site internet Montauban | Commerciale + marque |
| 2 | `/creation-site-internet-montauban` | création site internet Montauban | Commerciale (money page locale) |
| 3 | `/services/site-vitrine-montauban` | création site vitrine Montauban | Commerciale (service) |
| 4 | `/site-internet-artisan-montauban` | site internet artisan Montauban | Commerciale (cible) |
| 5 | `/services/site-ecommerce-shopify-montauban` | création site Shopify Montauban | Commerciale (service) |
| 6 | `/realisations` | réalisations | Preuve sociale |
| 7 | `/realisations/[slug]` (×7) | nom du projet | Preuve sociale |
| 8 | `/creation-site-internet-tarn-et-garonne` | création site internet Tarn-et-Garonne | Commerciale (département) |
| 9 | `/tarifs-creation-site-internet` | tarif création site internet Montauban | Informationnelle |
| 10 | `/guides` + 10 guides | requêtes longues | Informationnelle |
| 11 | `/agence-web-montauban` | agence web Montauban | Commerciale |
| 12 | `/developpeur-web-montauban` | développeur web Montauban | Commerciale |
| 13 | `/webdesigner-montauban` | webdesigner Montauban | Commerciale |
| 14 | `/services/click-and-collect-montauban` | click and collect Montauban | Commerciale (service) |
| 15 | `/services/refonte-site-internet-montauban` | refonte site internet Montauban | Commerciale (service) |
| 16 | `/creation-site-shopify-montauban` | création site Shopify Montauban | Commerciale |
| 17 | `/creation-site-webflow-montauban` | création site Webflow Montauban | Commerciale |
| 18 | `/secteurs` | — | Hub interne |
| 19 | `/a-propos` | Boki Agency | Marque |
| 20 | `/contact` | contact agence web | Conversion |

---

## 2. Pages locales — priorité 2

Chaque page doit avoir : title unique, meta description unique, H1 unique, contenu local naturel, services associés, FAQ locale, CTA, liens vers /creation-site-internet-montauban et /creation-site-internet-tarn-et-garonne.

| URL | Mot-clé | Cible |
|---|---|---|
| `/creation-site-internet-castelsarrasin` | création site internet Castelsarrasin | Locale |
| `/creation-site-internet-moissac` | création site internet Moissac | Locale |
| `/creation-site-internet-caussade` | création site internet Caussade | Locale |
| `/creation-site-internet-montech` | création site internet Montech | Locale |
| `/creation-site-internet-valence-dagen` | création site internet Valence d'Agen | Locale |
| `/creation-site-internet-beaumont-de-lomagne` | création site internet Beaumont-de-Lomagne | Locale |
| `/creation-site-internet-saint-nicolas-de-la-grave` | création site internet Saint-Nicolas-de-la-Grave | Locale |
| `/creation-site-internet-verdun-sur-garonne` | création site internet Verdun-sur-Garonne | Locale |
| `/creation-site-internet-grisolles` | création site internet Grisolles | Locale |
| `/creation-site-internet-negrepelisse` | création site internet Nègrepelisse | Locale |
| `/creation-site-internet-lauzerte` | création site internet Lauzerte | Locale |
| `/creation-site-internet-toulouse` | création site internet Toulouse | Locale (limitrophe) |
| `/creation-site-internet-agen` | création site internet Agen | Locale (limitrophe) |

> Le template `LocalPage` (`src/components/templates/LocalPage.tsx`) permet de créer une page locale en quelques minutes en passant simplement les bonnes props.

---

## 3. Pages métiers — priorité 3

| URL | Mot-clé | Cible |
|---|---|---|
| `/site-internet-couvreur-montauban` | site internet couvreur Montauban | Métier |
| `/site-internet-plombier-montauban` | site internet plombier Montauban | Métier |
| `/site-internet-electricien-montauban` | site internet électricien Montauban | Métier |
| `/site-internet-peintre-montauban` | site internet peintre Montauban | Métier |
| `/site-internet-menuisier-montauban` | site internet menuisier Montauban | Métier |
| `/site-internet-paysagiste-montauban` | site internet paysagiste Montauban | Métier |
| `/site-internet-restaurant-montauban` | site internet restaurant Montauban | Métier |
| `/site-internet-coach-sportif-montauban` | site coach sportif Montauban | Métier |
| `/site-internet-institut-beaute-montauban` | site institut de beauté Montauban | Métier |
| `/site-internet-conciergerie-montauban` | site conciergerie Montauban | Métier |
| `/site-internet-commerce-montauban` | site commerce Montauban | Métier |

Chaque page métier devra inclure :
- contexte spécifique au métier
- exemples de réalisations associées
- FAQ métier
- CTA contact
- maillage interne vers `/site-internet-artisan-montauban` et services

---

## 4. Maillage interne — règles

### Depuis la homepage
- /creation-site-internet-montauban
- /services/site-vitrine-montauban
- /site-internet-artisan-montauban
- /creation-site-shopify-montauban
- /services/click-and-collect-montauban
- /realisations
- /a-propos
- /contact
- /guides

### Depuis les guides
→ vers les money pages (`/services/...`, `/creation-site-internet-montauban`, `/site-internet-artisan-montauban`...)
→ vers les réalisations
→ vers /contact

### Depuis les réalisations
→ service correspondant (`relatedService`)
→ /contact
→ autres réalisations proches

### Depuis les services
→ réalisations associées
→ FAQ
→ /contact
→ pages locales

### Depuis les pages villes
→ /creation-site-internet-tarn-et-garonne
→ services principaux
→ /contact

### Ancres internes naturelles à utiliser
- création site internet à Montauban
- création site vitrine à Montauban
- site internet pour artisan
- site e-commerce Shopify
- site click & collect
- voir les réalisations
- demander un devis
- créer un projet similaire
- améliorer sa présence en ligne

---

## 5. Recommandations futures

- Ajouter un blog dynamique (MDX) après les pages locales et métiers prioritaires.
- Ajouter des cas client détaillés (chiffres réels uniquement, jamais inventés).
- Mettre en place une stratégie d'avis Google Business réels à publier sur la page d'accueil.
- Ajouter une page `/avis-clients` une fois les premiers retours réels obtenus.
- Ajouter une version anglaise sur `/en/...` si demande internationale (cf. ADJADJ, Westerfield London).
- Maintenir le sitemap à jour (auto via `src/app/sitemap.ts`).
- Surveiller régulièrement Search Console (CTR, impressions, requêtes émergentes).

---

## 6. Règles de contenu (rappel)

- Pas de prix fixe affiché.
- Toujours utiliser la formule :
  > Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées.
- Pas de fausse note moyenne, pas d'avis inventés.
- Pas d'adresse physique inventée — utiliser `areaServed` plutôt qu'`address`.
- Pas de promesse "top 1 Google".
- Garder un ton agence : professionnel, clair, rassurant.
