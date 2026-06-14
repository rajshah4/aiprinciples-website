# aiprinciples-website

Public companion site for the AI Problem Framing course. Lives at `aiframer.dev`.

The course itself runs on Maven: [maven.com/rajistics/ai-problem-framing](https://maven.com/rajistics/ai-problem-framing).

## Local development

```bash
npm install
npm run docs:dev
```

The dev server runs at `http://localhost:5173`.

## Build

```bash
npm run docs:build
npm run docs:preview
```

## Deploy

Pushes to `main` trigger `.github/workflows/pages.yml`, which builds the site and deploys to GitHub Pages.

## Domain setup (one-time, Porkbun + GitHub)

On Porkbun, set these DNS records for `aiframer.dev`:

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   rajshah4.github.io
```

On GitHub, in the repo's Settings → Pages: set Source to "GitHub Actions" and add `aiframer.dev` as the custom domain. The `docs/public/CNAME` file in this repo is what GitHub Pages reads to know which domain to bind.

## Structure

```
docs/
  .vitepress/
    config.ts          Site config and nav
    theme/             Small CSS overrides
  public/
    CNAME              aiframer.dev
  index.md             Home
  why-framing.md       The cost of bad framing
  goats.md             The GOATS Loop walkthrough
  resources.md         Canvas, checklists, videos, worked examples
  teaching.md          Maven cohort and other offerings
```

The design doc for this site lives in the private `aiprinciples` repo at `SITE_DESIGN.md`.
