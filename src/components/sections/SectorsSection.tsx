"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

const SECTORS = [
  { label: "Artisans du bâtiment", size: "xl" },
  { label: "Couvreurs", size: "lg" },
  { label: "Plombiers", size: "md" },
  { label: "Électriciens", size: "lg" },
  { label: "Peintres", size: "md" },
  { label: "Menuisiers", size: "md" },
  { label: "Commerces", size: "xl" },
  { label: "Restaurants", size: "lg" },
  { label: "Coachs", size: "md" },
  { label: "Instituts de beauté", size: "lg" },
  { label: "Conciergeries", size: "md" },
  { label: "Événementiel", size: "lg" },
  { label: "E-commerce", size: "xl" },
  { label: "Indépendants", size: "lg" },
  { label: "Entreprises locales", size: "md" },
];

const SIZE_CLASS: Record<string, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
  xl: "px-6 py-3 text-lg sm:text-xl",
};

export function SectorsSection() {
  const reduced = useReducedMotion();

  return (
    <Section variant="dark" className="grain">
      <div className="halo -top-20 right-0 h-72 w-72 rounded-full bg-white/10" />
      <div className="grid-faint-dark absolute inset-0 opacity-40" />

      <div className="relative z-10">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="chip-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Secteurs accompagnés
            </span>
            <h2 className="heading-display mt-5 text-4xl text-white sm:text-5xl lg:text-6xl">
              Des sites pensés pour{" "}
              <span className="gradient-text-on-dark italic">votre métier.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/70 lg:col-span-5 sm:text-base">
            Un site doit refléter une activité, ses contraintes et ses cibles.
            Chaque secteur a ses codes — on les respecte.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-3 sm:gap-4">
          {SECTORS.map((s, i) => {
            const featured = s.size === "xl";
            return (
              <motion.span
                key={s.label}
                initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={reduced ? undefined : { y: -3 }}
                className={`inline-flex cursor-default items-center rounded-full font-medium tracking-tight transition-all ${SIZE_CLASS[s.size]} ${
                  featured
                    ? "bg-white text-slate-950"
                    : "border border-white/15 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                }`}
              >
                {s.label}
              </motion.span>
            );
          })}
        </div>

        <div className="mt-12">
          <Link
            href="/secteurs"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition-all hover:bg-white hover:text-slate-950"
          >
            Voir tous les secteurs <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
