import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { Eye, Target, Layers, MapPin } from "lucide-react";
import { StackSection } from "@/components/sections/StackSection";

export const metadata: Metadata = {
  title: "À propos | Boki Agency, agence de création de sites à Montauban",
  description:
    "Boki Agency conçoit des sites internet utiles, clairs et performants pour les pros à Montauban et dans le Tarn-et-Garonne. Sites vitrines, Shopify, click & collect, refonte.",
  alternates: { canonical: "/a-propos" },
};

const VALUES = [
  {
    icon: Eye,
    title: "Clarté avant tout",
    text: "Un site doit être clair pour le visiteur, pas un exercice de style pour le designer.",
  },
  {
    icon: Target,
    title: "Orienté conversion",
    text: "Chaque section sert un objectif : présenter, rassurer, ou amener au contact.",
  },
  {
    icon: Layers,
    title: "Évolutif",
    text: "Une base saine pour ajouter ensuite des pages, services ou zones locales.",
  },
  {
    icon: MapPin,
    title: "Ancrage local",
    text: "Montauban et le Tarn-et-Garonne, avec une intervention à distance possible selon le projet.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/a-propos", label: "À propos" }]} />
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Une agence pensée pour créer des sites <span className="gradient-text">utiles, clairs et performants</span>
          </>
        }
        description="Boki Agency accompagne les professionnels dans la création de sites internet pensés pour être beaux, clairs et utiles. L'objectif n'est pas seulement de créer un site esthétique, mais de construire un support de présentation capable de rassurer, convertir et évoluer avec l'activité."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Vision"
              title={
                <>
                  Construire des sites qui <span className="gradient-text">durent</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700">
              <p>
                Trop de sites sont jolis mais inutiles. Trop d'autres sont utiles mais
                impossibles à utiliser sur mobile. Boki Agency fait un choix simple : le
                site doit être beau, clair, rapide et capable d'amener à la prise de
                contact.
              </p>
              <p>
                Sites vitrines, e-commerce Shopify, click & collect, refonte : la même
                exigence à chaque projet, et une méthode claire pour la transformer en
                résultat concret.
              </p>
              <p>
                Boki Agency est basée à Montauban et accompagne aussi des projets à
                distance selon les besoins.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {VALUES.map((v, i) => (
                <StaggerItem key={v.title} className={i % 3 === 1 ? "translate-y-3" : ""}>
                  <div className="card p-6">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white">
                      <v.icon className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-slate-950">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {v.text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Reveal>
        </div>
      </Section>

      <StackSection />

      <CTA />

      <WebPageJsonLd
        url={`${SITE.url}/a-propos`}
        name="À propos de Boki Agency"
        description="Boki Agency, agence de création de sites internet à Montauban."
      />
    </>
  );
}
