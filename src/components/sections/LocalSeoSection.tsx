"use client";

import {
  Smartphone,
  ImageIcon,
  MapPin,
  ShieldCheck,
  Search,
  MessageSquare,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

const POINTS = [
  {
    n: "01",
    icon: Search,
    title: "Présence en ligne claire",
    text: "Un site permet de présenter votre activité, vos services et vos zones d'intervention de façon structurée et lisible.",
  },
  {
    n: "02",
    icon: Smartphone,
    title: "Mobile avant tout",
    text: "La majorité des recherches locales se font sur mobile. Un site mobile first transforme bien plus.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Confiance & crédibilité",
    text: "Un site soigné rassure les prospects avant le premier échange et crédibilise votre activité.",
  },
  {
    n: "04",
    icon: ImageIcon,
    title: "Photos qui valorisent",
    text: "Vos réalisations, votre équipe et vos prestations méritent une mise en valeur claire.",
  },
  {
    n: "05",
    icon: MessageSquare,
    title: "Formulaire & contact",
    text: "Centraliser les demandes via un formulaire clair simplifie la prise de contact pour le client.",
  },
  {
    n: "06",
    icon: MapPin,
    title: "Référencement local",
    text: "Un site bien structuré, associé à une fiche Google Business, renforce votre visibilité locale.",
  },
];

export function LocalSeoSection() {
  const reduced = useReducedMotion();

  return (
    <Section variant="surface" id="seo-local">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Sticky left column — bigger title + giant number */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <span className="chip border-slate-950/10 bg-white text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
              SEO local
            </span>
            <h2 className="heading-display mt-5 text-3xl text-slate-950 sm:text-4xl lg:text-5xl">
              Pourquoi créer un site internet professionnel à{" "}
              <span className="gradient-text italic">Montauban</span> ?
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-slate-600">
              À Montauban et dans le Tarn-et-Garonne, vos clients vous cherchent
              sur Google, les réseaux et leur fiche Google Business. Un site
              clair centralise tout ce qu'ils veulent vérifier avant de vous
              contacter.
            </p>

            <div className="mt-10 inline-flex items-baseline gap-3 border-l-2 border-slate-950 pl-5">
              <span className="font-display text-6xl font-bold leading-none tracking-tighter text-slate-950 sm:text-7xl">
                06
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                raisons<br />
                pour passer à l'action
              </span>
            </div>
          </div>
        </div>

        {/* Right list */}
        <ol className="space-y-8 lg:col-span-7 lg:space-y-12">
          {POINTS.map((p, i) => (
            <motion.li
              key={p.n}
              initial={reduced ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative grid grid-cols-[3.5rem_1fr] items-start gap-5 border-t border-slate-950/10 pt-8 first:border-t-0 first:pt-0 sm:grid-cols-[5rem_1fr] sm:gap-8"
            >
              <div>
                <div className="font-display text-3xl font-bold leading-none tracking-tighter text-slate-950 sm:text-5xl">
                  {p.n}
                </div>
                <span className="mt-3 grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-white transition-transform group-hover:rotate-[-6deg] sm:h-10 sm:w-10">
                  <p.icon className="h-4 w-4" />
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-slate-950 sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {p.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
