"use client";

import { Wrench, Server, FilePlus2, RefreshCw } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ITEMS = [
  {
    icon: Wrench,
    title: "Maintenance",
    text: "Mises à jour techniques, corrections, suivi régulier selon le besoin.",
  },
  {
    icon: Server,
    title: "Hébergement",
    text: "Accompagnement à l'hébergement et suivi technique.",
  },
  {
    icon: FilePlus2,
    title: "Modifications",
    text: "Ajustements, contenus et nouvelles pages en supplément.",
  },
  {
    icon: RefreshCw,
    title: "Évolutions",
    text: "Faire évoluer le site avec votre activité au fil du temps.",
  },
];

export function MaintenanceSection() {
  const reduced = useReducedMotion();

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
              Après la livraison
            </span>
            <h2 className="heading-display mt-5 text-4xl text-slate-950 sm:text-5xl lg:text-6xl">
              Le site{" "}
              <span className="italic">vit</span>{" "}
              <span className="gradient-text">avec vous.</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-slate-600">
              Après la livraison, on peut prévoir un accompagnement pour
              maintenir, modifier, ajouter des pages ou faire évoluer la
              présence en ligne.
            </p>
            <p className="mt-5 max-w-md text-sm text-slate-500">
              Les offres de maintenance sont définies selon les besoins du
              projet.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-950 transition-all hover:gap-3"
            >
              Discuter d'un suivi <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {ITEMS.map((it, i) => (
              <motion.div
                key={it.title}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-1 sm:p-8 ${
                  i % 3 === 0
                    ? "bg-slate-950 text-white"
                    : "border border-slate-950/10 bg-white text-slate-950 hover:shadow-soft"
                } ${i === 0 ? "sm:row-span-2" : ""}`}
              >
                {i % 3 === 0 && (
                  <div className="halo -bottom-20 -right-10 h-40 w-40 rounded-full bg-white/10" />
                )}
                <div className="relative flex h-full flex-col">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl transition-transform group-hover:rotate-[-6deg] ${
                      i % 3 === 0
                        ? "bg-white text-slate-950"
                        : "bg-slate-950 text-white"
                    }`}
                  >
                    <it.icon className="h-5 w-5" />
                  </span>
                  <h3
                    className={`mt-auto pt-8 font-display font-semibold tracking-tight ${
                      i === 0
                        ? "text-3xl sm:text-4xl"
                        : "text-xl sm:text-2xl"
                    }`}
                  >
                    {it.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      i % 3 === 0 ? "text-white/70" : "text-slate-600"
                    }`}
                  >
                    {it.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
