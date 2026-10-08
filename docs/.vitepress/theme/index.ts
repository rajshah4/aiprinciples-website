import DefaultTheme from "vitepress/theme";
import { inBrowser } from "vitepress";
import type { Theme } from "vitepress";
import "./custom.css";

// GoatCounter (https://aiframer.goatcounter.com). The script in config.ts counts
// the first page load; this counts client-side navigations and download clicks.
type GoatCounter = { count?: (vars: Record<string, unknown>) => void };
const gc = () => (window as unknown as { goatcounter?: GoatCounter }).goatcounter;

let lastPath = inBrowser ? location.pathname : "";

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (!inBrowser) return;

    router.onAfterRouteChange = () => {
      if (location.pathname === lastPath) return; // same-page hash links
      lastPath = location.pathname;
      gc()?.count?.({ path: location.pathname });
    };

    // Count clicks on PDF downloads (site PDFs and the book's GitHub release asset).
    document.addEventListener(
      "click",
      (e) => {
        const a = (e.target as HTMLElement | null)?.closest?.("a");
        const href = a?.getAttribute("href") ?? "";
        if (!/\.pdf($|\?)/i.test(href)) return;
        const file = href.split("/").pop()?.split("?")[0] ?? href;
        gc()?.count?.({
          path: `download-${file}`,
          title: `${a?.textContent?.trim() ?? ""} (from ${location.pathname})`,
          event: true,
        });
      },
      { capture: true },
    );
  },
} satisfies Theme;
