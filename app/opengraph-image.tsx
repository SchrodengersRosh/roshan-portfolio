import { ImageResponse } from "next/og";


export const alt =
  "Roshan · Builder, digital strategist, engineering student in Bengaluru";
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
          padding: "64px 80px",
          backgroundColor: "#F3F0E9",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "14px",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            color: "#4A4843",
            fontFamily: "monospace",
          }}
        >
          Roshan
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#121212",
            }}
          >
            Still in college.
          </div>
          <div
            style={{
              fontSize: "72px",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#121212",
            }}
          >
            Already building for real businesses.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "#4A4843",
              fontFamily: "monospace",
            }}
          >
            Builder · Digital strategist · Engineering student, DSCE Bengaluru
          </div>
          <div
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: "#D4451D",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
