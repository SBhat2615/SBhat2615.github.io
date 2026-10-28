import { about, metrics } from "@/lib/content";
import { Section } from "@/components/section";

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-base leading-7 text-pretty text-muted-foreground">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-10 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
        At Avaamo
      </p>
      <dl className="mt-3 grid grid-cols-2 overflow-hidden rounded-xl border border-border bg-card">
        {metrics.map((metric, index) => (
          <div
            key={metric.value}
            className={[
              "p-4 sm:p-5",
              index % 2 === 0 ? "border-r border-border" : "",
              index < 2 ? "border-b border-border" : "",
            ].join(" ")}
          >
            <dt className="font-display text-3xl tracking-tight text-copper sm:text-4xl">
              {metric.value}
            </dt>
            <dd className="mt-1.5 text-sm leading-snug text-pretty text-muted-foreground">
              {metric.label}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
