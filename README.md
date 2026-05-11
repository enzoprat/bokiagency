# Boki Agency — Site Next.js

Site premium de l'agence **Boki Agency** : création de sites internet à Montauban et dans le Tarn-et-Garonne.
Construit avec Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion et Lucide.

---

## 1. Lancer le projet en local

```bash
# 1. Installer les dépendances
npm install

# 2. Copier les variables d'env
cp .env.local.example .env.local

# 3. Lancer le serveur de dev
npm run dev
```

Site disponible sur http://localhost:3000

### Variables d'environnement (`.env.local`)
```
NEXT_PUBLIC_SITE_URL=https://www.bokiagency.fr
NEXT_PUBLIC_WEB3FORMS_KEY=YOUR_WEB3FORMS_ACCESS_KEY
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_CLARITY_ID=
NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION=
```

---

## 2. Structure du projet

```
src/
  app/                       # App Router (toutes les pages)
    layout.tsx               # Layout racine + metadata + JSON-LD
    page.tsx                 # Homepage
    sitemap.ts               # sitemap.xml
    robots.ts                # robots.txt
    not-found.tsx            # Page 404
    opengraph-image.tsx      # OG image dynamique
    icon.tsx                 # Favicon dynamique
    services/                # /services + 4 services
    realisations/            # /realisations + [slug]
    guides/                  # /guides + [slug]
    creation-site-internet-montauban/
    creation-site-internet-tarn-et-garonne/
    site-internet-artisan-montauban/
    creation-site-shopify-montauban/
    creation-site-webflow-montauban/
    agence-web-montauban/
    developpeur-web-montauban/
    webdesigner-montauban/
    secteurs/
    a-propos/
    tarifs-creation-site-internet/
    contact/
    merci/                   # noindex
    mentions-legales/
    politique-confidentialite/
    conditions-de-prestation/

  components/
    layout/         # Header, Footer
    brand/          # Logo
    ui/             # Section, FAQ, Reveal, Breadcrumbs, ScrollProgress, CTA, PageHero, RealisationCard
    sections/       # Hero + sections homepage
    templates/      # ServiceDetail, LocalPage
    forms/          # ContactForm (Web3Forms)
    seo/            # JsonLd, Analytics

  lib/
    site.ts         # Constantes du site
    cn.ts           # cn() helper
    data/           # services, realisations, faq, guides
```

---

## 3. Pages créées (V1)

### Pages principales
- `/` — Homepage (18 sections)
- `/services` + 4 sous-pages services
- `/realisations` + 7 pages réalisation détaillées
- `/guides` + 10 guides

### Pages SEO locales (money pages)
- `/creation-site-internet-montauban`
- `/creation-site-internet-tarn-et-garonne`
- `/site-internet-artisan-montauban`
- `/creation-site-shopify-montauban`
- `/creation-site-webflow-montauban`
- `/agence-web-montauban`
- `/developpeur-web-montauban`
- `/webdesigner-montauban`

### Pages institutionnelles
- `/a-propos`
- `/secteurs`
- `/tarifs-creation-site-internet`
- `/contact`
- `/merci` (noindex)
- `/mentions-legales`
- `/politique-confidentialite`
- `/conditions-de-prestation`

---

## 4. Déploiement Vercel

```bash
# 1. Pusher le projet sur GitHub
git init
git add .
git commit -m "feat: initial Boki Agency website"
git branch -M main
git remote add origin git@github.com:<votre-compte>/boki-agency.git
git push -u origin main

# 2. Vercel
# - Importer le repo sur https://vercel.com/new
# - Framework détecté : Next.js
# - Ajouter les variables d'environnement (cf. .env.local.example)
# - Deploy
```

### Relier le domaine OVH
1. Sur Vercel : Project → Settings → Domains → Add → `www.bokiagency.fr` (et `bokiagency.fr`).
2. Sur OVH : zone DNS du domaine.
   - Type **A** : `@` → `76.76.21.21` (IP Vercel)
   - Type **CNAME** : `www` → `cname.vercel-dns.com.`
