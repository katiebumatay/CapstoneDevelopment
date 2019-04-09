var checkV1; var checkV2; var checkV3;

$(document).ready(function() {


    $(".next").click(function(){

        checkV1 = $("#myPC").hasClass("view1");
        checkV2 = $("#myPC").hasClass("view2");

        if(checkV1 == true) {
            console.log("in view1");
            $(".page-container").addClass("view2").removeClass("view1");
            $("#pledgeBar").removeClass("selected");
            $("#declarationBar").addClass("selected");
            $(".previous").removeClass("hideArrow");

        }

        else if (checkV2 == true) {
                $(".page-container").addClass("view3").removeClass("view2");
                $("#declarationBar").removeClass("selected");
                $("#constitutionBar").addClass("selected");
                $(".next").addClass("hideArrow");

        }
    });

    $(".previous").click(function(){

        checkV2 = $("#myPC").hasClass("view2");
        checkV3 = $("#myPC").hasClass("view3");


        if (checkV2 == true) {
            $(".page-container").addClass("view1").removeClass("view2");
            $("#declarationBar").removeClass("selected");
            $("#pledgeBar").addClass("selected");
            $(".previous").addClass("hideArrow");
        }

        else if (checkV3 == true) {
            $(".page-container").addClass("view2").removeClass("view3");
            $("#constitutionBar").removeClass("selected");
            $("#declarationBar").addClass("selected");
            $(".next").removeClass("hideArrow");

        }
    });

    $("#pledgeBar").click(function(){
        $(".page-container").addClass("view1").removeClass("view2").removeClass("view3");
        $("#pledgeBar").addClass("selected");
        $("#declarationBar, #constitutionBar").removeClass("selected");
        $(".previous").addClass("hideArrow");
        $(".next").removeClass("hideArrow");

    });

    $("#declarationBar").click(function(){
        $(".page-container").addClass("view2").removeClass("view1").removeClass("view3");
        $("#declarationBar").addClass("selected");
        $("#pledgeBar, #constitutionBar").removeClass("selected");
        $(".previous").removeClass("hideArrow");
        $(".next").removeClass("hideArrow");
    });

     $("#constitutionBar").click(function(){
        $(".page-container").addClass("view3").removeClass("view1").removeClass("view2");
        $("#constitutionBar").addClass("selected");
        $("#pledgeBar, #declarationBar").removeClass("selected");
        $(".previous").removeClass("hideArrow");
        $(".next").addClass("hideArrow");
    });

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