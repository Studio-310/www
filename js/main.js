// main.js

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.hero, section');

  // Callback to reveal the element
  function revealCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }

  function initObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver(revealCallback, options);
    revealElements.forEach(el => observer.observe(el));
  }

  // Fallback: For browsers without IntersectionObserver
  function fallbackReveal() {
    // Simply show all elements immediately
    revealElements.forEach(el => {
      el.classList.add('visible');
    });
  }

  // Feature detection
  if ('IntersectionObserver' in window) {
    initObserver();
  } else {
    fallbackReveal();
  }
});
