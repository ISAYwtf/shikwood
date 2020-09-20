let modalCall = document.querySelector('.modal-call'),
    widget = document.querySelector('.vdz_cb_widget'),
    modalCallClose = document.querySelector('.modal-call__close');

widget.addEventListener('click', function() {
    event.preventDefault();
    modalCall.style.top = window.scrollY + window.screen.height * 0.2 + "px";
    modalCall.style.display = "flex";
    modalCall.classList.remove("animate__animated", "animate__fadeOut");
    modalCall.classList.add("animate__animated", "animate__fadeIn");
    document.body.style.overflow = 'hidden';
});

modalCallClose.addEventListener('click', function() {
    modalCall.classList.remove("animate__animated", "animate__fadeIn");
    modalCall.classList.add("animate__animated", "animate__fadeOut");
    document.body.style.overflow = '';
    setTimeout(() => modalCall.style.display = "none", 300);
});

let hoisting = document.querySelector('.hoisting');

window.addEventListener('scroll', function() {
    if (window.scrollY > window.screen.height * 2) {
        hoisting.style.display = 'flex';
    } else if (window.scrollY <= window.screen.height * 2) {
        hoisting.style.display = 'none';
    }
});

let clientForm = document.querySelector('.form').querySelector('form'),
    responseBlock = document.querySelector('.form__response'),
    modalForm = document.querySelector('.modal-call').querySelector('form'),
    modalCallResponse = document.querySelector('.modal-call__form__response');

clientForm.addEventListener('submit', (event) => {
    event.preventDefault();

    sendForm(clientForm, responseBlock);
});

modalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    sendForm(modalForm, modalCallResponse);
});

function sendForm(form, response) {
    let formData = {
        name: form.elements.name.value,
        phone: form.elements.phone.value,
        email: form.elements.email.value
    };

    let request = new XMLHttpRequest();

    request.addEventListener('load', () => {
        console.log(request.response);
        if (request.response === '1') {
            response.style.display = 'flex';
            response.querySelector('svg').style.display = 'unset';
            response.querySelector('p').textContent = 'Заявка успешно отправлена';
            response.style.justifyContent = 'space-between';
            form.elements.name.value = '';
            form.elements.phone.value = '';
            form.elements.email.value = '';
        } else  {
            response.style.display = 'flex';
            response.querySelector('svg').style.display = 'none';
            response.querySelector('p').innerHTML = 'Что-то пошло не так:( <br>Повторите попытку';
            response.style.justifyContent = 'center';
        }
    });

    request.open('POST', 'assets/simple_mail.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(`name= ${encodeURIComponent(formData.name)} &phone= ${encodeURIComponent(formData.phone)} &email= ${encodeURIComponent(formData.email)}`);

    setTimeout(document.body.addEventListener('click', () => {
        response.style.display = 'none';
    }), 1000);
}