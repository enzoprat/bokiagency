import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Conditions de prestation | Boki Agency",
  description: "Conditions générales de prestation de Boki Agency.",
  alternates: { canonical: "/conditions-de-prestation" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/conditions-de-prestation", label: "Conditions" }]} />
      <Section>
        <article className="prose prose-slate mx-auto max-w-3xl pt-4">
          <h1 className="heading-display text-4xl text-slate-950 sm:text-5xl">
            Conditions de prestation
          </h1>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Objet
          </h2>
          <p className="text-slate-700">
            Les présentes conditions encadrent les prestations de création de sites
            internet, de refonte, de maintenance et de services associés réalisées par Boki
            Agency.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Devis & acceptation
          </h2>
          <p className="text-slate-700">
            Chaque projet fait l'objet d'un devis détaillé. La validation du devis par le
            client vaut acceptation des présentes conditions et autorisation de démarrer
            la prestation.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Tarifs & paiement
          </h2>
          <p className="text-slate-700">
            Le tarif dépend du type de site, du nombre de pages, du contenu à intégrer et
            des fonctionnalités souhaitées. Le paiement peut être effectué par virement ou
            espèces. Un acompte de 40% est demandé au démarrage du projet. Le solde est
            réglé selon les modalités définies dans le devis.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Délais
          </h2>
          <p className="text-slate-700">
            Les délais sont indicatifs et dépendent de la disponibilité du contenu et des
            retours du client. Tout retard d'envoi des éléments par le client peut décaler
            la livraison.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Modifications après livraison
          </h2>
          <p className="text-slate-700">
            Les modifications après livraison peuvent être réalisées en supplément selon
            la demande. L'hébergement, la maintenance et les évolutions peuvent être
            proposés séparément selon les besoins du projet.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Nom de domaine & hébergement
          </h2>
          <p className="text-slate-700">
            Le nom de domaine reste à la charge du client. Un accompagnement peut être
            prévu pour le choix, l'achat et la configuration. L'hébergement peut être
            fourni séparément selon les besoins.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Propriété intellectuelle
          </h2>
          <p className="text-slate-700">
            Le client conserve la propriété de ses contenus (textes, photos, logo). Boki
            Agency reste titulaire des éléments graphiques et techniques qu'elle a
            développés, hors livrables explicitement transférés au client.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Confidentialité
          </h2>
          <p className="text-slate-700">
            Les informations échangées dans le cadre de la prestation sont traitées avec
            confidentialité.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-slate-950">
            Litiges
          </h2>
          <p className="text-slate-700">
            Tout litige relatif aux présentes conditions sera soumis aux tribunaux
            compétents du ressort du siège social de l'éditeur.
          </p>

          <p className="mt-10 text-sm text-slate-500">
            Les présentes conditions peuvent être complétées par un devis ou un contrat
            spécifique. Les éléments juridiques (identité, SIRET, adresse, etc.) sont à
            compléter dans les mentions légales.
          </p>
        </article>
      </Section>
    </>
  );
}
