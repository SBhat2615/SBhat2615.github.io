import { Period } from "@/components/period";
import { Section } from "@/components/section";
import { roles } from "@/lib/content";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <ol className="dim-group">
        {roles.map((role) => (
          <li
            key={`${role.org}-${role.period}`}
            className="dim-item -mx-5 border-t border-border px-5 py-8 first:border-t-0"
          >
            <div className="grid gap-3 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
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
                <ul className="mt-4 space-y-3">
                  {role.highlights.map((item) => (
                    <li
                      key={item.lead}
                      className="grid grid-cols-[0.6rem_1fr] gap-3 text-[15px] leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] size-1.5 rounded-full bg-copper"
                      />
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">{item.lead}</span>{" "}
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools">
                  {role.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
                    >
                      {tag}
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
