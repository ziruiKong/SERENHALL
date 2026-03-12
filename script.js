const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 24);
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

const menuButton = document.querySelector(".nav__menu");
const navLinks = document.querySelector(".nav__links");
menuButton.addEventListener("click", () => {
  const shown = getComputedStyle(navLinks).display !== "none";
  navLinks.style.display = shown ? "none" : "flex";
  navLinks.style.position = "absolute";
  navLinks.style.top = "100%";
  navLinks.style.right = "1rem";
  navLinks.style.flexDirection = "column";
  navLinks.style.padding = "1rem";
  navLinks.style.border = "1px solid rgba(12,17,26,.2)";
  navLinks.style.background = "rgba(242,242,242,.95)";
});
