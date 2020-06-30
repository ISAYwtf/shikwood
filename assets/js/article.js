document.body.addEventListener("click", function() {
    let target = event.target,
        data = target.getAttribute("data-target"),
        article = document.querySelector("#" + data);

    if (data) {
        if (target.getAttribute("data-show") === "false") {
            target.style.transform = "rotate(180deg)";
            article.style.display = "flex";
            article.classList.remove("animate__animated", "animate__fadeOutUp");
            article.classList.add("animate__animated", "animate__fadeInDown");
            target.setAttribute("data-show", "true");
        } else {
            target.style.transform = "";
            article.classList.remove("animate__animated", "animate__fadeInDown");
            article.classList.add("animate__animated", "animate__fadeOutUp");
            target.setAttribute("data-show", "false");
            setTimeout(function() {
                article.style.display = "none";
            }, 300);
        }
    }
})