"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

const STATS = [
  { value: "100%", label: "Sites mobile-first" },
  { value: "82", label: "Département focus" },
  { value: "Sur-mesure", label: "Aucun template" },
  { value: "SEO inclus", label: "De base, partout" },
];

export function AboutShortSection() {
  const reduced = useReducedMotion();

  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Left visual — stack of layered cards with quote */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full max-w-md">
            <div
              className="absolute inset-x-6 -top-3 bottom-3 rounded-3xl bg-slate-950/[0.06]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-3 top-0 bottom-3 rounded-3xl border border-slate-950/[0.08] bg-white shadow-soft"
              aria-hidden="true"
            />
            <div className="ring-gradient relative h-full w-full overflow-hidden rounded-3xl bg-ink-900 p-8 text-white shadow-glow">
              <div className="halo -top-12 -right-12 h-44 w-44 rounded-full bg-white/15" />
              <div className="grid-faint-dark absolute inset-0 opacity-40" />
              <div className="relative flex h-full flex-col">
                <span className="chip-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  L'agence
                </span>
                <p className="mt-auto font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  <span className="italic text-white/55">"</span>
                  Un site qui ne génère rien n'est pas un site, c'est une carte
                  de visite chère.
                  <span className="italic text-white/55">"</span>
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-base font-bold text-slate-950">
                    B
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      Boki Agency
                    </div>
                    <div className="text-xs text-white/55">
                      Agence web — Montauban
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />À propos
          </span>
          <h2 className="heading-display mt-5 text-3xl text-slate-950 sm:text-4xl lg:text-5xl">
            Une agence pensée pour créer des sites{" "}
            <span className="gradient-text italic">utiles</span>, clairs et
            performants.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Boki Agency accompagne les professionnels dans la création de sites
            internet pensés pour être beaux, clairs et utiles. L'objectif n'est
            pas seulement de créer un site esthétique, mais de construire un
            support de présentation capable de rassurer, convertir et évoluer
            avec l'activité.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-slate-950/10 pt-10 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-slate-500">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            href="/a-propos"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-all hover:gap-3"
          >
            En savoir plus sur l'agence{" "}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
