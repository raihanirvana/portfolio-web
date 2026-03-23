"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  ChevronRight,
  Code2,
  FileText,
  FolderKanban,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  User,
} from "@/components/portfolio/portfolioIcons.component";

import type { PortfolioDictionary } from "@/content/locales/types";
import {
  type ActionButtonProps,
  type ActionItem,
  type HeroCtaButtonProps,
  type LocaleButtonProps,
  type LocaleSwitcherProps,
  type ModalKey,
  type OpenHandlerProps,
  type PortfolioLinkProps,
} from "@/components/portfolio/portfolioPage.type.component";
import {
  usePortfolioContent,
  usePortfolioLocale,
  usePortfolioMetadata,
} from "@/components/portfolio/portfolioPage.handler.component";
import { type Locale } from "@/lib/locales";

const portfolioDialogId = "portfolio-modal";
const PortfolioModal = dynamic(
  () =>
    import("@/components/portfolio/portfolioPageModal.component").then(
      ({ PortfolioModal: Component }) => Component,
    ),
  { ssr: false },
);

/**
 * Creates a single action item with localized label and tone.
 */
function createAction(
  content: PortfolioDictionary,
  index: number,
  key: ModalKey,
  icon: ActionItem["icon"],
): ActionItem {
  const tone =
    key === "about"
      ? "bg-zinc-950 text-white"
      : "bg-white text-zinc-950 border border-zinc-200";

  return { icon, key, label: content.actions[index].label, tone };
}

/**
 * Maps localized action labels to icon-backed items.
 */
function getActionItems(content: PortfolioDictionary): ActionItem[] {
  return [
    createAction(content, 0, "about", User),
    createAction(content, 1, "experience", Briefcase),
    createAction(content, 2, "projects", FolderKanban),
    createAction(content, 3, "skills", Code2),
    createAction(content, 4, "contact", Mail),
  ];
}

/**
 * Returns dialog trigger attributes for modal-opening controls.
 */
function getDialogTriggerProps(isActive: boolean) {
  return {
    "aria-controls": portfolioDialogId,
    "aria-expanded": isActive,
    "aria-haspopup": "dialog" as const,
  };
}

/**
 * Renders the mobile action icon and label.
 */
/**
 * Renders one hero action pill.
 */
function ActionButton({ isActive, item, onClick }: ActionButtonProps) {
  const Icon = item.icon;
  const dialogProps = getDialogTriggerProps(isActive);

  return (
    <button
      {...dialogProps}
      className={`inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 ${item.tone}`}
      onClick={onClick}
      type="button"
    >
      <Icon className="h-5 w-5" />
      {item.label}
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
 * Renders the localized portfolio page shell.
 */
export function PortfolioPage({
  initialContent,
}: {
  initialContent: PortfolioDictionary;
}) {
  const [openKey, setOpenKey] = useState<ModalKey | null>(null);
  const { locale, setLocale } = usePortfolioLocale();
  const content = usePortfolioContent(initialContent, locale);
  const actions = getActionItems(content);

  usePortfolioMetadata(content);

  return renderPortfolioShell(actions, content, locale, openKey, setLocale, setOpenKey);
}

/**
 * Renders the full portfolio shell with motion providers.
 */
function renderPortfolioShell(actions: ActionItem[], content: PortfolioDictionary, locale: Locale, openKey: ModalKey | null, setLocale: (locale: Locale) => void, setOpenKey: (key: ModalKey | null) => void) {
  const shellClassName = "relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8";

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,1),_rgba(244,243,239,1)_38%,_rgba(233,231,226,1)_100%)] text-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.34),rgba(255,255,255,0))]" />
      <LazyMotion features={domAnimation}>
        <div className={shellClassName}>
          <PortfolioHeader content={content} locale={locale} onLocaleChange={setLocale} />
          <PortfolioMain actions={actions} content={content} onOpen={setOpenKey} openKey={openKey} />
        </div>
        {openKey ? <PortfolioModal content={content} onClose={() => setOpenKey(null)} openKey={openKey} /> : null}
      </LazyMotion>
    </div>
  );
}

/**
 * Renders the animated portfolio header.
 */
function PortfolioHeader({
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
      <PortfolioLink ariaLabel="GitHub" href={content.socials.github} icon={<Github className="h-4 w-4" />} />
      <PortfolioLink ariaLabel="LinkedIn" href={content.socials.linkedin} icon={<Linkedin className="h-4 w-4" />} />
      <PortfolioLink ariaLabel="Email" href={content.socials.email} icon={<Mail className="h-4 w-4" />} />
    </div>
  );
}

/**
 * Renders the animated main portfolio card.
 */
function PortfolioMain({ actions, content, onOpen, openKey }: OpenHandlerProps) {
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <main className="relative flex flex-1 items-center justify-center py-4 sm:py-6 lg:py-8">
      <m.div
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/76 px-6 py-8 shadow-[0_22px_72px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
        transition={{ delay: prefersReducedMotion ? 0 : 0.08, duration: prefersReducedMotion ? 0 : 0.55 }}
      >
        <PortfolioGlow />
        <div className="relative grid gap-8 lg:grid-cols-[0.72fr_1.28fr_0.72fr] lg:gap-10">
          <IdentityColumn content={content} />
          <HeroColumn actions={actions} content={content} onOpen={onOpen} openKey={openKey} />
          <HighlightsColumn content={content} />
        </div>
      </m.div>
    </main>
  );
}

/**
 * Renders the decorative glow layers.
 */