3. Attendre la propagation (jusqu'à 24h, souvent < 1h).
4. Vercel délivre automatiquement le certificat HTTPS.

### Mettre à jour `NEXT_PUBLIC_SITE_URL`
Une fois le domaine connecté, mettre la variable d'env Vercel sur l'URL finale (`https://www.bokiagency.fr`).

---

## 5. Google Search Console

1. Ajouter la propriété `https://www.bokiagency.fr` (préfixe d'URL).
2. Méthode "balise HTML" :
   - Coller le code dans `NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION` (variable d'env Vercel).
   - Re-déployer. La balise est automatiquement injectée via `metadata.verification`.
3. Soumettre le sitemap : `https://www.bokiagency.fr/sitemap.xml`.

---

## 6. Google Analytics 4

1. Créer une propriété GA4.
2. Récupérer le Mesure ID (`G-XXXXXXX`).
3. Variable d'env Vercel : `NEXT_PUBLIC_GA4_ID=G-XXXXXXX`.
4. Re-déployer. Le tag est automatiquement injecté côté client via `<Analytics />`.

### Events disponibles (helper `trackEvent`)
- `submit_contact_form`
- `click_cta_hero`
- `click_cta_contact`
- `click_email`
- `click_phone`
- `click_realisation_external`
- `click_service_card`
- `click_footer_link`

---

## 7. Microsoft Clarity

1. Créer un projet sur https://clarity.microsoft.com.
2. Récupérer l'ID.
3. Variable d'env Vercel : `NEXT_PUBLIC_CLARITY_ID=xxxxxx`.
4. Re-déployer.

---

## 8. Web3Forms

1. Créer une access key sur https://web3forms.com.
2. Variable d'env : `NEXT_PUBLIC_WEB3FORMS_KEY=...`.
3. Vérifier l'email de réception : `contact@bokiagency.fr`.

---

## 9. Google Business Profile

Préparer une fiche cohérente avec le site :
- **Nom** : Boki Agency
- **Catégorie principale** : Concepteur de site web / Webdesigner / Consultant marketing
- **Zone desservie** : Montauban, Tarn-et-Garonne (et villes principales).
- **Lien site** : `https://www.bokiagency.fr` ou `https://www.bokiagency.fr/creation-site-internet-montauban` selon stratégie.
- **Pas d'adresse physique inventée** — utiliser uniquement la zone desservie.

---

## 10. Checklist avant mise en ligne

- [ ] `NEXT_PUBLIC_SITE_URL` mis à jour
- [ ] `NEXT_PUBLIC_WEB3FORMS_KEY` configuré
- [ ] Email de réception du formulaire vérifié
- [ ] Mentions légales complétées (identité juridique, adresse, SIRET, hébergeur)
- [ ] Politique de confidentialité revue
- [ ] Conditions de prestation revues
- [ ] Logo final intégré (`src/components/brand/Logo.tsx` ou image dans `/public`)
- [ ] OG image vérifiée (`/opengraph-image`)
- [ ] Favicon vérifié (`/icon` + `public/favicon.svg`)
- [ ] Domaine OVH relié à Vercel
- [ ] Certificat HTTPS actif
- [ ] Sitemap soumis dans Search Console
- [ ] GA4 connecté
- [ ] Clarity connecté
- [ ] Fiche Google Business Profile créée
- [ ] Liens externes vérifiés (réalisations en `target=_blank rel=noopener noreferrer`)
- [ ] Test mobile sur iPhone et Android
- [ ] Test Lighthouse mobile (LCP, INP, CLS)
- [ ] Test formulaire en conditions réelles

---

## 11. Éléments à remplacer (placeholders)

| Élément | Où ? |
|---|---|
| Logo final | `src/components/brand/Logo.tsx` ou image `/public` |
| Email | `src/lib/site.ts` (`SITE.email`) |
| Téléphone | `src/lib/site.ts` (`SITE.phone`) |
| Domaine final | `NEXT_PUBLIC_SITE_URL` |
| Web3Forms key | `NEXT_PUBLIC_WEB3FORMS_KEY` |
| Mentions légales | `src/app/mentions-legales/page.tsx` |
| Conditions de prestation | `src/app/conditions-de-prestation/page.tsx` |
| OG image | `src/app/opengraph-image.tsx` (généré dynamiquement) |
| Favicon | `src/app/icon.tsx` + `public/favicon.svg` |
| Liens sociaux | `src/lib/site.ts` (`SITE.social`) |

---

## 12. Roadmap contenu

Voir [`content-roadmap.md`](./content-roadmap.md) pour les pages futures à créer (villes, métiers).
