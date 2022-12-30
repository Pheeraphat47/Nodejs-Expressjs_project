const hamburger_menu = document.querySelector(".hamburger_menu");
const navMenu = document.querySelector(".nav-menu");

hamburger_menu.addEventListener("click", () => {
    hamburger_menu.classList.toggle("active");
    navMenu.classList.toggle("active");
})



