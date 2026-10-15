"use client";

import { useState } from "react";
import type { PortfolioDictionary } from "@/content/locales/types";

/** Shows banking experience with a compact responsibility pager. */
export function PortfolioExperience({ content }: { content: PortfolioDictionary }) {
  const [active, setActive] = useState(0);
  const { experience } = content;
  return (
    <div className="experience-view stage-enter"><div className="experience-heading"><p className="view-label">{experience.year}</p><h1>Jenius.</h1><p className="experience-company">{experience.company}</p><h2>{experience.role}</h2></div><div className="experience-story"><span className="story-mark" aria-hidden="true">↳</span><p aria-live="polite">{experience.items[active]}</p><div className="story-pagination"><button aria-label={content.experience.title === "Pengalaman" ? "Tanggung jawab sebelumnya" : "Previous responsibility"} onClick={() => setActive((active + experience.items.length - 1) % experience.items.length)} type="button">←</button><span>{active + 1} / {experience.items.length}</span><button aria-label={content.experience.title === "Pengalaman" ? "Tanggung jawab berikutnya" : "Next responsibility"} onClick={() => setActive((active + 1) % experience.items.length)} type="button">→</button></div></div></div>
  );
}
