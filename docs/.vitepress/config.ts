import { defineConfig } from "vitepress";

export default defineConfig({
  title: "aiframer",
  description:
    "Frame, diagnose, reframe. A companion site for the AI Problem Framing course.",
  cleanUrls: true,
  head: [
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "aiframer.dev" }],
    ["meta", { property: "og:title", content: "aiframer.dev — Frame, diagnose, reframe." }],
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
    ["meta", { name: "twitter:title", content: "aiframer.dev — Frame, diagnose, reframe." }],
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
      { text: "Why framing", link: "/why-framing" },
      { text: "Framework", link: "/framework" },
      { text: "Resources", link: "/resources" },
      { text: "Influences", link: "/influences" },
      { text: "Course", link: "/course" },
      { text: "For teams", link: "/workshops" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/rajshah4/aiprinciples-website" },
    ],
    footer: {
      message: "Companion site for the AI Problem Framing course on Maven.",
      copyright: "© Rajiv Shah",
    },
    search: {
      provider: "local",
    },
  },
});
