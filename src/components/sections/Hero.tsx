"use client";

import Link from "next/link";
import {
  ArrowRight,
  Play,
  Globe,
  ShoppingBag,
  Store,
  Smartphone,
  Mail,
  Search,
  Star,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Tilt } from "@/components/ui/Tilt";
import { Marquee } from "@/components/ui/Marquee";
import { MagneticButton } from "@/components/ui/MagneticButton";

const FLOATING_BADGES = [
  { icon: Globe, label: "Site vitrine", style: "left-[-2%] top-[12%] sm:left-[-4%]" },
  { icon: ShoppingBag, label: "Shopify", style: "right-[-2%] top-[6%] sm:right-[-4%]" },
  { icon: Store, label: "Click & collect", style: "left-[2%] bottom-[18%] sm:left-[-2%]" },
  { icon: Smartphone, label: "Mobile first", style: "right-[2%] bottom-[10%] sm:right-[-3%]" },
  { icon: Mail, label: "Formulaire", style: "left-[40%] -top-3 sm:left-[42%]" },
  { icon: Search, label: "SEO local", style: "right-[34%] bottom-[-2%]" },
];

const MARQUEE_WORDS = [
  "Sites vitrines",
  "E-commerce Shopify",
  "Click & collect",
  "Refonte de site",
  "SEO local Montauban",
  "Mobile first",
  "Tarn-et-Garonne",
  "Landing pages",
  "Maintenance",
];

