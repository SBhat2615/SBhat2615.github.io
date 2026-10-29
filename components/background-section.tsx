import { Period } from "@/components/period";
import { Section } from "@/components/section";
import { activities, education, profile, skills } from "@/lib/content";
import { asset } from "@/lib/site";

const linkClass =
  "text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-saffron";

export function BackgroundSection() {
  return (
    <>
      <Section id="education" title="Education" tone="base">
        <div className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
          <Period value={education.period} />
          <div>
            <h3 className="text-base font-medium text-foreground">
              {education.credential}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {education.school} · {education.location} · {education.detail}
            </p>
          </div>
        </div>

        {activities.map((activity) => (
          <div
            key={activity.title}
            className="mt-8 grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
          >
            <Period value={activity.period} />
            <div>
              <h3 className="text-base font-medium text-foreground">
                {activity.title}
                <span className="text-muted-foreground"> · </span>
                {activity.org}
              </h3>
              <ul className="mt-3 space-y-2.5">
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
        <a
          href={`mailto:${profile.email}`}
          className="font-display text-2xl tracking-tight text-foreground underline decoration-saffron/50 underline-offset-[6px] hover:decoration-saffron sm:text-3xl"
        >
          {profile.email}
        </a>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <li>
            <a href={profile.phoneHref} className={linkClass}>
              {profile.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className={linkClass}>
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href={asset(profile.resumePath)}
              download="Siddhartha-Bhat-Resume.pdf"
              className={linkClass}
            >
              Resume
            </a>
          </li>
        </ul>
      </Section>
    </>
  );
}
