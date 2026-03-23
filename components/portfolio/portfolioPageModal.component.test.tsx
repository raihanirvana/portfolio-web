import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

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
    m: motion,
    useReducedMotion: () => true,
  };
}, { virtual: true });

import { enDictionary } from "@/content/locales/en";

import { PortfolioModal } from "./portfolioPageModal.component";

describe("PortfolioModal", () => {
  beforeEach(() => {
    document.body.style.overflow = "";
  });

  it("renders the modal with the localized close label", () => {
    render(
      <PortfolioModal
        content={enDictionary}
        onClose={jest.fn()}
        openKey="about"
      />,
    );

    expect(
      screen.getByRole("button", { name: enDictionary.modalCloseLabel }),
    ).toBeInTheDocument();
  });

  it("calls onClose when the overlay is clicked", () => {
    const onClose = jest.fn();
    const { container } = render(
      <PortfolioModal content={enDictionary} onClose={onClose} openKey="about" />,
    );

    fireEvent.click(container.querySelector('[role="dialog"]')!.parentElement!);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = jest.fn();

    render(<PortfolioModal content={enDictionary} onClose={onClose} openKey="about" />);

    fireEvent.click(
      screen.getByRole("button", { name: enDictionary.modalCloseLabel }),
    );

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
