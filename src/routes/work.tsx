import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageContainer, SectionHeading } from "@/components/site/SectionHeading";
import { toneBg, work } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/work")({
  head: () =>
    pageHead(
      "Work — Abhijeet Kumar",
      "Websites, guides, threads, art and animations Abhijeet made for Boundless, Altius, Succinct and XION.",
    ),
  component: WorkPage,
});

function WorkPage() {
  return (
    <PageContainer>
      <SectionHeading
        index="01"
        eyebrow="Selected work"
        title="Things I've"
        accent="made."
        description="Websites, guides, recaps, art and animated videos made for Web3 communities. Tap any card to see it on X."
      />
      <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {work.map((w, i) => (
          <a
            key={w.title}
            href={w.href}
            target="_blank"
            rel="noreferrer"
            className="brutal brutal-lift shadow-ink group flex flex-col overflow-hidden rounded-3xl bg-surface"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div
              className={`relative flex h-40 items-end justify-between border-b-2 border-ink p-6 text-on-color ${toneBg[w.tone]}`}
            >
              <span className="font-display text-6xl font-extrabold opacity-90">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border-2 border-on-color px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest">
                {w.type}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {w.client}
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold">{w.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{w.description}</p>
              <span className="mt-6 inline-flex items-center gap-1 font-mono text-sm text-volt">
                View on X
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageContainer>
  );
}
