import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/content";
import { asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6 py-20">
      <p className="font-mono text-[11px] tracking-[0.22em] text-saffron uppercase">404</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground">
        This page is not on the site.
      </h1>
      <p className="mt-4 text-base leading-7 text-pretty text-muted-foreground">
        {profile.name}&apos;s portfolio is a single page: the work at Avaamo, two GitHub
        projects, and a resume download all live on the home page.
      </p>
      <div className="mt-8">
        <Button nativeButton={false} className="h-10 px-4" render={<a href={asset("/")} />}>
          Back to the home page
        </Button>
      </div>
    </main>
  );
}
