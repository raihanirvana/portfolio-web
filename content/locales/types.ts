export type ModalKey =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

export type PortfolioDictionary = {
  about: {
    paragraphs: string[];
    subtitle: string;
    title: string;
  };
  actions: Array<{
    key: ModalKey;
    label: string;
  }>;
  contact: {
    cards: Array<{
      href: string;
      label: string;
      value: string;
    }>;
    subtitle: string;
    title: string;
  };
  experience: {
    company: string;
    items: string[];
    role: string;
    subtitle: string;
    title: string;
    year: string;
  };
  header: {
    role: string;
    title: string;
  };
  hero: {
    cta: string;
    description: string;
    domain: string;
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
  };
  highlights: {
    downloadCv: string;
    items: string[];
    title: string;
  };
  identity: {
    description: string;
    focusDescription: string;
    focusTitle: string;
    title: string;
  };
  localeSwitcher: {
    label: string;
  };
  metadata: {
    description: string;
    title: string;
  };
  modalCloseLabel: string;
  projects: {
    items: Array<{
      desc: string;
      links: Array<{
        href: string;
        label: string;
      }>;
      name: string;
      stack: string;
    }>;
    subtitle: string;
    title: string;
  };
  skills: {
    groups: Array<{
      items: string[];
      label: string;
    }>;
    subtitle: string;
    title: string;
  };
  socials: {
    email: string;
    github: string;
    linkedin: string;
    whatsapp: string;
  };
};
