"use client";

import { useState } from "react";
import { ArrowUpRight } from "@/components/portfolioIcons/portfolioIcons.component";
import type { PortfolioDictionary } from "@/content/locales/types";

type Props = { content: PortfolioDictionary };
type Project = PortfolioDictionary["projects"]["items"][number];

/** Renders the original repository destinations. */
function ProjectSources({ project }: { project: Project }) {
  const links = project.links.filter((link, index, all) => all.findIndex((item) => item.href === link.href) === index);
  return <div className="project-sources">{links.map((link) => <a aria-label={`${project.name} ${link.label}`} href={link.href} key={link.href} rel="noreferrer" target="_blank">{link.label}<ArrowUpRight /></a>)}</div>;
}

/** Renders a compact selector for the project collection. */
function ProjectSelector({ content, active, onSelect }: Props & { active: number; onSelect: (value: number) => void }) {
  return (
    <div className="project-selector"><p className="view-label">{content.projects.subtitle}</p><div className="project-list" role="group" aria-label={content.projects.title}>{content.projects.items.map((project, index) => <button aria-pressed={active === index} key={project.name} onClick={() => onSelect(index)} type="button">{project.name}<span aria-hidden="true">↗</span></button>)}</div><label className="mobile-project-select">{content.projects.title}<select value={active} onChange={(event) => onSelect(Number(event.target.value))}>{content.projects.items.map((project, index) => <option value={index} key={project.name}>{project.name}</option>)}</select></label></div>
  );
}

/** Presents every project through one fixed, uncluttered detail stage. */
export function PortfolioProjects({ content }: Props) {
  const [active, setActive] = useState(0);
  const project = content.projects.items[active];
  return (
    <div className="projects-view stage-enter"><ProjectSelector content={content} active={active} onSelect={setActive} /><article className="project-detail" aria-live="polite"><span className="project-category">{content.studio.projectTypes[active]}</span><h1>{project.name}</h1><p className="project-description">{project.desc}</p><p className="project-stack">{project.stack.replaceAll(" · ", " / ")}</p><ProjectSources project={project} /><div className="project-position"><span>{String(active + 1).padStart(2, "0")} <i>/ {String(content.projects.items.length).padStart(2, "0")}</i></span><a href={content.socials.github} rel="noreferrer" target="_blank">{content.studio.repositories}<ArrowUpRight /></a></div></article></div>
  );
}
