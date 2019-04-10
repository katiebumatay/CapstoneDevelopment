var checkV1; var checkV2; var checkV3;

var sec; var phraseNum; var v; 
var articleLink;

function generateArticle() {
    v = Math.floor(Math.random() * numOptions) + 1;
    articleLink = "https://katiebumatay.github.io/CapstoneDevelopment/Dev14/variables/" + sec + "/" + phraseNum + "/" + v + "/text.html";
    $(".articleText").load(articleLink);
    loadImage.style.setProperty('--myImg-background-image1', "url(../variables/" + sec + "/" + phraseNum + "/" + v + "/image1-small.jpg");
    loadImage.style.setProperty('--myImg-background-image2', "url(../variables/" + sec + "/" + phraseNum + "/" + v + "/image2-small.jpg");
    
    // $(".imgContainer").addClass("loadImage");
}


$(document).ready(function() {




    $(".next").click(function(){

        checkV1 = $("#myAC").hasClass("view1");
        checkV2 = $("#myAC").hasClass("view2");

        if(checkV1 == true) {
            console.log("in view1");
            $(".archive-container").addClass("view2").removeClass("view1");
            $("#pledgeBar").removeClass("selected");
            $("#declarationBar").addClass("selected");
            $(".previous").removeClass("hideArrow");

        }

        else if (checkV2 == true) {
                $(".archive-container").addClass("view3").removeClass("view2");
                $("#declarationBar").removeClass("selected");
                $("#constitutionBar").addClass("selected");
                $(".next").addClass("hideArrow");

        }
    });

    $(".previous").click(function(){

        checkV2 = $("#myAC").hasClass("view2");
        checkV3 = $("#myAC").hasClass("view3");


        if (checkV2 == true) {
            $(".archive-container").addClass("view1").removeClass("view2");
            $("#declarationBar").removeClass("selected");
            $("#pledgeBar").addClass("selected");
            $(".previous").addClass("hideArrow");
        }

        else if (checkV3 == true) {
            $(".archive-container").addClass("view2").removeClass("view3");
            $("#constitutionBar").removeClass("selected");
            $("#declarationBar").addClass("selected");
            $(".next").removeClass("hideArrow");

        }
    });

    $("#pledgeBar").click(function(){
        $(".archive-container").addClass("view1").removeClass("view2").removeClass("view3");
        $("#pledgeBar").addClass("selected");
        $("#declarationBar, #constitutionBar").removeClass("selected");
        $(".previous").addClass("hideArrow");
        $(".next").removeClass("hideArrow");

    });

    $("#declarationBar").click(function(){
        $(".archive-container").addClass("view2").removeClass("view1").removeClass("view3");
        $("#declarationBar").addClass("selected");
        $("#pledgeBar, #constitutionBar").removeClass("selected");
        $(".previous").removeClass("hideArrow");
        $(".next").removeClass("hideArrow");
    });

     $("#constitutionBar").click(function(){
        $(".archive-container").addClass("view3").removeClass("view1").removeClass("view2");
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

    // $("li").click(function() {
    //     // console.log("clicked list item");
    //     $(".list-container").toggleClass("showArticle");

    // });

    $(".1-pledge-1-1").mouseenter(function(){
        // v = Math.floor(Math.random() * 2) + 1;
        sec = "1-pledge";
        phraseNum = "1";
        v = 1;
        generateArticle();
    });

});