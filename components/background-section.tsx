import { Period } from "@/components/period";
import { Section } from "@/components/section";
import { activities, education, profile, skills } from "@/lib/content";
import { asset } from "@/lib/site";

export function BackgroundSection() {
  return (
    <>
      <Section id="education" title="Education">
        <div className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
          <Period value={education.period} />
          <div>
            <h3 className="text-base font-medium text-foreground">
              {education.credential}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {education.school} · {education.location}
            </p>
            <p className="mt-2 text-sm text-foreground">{education.detail}</p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-medium text-foreground">Activities</h3>
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="mt-4 grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
            >
              <Period value={activity.period} />
              <div>
                <p className="text-base font-medium text-foreground">
                  {activity.title}
                  <span className="text-muted-foreground"> · </span>
                  {activity.org}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{activity.location}</p>
                <ul className="mt-3 space-y-2.5">
                  {activity.points.map((point) => (
                    <li
                      key={point}
                      className="text-[15px] leading-relaxed text-pretty text-muted-foreground"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-medium text-foreground">Skills</h3>
          <dl className="mt-4 grid gap-5 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.label}>
                <dt className="text-sm font-medium text-foreground">{group.label}</dt>
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
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p>
          <a
            href={`mailto:${profile.email}`}
            className="text-base text-foreground underline decoration-border underline-offset-4 hover:decoration-copper"
          >
            {profile.email}
          </a>
        </p>
        <p className="mt-2">
          <a
            href={profile.phoneHref}
            className="text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-copper"
          >
            {profile.phoneDisplay}
          </a>
        </p>
        <p className="mt-4">
          <a
            href={asset(profile.resumePath)}
            download="Siddhartha-Bhat-Resume.pdf"
            className="text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-copper"
          >
            Resume
          </a>
        </p>
      </Section>
    </>
  );
}
