"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ol className="border-y border-slate-950/10">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li
            key={i}
            className="border-b border-slate-950/10 last:border-b-0"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group grid w-full grid-cols-[2.5rem_1fr_2.5rem] items-center gap-4 py-6 text-left transition-colors hover:bg-slate-950/[0.02] sm:grid-cols-[5rem_1fr_3rem] sm:gap-8 sm:py-8"
            >
              <span className="font-display text-sm font-semibold tracking-wider text-slate-500 sm:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`font-display tracking-tight transition-colors ${
                  isOpen
                    ? "text-slate-950"
                    : "text-slate-700 group-hover:text-slate-950"
                } text-lg sm:text-2xl lg:text-3xl`}
              >
                {it.q}
              </span>
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all ${
                  isOpen
                    ? "rotate-45 border-slate-950 bg-slate-950 text-white"
                    : "border-slate-950/15 bg-white text-slate-950 group-hover:border-slate-950"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-[2.5rem_1fr_2.5rem] gap-4 pb-8 sm:grid-cols-[5rem_1fr_3rem] sm:gap-8">
                    <span />
                    <div className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                      {it.a}
                    </div>
                    <span />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}
