import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Page non trouvée | Boki Agency",
  description: "La page demandée est introuvable.",
};

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl pt-16 text-center">
        <Reveal>
          <span className="font-display text-6xl font-bold gradient-text sm:text-7xl">
            404
          </span>
          <h1 className="heading-display mt-6 text-3xl text-slate-950 sm:text-5xl">
            Cette page <span className="gradient-text">est introuvable</span>
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            La page que vous cherchez n'existe pas ou a été déplacée. Revenez à l'accueil
            ou explorez nos services.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              <Home className="h-4 w-4" /> Retour à l'accueil
            </Link>
            <Link href="/services" className="btn-secondary">
              <ArrowLeft className="h-4 w-4" /> Voir les services
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
