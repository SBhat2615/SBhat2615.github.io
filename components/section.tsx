import type { ReactNode } from "react";

const tones = {
  base: "bg-band-base",
  raised: "bg-band-raised",
  warm: "bg-band-warm",
} as const;

export function Section({
  id,
  title,
  tone = "base",
  children,
}: {
  id: string;
  title: string;
  tone?: keyof typeof tones;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`${tones[tone]} scroll-mt-14 border-t border-border`}
    >
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-20">
        <h2
          id={`${id}-title`}
          className="mb-8 font-mono text-xs tracking-[0.2em] text-saffron uppercase"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
