import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQ_PRICING } from "@/lib/data/faq";
import { Reveal } from "@/components/ui/Reveal";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Tarif création site internet Montauban | Comprendre le prix d'un site web",
  description:
    "Comprendre les facteurs qui font varier le prix d'un site internet à Montauban : type de site, pages, contenu, fonctionnalités, maintenance, hébergement.",
  alternates: { canonical: "/tarifs-creation-site-internet" },
};

const FACTORS = [
  "Type de site (vitrine, e-commerce, click & collect)",
  "Nombre de pages",
  "Design (DA simple ou poussée)",
  "Rédaction des textes",
  "Photos disponibles ou à produire",
  "Fonctionnalités spécifiques",
  "Formulaire(s) de contact",
  "E-commerce (catalogue, paiements)",
  "Maintenance après livraison",
  "Hébergement",
  "Nom de domaine",
  "Modifications après livraison",
];

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            href: "/tarifs-creation-site-internet",
            label: "Tarifs",
          },
        ]}
      />
      <PageHero
        eyebrow="Tarifs"
        title={
          <>
            Combien coûte la création d'un <span className="gradient-text">site internet à Montauban</span> ?
          </>
        }
        description="Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et des fonctionnalités souhaitées. Une estimation peut être proposée après analyse du projet."
        secondaryCta={{
          href: "/services",
          label: "Voir les services",
        }}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeader
              eyebrow="Facteurs"
              title={
                <>
                  Ce qui fait varier le <span className="gradient-text">prix d'un site</span>
                </>
              }
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {FACTORS.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 rounded-2xl border border-slate-950/[0.06] bg-white p-4"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-indigo-100 text-indigo-700">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] text-slate-800">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-4 text-[15px] leading-relaxed text-slate-700">
              <p>
                Plus le projet est défini en amont (type de site, nombre de
                pages, contenu, photos), plus l'estimation peut être précise.
                Une analyse rapide permet ensuite de chiffrer le projet.
              </p>
              <p>
                Le paiement peut être effectué par virement ou espèces. Un
                acompte de 40% est demandé au démarrage du projet.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="card sticky top-24 p-7">
              <h3 className="font-display text-lg font-semibold text-slate-950">
                Demander une estimation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Présentez votre projet en quelques mots : nous revenons vers
                vous avec une première estimation et les éléments à préparer.
              </p>
              <Link
                href="/contact"
                className="btn-primary mt-6 w-full justify-center"
              >
                Demander une estimation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="btn-secondary mt-3 w-full justify-center"
              >
                Voir les services
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <FAQSection items={FAQ_PRICING} />
      <CTA />

      <WebPageJsonLd
        url={`${SITE.url}/tarifs-creation-site-internet`}
        name="Tarifs création site internet Montauban"
        description="Comprendre les facteurs qui font varier le prix d'un site internet."
      />
    </>
  );
}
