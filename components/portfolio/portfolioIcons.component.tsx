"use client";

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

type IconComponent = (props: IconProps) => React.JSX.Element;

/**
 * Renders the shared SVG wrapper for local icons.
 */
function BaseIcon({ children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowUpRight: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </BaseIcon>
);

export const Briefcase: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <rect height="13" rx="2" width="20" x="2" y="7" />
    <path d="M2 12h20" />
  </BaseIcon>
);

export const ChevronRight: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="m9 18 6-6-6-6" />
  </BaseIcon>
);

export const Code2: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="m8 9-4 3 4 3" />
    <path d="m16 9 4 3-4 3" />
    <path d="m14 4-4 16" />
  </BaseIcon>
);

export const ExternalLink: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </BaseIcon>
);

export const FileText: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </BaseIcon>
);

export const FolderKanban: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M8 10v4" />
    <path d="M12 10v2" />
    <path d="M16 10v6" />
  </BaseIcon>
);

export const Github: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
    <path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3 0 6-1.8 6-8a6.2 6.2 0 0 0-1.7-4.3 5.8 5.8 0 0 0-.1-4.3s-1.4-.4-4.6 1.7a15.8 15.8 0 0 0-8.4 0C2.1-1.5.7-1.1.7-1.1A5.8 5.8 0 0 0 .6 3.2 6.2 6.2 0 0 0-1.1 7.5c0 6.2 3 8 6 8a3.4 3.4 0 0 0-.9 2.6V22" transform="translate(2 1)" />
  </BaseIcon>
);

export const Linkedin: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" transform="translate(-2 0)" />
    <rect height="12" width="4" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </BaseIcon>
);

export const Mail: IconComponent = (props) => (
  <BaseIcon {...props}>
    <rect height="16" rx="2" width="20" x="2" y="4" />
    <path d="m22 7-10 7L2 7" />
  </BaseIcon>
);

export const Sparkles: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="m12 3 1.9 4.1L18 9l-4.1 1.9L12 15l-1.9-4.1L6 9l4.1-1.9z" />
    <path d="M5 3v4" />
    <path d="M3 5h4" />
    <path d="M19 17v4" />
    <path d="M17 19h4" />
  </BaseIcon>
);

export const User: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="M20 21a8 8 0 0 0-16 0" />
    <circle cx="12" cy="8" r="4" />
  </BaseIcon>
);

export const X: IconComponent = (props) => (
  <BaseIcon {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </BaseIcon>
);
