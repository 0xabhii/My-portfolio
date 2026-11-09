// Single source of truth for all portfolio content. Edit text here, not in pages.

export type Tone = "volt" | "flare" | "ice" | "sun";

export const profile = {
  name: "Abhijeet Kumar",
  firstName: "Abhijeet",
  handle: "@Abhi__web3",
  since: 2023,
  timezone: "GMT +5:30 · IST",
  status: "Open to work",
  roles: [
    { label: "Content Writer", tone: "volt" as Tone },
    { label: "Community Manager", tone: "flare" as Tone },
    { label: "Discord Admin", tone: "ice" as Tone },
    { label: "Article Writer", tone: "sun" as Tone },
  ],
  skills: [
    "Content & article writing",
    "Discord management & administration",
    "Community engagement",
    "AMA hosting",
    "Article translation",
    "Art, animation & AI dubbing",
  ],
};

export const socials = [
  { key: "x", label: "X / Twitter", handle: "@Abhi__web3", href: "https://x.com/Abhi__web3" },
  {
    key: "discord",
    label: "Discord",
    handle: "Send a DM",
    href: "https://discord.com/users/678694509327941653",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "abhijeet-kumar",
    href: "https://www.linkedin.com/in/abhijeet-kumar-326504210",
  },
  { key: "telegram", label: "Telegram", handle: "@abhi_web3_0", href: "https://t.me/abhi_web3_0" },
  { key: "github", label: "GitHub", handle: "0xabhii", href: "https://github.com/0xabhii" },
] as const;

export type SocialKey = (typeof socials)[number]["key"];

