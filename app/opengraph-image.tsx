import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const dynamic = "force-static";
export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0e10",
          color: "#ece7df",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 99,
              background: "#e3a857",
            }}
          />
          <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#e3a857" }}>
            Bengaluru
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 0.95, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 24, fontSize: 34 }}>
            {`${profile.role} · ${profile.company}`}
          </div>
          <div style={{ marginTop: 16, fontSize: 28, color: "#a39e95", maxWidth: 900 }}>
            Unstructured data, retrieval, and low-latency model serving.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
