"use client";

import { useState } from "react";
import { ArrowUpRight } from "@/components/portfolioIcons/portfolioIcons.component";
import { HighlightsColumn } from "@/components/portfolioHighlights/portfolioHighlights.component";
import type { PortfolioDictionary } from "@/content/locales/types";

type Props = { content: PortfolioDictionary; onWork?: () => void };

/** Renders the full biography as an optional reading view. */
function Biography({ content, onBack }: { content: PortfolioDictionary; onBack: () => void }) {
  return (
    <div className="biography stage-enter"><p className="view-label">{content.about.subtitle}</p><h1>{content.header.title}.</h1><div className="biography-copy">{content.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><button className="text-button" onClick={onBack} type="button">{content.studio.back}<span aria-hidden="true">↶</span></button></div>
  );
}

/** Renders the restrained introduction and direct actions. */
function Introduction({ content, onWork, onBio }: Props & { onBio: () => void }) {
  return (
    <div className="introduction stage-enter">
      <p className="view-label">{content.studio.greeting}</p>
      <h1><span>{content.hero.titleLine1}</span><span>{content.hero.titleLine2}</span></h1>
      <p className="hero-description">{content.hero.description}</p>
      <div className="hero-actions"><button className="primary-button" onClick={onWork} type="button">{content.hero.cta}<ArrowUpRight /></button><a className="text-link" download="Raihan_Irvana_CV.pdf" href="/cv/Raihan_Irvana_CV.pdf">{content.highlights.downloadCv}<span aria-hidden="true">↓</span></a></div>
      <HighlightsColumn content={content} />
      <button className="bio-link" onClick={onBio} type="button">{content.about.subtitle}<span aria-hidden="true">+</span></button>
    </div>
  );
}

/** Presents the summary and optional biography within the same viewport. */
export function HeroColumn({ content, onWork }: Props) {
  const [reading, setReading] = useState(false);
  return reading ? <Biography content={content} onBack={() => setReading(false)} /> : <Introduction content={content} onWork={onWork} onBio={() => setReading(true)} />;
}
