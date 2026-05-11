"use client";

import {
  Building2,
  ImageIcon,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Camera,
  Link as LinkIcon,
  FileText,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

const ITEMS = [
  { icon: Building2, label: "Nom de l'entreprise", required: true },
  { icon: ImageIcon, label: "Logo", required: false },
  { icon: Mail, label: "Adresse mail", required: true },
  { icon: Phone, label: "Numéro de téléphone", required: false },
  { icon: Briefcase, label: "Services proposés", required: true },
  { icon: MapPin, label: "Zones d'intervention", required: false },
  { icon: Camera, label: "Photos de réalisations", required: false },
  {
    icon: LinkIcon,
    label: "Liens utiles : Instagram, Facebook, Google Business, ancien site",
    required: false,
  },
  { icon: FileText, label: "Textes existants si disponibles", required: false },
];

export function StartKitSection() {
  const reduced = useReducedMotion();

  return (
    <Section variant="dark" className="grain">
      <div className="halo -top-32 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-white/10" />
      <div className="grid-faint-dark absolute inset-0 opacity-40" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="chip-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Brief de démarrage
          </span>
          <h2 className="heading-display mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">
            Ce qu'on aura besoin pour{" "}
            <span className="gradient-text-on-dark italic">démarrer</span>{" "}
            ensemble
          </h2>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-white/70">
            Plus la matière de départ est claire, plus le site sera juste et
            rapide à construire. Pas de panique : si quelque chose vous manque,
            on regarde ensemble.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            03 éléments seulement sont indispensables
          </div>
        </div>

        {/* Editorial list */}
        <ol className="lg:col-span-7">
          {ITEMS.map((it, i) => (
            <motion.li
              key={it.label}
              initial={reduced ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-t border-white/10 py-4 transition-colors hover:bg-white/[0.04] sm:grid-cols-[4rem_2.5rem_1fr_auto] sm:gap-5 sm:py-5"
            >
              <span className="font-display text-xs font-semibold tracking-wider text-white/40 sm:text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/85 transition-all group-hover:border-white group-hover:bg-white group-hover:text-slate-950">
                <it.icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-white sm:text-base">
                {it.label}
              </span>
              {it.required && (
                <span className="hidden rounded-full border border-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/85 sm:inline-flex">
                  Indispensable
                </span>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
