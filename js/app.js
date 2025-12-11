// Smooth fade-in on scroll
const revealElements = document.querySelectorAll('.audience-card, .carousel-item, .hero-inner-card');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Simple horizontal drag for carousel
document.querySelectorAll('.carousel-inner').forEach((carousel) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('dragging');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('dragging');
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('dragging');
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.3;
    carousel.scrollLeft = scrollLeft - walk;
  });
});


// Highlight active nav link based on current page
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href.includes(location.pathname.split('/').pop())) {
    link.classList.add('active');
  }
});


// Language switching (very basic)
document.querySelectorAll('.lang-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.lang-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});
