    var thisPhrase;
    
    var iW; var imgWidthClass;
    var iH; var imgHeightClass;
    var iT; var imgTopClass;
    var iL; var imgLeftClass;

    var pT; var phraseTopClass;
    var pL; var phraseLeftClass;
    var pS; var phraseSizeClass;
    var pC; var phraseColorClass;
    var pF; var phraseFontClass;

    var c; var ld; var bgColorClass; var textColorClass;

    var wordCount;

    var sec; var phraseNum;
    var v; var numOptions;
    var articleLink;
    var imageLink;

    var prevNum = 1;
    var tempNum;
    var titleNum;

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    // var navbarHeight = $('header').outerHeight();

// function animateTitle() {
//     console.log("animation happening");
//     var elem = document.getElementById("myTitle");   
//     var blur = 30;
//     var id = setInterval(frame(), 5);
//     function frame() {
//         console.log("frame function");
//         if (blur == 0) {
//             clearInterval(id);
//         } else {
//             blur--; 
//             elem.style.textShadow = "0px 0px " + blur + "px #ffffff";
//         }
//     }
// }

// function animateTitle() {
//     console.log("animation happening");
//     var elem = document.getElementById("myTitle");
//     setInterval(frame(), 2000);
//     function frame() {
//         $(elem).toggleClass("clearText");
//     }
// }

// function animate() {
//     var titleNum = Math.floor(Math.random() * 4) + 1;
//     if (titleNum == 1) {
//         $(".title1").toggleClass("cleartext");
//         console.log("affect title1");
//     }
//     if (titleNum == 2) {
//         $(".title2").toggleClass("cleartext");
//         console.log("affect title2");
//     }
//     if (titleNum == 3) {
//         $(".title3").toggleClass("cleartext");
//         console.log("affect title3");
//     }
//     if (titleNum == 4) {
//         $(".title4").toggleClass("cleartext");
//         console.log("affect title4");
//     }
// };

function animate() {
    titleNum = Math.floor(Math.random() * 4) + 1;
    if (titleNum == prevNum) {
        if (titleNum == 4) {
            tempNum = 1;
        }
        else {
            tempNum = titleNum + 1;
        }    
    }
    if (titleNum != prevNum) {
        tempNum = titleNum;
    }

    if (tempNum == 1) {
        $(".title1").toggleClass("cleartext");
    }
    if (tempNum == 2) {
        $(".title2").toggleClass("cleartext");
    }
    if (tempNum == 3) {
        $(".title3").toggleClass("cleartext");
    }
    if (tempNum == 4) {
        $(".title4").toggleClass("cleartext");
    }
    // console.log(tempNum);
    prevNum = tempNum;
};

// function animate() {
//     $(".title1, .title2, .title3, .title4").toggleClass("cleartext");
// };

function imgWidth() {
    iW = Math.floor(Math.random() * 3) + 1;
    imgWidthClass = "imgWidth" + iW;
    return imgWidthClass;
};

function imgHeight() {
    iH = Math.floor(Math.random() * 3) + 1;
    imgHeightClass = "imgHeight" + iH;
    return imgHeightClass;
};

function imgTop() {

    if (iH == 3) {
        iT = Math.floor(Math.random() * 2) + 1;
        imgTopClass = "imgTop" + iT;
    }
    if (iH == 2) {
        iT = Math.floor(Math.random() * 3) + 1;
        imgTopClass = "imgTop" + iT;
    }
    else if (iH == 1) {
        iT = Math.floor(Math.random() * 4) + 1;
        imgTopClass = "imgTop" + iT;
    }
    return imgTopClass;
};

function imgLeft() {

    if (iW == 3) {
        iL = Math.floor(Math.random() * 2) + 1;
        imgLeftClass = "imgLeft" + iL;
    }
    if (iW == 2) {
        iL = Math.floor(Math.random() * 3) + 1;
        imgLeftClass = "imgLeft" + iL;
    }
    else if (iW == 1) {
        iL = Math.floor(Math.random() * 4) + 1;
        imgLeftClass = "imgLeft" + iL;
    }
    return imgLeftClass;
};


