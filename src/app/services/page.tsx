import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { SERVICES } from "@/lib/data/services";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { Spotlight } from "@/components/ui/Spotlight";

export const metadata: Metadata = {
  title: "Services de création de sites internet à Montauban | Boki Agency",
  description:
    "Sites vitrines, e-commerce Shopify, click & collect, refonte de site. Découvrez tous les services de création de sites internet de Boki Agency à Montauban.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/services", label: "Services" }]} />
      <PageHero
        eyebrow="Services"
        title={
          <>
            Tous nos services de <span className="gradient-text">création de sites</span>
          </>
        }
        description="Sites vitrines, boutiques Shopify, click & collect, refonte. Une approche claire pour chaque type de projet."
        secondaryCta={{ href: "/realisations", label: "Voir les réalisations" }}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="card card-hover group relative flex h-full flex-col p-7"
            >
              <Spotlight intensity={0.06} />
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white shadow-glow transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-3deg]">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-slate-950 sm:text-2xl">
                {s.title}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                {s.intro}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-sm text-slate-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-indigo-700 group-hover:underline">
                Voir le détail <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CTA />
      <WebPageJsonLd
        url={`${SITE.url}/services`}
        name="Services Boki Agency"
        description="Création de sites vitrines, e-commerce Shopify, click & collect et refonte de site à Montauban."
      />
    </>
  );
}
