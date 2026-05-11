"use client";

import {
  Sparkles,
  FilePlus2,
  Search,
  MapPin,
  Wrench,
  Server,
  MessageSquare,
  Image as ImageIcon,
  Languages,
  PenLine,
  Mail,
  TrendingUp,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

const OPTIONS = [
  { icon: Sparkles, title: "Logo simple", size: "lg" as const },
  { icon: FilePlus2, title: "Page supplémentaire", size: "md" as const },
  { icon: Search, title: "Référencement local", size: "xl" as const },
  { icon: MapPin, title: "Fiche Google Business", size: "lg" as const },
  { icon: Wrench, title: "Maintenance mensuelle", size: "md" as const },
  { icon: Server, title: "Hébergement et suivi", size: "lg" as const },
  { icon: MessageSquare, title: "Avis clients réels", size: "md" as const },
  { icon: ImageIcon, title: "Galerie photos avancée", size: "md" as const },
  { icon: Languages, title: "Version anglaise", size: "lg" as const },
  { icon: PenLine, title: "Optimisation des textes", size: "md" as const },
  { icon: Mail, title: "Connexion email", size: "md" as const },
  { icon: TrendingUp, title: "Amélioration continue", size: "lg" as const },
];

const SIZE_CLASS = {
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-base",
  xl: "px-6 py-3.5 text-lg sm:text-xl",
};

export function OptionsSection() {
  const reduced = useReducedMotion();

  return (
    <Section variant="surface">
      <div className="grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
            Options
          </span>
          <h2 className="heading-display mt-5 text-4xl text-slate-950 sm:text-5xl lg:text-6xl">
            Et si vous voulez{" "}
            <span className="gradient-text italic">aller plus loin</span>...
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-600 lg:col-span-5">
          Selon les besoins du projet, des prestations complémentaires peuvent
          être ajoutées avant ou après livraison. Choisissez ce qui vous parle.
        </p>
      </div>

      {/* Tag cloud — varied sizes, varied colors */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {OPTIONS.map((o, i) => {
          const dark = i % 4 === 0;
          const outline = i % 4 === 2;
          return (
            <motion.span
              key={o.title}
              initial={reduced ? false : { opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduced ? undefined : { y: -4, scale: 1.04 }}
              className={`inline-flex cursor-default items-center gap-2 rounded-full font-medium tracking-tight transition-shadow ${SIZE_CLASS[o.size]} ${
                dark
                  ? "bg-slate-950 text-white shadow-glow"
                  : outline
                    ? "border border-slate-950/20 bg-transparent text-slate-950 hover:bg-slate-950 hover:text-white"
                    : "bg-white text-slate-950 shadow-soft"
              }`}
            >
              <o.icon
                className={`h-4 w-4 ${
                  o.size === "xl" ? "h-5 w-5" : ""
                }`}
              />
              {o.title}
            </motion.span>
          );
        })}
      </div>
    </Section>
  );
}
