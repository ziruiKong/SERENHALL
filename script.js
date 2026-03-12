const reveals = document.querySelectorAll('.reveal');

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
reveals.forEach((item) => revealObserver.observe(item));

const cursorLight = document.querySelector('.cursor-light');
const hero = document.querySelector('.hero');
const heroTitle = document.querySelector('[data-tilt]');

window.addEventListener('mousemove', (event) => {
  cursorLight.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;

  const xPercent = (event.clientX / window.innerWidth) * 100;
  const yPercent = (event.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty('--px', `${xPercent}%`);
  document.documentElement.style.setProperty('--py', `${yPercent}%`);

  if (heroTitle) {
    const rotateY = (xPercent - 50) / 11;
    const rotateX = (50 - yPercent) / 12;
    heroTitle.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
});

hero?.addEventListener('mouseleave', () => {
  if (heroTitle) {
    heroTitle.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  }
});

const iconBtn = document.querySelector('.icon-btn');
const topMenu = document.querySelector('.top-menu');
iconBtn?.addEventListener('click', () => {
  topMenu.classList.toggle('menu-open');
  iconBtn.textContent = topMenu.classList.contains('menu-open') ? '×' : '↗';
});

const scrollHint = document.querySelector('.scroll-hint');
scrollHint?.addEventListener('click', () => {
  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
});
