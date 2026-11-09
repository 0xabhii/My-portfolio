import type { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  description,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  accent: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl animate-rise">
      <div className="flex items-center gap-3">
        <span className="brutal-sm shadow-ink rounded-full bg-flare px-3 py-0.5 font-mono text-xs font-bold text-on-color">
          {index}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </span>
      </div>
      <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
        {title} <span className="font-serif font-normal italic text-volt">{accent}</span>
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

export function PageContainer({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-7xl px-5 pt-14 md:px-8 md:pt-20">{children}</main>;
}
