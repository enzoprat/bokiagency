import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Section({
  id,
  className,
  children,
  variant = "light",
  bordered = false,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  variant?: "light" | "dark" | "surface";
  bordered?: boolean;
}) {
  const bg =
    variant === "dark"
      ? "bg-ink-900 text-white"
      : variant === "surface"
        ? "bg-surface text-slate-950"
        : "bg-white text-slate-950";
  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden",
        bg,
        bordered && "border-y border-slate-950/[0.06]",
        "py-20 sm:py-24 lg:py-28",
        className
      )}
    >
      <div className="container-tight relative z-10">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "light",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider",
            variant === "dark"
              ? "border-white/15 bg-white/5 text-white/85"
              : "border-indigo-600/15 bg-indigo-50 text-indigo-700"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "heading-display mt-4 text-3xl sm:text-4xl lg:text-5xl",
          variant === "dark" ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg text-pretty",
            variant === "dark" ? "text-white/75" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
