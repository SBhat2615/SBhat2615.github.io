import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { awards, education, profile, skills } from "@/lib/content";
import { asset } from "@/lib/site";
import { Period } from "@/components/period";

export function BackgroundSection() {
  return (
    <Section id="background" title="Background">
      <div className="grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
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
        <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          Awards and leadership
        </h3>
        {awards.map((award) => (
          <div key={award.title} className="mt-4 grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
            <Period value={award.period} />
            <div>
              <p className="text-base font-medium text-foreground">
                {award.title}
                <span className="text-muted-foreground"> · </span>
                {award.org}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{award.location}</p>
              <ul className="mt-3 space-y-3">
                {award.points.map((point) => (
                  <li
                    key={point}
                    className="grid grid-cols-[0.6rem_1fr] gap-3 text-[15px] leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.65rem] size-1.5 rounded-full bg-copper"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          Skills
        </h3>
        <dl className="mt-4 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="text-sm font-medium text-foreground">{group.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
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

      <div className="mt-14 border-t border-border pt-10">
        <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          Contact
        </h3>
        <p className="mt-4 max-w-prose text-base leading-7 text-pretty text-muted-foreground">
          Email is the best way to reach me. The file on this page is the same resume.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-4 inline-block font-display text-2xl tracking-tight text-foreground underline decoration-border underline-offset-4 hover:decoration-copper sm:text-3xl"
        >
          {profile.email}
        </a>
        <p className="mt-3">
          <a
            href={profile.phoneHref}
            className="text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-copper"
          >
            {profile.phoneDisplay}
          </a>
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button
            nativeButton={false}
            className="h-10 px-4"
            render={<a href={`mailto:${profile.email}`} />}
          >
            <Mail />
            Email
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            className="h-10 bg-card px-4"
            render={
              <a
                href={asset(profile.resumePath)}
                download="Siddhartha-Bhat-Resume.pdf"
              />
            }
          >
            Download resume
          </Button>
        </div>
      </div>
    </Section>
  );
}
