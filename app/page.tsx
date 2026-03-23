import type { Metadata } from "next";
import Script from "next/script";

import { PortfolioPage } from "@/components/portfolio/portfolioPage";
import { enDictionary } from "@/content/locales/en";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: enDictionary.metadata.description,
  keywords: [
    "Raihan Irvana",
    "Fullstack Engineer",
    "Next.js Developer",
    "React Developer",
    "React Native Developer",
    "Node.js Developer",
    "JavaScript Engineer",
    "TypeScript Engineer",
    "Portfolio",
  ],
};

const knowsAbout = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Express.js",
  "GraphQL",
  "PostgreSQL",
  "Microservices",
];

/**
 * Builds the website schema entry.
 */
function getWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.name,
    description: enDictionary.metadata.description,
    inLanguage: ["en", "id"],
  };
}

/**
 * Builds the person schema entry.
 */
function getPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}#person`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    jobTitle: enDictionary.header.role,
    description: enDictionary.metadata.description,
    sameAs: [enDictionary.socials.github, enDictionary.socials.linkedin],
    email: "mailto:raihanirvana13@gmail.com",
    worksFor: {
      "@type": "Organization",
      name: enDictionary.experience.company,
    },
    knowsAbout,
  };
}

/**
 * Builds the structured data graph for the homepage.
 */
function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [getWebsiteSchema(), getPersonSchema()],
  };
}

/**
 * Renders the structured data script tag.
 */
function StructuredData() {
  return (
    <Script
      id="person-jsonld"
      strategy="beforeInteractive"
      type="application/ld+json"
    >
      {JSON.stringify(getStructuredData())}
    </Script>
  );
}

/**
 * Renders the single-page portfolio homepage.
 */
export default function HomePage() {
  return (
    <>
      <StructuredData />
      <PortfolioPage initialContent={enDictionary} />
    </>
  );
}
