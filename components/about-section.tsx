import { about } from "@/lib/content";
import { Section } from "@/components/section";

export function AboutSection() {
  return (
    <Section id="about" title="About" tone="raised">
      <div className="space-y-4 text-base leading-7 text-pretty text-muted-foreground">
        {about.avaamo.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-10 text-sm font-medium text-foreground">Before Avaamo</h3>
      <ul className="mt-3 space-y-2">
        {about.earlier.map((item) => (
          <li key={item.org} className="text-[15px] leading-relaxed text-muted-foreground">
            <span className="text-foreground">{item.org}.</span> {item.text}
          </li>
        ))}
      </ul>

      <h3 className="mt-10 text-sm font-medium text-foreground">Areas I work in</h3>
      <dl className="mt-3 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {about.areas.map((area, index) => (
          <div
            key={area.label}
            className={`bg-band-raised p-4 ${
              index === about.areas.length - 1 && about.areas.length % 2 === 1
                ? "sm:col-span-2"
                : ""
            }`}
          >
            <dt className="text-sm font-medium text-foreground">{area.label}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{area.detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
