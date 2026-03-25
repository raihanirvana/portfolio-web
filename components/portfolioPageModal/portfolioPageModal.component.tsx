"use client";

import { useEffect } from "react";

import {
  AnimatePresence,
  m,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import {
  ExternalLink,
  X,
} from "@/components/portfolioIcons/portfolioIcons.component";

import type { PortfolioDictionary } from "@/content/locales/types";
import {
  type ModalData,
  type ModalItem,
  type ModalKey,
  type ModalProps,
} from "@/components/portfolioPage/portfolioPage.type.component";

const portfolioDialogId = "portfolio-modal";

type ModalShellProps = {
  children: React.ReactNode;
  closeLabel: string;
  onClose: () => void;
  subtitle: string;
  title: string;
};

type ModalFrameProps = {
  children: React.ReactNode;
  prefersReducedMotion: boolean;
};

/**
 * Returns modal motion variants based on motion preference.
 */
function getModalAnimationProps(prefersReducedMotion: boolean) {
  if (prefersReducedMotion) {
    return {
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      initial: { opacity: 0 },
    };
  }

  return {
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.985, y: 10 },
    initial: { opacity: 0, scale: 0.985, y: 18 },
  };
}

/**
 * Returns static accessibility props for the modal frame.
 */
function getModalAccessibilityProps() {
  return {
    "aria-labelledby": "modal-title",
    "aria-modal": "true" as const,
    id: portfolioDialogId,
  };
}

/**
 * Returns transition settings based on motion preference.
 */
function getMotionTransition(prefersReducedMotion: boolean): Transition {
  return prefersReducedMotion
    ? { duration: 0 }
    : {
        duration: 0.24,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      };
}

/**
 * Renders one skill badge.
 */
function SkillBadge({ item }: { item: string }) {
  return (
    <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700">
      {item}
    </span>
  );
}

/**
 * Renders the badge row for one skill group.
 */
function SkillBadges({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <SkillBadge item={item} key={item} />
      ))}
    </div>
  );
}

/**
 * Renders a single skills group card.
 */
function SkillGroupCard({
  group,
}: {
  group: PortfolioDictionary["skills"]["groups"][number];
}) {
  return (
    <div className="rounded-[1.75rem] border border-zinc-200/90 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-zinc-950">{group.label}</h3>
      <SkillBadges items={group.items} />
    </div>
  );
}

/**
 * Renders the skills grid.
 */
function SkillsGrid({
  groups,
}: {
  groups: PortfolioDictionary["skills"]["groups"];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((group) => (
        <SkillGroupCard group={group} key={group.label} />
      ))}
    </div>
  );
}

/**
 * Builds the skills modal content entry.
 */
function createSkillsModal(content: PortfolioDictionary): ModalItem {
  return {
    content: <SkillsGrid groups={content.skills.groups} />,
    subtitle: content.skills.subtitle,
    title: content.skills.title,
  };
}

/**
 * Renders a single project link chip.
 */
function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {label}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}

/**
 * Renders the project link chips.
 */
function ProjectLinks({
  links,
}: {
  links: PortfolioDictionary["projects"]["items"][number]["links"];
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {links.map((link) => (
        <ProjectLink href={link.href} key={link.href} label={link.label} />
      ))}
    </div>
  );
}

/**
 * Renders a project card inside the slider.
 */
function ProjectCard({
  project,
}: {
  project: PortfolioDictionary["projects"]["items"][number];
}) {
  return (
    <div className="min-w-[280px] snap-start rounded-[1.75rem] border border-zinc-200/90 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:min-w-[340px] lg:min-w-[360px]">
      <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">
        {project.stack}
      </p>
      <h3 className="mt-3 font-semibold text-zinc-950">{project.name}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600">{project.desc}</p>
      <ProjectLinks links={project.links} />
    </div>
  );
}

/**
 * Builds the projects modal content entry.
 */
