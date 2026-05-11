import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * Bande défilante infinie type "agency portfolio".
 * - Les enfants sont dupliqués pour la boucle CSS sans gap
 * - Vitesse réglable, sens réversible
 */
export function Marquee({
  children,
  className,
  speed = 40,
  reverse = false,
  pauseOnHover = false,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-12 whitespace-nowrap will-change-transform",
          reverse ? "animate-[marqueeReverse_var(--mq-d)_linear_infinite]" : "animate-[marquee_var(--mq-d)_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ ["--mq-d" as string]: `${speed}s` }}
        aria-hidden={false}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center gap-12 whitespace-nowrap will-change-transform",
          reverse ? "animate-[marqueeReverse_var(--mq-d)_linear_infinite]" : "animate-[marquee_var(--mq-d)_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ ["--mq-d" as string]: `${speed}s` }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
