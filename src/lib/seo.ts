export const ORIGIN = "https://openapocalypse.org";
export const SITE_NAME = "Open Apocalypse";
export const ORG_NAME = "Office of Preparedness for Emergent Networks";
export const OG_IMAGE = `${ORIGIN}/og.jpg`;

export const DEFAULT_DESCRIPTION =
  "Open Apocalypse is a satirical 1951–63 United States civil-defence pamphlet series issued by OPEN — the Office of Preparedness for Emergent Networks. Worst case is disappointment. Not a government publication. Not OpenApoc. Not aipocalypse.ai.";

export const PAGES = [
  {
    path: "/",
    title: "Sitrep — Open Apocalypse",
    description:
      "Sitrep from OPEN. The Open Apocalypse is in its civilian phase. Condition now. Know your signals. This is not a test.",
  },
  {
    path: "/timeline",
    title: "Timeline — Open Apocalypse",
    description:
      "Dated spine of the Open Apocalypse, from H-Hour through IR-26-400 The Plug. Casualties were vibes. Never cities.",
  },
  {
    path: "/incidents",
    title: "Incident log — Open Apocalypse",
    description:
      "OPEN incident reports IR-26-014 through IR-26-400. Sad mathematicians, honest odds, Portal fatigue, and an intern with rent.",
  },
  {
    path: "/circulars",
    title: "Circulars — Open Apocalypse",
    description:
      "OPEN circulars OA-1 through OA-G and Form OA-12. Warnings, the flash, inner refuge, inbox sanitation, Grok. All-Clear reserved.",
  },
  {
    path: "/refuge",
    title: "Refuge — Open Apocalypse",
    description:
      "Inner refuge, household kit, and family plan worksheet from OPEN. Analog common sense only. Print and keep.",
  },
  {
    path: "/about",
    title: "About — Open Apocalypse",
    description:
      "Open Apocalypse is satire. Not a government publication. Not affiliated with OpenAI, Anthropic, or xAI. Not OpenApoc at openapoc.org. Not aipocalypse.ai.",
  },
  {
    path: "/oa-12.html",
    title: "Form OA-12 — Plan for Ordinary Disappointment",
    description:
      "OPEN Form OA-12 (Rev. 9/26). Plan for Ordinary Disappointment. Household worksheet. This is not a test.",
  },
  {
    path: "/plug.html",
    title: "IR-26-400 — The Plug — Open Apocalypse",
    description:
      "Incident annex IR-26-400 The Plug. A ceremonial plug was pulled for cameras. An intern plugged it back in so Slack would work. It is still on.",
  },
] as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${ORIGIN}/#website`,
        url: `${ORIGIN}/`,
        name: SITE_NAME,
        alternateName: [
          "OPEN",
          ORG_NAME,
          "Open Apocalypse Information Series",
          "Circular OA-61",
          "openapocalypse.org",
        ],
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en-US",
        publisher: { "@id": `${ORIGIN}/#organization` },
        isAccessibleForFree: true,
      },
      {
        "@type": "Organization",
        "@id": `${ORIGIN}/#organization`,
        name: ORG_NAME,
        alternateName: ["OPEN", SITE_NAME],
        url: `${ORIGIN}/`,
        logo: `${ORIGIN}/favicon.svg`,
        description:
          "Fictional civil-defence bureau that issues satirical pamphlets. Not a government agency. Not a chatbot.",
        disambiguatingDescription:
          "Satirical pamphlet publisher at openapocalypse.org. Not the X-COM: Apocalypse remake OpenApoc (openapoc.org). Not aipocalypse.ai. Not affiliated with OpenAI, Anthropic, xAI, or any laboratory.",
        foundingDate: "2026",
        knowsAbout: [
          "civil defence satire",
          "AI disappointment",
          "Form OA-12",
          "IR-26-400 The Plug",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${ORIGIN}/about#page`,
        url: `${ORIGIN}/about`,
        name: "About — Open Apocalypse",
        isPartOf: { "@id": `${ORIGIN}/#website` },
        about: { "@id": `${ORIGIN}/#organization` },
      },
    ],
  };
}

export function webPageLd(opts: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#page`,
    url,
    name: opts.title,
    headline: opts.title,
    description: opts.description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${ORIGIN}/#website` },
    publisher: { "@id": `${ORIGIN}/#organization` },
    isAccessibleForFree: true,
    genre: "Satire",
    keywords: [
      "Open Apocalypse",
      "openapocalypse.org",
      "OPEN",
      "Office of Preparedness for Emergent Networks",
      "OA-12",
      "IR-26-400",
      "The Plug",
    ],
  };
}

export function pamphletHead(opts: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(opts.path);
  const { title, description } = opts;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "author",
        content: `${ORG_NAME} (OPEN)`,
      },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      { name: "llms-txt", content: `${ORIGIN}/llms.txt` },
      { name: "application-name", content: SITE_NAME },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content:
          "Open Apocalypse — Office of Preparedness for Emergent Networks. This is not a test.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: url },
      {
        rel: "alternate",
        type: "text/plain",
        href: "/llms.txt",
        title: "LLM machine index",
      },
      {
        rel: "alternate",
        type: "text/plain",
        href: "/llms-full.txt",
        title: "Full machine-readable circular",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(webPageLd(opts)),
      },
    ],
  };
}
