const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const hero = document.querySelector('[data-parallax]');
const heroMedia = document.querySelector('.hero__media');
const root = document.documentElement;

const updateScrollEffects = () => {
  if (!hero || !heroMedia) return;
  const rect = hero.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)));
  const parallax = Math.max(-1, Math.min(1, rect.top / window.innerHeight));

  heroMedia.style.transform = `scale(1.08) translate3d(calc(var(--mx) * -0.35px), calc(var(--my) * -0.35px + ${parallax * -44}px), 0)`;
  root.style.setProperty('--hero-progress', progress.toFixed(3));
};

window.addEventListener('scroll', updateScrollEffects, { passive: true });

window.addEventListener('mousemove', (event) => {
  const mx = (event.clientX / window.innerWidth - 0.5) * 42;
  const my = (event.clientY / window.innerHeight - 0.5) * 42;
  root.style.setProperty('--mx', mx.toFixed(2));
  root.style.setProperty('--my', my.toFixed(2));
});

window.dispatchEvent(new Event('scroll'));
