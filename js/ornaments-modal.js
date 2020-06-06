let close = document.querySelector(".close"),
    modal = document.querySelector(".modal"),
    modalImg = document.querySelector(".modal__block-img").children[0],
    modalTitle = document.querySelector(".modal-title"),
    modalSmallSize = modal.querySelectorAll("label")[0].querySelectorAll("span"),
    modalMediumSize = modal.querySelectorAll("label")[1].querySelectorAll("span"),
    modalBigSize = modal.querySelectorAll("label")[2].querySelectorAll("span");

document.body.addEventListener("click", function(event) {
    let target = event.target;

    if (target.getAttribute("alt") === "ornament") {
        let title = target.parentNode.parentNode.children[0].textContent,
            img = target.getAttribute("src"),
            smallSize = target.parentNode.parentNode.getAttribute("data-size-small"),
            mediumSize = target.parentNode.parentNode.getAttribute("data-size-medium"),
            bigSize = target.parentNode.parentNode.getAttribute("data-size-big");

        modal.style.display = "flex";
        modalTitle.textContent = title;
        modalImg.setAttribute("src", img);

        defSize(smallSize, mediumSize, bigSize);

        document.body.style.overflow = "hidden";
    } else if (target.getAttribute("data") === "title") {
        let title = target.textContent,
            img = target.parentNode.children[1].children[0].getAttribute("src"),
            smallSize = target.parentNode.getAttribute("data-size-small"),
            mediumSize = target.parentNode.getAttribute("data-size-medium"),
            bigSize = target.parentNode.getAttribute("data-size-big");

        modal.style.display = "flex";
        modalTitle.textContent = title;
        modalImg.setAttribute("src", img);

        defSize(smallSize, mediumSize, bigSize);

        document.body.style.overflow = "hidden";
    } else if (target.getAttribute("data") === "block") {
        let title = target.children[0].textContent,
            img = target.children[1].children[0].getAttribute("src"),
            smallSize = target.getAttribute("data-size-small"),
            mediumSize = target.getAttribute("data-size-medium"),
            bigSize = target.getAttribute("data-size-big");

        modal.style.display = "flex";
        modalTitle.textContent = title;
        modalImg.setAttribute("src", img);

        defSize(smallSize, mediumSize, bigSize);

        document.body.style.overflow = "hidden";
    }


});

close.addEventListener("click", function() {
    modal.style.display = "none";
    document.body.style.overflow = "";
});

function defSize(small, medium, big) {
    small = small.split("-");
    medium = medium.split("-");
    big = big.split("-");

    modalSmallSize[0].textContent = small[0];
    modalSmallSize[1].textContent = small[1];
    modalSmallSize[2].textContent = small[2];

    modalMediumSize[0].textContent = medium[0];
    modalMediumSize[1].textContent = medium[1];
    modalMediumSize[2].textContent = medium[2];

    modalBigSize[0].textContent = big[0];
    modalBigSize[1].textContent = big[1];
    modalBigSize[2].textContent = big[2];
}