import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Generates the robots.txt metadata route.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
