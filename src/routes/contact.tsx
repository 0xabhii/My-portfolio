import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { OpenToWork } from "@/components/site/SiteHeader";
import { PageContainer, SectionHeading } from "@/components/site/SectionHeading";
import { SocialIcon } from "@/components/site/SocialIcon";
import { profile, socials, toneBg, type Tone } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact — Abhijeet Kumar",
      "Hire Abhijeet for Web3 content writing, community management or Discord administration. Reach out on X, Discord, Telegram or LinkedIn.",
    ),
  component: ContactPage,
});

const tones: Tone[] = ["volt", "flare", "ice", "sun", "volt", "flare"];

function ContactPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's build something"
          accent="loud."
          description="Need content that lands or a community that actually shows up? My DMs are open, and X or Telegram is the fastest way to reach me."
        />
        <div className="flex flex-col items-start gap-3 md:items-end">
          <OpenToWork />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {profile.timezone}
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {socials.map((s, i) => (
          <a
            key={s.key}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className={`brutal brutal-lift shadow-ink group flex min-h-48 flex-col justify-between rounded-3xl p-7 text-on-color ${toneBg[tones[i] ?? "volt"]} ${i === 0 ? "lg:col-span-2" : ""}`}
          >
            <div className="flex items-start justify-between">
              <SocialIcon name={s.key} className="size-10" />
              <ArrowUpRight className="size-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold tracking-tight">{s.label}</p>
              <p className="mt-1 font-mono text-sm">{s.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </PageContainer>
  );
}
