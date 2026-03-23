import type { ReactElement, ReactNode } from "react";
import type { SVGProps } from "react";

import type { PortfolioDictionary } from "@/content/locales/types";
import type { Locale } from "@/lib/locales";

export type PortfolioIcon = (props: SVGProps<SVGSVGElement>) => ReactElement;

export type ModalKey =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

export type ModalItem = {
  content: ReactNode;
  subtitle: string;
  title: string;
};

export type ModalData = Record<ModalKey, ModalItem>;

export type ActionItem = {
  icon: PortfolioIcon;
  key: ModalKey;
  label: string;
  tone: string;
};

export type ActionButtonProps = {
  isActive: boolean;
  item: ActionItem;
  onClick: () => void;
};

export type DialogTriggerButtonProps = {
  children: ReactNode;
  isActive: boolean;
};

export type HeroCtaButtonProps = {
  children: ReactNode;
  isActive: boolean;
  onOpen: (key: ModalKey) => void;
};

export type LocaleButtonProps = {
  isActive: boolean;
  label: "EN" | "ID";
  onClick: () => void;
};

export type LocaleSwitcherProps = {
  label: string;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export type ModalProps = {
  content: PortfolioDictionary;
  onClose: () => void;
  openKey: ModalKey | null;
};

export type OpenHandlerProps = {
  actions: ActionItem[];
  content: PortfolioDictionary;
  onOpen: (key: ModalKey) => void;
  openKey: ModalKey | null;
};

export type PortfolioLinkProps = {
  ariaLabel: string;
  href: string;
  icon: ReactElement;
};
