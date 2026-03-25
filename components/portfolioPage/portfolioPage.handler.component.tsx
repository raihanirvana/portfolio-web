"use client";

import { useEffect, useState } from "react";

import type { PortfolioDictionary } from "@/content/locales/types";
import { defaultLocale, locales, type Locale } from "@/lib/locales";

const localeStorageKey = "porto-web-locale";

/**
 * Returns the existing description meta tag or creates one.
 */
function getDescriptionMetaTag() {
  const existingMetaTag = document.querySelector('meta[name="description"]');

  if (existingMetaTag) return existingMetaTag;
  const metaTag = document.createElement("meta");

  metaTag.setAttribute("name", "description");
  document.head.appendChild(metaTag);

  return metaTag;
}

/**
 * Creates or updates the page description meta tag.
 */
function updateMetaDescription(description: string) {
  const metaTag = getDescriptionMetaTag();

  metaTag.setAttribute("content", description);
}

/**
 * Loads one locale dictionary and applies it if the component is mounted.
 */
async function loadLocaleContent(
  locale: Locale,
  setContent: (content: PortfolioDictionary) => void,
  isMounted: () => boolean,
) {
  const { loadDictionary } = await import("@/lib/locales");
  const nextContent = await loadDictionary(locale);

  if (isMounted()) setContent(nextContent);
}

/**
 * Syncs the active locale dictionary into component state.
 */
function syncLocaleContent(
  locale: Locale,
  setContent: (content: PortfolioDictionary) => void,
) {
  let isMounted = true;

  void loadLocaleContent(locale, setContent, () => isMounted);

  return () => {
    isMounted = false;
  };
}

/**
 * Persists and restores the selected portfolio locale.
 */
export function usePortfolioLocale() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(localeStorageKey);

    if (storedLocale && locales.includes(storedLocale as Locale)) {
      setLocale(storedLocale as Locale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(localeStorageKey, locale);
  }, [locale]);

  return { locale, setLocale };
}

/**
 * Keeps browser metadata aligned with the active locale.
 */
export function usePortfolioMetadata(content: PortfolioDictionary) {
  useEffect(() => {
    document.title = content.metadata.title;
    updateMetaDescription(content.metadata.description);
  }, [content]);
}

/**
 * Loads locale content on demand while keeping initial content available.
 */
export function usePortfolioContent(
  initialContent: PortfolioDictionary,
  locale: Locale,
) {
  const [content, setContent] = useState<PortfolioDictionary>(initialContent);

  useEffect(() => {
    if (locale === defaultLocale) {
      setContent(initialContent);

      return undefined;
    }

    return syncLocaleContent(locale, setContent);
  }, [initialContent, locale]);

  return content;
}
