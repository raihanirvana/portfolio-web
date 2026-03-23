import React from "react";
import { act, fireEvent, render } from "@testing-library/react";

jest.mock("next/dynamic", () =>
  function dynamic() {
    return function DynamicModal(
      props: React.ComponentProps<typeof import("../portfolioPageModal/portfolioPageModal.component").PortfolioModal>,
    ) {
      const { PortfolioModal } = require("../portfolioPageModal/portfolioPageModal.component");

      return <PortfolioModal {...props} />;
    };
  });

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
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    LazyMotion: ({ children }: { children: React.ReactNode }) => children,
    domAnimation: {},
    m: motion,
    motion,
    useReducedMotion: () => false,
  };
}, { virtual: true });

import { PortfolioPage } from "./portfolioPage";
import { enDictionary } from "@/content/locales/en";

describe("PortfolioPage", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "";
  });

  const configs = [
    {
      desc: "matches the initial english snapshot",
    },
    {
      beforeTest: async (container: HTMLElement) => {
        await act(async () => {
          fireEvent.click(container.querySelectorAll("button")[0]);
          await Promise.resolve();
        });
      },
      desc: "matches the indonesian snapshot",
    },
    {
      beforeTest: (container: HTMLElement) => {
        fireEvent.click(container.querySelectorAll("button")[3]);
      },
      desc: "matches the about modal snapshot",
    },
    {
      beforeTest: (container: HTMLElement) => {
        fireEvent.click(container.querySelectorAll("button")[4]);
      },
      desc: "matches the experience modal snapshot",
    },
    {
      beforeTest: (container: HTMLElement) => {
        fireEvent.click(container.querySelectorAll("button")[5]);
      },
      desc: "matches the projects modal snapshot",
    },
    {
      beforeTest: (container: HTMLElement) => {
        fireEvent.click(container.querySelectorAll("button")[6]);
      },
      desc: "matches the skills modal snapshot",
    },
    {
      beforeTest: (container: HTMLElement) => {
        fireEvent.click(container.querySelectorAll("button")[7]);
      },
      desc: "matches the contact modal snapshot",
    },
    {
      beforeTest: (container: HTMLElement) => {
        fireEvent.click(container.querySelectorAll("button")[3]);
        fireEvent.keyDown(window, { key: "Escape" });
      },
      desc: "matches the closed modal snapshot after escape",
    },
  ];

  it.each(configs)("$desc", async ({ beforeTest }) => {
    const { asFragment, container } = render(
      <PortfolioPage initialContent={enDictionary} />,
    );

    await beforeTest?.(container);

    expect(asFragment()).toMatchSnapshot();
  });
});
