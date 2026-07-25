import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { REALISATIONS } from "@/lib/data/realisations";
import { RealisationCard } from "@/components/ui/RealisationCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Réalisations — sites internet livrés par Boki Agency",
  description:
    "Découvrez les sites internet réalisés par Boki Agency : sites vitrines, e-commerce Shopify, sites artisans, sites SEO local et projets premium.",
  alternates: { canonical: "/realisations" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/realisations", label: "Réalisations" }]} />
      <PageHero
        eyebrow="Réalisations"
        title={
          <>
            Quelques projets <span className="gradient-text">livrés récemment</span>
          </>
        }
        description="Sites vitrines, sites e-commerce, sites artisans, projets SEO local : un aperçu concret de ce que nous concevons."
        secondaryCta={{ href: "/contact", label: "Créer un projet similaire" }}
      />
      <Section variant="surface">
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REALISATIONS.map((r) => (
            <StaggerItem key={r.slug}>
              <RealisationCard r={r} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
      <CTA />
      <WebPageJsonLd
        url={`${SITE.url}/realisations`}
        name="Réalisations Boki Agency"
        description="Réalisations de sites internet livrés par Boki Agency."
      />
    </>
  );
}
