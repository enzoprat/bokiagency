import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const TOOLS = [
  "Webflow",
  "Shopify",
  "React",
  "Next.js",
  "Vercel",
  "OVH",
  "Web3Forms",
  "Google Search Console",
  "Google Business Profile",
  "SEO local",
];

export function StackSection() {
  return (
    <Section variant="dark" className="grain">
      <div className="halo -top-32 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-white/10" />
      <div className="grid-faint-dark absolute inset-0 opacity-40" />
      <div className="relative z-10">
        <SectionHeader
          variant="dark"
          eyebrow="Stack & outils"
          title={
            <>
              Une stack <span className="gradient-text-on-dark">moderne et maîtrisée</span>
            </>
          }
          description="Des outils éprouvés pour des sites rapides, durables et SEO-friendly."
        />
        <Reveal className="mt-10 flex flex-wrap gap-2">
          {TOOLS.map((t) => (
            <span key={t} className="chip-dark">
              {t}
            </span>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
