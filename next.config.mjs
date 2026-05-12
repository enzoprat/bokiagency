/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Headers HTTP de sécurité + cache. Vercel les sert au edge.
  async headers() {
    const securityHeaders = [
      // HSTS : force HTTPS pour 2 ans, preload-ready
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
      },
      { key: "X-DNS-Prefetch-Control", value: "on" },
    ];

    return [
      // Global : toutes les routes
      { source: "/(.*)", headers: securityHeaders },

      // Assets statiques : cache 1 an immutable
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Public assets (favicon, logo, og) : cache 7 jours
      {
        source: "/:path*\\.(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, must-revalidate" },
        ],
      },
      // Sitemap + robots : pas de cache long (peuvent évoluer)
      {
        source: "/sitemap.xml",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600" }],
      },
      {
        source: "/robots.txt",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600" }],
      },
    ];
  },

  // Redirects : canonicaliser l'URL (slash final, vieilles routes supprimées)
  async redirects() {
    return [
      // Rabat les anciennes routes /realisations vers /services
      {
        source: "/realisations",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/realisations/:slug*",
        destination: "/services",
        permanent: true,
      },
      // Vieux slugs bordeaux/gironde → nouvelle géo (au cas où des liens externes pointent encore)
      {
        source: "/creation-site-internet-bordeaux",
        destination: "/creation-site-internet-montauban",
        permanent: true,
      },
      {
        source: "/creation-site-internet-gironde",
        destination: "/creation-site-internet-tarn-et-garonne",
        permanent: true,
      },
      {
        source: "/site-internet-artisan-bordeaux",
        destination: "/site-internet-artisan-montauban",
        permanent: true,
      },
      {
        source: "/agence-web-bordeaux",
        destination: "/agence-web-montauban",
        permanent: true,
      },
      {
        source: "/developpeur-web-bordeaux",
        destination: "/developpeur-web-montauban",
        permanent: true,
      },
      {
        source: "/webdesigner-bordeaux",
        destination: "/webdesigner-montauban",
        permanent: true,
      },
      {
        source: "/creation-site-shopify-bordeaux",
        destination: "/creation-site-shopify-montauban",
        permanent: true,
      },
      {
        source: "/creation-site-webflow-bordeaux",
        destination: "/creation-site-webflow-montauban",
        permanent: true,
      },
      {
        source: "/services/site-vitrine-bordeaux",
        destination: "/services/site-vitrine-montauban",
        permanent: true,
      },
      {
        source: "/services/site-ecommerce-shopify-bordeaux",
        destination: "/services/site-ecommerce-shopify-montauban",
        permanent: true,
      },
      {
        source: "/services/click-and-collect-bordeaux",
        destination: "/services/click-and-collect-montauban",
        permanent: true,
      },
      {
        source: "/services/refonte-site-internet-bordeaux",
        destination: "/services/refonte-site-internet-montauban",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
