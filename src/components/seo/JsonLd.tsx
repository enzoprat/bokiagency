import { SITE } from "@/lib/site";

function Json({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <Json
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${SITE.url}#organization`,
        name: SITE.name,
        brand: SITE.brand,
        url: SITE.url,
        email: SITE.email,
        description: SITE.description,
        image: `${SITE.url}${SITE.ogImage}`,
        logo: `${SITE.url}/favicon.svg`,
        priceRange: "€€",
        areaServed: SITE.areaServed.map((a) => ({
          "@type": "City",
          name: a,
        })),
        knowsAbout: SITE.services,
        slogan:
          "Création de sites internet à Montauban pour professionnels ambitieux",
        // Pas d'adresse physique inventée. AreaServed plutôt qu'address.
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <Json
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE.url}#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}#organization` },
        inLanguage: "fr-FR",
      }}
    />
  );
}

export function WebPageJsonLd({
  url,
  name,
  description,
}: {
  url: string;
  name: string;
  description: string;
}) {
  return (
    <Json
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        url,
        name,
        description,
        isPartOf: { "@id": `${SITE.url}#website` },
        about: { "@id": `${SITE.url}#organization` },
        inLanguage: "fr-FR",
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return (
    <Json
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url,
        serviceType: serviceType || name,
        provider: { "@id": `${SITE.url}#organization` },
        areaServed: SITE.areaServed.map((a) => ({
          "@type": "City",
          name: a,
        })),
      }}
    />
  );
}

export function FAQJsonLd({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <Json
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  url,
  title,
  description,
  datePublished,
  dateModified,
}: {
  url: string;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return (
    <Json
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished,
        dateModified: dateModified || datePublished,
        author: { "@id": `${SITE.url}#organization` },
        publisher: { "@id": `${SITE.url}#organization` },
      }}
    />
  );
}

export function CreativeWorkJsonLd({
  url,
  name,
  description,
  externalUrl,
}: {
  url: string;
  name: string;
  description: string;
  externalUrl?: string;
}) {
  return (
    <Json
      data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name,
        description,
        url,
        sameAs: externalUrl ? [externalUrl] : undefined,
        creator: { "@id": `${SITE.url}#organization` },
      }}
    />
  );
}
