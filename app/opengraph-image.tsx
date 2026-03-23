import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const containerStyle = {
  background: "radial-gradient(circle at top, #ffffff 0%, #f4f3ef 42%, #e9e7e2 100%)",
  color: "#111111",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  padding: "72px",
  width: "100%",
} as const;

const badgeStyle = {
  border: "2px solid rgba(17,17,17,0.08)",
  borderRadius: "999px",
  alignSelf: "flex-start",
  fontSize: 28,
  letterSpacing: "0.28em",
  padding: "18px 28px",
  textTransform: "uppercase",
} as const;

const bodyStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
} as const;

const titleStyle = {
  fontSize: 78,
  fontWeight: 700,
  letterSpacing: "-0.06em",
  lineHeight: 1,
} as const;

const subtitleStyle = {
  fontSize: 36,
  opacity: 0.82,
} as const;

const stackStyle = {
  fontSize: 28,
  opacity: 0.58,
} as const;

/**
 * Renders the Open Graph content badge.
 */
function OpenGraphBadge() {
  return <div style={badgeStyle}>raihan irvana</div>;
}

/**
 * Renders the Open Graph content body.
 */
function OpenGraphBody() {
  return (
    <div style={bodyStyle}>
      <div style={titleStyle}>Raihan Irvana</div>
      <div style={subtitleStyle}>Fullstack Engineer focused on scalable digital products</div>
      <div style={stackStyle}>Next.js · React · React Native · Node.js · TypeScript</div>
    </div>
  );
}

/**
 * Renders the Open Graph image surface.
 */
function OpenGraphSurface() {
  return (
    <div style={containerStyle}>
      <OpenGraphBadge />
      <OpenGraphBody />
    </div>
  );
}

/**
 * Renders the Open Graph image.
 */
export default function OpenGraphImage() {
  return new ImageResponse(<OpenGraphSurface />, size);
}
