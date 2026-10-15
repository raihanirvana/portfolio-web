"use client";

import { useState } from "react";
import type { ModalKey, PortfolioDictionary } from "@/content/locales/types";
import { usePortfolioContent, usePortfolioLocale, usePortfolioMetadata } from "./portfolioPage.handler.component";
import { FloatingSocialLinks, PortfolioHeader } from "@/components/portfolioHeader/portfolioHeader.component";
import { HeroColumn } from "@/components/portfolioHero/portfolioHero.component";
import { IdentityColumn } from "@/components/portfolioIdentity/portfolioIdentity.component";
import { PortfolioProjects } from "@/components/portfolioProjects/portfolioProjects.component";
import { PortfolioExperience } from "@/components/portfolioExperience/portfolioExperience.component";
import { PortfolioContact } from "@/components/portfolioContact/portfolioContact.component";

type ViewProps = { content: PortfolioDictionary; view: ModalKey; onSelect: (view: ModalKey) => void };

/** Replaces the central view without extending the document. */
function PortfolioStage({ content, view, onSelect }: ViewProps) {
  const views = { about: <HeroColumn content={content} onWork={() => onSelect("projects")} />, projects: <PortfolioProjects content={content} />, experience: <PortfolioExperience content={content} />, skills: <IdentityColumn content={content} />, contact: <PortfolioContact content={content} /> };
  return <main id="main-content" className="content-stage" tabIndex={-1}><section key={view} aria-label={content.actions.find((action) => action.key === view)?.label}>{views[view]}</section></main>;
}

/** Renders the persistent, compact navigation. */
function PortfolioNavigation({ content, view, onSelect }: ViewProps) {
  const order: ModalKey[] = ["about", "projects", "experience", "skills", "contact"];
  return <nav className="view-navigation" aria-label={content.localeSwitcher.label === "Pilih bahasa" ? "Navigasi utama" : "Main navigation"}>{order.map((key) => <button aria-controls="main-content" aria-pressed={view === key} key={key} onClick={() => onSelect(key)} type="button">{content.actions.find((action) => action.key === key)?.label}<span aria-hidden="true" /></button>)}</nav>;
}

/** Renders the single-screen bilingual portfolio. */
export function PortfolioPage({ initialContent }: { initialContent: PortfolioDictionary }) {
  const [selection, setSelection] = useState({ view: "about" as ModalKey, version: 0 });
  const selectView = (view: ModalKey) => setSelection((current) => ({ view, version: current.version + 1 }));
  const { locale, setLocale } = usePortfolioLocale();
  const content = usePortfolioContent(initialContent, locale);
  usePortfolioMetadata(content);
  return (
    <div id="top" className="portfolio-site">
      <a className="skip-link" href="#main-content">{content.studio.skipLink}</a>
      <PortfolioHeader content={content} locale={locale} onLocaleChange={setLocale} onHome={() => selectView("about")} />
      <PortfolioStage key={selection.version} content={content} view={selection.view} onSelect={selectView} />
      <PortfolioNavigation content={content} view={selection.view} onSelect={selectView} />
      <footer className="site-footer"><span>© {new Date().getFullYear()} {content.header.title}</span><FloatingSocialLinks content={content} /></footer>
    </div>
  );
}
