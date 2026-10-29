import { Period } from "@/components/period";
import { Section } from "@/components/section";
import { roles } from "@/lib/content";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <ol>
        {roles.map((role) => (
          <li
            key={`${role.org}-${role.period}`}
            className="border-t border-border py-6 first:border-t-0 first:pt-0"
          >
            <div className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
              <Period value={role.period} />
              <div>
                <h3 className="text-base leading-snug font-medium text-foreground">
                  {role.title}
                  <span className="text-muted-foreground"> · </span>
                  {role.orgUrl ? (
                    <a
                      href={role.orgUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-border underline-offset-4 hover:decoration-copper"
                    >
                      {role.org}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    role.org
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>
                <ul className="mt-3 space-y-2.5">
                  {role.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] leading-relaxed text-pretty text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
