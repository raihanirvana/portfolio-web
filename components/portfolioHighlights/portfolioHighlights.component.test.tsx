import React from "react";
import { render } from "@testing-library/react";

import { enDictionary } from "@/content/locales/en";

import { HighlightsColumn } from "./portfolioHighlights.component";

describe("portfolioHighlights.component", () => {
  it("matches the highlights column snapshot", () => {
    const { asFragment } = render(
      <HighlightsColumn content={enDictionary} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
