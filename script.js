let burger = document.querySelector(".burger");
let menu = document.querySelector("nav ul")
burger.addEventListener("click", start);

function start() {
    burger.classList.toggle("active")
    menu.classList.toggle("show")
}
