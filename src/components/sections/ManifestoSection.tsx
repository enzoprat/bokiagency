"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

/**
 * Manifeste plein écran — moment "wow" pour casser le rythme.
 * Texte oversized noir, mots clés en gradient, fond grain.
 */
export function ManifestoSection() {
  const reduced = useReducedMotion();

  const word = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 24, filter: "blur(8px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-80px" } as const,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section className="grain grain-strong relative isolate overflow-hidden bg-ink-900 py-28 text-white sm:py-36 lg:py-44">
      <div className="halo -top-32 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-white/10" />
      <div className="halo -bottom-40 right-0 h-80 w-80 rounded-full bg-white/[0.07]" />
      <div className="grid-faint-dark absolute inset-0 opacity-50" />

      <div className="container-tight relative z-10">
        <div className="mx-auto max-w-5xl">
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/85"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Notre conviction
          </motion.span>

          <h2 className="display-mega heading-display mt-8 text-[clamp(2.4rem,7.5vw,6.5rem)] text-white">
            <motion.span className="block" {...word(0.05)}>
              Un site doit faire{" "}
              <span className="italic text-white/55">plus</span>
            </motion.span>
            <motion.span className="block" {...word(0.18)}>
              que <span className="gradient-text-on-dark">bien paraître.</span>
            </motion.span>
          </h2>

          <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            {[
              {
                k: "01",
                t: "Présenter clairement",
                d: "Votre activité, vos services, vos zones — sans détour.",
              },
              {
                k: "02",
                t: "Rassurer les prospects",
                d: "Codes, photos, preuves : le site doit donner envie d'appeler.",
              },
              {
                k: "03",
                t: "Tenir dans le temps",
                d: "Une base saine pour grandir : SEO, maintenance, évolutions.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.k}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.08 }}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  {c.k}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-white sm:text-xl">
                  {c.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {c.d}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition-all hover:bg-white hover:text-slate-950"
            >
              Découvrir l'agence <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
