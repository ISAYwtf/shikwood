$(".types__block__ico_wrapper").mouseenter(function() {
    $(this).children("svg").css("fill", "#F49A30");
});

$(".types__block__ico_wrapper").mouseleave(function(event) {
    $(this).children("svg").css("fill", "white");
});