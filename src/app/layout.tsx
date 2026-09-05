import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { Analytics } from "@/components/seo/Analytics";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { ToastProvider } from "@/components/ui/Toast";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Agence web à Montauban — sites internet, e-commerce & SEO local | Boki Agency",
    template: "%s | Boki Agency",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Web Design Agency",
  keywords: [
    "création site internet Montauban",
    "agence web Montauban",
    "création site vitrine Montauban",
    "site internet artisan Montauban",
    "site Shopify Montauban",
    "click and collect Montauban",
    "refonte site internet Montauban",
    "webdesigner Montauban",
    "développeur web Montauban",
    "création site internet Tarn-et-Garonne",
    "création site internet Castelsarrasin",
    "création site internet Moissac",
    "création site internet Caussade",
    "agence web 82",
    "SEO local Montauban",
    "Tarn-et-Garonne",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": SITE.url,
      "x-default": SITE.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: "Boki Agency — Agence web à Montauban",
    description:
      "Sites vitrines, e-commerce Shopify, click & collect, SEO local et vêtements personnalisés pour professionnels à Montauban et dans le Tarn-et-Garonne.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Boki Agency — Création de sites internet à Montauban",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boki Agency — Agence web à Montauban",
    description: SITE.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icon", sizes: "32x32", type: "image/png" }],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION,
  },
  other: {
    "geo.region": "FR-82",
    "geo.placename": "Montauban",
    "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
    "ICBM": `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head>
        {/* Préconnexions / DNS prefetch pour ressources externes critiques */}
        <link rel="preconnect" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        {/* Humans.txt — signe de pro */}
        <link rel="author" href="/humans.txt" />
      </head>
      <body className="min-h-dvh bg-white text-slate-950 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-slate-950 focus:px-3 focus:py-2 focus:text-white"
        >
          Aller au contenu principal
        </a>
        <ToastProvider>
          <CustomCursor />
          <ScrollProgress />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <FloatingCTA />
        </ToastProvider>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
