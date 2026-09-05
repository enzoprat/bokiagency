"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  MapPin,
  Building2,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { WebPageJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import type { FAQItem } from "@/components/ui/FAQ";
import type { CityData } from "@/lib/data/cities";
import { CITIES } from "@/lib/data/cities";

const INCLUDED = [
  "Présentation de l'activité",
  "Pages services & prestations",
  "Photos de réalisations",
  "Zones d'intervention",
  "Formulaire de contact",
  "Boutons d'appel mobile",
  "Mobile first & rapide",
  "SEO local préparé",
  "Mise en ligne accompagnée",
];

const SERVICES = [
  {
    href: "/services/site-vitrine-montauban",
    label: "Site vitrine",
    desc: "Pour présenter clairement votre activité.",
  },
  {
    href: "/services/site-ecommerce-shopify-montauban",
    label: "E-commerce Shopify",
    desc: "Pour vendre en ligne et structurer votre catalogue.",
  },
  {
    href: "/services/click-and-collect-montauban",
    label: "Click & collect",
    desc: "Commande en ligne, retrait sur place.",
  },
];

const COMMON_FAQ: FAQItem[] = [
  {
    q: "Le tarif est-il différent selon la ville ?",
    a: "Non. Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées — pas de votre localisation. Une estimation peut être proposée après analyse du projet.",
  },
  {
    q: "Faut-il se déplacer ou tout se fait à distance ?",
    a: "Au choix. Beaucoup de projets se gèrent par email, téléphone et visio, ce qui fait gagner du temps. Si vous préférez un rendez-vous physique sur Montauban ou alentours, c'est possible.",
  },
  {
    q: "Combien de temps prend la création d'un site ?",
    a: "Cela dépend du type de projet et du contenu disponible. Un site vitrine simple peut être livré en quelques semaines une fois la matière reçue. Une estimation précise est donnée au démarrage.",
  },
];

export function CityPage({ city }: { city: CityData }) {
  const reduced = useReducedMotion();

  const url = `/creation-site-internet-${city.slug}`;
  const fullUrl = `https://www.bokiagency.fr${url}`;
  const metaTitle = `Création site internet ${city.name} (${city.postalCode}) | Boki Agency`;
  const metaDescription = `Création de sites internet professionnels à ${city.name} et alentours (${city.postalCode}, Tarn-et-Garonne). Sites vitrines, e-commerce et SEO local pour les pros du 82.`;

  const faqItems: FAQItem[] = [city.localFaq, ...COMMON_FAQ];

  // Cross-linking : priorité aux voisines réelles, puis on complète avec
  // les autres pages villes pour garantir un cluster interne connecté
  // (chaque page ville lie 4 autres pages villes → meilleure indexation).
  const others = CITIES.filter((c) => c.slug !== city.slug);
  const neighborCities = others.filter(
    (c) => city.neighbors.includes(c.name) || c.neighbors.includes(city.name)
  );
  const sisterCities = [
    ...neighborCities,
    ...others.filter((c) => !neighborCities.includes(c)),
  ].slice(0, 4);

  // Toutes les zones de cette ville (city + neighbors + département)
  const areaServed = [
    city.name,
    ...city.neighbors,
    "Tarn-et-Garonne",
    "82",
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/services", label: "Services" },
          { href: url, label: `Site internet ${city.name}` },
        ]}
      />

      {/* HERO — typo oversized + tags localisés */}
      <section className="grain relative isolate overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20">
        <div className="halo -top-20 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-slate-950/10" />
        <div className="halo top-32 -right-20 h-80 w-80 rounded-full bg-slate-950/[0.06]" />
        <div className="grid-faint absolute inset-0 opacity-60" />

        <div className="container-tight relative z-10">
          <Reveal className="max-w-4xl">
            <span className="chip">
              <span className="live-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-slate-950 text-slate-950" />
              {city.name} · {city.postalCode} · Tarn-et-Garonne
            </span>

            <h1 className="display-mega heading-display mt-6 text-[clamp(2.4rem,6vw,5rem)] text-slate-950">
              Création de{" "}
              <span className="italic">sites internet</span>
              <br />à{" "}
              <span className="gradient-text">{city.name}.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              {city.pitch}
            </p>

            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary">
                Discuter de mon projet <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tarifs-creation-site-internet"
                className="btn-secondary"
              >
                Comprendre les tarifs
              </Link>
            </div>
          </Reveal>

          {/* Méta-info localisée — chiffres factuels */}
          <Reveal delay={0.1} className="mt-14">
            <dl className="grid gap-px overflow-hidden rounded-3xl border border-slate-950/10 bg-slate-950/10 sm:grid-cols-3">
              <div className="bg-white p-6">
                <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                  <MapPin className="h-3 w-3" /> Position
                </dt>
                <dd className="mt-2 font-display text-lg font-semibold text-slate-950 sm:text-xl">
                  {city.distanceFromMontauban}
                </dd>
              </div>
              <div className="bg-white p-6">
                <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                  <Users className="h-3 w-3" /> Population
                </dt>
                <dd className="mt-2 font-display text-lg font-semibold text-slate-950 sm:text-xl">
                  {city.population}
                </dd>
              </div>
              <div className="bg-white p-6">
                <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                  <Building2 className="h-3 w-3" /> Code postal
                </dt>
                <dd className="mt-2 font-display text-lg font-semibold text-slate-950 sm:text-xl">
                  {city.postalCode}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* RÉPONSE DIRECTE — cible l'extrait optimisé (featured snippet) */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-display text-2xl text-slate-950 sm:text-3xl">
            Création de site internet à {city.name} : l'essentiel
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
            La création d'un site internet à {city.name} ({city.postalCode})
            permet aux professionnels locaux —{" "}
            {city.targetSectors.slice(0, 2).join(", ").toLowerCase()} — d'être
            visibles sur Google et de transformer les recherches en demandes
            concrètes. Boki Agency conçoit des sites vitrines et e-commerce
            sur-mesure, mobiles et rapides, optimisés pour le référencement
            local à {city.name} et dans le Tarn-et-Garonne.
          </p>
        </div>
      </Section>

      {/* CONTEXTE ÉCONOMIQUE — vrai contenu localisé */}
      <Section variant="surface">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                Pourquoi un site à {city.name}
              </span>
              <h2 className="heading-display mt-5 text-3xl text-slate-950 sm:text-4xl lg:text-5xl">
                Le bon site, au bon endroit, pour la{" "}
                <span className="gradient-text italic">bonne clientèle.</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              {city.economicContext}
            </p>

            <div className="mt-10">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Secteurs prioritaires sur {city.name}
              </h3>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {city.targetSectors.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-2xl border border-slate-950/[0.06] bg-white p-4"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-950 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-slate-900 sm:text-base">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* INCLUS */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Inclus"
              title={
                <>
                  Tout ce qui fait{" "}
                  <span className="gradient-text">un site qui sert</span>
                </>
              }
              description={`Une base solide pour les pros de ${city.name} : présentation, contact, mobile, SEO. Pas de gadget — juste l'essentiel qui transforme.`}
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-2xl border border-slate-950/[0.06] bg-white p-4"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-950 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] text-slate-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="lg:col-span-5">
            <div className="card sticky top-28 p-7">
              <h3 className="font-display text-lg font-semibold text-slate-950">
                Estimer mon projet
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Le tarif dépend du type de site, du nombre de pages, du contenu
                à intégrer et des fonctionnalités souhaitées. Une estimation
                peut être proposée après analyse du projet.
              </p>
              <Link
                href="/contact"
                className="btn-primary mt-6 w-full justify-center"
              >
                Demander une estimation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tarifs-creation-site-internet"
                className="btn-secondary mt-3 w-full justify-center"
              >
                Voir la grille
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SERVICES */}
      <Section variant="surface">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Quel type de site pour{" "}
              <span className="gradient-text">votre activité à {city.name}</span> ?
            </>
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="card card-hover group relative flex flex-col p-7"
            >
              <h3 className="font-display text-xl font-semibold text-slate-950">
                {s.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-slate-950 group-hover:gap-2">
                Voir le détail <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ZONES + VOISINES */}
      <Section>
        <SectionHeader
          eyebrow="Autour de chez vous"
          title={
            <>
              Communes voisines de{" "}
              <span className="gradient-text">{city.name}</span>
            </>
          }
          description="L'accompagnement s'étend naturellement aux communes proches. Même approche, même réactivité."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {city.neighbors.map((n) => (
            <span
              key={n}
              className="chip border-slate-950/10 bg-white text-slate-800"
            >
              <MapPin className="h-3 w-3" />
              {n}
            </span>
          ))}
        </div>

        {sisterCities.length > 0 && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Autres villes du 82 où nous intervenons
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sisterCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/creation-site-internet-${c.slug}`}
                  className="card card-hover group p-5"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {c.postalCode}
                  </span>
                  <div className="mt-2 font-display text-lg font-semibold text-slate-950">
                    {c.name}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-950 group-hover:gap-2">
                    Voir la page <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </Section>

      {/* MAILLAGE INTERNE STRATÉGIQUE */}
      <Section variant="surface">
        <SectionHeader
          eyebrow="À voir aussi"
          title={
            <>
              Pages utiles{" "}
              <span className="gradient-text">en lien</span>
            </>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/creation-site-internet-montauban", label: "Création site internet Montauban" },
            { href: "/creation-site-internet-tarn-et-garonne", label: "Création site internet Tarn-et-Garonne" },
            { href: "/site-internet-artisan-montauban", label: "Site internet pour artisan" },
            { href: "/realisations", label: "Nos réalisations" },
            { href: "/tarifs-creation-site-internet", label: "Comprendre les tarifs" },
            { href: "/secteurs", label: "Secteurs accompagnés" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="card card-hover flex items-center justify-between p-5"
            >
              <span className="text-[15px] font-medium text-slate-900">
                {l.label}
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-950" />
            </Link>
          ))}
        </div>
      </Section>

      <FAQSection items={faqItems} />

      <CTA
        title={`Un projet à ${city.name} ?`}
        description="Présentez-nous votre activité et vos objectifs : on revient vers vous avec un premier retour clair, sous quelques jours ouvrés."
      />

      <WebPageJsonLd url={fullUrl} name={metaTitle} description={metaDescription} />
      <ServiceJsonLd
        url={fullUrl}
        name={`Création de site internet à ${city.name}`}
        description={metaDescription}
        serviceType="Création de site internet"
        areaServed={areaServed}
      />
    </>
  );
}

