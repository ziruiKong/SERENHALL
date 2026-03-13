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

window.addEventListener('scroll', () => {
  if (hero && heroMedia) {
    const rect = hero.getBoundingClientRect();
    const progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
    heroMedia.style.transform = `scale(1.08) translate3d(0, ${progress * -40}px, 0)`;
  }

});

window.dispatchEvent(new Event('scroll'));
