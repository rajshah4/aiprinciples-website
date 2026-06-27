# AGENTS.md

## What this is

Public companion site for the **AI Problem Framing** course (the "AI principles" site). It lives at **aiframer.dev**. The course itself runs on Maven: [maven.com/rajistics/ai-problem-framing](https://maven.com/rajistics/ai-problem-framing).

Built with VitePress. The hero brand name shown on the home page is set by `hero.name` in `docs/index.md` and renders uppercase via CSS (so `"aiframer.dev"` displays as `AIFRAMER.DEV`).

## Working on it

- Content is markdown under `docs/`. Pages: `index.md` (home), `why-framing.md`, `framework.md`, `resources.md`, `course.md`.
- Site config and nav: `docs/.vitepress/config.ts`. CSS overrides: `docs/.vitepress/theme/`.
- Preview locally: `npm run docs:dev` (http://localhost:5173). Build check: `npm run docs:build`.
- Deploy: push to `main`. `.github/workflows/pages.yml` builds and deploys to GitHub Pages. No separate publish step.
- Custom domain is pinned by `docs/public/CNAME` (`aiframer.dev`).

## Sibling repo: the course (`../aiprinciples`)

This site is the public face of a larger private repo, **`../aiprinciples`** (the AI Problem Framing course). When a task touches course content, prose, marketing, case studies, or design, the source of truth is there, not here. Read its `AGENTS.md` first. Key things that live in the sibling repo, not this one:

- **Voice skill** — `../aiprinciples/.claude/skills/voice/SKILL.md`. Any prose written under Rajiv's name (site copy, marketing, social posts) must follow it. Read before drafting or editing.
- **Case studies database** — `../aiprinciples/first_principles_case_studies_complete.json`. To add one, use the `add-case-study` skill in that repo (`.claude/skills/add-case-study/`). Do not hand-write JSON or one-off scripts.
- **Marketing copy** — `../aiprinciples/marketing/` (hub: `MARKETING.md`). The `marketing/` folder in *this* repo is only for site-specific social drafts.
- **Site design doc** — `../aiprinciples/SITE_DESIGN.md`.
- **Lesson content, talk tracks, worked examples** — all under `../aiprinciples/lessons/` and `resources/`.

Before writing a script or guessing a convention, check whether the sibling repo already has a skill or documented process for it.
