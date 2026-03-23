import type { PortfolioDictionary } from "@/content/locales/types";

export const locales = ["id", "en"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

/**
 * Loads the portfolio dictionary for the requested locale.
 */
export async function loadDictionary(locale: Locale): Promise<PortfolioDictionary> {
  if (locale === "id") {
    const { idDictionary } = await import("@/content/locales/id");

    return idDictionary;
  }

  const { enDictionary } = await import("@/content/locales/en");

  return enDictionary;
}
