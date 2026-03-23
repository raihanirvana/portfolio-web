import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const containerStyle = {
  background: "linear-gradient(135deg, #111111 0%, #2d2d2d 100%)",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  padding: "72px",
  width: "100%",
} as const;

const badgeStyle = {
  border: "2px solid rgba(255,255,255,0.16)",
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
  opacity: 0.84,
} as const;

const footerStyle = {
  fontSize: 28,
  opacity: 0.62,
} as const;

/**
 * Renders the Twitter image badge.
 */
function TwitterBadge() {
  return <div style={badgeStyle}>Fullstack Engineer</div>;
}

/**
 * Renders the Twitter image body.
 */
function TwitterBody() {
  return (
    <div style={bodyStyle}>
      <div style={titleStyle}>Raihan Irvana</div>
      <div style={subtitleStyle}>JavaScript, Next.js, React Native, Node.js</div>
      <div style={footerStyle}>Portfolio · Projects · Experience · Contact</div>
    </div>
  );
}

/**
 * Renders the Twitter image surface.
 */
function TwitterSurface() {
  return (
    <div style={containerStyle}>
      <TwitterBadge />
      <TwitterBody />
    </div>
  );
}

/**
 * Renders the Twitter card image.
 */
export default function TwitterImage() {
  return new ImageResponse(<TwitterSurface />, size);
}
