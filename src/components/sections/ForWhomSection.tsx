"use client";

import {
  Hammer,
  User,
  Store,
  Briefcase,
  ShoppingCart,
  Package,
  Building2,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

const CELLS = [
  // [ icon, title, desc, span (col x row), variant ]
  {
    icon: Hammer,
    title: "Artisans",
    desc: "Couvreurs, plombiers, électriciens, peintres, menuisiers, paysagistes.",
    span: "sm:col-span-2 sm:row-span-2",
    variant: "dark" as const,
    big: true,
  },
  {
    icon: User,
    title: "Indépendants",
    desc: "Coachs, consultants, professions libérales.",
    span: "sm:col-span-2",
    variant: "light" as const,
  },
  {
    icon: Store,
    title: "Commerces",
    desc: "Boutiques, instituts, restaurants.",
    span: "",
    variant: "light" as const,
  },
  {
    icon: Briefcase,
    title: "Prestataires",
    desc: "Services aux particuliers et pros.",
    span: "",
    variant: "outline" as const,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Boutiques en ligne, B2B, marques avec catalogue.",
    span: "sm:col-span-2",
    variant: "light" as const,
  },
  {
    icon: Package,
    title: "Click & collect",
    desc: "Commerce avec retrait sur place.",
    span: "",
    variant: "outline" as const,
  },
  {
    icon: Building2,
    title: "Entreprises locales",
    desc: "PME et structures avec activité ancrée.",
    span: "sm:col-span-2",
    variant: "dark" as const,
  },
  {
    icon: Sparkles,
    title: "Projets pro",
    desc: "Lancements, refontes, nouveaux sites.",
    span: "",
    variant: "light" as const,
  },
];

export function ForWhomSection() {
  const reduced = useReducedMotion();

  return (
    <Section>
      <SectionHeader
        eyebrow="Pour qui"
        title={
          <>
            Si vous êtes ici, c'est probablement pour{" "}
            <span className="gradient-text">l'une de ces raisons</span>
          </>
        }
        description="Que vous soyez artisan, commerçant ou porteur de projet, votre site doit inspirer confiance et faciliter la prise de contact."
      />

      <div className="mt-12 grid auto-rows-[minmax(140px,auto)] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {CELLS.map((c, i) => {
          const dark = c.variant === "dark";
          const outline = c.variant === "outline";
          return (
            <motion.div
              key={c.title}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-3xl p-5 transition-all hover:-translate-y-0.5 sm:p-6 ${c.span} ${
                dark
                  ? "bg-ink-900 text-white"
                  : outline
                    ? "border border-slate-950/15 bg-transparent text-slate-950 hover:bg-slate-950 hover:text-white"
                    : "bg-surface text-slate-950 hover:bg-white hover:shadow-soft"
              }`}
            >
              {dark && (
                <>
                  <div className="grid-faint-dark absolute inset-0 opacity-30" />
                  <div className="halo -bottom-20 -right-10 h-44 w-44 rounded-full bg-white/10 opacity-60" />
                </>
              )}
              <div className="relative flex h-full flex-col">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-xl transition-all ${
                    dark
                      ? "bg-white text-slate-950"
                      : outline
                        ? "border border-slate-950/15 bg-white text-slate-950 group-hover:border-white group-hover:bg-white"
                        : "bg-slate-950 text-white"
                  }`}
                >
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <h3
                  className={`mt-auto pt-6 font-display font-semibold tracking-tight ${
                    c.big
                      ? "text-2xl sm:text-3xl lg:text-4xl"
                      : "text-base sm:text-lg"
                  }`}
                >
                  {c.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    dark
                      ? "text-white/70"
                      : outline
                        ? "text-slate-600 group-hover:text-white/70"
                        : "text-slate-600"
                  }`}
                >
                  {c.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