function phraseSize() {
    if (wordCount >= 7) {
        pS = Math.floor(Math.random() * 2) + 1;
        phraseSizeClass = "phraseSize" + pS;
    }
    if (iH == 1 || iW == 1) {
        pS = Math.floor(Math.random() * 2) + 2;
        phraseSizeClass = "phraseSize" + pS;
    }
    else {
        pS = Math.floor(Math.random() * 3) + 1;
        phraseSizeClass = "phraseSize" + pS;
    }
    
    return phraseSizeClass;
};

function phraseTop() {
    if (pS == 3) {
        pT = Math.floor(Math.random() * 2) + 1;
        phraseTopClass = "phraseTop" + pT;
    }
    else {
        pT = Math.floor(Math.random() * 4) + 1;
        phraseTopClass = "phraseTop" + pT;
    }
    
    return phraseTopClass;
};

function phraseLeft() {
    if (pS == 3) {
        pL = Math.floor(Math.random() * 2) + 1;
        phraseLeftClass = "phraseLeft" + pL;
    }
    else {
        pL = Math.floor(Math.random() * 3) + 1;
        phraseLeftClass = "phraseLeft" + pL;
    }
    return phraseLeftClass;
};


function phraseFont() {
    pF = Math.floor(Math.random() * 9) + 1;
    phraseFontClass = "font" + pF;
    return phraseFontClass;
};

function bgColor() {
    c = Math.floor(Math.random() * 4) + 1;
    bgColorClass = "bgColor" + c;
    ld = Math.floor(Math.random() * 2) + 1;
    bgColorClass = bgColorClass + "-" + ld;
    return bgColorClass;
};

function textColor() {
    if (ld == 1) {
        textColorClass = "textColor" + c + "-" + 2;
    }

    else if (ld == 2) {
        textColorClass = "textColor" + c + "-" + 1;
    }
    return textColorClass;
};

function addVariables() {

    imgWidth(); imgHeight(); imgTop(); imgLeft(); bgColor();
    // $(".imgContainer").addClass(imgWidthClass).addClass(imgHeightClass).addClass(imgTopClass).addClass(imgLeftClass).addClass(bgColorClass).addClass("loadImage");
    $(".imgContainer").addClass(imgWidthClass).addClass(imgHeightClass).addClass(imgTopClass).addClass(imgLeftClass).addClass(bgColorClass);
    $(".imgOverlay").addClass(imgWidthClass).addClass(imgHeightClass).addClass(imgTopClass).addClass(imgLeftClass).addClass(bgColorClass)
    $(".phraseHeading").text(thisPhrase).addClass(phraseSize()).addClass(textColor()).addClass(phraseFont());
    $(".phraseHeadingContainer").addClass(phraseTop()).addClass(phraseLeft());
}

function removeVariables() {
        // $(".imgContainer").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(bgColorClass).removeClass("loadImage");
        $(".imgContainer").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(bgColorClass);
        $(".imgOverlay").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(bgColorClass);
        $(".phraseHeading").removeClass(phraseSizeClass).removeClass(textColorClass).removeClass(phraseFontClass);
        $(".phraseHeadingContainer").removeClass(phraseTopClass).removeClass(phraseLeftClass);


}

function activateOverlay() {
        $(".sectionTextContainer, .sectionHeader, .sectionText").addClass("hideSectionText");
        $(".exitOverlay").addClass("show");
        $(".variables-container, .imgOverlay, .imgContainer, .phraseHeadingContainer").addClass("show variablesToFront");
        $("body").addClass("stopScroll");
        // $(".variablesOverlay").removeClass("stopScroll");
        // $(".variablesOverlayLength").addClass("variablesOverlayVisible").removeClass("stopScroll");
        $(".articleContainer").addClass("articleOverlayVisible");
}

