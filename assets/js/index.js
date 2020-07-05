$(".types__block_wrapper").mouseenter(function() {
    $(this).children("svg").css("fill", "#F49A30");
});

$(".types__block_wrapper").mouseleave(function(event) {
    $(this).children("svg").css("fill", "white");
});