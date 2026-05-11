import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
    { media: "(prefers-color-scheme: dark)", color: "#0B1026" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Création site internet Montauban | Agence web Tarn-et-Garonne | Boki Agency",
    template: "%s | Boki Agency",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
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
    "agence web 82",
    "Tarn-et-Garonne",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: "Boki Agency - Création de sites internet à Montauban",
    description:
      "Sites vitrines, e-commerce Shopify, click & collect, SEO local et vêtements personnalisés pour professionnels à Montauban et dans le Tarn-et-Garonne.",
    images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boki Agency - Création de sites internet à Montauban",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://api.web3forms.com" />
      </head>
      <body className="min-h-dvh bg-white text-slate-950 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-indigo-600 focus:px-3 focus:py-2 focus:text-white"
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
