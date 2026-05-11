import { ImageResponse } from "next/og";

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
          padding: 72,
          background: "#0A0A0A",
          color: "#FFFFFF",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top row : logo mark + brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#FFFFFF",
              color: "#0A0A0A",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: -0.4,
            }}
          >
            Boki Agency
          </div>
        </div>

        {/* Middle : eyebrow + title + subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 16,
            }}
          >
            Agence web — Montauban & Tarn-et-Garonne
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Création de sites internet à Montauban
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 26,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Sites vitrines · Shopify · Click & collect · SEO local
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <div style={{ display: "flex" }}>bokiagency.fr</div>
          <div style={{ display: "flex" }}>Tarn-et-Garonne · 82</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
