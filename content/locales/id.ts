import type { PortfolioDictionary } from "./types";

export const idDictionary: PortfolioDictionary = {
  about: {
    paragraphs: [
      "Saya Raihan Irvana, seorang Fullstack Engineer dengan fondasi yang kuat di ekosistem JavaScript dan pengalaman membangun produk di frontend maupun backend.",
      "Saya menikmati engineering yang matang, arah produk yang jelas, dan eksekusi yang rapi. Pendekatan saya sederhana: membangun hal yang andal, mudah dirawat, dan benar-benar berguna.",
      "Saya memiliki pengalaman di digital banking, terlibat dalam pengembangan produk secara end-to-end, dan bekerja lintas engineering maupun product untuk membantu menghadirkan fitur dengan jelas dan terarah.",
    ],
    subtitle: "Perkenalan singkat",
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
    subtitle: "Terbuka untuk peluang remote dan kolaborasi yang relevan",
    title: "Kontak",
  },

  experience: {
    company: "PT Bank SMBC Indonesia",
    items: [
      "Membangun dan memelihara fitur digital banking di frontend dan backend untuk produk yang digunakan oleh jutaan pengguna.",
      "Berkontribusi pada mobile frontend dan backend services dalam arsitektur microfrontend dan microservices di lingkungan perbankan berskala besar.",
      "Mengirim fitur secara end-to-end, mulai dari merapikan kebutuhan, implementasi, testing, release, hingga kesiapan produksi.",
      "Turut menjalankan tanggung jawab product ownership selama sekitar satu tahun, termasuk backlog refinement, penyusunan PRD, prioritisasi, release alignment, dan koordinasi stakeholder.",
    ],
    role: "Fullstack Engineer, Jenius Digital Banking",
    subtitle: "Pengalaman profesional pilihan",
    title: "Pengalaman",
    year: "Agu 2023 — Sekarang",
  },

  header: {
    role: "Fullstack Engineer",
    title: "Raihan Irvana",
  },

  hero: {
    cta: "Lihat Proyek Pilihan",
    description:
      "Fullstack Engineer yang membangun produk digital modern dengan product sense yang kuat, arsitektur yang bersih, dan eksekusi yang tenang di frontend maupun backend.",
    domain: "raihan irvana",
    subtitle: "Ekosistem JavaScript · Product-minded delivery · Sistem yang scalable",
    titleLine1: "Sederhana dalam tampilan.",
    titleLine2: "Presisi dalam eksekusi.",
  },

  highlights: {
    downloadCv: "Unduh CV",
    items: [
      "3+ tahun pengalaman",
      "Ekosistem JavaScript",
      "Terbuka untuk remote",
      "Fullstack end-to-end",
    ],
    title: "Sorotan",
  },

  identity: {
    description:
      "Fullstack engineer dengan pendekatan product-minded, fokus pada delivery yang seimbang, sistem yang scalable, dan hasil kerja yang tetap rapi saat berkembang.",
    focusDescription:
      "Sistem JavaScript modern, pengembangan frontend-backend yang seimbang, dan arsitektur yang dirancang agar tetap maintainable.",
    focusTitle: "Fokus",
    title: "Profil",
  },

  localeSwitcher: {
    label: "Pilih bahasa",
  },

  metadata: {
    description:
      "Portofolio Raihan Irvana, Fullstack Engineer yang membangun produk digital scalable dengan Next.js, React, React Native, Node.js, TypeScript, dan arsitektur JavaScript modern.",
    title: "Raihan Irvana | Portofolio Fullstack Engineer",
  },

  modalCloseLabel: "Tutup",

  projects: {
    items: [
      {
        desc: "Platform pemesanan tiket film yang dikembangkan dalam setup tim, mencakup alur booking, authentication, dan transaction journey secara fullstack.",
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
        desc: "Platform pemesanan dengan authentication, order flow, profile management, landing page experience, serta implementasi multi-client di web dan mobile.",
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
        desc: "Platform commerce furniture yang dikembangkan lewat repository frontend dan backend terpisah dengan pendekatan fullstack.",
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
    subtitle: "Beberapa karya pilihan",
    title: "Proyek",
  },

  skills: {
    groups: [
      {
        items: ["React Native", "React", "Next.js", "TypeScript", "Tailwind CSS"],
        label: "Frontend",
      },
      {
        items: ["Node.js", "Express.js", "GraphQL", "REST API", "Joi"],
        label: "Backend",
      },
      {
        items: ["PostgreSQL", "Redis", "Kafka", "Jenkins", "OpenShift"],
        label: "Data & Infrastruktur",
      },
      {
        items: ["Microfrontend", "Microservices", "Testing", "Code Review", "Accessibility"],
        label: "Praktik Engineering",
      },
    ],
    subtitle: "Tools inti dan kekuatan utama",
    title: "Keahlian",
  },

  socials: {
    email: "mailto:raihanirvana13@gmail.com",
    github: "https://github.com/raihanirvana",
    linkedin: "https://linkedin.com/in/raihanirvana",
  },
};
