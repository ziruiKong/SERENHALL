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
window.addEventListener('mousemove', (event) => {
  cursorLight.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

const iconBtn = document.querySelector('.icon-btn');
const topMenu = document.querySelector('.top-menu');

iconBtn.addEventListener('click', () => {
  topMenu.classList.toggle('menu-open');
  iconBtn.textContent = topMenu.classList.contains('menu-open') ? '×' : '↗';
});
