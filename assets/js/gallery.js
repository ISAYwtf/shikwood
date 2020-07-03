let close = document.querySelector(".close"),
    block = document.querySelectorAll(".gallery");

document.body.addEventListener("click", function(event) {
    let target = event.target;

    if (target.getAttribute("alt") === "gallery") {
        target.parentNode.classList.add("full");
        close.classList.remove("none");
        document.body.style.overflow = "hidden";
        hoisting.style.display = 'none';
    }
});

close.addEventListener("click", function() {
    let img = document.querySelector(".full");
    img.classList.remove("full");
    close.classList.add("none");
    document.body.style.overflow = "";
    if (window.scrollY > window.screen.height * 2) {
        hoisting.style.display = 'flex';
    }
});

block.forEach(el => {
    let len = el.querySelectorAll("img").length;
    for (let i = 0; i < len; i++) {
        createDiv(el);
    }
    el.classList.add("gallery__block_" + el.children.length);
});

function createDiv(container) {
    let img = container.querySelectorAll("img")[0],
        wrapp = document.createElement("div");
    if (img.getAttribute("src") === "") {
        img.remove();
    } else {
        container.append(wrapp);
        wrapp.append(img);
    }
}