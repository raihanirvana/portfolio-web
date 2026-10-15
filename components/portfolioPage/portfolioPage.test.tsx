import React from "react";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { PortfolioPage } from "./portfolioPage";
import { enDictionary } from "@/content/locales/en";

function navigate(name: string) {
  fireEvent.click(within(screen.getByRole("navigation", { name: "Main navigation" })).getByRole("button", { name }));
}

describe("PortfolioPage", () => {
  beforeEach(() => window.localStorage.clear());

  it("replaces the central view instead of stacking sections", () => {
    render(<PortfolioPage initialContent={enDictionary} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(enDictionary.hero.titleLine1);
    navigate("Projects");
    expect(screen.getByRole("heading", { name: "Account Arena" })).toBeInTheDocument();
    expect(screen.queryByText(enDictionary.hero.titleLine1)).not.toBeInTheDocument();
    navigate("Experience");
    expect(screen.getByRole("heading", { name: "Jenius." })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Account Arena" })).not.toBeInTheDocument();
    navigate("Skills");
    expect(screen.getByRole("heading", { name: "Skills." })).toBeInTheDocument();
    navigate("Contact");
    expect(screen.getByRole("link", { name: "raihanirvana13@gmail.com" })).toHaveAttribute("href", enDictionary.socials.email);
  });

  it("makes every project and its original repository available", () => {
    render(<PortfolioPage initialContent={enDictionary} />);
    fireEvent.click(screen.getByRole("button", { name: enDictionary.hero.cta }));
    const projects = screen.getByRole("group", { name: "Projects" });
    for (const project of enDictionary.projects.items) {
      fireEvent.click(within(projects).getByRole("button", { name: project.name }));
      expect(screen.getByRole("heading", { name: project.name })).toBeInTheDocument();
      for (const link of project.links) expect(screen.getAllByRole("link").some((element) => element.getAttribute("href") === link.href)).toBe(true);
    }
  });

  it("cycles all experience responsibilities in both directions", () => {
    render(<PortfolioPage initialContent={enDictionary} />);
    navigate("Experience");
    for (const item of enDictionary.experience.items) {
      expect(screen.getByText(item)).toBeInTheDocument();
      fireEvent.click(screen.getByRole("button", { name: "Next responsibility" }));
    }
    expect(screen.getByText(enDictionary.experience.items[0])).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Previous responsibility" }));
    expect(screen.getByText(enDictionary.experience.items[enDictionary.experience.items.length - 1])).toBeInTheDocument();
  });

  it("preserves language across reloads and view changes", async () => {
    const { unmount } = render(<PortfolioPage initialContent={enDictionary} />);
    fireEvent.click(screen.getByRole("button", { name: "ID" }));
    expect(await screen.findByRole("link", { name: "Unduh CV" })).toHaveAttribute("download", "Raihan_Irvana_CV.pdf");
    expect(document.documentElement.lang).toBe("id");
    unmount();
    render(<PortfolioPage initialContent={enDictionary} />);
    expect(await screen.findByRole("link", { name: "Unduh CV" })).toBeInTheDocument();
    fireEvent.click(within(screen.getByRole("navigation", { name: "Navigasi utama" })).getByRole("button", { name: "Proyek" }));
    expect(screen.getByText("Marketplace game")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "EN" }));
    await waitFor(() => expect(document.title).toBe(enDictionary.metadata.title));
    expect(screen.getByRole("heading", { name: "Account Arena" })).toBeInTheDocument();
  });
});
