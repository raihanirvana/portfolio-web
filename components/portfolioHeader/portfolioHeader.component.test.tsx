import React from "react";
import { render } from "@testing-library/react";

jest.mock("framer-motion", () => {
  const motion = new Proxy(
    {},
    {
      get: (_target, tag: string) =>
        function MotionComponent({
          children,
          ...props
        }: React.ComponentPropsWithoutRef<"div">) {
          return React.createElement(tag, props, children);
        },
    },
  );

  return {
    m: motion,
    useReducedMotion: () => false,
  };
}, { virtual: true });

import { enDictionary } from "@/content/locales/en";

import {
  FloatingSocialLinks,
  PortfolioHeader,
} from "./portfolioHeader.component";

describe("portfolioHeader.component", () => {
  it("matches the header snapshot", () => {
    const { asFragment } = render(
      <PortfolioHeader
        content={enDictionary}
        locale="en"
        onLocaleChange={jest.fn()}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("matches the floating social links snapshot", () => {
    const { asFragment } = render(
      <FloatingSocialLinks content={enDictionary} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
