const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const hero = document.querySelector('[data-parallax]');
const heroMedia = document.querySelector('.hero__media');

window.addEventListener('scroll', () => {
  if (!hero || !heroMedia) return;
  const rect = hero.getBoundingClientRect();
  const progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
  const y = progress * -40;
  heroMedia.style.transform = `scale(1.08) translate3d(0, ${y}px, 0)`;
});
