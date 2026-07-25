import Link from "next/link";
import { MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Marquee } from "@/components/ui/Marquee";

type Area = { name: string; href?: string };

// href renseigné uniquement pour les villes ayant une page dédiée :
// lien contextuel depuis la home (page la plus crawlée) vers les pages locales.
const ROW_A: Area[] = [
  { name: "Montauban", href: "/creation-site-internet-montauban" },
  { name: "Castelsarrasin", href: "/creation-site-internet-castelsarrasin" },
  { name: "Moissac", href: "/creation-site-internet-moissac" },
  { name: "Caussade", href: "/creation-site-internet-caussade" },
  { name: "Montech", href: "/creation-site-internet-montech" },
  { name: "Valence d'Agen", href: "/creation-site-internet-valence-dagen" },
  { name: "Beaumont-de-Lomagne", href: "/creation-site-internet-beaumont-de-lomagne" },
  { name: "Saint-Nicolas-de-la-Grave" },
  { name: "Verdun-sur-Garonne" },
  { name: "Grisolles" },
  { name: "Nègrepelisse" },
  { name: "Bressols" },
  { name: "Labastide-Saint-Pierre" },
];

const ROW_B: Area[] = [
  { name: "Lafrançaise" },
  { name: "Lauzerte" },
  { name: "Septfonds" },
  { name: "Montbeton" },
  { name: "Albias" },
  { name: "Saint-Étienne-de-Tulmont" },
  { name: "La Ville-Dieu-du-Temple" },
  { name: "Auvillar" },
  { name: "Lavit" },
  { name: "Golfech" },
  { name: "Donzac" },
  { name: "Toulouse" },
  { name: "Agen" },
];

export function AreasSection() {
  return (
    <Section variant="surface" className="!py-24 sm:!py-32">
      <div className="container-tight">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
              Zones desservies
            </span>
            <h2 className="heading-display mt-5 text-4xl text-slate-950 sm:text-5xl lg:text-6xl">
              Du{" "}
              <span className="italic">centre</span>{" "}
              de Montauban aux confins du{" "}
              <span className="gradient-text">82.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Boki Agency accompagne les professionnels à Montauban, dans le
              Tarn-et-Garonne, le 82 et à distance selon les besoins du projet.
            </p>
            <div className="mt-5 inline-flex items-baseline gap-3 border-l-2 border-slate-950 pl-4">
              <span className="font-display text-5xl font-bold leading-none tracking-tighter text-slate-950 sm:text-6xl">
                26
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                villes<br />
                actives
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dual marquee bleed */}
      <div className="mt-14 space-y-2 sm:space-y-3">
        <Marquee speed={60}>
          <div className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4">
            {ROW_A.map((z, i) => {
              const cls =
                "inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white px-5 py-3 text-base font-medium tracking-tight whitespace-nowrap text-slate-950 sm:text-lg";
              return z.href ? (
                <Link
                  key={`a-${i}`}
                  href={z.href}
                  className={`${cls} transition-colors hover:border-slate-950/40`}
                >
                  <MapPin className="h-4 w-4 text-slate-500" />
                  {z.name}
                </Link>
              ) : (
                <span key={`a-${i}`} className={cls}>
                  <MapPin className="h-4 w-4 text-slate-500" />
                  {z.name}
                </span>
              );
            })}
          </div>
        </Marquee>
        <Marquee speed={70} reverse>
          <div className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4">
            {ROW_B.map((z, i) => (
              <span
                key={`b-${i}`}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-base font-medium tracking-tight whitespace-nowrap sm:text-lg ${
                  i % 3 === 0
                    ? "bg-slate-950 text-white"
                    : "border border-slate-950/10 bg-white text-slate-950"
                }`}
              >
                <MapPin className="h-4 w-4 opacity-70" />
                {z.name}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </Section>
  );
}
