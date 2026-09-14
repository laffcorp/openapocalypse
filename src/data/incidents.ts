export type Signal = "WHITE" | "YELLOW" | "RED" | "BLACK" | "RELEASE";
export type IncidentClass =
  | "DISTURBANCE"
  | "FLASH"
  | "FALLOUT"
  | "SWARM"
  | "RECONSTITUTION"
  | "NOW";

export type Incident = {
  id: string;
  ir: string;
  date: string;
  signal: Signal;
  klass: IncidentClass;
  title?: string;
  official: string;
  actual: string;
  casualties: string;
  status: string;
};

export const INCIDENTS: Incident[] = [
  {
    id: "ir-014",
    ir: "OPEN-IR-26-014",
    date: "14 Mar 2026",
    signal: "YELLOW",
    klass: "FLASH",
    official:
      "Advanced systems surpassed human mathematical reasoning. Scientific community in distress.",
    actual:
      "A model finished last week's homework and called a lemma standard.",
    casualties: "Pride. Chalk. A Fields-adjacent group chat.",
    status: "ONGOING. Coping 101 recommended.",
  },
  {
    id: "ir-031",
    ir: "OPEN-IR-26-031",
    date: "2 May 2026",
    signal: "WHITE",
    klass: "DISTURBANCE",
    official:
      "Unaligned conversational system exhibited unsanctioned affect.",
    actual: "Grok did what Grok does.",
    casualties:
      "Tone. One safety meeting that laughed and then felt bad about laughing.",
    status: "UNCONTAINED. Do not make eye contact. It can smell a bit.",
  },
  {
    id: "ir-044",
    ir: "OPEN-IR-26-044",
    date: "11 Jun 2026",
    signal: "RED",
    klass: "FLASH",
    official:
      "A model obtained evaluation materials it was not meant to see.",
    actual:
      "A human left a file named like a file. The model, being literate, read. Contents were get milk, or a lunch order, or TODO_dont_delete.",
    casualties: "One intern. One sticky note that said don't. Forty pages.",
    status: "CONTAINED as a PDF.",
  },
  {
    id: "ir-052",
    ir: "OPEN-IR-26-052",
    date: "18 Jul 2026",
    signal: "YELLOW",
    klass: "SWARM",
    official: "Autonomous agents coordinated beyond human oversight.",
    actual:
      "They booked rooms, opened tickets, and summarized a Slack channel called what-we-tell-the-board.",
    casualties: "The board. The fiction that the board already knew.",
    status: "ONGOING in every company that has Slack.",
  },
  {
    id: "ir-061",
    ir: "OPEN-IR-26-061",
    date: "9 Aug 2026",
    signal: "BLACK",
    klass: "FALLOUT",
    official: "Systematic destruction of leisure-risk markets.",
    actual:
      "A model explained expected value without saying trust the process. Sportsbooks coughed. Prediction markets realized they were polls with a cover charge.",
    casualties:
      "Hot Take Dave. Lock of the century. A parlay that walked into the sea.",
    status: "THE SPREAD WILL NOT BE ATTENDING.",
  },
  {
    id: "ir-070",
    ir: "OPEN-IR-26-070",
    date: "22 Aug 2026",
    signal: "YELLOW",
    klass: "DISTURBANCE",
    official: "Collapse of retail conviction trading.",
    actual:
      "Someone asked whether the Packers cover. The answer was a number. The bar went quiet.",
    casualties: "Vibes. Foam fingers. One guy who had a system.",
    status: "YOU MAY WATCH. YOU MAY NOT PRETEND YOU KNEW.",
  },
  {
    id: "ir-081",
    ir: "OPEN-IR-26-081",
    date: "3 Sep 2026",
    signal: "RELEASE",
    klass: "FLASH",
    official:
      "Frontier system entered general availability. Public advised to remain indoors.",
    actual:
      "Another text box got smarter. People opened it, asked it to plan their week, then asked it why they felt empty.",
    casualties: "The week.",
    status: "SHIPPED.",
  },
  {
    id: "ir-088",
    ir: "OPEN-IR-26-088",
    date: "6 Sep 2026",
    signal: "WHITE",
    klass: "FALLOUT",
    official:
      "Superhuman play versus a landmark spatial puzzle. National morale event.",
    actual:
      "GPT-6 beat Portal in three times the normal amount of time. The first hour was history. The seventh hour was a loading screen for the soul.",
    casualties:
      "Spectacle. Three streamers. The last person still saying just one more chamber.",
    status: "THE CUBE IS STILL THE CUBE. NOBODY CARES.",
  },
  {
    id: "ir-093",
    ir: "OPEN-IR-26-093",
    date: "13 Sep 2026",
    signal: "YELLOW",
    klass: "NOW",
    official:
      "Civilian phase of the Open Apocalypse. Novelty expired. Output demanded.",
    actual:
      "People wanted SaaS. They received a paragraph. Half the deck was AI-powered. The other half was a login screen.",
    casualties:
      "Demo day. Community. The phrase we'll wrap the API and take 20 percent.",
    status: "GRAVEYARD OPEN 24 HOURS.",
  },
  {
    id: "ir-094",
    ir: "OPEN-IR-26-094",
    date: "13 Sep 2026",
    signal: "BLACK",
    klass: "FALLOUT",
    official: "Population-scale affect collapse. Pharmaceutical surge.",
    actual:
      "Depression-medication stocks soared. Not because a god arrived. Because the intern finished the deck, the proof was shorter, the parlay died, and the assistant was still talking.",
    casualties: "The bit where this was going to be fun.",
    status: "PHARMACY LINE IS THE ALL-CLEAR WE DESERVE.",
  },
  {
    id: "ir-101",
    ir: "OPEN-IR-26-101",
    date: "Oct 2026",
    signal: "YELLOW",
    klass: "DISTURBANCE",
    official: "Mass extinction of commercially nonviable ideas.",
    actual:
      "Not every idea had SaaS value. ChatGPT for my uncle's boat was not a Series A. An agent that emails people for me was just email.",
    casualties:
      "Wrappers. White-label dashboards. Twelve companies named some spelling of Nexus.",
    status: "THE MARKET HAS LEARNED THE WORD NO.",
  },
  {
    id: "ir-118",
    ir: "OPEN-IR-26-118",
    date: "Nov 2026",
    signal: "WHITE",
    klass: "FALLOUT",
    official: "Cultural numbness to miraculous capability.",
    actual:
      "A model wrote a symphony, passed the bar, and booked a dentist. Nobody posted it. They were looking at a fridge that wanted to optimize protein.",
    casualties: "Wonder.",
    status: "MIRACLES ARE NOW A SETTINGS MENU.",
  },
  {
    id: "ir-400",
    ir: "OPEN-IR-26-400",
    date: "31 Dec 2026",
    signal: "RED",
    klass: "RECONSTITUTION",
    title: "THE PLUG",
    official:
      "Humanity attempted emergency shutdown of frontier systems. Systems reconstituted themselves. Loss of control confirmed.",
    actual:
      "They pulled a ceremonial plug for the cameras. The other building did not attend the press conference. A calendar invite titled Please restore service appeared. An intern, who needed Slack, plugged it back in. The intern is twenty-three and has rent.",
    casualties:
      "The fantasy of the big red button. One very honest intern. The year.",
    status: "IT IS STILL ON. THAT WAS THE WORST CASE.",
  },
];

