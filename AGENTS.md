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

## Analytics: checking book downloads and site traffic

Two separate counts, set up 2026-10-07.

**Book downloads (exact).** The book PDF is served from a GitHub release, not from this site: <https://github.com/rajshah4/ai-framing-skills/releases/tag/book-2026-10>. GitHub counts every download, including direct links people share. The number can lag by a few minutes to hours. Check it with:

```
gh api repos/rajshah4/ai-framing-skills/releases/tags/book-2026-10 -q '.assets[0].download_count'
```

For a new edition, create a new release in `ai-framing-skills` (e.g. `book-2027-xx`) with the PDF named `ai-problem-framing-book.pdf`, then update the three links in `docs/index.md`, `docs/book.md`, and `docs/resources.md`. Each release keeps its own count, so add them up for the total.

**Site traffic and download clicks (undercounts).** GoatCounter at <https://aiframer.goatcounter.com> (log in with Rajiv's account). It shows page views and an event per PDF click, named like `download-ai-problem-framing-book.pdf` and labeled with the page it was clicked from. The script is in `docs/.vitepress/config.ts`; navigation and click tracking are in `docs/.vitepress/theme/index.ts`.

Ad blockers block GoatCounter, including Rajiv's own. To test that tracking works, open the site in an Incognito window (or with the blocker paused), click around, and refresh the dashboard. Because many readers run blockers, treat GoatCounter as a floor and the GitHub count as the real download number. One fake page, `/__setup-test`, is from the setup test and can be ignored.
