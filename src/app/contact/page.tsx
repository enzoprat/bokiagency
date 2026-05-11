import type { Metadata } from "next";
import { Clock, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { CopyEmail } from "@/components/ui/CopyEmail";

export const metadata: Metadata = {
  title: "Contact | Discutons de votre projet — Boki Agency",
  description:
    "Discutons de votre projet de site internet à Montauban : sites vitrines, Shopify, click & collect, refonte. Présentation, services, photos, formulaire.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/contact", label: "Contact" }]} />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Discutons de <span className="gradient-text">votre projet</span>
          </>
        }
        description="Présentez-nous votre activité, vos objectifs et vos contraintes : nous revenons vers vous rapidement avec un premier retour."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="card p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="space-y-4">
              <div className="card p-6">
                <h3 className="font-display text-lg font-semibold text-slate-950">
                  Par email
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Vous pouvez aussi écrire directement.
                </p>
                <CopyEmail email={SITE.email} />
              </div>
              <div className="card p-6">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-700">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium text-slate-950">
                      Montauban & Tarn-et-Garonne
                    </p>
                    <p className="mt-1 text-slate-600">
                      Intervention à distance possible selon le projet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-700">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium text-slate-950">Réponse rapide</p>
                    <p className="mt-1 text-slate-600">
                      Un retour est généralement effectué sous quelques jours
                      ouvrés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
      <WebPageJsonLd
        url={`${SITE.url}/contact`}
        name="Contact Boki Agency"
        description="Discutons de votre projet de site internet à Montauban."
      />
    </>
  );
}
