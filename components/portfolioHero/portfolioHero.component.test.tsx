import React from "react";
import { render } from "@testing-library/react";

import {
  Briefcase,
  Code2,
  FolderKanban,
  Mail,
  User,
} from "@/components/portfolioIcons/portfolioIcons.component";
import { enDictionary } from "@/content/locales/en";

import { HeroColumn } from "./portfolioHero.component";

const actions = [
  { icon: User, key: "about" as const, label: "About", tone: "bg-zinc-950 text-white" },
  { icon: Briefcase, key: "experience" as const, label: "Experience", tone: "bg-white text-zinc-950 border border-zinc-200" },
  { icon: FolderKanban, key: "projects" as const, label: "Projects", tone: "bg-white text-zinc-950 border border-zinc-200" },
  { icon: Code2, key: "skills" as const, label: "Skills", tone: "bg-white text-zinc-950 border border-zinc-200" },
  { icon: Mail, key: "contact" as const, label: "Contact", tone: "bg-white text-zinc-950 border border-zinc-200" },
];

describe("portfolioHero.component", () => {
  it("matches the hero snapshot", () => {
    const { asFragment } = render(
      <HeroColumn
        actions={actions}
        content={enDictionary}
        onOpen={jest.fn()}
        openKey={null}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
