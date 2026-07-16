import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #7000FF 0%, #5A00D6 45%, #2D006E 100%)",
        color: "#ffffff",
        fontFamily: "Inter, sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -140,
          left: -140,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: 86,
            marginBottom: 20,
          }}
        ></div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          ByMall
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 36,
            opacity: 0.95,
          }}
        >
          Modern E-Commerce Platform
        </div>

        <div
          style={{
            marginTop: 50,
            padding: "16px 34px",
            borderRadius: 9999,
            background: "rgba(255,255,255,0.12)",
            border: "2px solid rgba(255,255,255,0.18)",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          Next.js 15+ • React 19 • TypeScript
        </div>

        <div
          style={{
            marginTop: 70,
            fontSize: 24,
            opacity: 0.85,
          }}
        >
          Asilbek Egamnazarov
        </div>
      </div>
    </div>,
    size,
  );
}
