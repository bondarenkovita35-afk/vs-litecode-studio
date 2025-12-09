document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    document.body.style.setProperty('--mouse-x', x + 'px');
    document.body.style.setProperty('--mouse-y', y + 'px');
});
// lc-motion.js
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");

  // Если на странице нет .hero – просто выходим
  if (!hero) return;


  // --- Мягкое проявление блоков при скролле ---
  const fadeItems = document.querySelectorAll(".lc-fade-in");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lc-fade-in--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeItems.forEach((el) => observer.observe(el));
  } else {
    // старые браузеры – просто показываем
    fadeItems.forEach((el) =>
      el.classList.add("lc-fade-in--visible")
    );
  }

  // --- Живое свечение на кнопках ---
  const buttons = document.querySelectorAll(
    ".btn, .hero-button, .primary-btn, .cta-btn"
  );

  buttons.forEach((btn) => {
    btn.classList.add("lc-button-motion");

    btn.addEventListener("pointermove", (event) => {
      const rect = btn.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      btn.style.setProperty("--lc-btn-x", `${x}%`);
      btn.style.setProperty("--lc-btn-y", `${y}%`);
      btn.classList.add("lc-button-motion--active");
    });

    btn.addEventListener("pointerleave", () => {
      btn.classList.remove("lc-button-motion--active");
    });
  });
});
