import { Link } from "@tanstack/react-router";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <Link to="/" className="group flex items-baseline gap-1 text-2xl" aria-label="Home">
      <span className="font-display font-extrabold tracking-tight">{profile.firstName}</span>
      <span className="font-serif text-[1.65rem] italic text-flare transition-colors group-hover:text-volt">
        web3
      </span>
    </Link>
  );
}

export function OpenToWork({ className = "" }: { className?: string }) {
  return (
    <span
      className={cn(
        "brutal-sm shadow-ink inline-flex items-center gap-2 rounded-full bg-volt px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-on-color",
        className,
      )}
    >
      <span className="size-2 animate-pulse-dot rounded-full bg-on-color" />
      {profile.status}
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "bg-volt !text-on-color font-bold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <OpenToWork className="hidden lg:inline-flex" />
      </div>
      <nav
        aria-label="Main mobile"
        className="no-scrollbar flex gap-2 overflow-x-auto px-5 pb-3 md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="shrink-0 rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted-foreground"
            activeProps={{ className: "bg-volt !text-on-color !border-volt font-bold" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
