import type { PortfolioDictionary } from "./types";

export const idDictionary: PortfolioDictionary = {
  studio: {
    back: "Kembali",
    greeting: "Halo, saya Raihan. Fullstack Engineer.",
    availability: "Terbuka untuk kerja remote",
    workTitle: "Beberapa karya saya.",
    workDescription: "Beberapa proyek yang saya kerjakan, dari frontend hingga backend.",
    repositories: "Semua repositori",
    source: "Lihat kode",
    illustration: "Ilustrasi antarmuka",
    otherWork: "Karya lainnya",
    experienceTitle: "Pengalaman di Jenius.",
    aboutTitle: "Membangun produk dari frontend hingga backend.",
    contactTitle: "Mari bekerja sama.",
    contactCta: "Hubungi saya",
    backToTop: "Kembali ke atas",
    skipLink: "Langsung ke konten",
    architecture: "Satu produk. Setiap lapisan.",
    layerLabel: "Jelajahi stack",
    layers: [
      { name: "Antarmuka", detail: "Antarmuka web dan mobile yang mudah digunakan.", tools: "React / Next.js / React Native" },
      { name: "Layanan", detail: "API dan layanan yang dapat diandalkan.", tools: "Node.js / Express.js / GraphQL" },
      { name: "Data", detail: "Penyimpanan dan pengolahan data.", tools: "PostgreSQL / Redis / Kafka" },
    ],
    projectTypes: ["Marketplace game", "Website personal", "Pemesanan tiket film", "Pemesanan web & mobile", "E-commerce furnitur"],
    footer: "Dibangun dengan teliti, dari awal hingga akhir.",
  },
  about: {
    paragraphs: [
      "Saya Raihan Irvana, Fullstack Engineer yang membangun aplikasi web dan mobile dengan JavaScript dan TypeScript.",
      "Saya mengutamakan alur penggunaan yang jelas, kode yang mudah dirawat, dan sistem yang dapat diandalkan.",
      "Di Jenius, saya mengerjakan fitur lending dari frontend hingga backend, termasuk integrasi API, background workers, dan proses rilis.",
    ],
    subtitle: "Tentang saya",
    title: "Tentang",
  },

  actions: [
    { key: "about", label: "Tentang" },
    { key: "experience", label: "Pengalaman" },
    { key: "projects", label: "Proyek" },
    { key: "skills", label: "Keahlian" },
    { key: "contact", label: "Kontak" },
  ],

  contact: {
    cards: [
      {
        href: "mailto:raihanirvana13@gmail.com",
        label: "Email",
        value: "raihanirvana13@gmail.com",
      },
      {
        href: "https://wa.me/+6285856914478",
        label: "WhatsApp",
        value: "+62 858-5691-4478",
      },
      {
        href: "https://linkedin.com/in/raihanirvana",
        label: "LinkedIn",
        value: "linkedin.com/in/raihanirvana",
      },
      {
        href: "https://github.com/raihanirvana",
        label: "GitHub",
        value: "github.com/raihanirvana",
      },
    ],
    subtitle: "Terbuka untuk pekerjaan remote dan kolaborasi.",
    title: "Kontak",
  },

  experience: {
    company: "Jenius Digital Bank",
    items: [
      "Mengembangkan fitur lending Jenius untuk pengajuan kredit, pengelolaan limit, Flexi Cash, Pay Later, dan kartu kredit pada aplikasi mobile dan layanan backend.",
      "Mengembangkan fitur React Native dengan Redux, Apollo GraphQL, React Hook Form, dan Flow. Menggunakan shared components, custom hooks, lazy queries, serta memoization.",
      "Membangun microservices Node.js dengan Express dan Hapi, integrasi GraphQL/REST, validasi Joi, penyimpanan MongoDB, serta caching Redis.",
      "Mengerjakan Kafka workers dan cron jobs untuk pengajuan kredit, aktivasi, pembaruan limit, penagihan, dan retry.",
      "Menulis tes dengan Jest, React Native Testing Library, Mocha, Chai, dan Sinon. Mendukung SIT/UAT, deployment melalui Jenkins/OpenShift, serta monitoring dengan New Relic.",
      "Acting Product Owner (Feb 2025–Mar 2026), sekaligus engineer: menyusun PRD, backlog, dan acceptance criteria; mengoordinasikan stakeholder, SIT/UAT, dan rilis.",
    ],
    role: "Fullstack Engineer, Jenius Digital Bank",
    subtitle: "Pengalaman kerja",
    title: "Pengalaman",
    year: "Agu 2023 — Sekarang",
  },

  header: {
    role: "Fullstack Engineer",
    title: "Raihan Irvana",
  },

  hero: {
    cta: "Lihat proyek",
    description:
      "Saya membangun aplikasi web dan mobile, dari tampilan yang digunakan sehari-hari hingga layanan di baliknya.",
    domain: "raihan irvana",
    subtitle: "JavaScript · Pengembangan produk · Arsitektur sistem",
    titleLine1: "Dirancang matang.",
    titleLine2: "Dibangun tuntas.",
  },

  highlights: {
    downloadCv: "Unduh CV",
    items: [
      "3+ tahun pengalaman",
      "Ekosistem JavaScript",
      "Terbuka untuk kerja remote",
      "Fullstack end-to-end",
    ],
    title: "Sorotan",
  },

  identity: {
    description:
      "Fullstack Engineer dengan pengalaman membangun aplikasi mobile, layanan backend, dan integrasi antarsistem.",
    focusDescription:
      "Web, mobile, dan backend.",
    focusTitle: "Fokus",
    title: "Profil",
  },

  localeSwitcher: {
    label: "Pilih bahasa",
  },

  metadata: {
    description:
      "Portofolio Raihan Irvana, Fullstack Engineer dengan pengalaman React, React Native, Next.js, Node.js, dan TypeScript.",
    title: "Raihan Irvana | Portofolio Fullstack Engineer",
  },

  modalCloseLabel: "Tutup",

  projects: {
    items: [
      {
        desc: "Marketplace untuk jual beli akun game, dengan fitur pencarian, katalog, dan transaksi.",
        links: [
          {
            href: "https://github.com/accarena07/account-arena",
            label: "Frontend",
          },
          {
            href: "https://github.com/accarena07/account-arena",
            label: "Backend",
          },
        ],
        name: "Account Arena",
        stack: "Next.js · Tailwind",
      },
      {
        desc: "Website portofolio dua bahasa untuk menampilkan profil, pengalaman, proyek, dan kontak.",
        links: [
          {
            href: "https://github.com/raihanirvana/portfolio-web",
            label: "Frontend",
          },
        ],
        name: "Portfolio Web",
        stack: "Next.js · Tailwind",
      },
      {
        desc: "Proyek tim untuk pemesanan tiket film, mencakup login, pemesanan, riwayat pembelian, dan pengelolaan profil.",
        links: [
          {
            href: "https://github.com/raihanirvana/TICKETING-FE",
            label: "Frontend",
          },
          {
            href: "https://github.com/purapuraturtle/tickits-be",
            label: "Backend",
          },
        ],
        name: "Tickitz",
        stack: "Next.js · Express.js · Tailwind",
      },
      {
        desc: "Aplikasi pemesanan kopi berbasis web dan mobile, dengan fitur login, pemesanan, dan pengelolaan profil.",
        links: [
          {
            href: "https://github.com/raihanirvana/Coffee-Shop-FrontEnd",
            label: "Frontend",
          },
          {
            href: "https://github.com/raihanirvana/Coffee-Shop-BE",
            label: "Backend",
          },
          {
            href: "https://github.com/raihanirvana/CoffeeShop-Mobile-Native",
            label: "Mobile",
          },
        ],
        name: "Coffee Shop Online",
        stack: "React · Express.js · PostgreSQL",
      },
      {
        desc: "Proyek tim untuk toko furnitur online. Saya berkontribusi pada frontend, backend, dan integrasi alur pembelian.",
        links: [
          {
            href: "https://github.com/digi-squad/raz-fe",
            label: "Frontend",
          },
          {
            href: "https://github.com/raihanirvana/raz-be",
            label: "Backend",
          },
        ],
        name: "Raz Furniture",
        stack: "JavaScript · Express.js · Web App",
      },
    ],
    subtitle: "Proyek pilihan",
    title: "Proyek",
  },

  skills: {
    categoryLabel: "Kategori teknologi",
    groups: [
      { items: ["JavaScript", "TypeScript", "Flow", "React", "React Native", "Next.js", "Nuxt.js", "Redux / Redux Toolkit", "Apollo Client", "React Hook Form", "Tailwind CSS"], label: "Frontend & Mobile" },
      { items: ["Node.js", "Express.js", "NestJS", "Hapi", "GraphQL", "REST APIs", "Joi", "Zod"], label: "Backend & APIs" },
      { items: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "Kafka", "Elasticsearch", "MinIO"], label: "Data & Messaging" },
      { items: ["Kafka consumers", "Background workers", "Cron jobs", "Microservices", "Microfrontends", "Feature flags"], label: "Workers & Architecture" },
      { items: ["Jest", "React Native Testing Library", "Enzyme", "Mocha", "Chai", "Sinon", "Supertest", "NYC / Istanbul"], label: "Testing" },
      { items: ["Git", "Docker", "Jenkins", "OpenShift", "New Relic", "SIT / UAT"], label: "Deployment & Monitoring" },
    ],
    subtitle: "Teknologi yang saya gunakan",
    title: "Keahlian",
  },

  socials: {
    email: "mailto:raihanirvana13@gmail.com",
    github: "https://github.com/raihanirvana",
    linkedin: "https://linkedin.com/in/raihanirvana",
    whatsapp: "https://wa.me/+6285856914478",
  },
};
