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

if (window.scrollY > window.screen.height * 2) {
    hoisting.style.display = 'flex';
} else if (window.scrollY <= window.screen.height * 2) {
    hoisting.style.display = 'none';
}