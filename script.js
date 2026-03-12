const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((item) => revealObserver.observe(item));

const cursorLight = document.querySelector('.cursor-light');
const heroTitle = document.querySelector('[data-tilt]');

window.addEventListener('mousemove', (event) => {
  if (cursorLight) {
    cursorLight.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  }

  const xPercent = (event.clientX / window.innerWidth) * 100;
  const yPercent = (event.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty('--px', `${xPercent}%`);
  document.documentElement.style.setProperty('--py', `${yPercent}%`);

  if (heroTitle) {
    const rotateY = (xPercent - 50) / 10;
    const rotateX = (50 - yPercent) / 12;
    heroTitle.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
});

document.querySelector('.hero')?.addEventListener('mouseleave', () => {
  if (heroTitle) {
    heroTitle.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  }
});

document.querySelector('.scroll-hint')?.addEventListener('click', () => {
  document.querySelector('#modules')?.scrollIntoView({ behavior: 'smooth' });
});
