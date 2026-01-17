const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  },
  {
    threshold: 0.9
  }
);

observer.observe(hero);

/* ===============================
   Split Scroll Fade-in Logic
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".experience-block");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // reveal once (luxury)
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -30% 0px"
    }
  );

  blocks.forEach(block => observer.observe(block));
});