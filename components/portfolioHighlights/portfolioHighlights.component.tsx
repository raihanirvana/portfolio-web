"use client";

import { ArrowUpRight, FileText } from "@/components/portfolioIcons/portfolioIcons.component";
import type { PortfolioDictionary } from "@/content/locales/types";

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

/**
 * Renders the right-side highlights column.
 */
export function HighlightsColumn({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="order-3 flex flex-col gap-4 lg:justify-center">
      <HighlightsCard content={content} />
      <HighlightsCv content={content} />
    </div>
  );
}
