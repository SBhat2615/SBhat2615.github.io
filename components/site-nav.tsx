import { nav, profile } from "@/lib/content";

const sectionSpy = `
(function () {
  var ids = ${JSON.stringify(nav.map((item) => item.id))};
  function update() {
    var navRoot = document.querySelector('nav[aria-label="Sections"]');
    if (!navRoot) return;
    var marker = window.innerHeight * 0.33;
    var current = null;
    for (var i = 0; i < ids.length; i++) {
      var section = document.getElementById(ids[i]);
      if (section && section.getBoundingClientRect().top <= marker) current = ids[i];
    }
    var links = navRoot.querySelectorAll("a[data-section]");
    for (var j = 0; j < links.length; j++) {
      if (current && links[j].getAttribute("data-section") === current) links[j].setAttribute("aria-current", "true");
      else links[j].removeAttribute("aria-current");
    }
  }
  function start() {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
`;

export function SiteNav() {
  return (
    <div className="sticky top-0 z-40 border-b border-border bg-band-base/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-6 px-4 sm:px-6 md:px-8">
        <a
          href="#top"
          className="hidden shrink-0 text-sm font-medium text-foreground sm:block"
        >
          {profile.name}
        </a>
        <nav aria-label="Sections" className="site-nav w-full overflow-x-auto sm:w-auto">
          <ul className="flex items-center justify-between gap-0.5 sm:justify-end sm:gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-section={item.id}
                  className="block px-1.5 py-4 text-[13px] whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground sm:px-2 sm:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <script dangerouslySetInnerHTML={{ __html: sectionSpy }} />
    </div>
  );
}
