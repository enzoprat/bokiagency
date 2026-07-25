import { Star, Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  TESTIMONIALS,
  TESTIMONIALS_AGGREGATE,
  GOOGLE_REVIEWS_URL,
} from "@/lib/data/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "h-4 w-4 fill-amber-400 text-amber-400"
              : "h-4 w-4 text-slate-300"
          }
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <Section variant="surface">
      <SectionHeader
        eyebrow="Avis clients"
        title={
          <>
            Ils ont fait confiance à <span className="gradient-text">Boki Agency</span>
          </>
        }
        description="Des avis réels laissés par des professionnels accompagnés à Montauban et dans le Tarn-et-Garonne."
      />

      <div className="mt-6 flex items-center gap-3">
        <Stars rating={5} />
        <span className="text-sm font-medium text-slate-700">
          {TESTIMONIALS_AGGREGATE.rating.toFixed(1)} / 5
        </span>
        <span className="text-sm text-slate-500">
          ({TESTIMONIALS_AGGREGATE.count} avis Google)
        </span>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.author} className="card relative flex flex-col p-6">
            <Quote className="h-6 w-6 text-indigo-600/30" aria-hidden="true" />
            <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-700">
              {t.text}
            </blockquote>
            <figcaption className="mt-5 flex items-center justify-between">
              <span className="font-display text-sm font-semibold text-slate-950">
                {t.author}
              </span>
              <Stars rating={t.rating} />
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-700 hover:underline"
        >
          Voir tous les avis sur Google
        </a>
      </div>
    </Section>
  );
}
