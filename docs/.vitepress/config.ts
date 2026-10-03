import { defineConfig } from "vitepress";

export default defineConfig({
  title: "aiframer",
  description:
    "Frame, diagnose, decide. A companion site for the AI Problem Framing course.",
  cleanUrls: true,
  head: [
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
    ["meta", { property: "og:title", content: "aiframer.dev — Frame, diagnose, decide." }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "A structured process for framing AI problems, diagnosing what breaks, and knowing when to change course.",
      },
    ],
    ["meta", { property: "og:url", content: "https://aiframer.dev/" }],
    ["meta", { property: "og:image", content: "https://aiframer.dev/images/og.png" }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "aiframer.dev — Frame, diagnose, decide." }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "A structured process for framing AI problems, diagnosing what breaks, and knowing when to change course.",
      },
    ],
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
