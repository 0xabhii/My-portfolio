import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PageContainer, SectionHeading } from "@/components/site/SectionHeading";
import { highlights, stats, toneShadow, toneText } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/highlights")({
  head: () =>
    pageHead(
      "Highlights — Abhijeet Kumar",
      "XION top 2 creator, creator prize winner, viral Succinct art and praise from the Altius team.",
    ),
  component: HighlightsPage,
});

function HighlightsPage() {
  return (
    <PageContainer>
      <SectionHeading
        index="04"
        eyebrow="Highlights"
        title="Receipts, not"
        accent="claims."
        description="Wins, prizes and shoutouts from the teams I've worked with. Every one links to the proof."
      />

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`brutal rounded-2xl bg-surface p-6 ${["shadow-volt", "shadow-flare", "shadow-ice", "shadow-sun"][i % 4]}`}
          >
            <p className="font-display text-4xl font-extrabold md:text-5xl">{s.value}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h) => (
          <a
            key={h.title}
            href={h.href}
            target="_blank"
            rel="noreferrer"
            className={`brutal brutal-lift group flex flex-col rounded-3xl bg-surface p-7 ${toneShadow[h.tone]}`}
          >
            <Sparkles className={`size-7 ${toneText[h.tone]}`} />
            <h2 className="mt-6 font-display text-2xl font-extrabold leading-tight">{h.title}</h2>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{h.detail}</p>
            <span
              className={`mt-6 inline-flex items-center gap-1 font-mono text-sm ${toneText[h.tone]}`}
            >
              See the post
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        ))}
      </div>
    </PageContainer>
  );
}
