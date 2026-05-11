import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { href: "/contact", label: "Demander mon site" },
  secondaryCta,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-10 sm:pt-12 lg:pb-20">
      <div className="halo -top-20 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-slate-950/10" />
      <div className="halo top-32 -right-20 h-80 w-80 rounded-full bg-slate-950/[0.06]" />
      <div className="grid-faint absolute inset-0 opacity-60" />
      <div className="container-tight relative z-10">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="chip border-indigo-600/15 bg-indigo-50 text-indigo-700">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> {eyebrow}
            </span>
          )}
          <h1 className="heading-display mt-5 text-4xl text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label} <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
