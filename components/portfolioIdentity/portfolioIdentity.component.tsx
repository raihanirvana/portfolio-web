"use client";

import { useState } from "react";
import type { PortfolioDictionary } from "@/content/locales/types";

type ContentProps = { content: PortfolioDictionary };

/** Renders the context for the technical toolkit. */
function SkillsHeading({ content }: ContentProps) {
  return <div className="skills-heading"><p className="view-label">{content.skills.subtitle}</p><h1>{content.skills.title}.</h1><p>{content.identity.focusDescription}</p></div>;
}

/** Keeps the expanded toolkit browsable within the fixed content stage. */
function SkillCatalog({ content }: ContentProps) {
  const [active, setActive] = useState(0);
  const group = content.skills.groups[active];
  return (
    <div className="skill-catalog">
      <label className="skill-category-label" htmlFor="skill-category">{content.skills.categoryLabel}</label>
      <select id="skill-category" value={active} onChange={(event) => setActive(Number(event.target.value))}>{content.skills.groups.map((item, index) => <option value={index} key={item.label}>{item.label}</option>)}</select>
      <div className="skill-items" aria-live="polite"><h2 className="sr-only">{group.label}</h2><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <p className="skill-count">{String(active + 1).padStart(2, "0")}<span>/ {String(content.skills.groups.length).padStart(2, "0")}</span></p>
    </div>
  );
}

/** Renders the technical toolkit without extending the page. */
export function IdentityColumn({ content }: ContentProps) {
  return <div className="skills-view stage-enter"><SkillsHeading content={content} /><SkillCatalog content={content} /></div>;
}
