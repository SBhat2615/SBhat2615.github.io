import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { profile, projects } from "@/lib/content";
import { asset } from "@/lib/site";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <p className="max-w-prose text-base leading-7 text-pretty text-muted-foreground">
        Two repositories from{" "}
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-foreground underline decoration-border underline-offset-4 hover:decoration-copper"
        >
          github.com/{profile.githubHandle}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        . Fungus ROI Detection is the computer-vision work. StudyHub is the most
        complete application in the account.
      </p>
      <div className="dim-group mt-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="dim-item -mx-5 border-t border-border px-5 py-8 first:border-t-0"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-display text-3xl tracking-tight text-copper">
                {project.index}
              </p>
              <p className="font-mono text-[12px] tracking-[0.14em] text-muted-foreground uppercase">
                {project.year}
              </p>
            </div>
            <h3 className="mt-3 text-xl font-medium tracking-tight text-foreground">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 underline decoration-transparent underline-offset-4 hover:decoration-copper"
              >
                {project.name}
                <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </h3>
            <p className="mt-3 text-base leading-7 text-foreground">{project.summary}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted-foreground">
              {project.detail}
            </p>
            {project.image ? (
              <figure className="mt-5">
                <Image
                  src={asset(project.image.src)}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  loading="eager"
                  className="h-auto w-full rounded-lg border border-border bg-card object-cover"
                />
                <figcaption className="mt-2 text-xs text-muted-foreground">
                  {project.image.caption}
                </figcaption>
              </figure>
            ) : null}
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
