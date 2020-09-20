let close = document.querySelector(".modal-counter__close"),
    modal = document.querySelector(".modal-counter_over"),
    countBtn = document.querySelector(".count__wrapp__btn-item"),
    selectProject = document.querySelector("#selectProject"),
    selectMaterial = document.querySelector("#selectMaterial"),
    otherProject = document.querySelector("#otherProject"),
    otherMaterial = document.querySelector("#otherMaterial"),
    maxScrollY = 0;

countBtn.addEventListener("click", function() {
    modal.style.top = window.scrollY + "px";
    modal.style.display = "flex";
    modal.classList.remove("animate__animated", "animate__fadeOut");
    modal.classList.add("animate__animated", "animate__fadeIn");
    document.body.style.overflow = 'hidden';
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
    document.body.style.overflow = '';
});

let modalCounterForm = document.querySelector('.modal-counter').querySelector('form'),
    responseBlockModalCounter = document.querySelector('.modal-counter__form__response');

modalCounterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = {
        sizes: modalCounterForm.elements.sizes.value,
        location: modalCounterForm.elements.location.value,
        name: modalCounterForm.elements.name.value,
        phone: modalCounterForm.elements.phone.value,
        comments: modalCounterForm.elements.comments.value
    };

    if (modalCounterForm.elements.otherProject.value) {
        formData.project = modalCounterForm.elements.otherProject.value;
        console.log(formData.project);
    } else {
        formData.project = modalCounterForm.elements.selectProject.value;
    }

    if (modalCounterForm.elements.otherMaterial.value) {
        formData.material = modalCounterForm.elements.otherMaterial.value;
    } else {
        formData.material = modalCounterForm.elements.selectMaterial.value;
    }

    let request = new XMLHttpRequest();

    request.addEventListener('load', () => {
        console.log(request.response);
        if (request.response === '1') {
            responseBlockModalCounter.style.display = 'flex';
            responseBlockModalCounter.querySelector('svg').style.display = 'unset';
            responseBlockModalCounter.querySelector('p').textContent = 'Заявка успешно отправлена';
            responseBlockModalCounter.style.justifyContent = 'space-between';
            modalCounterForm.elements.otherProject.value = '';
            modalCounterForm.elements.otherMaterial.value = '';
            modalCounterForm.elements.sizes.value = '';
            modalCounterForm.elements.location.value = '';
            modalCounterForm.elements.name.value = '';
            modalCounterForm.elements.phone.value = '';
            modalCounterForm.elements.comments.value = '';
        } else  {
            responseBlockModalCounter.style.display = 'flex';
            responseBlockModalCounter.querySelector('svg').style.display = 'none';
            responseBlockModalCounter.querySelector('p').innerHTML = 'Что-то пошло не так:( <br>Повторите попытку';
            responseBlockModalCounter.style.justifyContent = 'center';
        }
    });

    request.open('POST', 'assets/full_mail.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(`project= ${encodeURIComponent(formData.project)} &material= ${encodeURIComponent(formData.material)}
                &sizes= ${encodeURIComponent(formData.sizes)} &location= ${encodeURIComponent(formData.location)}
                &name= ${encodeURIComponent(formData.name)} &phone= ${encodeURIComponent(formData.phone)}
                &comments= ${encodeURIComponent(formData.comments)}`);

    setTimeout(document.body.addEventListener('click', () => {
        responseBlockModalCounter.style.display = 'none';
    }), 1000);
});