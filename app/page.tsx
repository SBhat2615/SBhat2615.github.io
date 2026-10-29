import { AboutSection } from "@/components/about-section";
import { BackgroundSection } from "@/components/background-section";
import { ExperienceSection } from "@/components/experience-section";
import { Identity } from "@/components/identity";
import { ProjectsSection } from "@/components/projects-section";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <Identity />
      <main id="content" tabIndex={-1} className="outline-none">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <BackgroundSection />
      </main>
      <footer className="border-t border-border bg-band-warm">
        <div className="mx-auto max-w-3xl px-6 py-6 text-sm text-muted-foreground md:px-8">
          Siddhartha Bhat · Bengaluru
        </div>
      </footer>
    </>
  );
}
