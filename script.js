const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const hero = document.querySelector('[data-parallax]');
const heroMedia = document.querySelector('.hero__media');
const stackSection = document.querySelector('[data-stack]');
const stackCards = [...document.querySelectorAll('.stack-card')];

window.addEventListener('scroll', () => {
  if (hero && heroMedia) {
    const rect = hero.getBoundingClientRect();
    const progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
    heroMedia.style.transform = `scale(1.08) translate3d(0, ${progress * -40}px, 0)`;
  }

  if (stackSection && stackCards.length) {
    const rect = stackSection.getBoundingClientRect();
    const range = rect.height - window.innerHeight;
    const t = Math.min(1, Math.max(0, -rect.top / Math.max(range, 1)));

    stackCards.forEach((card, idx) => {
      const start = idx / stackCards.length;
      const end = (idx + 1) / stackCards.length;
      const p = Math.min(1, Math.max(0, (t - start) / (end - start)));
      card.style.setProperty('--progress', p.toFixed(3));
    });
  }
});

window.dispatchEvent(new Event('scroll'));
