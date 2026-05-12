"use client";

import Link from "next/link";
import { ArrowUpRight, Shirt } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Sous-branche textile — service annexe, pas un pilier de l'offre.
 * Section compacte, sobre, un seul layout split avec ton "by the way".
 */
export function TextileSection() {
  const reduced = useReducedMotion();

  return (
    <Section variant="surface" className="!py-20 sm:!py-24">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-slate-950/10 bg-white p-7 sm:p-10 lg:p-14"
      >
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-slate-950/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-600">
              <Shirt className="h-3 w-3" />
              En passant — sous-branche
            </div>
            <h2 className="heading-display mt-5 text-2xl text-slate-950 sm:text-3xl lg:text-4xl">
              Ah, et on fait aussi du{" "}
              <span className="gradient-text italic">textile personnalisé.</span>
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
              T-shirts, polos, sweats, casquettes : on imprime aussi des
              vêtements personnalisés pour les pros du 82 qui veulent une
              identité cohérente — sur leur site comme sur leur équipe.
              Petites quantités, marquage logo, designs sur-mesure.
            </p>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              Ce n'est pas notre cœur de métier — on fait des sites avant tout.
              Mais si vous voulez tout au même endroit, on s'en occupe.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-950/15 bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-all hover:gap-3 hover:bg-slate-950 hover:text-white"
            >
              Demander un devis textile{" "}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Visual stack — 3 tags textile flottants */}
          <div className="lg:col-span-4">
            <div className="relative aspect-square w-full max-w-xs">
              <div className="absolute left-2 top-2 rotate-[-6deg] rounded-2xl border border-slate-950/10 bg-white p-4 shadow-soft">
                <Shirt className="h-6 w-6 text-slate-950" />
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  T-shirt logo
                </div>
                <div className="text-sm font-semibold text-slate-950">
                  Coton bio
                </div>
              </div>
              <div className="absolute right-0 top-12 rotate-[5deg] rounded-2xl bg-slate-950 p-4 text-white shadow-glow">
                <Shirt className="h-6 w-6" />
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  Polo équipe
                </div>
                <div className="text-sm font-semibold">Broderie</div>
              </div>
              <div className="absolute bottom-0 left-8 rotate-[3deg] rounded-2xl border border-slate-950/10 bg-white p-4 shadow-soft">
                <Shirt className="h-6 w-6 text-slate-950" />
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Sweat / Casquette
                </div>
                <div className="text-sm font-semibold text-slate-950">
                  Marquage
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
