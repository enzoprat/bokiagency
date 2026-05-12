import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

const COLS = [
  {
    title: "Services",
    links: [
      { href: "/creation-site-internet-montauban", label: "Création site internet" },
      { href: "/services/site-vitrine-montauban", label: "Site vitrine" },
      { href: "/services/site-ecommerce-shopify-montauban", label: "Shopify" },
      { href: "/services/click-and-collect-montauban", label: "Click & collect" },
      { href: "/services/refonte-site-internet-montauban", label: "Refonte" },
    ],
  },
  {
    title: "Zones",
    links: [
      { href: "/creation-site-internet-montauban", label: "Montauban" },
      { href: "/creation-site-internet-castelsarrasin", label: "Castelsarrasin" },
      { href: "/creation-site-internet-moissac", label: "Moissac" },
      { href: "/creation-site-internet-caussade", label: "Caussade" },
      { href: "/creation-site-internet-montech", label: "Montech" },
      { href: "/creation-site-internet-valence-dagen", label: "Valence d'Agen" },
      { href: "/creation-site-internet-beaumont-de-lomagne", label: "Beaumont-de-Lomagne" },
      { href: "/creation-site-internet-tarn-et-garonne", label: "Tarn-et-Garonne (82)" },
    ],
  },
  {
    title: "Métiers",
    links: [
      { href: "/site-internet-artisan-montauban", label: "Artisans" },
      { href: "/site-internet-couvreur-montauban", label: "Couvreurs" },
      { href: "/site-internet-plombier-montauban", label: "Plombiers" },
      { href: "/site-internet-electricien-montauban", label: "Électriciens" },
      { href: "/site-internet-paysagiste-montauban", label: "Paysagistes" },
      { href: "/site-internet-restaurant-montauban", label: "Restaurants" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/guides", label: "Guides" },
      { href: "/secteurs", label: "Secteurs" },
      { href: "/tarifs-creation-site-internet", label: "Tarifs" },
      { href: "/a-propos", label: "À propos" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="grain relative isolate mt-24 overflow-hidden bg-ink-900 text-white">
      <div className="halo -top-32 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-white/10" />
      <div className="halo -bottom-40 right-0 h-80 w-80 rounded-full bg-white/[0.06]" />
      <div className="grid-faint-dark absolute inset-0 opacity-40" />

      <div className="container-tight relative z-10 pt-20">
        {/* CTA hook + email */}
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="chip-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Discutons
            </span>
            <h2 className="heading-display mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">
              Une idée précise ?{" "}
              <span className="italic text-white/60">Une intuition floue ?</span>{" "}
              <span className="gradient-text-on-dark">On en parle.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 lg:col-span-5 lg:items-end lg:justify-center">
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-baseline gap-2 font-display text-2xl font-semibold text-white sm:text-3xl"
            >
              <span className="relative inline-block">
                {SITE.email}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-white transition-transform duration-500 group-hover:scale-x-0" />
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-all hover:gap-3"
            >
              Démarrer un projet <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-white/85 transition-colors hover:text-white"
                    >
                      <span className="relative">
                        {l.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Coordinates row */}
        <div className="grid gap-6 border-t border-white/10 py-10 text-sm text-white/70 sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-white"
            >
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Montauban — Tarn-et-Garonne — 82
          </div>
          <div className="flex items-center gap-2">
            <span className="live-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-white text-white" />
            Disponible pour de nouveaux projets
          </div>
        </div>

        {/* Légal row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 py-6 text-xs text-white/55">
          <Link href="/mentions-legales" className="hover:text-white">
            Mentions légales
          </Link>
          <Link href="/politique-confidentialite" className="hover:text-white">
            Politique de confidentialité
          </Link>
          <Link href="/conditions-de-prestation" className="hover:text-white">
            Conditions de prestation
          </Link>
        </div>
      </div>

      {/* Massive brand signature — bleed full viewport */}
      <div className="relative z-10 overflow-hidden">
        <div className="container-tight pt-6 pb-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} — Tous droits réservés
          </span>
        </div>
        <h2
          aria-hidden="true"
          className="display-mega heading-display select-none whitespace-nowrap text-center font-bold leading-none text-white"
          style={{
            fontSize: "clamp(4rem, 23vw, 22rem)",
            letterSpacing: "-0.06em",
            marginBottom: "-0.18em",
          }}
        >
          BOKI<span className="italic text-white/30"> AGENCY</span>
        </h2>
      </div>
    </footer>
  );
}
