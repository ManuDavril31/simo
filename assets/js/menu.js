document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  const header = document.querySelector('header');

  // Solución definitiva contra el Jitter: Desacoplar el header del flujo del documento
  setTimeout(() => {
    document.body.style.paddingTop = header.offsetHeight + 'px';
    header.style.position = 'fixed';
    header.style.width = '100%';
    header.style.top = '0';
    header.style.left = '0';
    header.style.zIndex = '1000';
  }, 100);

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});