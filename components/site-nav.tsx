import { nav } from "@/lib/content";

const sectionSpy = `
(function () {
  var ids = ${JSON.stringify(nav.map((item) => item.id))};
  function update() {
    var navRoot = document.querySelector('nav[aria-label="Sections"]');
    if (!navRoot) return;
    var marker = window.innerHeight * 0.33;
    var current = ids[0];
    for (var i = 0; i < ids.length; i++) {
      var section = document.getElementById(ids[i]);
      if (section && section.getBoundingClientRect().top <= marker) current = ids[i];
    }
    var links = navRoot.querySelectorAll("a");
    for (var j = 0; j < links.length; j++) {
      if (links[j].getAttribute("href") === "#" + current) links[j].setAttribute("aria-current", "true");
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
    <nav aria-label="Sections" className="site-nav mt-8">
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {nav.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={item.id === nav[0].id ? "true" : undefined}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <script dangerouslySetInnerHTML={{ __html: sectionSpy }} />
    </nav>
  );
}
