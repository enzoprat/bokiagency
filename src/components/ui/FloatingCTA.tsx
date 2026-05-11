"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

/**
 * CTA flottant mobile, sticky à droite.
 * - Apparaît après 600px de scroll
 * - Caché sur /contact et /merci
 * - Caché sur desktop (≥ lg)
 * - Compact pour ne pas masquer le contenu
 */
export function FloatingCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact" || pathname === "/merci") return null;

  return (
    <Link
      href="/contact"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-medium text-white shadow-glow transition-all duration-300 lg:hidden ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      Mon projet <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