export function Hero() {
  const reduced = useReducedMotion();

  const lineAnim = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 22, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: {
      duration: 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section className="grain relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      {/* Halos */}
      <div className="halo -top-24 left-1/2 h-[26rem] w-[60%] -translate-x-1/2 rounded-full bg-slate-950/15 animate-pulseGlow" />
      <div className="halo top-40 -right-20 h-80 w-80 rounded-full bg-slate-950/10" />
      <div className="halo top-72 -left-20 h-72 w-72 rounded-full bg-slate-950/[0.07]" />
      <div className="grid-faint absolute inset-0 opacity-70" />

      <div className="container-tight relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur"
          >
            <span className="live-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-slate-950 text-slate-950" />
            Agence web — Montauban & Tarn-et-Garonne
          </motion.div>

          {/* Titre oversized avec reveal mot par mot */}
          <h1 className="display-mega heading-display mt-6 text-[clamp(2.6rem,7vw,5.75rem)]">
            <motion.span className="inline-block" {...lineAnim(0.08)}>
              Sites internet
            </motion.span>{" "}
            <motion.span className="inline-block" {...lineAnim(0.18)}>
              qui font
            </motion.span>
            <br />
            <motion.span className="inline-block italic" {...lineAnim(0.28)}>
              vendre.
            </motion.span>{" "}
            <motion.span className="inline-block gradient-text" {...lineAnim(0.34)}>
              rassurer.
            </motion.span>{" "}
            <motion.span className="inline-block" {...lineAnim(0.4)}>
              durer.
            </motion.span>
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Boki Agency conçoit des sites vitrines, e-commerce et click & collect
            pensés pour présenter votre activité, rassurer vos clients et générer
            plus de demandes à <strong className="text-slate-900">Montauban</strong> et dans le
            <strong className="text-slate-900"> Tarn-et-Garonne</strong>.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <MagneticButton href="/contact" className="rounded-full">
              <span className="btn-primary">
                Demander mon site <ArrowRight className="h-4 w-4" />
              </span>
            </MagneticButton>
            <Link href="/realisations" className="btn-secondary">
              <Play className="h-4 w-4" /> Voir les réalisations
            </Link>
          </motion.div>
        </div>

        {/* Mockup */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 max-w-5xl"
        >
          <Tilt max={5} className="relative aspect-[16/10] w-full">
            {/* Desktop frame */}
            <div className="ring-gradient absolute inset-0 rounded-3xl bg-white shadow-glow">
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div
                  className="absolute inset-0 opacity-95"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #0A0A0A 0%, #141414 40%, #1F1F1F 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_30%_20%,rgba(255,255,255,0.10),transparent),radial-gradient(50%_50%_at_80%_80%,rgba(255,255,255,0.06),transparent),radial-gradient(40%_50%_at_60%_50%,rgba(255,255,255,0.04),transparent)]" />
                {/* Browser top bar */}
                <div className="absolute inset-x-0 top-0 flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-2 truncate text-[11px] text-white/60">
                    bokiagency.fr/creation-site-internet-montauban
                  </span>
                </div>
                <div className="absolute inset-x-8 top-16 sm:inset-x-12">
                  <div className="h-2.5 w-28 rounded-full bg-white/30" />
                  <div className="mt-3 h-6 w-72 max-w-[80%] rounded-full bg-white/85" />
                  <div className="mt-2 h-6 w-52 max-w-[70%] rounded-full bg-white/55" />
                  <div className="mt-5 flex gap-2">
                    <div className="h-8 w-32 rounded-full bg-white" />
                    <div className="h-8 w-28 rounded-full border border-white/30 bg-white/10" />
                  </div>
                </div>
                <div className="absolute inset-x-8 bottom-8 grid grid-cols-3 gap-3 sm:inset-x-12">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-28 rounded-2xl border border-white/10 bg-white/5 backdrop-blur sm:h-32"
                    >
                      <div className="m-3 h-2 w-12 rounded-full bg-white/40" />
                      <div className="mx-3 mt-2 h-2 w-20 rounded-full bg-white/25" />
                      <div className="mx-3 mt-1 h-2 w-14 rounded-full bg-white/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile mockup (overlap) */}
            <div className="absolute -bottom-8 right-2 hidden w-40 rotate-[6deg] sm:block sm:right-6 sm:w-48">
              <div className="ring-gradient rounded-[2rem] bg-white p-2 shadow-glowViolet">
                <div className="aspect-[9/19] overflow-hidden rounded-[1.5rem] bg-slate-950 p-3">
                  <div className="h-full rounded-[1.2rem] bg-ink-900 p-3 backdrop-blur">
                    <div className="h-2 w-12 rounded-full bg-white/50" />
                    <div className="mt-2 h-3 w-24 rounded-full bg-white/85" />
                    <div className="mt-1 h-3 w-20 rounded-full bg-white/40" />
                    <div className="mt-3 grid gap-2">
                      <div className="h-10 rounded-xl bg-white/10" />
                      <div className="h-10 rounded-xl bg-white/10" />
                      <div className="h-10 rounded-xl bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification "Nouvelle demande reçue" */}
            <motion.div
              initial={reduced ? false : { opacity: 0, x: -20, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-3 bottom-6 hidden md:flex sm:-left-6 lg:bottom-12"
            >
              <div className="flex items-start gap-3 rounded-2xl border border-slate-950/[0.06] bg-white/95 p-3.5 pr-4 shadow-soft backdrop-blur">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-950 text-white">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    <span className="live-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-slate-950 text-slate-950" />
                    Nouvelle demande
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-slate-950">
                    Site vitrine — Montauban
                  </div>
                </div>
              </div>
            </motion.div>

            {FLOATING_BADGES.map((b) => (
              <motion.div
                key={b.label}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + Math.random() * 0.4 }}
                className={`absolute ${b.style} hidden md:flex`}
              >
                <span className="inline-flex animate-floaty items-center gap-1.5 rounded-full border border-slate-950/10 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-900 shadow-soft backdrop-blur">
                  <b.icon className="h-3.5 w-3.5 text-slate-950" /> {b.label}
                </span>
              </motion.div>
            ))}
          </Tilt>
        </motion.div>
      </div>

      {/* Marquee bottom — bandeau premium */}
      <div className="relative z-10 mt-20 border-y border-slate-950/[0.08] bg-white/40 py-5 backdrop-blur">
        <Marquee speed={45}>
          {MARQUEE_WORDS.map((w, i) => (
            <div key={`a-${i}`} className="flex items-center gap-12">
              <span className="font-display text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {w}
              </span>
              <Star className="h-5 w-5 shrink-0 text-slate-950" strokeWidth={1.5} fill="currentColor" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
