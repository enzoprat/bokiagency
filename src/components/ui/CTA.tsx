import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA({
  title = "On vous lance ?",
  description = "Présentez-nous votre activité, vos objectifs et vos contraintes : on construit ensemble la bonne approche.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink-900 py-28 text-white sm:py-36 lg:py-44">
      <div className="halo -top-32 left-1/2 h-80 w-[70%] -translate-x-1/2 rounded-full bg-white/12" />
      <div className="halo -bottom-40 right-10 h-80 w-80 rounded-full bg-white/[0.07]" />
      <div className="grid-faint-dark absolute inset-0 opacity-50" />

      <div className="container-tight relative z-10 text-center">
        <span className="chip-dark">
          <span className="live-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-white text-white" />
          On parle ?
        </span>

        <h2 className="display-mega heading-display mx-auto mt-7 max-w-5xl text-[clamp(3rem,10vw,9rem)] text-white">
          {title}
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          {description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-medium text-slate-950 transition-all hover:gap-3"
          >
            Démarrer un projet
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-medium text-white/90 transition-all hover:bg-white/10"
          >
            Voir d'abord les réalisations
          </Link>
        </div>

        <p className="mt-12 text-xs uppercase tracking-[0.3em] text-white/40">
          Réponse sous 48h ouvrées · Montauban · Tarn-et-Garonne · 82
        </p>
      </div>
    </section>
  );
}
