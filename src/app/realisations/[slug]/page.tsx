import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { REALISATIONS } from "@/lib/data/realisations";
import { Reveal } from "@/components/ui/Reveal";
import {
  CreativeWorkJsonLd,
  WebPageJsonLd,
} from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return REALISATIONS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = REALISATIONS.find((x) => x.slug === slug);
  if (!r) return {};
  const title = `${r.name} — ${r.category} | Boki Agency`;
  const description = r.shortDescription;
  return {
    title,
    description,
    alternates: { canonical: r.href },
    openGraph: {
      title,
      description,
      url: `${SITE.url}${r.href}`,
      type: "article",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const r = REALISATIONS.find((x) => x.slug === slug);
  if (!r) notFound();
  const others = REALISATIONS.filter((x) => x.slug !== r.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/realisations", label: "Réalisations" },
          { href: r.href, label: r.name },
        ]}
      />
      <section className="relative isolate overflow-hidden pb-16 pt-10 sm:pt-12">
        <div className="halo -top-20 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-indigo-500/25" />
        <div className="grid-faint absolute inset-0 opacity-60" />
        <div className="container-tight relative z-10">
          <Reveal>
            <span className="chip border-indigo-600/15 bg-indigo-50 text-indigo-700">
              {r.category}
            </span>
            <h1 className="heading-display mt-5 text-4xl text-slate-950 sm:text-5xl lg:text-6xl">
              {r.name}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              {r.longDescription}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Voir le site <ExternalLink className="h-4 w-4" />
              </a>
              <Link href="/contact" className="btn-secondary">
                Créer un projet similaire <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="ring-gradient relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-glow">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${r.palette.from}, ${r.palette.to})`,
                }}
              />
              <Image
                src={r.image}
                alt={`Aperçu du site ${r.name} réalisé par Boki Agency`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <SectionHeader
              eyebrow="Contexte"
              title={
                <>
                  Le projet et <span className="gradient-text">son objectif</span>
                </>
              }
            />
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-700">
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-950">
                  Problématique
                </h3>
                <p className="mt-2">{r.problem}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-950">
                  Solution
                </h3>
                <p className="mt-2">{r.solution}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-950">
                  Direction artistique
                </h3>
                <p className="mt-2">{r.art}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-4">
            <div className="card sticky top-24 p-7">
              <h3 className="font-display text-lg font-semibold text-slate-950">
                Structure créée
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {r.structure.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-indigo-600" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-7 font-display text-lg font-semibold text-slate-950">
                Fonctionnalités
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {r.features.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-indigo-600" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={r.relatedService.href}
                className="btn-secondary mt-6 w-full justify-center"
              >
                {r.relatedService.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeader
          eyebrow="Autres réalisations"
          title={
            <>
              D'autres projets <span className="gradient-text">à découvrir</span>
            </>
          }
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={o.href}
              className="card card-hover group block p-5"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${o.palette.from}, ${o.palette.to})`,
                }}
              >
                <Image
                  src={o.image}
                  alt={`Aperçu du site ${o.name} réalisé par Boki Agency`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-slate-950">
                {o.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{o.category}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-indigo-700 group-hover:underline">
                Voir le projet <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTA
        title={`Envie d'un projet comme ${r.name} ?`}
        description="Présentez-nous votre activité, vos objectifs et vos contraintes : on construit ensemble la bonne approche."
      />

      <WebPageJsonLd
        url={`${SITE.url}${r.href}`}
        name={`${r.name} — ${r.category}`}
        description={r.shortDescription}
      />
      <CreativeWorkJsonLd
        url={`${SITE.url}${r.href}`}
        name={r.name}
        description={r.shortDescription}
        externalUrl={r.url}
      />
    </>
  );
}
