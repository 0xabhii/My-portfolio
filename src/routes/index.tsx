import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/site/ProfileCard";
import { profile, projectsMarquee, stats, toneBg } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Abhijeet Kumar — Web3 Content Writer & Community Manager",
      "Hey employer! I'm Abhijeet, a crypto content specialist since 2023 who has worked with 15+ Web3 projects.",
    ),
  component: Index,
});

const doors = [
  { to: "/work", label: "Work", note: "Sites, guides, art & videos", tone: "volt" },
  { to: "/experience", label: "Experience", note: "Injective, XION, Altius & more", tone: "flare" },
  { to: "/spaces", label: "Spaces", note: "AMAs I've hosted on X", tone: "ice" },
  { to: "/highlights", label: "Highlights", note: "Wins, prizes & shoutouts", tone: "sun" },
] as const;

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 md:px-8 md:pt-24 lg:grid-cols-[1.35fr_1fr]">
          <div className="animate-rise">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              gm, hiring team 👋
            </p>
            <h1 className="mt-5 font-display text-6xl font-extrabold leading-[0.95] tracking-tight md:text-7xl xl:text-[5.5rem]">
              Stories that <span className="marker-volt">ship.</span>
              <br />
              Communities that{" "}
              <span className="font-serif font-normal italic text-flare">stick.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I'm <strong className="text-foreground">{profile.name}</strong>, a crypto content
              specialist since <strong className="text-foreground">{profile.since}</strong>. I
              write content and articles, manage and run Discords, and have worked with{" "}
              <strong className="text-foreground">15+ projects</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {profile.roles.map((r) => (
                <span
                  key={r.label}
                  className={`brutal-sm shadow-ink rounded-full px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-on-color ${toneBg[r.tone]}`}
                >
                  {r.label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="flare" size="xl">
                <Link to="/contact">
                  Let's work together <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="ink" size="xl">
                <Link to="/work">
                  See my work <ArrowDown />
                </Link>
              </Button>
            </div>
          </div>

          <div className="animate-rise [animation-delay:150ms]">
            <ProfileCard />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section
        aria-label="Projects I've worked with"
        className="-rotate-1 border-y-2 border-ink bg-volt py-4 text-on-color"
      >
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-10 pr-10">
            {[...projectsMarquee, ...projectsMarquee, ...projectsMarquee, ...projectsMarquee].map(
              (p, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 whitespace-nowrap font-display text-3xl font-extrabold uppercase md:text-4xl"
                >
                  {p}
                  <span className="font-serif text-2xl font-normal italic">✦</span>
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-5 pt-24 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-surface/60 p-6">
              <p className="font-display text-4xl font-extrabold text-volt md:text-5xl">{s.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Doors */}
      <section className="mx-auto max-w-7xl px-5 pt-24 md:px-8">
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Pick a <span className="font-serif font-normal italic text-flare">door.</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {doors.map((d, i) => (
            <Link
              key={d.to}
              to={d.to}
              className={`brutal brutal-lift shadow-ink group relative flex min-h-56 flex-col justify-between rounded-3xl p-8 text-on-color ${toneBg[d.tone]}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm font-bold">0{i + 1}</span>
                <ArrowUpRight className="size-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <div>
                <p className="font-display text-5xl font-extrabold tracking-tight">{d.label}</p>
                <p className="mt-2 font-mono text-sm">{d.note}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
