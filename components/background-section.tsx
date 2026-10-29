import { Section } from "@/components/section";
import { activities, education, profile, skills } from "@/lib/content";

const linkClass =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-saffron";

const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "Phone", value: profile.phoneDisplay, href: profile.phoneHref, external: false },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, external: true },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, external: true },
  { label: "Twitter", value: profile.twitterHandle, href: profile.twitter, external: true },
];

export function BackgroundSection() {
  return (
    <>
      <Section id="education" title="Education" tone="base">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <h3 className="font-display text-2xl tracking-tight text-foreground">
            {education.school}
          </h3>
          <p className="shrink-0 font-mono text-xs tracking-wide text-muted-foreground">
            {education.period}
          </p>
        </div>
        <p className="mt-1.5 text-sm">
          <span className="font-medium text-saffron">{education.credential}</span>
          <span className="text-muted-foreground">
            {" "}
            · {education.detail} · {education.location}
          </span>
        </p>

        {activities.map((activity) => (
          <div key={activity.title} className="mt-8 border-l border-border pl-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <p className="text-base font-medium text-foreground">
                {activity.org}
                <span className="font-normal text-muted-foreground"> · {activity.kind}</span>
              </p>
              <p className="shrink-0 font-mono text-xs tracking-wide text-muted-foreground">
                {activity.period}
              </p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{activity.title}</p>
            <ul className="mt-3 space-y-2">
              {activity.points.map((point) => (
                <li
                  key={point}
                  className="grid grid-cols-[0.75rem_1fr] text-[15px] leading-relaxed text-pretty text-muted-foreground"
                >
                  <span aria-hidden="true" className="text-muted-foreground/60">
                    –
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <h3 className="mt-12 text-sm font-medium text-foreground">Skills</h3>
        <dl className="mt-4 grid gap-5 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="font-mono text-xs tracking-wide text-saffron">{group.label}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="contact" title="Contact" tone="warm">
        <dl className="grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-3 text-[15px]">
          {contacts.map((item) => (
            <div key={item.label} className="contents">
              <dt className="text-muted-foreground">{item.label}</dt>
              <dd className="min-w-0 break-words">
                <a
                  href={item.href}
                  className={linkClass}
                  {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {item.value}
                  {item.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
