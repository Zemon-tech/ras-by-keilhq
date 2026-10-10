import { ImageResponse } from "next/og";

export const alt = "RAS by KeilHQ — Conversations that build what's next.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#FAF9F6",
        }}
      >
        {/* Brand rail */}
        <div
          style={{
            width: 14,
            height: "100%",
            backgroundColor: "#FF5A1F",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 90px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "monospace",
              fontSize: 26,
              letterSpacing: 8,
              color: "#0A0A0A",
            }}
          >
            A TECH PODCAST
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1.02,
              color: "#0A0A0A",
              marginTop: 28,
            }}
          >
            Conversations that build what&apos;s next.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 40,
              fontFamily: "monospace",
              fontSize: 26,
              letterSpacing: 4,
              color: "#555250",
            }}
          >
            <div
              style={{
                width: 44,
                height: 6,
                backgroundColor: "#FF5A1F",
                marginRight: 20,
              }}
            />
            RAS BY KEILHQ — RISE AND SHINE
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
