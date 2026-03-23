import React from "react";
import { render } from "@testing-library/react";

import { enDictionary } from "@/content/locales/en";

import { IdentityColumn } from "./portfolioIdentity.component";

describe("portfolioIdentity.component", () => {
  it("matches the identity column snapshot", () => {
    const { asFragment } = render(
      <IdentityColumn content={enDictionary} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
