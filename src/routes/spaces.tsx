import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Mic } from "lucide-react";
import { PageContainer, SectionHeading } from "@/components/site/SectionHeading";
import { spaces, toneBg } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/spaces")({
  head: () =>
    pageHead(
      "Spaces — Abhijeet Kumar",
      "X Spaces and AMAs Abhijeet has hosted and co-hosted for XION and Injective.",
    ),
  component: SpacesPage,
});

function People({ label, names }: { label: string; names: string[] }) {
  if (names.length === 0) return null;
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">{label}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {names.map((n) => (
          <span
            key={n}
            className="rounded-full border border-on-color/40 px-2.5 py-0.5 font-mono text-xs"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

function SpacesPage() {
  return (
    <PageContainer>
      <SectionHeading
        index="03"
        eyebrow="X Spaces & AMAs"
        title="On the"
        accent="mic."
        description="Casual, community-first AMAs. I host, co-host and bring good speakers together."
      />
      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {spaces.map((s) => (
          <article
            key={s.title}
            className={`brutal brutal-lift shadow-ink flex flex-col rounded-3xl text-on-color ${toneBg[s.tone]}`}
          >
            <div className="flex items-center justify-between border-b-2 border-dashed border-on-color/50 px-6 py-4">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest">
                <Mic className="size-4" /> {s.myRole}
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                {s.project}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-5 p-6">
              <h2 className="font-display text-3xl font-extrabold leading-tight">{s.title}</h2>
              <p className="inline-flex items-center gap-2 font-mono text-sm">
                <Clock className="size-4" /> {s.when}
              </p>
              <p className="leading-relaxed">{s.about}</p>
              <People label="Host" names={s.host} />
              <People label="Co-hosts" names={s.coHosts} />
              <People label="Speakers" names={s.speakers} />
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-on-color bg-on-color px-4 py-3 font-mono text-sm font-bold uppercase tracking-widest text-ink transition-opacity hover:opacity-85"
              >
                Listen on X <ArrowUpRight className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}
