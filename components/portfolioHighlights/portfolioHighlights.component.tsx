import type { PortfolioDictionary } from "@/content/locales/types";

/** Renders the compact experience note. */
export function HighlightsColumn({ content }: { content: PortfolioDictionary }) {
  return <p className="hero-note"><span>{content.highlights.items[0]}</span><i aria-hidden="true" /><span>Jenius, SMBC Indonesia</span></p>;
}
