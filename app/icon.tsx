import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

const iconStyle = {
  alignItems: "center",
  background: "linear-gradient(135deg, #111111 0%, #2d2d2d 100%)",
  color: "#ffffff",
  display: "flex",
  fontSize: 180,
  fontStyle: "normal",
  fontWeight: 700,
  height: "100%",
  justifyContent: "center",
  letterSpacing: "-0.08em",
  width: "100%",
} as const;

/**
 * Renders the icon surface.
 */
function IconSurface() {
  return <div style={iconStyle}>RI</div>;
}

/**
 * Renders the site icon.
 */
export default function Icon() {
  return new ImageResponse(<IconSurface />, size);
}
