"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/brand/Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-3"
      )}
    >
      <div className="container-tight">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4",
            scrolled
              ? "border-slate-950/[0.07] bg-white/85 shadow-soft backdrop-blur-xl"
              : "border-transparent bg-white/40 backdrop-blur-md"
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 pl-1 pr-2 sm:pl-2"
            aria-label="Boki Agency - accueil"
          >
            <Logo
              className={cn(
                "transition-all duration-300",
                scrolled ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11"
              )}
              priority
              size={64}
            />
            <span className="sr-only">Boki Agency</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative rounded-full px-3 py-2 text-sm transition-colors",
                    active
                      ? "text-slate-950"
                      : "text-slate-700 hover:text-slate-950"
                  )}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-slate-950 transition-transform duration-300",
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex btn-primary !py-2.5 !px-4 text-sm"
            >
              Demander mon site
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-950/10 bg-white text-slate-950 hover:bg-slate-950 hover:text-white transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — fullscreen */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="grain absolute inset-0 bg-ink-900 text-white">
            <div className="halo -top-20 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-white/10" />
            <div className="grid-faint-dark absolute inset-0 opacity-40" />
            <div className="container-tight relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between py-4">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Logo className="h-10 w-10" variant="dark" size={64} />
                  <span className="sr-only">Boki Agency</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-8 grid flex-1 gap-1 self-start">
                {NAV.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-3 py-2 font-display text-3xl font-semibold text-white sm:text-4xl"
                  >
                    <span className="text-xs font-semibold tracking-wider text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </Link>
                ))}
              </nav>
              <div className="space-y-3 pb-8">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-sm font-medium text-slate-950"
                >
                  Demander mon site <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40">
                  Montauban — Tarn-et-Garonne — 82
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
