"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const BEFORE = [
  "Informations dispersées sur Facebook & Insta",
  "Peu de demandes qualifiées",
  "Aucun support pro à partager",
  "Manque de crédibilité immédiate",
  "Dépendance totale aux algos sociaux",
];
const AFTER = [
  "Présentation claire & structurée",
  "Formulaire dédié + boutons d'appel",
  "Lien partageable, mémorisable",
  "Crédibilité instantanée pour les prospects",
  "Base SEO durable qui travaille pour vous 24/7",
];

export function BeforeAfterSection() {
  const reduced = useReducedMotion();
  const [view, setView] = useState<"before" | "after">("after");

  return (
    <Section>
      <div className="grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
            Le contraste
          </span>
          <h2 className="heading-display mt-5 text-4xl text-slate-950 sm:text-5xl lg:text-6xl">
            Le même métier.{" "}
            <span className="gradient-text italic">Pas la même perception.</span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600">
            Cliquez pour comparer. Côté gauche, une présence dispersée. Côté
            droit, un site qui fait le travail.
          </p>
        </div>

        {/* Toggle */}
        <div className="lg:col-span-5 lg:justify-self-end">
          <div className="inline-flex items-center rounded-full border border-slate-950/10 bg-white p-1 text-sm font-medium shadow-soft">
            <button
              type="button"
              onClick={() => setView("before")}
              className={`relative rounded-full px-5 py-2.5 transition-colors ${
                view === "before"
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {view === "before" && (
                <motion.span
                  layoutId="ba-toggle"
                  className="absolute inset-0 rounded-full bg-slate-950"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative">Sans site</span>
            </button>
            <button
              type="button"
              onClick={() => setView("after")}
              className={`relative rounded-full px-5 py-2.5 transition-colors ${
                view === "after"
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {view === "after" && (
                <motion.span
                  layoutId="ba-toggle"
                  className="absolute inset-0 rounded-full bg-slate-950"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative">Avec Boki Agency</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stage */}
      <div className="relative mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Visual mockup */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl lg:col-span-7">
          <AnimatePresence mode="wait">
            {view === "before" ? (
              <motion.div
                key="before"
                initial={reduced ? undefined : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full w-full bg-surface"
              >
                {/* Désordre : icônes sociales éparpillées */}
                <div className="grid-faint absolute inset-0 opacity-60" />
                <div className="absolute left-[8%] top-[12%] rotate-[-6deg] rounded-2xl border border-slate-950/10 bg-white p-3 shadow-soft">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Instagram
                  </div>
                  <div className="mt-1 h-2 w-24 rounded-full bg-slate-300" />
                </div>
                <div className="absolute right-[10%] top-[20%] rotate-[5deg] rounded-2xl border border-slate-950/10 bg-white p-3 shadow-soft">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Facebook
                  </div>
                  <div className="mt-1 h-2 w-20 rounded-full bg-slate-300" />
                </div>
                <div className="absolute left-[15%] bottom-[18%] rotate-[3deg] rounded-2xl border border-slate-950/10 bg-white p-3 shadow-soft">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Google reviews
                  </div>
                  <div className="mt-1 h-2 w-16 rounded-full bg-slate-300" />
                </div>
                <div className="absolute right-[18%] bottom-[14%] rotate-[-4deg] rounded-2xl border border-slate-950/10 bg-white p-3 shadow-soft">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    SMS / Bouche à oreille
                  </div>
                  <div className="mt-1 h-2 w-28 rounded-full bg-slate-300" />
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="rounded-full bg-slate-950/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Présence dispersée
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={reduced ? undefined : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="ring-gradient relative h-full w-full overflow-hidden rounded-3xl bg-ink-900 shadow-glow"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg,#0A0A0A 0%,#141414 60%,#1F1F1F 100%)",
                  }}
                />
                <div className="grid-faint-dark absolute inset-0 opacity-40" />
                <div className="absolute inset-x-0 top-0 flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-2 truncate text-[11px] text-white/60">
                    bokiagency.fr
                  </span>
                </div>
                <div className="absolute inset-x-10 top-16">
                  <div className="h-3 w-32 rounded-full bg-white/30" />
                  <div className="mt-3 h-7 w-3/4 rounded-full bg-white/85" />
                  <div className="mt-2 h-7 w-1/2 rounded-full bg-white/55" />
                  <div className="mt-5 flex gap-2">
                    <div className="h-9 w-32 rounded-full bg-white" />
                    <div className="h-9 w-28 rounded-full border border-white/30" />
                  </div>
                </div>
                <div className="absolute inset-x-10 bottom-10 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-24 rounded-2xl border border-white/10 bg-white/5"
                    />
                  ))}
                </div>
                <div className="absolute right-6 top-20 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-950">
                  <span className="live-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-slate-950 text-slate-950" />
                  Demande reçue
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* List */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.ul
              key={view}
              initial={reduced ? undefined : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              {(view === "before" ? BEFORE : AFTER).map((line, i) => (
                <li
                  key={line}
                  className={`flex items-start gap-4 rounded-2xl px-5 py-4 ${
                    view === "before"
                      ? "border border-slate-950/[0.06] bg-white text-slate-700"
                      : "bg-slate-950 text-white"
                  }`}
                >
                  <span
                    className={`mt-0.5 inline-grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                      view === "before"
                        ? "bg-slate-950/[0.06] text-slate-700"
                        : "bg-white text-slate-950"
                    }`}
                  >
                    {view === "before" ? "—" : "✓"}
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider opacity-50">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-0.5 text-sm font-medium sm:text-base">
                      {line}
                    </div>
                  </div>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
