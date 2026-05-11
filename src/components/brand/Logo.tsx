import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Marque Boki Agency.
 * Le fichier source est un JPG fond blanc.
 * - light : on neutralise le fond blanc avec mix-blend-mode: multiply
 * - dark  : on inverse + screen pour faire ressortir un logo blanc
 */
export function Logo({
  className,
  variant = "light",
  priority = false,
  size = 64,
}: {
  className?: string;
  variant?: "light" | "dark";
  priority?: boolean;
  size?: number;
}) {
  return (
    <Image
      src="/logo-boki-agency.jpg"
      alt="Boki Agency"
      width={size}
      height={size}
      priority={priority}
      className={cn(
        "h-10 w-10 select-none object-contain",
        variant === "light"
          ? "[mix-blend-mode:multiply]"
          : "invert [mix-blend-mode:screen]",
        className
      )}
    />
  );
}
