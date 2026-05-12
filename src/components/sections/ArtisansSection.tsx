import Link from "next/link";
import { ArrowRight, Hammer } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const TARGETS = [
  "Couvreurs",
  "Plombiers",
  "Électriciens",
  "Peintres",
  "Menuisiers",
  "Paysagistes",
  "Entreprises de nettoyage",
  "Commerces",
  "Prestataires locaux",
];

export function ArtisansSection() {
  return (
    <Section variant="dark" className="grain">
      <div className="halo -top-32 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-white/10" />
      <div className="halo -bottom-40 right-0 h-80 w-80 rounded-full bg-white/[0.06]" />
      <div className="grid-faint-dark absolute inset-0 opacity-50" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="chip-dark">
            <Hammer className="h-3.5 w-3.5 text-white/85" /> Artisans & entreprises locales
          </span>
          <h2 className="heading-display mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">
            Un site vitrine pour <span className="gradient-text-on-dark">artisans et entreprises locales</span>
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
            Pour un artisan, un indépendant ou une entreprise locale, un site vitrine permet
            de rassurer les prospects avant le premier contact. Il centralise les
            informations essentielles : prestations, photos, coordonnées, zones
            d'intervention et formulaire de demande.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {TARGETS.map((t) => (
              <span key={t} className="chip-dark">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/site-internet-artisan-montauban" className="btn-primary">
              Site internet pour artisan <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/secteurs" className="btn-ghost-dark">
              Voir les secteurs accompagnés
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="ring-gradient relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-800 p-1">
              <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg,#0A0A0A 0%,#141414 60%,#1F1F1F 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(255,255,255,0.10),transparent),radial-gradient(60%_60%_at_80%_80%,rgba(255,255,255,0.06),transparent)]" />
                <div className="absolute inset-x-6 top-6 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                  <div className="h-2 w-12 rounded-full bg-white/40" />
                  <div className="mt-2 h-2 w-24 rounded-full bg-white/80" />
                </div>
                <div className="absolute inset-x-6 top-24 grid gap-2.5">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="text-xs font-medium uppercase tracking-wider text-white/85">
                      Prestations
                    </div>
                    <div className="mt-2 h-2 w-32 rounded-full bg-white/60" />
                    <div className="mt-1.5 h-2 w-24 rounded-full bg-white/30" />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="text-xs font-medium uppercase tracking-wider text-white/85">
                      Zones d'intervention
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {["Montauban", "Castelsarrasin", "Moissac", "Caussade", "Montech"].map(
                        (z) => (
                          <span
                            key={z}
                            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/85"
                          >
                            {z}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <div className="text-xs font-medium uppercase tracking-wider text-white/90">
                      Demande de devis
                    </div>
                    <div className="mt-3 h-9 rounded-xl bg-white/85" />
                    <div className="mt-2 h-9 rounded-xl bg-white/55" />
                    <div className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-white py-2 text-[11px] font-medium text-slate-950">
                      Envoyer ma demande
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
