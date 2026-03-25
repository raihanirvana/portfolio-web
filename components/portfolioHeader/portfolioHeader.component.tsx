"use client";

import { m, useReducedMotion } from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  Whatsapp,
} from "@/components/portfolioIcons/portfolioIcons.component";
import type { PortfolioDictionary } from "@/content/locales/types";
import {
  type LocaleButtonProps,
  type LocaleSwitcherProps,
  type PortfolioLinkProps,
} from "@/components/portfolioPage/portfolioPage.type.component";
import { type Locale } from "@/lib/locales";

/**
 * Renders the animated header shell.
 */
function PortfolioHeaderShell({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <m.header
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between rounded-full border border-white/70 bg-white/72 px-4 py-3 shadow-[0_14px_44px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:px-5"
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
    >
      {children}
    </m.header>
  );
}

/**
 * Renders the left-side header identity.
 */
function HeaderIdentity({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white shadow-sm">
        RI
      </div>
      <div>
        <div className="text-sm font-semibold text-zinc-950">{content.header.title}</div>
        <div className="text-xs text-zinc-500">{content.header.role}</div>
      </div>
    </div>
  );
}

/**
 * Renders one compact social link.
 */
function PortfolioLink({ ariaLabel, href, icon }: PortfolioLinkProps) {
  return (
    <a
      aria-label={ariaLabel}
      className="rounded-full border border-zinc-200 bg-white p-2.5 text-zinc-600 transition hover:text-zinc-950"
      href={href}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {icon}
    </a>
  );
}

/**
 * Renders the shared social links.
 */
function SocialLinks({ content }: { content: PortfolioDictionary }) {
  return (
    <>
      <PortfolioLink ariaLabel="GitHub" href={content.socials.github} icon={<Github className="h-4 w-4" />} />
      <PortfolioLink ariaLabel="LinkedIn" href={content.socials.linkedin} icon={<Linkedin className="h-4 w-4" />} />
      <PortfolioLink ariaLabel="WhatsApp" href={content.socials.whatsapp} icon={<Whatsapp className="h-4 w-4" />} />
      <PortfolioLink ariaLabel="Email" href={content.socials.email} icon={<Mail className="h-4 w-4" />} />
    </>
  );
}

/**
 * Renders the desktop social link group.
 */
function DesktopSocialLinks({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="hidden items-center gap-2 sm:flex">
      <SocialLinks content={content} />
    </div>
  );
}

/**
 * Renders the mobile floating social link group.
 */
function MobileSocialLinks({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/92 p-1.5 shadow-sm backdrop-blur-xl">
      <SocialLinks content={content} />
    </div>
  );
}

/**
 * Renders one locale switcher button.
 */
function LocaleButton({ isActive, label, onClick }: LocaleButtonProps) {
  return (
    <button
      className={
        isActive
          ? "rounded-full bg-zinc-950 px-3 py-1.5 text-xs font-semibold text-white"
          : "rounded-full px-3 py-1.5 text-xs font-semibold text-zinc-500"
      }
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

/**
 * Renders the locale switcher control.
 */
function LocaleSwitcher({ label, locale, onLocaleChange }: LocaleSwitcherProps) {
  return (
    <nav
      aria-label={label}
      className="mr-2 inline-flex rounded-full border border-zinc-200 bg-white p-1 shadow-sm"
    >
      <LocaleButton isActive={locale === "id"} label="ID" onClick={() => onLocaleChange("id")} />
      <LocaleButton isActive={locale === "en"} label="EN" onClick={() => onLocaleChange("en")} />
    </nav>
  );
}

/**
 * Renders the right-side header controls.
 */
function HeaderActions({
  content,
  locale,
  onLocaleChange,
}: {
  content: PortfolioDictionary;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <LocaleSwitcher label={content.localeSwitcher.label} locale={locale} onLocaleChange={onLocaleChange} />
      <DesktopSocialLinks content={content} />
    </div>
  );
}

/**
 * Renders the animated portfolio header.
 */
export function PortfolioHeader({
  content,
  locale,
  onLocaleChange,
}: {
  content: PortfolioDictionary;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}) {
  return (
    <PortfolioHeaderShell>
      <HeaderIdentity content={content} />
      <HeaderActions content={content} locale={locale} onLocaleChange={onLocaleChange} />
    </PortfolioHeaderShell>
  );
}

/**
 * Renders the floating social links for very small screens.
 */
export function FloatingSocialLinks({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 sm:hidden">
      <div className="pointer-events-auto">
        <MobileSocialLinks content={content} />
      </div>
    </div>
  );
}
