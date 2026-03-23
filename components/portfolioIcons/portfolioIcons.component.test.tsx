import React from "react";
import { render } from "@testing-library/react";

import {
  ArrowUpRight,
  Briefcase,
  ChevronRight,
  Code2,
  ExternalLink,
  FileText,
  FolderKanban,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  User,
  X,
} from "./portfolioIcons.component";

function IconGallery() {
  return (
    <div>
      <ArrowUpRight className="h-4 w-4" />
      <Briefcase className="h-4 w-4" />
      <ChevronRight className="h-4 w-4" />
      <Code2 className="h-4 w-4" />
      <ExternalLink className="h-4 w-4" />
      <FileText className="h-4 w-4" />
      <FolderKanban className="h-4 w-4" />
      <Github className="h-4 w-4" />
      <Linkedin className="h-4 w-4" />
      <Mail className="h-4 w-4" />
      <Sparkles className="h-4 w-4" />
      <User className="h-4 w-4" />
      <X className="h-4 w-4" />
    </div>
  );
}

describe("portfolioIcons.component", () => {
  it("matches the icons snapshot", () => {
    const { asFragment } = render(<IconGallery />);

    expect(asFragment()).toMatchSnapshot();
  });
});
