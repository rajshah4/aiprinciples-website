import { defineConfig } from "vitepress";

const siteUrl = "https://aiframer.dev";

export default defineConfig({
  title: "aiframer",
  titleTemplate: "aiframer.dev",
  description:
    "Frame AI projects, diagnose what breaks, and decide when to persist, pivot, or stop. A method for ML, GenAI, and agents by Rajiv Shah.",
  cleanUrls: true,
  // Public files are copied as-is, not rendered as documentation pages.
  srcExclude: ["public/**"],
  sitemap: {
    hostname: siteUrl,
  },
  // Keep metadata in page data so it also updates during client-side navigation.
  transformPageData(pageData) {
    const path = pageData.relativePath
      .replace(/(^|\/)index\.md$/, "$1")
      .replace(/\.md$/, "");
    const url = `${siteUrl}/${path}`;
    const title = `${pageData.title} | aiframer.dev`;
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(
      ["link", { rel: "canonical", href: url }],
      ["meta", { property: "og:title", content: title }],
      ["meta", { property: "og:description", content: pageData.description }],
      ["meta", { property: "og:url", content: url }],
      ["meta", { name: "twitter:title", content: title }],
      ["meta", { name: "twitter:description", content: pageData.description }],
    );
  },
  transformHead({ page }) {
    if (page === "404.md") {
      return [["meta", { name: "robots", content: "noindex" }]];
    }
  },
  head: [
    [
      "script",
      { async: "", src: "https://gc.zgo.at/count.js", "data-goatcounter": "https://aiframer.goatcounter.com/count" },
    ],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..600&display=swap",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "aiframer.dev" }],
    ["meta", { property: "og:image", content: "https://aiframer.dev/images/og.png" }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: "https://aiframer.dev/images/og.png" }],
  ],
  themeConfig: {
    siteTitle: "aiframer",
    nav: [
      { text: "Book", link: "/book" },
      { text: "Method", link: "/framework" },
      { text: "Tools", link: "/resources" },
      { text: "Talks", link: "/talks" },
      {
        text: "Work with me",
        items: [
          { text: "The cohort", link: "/course" },
          { text: "Team workshops", link: "/workshops" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/rajshah4/aiprinciples-website" },
    ],
    footer: {
      message:
        'The book <em>AI Problem Framing for AI Practitioners</em> is free under <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>.',
      copyright: "© 2026 Rajiv Shah",
    },
    search: {
      provider: "local",
    },
  },
});
