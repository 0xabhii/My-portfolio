import { profile, socials } from "@/data/portfolio";
import { SocialIcon } from "./SocialIcon";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · {profile.timezone}
        </p>
        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-volt hover:bg-volt hover:text-on-color"
            >
              <SocialIcon name={s.key} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
