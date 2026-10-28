import { FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site-nav";
import { profile } from "@/lib/content";
import { asset } from "@/lib/site";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

export function Identity() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:max-w-md lg:shrink-0 lg:flex-col lg:justify-between lg:overflow-y-auto lg:py-20">
      <div>
        <p className="font-mono text-[11px] tracking-[0.22em] text-copper uppercase">
          {profile.location}
        </p>
        <h1 className="mt-3 font-display text-[2.7rem] leading-[0.98] tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-foreground">{profile.role}</p>
        <p className="mt-1 text-sm text-muted-foreground">Avaamo · Bengaluru</p>
        <p className="mt-5 max-w-sm text-base leading-relaxed text-pretty text-muted-foreground">
          {profile.lede}
        </p>
        <SiteNav />
      </div>

      <div className="mt-10 lg:mt-8">
        <div className="flex flex-wrap gap-2">
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
            <FileText />
            Resume
          </Button>
        </div>
        <ul className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-copper"
              >
                {social.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.phoneHref}
              className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-copper"
            >
              {profile.phoneDisplay}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
