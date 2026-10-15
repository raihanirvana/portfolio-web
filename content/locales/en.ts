import type { PortfolioDictionary } from "./types";

export const enDictionary: PortfolioDictionary = {
  studio: {
    back: "Back to overview",
    greeting: "Hi, I’m Raihan. A fullstack engineer.",
    availability: "Open to remote opportunities",
    workTitle: "A few things I’ve built.",
    workDescription: "Different products. The same care, from the first interaction to the last API call.",
    repositories: "All repositories",
    source: "View source",
    illustration: "Interface illustration",
    otherWork: "Also on my workbench",
    experienceTitle: "Built for the everyday.",
    aboutTitle: "An engineer with a product mindset.",
    contactTitle: "Let’s build something that matters.",
    contactCta: "Say hello",
    backToTop: "Back to top",
    skipLink: "Skip to content",
    architecture: "One product. Every layer.",
    layerLabel: "Explore the stack",
    layers: [
      { name: "Interface", detail: "Thoughtful interactions, on the web and in your hand.", tools: "React / Next.js / React Native" },
      { name: "Services", detail: "Clear contracts. Reliable logic. Room to grow.", tools: "Node.js / Express.js / GraphQL" },
      { name: "Data", detail: "A solid foundation for everything on top.", tools: "PostgreSQL / Redis / Kafka" },
    ],
    projectTypes: ["Gaming marketplace", "Personal website", "Movie ticketing", "Web & mobile ordering", "Furniture commerce"],
    footer: "Thoughtfully built, all the way through.",
  },
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
      "Built lending journeys across credit assessment, credit limits, Flexi Cash, Pay Later, and credit cards within Jenius mobile microfrontends and backend services.",
      "Developed React Native features with Redux, Apollo GraphQL, React Hook Form, shared components, and Flow; improved responsiveness through lazy queries, memoization, and reusable hooks.",
      "Built Node.js microservices and GraphQL/REST integrations with Express and Hapi, Joi validation, MongoDB persistence, and Redis caching.",
      "Contributed to Kafka-based workers and scheduled cron jobs for lending applications, activation, limit updates, billing, and retry workflows.",
      "Tested mobile and backend changes with Jest, React Native Testing Library, Mocha, Chai, and Sinon; supported SIT/UAT, Jenkins/OpenShift releases, and New Relic monitoring.",
      "Acting Product Owner, Feb 2025–Mar 2026, alongside engineering: prepared PRDs and acceptance criteria, refined priorities, and coordinated stakeholders, testing, and release readiness.",
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
      "I turn product ideas into reliable digital experiences. Frontend, backend, and all the connections in between.",
    domain: "raihan irvana",
    subtitle: "JavaScript ecosystem · Product-minded delivery · Scalable systems",
    titleLine1: "Thoughtfully built.",
    titleLine2: "From end to end.",
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
      "Web, mobile, APIs, and the systems that connect them.",
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
    categoryLabel: "Explore by category",
    groups: [
      { items: ["JavaScript", "TypeScript", "Flow", "React", "React Native", "Next.js", "Nuxt.js", "Redux / Redux Toolkit", "Apollo Client", "React Hook Form", "Tailwind CSS"], label: "Frontend & Mobile" },
      { items: ["Node.js", "Express.js", "NestJS", "Hapi", "GraphQL", "REST APIs", "Joi", "Zod"], label: "Backend & APIs" },
      { items: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "Kafka", "Elasticsearch", "MinIO"], label: "Data & Messaging" },
      { items: ["Kafka consumers", "Background workers", "Cron jobs", "Microservices", "Microfrontends", "Feature flags"], label: "Workers & Architecture" },
      { items: ["Jest", "React Native Testing Library", "Enzyme", "Mocha", "Chai", "Sinon", "Supertest", "NYC / Istanbul"], label: "Testing" },
      { items: ["Git", "Docker", "Jenkins", "OpenShift", "New Relic", "SIT / UAT"], label: "Deployment & Monitoring" },
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
