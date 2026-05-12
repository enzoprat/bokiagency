"use client";

import Link from "next/link";
import { ArrowUpRight, Check, MapPin, AlertCircle, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { WebPageJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { motion, useReducedMotion } from "framer-motion";
import type { TradeData } from "@/lib/data/trades";
import { TRADES } from "@/lib/data/trades";
import { SITE } from "@/lib/site";

const COMMON_FAQ = [
  {
    q: "Combien coûte un site pour un artisan ?",
    a: "Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation peut être proposée après analyse du projet. Aucun frais caché.",
  },
  {
    q: "Faut-il fournir des photos de chantier ?",
    a: "Idéalement oui — les photos sont un élément clé de la confiance. Si vous n'en avez pas, on peut adapter le site avec des illustrations propres et programmer une mise à jour photo dès vos premières réalisations documentées.",
  },
];

export function TradePage({ trade }: { trade: TradeData }) {
  const reduced = useReducedMotion();
  const url = `/site-internet-${trade.slug}`;
  const fullUrl = `${SITE.url}${url}`;
  const tradeCapitalized =
    trade.trade.charAt(0).toUpperCase() + trade.trade.slice(1);

  const metaTitle = `Site internet ${trade.trade} Montauban (82) | Boki Agency`;
  const metaDescription = `Création de site internet pour ${trade.trade} à Montauban et dans le Tarn-et-Garonne. Galerie chantiers, formulaire de devis, SEO local et boutons d'appel mobile. Pensé pour les ${trade.tradePlural} du 82.`;

  const allFaq = [...trade.faq, ...COMMON_FAQ];

  // Sister trades pour cross-linking
  const sisterTrades = TRADES.filter((t) => trade.related.includes(t.slug));

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/site-internet-artisan-montauban", label: "Sites artisan" },
          { href: url, label: `Site ${trade.trade}` },
        ]}
      />

      {/* HERO */}
      <section className="grain relative isolate overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20">
        <div className="halo -top-20 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-slate-950/10" />
        <div className="halo top-32 -right-20 h-80 w-80 rounded-full bg-slate-950/[0.06]" />
        <div className="grid-faint absolute inset-0 opacity-60" />

        <div className="container-tight relative z-10">
          <Reveal className="max-w-4xl">
            <span className="chip">
              <span className="live-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-slate-950 text-slate-950" />
              {tradeCapitalized} · Montauban · Tarn-et-Garonne · 82
            </span>

            <h1 className="display-mega heading-display mt-6 text-[clamp(2.4rem,6vw,5rem)] text-slate-950">
              Site internet{" "}
              <span className="italic">pour</span>{" "}
              <span className="gradient-text">{trade.trade}</span>
              <br />à Montauban.
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              {trade.pitch}
            </p>

            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary">
                Demander un devis <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tarifs-creation-site-internet"
                className="btn-secondary"
              >
                Comprendre les tarifs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLÈMES — section éditoriale rouge subtil */}
      <Section variant="surface">
        <SectionHeader
          eyebrow="Ce qui coince souvent"
          title={
            <>
              Les 3 problèmes que rencontrent les{" "}
              <span className="gradient-text italic">{trade.tradePlural}</span>{" "}
              sans bon site
            </>
          }
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {trade.problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-3xl border border-slate-950/10 bg-white p-6 sm:p-7"
            >
              <span className="font-display text-xs font-semibold tracking-[0.2em] text-slate-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 grid h-10 w-10 place-items-center rounded-xl bg-slate-950/[0.06] text-slate-700">
                <AlertCircle className="h-4.5 w-4.5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-950 sm:text-xl">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SOLUTIONS — section sombre */}
      <Section variant="dark" className="grain">
        <div className="halo -top-32 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-white/10" />
        <div className="grid-faint-dark absolute inset-0 opacity-40" />

        <div className="relative z-10">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="chip-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Ce qu'on met en place
              </span>
              <h2 className="heading-display mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">
                Le site qu'un{" "}
                <span className="gradient-text-on-dark italic">{trade.trade}</span>{" "}
                devrait avoir
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-white/70 lg:col-span-5 sm:text-base">
              Pas un site générique. Un site pensé pour vos prospects, vos
              urgences, vos prestations à fort panier et votre zone
              d'intervention.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {trade.solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-slate-950">
                  <Sparkles className="h-4.5 w-4.5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* PAGES + FONCTIONNALITÉS */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Structure du site"
              title={
                <>
                  Les pages prévues pour{" "}
                  <span className="gradient-text">un {trade.trade}</span>
                </>
              }
            />
            <ul className="mt-10 space-y-3">
              {trade.pages.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-4 rounded-2xl border border-slate-950/[0.06] bg-white p-4"
                >
                  <span className="font-display text-sm font-semibold text-slate-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] text-slate-800">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Fonctionnalités incluses"
              title={
                <>
                  Ce qui fait{" "}
                  <span className="gradient-text">la différence</span> au
                  quotidien
                </>
              }
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {trade.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-2xl border border-slate-950/[0.06] bg-white p-4"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-950 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-slate-800">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ZONES */}
      <Section variant="surface">
        <SectionHeader
          eyebrow="Zone d'intervention couverte"
          title={
            <>
              Pour les {trade.tradePlural} du{" "}
              <span className="gradient-text italic">Tarn-et-Garonne</span>
            </>
          }
          description="Le site est conçu pour ranquer sur Montauban et toutes les communes du 82 où vous intervenez."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {SITE.areaServed
            .filter((z) => z !== "Tarn-et-Garonne" && z !== "82")
            .slice(0, 14)
            .map((z) => (
              <span
                key={z}
                className="chip border-slate-950/10 bg-white text-slate-800"
              >
                <MapPin className="h-3 w-3" />
                {z}
              </span>
            ))}
        </div>
      </Section>

      {/* MAILLAGE INTERNE — métiers connexes + pages utiles */}
      <Section>
        <SectionHeader
          eyebrow="À voir aussi"
          title={
            <>
              Autres pages{" "}
              <span className="gradient-text">en lien</span>
            </>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sisterTrades.map((t) => (
            <Link
              key={t.slug}
              href={`/site-internet-${t.slug}`}
              className="card card-hover group p-5"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                Métier
              </span>
              <div className="mt-2 font-display text-lg font-semibold text-slate-950">
                Site internet{" "}
                {t.trade.charAt(0).toUpperCase() + t.trade.slice(1)}
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-950 group-hover:gap-2">
                Voir la page <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}

          {[
            {
              href: "/site-internet-artisan-montauban",
              label: "Site internet pour artisan",
              type: "Cible",
            },
            {
              href: "/creation-site-internet-montauban",
              label: "Création site internet Montauban",
              type: "Géographique",
            },
            {
              href: "/tarifs-creation-site-internet",
              label: "Comprendre les tarifs",
              type: "Tarifs",
            },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="card card-hover group p-5"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                {l.type}
              </span>
              <div className="mt-2 font-display text-lg font-semibold text-slate-950">
                {l.label}
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-950 group-hover:gap-2">
                Voir la page <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <FAQSection items={allFaq} />

      <CTA
        title={`Un site pour votre activité de ${trade.trade} ?`}
        description="Quelques mots sur votre activité, vos zones, vos prestations : on revient vers vous avec un premier retour clair."
      />

      <WebPageJsonLd url={fullUrl} name={metaTitle} description={metaDescription} />
      <ServiceJsonLd
        url={fullUrl}
        name={`Création de site internet pour ${trade.trade} à Montauban`}
        description={metaDescription}
        serviceType="Création de site internet"
        audience={`${tradeCapitalized}s du Tarn-et-Garonne`}
      />
    </>
  );
}
