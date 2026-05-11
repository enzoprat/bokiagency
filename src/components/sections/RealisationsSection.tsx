"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { REALISATIONS } from "@/lib/data/realisations";
import { RealisationCard } from "@/components/ui/RealisationCard";

export function RealisationsSection({
  limit,
  title,
}: {
  limit?: number;
  title?: React.ReactNode;
}) {
  const items = limit ? REALISATIONS.slice(0, limit) : REALISATIONS;
  const reduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.scrollWidth);
      if (typeof window !== "undefined") setViewportW(window.innerWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items.length]);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(trackWidth - viewportW + 80)]
  );

  return (
    <section
      id="realisations"
      className="relative isolate overflow-hidden bg-surface py-20 sm:py-24"
    >
      {/* Mobile + tablet : grille verticale */}
      <div className="container-tight lg:hidden">
        <div className="flex flex-col items-start justify-between gap-6">
          <div>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
              Réalisations
            </span>
            <h2 className="heading-display mt-5 text-4xl text-slate-950 sm:text-5xl">
              {title || (
                <>
                  Des projets qui{" "}
                  <span className="gradient-text italic">parlent.</span>
                </>
              )}
            </h2>
          </div>
        </div>

        {/* Carousel mobile snap */}
        <div className="mt-12 -mx-5 sm:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {items.map((r) => (
              <div key={r.slug} className="w-[82%] shrink-0 snap-start">
                <RealisationCard r={r} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet grid */}
        <div className="mt-12 hidden gap-6 sm:grid sm:grid-cols-2">
          {items.map((r) => (
            <RealisationCard key={r.slug} r={r} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-all hover:gap-3"
          >
            Voir toutes les réalisations <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Desktop : sticky horizontal scroll */}
      <div
        ref={wrapRef}
        className="hidden lg:block"
        style={{ height: `${Math.max(items.length * 70, 250)}vh` }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="container-tight">
            <div className="flex items-end justify-between gap-6 pb-10">
              <div>
                <span className="chip">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                  Réalisations — scroll horizontal
                </span>
                <h2 className="heading-display mt-5 text-4xl text-slate-950 lg:text-6xl">
                  {title || (
                    <>
                      Des projets qui{" "}
                      <span className="gradient-text italic">parlent.</span>
                    </>
                  )}
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-bold leading-none tracking-tighter text-slate-950 lg:text-6xl">
                  {String(items.length).padStart(2, "0")}
                </span>
                <span className="max-w-[10ch] text-xs font-semibold uppercase tracking-wider text-slate-600">
                  projets
                  <br />
                  livrés
                </span>
                <Link
                  href="/realisations"
                  className="ml-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-all hover:gap-3"
                >
                  Voir tout <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Track */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              ref={trackRef}
              style={reduced ? undefined : { x }}
              className="flex w-max items-stretch gap-6 px-12"
            >
              {items.map((r) => (
                <div
                  key={r.slug}
                  className="w-[460px] shrink-0 xl:w-[500px]"
                >
                  <RealisationCard r={r} />
                </div>
              ))}
              <div className="flex w-[460px] shrink-0 items-center xl:w-[500px]">
                <Link
                  href="/realisations"
                  className="card group flex h-full w-full flex-col justify-between p-8"
                >
                  <span className="chip">+ {REALISATIONS.length - items.length >= 0 ? REALISATIONS.length : 0} autres</span>
                  <div>
                    <h3 className="heading-display text-3xl text-slate-950 sm:text-4xl">
                      Voir toutes les{" "}
                      <span className="gradient-text">réalisations</span>
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      Explorez l'ensemble des projets livrés par Boki Agency.
                    </p>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Hint */}
          <div className="container-tight pt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Continuez à scroller — les projets défilent horizontalement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
