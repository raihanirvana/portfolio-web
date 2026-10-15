"use client";

import type { PortfolioDictionary } from "@/content/locales/types";
import type { LocaleSwitcherProps } from "@/components/portfolioPage/portfolioPage.type.component";
import { ArrowUpRight } from "@/components/portfolioIcons/portfolioIcons.component";
import type { Locale } from "@/lib/locales";

/** Renders the persistent language choice. */
function LocaleSwitcher({ label, locale, onLocaleChange }: LocaleSwitcherProps) {
  return (
    <div aria-label={label} className="locale-switch" role="group">
      {(["en", "id"] as const).map((value) => <button aria-pressed={locale === value} key={value} onClick={() => onLocaleChange(value)} type="button">{value.toUpperCase()}</button>)}
    </div>
  );
}

/** Renders the compact identity and language controls. */
export function PortfolioHeader({ content, locale, onLocaleChange, onHome }: {
  content: PortfolioDictionary; locale: Locale; onLocaleChange: (locale: Locale) => void; onHome?: () => void;
}) {
  return (
    <header className="site-header">
      <button className="wordmark" onClick={onHome} type="button" aria-label={content.header.title}>
        <span className="brand-mark" aria-hidden="true">ri.</span><span>{content.header.title}<small>{content.header.role}</small></span>
      </button>
      <div className="header-controls"><span className="availability"><i />{content.studio.availability}</span><LocaleSwitcher label={content.localeSwitcher.label} locale={locale} onLocaleChange={onLocaleChange} /></div>
    </header>
  );
}

/** Renders direct social links in the page footer. */
export function FloatingSocialLinks({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="social-links">
      {(["github", "linkedin", "whatsapp"] as const).map((key) => <a href={content.socials[key]} key={key} rel="noreferrer" target="_blank">{{ github: "GitHub", linkedin: "LinkedIn", whatsapp: "WhatsApp" }[key]}<ArrowUpRight /></a>)}
    </div>
  );
}
