import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { roles } from "@/lib/content";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" tone="base">
      <ol>
        {roles.map((role) => (
          <li
            key={`${role.org}-${role.period}`}
            className="border-t border-border py-10 first:border-t-0 first:pt-0 last:pb-0"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-display text-2xl tracking-tight text-foreground">
                {role.orgUrl ? (
                  <a
                    href={role.orgUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 hover:text-saffron"
                  >
                    {role.org}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 text-muted-foreground transition-colors group-hover:text-saffron"
                    />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  role.org
                )}
              </h3>
              <p className="shrink-0 font-mono text-xs tracking-wide text-muted-foreground sm:order-none">
                {role.period}
              </p>
            </div>
            <p className="mt-1.5 text-sm">
              <span className="font-medium text-saffron">{role.title}</span>
              <span className="text-muted-foreground"> · {role.location}</span>
            </p>

            <div className="mt-5 space-y-6">
              {role.groups.map((group) => (
                <div key={group.heading || role.org}>
                  {group.heading ? (
                    <h4 className="mb-2 text-sm font-medium text-foreground">
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
          </li>
        ))}
      </ol>
    </Section>
  );
}
