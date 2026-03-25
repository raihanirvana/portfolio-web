import type { PortfolioDictionary } from "./types";

export const enDictionary: PortfolioDictionary = {
  about: {
    paragraphs: [
      "I’m Raihan Irvana, a Fullstack Engineer with a strong foundation in the JavaScript ecosystem and hands-on experience building products across both frontend and backend.",
      "I care about thoughtful engineering, product clarity, and clean execution. My approach is simple: build things that are reliable, maintainable, and genuinely useful.",
      "I’ve worked in digital banking, contributed to product development end-to-end, and collaborated across engineering and product to help ship features with clarity and confidence.",
    ],
    subtitle: "A brief introduction",
    title: "About",
  },

  actions: [
    { key: "about", label: "About" },
    { key: "experience", label: "Experience" },
    { key: "projects", label: "Projects" },
    { key: "skills", label: "Skills" },
    { key: "contact", label: "Contact" },
  ],

  contact: {
    cards: [
      { href: "mailto:raihanirvana13@gmail.com", label: "Email", value: "raihanirvana13@gmail.com" },
      { href: "https://wa.me/+6285856914478", label: "WhatsApp", value: "+62 858-5691-4478" },
      { href: "https://linkedin.com/in/raihanirvana", label: "LinkedIn", value: "linkedin.com/in/raihanirvana" },
      { href: "https://github.com/raihanirvana", label: "GitHub", value: "github.com/raihanirvana" },
    ],
    subtitle: "Open to remote opportunities and thoughtful collaborations",
    title: "Contact",
  },

  experience: {
    company: "PT Bank SMBC Indonesia",
    items: [
      "Built and maintained digital banking features across frontend and backend for a product used by millions.",
      "Worked across mobile frontend and backend services within microfrontend and microservices architecture in a large-scale banking environment.",
      "Delivered features end-to-end, from refining requirements and implementation to testing, release, and production readiness.",
      "Also supported product ownership responsibilities for around a year, including backlog refinement, PRD preparation, prioritization, release alignment, and stakeholder coordination.",
    ],
    role: "Fullstack Engineer, Jenius Digital Banking",
    subtitle: "Selected professional experience",
    title: "Experience",
    year: "Aug 2023 — Present",
  },

  header: {
    role: "Fullstack Engineer",
    title: "Raihan Irvana",
  },

  hero: {
    cta: "View Selected Work",
    description:
      "Fullstack Engineer building modern digital products with strong product sense, clean architecture, and calm execution across frontend and backend.",
    domain: "raihan irvana",
    subtitle: "JavaScript ecosystem · Product-minded delivery · Scalable systems",
    titleLine1: "Simple in appearance.",
    titleLine2: "Deliberate in execution.",
  },

  highlights: {
    downloadCv: "Download CV",
    items: ["3+ years experience", "JavaScript ecosystem", "Open to remote", "End-to-end fullstack"],
    title: "Highlights",
  },

  identity: {
    description:
      "A product-minded fullstack engineer focused on balanced delivery, scalable systems, and work that stays clean as it grows.",
    focusDescription:
      "Modern JavaScript systems, balanced frontend-backend development, and architecture built to stay maintainable.",
    focusTitle: "Focus",
    title: "Profile",
  },

  localeSwitcher: {
    label: "Select language",
  },

  metadata: {
    description:
      "Raihan Irvana is a Fullstack Engineer building scalable digital products with Next.js, React, React Native, Node.js, TypeScript, and modern JavaScript architecture.",
    title: "Raihan Irvana | Fullstack Engineer Portfolio",
  },

  modalCloseLabel: "Close modal",

  projects: {
    items: [
      {
        desc: "A marketplace web application for buying and selling game accounts, built with a modern frontend stack and flows for listings, discovery, and account transactions.",
        links: [
          { href: "https://github.com/accarena07/account-arena", label: "Frontend" },
          { href: "https://github.com/accarena07/account-arena", label: "Backend" },
        ],
        name: "Account Arena",
        stack: "Next.js · Tailwind",
      },
      {
        desc: "A personal portfolio website built to present profile, experience, selected projects, and contact information through a polished bilingual interface.",
        links: [
          { href: "https://github.com/raihanirvana/portfolio-web", label: "Frontend" },
        ],
        name: "Portfolio Web",
        stack: "Next.js · Tailwind",
      },
      {
        desc: "A movie ticket booking platform built in a team environment, covering booking flows, authentication, and transaction journeys across the full stack.",
        links: [
          { href: "https://github.com/raihanirvana/TICKETING-FE", label: "Frontend" },
          { href: "https://github.com/purapuraturtle/tickits-be", label: "Backend" },
        ],
        name: "Tickitz",
        stack: "Next.js · Express.js · Tailwind",
      },
      {
        desc: "An ordering platform with authentication, order flow, profile management, landing page experience, and multi-client implementation across web and mobile.",
        links: [
          { href: "https://github.com/raihanirvana/Coffee-Shop-FrontEnd", label: "Frontend" },
          { href: "https://github.com/raihanirvana/Coffee-Shop-BE", label: "Backend" },
          { href: "https://github.com/raihanirvana/CoffeeShop-Mobile-Native", label: "Mobile" },
        ],
        name: "Coffee Shop Online",
        stack: "React · Express.js · PostgreSQL",
      },
      {
        desc: "A furniture commerce platform developed through separate frontend and backend repositories with a fullstack implementation approach.",
        links: [
          { href: "https://github.com/digi-squad/raz-fe", label: "Frontend" },
          { href: "https://github.com/raihanirvana/raz-be", label: "Backend" },
        ],
        name: "Raz Furniture",
        stack: "JavaScript · Express.js · Web App",
      },
    ],
    subtitle: "A few selected builds",
    title: "Projects",
  },

  skills: {
    groups: [
      { items: ["React Native", "React", "Next.js", "TypeScript", "Tailwind CSS"], label: "Frontend" },
      { items: ["Node.js", "Express.js", "GraphQL", "REST API", "Joi"], label: "Backend" },
      { items: ["PostgreSQL", "Redis", "Kafka", "Jenkins", "OpenShift"], label: "Data & Infra" },
      { items: ["Microfrontend", "Microservices", "Testing", "Code Review", "Accessibility"], label: "Practices" },
    ],
    subtitle: "Core tools and strengths",
    title: "Skills",
  },

  socials: {
    email: "mailto:raihanirvana13@gmail.com",
    github: "https://github.com/raihanirvana",
    linkedin: "https://linkedin.com/in/raihanirvana",
    whatsapp: "https://wa.me/+6285856914478",
  },
};
