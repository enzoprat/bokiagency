import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Boki Agency",
  description: "Politique de confidentialité du site Boki Agency.",
  alternates: { canonical: "/politique-confidentialite" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/politique-confidentialite", label: "Confidentialité" }]} />
      <Section>
        <article className="prose prose-slate mx-auto max-w-3xl pt-4">
          <h1 className="heading-display text-4xl text-slate-950 sm:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mt-5 text-slate-600">
            Cette politique décrit la manière dont Boki Agency collecte, utilise et protège
            les informations personnelles fournies par les visiteurs du site.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Données collectées
          </h2>
          <p className="text-slate-700">
            Lors de l'utilisation du formulaire de contact, les données suivantes peuvent
            être collectées : nom, entreprise, email, téléphone, type de projet, activité,
            message. Ces données sont utilisées uniquement dans le cadre du traitement de
            votre demande.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Utilisation des données
          </h2>
          <p className="text-slate-700">
            Les données ne sont pas partagées avec des tiers à des fins commerciales. Elles
            sont utilisées pour répondre à vos demandes et pour le suivi de la relation
            client.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Cookies & analytics
          </h2>
          <p className="text-slate-700">
            Le site peut utiliser des outils de mesure d'audience (Google Analytics 4,
            Microsoft Clarity, Google Search Console) afin d'améliorer son contenu et son
            ergonomie. Les données collectées sont anonymisées dans la mesure du possible.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Vos droits
          </h2>
          <p className="text-slate-700">
            Conformément à la réglementation en vigueur (RGPD), vous disposez d'un droit
            d'accès, de rectification, de suppression et d'opposition concernant vos
            données. Pour exercer ces droits : contact@bokiagency.fr.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Conservation
          </h2>
          <p className="text-slate-700">
            Les données sont conservées pendant la durée nécessaire au traitement des
            demandes et conformément aux obligations légales applicables.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Contact
          </h2>
          <p className="text-slate-700">
            Pour toute question relative à cette politique : contact@bokiagency.fr.
          </p>
        </article>
      </Section>
    </>
  );
}
