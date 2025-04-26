const scrollElements = document.querySelectorAll('.scroll-fade-in');

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

scrollElements.forEach((el) => {
  scrollObserver.observe(el);
});
