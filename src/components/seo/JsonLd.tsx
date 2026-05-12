import { SITE } from "@/lib/site";

function Json({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Identité principale — schema.org LocalBusiness étend ProfessionalService.
 * Inclut geo (utile pour Maps + Rich Results) sans inventer d'adresse postale.
 */
export function OrganizationJsonLd() {
  return (
    <Json
      data={{
        "@context": "https://schema.org",
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${SITE.url}#organization`,
        name: SITE.name,
        legalName: SITE.name,
        alternateName: "Boki",
        brand: SITE.brand,
        url: SITE.url,
        email: SITE.email,
        description: SITE.description,
        image: [
          `${SITE.url}/opengraph-image`,
          `${SITE.url}/icon`,
          `${SITE.url}${SITE.ogImage}`,
        ],
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/logo-boki-agency.jpg`,
          width: 512,
          height: 512,
        },
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Virement, Espèces",
        // Pas d'adresse postale inventée, mais on indique la zone par addressLocality
        // ce qui aide Google à associer la marque à Montauban
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          postalCode: SITE.postalCode,
          addressCountry: SITE.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.latitude,
          longitude: SITE.geo.longitude,
        },
        areaServed: SITE.areaServed.map((a) => ({
          "@type": "City",
          name: a,
        })),
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: SITE.geo.latitude,
            longitude: SITE.geo.longitude,
          },
          geoRadius: 80000, // 80 km autour de Montauban
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        knowsAbout: SITE.services,
        slogan:
          "Création de sites internet à Montauban pour professionnels ambitieux",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services Boki Agency",
          itemListElement: SITE.services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s,
            },
          })),
        },
        sameAs: [SITE.social.instagram, SITE.social.linkedin].filter(Boolean),
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
        description: SITE.description,
        publisher: { "@id": `${SITE.url}#organization` },
        inLanguage: "fr-FR",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE.url}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
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
        publisher: { "@id": `${SITE.url}#organization` },
      }}
    />
  );
}

/**
 * Service enrichi — inclut areaServed, offers (sans prix fixe) et audience.
 */
export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
  audience,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  audience?: string;
  areaServed?: readonly string[];
}) {
  const zones = areaServed ?? SITE.areaServed;
  return (
    <Json
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url,
        serviceType: serviceType || name,
        category: "Web Design",
        provider: { "@id": `${SITE.url}#organization` },
        areaServed: zones.map((a) => ({ "@type": "City", name: a })),
        ...(audience && {
          audience: {
            "@type": "Audience",
            audienceType: audience,
          },
        }),
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
          },
          availability: "https://schema.org/InStock",
          url,
          seller: { "@id": `${SITE.url}#organization` },
        },
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
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      }}
    />
  );
}
