import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Merci pour votre demande | Boki Agency",
  description:
    "Merci pour votre message. Votre demande a bien été transmise à Boki Agency. Un retour sera effectué rapidement.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/merci" },
};

export default function Page() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl pt-24 text-center">
        <Reveal>
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 text-white shadow-glow">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="heading-display mt-6 text-4xl text-slate-950 sm:text-5xl">
            Merci pour <span className="gradient-text">votre demande</span>
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Merci pour votre message. Votre demande a bien été transmise. Un retour
            sera effectué rapidement.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
            </Link>
            <a href={`mailto:${SITE.email}`} className="btn-secondary">
              <Mail className="h-4 w-4" /> Écrire par email
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