function deactivateOverlay() {
    $(".sectionTextContainer, .sectionHeader, .sectionText").removeClass("hideSectionText");
    $(".exitOverlay").removeClass("show");
    $(".variables-container, .imgOverlay, .imgContainer, .phraseHeadingContainer").removeClass("show variablesToFront");
    $("body").removeClass("stopScroll");
    // $(".variablesOverlayLength").removeClass("variablesOverlayVisible").addClass("stopScroll");
    $(".articleContainer").removeClass("articleOverlayVisible");
}

function chooseStory() {
    v = Math.floor(Math.random() * numOptions) + 1;
    articleLink = "https://katiebumatay.github.io/CapstoneDevelopment/Dev8/variables/" + sec + "/" + phraseNum + "/" + v + "/text.html";
    $(".articleText").load(articleLink);
    loadImage.style.setProperty('--myImg-background-image', "url(../variables/" + sec + "/" + phraseNum + "/" + v + "/image.jpg");
    $(".imgContainer").addClass("loadImage");
}




function hasScrolled() {
    var navbarHeight = $('header').outerHeight();
        // console.log("in hasScrolled func");
        var st = $(this).scrollTop();
    
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta) {
            return;
        }
    
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        // console.log("st = " +st);
        // console.log("lastScrollTop = " + lastScrollTop);
        // console.log("navbarHeight = " + navbarHeight);


        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            // console.log("scrolled down");
            $('header').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                // console.log("scrolled up");
                $('header').removeClass('nav-up');
            }
        }
    
        lastScrollTop = st;
    }




