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
    <nav aria-label="Sections" className="site-nav mt-10">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-1 lg:flex lg:flex-col lg:gap-1">
        {nav.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={item.id === nav[0].id ? "true" : undefined}
              className="group inline-flex items-center gap-3 py-1 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase hover:text-foreground"
            >
              <span aria-hidden="true" className="nav-line hidden lg:block" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <script dangerouslySetInnerHTML={{ __html: sectionSpy }} />
    </nav>
  );
}
