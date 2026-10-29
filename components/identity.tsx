import { FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, verse } from "@/lib/content";
import { asset } from "@/lib/site";

const linkClass =
  "text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-saffron";

export function Identity() {
  return (
    <header id="top" className="hero-glow bg-band-base">
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-16 md:px-8 md:pt-24 md:pb-20">
        <p className="font-mono text-xs tracking-[0.2em] text-saffron uppercase">
          {profile.location}
        </p>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-tight text-foreground sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-lg text-foreground">
          {profile.tagline}
          <span className="text-muted-foreground"> · </span>
          <a
            href="https://avaamo.ai"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-border underline-offset-4 hover:decoration-saffron"
          >
            {profile.company}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>

        <figure className="mt-12 border-l-2 border-saffron/70 pl-4 sm:pl-6">
          <blockquote
            lang="sa"
            className="font-sanskrit text-[1.05rem] leading-[1.9] text-foreground sm:text-2xl sm:leading-[1.8]"
          >
            {verse.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </blockquote>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            {verse.source}
          </figcaption>
        </figure>

        <div className="mt-12 flex flex-wrap items-center gap-2">
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
            className="h-10 px-4"
            render={
              <a href={asset(profile.resumePath)} download="Siddhartha-Bhat-Resume.pdf" />
            }
          >
            <FileText />
            Resume
          </Button>
          <ul className="ml-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
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
          </ul>
        </div>
      </div>
    </header>
  );
}
