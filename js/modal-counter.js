let close = document.querySelector(".modal-counter__close"),
    modal = document.querySelector(".modal-counter_over"),
    countBtn = document.querySelector(".count__wrapp__btn-item"),
    selectProject = document.querySelector("#selectProject"),
    selectMaterial = document.querySelector("#selectMaterial"),
    otherProject = document.querySelector("#otherProject"),
    otherMaterial = document.querySelector("#otherMaterial"),
    maxScrollY = 0;

countBtn.addEventListener("click", function() {
    modal.style.top = countBtn.offsetTop + 100 + "px";
    modal.style.display = "flex";
    modal.classList.remove("animate__animated", "animate__fadeOut");
    modal.classList.add("animate__animated", "animate__fadeIn");
});

selectProject.addEventListener("change", function() {
    if (selectProject.value === "Другое") {
        otherProject.removeAttribute("disabled");
    } else {
        otherProject.setAttribute("disabled", "true");
    }
});

selectMaterial.addEventListener("change", function() {
    if (selectMaterial.value === "Другое") {
        otherMaterial.removeAttribute("disabled");
    } else {
        otherMaterial.setAttribute("disabled", "true");
    }
});


close.addEventListener("click", function() {
    modal.classList.remove("animate__animated", "animate__fadeIn");
    modal.classList.add("animate__animated", "animate__fadeOut");
    setTimeout(function() {
        modal.style.display = "none";
    }, 300);
});