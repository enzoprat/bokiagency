import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { RealisationsSection } from "@/components/sections/RealisationsSection";
import { ServiceJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import type { FAQItem } from "@/components/ui/FAQ";
import { SITE } from "@/lib/site";

export type ServiceDetailProps = {
  url: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: React.ReactNode;
  intro: string;
  bullets: string[];
  why: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faqItems: FAQItem[];
  relatedHref?: string;
  relatedLabel?: string;
};

export function ServiceDetail({
  url,
  title,
  description,
  eyebrow,
  h1,
  intro,
  bullets,
  why,
  process,
  faqItems,
  relatedHref,
  relatedLabel,
}: ServiceDetailProps) {
  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/services", label: "Services" },
          { href: url.replace(SITE.url, ""), label: eyebrow },
        ]}
      />
      <PageHero
        eyebrow={eyebrow}
        title={h1}
        description={intro}
        secondaryCta={{ href: "/realisations", label: "Voir les réalisations" }}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Inclus"
              title={
                <>
                  Ce que comprend cette <span className="gradient-text">prestation</span>
                </>
              }
            />
            <StaggerContainer className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <StaggerItem key={b}>
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-950/[0.06] bg-white p-4">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-100 text-indigo-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] text-slate-800">{b}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <Reveal className="lg:col-span-5">
            <div className="card sticky top-24 p-7">
              <h3 className="font-display text-lg font-semibold text-slate-950">
                Tarif & accompagnement
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer
                et des fonctionnalités souhaitées. Une estimation peut être proposée après
                analyse du projet.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contact" className="btn-primary justify-center">
                  Demander une estimation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tarifs-creation-site-internet"
                  className="btn-secondary justify-center"
                >
                  Comprendre les tarifs
                </Link>
              </div>
              {relatedHref && (
                <div className="mt-5 rounded-2xl bg-indigo-50/60 p-4 text-sm text-indigo-900">
                  <p className="font-medium">À voir aussi</p>
                  <Link
                    href={relatedHref}
                    className="mt-1 inline-flex items-center gap-1 text-indigo-700 hover:underline"
                  >
                    {relatedLabel} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeader
          eyebrow="Pourquoi"
          title={
            <>
              Pourquoi cette <span className="gradient-text">approche fonctionne</span>
            </>
          }
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="card p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  Point clé {i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-slate-950">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {w.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Méthode"
          title={
            <>
              Comment se déroule <span className="gradient-text">le projet</span>
            </>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="card relative h-full p-6">
                <span className="absolute right-4 top-4 text-xs font-semibold text-indigo-600/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-semibold text-slate-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <RealisationsSection limit={3} title={<>Quelques exemples de <span className="gradient-text">projets livrés</span></>} />

      <FAQSection items={faqItems} />

      <CTA />

      <WebPageJsonLd url={url} name={title} description={description} />
      <ServiceJsonLd url={url} name={title} description={description} />
    </>
  );
}
