import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mb-20 scroll-mt-8 lg:scroll-mt-24"
    >
      <h2
        id={`${id}-title`}
        className="mb-6 text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase lg:sr-only"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
