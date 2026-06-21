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

## Voice

Any prose written for this site must follow Rajiv's voice skill in the sibling repo at `../aiprinciples/.claude/skills/voice/SKILL.md`. Read it before drafting or editing copy.

## Design doc

The site design doc lives in the private `aiprinciples` repo at `SITE_DESIGN.md`.
