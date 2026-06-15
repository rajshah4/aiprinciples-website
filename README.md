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

## Making a change

Edit the markdown in `docs/`, preview locally with `npm run docs:dev`, then commit and push to `main`:

```bash
git add docs/
git commit -m "Describe the change"
git push
```

There is no separate publish step. Pushing to `main` triggers the deploy below. Run `npm run docs:build` first if you want to confirm the build is clean before pushing, which matters for pages that embed raw HTML (like the video embeds in `resources.md`).

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
  framework.md         The framework and the GOATS Loop walkthrough
  resources.md         Worksheet, webinars, talks and videos
  course.md            Maven cohort and other offerings
```

The design doc for this site lives in the private `aiprinciples` repo at `SITE_DESIGN.md`.
