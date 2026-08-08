const menuToggle = document.querySelector(".menu_toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");

    const menuAberto = nav.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
    }
});

