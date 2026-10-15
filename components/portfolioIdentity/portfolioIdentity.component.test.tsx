import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { enDictionary } from "@/content/locales/en";
import { IdentityColumn } from "./portfolioIdentity.component";

describe("portfolioIdentity.component", () => {
  it("matches the initial toolkit snapshot", () => {
    const { asFragment } = render(<IdentityColumn content={enDictionary} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("makes every technology accessible through its category", () => {
    render(<IdentityColumn content={enDictionary} />);
    const selector = screen.getByRole("combobox", { name: enDictionary.skills.categoryLabel });
    enDictionary.skills.groups.forEach((group, index) => {
      fireEvent.change(selector, { target: { value: String(index) } });
      expect(screen.getByRole("heading", { name: group.label })).toBeInTheDocument();
      for (const item of group.items) expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
