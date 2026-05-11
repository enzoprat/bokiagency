"use client";

import {
  Compass,
  LayoutDashboard,
  Palette,
  Code2,
  Search,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  {
    icon: Compass,
    title: "Analyse du besoin",
    text: "Comprendre l'activité, les objectifs, les services, les cibles et les éléments disponibles.",
  },
  {
    icon: LayoutDashboard,
    title: "Architecture du site",
    text: "Structurer les pages, les sections, les appels à l'action et le parcours utilisateur.",
  },
  {
    icon: Palette,
    title: "Design & expérience",
    text: "Créer une interface moderne, claire, responsive et cohérente avec l'image de l'entreprise.",
  },
  {
    icon: Code2,
    title: "Intégration responsive",
    text: "Développer un site propre, rapide et agréable sur mobile, tablette et ordinateur.",
  },
  {
    icon: Search,
    title: "SEO technique de base",
    text: "Préparer balises, structure, contenus, performances et éléments nécessaires à l'indexation.",
  },
  {
    icon: Rocket,
    title: "Mise en ligne",
    text: "Accompagner la connexion au domaine, la publication et les derniers réglages.",
  },
  {
    icon: TrendingUp,
    title: "Évolutions possibles",
    text: "Faire évoluer le site après la livraison : pages, maintenance, optimisations.",
  },
];

export function MethodSection() {
  const reduced = useReducedMotion();

  return (
    <Section id="methode" variant="surface">
      <SectionHeader
        eyebrow="Méthode"
        title={
          <>
            Une méthode claire pour créer un site{" "}
            <span className="gradient-text">utile, pas seulement esthétique</span>
          </>
        }
        description="7 étapes pensées pour transformer une idée en site concret, durable et capable de générer des demandes."
      />

      {/* Timeline */}
      <div className="relative mx-auto mt-16 max-w-3xl">
        {/* Ligne verticale (mobile : à gauche, desktop : centrée) */}
        <div
          aria-hidden="true"
          className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-slate-950/15 via-slate-950/15 to-transparent sm:left-1/2 sm:-translate-x-1/2"
        />

        <ol className="space-y-8 sm:space-y-12">
          {STEPS.map((s, i) => {
            const isRight = i % 2 === 1;
            return (
              <motion.li
                key={s.title}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid grid-cols-[2.5rem_1fr] gap-4 sm:grid-cols-2 sm:gap-10"
              >
                {/* Pastille numérotée + icône */}
                <div
                  className={`relative z-10 ${
                    isRight ? "sm:order-2 sm:justify-self-start" : "sm:justify-self-end"
                  } sm:col-start-1 ${isRight ? "sm:col-start-2" : ""}`}
                >
                  <div
                    className={`flex items-center gap-3 ${
                      isRight ? "" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-950 text-white shadow-soft ring-4 ring-white">
                      <s.icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="hidden text-xs font-semibold uppercase tracking-wider text-slate-500 sm:inline-block">
                      Étape {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Carte contenu */}
                <div
                  className={`min-w-0 ${
                    isRight ? "sm:col-start-1 sm:text-right" : "sm:col-start-2"
                  }`}
                >
                  <div
                    className={`card group relative p-5 transition-all hover:border-slate-950/30 hover:shadow-soft sm:p-6 ${
                      isRight ? "sm:ml-auto" : ""
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 sm:hidden">
                      Étape {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold text-slate-950 sm:mt-0 sm:text-lg">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {s.text}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
