const menuToggle = document.querySelector(".menu_toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");
    }
});

