import { createFileRoute } from "@tanstack/react-router";
import { PageContainer, SectionHeading } from "@/components/site/SectionHeading";
import { experience, profile, toneBg, toneShadow } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/experience")({
  head: () =>
    pageHead(
      "Experience — Abhijeet Kumar",
      "Ambassador, content creator and Discord moderator roles at Injective, Altius, XION, Boundless and KAST.",
    ),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageContainer>
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I've"
        accent="shown up."
        description={`In crypto since ${profile.since} and worked with 15+ projects. Here are the main roles.`}
      />

      <ol className="relative mt-14 space-y-6 border-l-2 border-dashed border-border pl-6 md:pl-10">
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span
              className={`absolute -left-[33px] top-8 size-4 rounded-full border-2 border-ink md:-left-[49px] ${toneBg[e.tone]}`}
            />
            <div
              className={`brutal brutal-lift rounded-3xl bg-surface p-6 md:p-8 ${toneShadow[e.tone]}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                  {e.company}
                </h2>
                <span
                  className={`brutal-sm shadow-ink rounded-full px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-on-color ${toneBg[e.tone]}`}
                >
                  {e.duration}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.roles.map((r) => (
                  <span
                    key={r}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground"
                  >
                    {r}
                  </span>
                ))}
              </div>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {e.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 rounded-3xl border border-border bg-surface/60 p-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Skills</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {profile.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border-2 border-volt px-4 py-2 font-mono text-sm text-volt"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
