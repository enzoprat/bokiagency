import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 700,
          color: "white",
          background: "#0A0A0A",
          borderRadius: 8,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        B
      </div>
    ),
    { ...size }
  );
}
