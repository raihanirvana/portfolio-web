import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Generates the web app manifest.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f3ef",
    theme_color: siteConfig.themeColor,
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
