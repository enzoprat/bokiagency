import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Mentions légales | Boki Agency",
  description: "Mentions légales du site Boki Agency.",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/mentions-legales", label: "Mentions légales" }]} />
      <Section>
        <article className="prose prose-slate mx-auto max-w-3xl pt-4">
          <h1 className="heading-display text-4xl text-slate-950 sm:text-5xl">
            Mentions légales
          </h1>
          <p className="mt-5 text-slate-600">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du
            21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous
            portons à la connaissance des utilisateurs et visiteurs du site les
            informations suivantes.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Éditeur du site
          </h2>
          <p className="text-slate-700">
            Nom commercial : Boki Agency<br />
            Identité juridique : [À compléter]<br />
            Adresse : [À compléter]<br />
            Email : contact@bokiagency.fr<br />
            Téléphone : [À compléter]<br />
            SIRET : [À compléter]<br />
            Responsable de la publication : [À compléter]
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Hébergeur
          </h2>
          <p className="text-slate-700">
            Le site est hébergé par : [À compléter — généralement Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA].
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Propriété intellectuelle
          </h2>
          <p className="text-slate-700">
            L'ensemble du contenu de ce site (textes, images, vidéos, logos, marques) est
            protégé par les lois relatives à la propriété intellectuelle. Toute
            reproduction, représentation ou diffusion, totale ou partielle, sans
            autorisation expresse de Boki Agency, est interdite.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Responsabilité
          </h2>
          <p className="text-slate-700">
            Les informations diffusées sur ce site sont présentées à titre indicatif et
            sans garantie. Boki Agency ne pourra être tenue responsable des erreurs ou
            omissions, ni de l'utilisation faite de ces informations par des tiers.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Contact
          </h2>
          <p className="text-slate-700">
            Pour toute question relative aux mentions légales : contact@bokiagency.fr.
          </p>
        </article>
      </Section>
    </>
  );
}
