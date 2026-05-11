import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { GUIDES } from "@/lib/data/guides";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) return {};
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: { canonical: `/guides/${g.slug}` },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/guides", label: "Guides" },
          { href: `/guides/${g.slug}`, label: g.title },
        ]}
      />
      <article className="relative isolate overflow-hidden pb-12 pt-10 sm:pt-12">
        <div className="halo -top-20 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-indigo-500/20" />
        <div className="grid-faint absolute inset-0 opacity-50" />
        <div className="container-tight relative z-10 max-w-3xl">
          <Reveal>
            <span className="chip border-indigo-600/15 bg-indigo-50 text-indigo-700">
              {g.category}
            </span>
            <h1 className="heading-display mt-5 text-4xl text-slate-950 sm:text-5xl">
              {g.title}
            </h1>
            <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              {g.excerpt}
            </p>
          </Reveal>
        </div>
      </article>

      <Section>
        <div className="prose prose-slate mx-auto max-w-3xl text-[16px] leading-relaxed text-slate-700">
          <p>
            Ce guide aborde la question : <strong>{g.title}</strong>. Il fait
            partie de la rubrique {g.category} et s'adresse aux professionnels
            qui souhaitent créer ou faire évoluer un site internet à Montauban ou
            dans le Tarn-et-Garonne.
          </p>
          <h2 className="font-display text-2xl font-semibold text-slate-950">
            Les éléments clés à comprendre
          </h2>
          <p>
            La création d'un site internet ne se résume pas à une question de
            design. C'est un projet où la structure, le contenu, les
            performances et la stratégie de visibilité comptent autant que le
            visuel. Pour cela, il est utile de comprendre comment chaque
            décision (type de site, plateforme, nombre de pages, contenu, SEO)
            influence le résultat final.
          </p>
          <h2 className="font-display text-2xl font-semibold text-slate-950">
            Comment Boki Agency aborde cette question
          </h2>
          <p>
            Notre approche est simple : commencer par comprendre l'activité, les
            cibles et les objectifs, puis définir la structure du site, puis
            seulement passer au design et au développement. Cela évite les
            sites jolis mais inutiles, et les sites utiles mais désagréables à
            utiliser.
          </p>
          <p>
            Pour aller plus loin, vous pouvez consulter nos pages dédiées :
          </p>
          <ul>
            {g.related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-indigo-700 hover:underline">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>
            Chaque projet étant différent, le mieux reste d'en discuter
            ensemble. Le tarif dépend du type de site, du nombre de pages, du
            contenu à intégrer et des fonctionnalités souhaitées. Une estimation
            peut être proposée après analyse du projet.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-display text-2xl text-slate-950 sm:text-3xl">
            À voir aussi
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {g.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="card card-hover flex items-center justify-between p-5"
              >
                <span className="text-[15px] font-medium text-slate-900">
                  {r.label}
                </span>
                <ArrowRight className="h-4 w-4 text-indigo-700" />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTA
        title="Un projet en tête ?"
        description="On en discute simplement, sans engagement."
      />

      <ArticleJsonLd
        url={`${SITE.url}/guides/${g.slug}`}
        title={g.title}
        description={g.metaDescription}
      />
      <WebPageJsonLd
        url={`${SITE.url}/guides/${g.slug}`}
        name={g.title}
        description={g.metaDescription}
      />
    </>
  );
}