function createProjectsModal(content: PortfolioDictionary): ModalItem {
  return {
    content: (
      <div className="-mx-1 overflow-x-auto pb-2">
        <div className="flex snap-x snap-mandatory gap-4 px-1">
          {content.projects.items.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    ),
    subtitle: content.projects.subtitle,
    title: content.projects.title,
  };
}

/**
 * Renders the experience card bullet items.
 */
function ExperienceCardItems({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 leading-7">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * Renders the experience card header.
 */
function ExperienceCardHeader({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="font-semibold text-zinc-950">{content.experience.role}</h3>
        <p className="text-zinc-500">{content.experience.company}</p>
      </div>
      <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">
        {content.experience.year}
      </p>
    </div>
  );
}

/**
 * Renders the experience modal card.
 */
function ExperienceCard({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="space-y-5 text-sm text-zinc-700">
      <div className="rounded-[1.75rem] border border-zinc-200/90 bg-white p-5 shadow-sm">
        <ExperienceCardHeader content={content} />
        <ExperienceCardItems items={content.experience.items} />
      </div>
    </div>
  );
}

/**
 * Builds the experience modal content entry.
 */
function createExperienceModal(content: PortfolioDictionary): ModalItem {
  return {
    content: <ExperienceCard content={content} />,
    subtitle: content.experience.subtitle,
    title: content.experience.title,
  };
}

/**
 * Renders a single contact card.
 */
function ContactCard({
  card,
}: {
  card: PortfolioDictionary["contact"]["cards"][number];
}) {
  return (
    <a
      className="rounded-[1.75rem] border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50"
      href={card.href}
      rel={card.href.startsWith("http") ? "noreferrer" : undefined}
      target={card.href.startsWith("http") ? "_blank" : undefined}
    >
      <p className="text-zinc-500">{card.label}</p>
      <p className="mt-2 text-sm font-medium text-zinc-950">{card.value}</p>
    </a>
  );
}

/**
 * Builds the contact modal content entry.
 */
function createContactModal(content: PortfolioDictionary): ModalItem {
  return {
    content: (
      <div className="grid gap-4 md:grid-cols-3">
        {content.contact.cards.map((card) => (
          <ContactCard card={card} key={card.href} />
        ))}
      </div>
    ),
    subtitle: content.contact.subtitle,
    title: content.contact.title,
  };
}

/**
 * Builds the about modal content entry.
 */
function createAboutModal(content: PortfolioDictionary): ModalItem {
  return {
    content: (
      <div className="space-y-5 text-sm leading-7 text-zinc-700">
        {content.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    ),
    subtitle: content.about.subtitle,
    title: content.about.title,
  };
}

/**
 * Builds all localized modal data.
 */
function getModalData(content: PortfolioDictionary): ModalData {
  return {
    about: createAboutModal(content),
    contact: createContactModal(content),
    experience: createExperienceModal(content),
    projects: createProjectsModal(content),
    skills: createSkillsModal(content),
  };
}

/**
 * Returns the selected modal item for the current key.
 */
function getSelectedModal(content: PortfolioDictionary, openKey: ModalKey | null) {
  const modalData = getModalData(content);

  return openKey ? modalData[openKey] : null;
}

/**
 * Renders the modal close button.
 */
function ModalCloseButton({
  closeLabel,
  onClose,
}: {
  closeLabel: string;
  onClose: () => void;
}) {
  return (
    <button
      aria-label={closeLabel}
      className="rounded-full border border-zinc-200 bg-white/80 p-2 text-zinc-500 transition hover:bg-white hover:text-zinc-900"
      onClick={onClose}
      type="button"
    >
      <X className="h-5 w-5" />
    </button>
  );
}

/**
 * Renders the modal header title block.
 */
function ModalHeaderTitle({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 sm:text-[11px]">
        {subtitle}
      </p>
      <h2
        className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
        id="modal-title"
      >
        {title}
      </h2>
    </div>
  );
}

/**
 * Renders the modal header.
 */
function ModalHeader({
  closeLabel,
  onClose,
  subtitle,
  title,
}: {
  closeLabel: string;
  onClose: () => void;
  subtitle: string;
  title: string;
}) {
  return (
    <div className="relative flex items-start justify-between border-b border-zinc-200/80 px-5 py-5 sm:px-8">
      <ModalHeaderTitle subtitle={subtitle} title={title} />
      <ModalCloseButton closeLabel={closeLabel} onClose={onClose} />
    </div>
  );
}

/**
 * Renders the modal frame with motion settings.
 */
function ModalFrame({ children, prefersReducedMotion }: ModalFrameProps) {
  const frameClassName = "relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]";
  const animationProps = getModalAnimationProps(prefersReducedMotion);
  const accessibilityProps = getModalAccessibilityProps();
  const transition = getMotionTransition(prefersReducedMotion);

  return (
    <m.div
      animate={animationProps.animate}
      {...accessibilityProps}
      className={frameClassName}
      exit={animationProps.exit}
      initial={animationProps.initial}
      onClick={(event) => event.stopPropagation()}
      role="dialog"
      transition={transition}
    >
      {children}
    </m.div>
  );
}

/**
 * Renders the animated modal shell.
 */
function ModalShell({
  children,
  closeLabel,
  onClose,
  subtitle,
  title,
}: ModalShellProps) {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const bodyClassName = "max-h-[calc(90vh-92px)] overflow-y-auto px-5 py-5 sm:px-8 sm:py-7";

  return (
    <ModalFrame prefersReducedMotion={prefersReducedMotion}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/55 to-transparent" />
      <ModalHeader closeLabel={closeLabel} onClose={onClose} subtitle={subtitle} title={title} />
      <div className={bodyClassName}>{children}</div>
    </ModalFrame>
  );
}

/**
 * Renders the modal overlay wrapper.
 */
function ModalOverlay({
  children, onClose, prefersReducedMotion,
}: {
  children: React.ReactNode;
  onClose: () => void;
  prefersReducedMotion: boolean;
}) {
  return (
    <m.div
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/28 p-3 backdrop-blur-xl sm:p-4"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      onClick={onClose}
      transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
    >
      {children}
    </m.div>
  );
}

/**
 * Renders the modal overlay and selected content.
 */
function ModalContent({ content, onClose, openKey }: ModalProps) {
  const selected = getSelectedModal(content, openKey);
  const prefersReducedMotion = Boolean(useReducedMotion());

  if (!selected) return null;

  return (
    <ModalOverlay onClose={onClose} prefersReducedMotion={prefersReducedMotion}>
      <ModalShell
        closeLabel={content.modalCloseLabel}
        onClose={onClose}
        subtitle={selected.subtitle}
        title={selected.title}
      >
        {selected.content}
      </ModalShell>
    </ModalOverlay>
  );
}

/**
 * Renders the lazily loaded portfolio modal.
 */
export function PortfolioModal({ content, onClose, openKey }: ModalProps) {
  const selected = getSelectedModal(content, openKey);

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, selected]);

  return (
    <AnimatePresence>
      {selected ? <ModalContent content={content} onClose={onClose} openKey={openKey} /> : null}
    </AnimatePresence>
  );
}
