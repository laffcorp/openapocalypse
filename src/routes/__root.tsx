import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { DEFAULT_DESCRIPTION, ORIGIN, siteGraph } from "@/lib/seo";
import appCss from "../styles.css?url";

const SITE_LD = JSON.stringify(siteGraph());

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Open Apocalypse" },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "theme-color", content: "#1a150f" },
      { name: "color-scheme", content: "light" },
      { name: "format-detection", content: "telephone=no" },
      { name: "llms-txt", content: `${ORIGIN}/llms.txt` },
      { name: "application-name", content: "Open Apocalypse" },
      { name: "apple-mobile-web-app-title", content: "Open Apocalypse" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "author", href: "/about" },
      {
        rel: "alternate",
        type: "text/plain",
        href: "/llms.txt",
        title: "LLM machine index",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Oswald:wght@500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <meta property="og:image" content={`${ORIGIN}/og.jpg`} />
        <meta property="og:image:alt" content="Open Apocalypse — Office of Preparedness for Emergent Networks. This is not a test." />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={`${ORIGIN}/og.jpg`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SITE_LD }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
