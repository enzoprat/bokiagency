"use client";

import { Copy, Mail } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

export function CopyEmail({ email }: { email: string }) {
  const { toast } = useToast();

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 rounded-2xl border border-slate-950/10 bg-white px-4 py-3 text-sm font-medium text-slate-950 transition-all hover:border-slate-950/30 hover:shadow-soft"
      >
        <Mail className="h-4 w-4" /> {email}
      </a>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            toast("Email copié");
          } catch {
            toast("Copie non disponible");
          }
        }}
        className="inline-flex items-center gap-2 rounded-2xl border border-slate-950/10 bg-white px-3 py-3 text-sm font-medium text-slate-700 transition-all hover:border-slate-950/30 hover:text-slate-950"
        aria-label="Copier l'email"
      >
        <Copy className="h-4 w-4" />
      </button>
    </div>
  );
}
