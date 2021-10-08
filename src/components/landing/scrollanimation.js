const animatedObserver = new IntersectionObserver(
  (entries, animatedObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("enter");
        animatedObserver.unobserve(entry.target);
      }
    });
  }
);

export default {
  bind(el) {
    el.classList.add("before-enter");
    animatedObserver.observe(el);
  }
};
