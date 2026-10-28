import { AboutSection } from "@/components/about-section";
import { BackgroundSection } from "@/components/background-section";
import { ExperienceSection } from "@/components/experience-section";
import { Identity } from "@/components/identity";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-16 lg:py-0">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-16">
        <Identity />
        <main id="content" tabIndex={-1} className="pt-16 outline-none lg:w-[55%] lg:py-20">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <BackgroundSection />
          <footer className="border-t border-border pt-6 text-sm text-muted-foreground">
            <p>Siddhartha Bhat · Bengaluru</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