export const navItems = [
  { to: "/work", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/spaces", label: "Spaces" },
  { to: "/highlights", label: "Highlights" },
  { to: "/contact", label: "Contact" },
] as const;

const post = (id: string) => `https://x.com/abhi__web3/status/${id}`;

export const work = [
  {
    title: "Boundless website",
    client: "Boundless",
    type: "Web build",
    description: "Designed and shipped a community-made website for Boundless.",
    href: post("1954417091408490841"),
    tone: "volt" as Tone,
  },
  {
    title: "Boundless recap",
    client: "Boundless",
    type: "Thread",
    description: "A clear, punchy recap breaking down what Boundless is building.",
    href: post("1953084592380100634"),
    tone: "ice" as Tone,
  },
  {
    title: "Altius user guide",
    client: "Altius",
    type: "Guide",
    description: "Step-by-step user guide that got a shoutout from the Altius team.",
    href: post("1908384098080391662"),
    tone: "sun" as Tone,
  },
  {
    title: "Succinct artwork",
    client: "Succinct",
    type: "Art",
    description: "Original art piece that went viral and was praised by the Succinct team.",
    href: post("1906562171234062472"),
    tone: "flare" as Tone,
  },
  {
    title: "Succinct animation",
    client: "Succinct",
    type: "Animation",
    description: "Short animated video explaining Succinct in a fun, visual way.",
    href: post("1903836139754299591"),
    tone: "volt" as Tone,
  },
  {
    title: "XION IRL creator video",
    client: "XION",
    type: "AI video",
    description: "Animation with AI audio dub. Won the XION creator prize.",
    href: post("1893315913023172644"),
    tone: "ice" as Tone,
  },
];

export const experience = [
  {
    company: "Injective",
    roles: ["Ambassador", "Content Creator"],
    duration: "6 months",
    summary: "Represented Injective as an ambassador and created content for the community.",
    tone: "ice" as Tone,
  },
  {
    company: "Altius",
    roles: ["Discord Moderator", "Audience Engagement", "Ambassador"],
    duration: "5 months",
    summary: "Moderated the Discord, drove engagement and wrote a user guide praised by the team.",
    tone: "sun" as Tone,
  },
  {
    company: "XION",
    roles: ["Content Creator"],
    duration: "3 months",
    summary: "Ranked in the XION top 2 creators list and won the creator prize.",
    tone: "volt" as Tone,
  },
  {
    company: "Boundless",
    roles: ["Content Specialist"],
    duration: "3 months",
    summary: "Built a community website and wrote recaps for the Boundless ecosystem.",
    tone: "flare" as Tone,
  },
  {
    company: "KAST",
    roles: ["Content Creator", "Article Translator"],
    duration: "2 months",
    summary: "Created content and translated articles for the KAST community.",
    tone: "ice" as Tone,
  },
];

export const spaces = [
  {
    title: "Chilling about XION",
    project: "XION",
    myRole: "Co-host",
    when: "5 November · 7 PM IST",
    host: ["@sherrythelast"],
    coHosts: ["@Abhi__web3"],
    speakers: ["@otxAman", "@axel__web3", "@Alok_INJ", "@kairo1672", "@HODL037"],
    about: "A laid-back AMA, chilling and talking about everything XION.",
    href: "https://x.com/Abhi__web3",
    tone: "volt" as Tone,
  },
  {
    title: "XION TGE AMA",
    project: "XION",
    myRole: "Host",
    when: "8 PM IST",
    host: ["@Abhi__web3"],
    coHosts: ["@HODL037", "@Alok_PRMR"],
    speakers: ["@axel__web3", "@sherrythelast", "@kairo1672"],
    about:
      "A casual AMA ahead of the XION TGE on Dec 5, launching on Bybit Launchpad and Bitget.",
    href: "https://x.com/Abhi__web3",
    tone: "flare" as Tone,
  },
  {
    title: "Our journey as Injective Ambassadors",
    project: "Injective",
    myRole: "Host",
    when: "8 PM IST",
    host: ["@Abhi__web3"],
    coHosts: [],
    speakers: ["@otxAman", "@chasemeei", "@axel__web3", "@kairo1672"],
    about: "A must-join AMA for Warriors about our journey as Injective ambassadors.",
    href: "https://x.com/i/spaces/1zqKVYPaVeDxB",
    tone: "ice" as Tone,
  },
];

export const stats = [
  { value: "15+", label: "Projects worked with" },
  { value: "2023", label: "In crypto since" },
  { value: "3", label: "AMAs hosted" },
  { value: "Top 2", label: "XION creators list" },
];

export const highlights = [
  {
    title: "XION top 2 creator",
    detail: "Made it to the XION top 2 creators list.",
    href: post("1907086053061857625"),
    tone: "volt" as Tone,
  },
  {
    title: "Won the XION creator prize",
    detail: "IRL creator work with animation and AI audio dub took the prize.",
    href: post("1893315913023172644"),
    tone: "sun" as Tone,
  },
  {
    title: "Went viral with Succinct art",
    detail: "Original art blew up and was praised by the Succinct team.",
    href: post("1906562171234062472"),
    tone: "flare" as Tone,
  },
  {
    title: "Praised by the Altius team",
    detail: "The Altius user guide got a shoutout from the core team.",
    href: post("1908384098080391662"),
    tone: "ice" as Tone,
  },
  {
    title: "Built a site for Boundless",
    detail: "Designed and shipped a community website for Boundless.",
    href: post("1954417091408490841"),
    tone: "volt" as Tone,
  },
  {
    title: "Animated Succinct",
    detail: "Made an animated explainer video for Succinct.",
    href: post("1903836139754299591"),
    tone: "flare" as Tone,
  },
];

export const projectsMarquee = ["Injective", "XION", "Altius", "Boundless", "KAST", "Succinct"];

export const toneBg: Record<Tone, string> = {
  volt: "bg-volt",
  flare: "bg-flare",
  ice: "bg-ice",
  sun: "bg-sun",
};

export const toneText: Record<Tone, string> = {
  volt: "text-volt",
  flare: "text-flare",
  ice: "text-ice",
  sun: "text-sun",
};

export const toneShadow: Record<Tone, string> = {
  volt: "shadow-volt",
  flare: "shadow-flare",
  ice: "shadow-ice",
  sun: "shadow-sun",
};
