import {
  Building2,
  Briefcase,
  Image as ImageIcon,
  MapPin,
  MessageSquare,
  PhoneCall,
  Smartphone,
  LayoutGrid,
  Layers,
  Search,
  Share2,
  Rocket,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Marquee } from "@/components/ui/Marquee";

const ROW_A = [
  { icon: Building2, title: "Présentation entreprise" },
  { icon: Briefcase, title: "Présentation des services" },
  { icon: ImageIcon, title: "Photos réalisations" },
  { icon: MapPin, title: "Zones d'intervention" },
  { icon: MessageSquare, title: "Formulaire de contact" },
  { icon: PhoneCall, title: "Boutons d'appel" },
];

const ROW_B = [
  { icon: Smartphone, title: "Design responsive" },
  { icon: LayoutGrid, title: "Mise en page pro" },
  { icon: Layers, title: "Structure claire" },
  { icon: Search, title: "Optimisation SEO de base" },
  { icon: Share2, title: "Balises de partage" },
  { icon: Rocket, title: "Mise en ligne accompagnée" },
];

function Pill({
  Icon,
  text,
  dark = false,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  text: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-base font-medium tracking-tight whitespace-nowrap sm:text-lg ${
        dark
          ? "bg-slate-950 text-white"
          : "border border-slate-950/15 bg-white text-slate-950"
      }`}
    >
      <Icon className="h-4 w-4" />
      {text}
    </span>
  );
}

export function IncludedSection() {
  return (
    <Section className="!py-24 sm:!py-32">
      <div className="container-tight relative">
        {/* Top : huge number + headline */}
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
              Inclus de série
            </span>
            <h2 className="heading-display mt-5 text-4xl text-slate-950 sm:text-5xl lg:text-6xl">
              Tout ce qu'il faut pour{" "}
              <span className="gradient-text italic">transformer</span> les
              visites en demandes.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <div className="flex items-center gap-5">
              <span className="font-display text-7xl font-bold leading-none tracking-tighter text-slate-950 sm:text-8xl lg:text-9xl">
                12
              </span>
              <span className="max-w-[12ch] text-sm font-medium leading-tight text-slate-600">
                éléments inclus dans chaque site
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee out of container — bleed to viewport edges */}
      <div className="mt-14 space-y-3">
        <Marquee speed={50}>
          <div className="flex shrink-0 items-center gap-3 pr-3">
            {ROW_A.map((c, i) => (
              <Pill key={`a-${i}`} Icon={c.icon} text={c.title} dark={i % 3 === 0} />
            ))}
          </div>
        </Marquee>
        <Marquee speed={55} reverse>
          <div className="flex shrink-0 items-center gap-3 pr-3">
            {ROW_B.map((c, i) => (
              <Pill key={`b-${i}`} Icon={c.icon} text={c.title} dark={i % 3 === 1} />
            ))}
          </div>
        </Marquee>
      </div>

      <div className="container-tight mt-12">
        <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
          Le nom de domaine reste à la charge du client. L'hébergement, la
          maintenance et les évolutions peuvent être proposés séparément selon
          le besoin.
        </p>
      </div>
    </Section>
  );
}
