"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SERVICES } from "@/lib/data/services";
import { motion, useReducedMotion } from "framer-motion";

export function ServicesSection() {
  const reduced = useReducedMotion();
  const main = SERVICES.slice(0, 3);

  return (
    <Section id="services" variant="surface">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeader
          eyebrow="Nos services"
          title={
            <>
              Trois manières de <span className="gradient-text">vendre votre activité</span>
            </>
          }
          description="Présenter, vendre en ligne, ou commande + retrait. Chaque approche a sa logique."
          className="!max-w-2xl"
        />
        <div className="hidden lg:block font-display text-[8rem] font-bold leading-none tracking-tighter text-slate-950/[0.05]">
          03
        </div>
      </div>

      {/* Asymmetric stack : 3 lignes pleines largeur, hover swap */}
      <ul className="mt-12 divide-y divide-slate-950/10 border-y border-slate-950/10">
        {main.map((s, i) => (
          <motion.li
            key={s.slug}
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={s.href}
              className="group relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-7 transition-colors hover:bg-slate-950 hover:text-white sm:grid-cols-[5rem_1fr_2.5rem_auto] sm:gap-8 sm:py-10"
            >
              {/* Number */}
              <span className="font-display text-sm font-semibold tracking-wider text-slate-500 transition-colors group-hover:text-white/60 sm:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title + intro */}
              <div className="min-w-0">
                <h3 className="heading-display text-2xl text-slate-950 transition-colors group-hover:text-white sm:text-4xl lg:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-white/70 sm:mt-3 sm:text-base">
                  {s.intro}
                </p>
              </div>

              {/* Bullets — hidden on mobile */}
              <div className="hidden sm:block sm:max-w-xs">
                <ul className="space-y-1.5 text-xs text-slate-600 transition-colors group-hover:text-white/70">
                  {s.bullets.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-slate-500 group-hover:bg-white/70" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-slate-950/15 bg-white text-slate-950 transition-all group-hover:rotate-45 group-hover:border-white group-hover:bg-white sm:h-14 sm:w-14">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="max-w-md text-sm text-slate-500">
          Refonte de site, SEO local, click & collect, vêtements personnalisés —
          on couvre aussi tout le reste.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-950 transition-all hover:gap-3"
        >
          Voir tous les services <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