$(document).ready(function() {

    // $("#myTitle").toggleClass("cleartext");

    setInterval('animate()', 1000);

    var clicked = false;

    var titleClicked = false;
    var sectionHeaderClicked = false;

    // $("h1").hover(function(){
    //     if (titleClicked == false) {
    //         $(this).toggleClass("blurtext");
    //     }
        
    // });


    // $("h1").hover(function(){
    //     animateTitle();
        
    // });

    // $(".title").mouseover(function(){
    //     setInterval('animate()', 1500);
    // });

    $("#goToPledge").click(function() {
        $('html,body').animate({
        scrollTop: $("#pledgeSection").offset().top},
        'slow');
    });

    $("#goToDeclaration").click(function() {
        $('html,body').animate({
        scrollTop: $("#declarationSection").offset().top},
        'slow');
    });

    $("#goToConstitution").click(function() {
        $('html,body').animate({
        scrollTop: $("#constitutionSection").offset().top},
        'slow');
    });


    $("h1").click(function(){
        if (titleClicked == true) {
            titleClicked = false;
        }
        else if (titleClicked == false) {
            titleClicked = true;
        }
        $(".title, h1").toggleClass("clickedTitle");
        // $("h1").addClass("cleartext");
        $(".page-container, .circle, .smallTitle").toggleClass("darker");
        $("body").toggleClass("stopScroll");
        $(".about").toggleClass("showAbout")
    });

    $(".smallTitle").click(function() {
        $('html,body').animate({
        scrollTop: $(".title").offset().top},
        'slow');
    });


    $(".sectionTextContainer").hover(function(){
        if (sectionHeaderClicked == false) {
            $(".sectionHeader, .phrase, .extra").toggleClass("blurtext2");
            // $("body").toggleClass("stopScroll");
        }
    });

    $(".sectionHeader, .phrase").hover(function(){
        if (sectionHeaderClicked == false) {
            $(this).toggleClass("blurtext2");
        }
        
    });

    $(".sectionHeader").click(function() {
        if (sectionHeaderClicked == true) {
            sectionHeaderClicked = false;
        }
        else if (sectionHeaderClicked == false) {
            sectionHeaderClicked = true;
        }
        // $(".line").toggleClass("lineExpand");
        $(".rect").toggleClass("rectExpand");
        $(".sectionExplanation").toggleClass("showExplanation");
        $("body").toggleClass("stopScroll");
    });


    $(".phrase").mouseenter(function(){

        thisPhrase = $(this).text();
        wordCount = thisPhrase.split(" ").length;

        addVariables();
        $(".variables-container, .imgContainer, .phraseHeadingContainer").toggleClass("show");
        $("body").toggleClass("stopScroll");
    });


    $(".phrase").mouseleave(function(){
        if (clicked == false) {
            removeVariables();
            $(".variables-container, .imgContainer, .phraseHeadingContainer").toggleClass("show");
            $("body").toggleClass("stopScroll");
        }

    });

    $(".phrase").click(function(){
        clicked = true;
        activateOverlay();
    });

    $(".variables-container").click(function(){
        clicked = false;
        removeVariables();
        deactivateOverlay();
        // $('html,body').animate({
        // scrollTop: $(".variables-container").offset().top},
        // 'slow');
        $(".articleContainer").scrollTop(0);

    });

    // $(".pledge1").click(function(){
    //     $.ajax({
    //         url : "variables/1-pledge/1/1/text.txt",
    //         dataType: "text",
    //         success : function (data) {
    //             $(".articleText").html(data);
    //         }
    //     });
    //     // $(".articleText").load("../variables/1-pledge/1/1/text.txt");
    //     // $(".articleText").load("text.txt");
    // });


        // $(".pledge1").click(function(){
        //     v = Math.floor(Math.random() * 2) + 1;
        //     // imageLink = "../variables/1-pledge/1/" + v + "/image.jpg";
        //     // // $("loadImage").style.setProperty('--myImgURL', imageLink);
        //     // loadImage.style.setProperty('--myImg-background-image', url(imageLink));


        //     articleLink = "https://katiebumatay.github.io/CapstoneDevelopment/Dev7/variables/1-pledge/1/" + v + "/text.html";
        //     $(".articleText").load(articleLink);
        // });
        // // $(".articleText").load("../variables/1-pledge/1/1/text.txt");
        // // $(".articleText").load("text.txt");

        // $(".pledge2").click(function(){
        //     $(".articleText").load("https://katiebumatay.github.io/CapstoneDevelopment/Dev7/variables/1-pledge/2/1/text.html");
        // });

        $(".pledge1").mouseenter(function(){
            v = Math.floor(Math.random() * 2) + 1;
            sec = "1-pledge";
            phraseNum = "1";
            numOptions = 3;
            chooseStory();
        });










    // setInterval(function() {
    //     var abc = $("#declarationSection").scrollTop();
    //     console.log(abc);
    //     // if ($(".pledgeText").scrollTop() == 30) {
    //     //     console.log("pledge");
    //     // }
    //     // else {
    //     //     console.log("didScroll is false");
    //     // }
    // }, 250);


    // $(window).scroll(function(event){
    //     didScroll = true;
    //     // console.log("user scrolled");
    // });

    // setInterval(function() {
    //     if (didScroll) {
    //         hasScrolled();
    //         didScroll = false;
    //     }
    //     // else {
    //     //     console.log("didScroll is false");
    //     // }
    // }, 250);

    // function hasScrolled() {
    //     var st = $(this).scrollTop();
    
    //     // Make sure they scroll more than delta
    //     if(Math.abs(lastScrollTop - st) <= delta)
    //         return;
    
    //     // If they scrolled down and are past the navbar, add class .nav-up.
    //     // This is necessary so you never see what is "behind" the navbar.
    //     if (st > lastScrollTop && st > navbarHeight){
    //         // Scroll Down
    //         $('header').removeClass('nav-down').addClass('nav-up');
    //     } else {
    //         // Scroll Up
    //         if(st + $(window).height() < $(document).height()) {
    //             $('header').removeClass('nav-up').addClass('nav-down');
    //         }
    //     }
    
    //     lastScrollTop = st;
    // }



});
