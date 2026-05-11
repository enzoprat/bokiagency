import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import {
  Hammer,
  Wrench,
  Plug,
  Paintbrush,
  Trees,
  Store,
  Utensils,
  Dumbbell,
  Sparkles,
  Building2,
  ShoppingBag,
  User,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Secteurs accompagnés par Boki Agency à Montauban",
  description:
    "Artisans, commerces, indépendants, e-commerce, événementiel : découvrez les secteurs accompagnés par Boki Agency pour la création de sites internet à Montauban.",
  alternates: { canonical: "/secteurs" },
};

const SECTORS = [
  { icon: Hammer, title: "Artisans du bâtiment", text: "Couvreurs, plombiers, électriciens, peintres, menuisiers." },
  { icon: Trees, title: "Paysagistes", text: "Création et entretien d'espaces extérieurs." },
  { icon: Store, title: "Commerces", text: "Boutiques locales, conciergeries, instituts." },
  { icon: Utensils, title: "Restaurants", text: "Présentation, menus, contact, click & collect." },
  { icon: Dumbbell, title: "Coachs", text: "Coachs sportifs, coachs business, formateurs." },
  { icon: Sparkles, title: "Instituts de beauté", text: "Présentation, services et prise de contact." },
  { icon: Building2, title: "Conciergeries", text: "Présentation, zones desservies, demandes." },
  { icon: Briefcase, title: "Événementiel", text: "Univers visuel marqué et présentation des prestations." },
  { icon: ShoppingBag, title: "E-commerce", text: "Boutiques en ligne, B2B, marques avec catalogue." },
  { icon: User, title: "Indépendants", text: "Consultants, professions libérales, freelances." },
  { icon: Wrench, title: "Prestataires de services", text: "Aux particuliers et aux professionnels." },
  { icon: Plug, title: "Entreprises locales", text: "PME et structures avec ancrage local fort." },
  { icon: Paintbrush, title: "Artisans d'art", text: "Mise en valeur des créations et de l'univers." },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/secteurs", label: "Secteurs" }]} />
      <PageHero
        eyebrow="Secteurs accompagnés"
        title={
          <>
            Des sites pensés pour <span className="gradient-text">votre métier</span>
          </>
        }
        description="Chaque secteur a ses codes, ses cibles et ses contraintes. Voici les principaux secteurs que nous accompagnons."
      />
      <Section>
        <SectionHeader
          eyebrow="Notre périmètre"
          title={
            <>
              13 secteurs <span className="gradient-text">accompagnés au quotidien</span>
            </>
          }
        />
        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <StaggerItem key={s.title}>
              <div className="card card-hover p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white">
                  <s.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
      <CTA />
      <WebPageJsonLd
        url={`${SITE.url}/secteurs`}
        name="Secteurs accompagnés par Boki Agency"
        description="Tous les secteurs accompagnés par Boki Agency à Montauban."
      />
    </>
  );
}
