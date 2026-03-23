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
  Briefcase,
  Code2,
  FolderKanban,
  Mail,
  User,
} from "@/components/portfolioIcons/portfolioIcons.component";

import type { PortfolioDictionary } from "@/content/locales/types";
import {
  type ActionItem,
  type ModalKey,
  type OpenHandlerProps,
} from "@/components/portfolioPage/portfolioPage.type.component";
import {
  usePortfolioContent,
  usePortfolioLocale,
  usePortfolioMetadata,
} from "@/components/portfolioPage/portfolioPage.handler.component";
import { HeroColumn } from "@/components/portfolioHero/portfolioHero.component";
import { HighlightsColumn } from "@/components/portfolioHighlights/portfolioHighlights.component";
import { IdentityColumn } from "@/components/portfolioIdentity/portfolioIdentity.component";
import {
  FloatingSocialLinks,
  PortfolioHeader,
} from "@/components/portfolioHeader/portfolioHeader.component";
import { type Locale } from "@/lib/locales";

const PortfolioModal = dynamic(
  () =>
    import("@/components/portfolioPageModal/portfolioPageModal.component").then(
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
 * Renders the animated main portfolio card.
 */
function PortfolioMain({ actions, content, onOpen, openKey }: OpenHandlerProps) {
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <main className="relative flex flex-1 items-start justify-center py-4 sm:py-6 lg:py-8">
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
 * Renders the animated page background shell.
 */
function PortfolioShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,1),_rgba(244,243,239,1)_38%,_rgba(233,231,226,1)_100%)] text-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.34),rgba(255,255,255,0))]" />
      {children}
    </div>
  );
}

/**
 * Renders the lazily loaded modal when a key is active.
 */
function ActivePortfolioModal({
  content,
  openKey,
  setOpenKey,
}: {
  content: PortfolioDictionary;
  openKey: ModalKey | null;
  setOpenKey: (key: ModalKey | null) => void;
}) {
  return openKey ? (
    <PortfolioModal content={content} onClose={() => setOpenKey(null)} openKey={openKey} />
  ) : null;
}

/**
 * Renders the full portfolio shell with motion providers.
 */
function renderPortfolioShell(
  actions: ActionItem[], content: PortfolioDictionary, locale: Locale,
  openKey: ModalKey | null, setLocale: (locale: Locale) => void,
  setOpenKey: (key: ModalKey | null) => void,
) {
  const shellClassName = "relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8";

  return (
    <PortfolioShell>
      <LazyMotion features={domAnimation}>
        <div className={shellClassName}>
          <PortfolioHeader content={content} locale={locale} onLocaleChange={setLocale} />
          <PortfolioMain actions={actions} content={content} onOpen={setOpenKey} openKey={openKey} />
        </div>
        <FloatingSocialLinks content={content} />
        <ActivePortfolioModal content={content} openKey={openKey} setOpenKey={setOpenKey} />
      </LazyMotion>
    </PortfolioShell>
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
