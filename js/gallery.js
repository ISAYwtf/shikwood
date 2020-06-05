let close = document.querySelector(".close");

document.body.addEventListener("click", function(event) {
    let target = event.target;

    if (target.getAttribute("alt") === "gallery") {
        target.parentNode.classList.add("full");
        close.classList.remove("none");
        document.body.style.overflow = "hidden";
    }


});

close.addEventListener("click", function() {
    let img = document.querySelector(".full");
    img.classList.remove("full");
    close.classList.add("none");
    document.body.style.overflow = "";
});