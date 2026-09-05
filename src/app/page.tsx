import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { RealisationsSection } from "@/components/sections/RealisationsSection";
import { ForWhomSection } from "@/components/sections/ForWhomSection";
import { LocalSeoSection } from "@/components/sections/LocalSeoSection";
import { ArtisansSection } from "@/components/sections/ArtisansSection";
import { IncludedSection } from "@/components/sections/IncludedSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { StartKitSection } from "@/components/sections/StartKitSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { AreasSection } from "@/components/sections/AreasSection";
import { OptionsSection } from "@/components/sections/OptionsSection";
import { MaintenanceSection } from "@/components/sections/MaintenanceSection";
import { TextileSection } from "@/components/sections/TextileSection";
import { AboutShortSection } from "@/components/sections/AboutShortSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTA } from "@/components/ui/CTA";
import { FAQ_HOME } from "@/lib/data/faq";
import { ServiceJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Agence web à Montauban — sites internet, e-commerce & SEO local | Boki Agency",
  description:
    "Boki Agency crée des sites internet modernes à Montauban et dans le Tarn-et-Garonne : sites vitrines, e-commerce Shopify, click & collect et SEO local pour professionnels.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ForWhomSection />
      <LocalSeoSection />
      <ArtisansSection />
      <IncludedSection />
      <MethodSection />
      <StartKitSection />
      <BeforeAfterSection />
      <RealisationsSection />
      <TestimonialsSection />
      <ManifestoSection />
      <SectorsSection />
      <AreasSection />
      <OptionsSection />
      <MaintenanceSection />
      <TextileSection />
      <AboutShortSection />
      <FAQSection items={FAQ_HOME.slice(0, 10)} />
      <CTA />
      <WebPageJsonLd
        url={SITE.url}
        name="Création site internet Montauban | Boki Agency"
        description={SITE.description}
      />
      <ServiceJsonLd
        url={`${SITE.url}/`}
        name="Création de site internet Montauban"
        description="Création de sites vitrines, Shopify et click & collect à Montauban et dans le Tarn-et-Garonne."
      />
    </>
  );
}
