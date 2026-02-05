const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});


document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});