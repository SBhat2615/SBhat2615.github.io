import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { projects } from "@/lib/content";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" tone="raised">
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-saffron/60"
            >
              <h3 className="flex items-center justify-between gap-3 text-base font-medium text-foreground">
                {project.name}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-muted-foreground transition-colors group-hover:text-saffron"
                />
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-pretty text-muted-foreground">
                {project.detail}
              </p>
              <p className="mt-4 font-mono text-xs text-muted-foreground">
                {project.tags.join(" · ")}
              </p>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
