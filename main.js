const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".side-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sideMenu.classList.toggle("active");
})