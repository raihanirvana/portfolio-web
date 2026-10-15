# Raihan Irvana — A quiet introduction

## Current brief

One page, one viewport. Simple to use, sophisticated in its details, and calm to look at. The portfolio should behave like a personal calling card with a complete body of work behind it.

## Design system

- Paper `#f3f2ee`, surface `#faf9f6`, graphite `#30332e`, secondary `#6b7065`, olive `#68715a`, line `#dedfd7`.
- Display: Iowan Old Style / Baskerville / Georgia. Body and controls: locally hosted Manrope.
- A fine, inset frame contains the full experience. Name and language at the top; an uncluttered content stage in the middle; five understated navigation choices and social links below.
- Typography is the signature. No architecture illustration, project mockups, decorative cards, or long stack of sections.

```text
┌───────────────────────────────────────────────────────┐
│ RI  Raihan Irvana                    Available  EN ID │
│                                                       │
│                Thoughtfully built.                    │
│                From end to end.                       │
│                                                       │
│             Short personal introduction               │
│                 Work / Download CV                    │
│                                                       │
│       About   Projects   Experience   Skills   Contact │
│ © Raihan Irvana                        Social links   │
└───────────────────────────────────────────────────────┘
```

Navigation replaces the central content, maintaining the same frame. Projects have a compact selector, professional experience has a responsibility pager, and the biography has an optional reading view. These reveal depth without adding page scroll. All project repositories, skills, biography, experience responsibilities, and contact channels remain accessible.

## Review against the brief

The previous design asked visitors to take in too much illustration and a long page. Removed those elements and replaced them with a single stage. Luxury comes from type, proportion, material-like neutral colors, and space. Interaction reveals substantive information only when requested.

## Quality targets

No document scroll at standard desktop and mobile sizes, including 320 × 568. Content must remain usable with browser zoom and unusually short viewports; the content stage can scroll as an accessibility fallback. Visible focus, persistent EN/ID, reduced-motion support, direct CV download, keyboard navigation, and working repository/contact links.

## Verified result

Production build and all 20 tests pass. The production browser was checked in English and Indonesian at 320 × 568, 375 × 667, 390 × 844, 768 × 1024, 1024 × 768, 1440 × 900, and 1920 × 1080. Every main view, biography, project, and responsibility fit without document or stage overflow. No runtime errors were observed. Language restoration, home reset, keyboard focus, repository access, and the CV response were checked.

Development and production build output now use separate directories to avoid conflicts with a running local preview.

## Updated professional content

Experience and skills now reflect the latest supplied CV and the local lending frontend, microservice, worker, and cron repositories. The toolkit uses six selectable categories instead of showing every technology at once. The CV download serves the latest supplied PDF, and structured data derives its technology list from the same skills dictionary. Evidence and scope are recorded in TECH_STACK.md.

## Indonesian voice

Use concise, natural Indonesian for descriptions and actions. Keep established engineering terms in English when translation would obscure their meaning. Category names describe their contents: Testing, Backend & APIs, Deployment & Monitoring. Avoid vague labels such as “kualitas,” literal marketing translations, and filler such as “tools inti dan kekuatan utama.” Preserve the existing typography and page composition when editing copy.
