"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Bouton "magnétique" — attire le curseur sur desktop (subtil).
 * Utilise un wrapper qui transforme le contenu vers le pointeur.
 */
export function MagneticButton({
  href,
  children,
  className,
  strength = 0.25,
  prefetch = true,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
  prefetch?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const target = inner.current;
    if (!el || !target) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        target.style.transform = `translate(${(x * strength).toFixed(2)}px, ${(y * strength).toFixed(2)}px)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      target.style.transform = "translate(0,0)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <Link
      ref={ref}
      href={href}
      prefetch={prefetch}
      className={cn("inline-block", className)}
      style={{ willChange: "transform" }}
    >
      <span
        ref={inner}
        className="inline-block transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]"
        style={{ willChange: "transform" }}
      >
        {children}
      </span>
    </Link>
  );
}
