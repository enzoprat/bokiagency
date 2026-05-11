import { Section, SectionHeader } from "@/components/ui/Section";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";
import { FAQJsonLd } from "@/components/seo/JsonLd";

export function FAQSection({
  items,
  title,
  eyebrow = "FAQ",
}: {
  items: FAQItem[];
  title?: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow={eyebrow}
        title={
          title || (
            <>
              Vos questions sur la <span className="gradient-text">création de sites internet</span>
            </>
          )
        }
        description="Les réponses aux questions les plus fréquentes avant de lancer un projet."
      />
      <div className="mt-12">
        <FAQ items={items} />
      </div>
      <FAQJsonLd items={items} />
    </Section>
  );
}
