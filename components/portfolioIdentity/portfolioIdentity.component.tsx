"use client";

import { Sparkles } from "@/components/portfolioIcons/portfolioIcons.component";
import type { PortfolioDictionary } from "@/content/locales/types";

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
 * Renders the left-side identity and focus cards.
 */
export function IdentityColumn({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="order-2 flex flex-col gap-4 lg:order-1 lg:justify-center">
      <IdentityCard content={content} />
      <FocusCard content={content} />
    </div>
  );
}
