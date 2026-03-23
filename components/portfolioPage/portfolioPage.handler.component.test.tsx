import React from "react";
import { act, render, screen } from "@testing-library/react";

import { usePortfolioLocale } from "./portfolioPage.handler.component";

function HandlerProbe() {
  const { locale, setLocale } = usePortfolioLocale();

  return (
    <>
      <span data-testid="locale">{locale}</span>
      <button onClick={() => setLocale("id")} type="button">
        set-id
      </button>
      <button onClick={() => setLocale("en")} type="button">
        set-en
      </button>
    </>
  );
}

describe("usePortfolioLocale", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "";
  });

  it("uses english as the default locale", () => {
    render(<HandlerProbe />);

    expect(screen.getByTestId("locale")).toHaveTextContent("en");
    expect(document.documentElement.lang).toBe("en");
  });

  it("restores the locale from localStorage", () => {
    window.localStorage.setItem("porto-web-locale", "id");

    render(<HandlerProbe />);

    expect(screen.getByTestId("locale")).toHaveTextContent("id");
    expect(document.documentElement.lang).toBe("id");
  });

  it("persists locale changes to localStorage", () => {
    render(<HandlerProbe />);

    act(() => {
      screen.getByRole("button", { name: "set-id" }).click();
    });

    expect(screen.getByTestId("locale")).toHaveTextContent("id");
    expect(window.localStorage.getItem("porto-web-locale")).toBe("id");
    expect(document.documentElement.lang).toBe("id");
  });
});
