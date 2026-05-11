import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/lib/site";

export type Crumb = { href: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ href: "/", label: "Accueil" }, ...items];
  return (
    <>
      <nav
        aria-label="Fil d'Ariane"
        className="container-tight pt-28 sm:pt-32"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href + i} className="flex items-center gap-1.5">
                {last ? (
                  <span className="text-slate-700">{c.label}</span>
                ) : (
                  <Link
                    href={c.href}
                    className="hover:text-indigo-700 hover:underline"
                  >
                    {c.label}
                  </Link>
                )}
                {!last && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: all.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.label,
              item: `${SITE.url}${c.href === "/" ? "" : c.href}`,
            })),
          }),
        }}
      />
    </>
  );
}
