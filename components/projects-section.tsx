import { Section } from "@/components/section";
import { projects } from "@/lib/content";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <ul>
        {projects.map((project) => (
          <li
            key={project.name}
            className="border-t border-border py-6 first:border-t-0 first:pt-0"
          >
            <h3 className="text-base font-medium text-foreground">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-4 hover:decoration-copper"
              >
                {project.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted-foreground">
              {project.detail}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
