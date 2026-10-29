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
      className="mb-16 scroll-mt-8"
    >
      <h2
        id={`${id}-title`}
        className="mb-5 text-sm font-semibold tracking-[0.16em] text-copper uppercase"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
