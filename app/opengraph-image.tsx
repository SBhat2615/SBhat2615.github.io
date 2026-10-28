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
          background: "#f3efe6",
          color: "#1c1915",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 99,
              background: "#8c3b1e",
            }}
          />
          <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>
            Bengaluru
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 0.95, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 24, fontSize: 34 }}>{profile.role}</div>
          <div style={{ marginTop: 16, fontSize: 28, color: "#5c564c", maxWidth: 860 }}>
            {profile.lede}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
