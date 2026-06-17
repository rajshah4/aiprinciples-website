import { defineConfig } from "vitepress";

export default defineConfig({
  title: "aiframer",
  description:
    "Frame, diagnose, reframe. A companion site for the AI Problem Framing course.",
  cleanUrls: true,
  themeConfig: {
    siteTitle: "aiframer",
    nav: [
      { text: "Why framing", link: "/why-framing" },
      { text: "Framework", link: "/framework" },
      { text: "Resources", link: "/resources" },
      { text: "Influences", link: "/influences" },
      { text: "Course", link: "/course" },
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
