import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Generates the sitemap metadata route.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
