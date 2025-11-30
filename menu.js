const navToggleBtn = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggleBtn && navLinks) {
    navToggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            navLinks.classList.remove("open");
        }
    });
}
