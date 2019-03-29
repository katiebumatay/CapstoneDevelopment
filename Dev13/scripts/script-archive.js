$(document).ready(function() {

    $(".goToPledge").click(function() {
        // $('html,body').animate({
        // scrollTop: $("#pledge").offset().top},
        // 'slow');

        $('html,body').animate({
        scrollTop: $("#pledge").offset().top}, 'slow');

    });

    $(".goToDec").click(function() {
        $('html,body').animate({
        scrollTop: $("#declaration").offset().top}, 'slow');

    });

    $("li").click(function() {
        // console.log("clicked list item");
        $(".list-container").toggleClass("showArticle");

    });

});