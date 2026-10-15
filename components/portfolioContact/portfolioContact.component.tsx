import { ArrowUpRight } from "@/components/portfolioIcons/portfolioIcons.component";
import type { PortfolioDictionary } from "@/content/locales/types";

/** Presents the invitation and every supplied contact channel in one screen. */
export function PortfolioContact({ content }: { content: PortfolioDictionary }) {
  return (
    <div className="contact-view stage-enter"><p className="view-label">{content.contact.subtitle}</p><h1>{content.studio.contactTitle}</h1><a className="contact-email" href={content.socials.email}>raihanirvana13@gmail.com<ArrowUpRight /></a><div className="contact-channels">{content.contact.cards.filter((card) => !card.href.startsWith("mailto:")).map((card) => <a href={card.href} key={card.label} rel="noreferrer" target="_blank">{card.label}<ArrowUpRight /></a>)}</div></div>
  );
}