function PortfolioGlow() {
  return (
    <>
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-zinc-200/55 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-zinc-200/40 blur-3xl" />
    </>
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
 * Renders the left-side identity and focus cards.
 */
function IdentityColumn({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="order-2 flex flex-col gap-4 lg:order-1 lg:justify-center">
      <IdentityCard content={content} />
      <FocusCard content={content} />
    </div>
  );
}

/**
 * Renders the identity summary card.
 */
function IdentityCard({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="rounded-[1.75rem] border border-zinc-200/90 bg-white/90 p-5 shadow-sm">
      <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-400">
        {content.identity.title}
      </p>
      <p className="mt-3 text-sm leading-7 text-zinc-600">
        {content.identity.description}
      </p>
    </div>
  );
}

/**
 * Renders the dark focus card.
 */
function FocusCard({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="rounded-[1.75rem] border border-zinc-950 bg-zinc-950 p-5 text-white shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-2 text-zinc-400">
        <Sparkles className="h-4 w-4" />
        <span className="text-[10px] uppercase tracking-[0.24em]">
          {content.identity.focusTitle}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-zinc-300">
        {content.identity.focusDescription}
      </p>
    </div>
  );
}

/**
 * Renders the center hero column.
 */
function HeroColumn({ actions, content, onOpen, openKey }: OpenHandlerProps) {
  return (
    <div className="order-1 flex flex-col items-center justify-center text-center lg:order-2">
      <HeroBadge content={content} />
      <HeroHeading content={content} />
      <HeroCopy content={content} />
      <HeroCta content={content} onOpen={onOpen} openKey={openKey} />
      <HeroActionRow actions={actions} onOpen={onOpen} openKey={openKey} />
    </div>
  );
}

/**
 * Renders the domain badge above the title.
 */
function HeroBadge({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="rounded-full border border-zinc-200 bg-white/92 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] text-zinc-500 shadow-sm">
      {content.hero.domain}
    </div>
  );
}

/**
 * Renders the two-line hero heading.
 */
function HeroHeading({ content }: { content: PortfolioDictionary }) {
  return (
    <h1 className="mt-6 max-w-4xl text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.06em] text-zinc-950 sm:text-5xl lg:text-6xl xl:text-[4.65rem]">
      {content.hero.titleLine1}
      <br />
      {content.hero.titleLine2}
    </h1>
  );
}

/**
 * Renders the hero copy.
 */
function HeroCopy({ content }: { content: PortfolioDictionary }) {
  return (
    <>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-[1.02rem]">
        {content.hero.description}
      </p>
      <p className="mt-3 max-w-xl text-xs uppercase tracking-[0.22em] text-zinc-400 sm:text-[0.78rem]">
        {content.hero.subtitle}
      </p>
    </>
  );
}

/**
 * Renders the primary hero CTA.
 */
function HeroCta({
  content,
  openKey,
  onOpen,
}: {
  content: PortfolioDictionary;
  openKey: ModalKey | null;
  onOpen: (key: ModalKey) => void;
}) {
  return (
    <div className="mt-8 flex w-full max-w-3xl flex-wrap justify-center gap-3">
      <HeroCtaButton isActive={openKey === "projects"} onOpen={onOpen}>
        {content.hero.cta}
        <ChevronRight className="h-4 w-4" />
      </HeroCtaButton>
    </div>
  );
}

/**
 * Renders the hero CTA button shell.
 */
function HeroCtaButton({ children, isActive, onOpen }: HeroCtaButtonProps) {
  const dialogProps = getDialogTriggerProps(isActive);

  return (
    <button
      {...dialogProps}
      className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
      onClick={() => onOpen("projects")}
      type="button"
    >
      {children}
    </button>
  );
}

/**
 * Renders the desktop hero action row.
 */
function HeroActionRow({
  actions,
  openKey,
  onOpen,
}: {
  actions: ActionItem[];
  onOpen: (key: ModalKey) => void;
  openKey: ModalKey | null;
}) {
  return (
    <div className="mt-8 flex w-full max-w-5xl flex-wrap justify-center gap-4">{renderActionButtons(actions, onOpen, openKey)}</div>
  );
}

/**
 * Renders the hero action buttons list.
 */
function renderActionButtons(
  actions: ActionItem[],
  onOpen: (key: ModalKey) => void,
  openKey: ModalKey | null,
) {
  return actions.map((item) => (
    <ActionButton
      isActive={openKey === item.key}
      item={item}
      key={item.key}
      onClick={() => onOpen(item.key)}
    />
  ));
}

/**
 * Renders the right-side highlights column.
 */
function HighlightsColumn({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="order-3 flex flex-col gap-4 lg:justify-center">
      <HighlightsCard content={content} />
      <HighlightsCv content={content} />
    </div>
  );
}

/**
 * Renders the highlight chip card.
 */
function HighlightsCard({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="rounded-[1.75rem] border border-zinc-200/90 bg-white/90 p-5 shadow-sm">
      <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-400">
        {content.highlights.title}
      </p>
      <div className="mt-4 space-y-3">
        {content.highlights.items.map((item) => (
          <div
            className="rounded-[1.2rem] bg-zinc-100 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-200/80"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Renders the CV download CTA.
 */
function HighlightsCv({ content }: { content: PortfolioDictionary }) {
  return (
    <a
      className="inline-flex items-center justify-between rounded-[1.75rem] border border-zinc-200 bg-white px-5 py-4 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
      download="Raihan_Irvana_CV.pdf"
      href="/cv/Raihan_Irvana_CV.pdf"
    >
      <span className="inline-flex items-center gap-2">
        <FileText className="h-4 w-4" />
        {content.highlights.downloadCv}
      </span>
      <ArrowUpRight className="h-4 w-4 opacity-70" />
    </a>
  );
}
