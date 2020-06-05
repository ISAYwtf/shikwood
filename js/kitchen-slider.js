$(document).ready(function () {
    //initialize swiper when document ready

    let sliders = document.querySelectorAll('.swiper-container');
    sliders.forEach(el => {
        let mySwiper = new Swiper(el, {
            // Optional parameters
            pagination: {
                el: el.querySelector('.swiper-pagination'),
                clickable: true
            },
            navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
            },
            speed: 300,
            setWrapperSize: true,
            slidesPerView: '1',
            watchSlidesProgress: true,
            spaceBetween: 20,
            grabCursor: true,
            centeredSlides: true,
            slideToClickedSlide: true
        })
    });
});