const navLinks = [...document.querySelectorAll(".nav-pill a")];
const revealItems = [...document.querySelectorAll(".reveal")];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const activeLink = navLinks.find(
        (link) => link.getAttribute("href") === `#${entry.target.id}`,
      );
      navLinks.forEach((link) => link.classList.toggle("is-active", link === activeLink));
    });
  },
  { rootMargin: "-36% 0px -58% 0px", threshold: 0.01 },
);

document.querySelectorAll("main section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.16 },
);

revealItems.forEach((item) => revealObserver.observe(item));
