var checkV1; var checkV2; var checkV3;

var sec; var phraseNum; var v; 
var articleLink;

var listItemClicked;
var prevClicked;

var originalArticle;

var isMobile = false;


function checkMobile(){
    if ($(".itemsBox").css("opacity") == "0" ){
        isMobile = true;
    }
    console.log(isMobile);
};

function check1() {
    checkV1 = $("#myAC").hasClass("view1");
}

function check2() {
    checkV2 = $("#myAC").hasClass("view2");
}

function check3() {
    checkV3 = $("#myAC").hasClass("view3");
}


function generateArticle() {

    if (listItemClicked == false) {
        check1(); check2(); check3();
        articleLink = "https://katiebumatay.github.io/CapstoneDevelopment/Dev14/variables/" + sec + "/" + phraseNum + "/" + v + "/text.html";
        if (checkV1 == true) {
            pledgeImg1.style.setProperty('--pledge-background-image1', "url(../variables/" + sec + "/" + phraseNum + "/" + v + "/image1-small.jpg");
            pledgeImg2.style.setProperty('--pledge-background-image2', "url(../variables/" + sec + "/" + phraseNum + "/" + v + "/image2-small.jpg");
            $("#pledgeText").load(articleLink);
        }

        else if (checkV2 == true) {
            declarationImg1.style.setProperty('--declaration-background-image1', "url(../variables/" + sec + "/" + phraseNum + "/" + v + "/image1-small.jpg");
            declarationImg2.style.setProperty('--declaration-background-image2', "url(../variables/" + sec + "/" + phraseNum + "/" + v + "/image2-small.jpg");
            $("#declarationText").load(articleLink);
        }

        else if (checkV3 == true) {
            constitutionImg1.style.setProperty('--constitution-background-image1', "url(../variables/" + sec + "/" + phraseNum + "/" + v + "/image1-small.jpg");
            constitutionImg2.style.setProperty('--constitution-background-image2', "url(../variables/" + sec + "/" + phraseNum + "/" + v + "/image2-small.jpg");
            $("#constitutionText").load(articleLink);
        }

    }

    // $(".imgContainer").addClass("loadImage");
}

function goToOriginalArticle() {
    window.open(originalArticle);
}

function showStuff() {
    $(".articleContainer, .images-container").addClass("showImgArticle");
}

function hideStuff() {
    $(".articleContainer, .images-container").removeClass("showImgArticle");
}


