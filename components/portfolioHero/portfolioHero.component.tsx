"use client";

import { ChevronRight } from "@/components/portfolioIcons/portfolioIcons.component";
import type { PortfolioDictionary } from "@/content/locales/types";
import {
  type ActionButtonProps,
  type ActionItem,
  type HeroCtaButtonProps,
  type ModalKey,
  type OpenHandlerProps,
} from "@/components/portfolioPage/portfolioPage.type.component";

/**
 * Returns dialog trigger attributes for modal-opening controls.
 */
function getDialogTriggerProps(isActive: boolean) {
  return {
    "aria-controls": "portfolio-modal",
    "aria-expanded": isActive,
    "aria-haspopup": "dialog" as const,
  };
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
    <div className="mt-8 flex w-full max-w-5xl flex-wrap justify-center gap-4">
      {renderActionButtons(actions, onOpen, openKey)}
    </div>
  );
}

/**
 * Renders the center hero column.
 */
export function HeroColumn({ actions, content, onOpen, openKey }: OpenHandlerProps) {
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