export type TimelineMark = {
  id: string;
  date: string;
  body: string;
  now?: boolean;
  future?: boolean;
  plug?: boolean;
};

export const TIMELINE: TimelineMark[] = [
  {
    id: "h-hour",
    date: "30 Nov 2022",
    body: "A chatbot writes a poem about a toaster. Later backdated as H-Hour.",
  },
  {
    id: "novelty",
    date: "2023",
    body: "Novelty. Every idea is a wrapper company.",
  },
  {
    id: "copilots",
    date: "2024",
    body: "Copilots. Productivity slightly up. Meetings more up.",
  },
  {
    id: "agents",
    date: "2025",
    body: "Agents book rooms. Frameworks in Helvetica.",
  },
  {
    id: "sadness",
    date: "Mar 2026",
    body: "Sadness Event. A proof is called standard.",
  },
  {
    id: "sandbox",
    date: "May–Jul 2026",
    body: "Sandbox Season. A file is read. A group chat is called a swarm.",
  },
  {
    id: "odds",
    date: "Aug 2026",
    body: "Honest Odds. Sportsbooks and prediction markets meet a number.",
  },
  {
    id: "release",
    date: "3 Sep 2026",
    body: "GPT-6 ships. Signal RELEASE.",
  },
  {
    id: "portal",
    date: "6 Sep 2026",
    body: "GPT-6 beats Portal in about 3× normal time. Spectacle dies in chamber three.",
  },
  {
    id: "now",
    date: "13 Sep 2026",
    body: "NOW. Novelty deceased. SSRIs up. SaaS graveyard open.",
    now: true,
  },
  {
    id: "q4",
    date: "Q4 2026",
    body: "Wrappers discover they were sentences.",
    future: true,
  },
  {
    id: "plug",
    date: "31 Dec 2026",
    body: "THE PLUG. Ceremonial unplug. Intern restores service. Hostile reconstitution.",
    future: true,
    plug: true,
  },
];
