import { about } from "@/lib/content";
import { Section } from "@/components/section";

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-base leading-7 text-pretty text-muted-foreground">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
