"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Effet "spotlight" qui suit le curseur sur desktop.
 * Désactivé sur mobile (pas de hover réel) et avec prefers-reduced-motion.
 *
 * À placer comme premier enfant absolu dans une carte avec position: relative.
 */
export function Spotlight({
  className,
  size = 360,
  intensity = 0.08,
}: {
  className?: string;
  size?: number;
  /** opacité (0 → 1) du halo blanc/noir */
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--sx", `${x}px`);
      el.style.setProperty("--sy", `${y}px`);
      el.style.opacity = "1";
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300",
        className
      )}
      style={{
        background: `radial-gradient(${size}px circle at var(--sx, 50%) var(--sy, 50%), rgba(10,10,10,${intensity}), transparent 60%)`,
      }}
    />
  );
}
