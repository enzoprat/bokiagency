import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { GUIDES } from "@/lib/data/guides";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides création de site internet — Boki Agency Montauban",
  description:
    "Guides utiles sur la création de sites internet à Montauban : tarifs, choix d'outils, méthode, SEO local, e-commerce et click & collect.",
  alternates: { canonical: "/guides" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/guides", label: "Guides" }]} />
      <PageHero
        eyebrow="Guides"
        title={
          <>
            Des guides clairs pour <span className="gradient-text">avancer sereinement</span>
          </>
        }
        description="Tarifs, méthode, outils, SEO local : ce qu'il faut savoir avant et pendant la création d'un site."
      />
      <Section>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g) => (
            <StaggerItem key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="card card-hover group flex h-full flex-col p-6"
              >
                <span className="chip border-indigo-600/15 bg-indigo-50 text-indigo-700">
                  {g.category}
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-slate-950">
                  {g.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {g.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-indigo-700 group-hover:underline">
                  Lire le guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
      <CTA />
      <WebPageJsonLd
        url={`${SITE.url}/guides`}
        name="Guides Boki Agency"
        description="Guides sur la création de sites internet à Montauban."
      />
    </>
  );
}
