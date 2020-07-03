let listBtn = document.querySelector(".header__menu__link__list").children[0],
    list = document.querySelector("#list"),
    menu = document.querySelector(".header__menu"),
    logo = document.querySelector(".header__logo"),
    arrow = document.querySelector(".header__menu__link__list").children[1],
    header = document.querySelector(".header");

arrow.addEventListener("click", function (event) {
    event.preventDefault();
    if (list.classList.contains("none")) {
        list.style.display = "flex";
        arrow.style.transform = "rotate(180deg)";
        list.classList.remove("animate__animated", "animate__fadeOut");
        list.classList.add("animate__animated", "animate__fadeIn");
    } else {
        arrow.style.transform = "";
        list.classList.remove("animate__animated", "animate__fadeIn");
        list.classList.add("animate__animated", "animate__fadeOut");
        setTimeout(() => list.style.display = "none", 200);
    }
    list.classList.toggle("none");
});

listBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (list.classList.contains("none")) {
        list.style.display = "flex";
        arrow.style.transform = "rotate(180deg)";
        list.classList.remove("animate__animated", "animate__fadeOut");
        list.classList.add("animate__animated", "animate__fadeIn");
    } else {
        arrow.style.transform = "";
        list.classList.remove("animate__animated", "animate__fadeIn");
        list.classList.add("animate__animated", "animate__fadeOut");
        setTimeout(() => list.style.display = "none", 200);
    }
    list.classList.toggle("none");
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        logo.classList.remove("animate__animated", "animate__fadeInDown");
        logo.classList.add("animate__animated", "animate__fadeOutUp");
        menu.style.marginTop = "-145px";
        if (window.scrollY > 200) {
            header.style.height = "80px";
        }
    } else if (window.scrollY <= 200 && logo.classList.contains("animate__animated")) {
        header.style.height = "225px";
        if (window.scrollY <= 100) {
            logo.classList.remove("animate__animated", "animate__fadeOutUp");
            logo.classList.add("animate__animated", "animate__fadeInDown");
            menu.style.marginTop = "";
        }
    }
});

let pathUrl = document.location.pathname.split('/')[1],
    urls = ['about.html', 'gallery.html'],
    links =  ['types.html', 'ornaments.html'];;

urls.forEach(item => {
    if (pathUrl === item) {
        menu.querySelector(`a[href='${item}']`).classList.add('header-menu__active');
    }
});

if (pathUrl.includes(links[0]) || pathUrl.includes(links[1])) {
    menu.querySelector(`.header__menu__link__list`).classList.add('header-menu__active');
}

// let contactLink = document.querySelector("a[href='index.html#contacts']"),
//     contactPos = document.querySelector('#contacts').offsetTop - 225;

// contactLink.addEventListener('click', function() {
//     event.preventDefault();
//     window.scrollTo(0, contactPos);
// });


$(function () {

    let $search = $("input[type='search']"),
        $searchBtns = $('.header__menu__search__btns'),
        $searchClear = $("button[data-search='clear']"),
        $searchNext = $("button[data-search='next']"),
        $searchPrev = $("button[data-search='prev']"),
        $content = $('main'),
        $results,
        currentClass = "current",
        offsetTop = 275,
        currentIndex = 0;

    function jumpTo() {
        if ($results.length) {
            let position,
                $current = $results.eq(currentIndex);
            $results.removeClass(currentClass);
            if ($current.length) {
                $current.addClass(currentClass);
                position = $current.offset().top - offsetTop;
                window.scrollTo(0, position);
            }
        }
    }

    $search.on("input", function () {
        $searchBtns.addClass('header__menu__search__btns--type');
        if (this.value.length < 1) {
            $searchBtns.removeClass('header__menu__search__btns--type');
        }
        let searchVal = this.value;
        $content.unmark({
            done: function () {
                $content.mark(searchVal, {
                    separateWordSearch: false,
                    exclude: [".slider-container"],
                    done: function () {
                        $results = $content.find("mark");
                        currentIndex = 0;
                        jumpTo();
                    }
                });
            }
        });
    });

    $searchClear.on("click", function () {
        $searchBtns.removeClass('header__menu__search__btns--type');
        $content.unmark();
        $search.val("").focus();
    });

    $searchNext.add($searchPrev).on("click", function () {
        if ($results.length) {
            currentIndex += $(this).is($searchPrev) ? -1 : 1;
            if (currentIndex < 0) {
                currentIndex = $results.length - 1;
            }
            if (currentIndex > $results.length - 1) {
                currentIndex = 0;
            }
            jumpTo();
        }
    });

});