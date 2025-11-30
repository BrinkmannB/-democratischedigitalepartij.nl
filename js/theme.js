const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

