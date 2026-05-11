"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Curseur personnalisé desktop.
 * - Désactivé sur écrans tactiles, écrans réduits, et prefers-reduced-motion
 * - Scale up sur les éléments interactifs (a, button, [data-cursor])
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const stateRef = useRef({ hover: false });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(max-width: 1024px)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let dotX = 0,
      dotY = 0,
      ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      // dot follows immediately
      dotX = mouseX;
      dotY = mouseY;
      // ring eases
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      dot.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0)`;
      const scale = stateRef.current.hover ? 1.6 : 1;
      ring.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      stateRef.current.hover = !!t.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor]'
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) and (min-width: 1025px) {
          html, body, a, button, [role="button"], input, textarea, select, [data-cursor] {
            cursor: none !important;
          }
        }
      `}</style>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 rounded-full bg-white mix-blend-difference"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[199] h-9 w-9 rounded-full border-2 border-white mix-blend-difference transition-colors duration-200"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          willChange: "transform",
        }}
      />
    </>
  );
}
