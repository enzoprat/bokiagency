import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Boki Agency — Création de sites internet à Montauban";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0A0A0A 0%, #141414 50%, #1F1F1F 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -100,
            width: 700,
            height: 700,
            background: "radial-gradient(closest-side, rgba(255,255,255,0.10), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            right: -120,
            width: 700,
            height: 700,
            background: "radial-gradient(closest-side, rgba(255,255,255,0.06), transparent)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#FFFFFF",
              color: "#0A0A0A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 30,
            }}
          >
            B
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.4 }}>
            Boki Agency
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.65)",
              letterSpacing: -0.2,
            }}
          >
            Agence web — Montauban & Tarn-et-Garonne
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Création de sites internet à{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#FFFFFF 0%, #D4D4D4 50%, #A3A3A3 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Montauban
            </span>
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.78)", maxWidth: 980 }}>
            Sites vitrines · Shopify · Click & collect · Refonte · SEO local
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <div>bokiagency.fr</div>
          <div>Pour artisans, commerces & entreprises locales</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
