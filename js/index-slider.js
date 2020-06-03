jQuery(document).ready(function ($) {
    let timer = setInterval(function () {
        moveRight();
    }, 7000);

    let slideCount = $('#slider ul li').length,
        slideWidth = $('#slider ul li').width(),
        slideHeight = $('#slider ul li').height(),
        sliderUlWidth = slideCount * slideWidth,
        slideTxt = document.querySelectorAll(".slider__about"),
        slideIndex = 0,
        sliderDots = document.querySelector(".slider__dots"),
        sliderDotItems = document.querySelectorAll(".slider__dots__item");

    $('#slider').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
        indexCounter(-1);
        console.log(slideIndex);
        slideText(slideIndex);
        clearInterval(timer);
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
        indexCounter(1);
        console.log(slideIndex);
        slideText(slideIndex);
        clearInterval(timer);
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

    sliderDots.addEventListener("click", function(event) {
        let target = event.target,
            active = slideIndex, index;

        if (target.classList.contains("slider__dots__item")) {
            for (let i = 0; i < slideCount; i++) {
                if (sliderDotItems[i] == target) {
                    index = i;
                    if (index < active) {
                        for (let j = 0; j <  active - index; j++) {
                            moveLeft();
                        }
                    } else if (index > active) {
                        for (let j = 0; j <  index - active; j++) {
                            moveRight();
                        }
                    } else {
                        return;
                    }
                }
            }
        }
    })

    function indexCounter(index) {
        if (index < 0) {
            slideIndex--;
            if (slideIndex < 0) slideIndex = slideCount - 1;
        } else {
            slideIndex++;
            if (slideIndex >= slideCount) slideIndex = 0;
        }
    }

    function slideText(index) {
        slideTxt.forEach(item=> {
            item.id = "";
            item.classList.remove("animate__animated", "animate__fadeInUp");
        });
        sliderDotItems.forEach(item=>item.classList.remove("active"));
        sliderDotItems[index].classList.add("active");
        slideTxt[index].id = "active";
        slideTxt[index].classList.add("animate__animated", "animate__fadeInUp");
    }

});