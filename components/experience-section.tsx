import { Period } from "@/components/period";
import { Section } from "@/components/section";
import { roles } from "@/lib/content";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" tone="base">
      <ol>
        {roles.map((role) => (
          <li
            key={`${role.org}-${role.period}`}
            className="border-t border-border py-8 first:border-t-0 first:pt-0 last:pb-0"
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
                      className="underline decoration-border underline-offset-4 hover:decoration-saffron"
                    >
                      {role.org}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    role.org
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>
                <div className="mt-4 space-y-6">
                  {role.groups.map((group) => (
                    <div key={group.heading || role.org}>
                      {group.heading ? (
                        <h4 className="mb-2 text-sm font-medium text-saffron">
                          {group.heading}
                        </h4>
                      ) : null}
                      <ul className="space-y-2.5">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="grid grid-cols-[0.75rem_1fr] text-[15px] leading-relaxed text-pretty text-muted-foreground"
                          >
                            <span aria-hidden="true" className="text-muted-foreground/60">
                              –
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
