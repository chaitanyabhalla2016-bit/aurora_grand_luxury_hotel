const navbar = document.querySelector(".navbar");
const trigger = document.querySelector(".nav-trigger");

const observer = new IntersectionObserver(
  ([entry]) => {
    navbar.classList.toggle("scrolled", !entry.isIntersecting);
  },
  {
    rootMargin: "-1px 0px 0px 0px"
  }
);

observer.observe(trigger);