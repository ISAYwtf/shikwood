let listBtn = document.querySelector(".header__menu__link__list").children[0],
    list = document.querySelector("#list"),
    menu = document.querySelector(".header__menu"),
    logo = document.querySelector(".header__logo"),
    arrow = document.querySelector(".header__menu__link__list").children[1],
    header = document.querySelector(".header");

listBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (list.classList.contains("none")) {
        list.style.display = "flex";
        arrow.style.transform = "rotate(180deg)";
        list.classList.remove("animate__animated", "animate__fadeOut");
        list.classList.add("animate__animated", "animate__fadeIn");
    } else {
        // list.style.display = "none";
        arrow.style.transform = "";
        list.classList.remove("animate__animated", "animate__fadeIn");
        list.classList.add("animate__animated", "animate__fadeOut");
    }
    list.classList.toggle("none");
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        logo.classList.remove("animate__animated", "animate__fadeInDown");
        logo.classList.add("animate__animated", "animate__fadeOutUp");
        menu.style.marginTop = "-145px";
        if (window.scrollY > 200) {
            header.style.height = "80px";
        }
    } else if (window.scrollY <= 200 && logo.classList.contains("animate__animated")) {
        header.style.height = "225px";
        if (window.scrollY <= 100) {
            logo.classList.remove("animate__animated", "animate__fadeOutUp");
            logo.classList.add("animate__animated", "animate__fadeInDown");
            menu.style.marginTop = "";
        }
    }
});