import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { enDictionary } from "@/content/locales/en";
import { HeroColumn } from "./portfolioHero.component";

describe("portfolioHero.component", () => {
  it("reveals the biography on request and returns to the introduction", () => {
    render(<HeroColumn content={enDictionary} />);
    fireEvent.click(screen.getByRole("button", { name: enDictionary.about.subtitle }));
    for (const paragraph of enDictionary.about.paragraphs) expect(screen.getByText(paragraph)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: enDictionary.studio.back }));
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute("href", "/cv/Raihan_Irvana_CV.pdf");
  });
});