$(document).ready(function() {

    // checkV1();
    // checkV2();
    // checkV3();

    checkMobile();


    listItemClicked = false;

    $(".next").click(function(){

        check1();
        check2();

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
        listItemClicked = false;
        $(prevClicked).removeClass("thisLiClicked").removeClass("thisLiHover");
        hideStuff();
        $(".articleContainer").scrollTop(0);
    });

    $(".previous").click(function(){

        check2();
        check3();


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
        listItemClicked = false;
        $(prevClicked).removeClass("thisLiClicked").removeClass("thisLiHover");
        hideStuff();
        $(".articleContainer").scrollTop(0);
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

     $("li").mouseover(function() {
        if (listItemClicked == false) {
            showStuff();
            $(this).addClass("thisLiHover");
        }
     });

     $("li").mouseout(function() {
        if (listItemClicked == false) {
            hideStuff();
            $(this).removeClass("thisLiHover");
        } 
     });

     $("li").click(function() {
        if (listItemClicked == false) {
            listItemClicked = true;
            $(this).addClass("thisLiClicked");
            prevClicked = this;
            if (isMobile) {
                $(".next, .previous").addClass("noArrow");
                $(".itemsBox").addClass("itemsBoxShow");
                $(".exitOverlay").addClass("exitOverlayShow");
            }
            // showStuff();
        }
        else if (listItemClicked == true && prevClicked == this) {
            listItemClicked = false;
            $(this).removeClass("thisLiClicked");
            // hideStuff();
            $(".articleContainer").scrollTop(0);
        }
     });

     $(".exitOverlay").click(function() {
            listItemClicked = false;
            $(prevClicked).removeClass("thisLiClicked").removeClass("thisLiHover");
            // hideStuff();
            $(".articleContainer").scrollTop(0);
            $(".next, .previous").removeClass("noArrow");
            $(".itemsBox").removeClass("itemsBoxShow");
            $(".exitOverlay").removeClass("exitOverlayShow");
     });

     // $(".fas").click(function() {
     //    // if (listItemClicked == true) {
     //        listItemClicked = false;
     //        $(prevClicked).removeClass("thisLiClicked").removeClass("thisLiHover");
     //        hideStuff();
     //        $(".articleContainer").scrollTop(0);
     //    // }
     // });



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


    $(".1-pledge-1-1").mouseenter(function(){ sec = "1-pledge"; phraseNum = "1"; v = 1; generateArticle();});
    $(".1-pledge-1-2").mouseenter(function(){ sec = "1-pledge"; phraseNum = "1"; v = 2; generateArticle();});
    $(".1-pledge-1-3").mouseenter(function(){ sec = "1-pledge"; phraseNum = "1"; v = 3; generateArticle();});
    $(".1-pledge-1-4").mouseenter(function(){ sec = "1-pledge"; phraseNum = "1"; v = 4; generateArticle();});
    $(".1-pledge-1-5").mouseenter(function(){ sec = "1-pledge"; phraseNum = "1"; v = 5; generateArticle();});
    $(".1-pledge-2-1").mouseenter(function(){ sec = "1-pledge"; phraseNum = "2"; v = 1; generateArticle();});
    $(".1-pledge-2-2").mouseenter(function(){ sec = "1-pledge"; phraseNum = "2"; v = 2; generateArticle();});
    $(".1-pledge-2-3").mouseenter(function(){ sec = "1-pledge"; phraseNum = "2"; v = 3; generateArticle();});
    $(".1-pledge-2-4").mouseenter(function(){ sec = "1-pledge"; phraseNum = "2"; v = 4; generateArticle();});
    $(".1-pledge-2-5").mouseenter(function(){ sec = "1-pledge"; phraseNum = "2"; v = 5; generateArticle();});
    $(".1-pledge-2-6").mouseenter(function(){ sec = "1-pledge"; phraseNum = "2"; v = 6; generateArticle();});
    $(".1-pledge-2-7").mouseenter(function(){ sec = "1-pledge"; phraseNum = "2"; v = 7; generateArticle();});
    $(".1-pledge-3-1").mouseenter(function(){ sec = "1-pledge"; phraseNum = "3"; v = 1; generateArticle();});
    $(".1-pledge-3-2").mouseenter(function(){ sec = "1-pledge"; phraseNum = "3"; v = 2; generateArticle();});
    $(".1-pledge-3-3").mouseenter(function(){ sec = "1-pledge"; phraseNum = "3"; v = 3; generateArticle();});
    $(".1-pledge-3-4").mouseenter(function(){ sec = "1-pledge"; phraseNum = "3"; v = 4; generateArticle();});
    $(".1-pledge-3-5").mouseenter(function(){ sec = "1-pledge"; phraseNum = "3"; v = 5; generateArticle();});
    $(".1-pledge-4-1").mouseenter(function(){ sec = "1-pledge"; phraseNum = "4"; v = 1; generateArticle();});
    $(".1-pledge-4-2").mouseenter(function(){ sec = "1-pledge"; phraseNum = "4"; v = 2; generateArticle();});
    $(".1-pledge-4-3").mouseenter(function(){ sec = "1-pledge"; phraseNum = "4"; v = 3; generateArticle();});
    $(".1-pledge-5-1").mouseenter(function(){ sec = "1-pledge"; phraseNum = "5"; v = 1; generateArticle();});
    $(".1-pledge-5-2").mouseenter(function(){ sec = "1-pledge"; phraseNum = "5"; v = 2; generateArticle();});
    $(".1-pledge-5-3").mouseenter(function(){ sec = "1-pledge"; phraseNum = "5"; v = 3; generateArticle();});
    $(".1-pledge-5-4").mouseenter(function(){ sec = "1-pledge"; phraseNum = "5"; v = 4; generateArticle();});
    $(".1-pledge-5-5").mouseenter(function(){ sec = "1-pledge"; phraseNum = "5"; v = 5; generateArticle();});
    $(".1-pledge-5-6").mouseenter(function(){ sec = "1-pledge"; phraseNum = "5"; v = 6; generateArticle();});
    $(".1-pledge-5-7").mouseenter(function(){ sec = "1-pledge"; phraseNum = "5"; v = 7; generateArticle();});
    $(".1-pledge-6-1").mouseenter(function(){ sec = "1-pledge"; phraseNum = "6"; v = 1; generateArticle();});
    $(".1-pledge-6-2").mouseenter(function(){ sec = "1-pledge"; phraseNum = "6"; v = 2; generateArticle();});
    $(".1-pledge-6-3").mouseenter(function(){ sec = "1-pledge"; phraseNum = "6"; v = 3; generateArticle();});
    $(".1-pledge-6-4").mouseenter(function(){ sec = "1-pledge"; phraseNum = "6"; v = 4; generateArticle();});
    $(".1-pledge-6-5").mouseenter(function(){ sec = "1-pledge"; phraseNum = "6"; v = 5; generateArticle();});
    $(".1-pledge-6-6").mouseenter(function(){ sec = "1-pledge"; phraseNum = "6"; v = 6; generateArticle();});
    $(".1-pledge-7-1").mouseenter(function(){ sec = "1-pledge"; phraseNum = "7"; v = 1; generateArticle();});
    $(".1-pledge-7-2").mouseenter(function(){ sec = "1-pledge"; phraseNum = "7"; v = 2; generateArticle();});
    $(".1-pledge-7-3").mouseenter(function(){ sec = "1-pledge"; phraseNum = "7"; v = 3; generateArticle();});
    $(".1-pledge-7-4").mouseenter(function(){ sec = "1-pledge"; phraseNum = "7"; v = 4; generateArticle();});
    $(".1-pledge-7-5").mouseenter(function(){ sec = "1-pledge"; phraseNum = "7"; v = 5; generateArticle();});
    $(".1-pledge-8-1").mouseenter(function(){ sec = "1-pledge"; phraseNum = "8"; v = 1; generateArticle();});
    $(".1-pledge-8-2").mouseenter(function(){ sec = "1-pledge"; phraseNum = "8"; v = 2; generateArticle();});
    $(".1-pledge-8-3").mouseenter(function(){ sec = "1-pledge"; phraseNum = "8"; v = 3; generateArticle();});
    $(".1-pledge-8-4").mouseenter(function(){ sec = "1-pledge"; phraseNum = "8"; v = 4; generateArticle();});
    $(".1-pledge-8-5").mouseenter(function(){ sec = "1-pledge"; phraseNum = "8"; v = 5; generateArticle();});
    $(".1-pledge-8-6").mouseenter(function(){ sec = "1-pledge"; phraseNum = "8"; v = 6; generateArticle();});

    $(".2-declaration-1-1").mouseenter(function(){ sec = "2-declaration"; phraseNum = "1"; v = 1; generateArticle();});
    $(".2-declaration-1-2").mouseenter(function(){ sec = "2-declaration"; phraseNum = "1"; v = 2; generateArticle();});
    $(".2-declaration-1-3").mouseenter(function(){ sec = "2-declaration"; phraseNum = "1"; v = 3; generateArticle();});
    $(".2-declaration-1-4").mouseenter(function(){ sec = "2-declaration"; phraseNum = "1"; v = 4; generateArticle();});
    $(".2-declaration-1-5").mouseenter(function(){ sec = "2-declaration"; phraseNum = "1"; v = 5; generateArticle();});
    $(".2-declaration-1-6").mouseenter(function(){ sec = "2-declaration"; phraseNum = "1"; v = 6; generateArticle();});
    $(".2-declaration-2-1").mouseenter(function(){ sec = "2-declaration"; phraseNum = "2"; v = 1; generateArticle();});
    $(".2-declaration-2-2").mouseenter(function(){ sec = "2-declaration"; phraseNum = "2"; v = 2; generateArticle();});
    $(".2-declaration-2-3").mouseenter(function(){ sec = "2-declaration"; phraseNum = "2"; v = 3; generateArticle();});
    $(".2-declaration-2-4").mouseenter(function(){ sec = "2-declaration"; phraseNum = "2"; v = 4; generateArticle();});
    $(".2-declaration-2-5").mouseenter(function(){ sec = "2-declaration"; phraseNum = "2"; v = 5; generateArticle();});
    $(".2-declaration-3-1").mouseenter(function(){ sec = "2-declaration"; phraseNum = "3"; v = 1; generateArticle();});
    $(".2-declaration-3-2").mouseenter(function(){ sec = "2-declaration"; phraseNum = "3"; v = 2; generateArticle();});
    $(".2-declaration-3-3").mouseenter(function(){ sec = "2-declaration"; phraseNum = "3"; v = 3; generateArticle();});
    $(".2-declaration-3-4").mouseenter(function(){ sec = "2-declaration"; phraseNum = "3"; v = 4; generateArticle();});
    $(".2-declaration-3-5").mouseenter(function(){ sec = "2-declaration"; phraseNum = "3"; v = 5; generateArticle();});
    $(".2-declaration-3-6").mouseenter(function(){ sec = "2-declaration"; phraseNum = "3"; v = 6; generateArticle();});
    $(".2-declaration-3-7").mouseenter(function(){ sec = "2-declaration"; phraseNum = "3"; v = 7; generateArticle();});
    $(".2-declaration-3-8").mouseenter(function(){ sec = "2-declaration"; phraseNum = "3"; v = 8; generateArticle();});
    $(".2-declaration-4-1").mouseenter(function(){ sec = "2-declaration"; phraseNum = "4"; v = 1; generateArticle();});
    $(".2-declaration-4-2").mouseenter(function(){ sec = "2-declaration"; phraseNum = "4"; v = 2; generateArticle();});
    $(".2-declaration-4-3").mouseenter(function(){ sec = "2-declaration"; phraseNum = "4"; v = 3; generateArticle();});
    $(".2-declaration-4-4").mouseenter(function(){ sec = "2-declaration"; phraseNum = "4"; v = 4; generateArticle();});
    $(".2-declaration-4-5").mouseenter(function(){ sec = "2-declaration"; phraseNum = "4"; v = 5; generateArticle();});
    $(".2-declaration-4-6").mouseenter(function(){ sec = "2-declaration"; phraseNum = "4"; v = 6; generateArticle();});
    $(".2-declaration-5-1").mouseenter(function(){ sec = "2-declaration"; phraseNum = "5"; v = 1; generateArticle();});
    $(".2-declaration-5-2").mouseenter(function(){ sec = "2-declaration"; phraseNum = "5"; v = 2; generateArticle();});
    $(".2-declaration-5-3").mouseenter(function(){ sec = "2-declaration"; phraseNum = "5"; v = 3; generateArticle();});
    $(".2-declaration-5-4").mouseenter(function(){ sec = "2-declaration"; phraseNum = "5"; v = 4; generateArticle();});
    $(".2-declaration-5-5").mouseenter(function(){ sec = "2-declaration"; phraseNum = "5"; v = 5; generateArticle();});
    $(".2-declaration-6-1").mouseenter(function(){ sec = "2-declaration"; phraseNum = "6"; v = 1; generateArticle();});
    $(".2-declaration-6-2").mouseenter(function(){ sec = "2-declaration"; phraseNum = "6"; v = 2; generateArticle();});
    $(".2-declaration-6-3").mouseenter(function(){ sec = "2-declaration"; phraseNum = "6"; v = 3; generateArticle();});
    $(".2-declaration-6-4").mouseenter(function(){ sec = "2-declaration"; phraseNum = "6"; v = 4; generateArticle();});
    $(".2-declaration-6-5").mouseenter(function(){ sec = "2-declaration"; phraseNum = "6"; v = 5; generateArticle();});
    $(".2-declaration-6-6").mouseenter(function(){ sec = "2-declaration"; phraseNum = "6"; v = 6; generateArticle();});

    $(".3-constitution-1-1").mouseenter(function(){ sec = "3-constitution"; phraseNum = "1"; v = 1; generateArticle();});
    $(".3-constitution-1-2").mouseenter(function(){ sec = "3-constitution"; phraseNum = "1"; v = 2; generateArticle();});
    $(".3-constitution-1-3").mouseenter(function(){ sec = "3-constitution"; phraseNum = "1"; v = 3; generateArticle();});
    $(".3-constitution-1-4").mouseenter(function(){ sec = "3-constitution"; phraseNum = "1"; v = 4; generateArticle();});
    $(".3-constitution-1-5").mouseenter(function(){ sec = "3-constitution"; phraseNum = "1"; v = 5; generateArticle();});
    $(".3-constitution-2-1").mouseenter(function(){ sec = "3-constitution"; phraseNum = "2"; v = 1; generateArticle();});
    $(".3-constitution-2-2").mouseenter(function(){ sec = "3-constitution"; phraseNum = "2"; v = 2; generateArticle();});
    $(".3-constitution-2-3").mouseenter(function(){ sec = "3-constitution"; phraseNum = "2"; v = 3; generateArticle();});
    $(".3-constitution-2-4").mouseenter(function(){ sec = "3-constitution"; phraseNum = "2"; v = 4; generateArticle();});
    $(".3-constitution-3-1").mouseenter(function(){ sec = "3-constitution"; phraseNum = "3"; v = 1; generateArticle();});
    $(".3-constitution-3-2").mouseenter(function(){ sec = "3-constitution"; phraseNum = "3"; v = 2; generateArticle();});
    $(".3-constitution-3-3").mouseenter(function(){ sec = "3-constitution"; phraseNum = "3"; v = 3; generateArticle();});
    $(".3-constitution-3-4").mouseenter(function(){ sec = "3-constitution"; phraseNum = "3"; v = 4; generateArticle();});
    $(".3-constitution-3-5").mouseenter(function(){ sec = "3-constitution"; phraseNum = "3"; v = 5; generateArticle();});
    $(".3-constitution-3-6").mouseenter(function(){ sec = "3-constitution"; phraseNum = "3"; v = 6; generateArticle();});
    $(".3-constitution-3-7").mouseenter(function(){ sec = "3-constitution"; phraseNum = "3"; v = 7; generateArticle();});
    $(".3-constitution-4-1").mouseenter(function(){ sec = "3-constitution"; phraseNum = "4"; v = 1; generateArticle();});
    $(".3-constitution-4-2").mouseenter(function(){ sec = "3-constitution"; phraseNum = "4"; v = 2; generateArticle();});
    $(".3-constitution-4-3").mouseenter(function(){ sec = "3-constitution"; phraseNum = "4"; v = 3; generateArticle();});
    $(".3-constitution-4-4").mouseenter(function(){ sec = "3-constitution"; phraseNum = "4"; v = 4; generateArticle();});
    $(".3-constitution-4-5").mouseenter(function(){ sec = "3-constitution"; phraseNum = "4"; v = 5; generateArticle();});
    $(".3-constitution-4-6").mouseenter(function(){ sec = "3-constitution"; phraseNum = "4"; v = 6; generateArticle();});
    $(".3-constitution-4-7").mouseenter(function(){ sec = "3-constitution"; phraseNum = "4"; v = 7; generateArticle();});  
    $(".3-constitution-5-1").mouseenter(function(){ sec = "3-constitution"; phraseNum = "5"; v = 1; generateArticle();});
    $(".3-constitution-5-2").mouseenter(function(){ sec = "3-constitution"; phraseNum = "5"; v = 2; generateArticle();});
    $(".3-constitution-5-3").mouseenter(function(){ sec = "3-constitution"; phraseNum = "5"; v = 3; generateArticle();});
    $(".3-constitution-5-4").mouseenter(function(){ sec = "3-constitution"; phraseNum = "5"; v = 4; generateArticle();});
    $(".3-constitution-5-5").mouseenter(function(){ sec = "3-constitution"; phraseNum = "5"; v = 5; generateArticle();});
    $(".3-constitution-6-1").mouseenter(function(){ sec = "3-constitution"; phraseNum = "6"; v = 1; generateArticle();});
    $(".3-constitution-6-2").mouseenter(function(){ sec = "3-constitution"; phraseNum = "6"; v = 2; generateArticle();});
    $(".3-constitution-6-3").mouseenter(function(){ sec = "3-constitution"; phraseNum = "6"; v = 3; generateArticle();});
    $(".3-constitution-6-4").mouseenter(function(){ sec = "3-constitution"; phraseNum = "6"; v = 4; generateArticle();});
    $(".3-constitution-6-5").mouseenter(function(){ sec = "3-constitution"; phraseNum = "6"; v = 5; generateArticle();});
    $(".3-constitution-6-6").mouseenter(function(){ sec = "3-constitution"; phraseNum = "6"; v = 6; generateArticle();});
    $(".3-constitution-7-1").mouseenter(function(){ sec = "3-constitution"; phraseNum = "7"; v = 1; generateArticle();});
    $(".3-constitution-7-2").mouseenter(function(){ sec = "3-constitution"; phraseNum = "7"; v = 2; generateArticle();});
    $(".3-constitution-7-3").mouseenter(function(){ sec = "3-constitution"; phraseNum = "7"; v = 3; generateArticle();});
    $(".3-constitution-7-4").mouseenter(function(){ sec = "3-constitution"; phraseNum = "7"; v = 4; generateArticle();});
    $(".3-constitution-7-5").mouseenter(function(){ sec = "3-constitution"; phraseNum = "7"; v = 5; generateArticle();});
    $(".3-constitution-7-6").mouseenter(function(){ sec = "3-constitution"; phraseNum = "7"; v = 6; generateArticle();});
    $(".3-constitution-7-7").mouseenter(function(){ sec = "3-constitution"; phraseNum = "7"; v = 7; generateArticle();});  
    $(".3-constitution-8-1").mouseenter(function(){ sec = "3-constitution"; phraseNum = "8"; v = 1; generateArticle();});
    $(".3-constitution-8-2").mouseenter(function(){ sec = "3-constitution"; phraseNum = "8"; v = 2; generateArticle();});
    $(".3-constitution-8-3").mouseenter(function(){ sec = "3-constitution"; phraseNum = "8"; v = 3; generateArticle();});
    $(".3-constitution-8-4").mouseenter(function(){ sec = "3-constitution"; phraseNum = "8"; v = 4; generateArticle();});
    $(".3-constitution-9-1").mouseenter(function(){ sec = "3-constitution"; phraseNum = "9"; v = 1; generateArticle();});
    $(".3-constitution-9-2").mouseenter(function(){ sec = "3-constitution"; phraseNum = "9"; v = 2; generateArticle();});
    $(".3-constitution-9-3").mouseenter(function(){ sec = "3-constitution"; phraseNum = "9"; v = 3; generateArticle();});
    $(".3-constitution-9-4").mouseenter(function(){ sec = "3-constitution"; phraseNum = "9"; v = 4; generateArticle();});

});