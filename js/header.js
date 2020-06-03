let listBtn = document.querySelector(".header__menu__link__list"),
list = document.querySelector("#list");

listBtn.addEventListener("click", function(event) {
event.preventDefault();
if (list.classList.contains("none")) {
    list.style.display = "flex";
} else {
    list.style.display = "none";
}
list.classList.toggle("none");
});