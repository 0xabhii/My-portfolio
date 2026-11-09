import avatar from "@/assets/avatar.jpg";
import { profile, socials } from "@/data/portfolio";
import { SocialIcon } from "./SocialIcon";

export function ProfileCard() {
  return (
    <div className="relative">
      <div className="absolute -right-3 -top-3 hidden size-16 animate-float rounded-full border-2 border-ink bg-sun md:block" />
      <div className="brutal shadow-flare relative rounded-3xl bg-surface p-6 md:p-8">
        <div className="flex items-center gap-5">
          <div className="brutal-sm shadow-volt size-24 shrink-0 overflow-hidden rounded-full md:size-28">
            <img
              src={avatar}
              alt={`${profile.name} avatar`}
              width={1024}
              height={1024}
              className="size-full object-cover"
            />
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold leading-tight">{profile.name}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {profile.timezone}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-volt">
              ● {profile.status}
            </p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {socials.map((s, i) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={`brutal-sm brutal-lift shadow-ink flex items-center gap-3 rounded-xl bg-background px-4 py-3 font-mono text-sm transition-colors hover:bg-volt hover:text-on-color ${
                i === socials.length - 1 ? "col-span-2" : ""
              }`}
            >
              <SocialIcon name={s.key} className="size-4 shrink-0" />
              <span className="truncate">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
