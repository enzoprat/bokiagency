"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/components/seo/Analytics";

const PROJECT_TYPES = [
  "Site vitrine",
  "E-commerce Shopify",
  "Click & collect",
  "Refonte de site",
  "SEO local",
  "Autre",
];

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const router = useRouter();
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  // NEXT_PUBLIC_* est exposé côté client par design — Web3Forms le veut comme ça.
  // La clé peut être surchargée via env var Vercel si besoin, sinon fallback en dur.
  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    "459c26fe-3e7a-41aa-a0e2-940eac186964";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) {
      setState("success");
      return;
    }

    data.append("access_key", accessKey);
    data.append("subject", "Nouvelle demande Boki Agency");
    data.append("from_name", "Boki Agency - Formulaire site");

    trackEvent("submit_contact_form", {
      project_type: data.get("project_type"),
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setState("success");
        router.push("/merci");
      } else {
        setState("error");
        setError(json.message || "Une erreur est survenue. Réessayez.");
      }
    } catch {
      setState("error");
      setError("Une erreur est survenue. Réessayez ou écrivez-nous par email.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom" name="name" required autoComplete="name" />
        <Field label="Entreprise" name="company" autoComplete="organization" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field label="Téléphone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Type de projet"
          name="project_type"
          options={PROJECT_TYPES}
          required
        />
        <Field label="Activité" name="activity" />
      </div>

      <Field label="Services proposés" name="services" />
      <Field label="Zones d'intervention" name="zones" />

      <TextareaField
        label="Message"
        name="message"
        rows={5}
        required
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Logo disponible ?"
          name="logo_available"
          options={["Oui", "Non"]}
        />
        <SelectField
          label="Photos disponibles ?"
          name="photos_available"
          options={["Oui", "Non"]}
        />
      </div>

      <p className="text-xs text-slate-500">
        En envoyant ce formulaire, vous acceptez d'être recontacté au sujet de
        votre demande. Vos données ne sont pas partagées avec des tiers.
      </p>

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-primary w-full justify-center sm:w-auto disabled:opacity-70"
      >
        {state === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours…
          </>
        ) : state === "success" ? (
          <>
            <CheckCircle2 className="h-4 w-4" /> Demande envoyée
          </>
        ) : (
          <>
            Envoyer ma demande <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      {error && (
        <p
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}
    </form>
  );
}

/* ----- Floating label fields ----- */

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="group relative">
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder=" "
        className="peer block w-full rounded-2xl border border-slate-950/10 bg-white px-4 pt-6 pb-2 text-[15px] text-slate-950 outline-none transition-all placeholder-shown:pt-4 placeholder-shown:pb-4 focus:border-slate-950/40 focus:shadow-ring"
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium uppercase tracking-wider text-slate-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[14px] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-slate-700"
      >
        {label} {required && <span className="text-slate-950">*</span>}
      </label>
    </div>
  );
}

function TextareaField({
  label,
  name,
  rows = 4,
  required,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div className="group relative">
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        placeholder=" "
        className="peer block w-full resize-none rounded-2xl border border-slate-950/10 bg-white px-4 pt-6 pb-2 text-[15px] text-slate-950 outline-none transition-all placeholder-shown:pt-4 focus:border-slate-950/40 focus:shadow-ring"
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium uppercase tracking-wider text-slate-600 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-slate-700"
      >
        {label} {required && <span className="text-slate-950">*</span>}
      </label>
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-slate-600">
        {label} {required && <span className="text-slate-950">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="block w-full appearance-none rounded-2xl border border-slate-950/10 bg-white px-4 py-3 text-[15px] text-slate-950 outline-none transition-all focus:border-slate-950/40 focus:shadow-ring"
      >
        <option value="" disabled>
          Sélectionner…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
