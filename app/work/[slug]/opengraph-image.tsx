import { ImageResponse } from "next/og";
import { caseStudies } from "@/content/work";

export const alt = "Selected work · Roshan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  const title = study?.title ?? "Selected work";
  const thesis = study?.thesis ?? "";

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
          Roshan &middot; Selected work
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "#121212",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.4,
              color: "#4A4843",
              maxWidth: "700px",
            }}
          >
            {thesis}
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
