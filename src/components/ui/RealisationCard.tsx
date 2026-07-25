"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Realisation } from "@/lib/data/realisations";
import { Spotlight } from "@/components/ui/Spotlight";

export function RealisationCard({ r }: { r: Realisation }) {
  return (
    <article className="card card-hover group relative">
      <Spotlight intensity={0.07} />
      <Link
        href={r.href}
        className="absolute inset-0 z-10 focus:outline-none"
        aria-label={`Voir la réalisation ${r.name}`}
      />
      <div
        className="relative aspect-[16/10] overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, ${r.palette.from}, ${r.palette.to})`,
          }}
        />
        <Image
          src={r.image}
          alt={`Aperçu du site ${r.name} réalisé par Boki Agency`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-slate-900 shadow-soft">
          {r.category}
        </div>

        {/* Overlay révélé au hover */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 shadow-glow">
            Voir le projet <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-slate-950 transition-colors sm:text-xl">
          {r.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
          {r.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-950 transition-all group-hover:gap-2">
            <span className="relative inline-block">
              Voir le projet
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-slate-950 transition-transform duration-500 group-hover:scale-x-100" />
            </span>
            <ArrowUpRight className="ml-1 inline h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <a
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 inline-flex items-center gap-1 text-slate-500 hover:text-slate-950"
          >
            Site live <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
