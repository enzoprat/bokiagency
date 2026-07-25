import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WebPageJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import type { FAQItem } from "@/components/ui/FAQ";

export type LocalPageProps = {
  url: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: React.ReactNode;
  intro: string;
  crumbs: Crumb[];
  body: { title: string; text: string }[];
  bullets: string[];
  services: { href: string; label: string; desc: string }[];
  zones?: string[];
  internalLinks?: { href: string; label: string }[];
  faqItems: FAQItem[];
};

export function LocalPage({
  url,
  metaTitle,
  metaDescription,
  eyebrow,
  h1,
  intro,
  crumbs,
  body,
  bullets,
  services,
  zones,
  internalLinks,
  faqItems,
}: LocalPageProps) {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow={eyebrow}
        title={h1}
        description={intro}
        secondaryCta={{ href: "/services", label: "Voir les services" }}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeader
              eyebrow="Approche"
              title={
                <>
                  Une approche claire et <span className="gradient-text">orientée résultats</span>
                </>
              }
            />
            <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-slate-700">
              {body.map((b) => (
                <div key={b.title}>
                  <h3 className="font-display text-lg font-semibold text-slate-950">
                    {b.title}
                  </h3>
                  <p className="mt-2">{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="card p-7">
                <h3 className="font-display text-lg font-semibold text-slate-950">
                  Inclus dans la prestation
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn-primary mt-6 w-full justify-center"
                >
                  Demander mon site <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeader
          eyebrow="Services associés"
          title={
            <>
              Quel type de site pour <span className="gradient-text">votre projet</span>
            </>
          }
        />
        <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.href}>
              <Link href={s.href} className="card card-hover group block p-6">
                <h3 className="font-display text-lg font-semibold text-slate-950">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-700 group-hover:underline">
                  Voir <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {zones && zones.length > 0 && (
        <Section>
          <SectionHeader
            eyebrow="Zones desservies"
            title={
              <>
                Une présence locale à <span className="gradient-text">Montauban & dans le Tarn-et-Garonne</span>
              </>
            }
          />
          <StaggerContainer className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {zones.map((z) => (
              <StaggerItem key={z}>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-950/[0.06] bg-white p-4 transition-all hover:border-indigo-600/20 hover:shadow-soft">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-50 text-indigo-700">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-slate-900">{z}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      )}

      {internalLinks && internalLinks.length > 0 && (
        <Section variant="surface">
          <SectionHeader
            eyebrow="À voir aussi"
            title={
              <>
                Pages utiles <span className="gradient-text">en lien</span>
              </>
            }
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {internalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="card card-hover flex items-center justify-between p-5"
              >
                <span className="text-[15px] font-medium text-slate-900">
                  {l.label}
                </span>
                <ArrowRight className="h-4 w-4 text-indigo-700" />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <TestimonialsSection />

      <FAQSection items={faqItems} />

      <CTA />

      <WebPageJsonLd url={url} name={metaTitle} description={metaDescription} />
      <ServiceJsonLd
        url={url}
        name={metaTitle}
        description={metaDescription}
      />
    </>
  );
}
