    var thisPhrase;
    
    var iW; var imgWidthClass; 
    var imgWidthTempClass = "imgWidthTemp";
    var iH; var imgHeightClass;
    var iT; var imgTopClass;
    var iL; var imgLeftClass;
    var imgPlaceClass;

    var pT; var phraseTopClass;
    var pL; var phraseLeftClass;
    var pW; var phraseWidthClass;
    var phrasePlaceClass;
    var pS; var phraseSizeClass;
    var phraseSizeTempClass = "phraseSizeTemp";
    var phrasePlaceTempClass = "phrasePlaceTemp";
    var pC; var phraseColorClass;
    var pF; var phraseFontClass;
    var fW; var fontWeightClass;

    var cT; var captionTopClass;
    var cL; var captionLeftClass;

    var captionPlaceClass;
    var articleBoxPlaceClass;

    var c; var ld; var bgColorClass; var textColorClass; var captionColorClass; var captionBgColorClass;

    var wordCount;

    var sec; var phraseNum;
    var v; var numOptions;
    var articleLink;
    var captionLink;
    var imageLink;

    var prevNum = 1;
    var tempNum;
    var titleNum;

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;

    var titleHover = false;
    var titleClicked = false;

    var introImgNum;
    var img1Num = 1;
    var img2Num = 2;
    var in1 = true;
    var in2 = false;

    var peekTimer;

    var isMobile = false;

    var articleOpen = false;

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


function checkMobile(){
    if ($(".smallTitle").css("top") == "36px" ){
        isMobile = true;
    }
};

function animatePhrase() {
    console.log("animate phrase");
    // $(".sectionText .phrase").animate({fontSize: "38pt"}).animate({fontSize: "34pt"});
};

function animate() {
    if (titleHover == true) {
        return;
    }
    // if (titleClicked == true) {
    //     return;
    // }
    else if (titleClicked == false) {
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
}
};

function imgFade1() {
    if (titleClicked == false) {
        if (in1 == true) {
            introImgNum = Math.floor(Math.random() * 9) + 1;
            img1.style.setProperty('--introImg1-background-image', "url(../images/variables/" + introImgNum + ".jpg");
            in1 = false;
        }
        else if (in1 == false) {
            in1 = true;
        }
        $("#img1").toggleClass("fadeInImg").toggleClass("fadeOutImg");

    }
}

function imgFade2() {
    if (titleClicked == false) {
        if (in2 == true) {
            introImgNum = Math.floor(Math.random() * 9) + 1;
            img2.style.setProperty('--introImg2-background-image', "url(../images/variables/" + introImgNum + ".jpg");
            in2 = false;
        }
        else if (in2 == false) {
            in2 = true;
        }
        $("#img2").toggleClass("fadeInImg").toggleClass("fadeOutImg");;

    }
}

function articlePeekAnimate() {
    // console.log("bounce");
    $(".articleBox").toggleClass("articleBoxBounce");

    // $(".articleBox").animate({width: "20px"}, 500).animate({width: "0px"}, 500);
    // console.log("run article box animation");
}

// function articlePeekAnimate2() {
//     // $(".articleBoxPeek").animate({height: "30px"}, 500);
//     // $(".articleBoxPeek").animate({height: "20px"}, 500);
//     $(".articleBoxPeek").animate({height: "50px",}, 500).animate({height: "20px",}, 500);
// }

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

function imgMix() {
    iM = Math.floor(Math.random() * 3) + 1;
    imgMixClass = "mix" + iM;
    return imgMixClass;
}

// function imgTop() {

//     if (iH == 3) {
//         iT = Math.floor(Math.random() * 2) + 1;
//         imgTopClass = "imgTop" + iT;
//         if (iT == 1) {
//             captionPlaceClass = "captionPlaceBelow";
//         }
//         if (iT == 2) {
//             captionPlaceClass = "captionPlaceAbove";
//         }
//     }
//     if (iH == 2) {
//         iT = Math.floor(Math.random() * 3) + 1;
//         imgTopClass = "imgTop" + iT;
//         if (iT == 1) {
//             captionPlaceClass = "captionPlaceBelow";
//         }
//         if (iT > 1) {
//             captionPlaceClass = "captionPlaceAbove";
//         }
//     }
//     else if (iH == 1) {
//         iT = Math.floor(Math.random() * 4) + 1;
//         imgTopClass = "imgTop" + iT;
//         if (iT < 3) {
//             captionPlaceClass = "captionPlaceBelow";
//         }
//         if (iT >= 3) {
//             captionPlaceClass = "captionPlaceAbove";
//         }
//     }
//     return imgTopClass;
// };

function imgTop() {

    if (iH == 3) {
        iT = Math.floor(Math.random() * 2) + 1;
        if (iT == 1) {
            captionPlaceClass = "captionPlaceBelow";
        }
        if (iT == 2) {
            captionPlaceClass = "captionPlaceAbove";
        }
    }
    if (iH == 2) {
        iT = Math.floor(Math.random() * 3) + 1;
        if (iT == 1) {
            captionPlaceClass = "captionPlaceBelow";
        }
        if (iT > 1) {
            captionPlaceClass = "captionPlaceAbove";
        }
    }
    else if (iH == 1) {
        iT = Math.floor(Math.random() * 4) + 1;
        if (iT < 3) {
            captionPlaceClass = "captionPlaceBelow";
        }
        if (iT >= 3) {
            captionPlaceClass = "captionPlaceAbove";
        }
    }
};

function imgLeft() {
    if (iW == 3) {
        iL = Math.floor(Math.random() * 2) + 1;
        // if (iL == 1) {
        //     articleBoxPlaceClass = "articleBoxPlaceRight";
        // }
        // if (iL == 2) {
        //     articleBoxPlaceClass = "articleBoxPlaceLeft";
        // }
    }
    if (iW == 2) {
        iL = Math.floor(Math.random() * 3) + 1;
        // if (iL < 3) {
        //     articleBoxPlaceClass = "articleBoxPlaceRight";
        // }
        // if (iL == 3) {
        //     articleBoxPlaceClass = "articleBoxPlaceLeft";
        // }
    }
    else if (iW == 1) {
        iL = Math.floor(Math.random() * 4) + 1;
        // if (iL < 3) {
        //     articleBoxPlaceClass = "articleBoxPlaceRight";
        // }
        // if (iL >= 3) {
        //     articleBoxPlaceClass = "articleBoxPlaceLeft";
        // }
    }
}

function imgPlace() {
    imgPlaceClass = "imgPlace-" + iT + "-" + iL;
    return imgPlaceClass;
}

// function imgLeft() {

//     if (iW == 3) {
//         iL = Math.floor(Math.random() * 2) + 1;
//         imgLeftClass = "imgLeft" + iL;
//     }
//     if (iW == 2) {
//         iL = Math.floor(Math.random() * 3) + 1;
//         imgLeftClass = "imgLeft" + iL;
//     }
//     else if (iW == 1) {
//         iL = Math.floor(Math.random() * 4) + 1;
//         imgLeftClass = "imgLeft" + iL;
//     }
//     return imgLeftClass;
// };


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
    }
    else {
        pT = Math.floor(Math.random() * 4) + 1;
    }
};

function phraseLeft() {
    if (pS == 3 || pT > 2) {
        pL = Math.floor(Math.random() * 2) + 1;
    }
    else {
        pL = Math.floor(Math.random() * 3) + 1;
    }
};

function phrasePlace() {
    phrasePlaceClass = "phrasePlace-" + pT + "-" + pL;
    return phrasePlaceClass;
}

function phraseWidth() {
    if (pL == 3) {
        pW = 2;
    }
    else {
        pW =  Math.floor(Math.random() * 2) + 1;
    }
    phraseWidthClass = "phraseWidth" + pW;
    return phraseWidthClass;
}


function phraseFont() {
    pF = Math.floor(Math.random() * 30) + 1;
    phraseFontClass = "font" + pF;
    return phraseFontClass;
};

function fontWeight() {
    fW = Math.floor(Math.random() * 2) + 1;
    fontWeightClass = "weight" + fW;
    return fontWeightClass;
};

function bgColor() {
    c = Math.floor(Math.random() * 8) + 1;
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

function captionColor() {
    if (ld == 1) {
        captionColorClass = "textColor" + c + "-" + 1;
    }

    else if (ld == 2) {
        captionColorClass = "textColor" + c + "-" + 2;
    }
    return captionColorClass;
};

function captionBgColor() {
    if (ld == 1) {
        captionBgColorClass = "bgColor" + c + "-" + 2;
    }

    else if (ld == 2) {
        captionBgColorClass = "bgColor" + c + "-" + 1;
    }
    return captionBgColorClass;
};

function captionTop() {
    cT = Math.floor(Math.random() * 7) + 1;
    captionTopClass = "captionTop" + cT;
    return captionTopClass;
};

function captionLeft() {
    cL = Math.floor(Math.random() * 7) + 1;
    captionLeftClass = "captionLeft" + cL;
    return captionLeftClass;
};

function captionPlace() {
    // if (iT < 3) {
    //     captionPlaceClass = "captionPlaceBelow";
    // }
    // else if (iT >= 3) {
    //     captionPlaceClass = "captionPlaceAbove";
    // }
    return captionPlaceClass;
}

// function articleBoxPlace() {
//     // if (iT < 3) {
//     //     captionPlaceClass = "captionPlaceBelow";
//     // }
//     // else if (iT >= 3) {
//     //     captionPlaceClass = "captionPlaceAbove";
//     // }
//     return articleBoxPlaceClass;
// }

// function hideVariables(callback) {
//     $(".variables-container").removeClass("show");
//     setTimeout(function(){
//         callback();
//     }, 500); 
// }





function addVariables() {

    imgMix(); imgWidth(); imgHeight(); imgTop(); imgLeft(); imgPlace(); bgColor();
    phraseSize(); textColor(); phraseFont(); fontWeight();
    phraseTop(); phraseLeft(); phrasePlace(); phraseWidth();
    captionColor(); captionPlace();
    // articleBoxPlace();
    // $(".imgContainer").addClass(imgWidthClass).addClass(imgHeightClass).addClass(imgTopClass).addClass(imgLeftClass).addClass(bgColorClass).addClass("loadImage");
    $(".imgContainer").addClass(imgWidthClass).addClass(imgHeightClass).addClass(imgPlaceClass).addClass(bgColorClass);
    // $(".imgOverlay").addClass(imgWidthClass).addClass(imgHeightClass).addClass(imgPlaceClass).addClass(bgColorClass).addClass(imgMixClass);
    $(".imgOverlay").addClass(bgColorClass).addClass(imgMixClass);
    $(".articleBox").addClass(bgColorClass);
    $(".phraseHeading").text(thisPhrase).addClass(phraseSizeClass).addClass(textColorClass).addClass(phraseFontClass).addClass(fontWeightClass);
    $(".phraseHeadingContainer").addClass(phrasePlaceClass).addClass(phraseWidthClass);
    // $("h5").addClass(captionColor()).addClass(phraseFontClass).addClass(captionBgColor());
    // $("h5").addClass(captionColor()).addClass(phraseFontClass).addClass(captionTop()).addClass(captionLeft());
    // $("h5").addClass(captionColor()).addClass(phraseFontClass);
    $(".caption").addClass(captionColorClass).addClass(captionPlaceClass);
    // $(".articleBox").addClass(articleBoxPlaceClass);
    $(".fa-sort-up").addClass(textColorClass);
    $(".readMore, a").addClass(textColorClass);
    // $("h5").addClass(phraseFontClass);
}

function removeVariables() {
        // $(".imgContainer").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(bgColorClass).removeClass("loadImage");
        $(".imgContainer").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgPlaceClass).removeClass(bgColorClass);
        // $(".imgOverlay").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgPlaceClass).removeClass(bgColorClass).removeClass(imgMixClass);
        $(".imgOverlay").removeClass(bgColorClass).removeClass(imgMixClass);
        $(".articleBox").removeClass(bgColorClass);
        $(".phraseHeading").removeClass(phraseSizeClass).removeClass(textColorClass).removeClass(phraseFontClass).removeClass(fontWeightClass);
        $(".phraseHeadingContainer").removeClass(phrasePlaceClass).removeClass(phraseWidthClass);;
        // $("h5").removeClass(captionColorClass).removeClass(phraseFontClass).removeClass(captionBgColorClass);
        // $("h5").removeClass(captionColorClass).removeClass(phraseFontClass).removeClass(captionTopClass).removeClass(captionLeftClass);
        // $("h5").removeClass(captionColorClass).removeClass(phraseFontClass);
        $(".caption").removeClass(captionColorClass).removeClass(captionPlaceClass);
        // $(".articleBox").removeClass(articleBoxPlaceClass);
         $(".fa-sort-up").removeClass(textColorClass);
         $(".readMore, a").removeClass(textColorClass);
        // $("h5").removeClass(phraseFontClass);


}

function activateOverlay() {
        $(".variablesOverlay.variablesToFront").addClass(bgColorClass);
        $(".sectionTextContainer, .sectionHeader, .sectionText").addClass("hideSectionText");
        $(".exitOverlay").addClass("show");
        // $(".variables-container, .imgOverlay, .imgContainer, .phraseHeadingContainer").addClass("show variablesToFront");
        // $(".variables-container, .imgContainer, .phraseHeadingContainer").addClass("show variablesToFront");
        $(".variables-container, .variablesOverlay").addClass("show variablesToFront");
        $("body").addClass("stopScroll");
        /////////// $(".variablesOverlay.variablesToFront").addClass(bgColorClass);
        // $(".imgOverlay, .phraseHeading").addClass("resizeElement");
        // $(".variablesOverlay").removeClass("stopScroll");
        // $(".variablesOverlayLength").addClass("variablesOverlayVisible").removeClass("stopScroll");
        // $(".articleContainer").addClass("articleOverlayVisible");

        // $(".articleBox").animate({width: "(10px)"}, 100);
        //////// $(".articleBox").addClass("articleBoxPeek");
        $(".articleBox").addClass("articleBoxPeek");
        // $(".phraseHeadingContainer").addClass("dragMe");

}



function deactivateOverlay() {
    /////////////////// $(".variablesOverlay.variablesToFront").removeClass(bgColorClass);
    $(".sectionTextContainer, .sectionHeader, .sectionText").removeClass("hideSectionText");
    $(".exitOverlay").removeClass("show");
    // $(".variables-container, .imgOverlay, .imgContainer, .phraseHeadingContainer").removeClass("show variablesToFront");
    // $(".variables-container, .imgContainer, .phraseHeadingContainer").removeClass("show variablesToFront");
    $(".variables-container, .variablesOverlay").removeClass("show variablesToFront");
    $("body").removeClass("stopScroll");
    // $(".imgOverlay, .phraseHeading").removeClass("resizeElement");
    // $(".variablesOverlayLength").removeClass("variablesOverlayVisible").addClass("stopScroll");
    // $(".articleContainer").removeClass("articleOverlayVisible");

    $(".articleBox").removeClass("articleBoxPeek").removeClass("articleBoxExpand");
     $(".variablesOverlay").removeClass("readArticle");
     // $(".imgContainer, .imgOverlay").removeClass(imgWidthTempClass);
     $(".imgContainer").removeClass(imgWidthTempClass);
     //////////$(".phraseHeading").removeClass(phraseSizeTempClass);
     ///////////$(".phraseHeadingContainer").removeClass(phrasePlaceTempClass);
     // $(".articleText").animate({
     //    scrollTop: $(".articleText").offset().top});
     $(".articleBox").scrollTop(0);
     // $(".phraseHeadingContainer").removeClass("dragMe");

}


function tempToggleVariables() {
    $(".imgContainer").toggleClass(imgWidthClass).toggleClass(imgHeightClass).toggleClass(imgPlaceClass).toggleClass(bgColorClass).toggleClass(imgWidthTempClass);
    $(".caption").toggleClass(captionColorClass).toggleClass(captionPlaceClass);
    // $(".phraseHeading").toggleClass(phraseSizeClass);
    /////////$(".phraseHeading").toggleClass(phraseSizeTempClass);
    ///////////$(".phraseHeadingContainer").toggleClass(phrasePlaceTempClass);
    // $(".imgContainer").toggleClass(imgWidthClass).toggleClass(imgWidthTempClass);
}

function chooseStory() {
    v = Math.floor(Math.random() * numOptions) + 1;
    articleLink = "https://katiebumatay.github.io/CapstoneDevelopment/Dev13/variables/" + sec + "/" + phraseNum + "/" + v + "/text.html";
    $(".articleText").load(articleLink);
    captionLink = "https://katiebumatay.github.io/CapstoneDevelopment/Dev13/variables/" + sec + "/" + phraseNum + "/" + v + "/text.html p:first-child";
    $(".caption").load(captionLink);
    loadImage.style.setProperty('--myImg-background-image', "url(../variables/" + sec + "/" + phraseNum + "/" + v + "/image-small.jpg");
    // $(".imgContainer").addClass("loadImage");
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

    checkMobile();

    // if (isMobile == true) {
    //     setInterval('animatePhrase()', 1000);
    // }

    $('html,body').animate({
        scrollTop: $("body").offset().top});

    // $("#myTitle").toggleClass("cleartext");

    setInterval('animate()', 800);

    setInterval('imgFade1()', 5000);
    setInterval('imgFade2()', 5000);

    var clicked = false;

    // var titleClicked = false;
    var sectionHeaderClicked = false;

$(".draggable").draggable
    ({  
        revert: 'valid',
        // snap: '#droppable',
        // snapMode: 'corner',
        // snapTolerance: '22'
    });

$(".draggable").data({'originalLeft': $(".draggable").css('left'),
                      'origionalTop': $(".draggable").css('top')
                     });


//     $("#droppable").droppable
//     ({
//         accept: '#draggable', 
//         drop: function(event, ui) 
//         {
//             $(this).find("#draggable").html();
//         }
// });
    // $( "#selector" ).draggable({
    //     revert: true
    // });

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

    $("h1").mouseenter(function(){
        titleHover = true;
        $(".title1, .title2, .title3, .title4").addClass("cleartext");
    });

    $("h1").mouseleave(function(){
        titleHover = false;
    });


    $(".intro-container").click(function(){
        if (titleClicked == false) {
            titleClicked = true;
            $("body").toggleClass("stopScroll");
            $(".aboutSection").toggleClass("showAbout");
            $(".intro-container").toggleClass("clickedTitle");
            $(".intro-bg").toggleClass("clickedTitleImg");
            $(".title").toggleClass("titleGrow");
            $("#img1, #img2").removeClass("fadeInImg").removeClass("fadeOutImg");
            
        }
        // $(".title, h1").toggleClass("clickedTitle");
        // $(".page-container").toggleClass("pageContainerHide");
        // $("h1").addClass("cleartext");
        // $(".page-container, .circle, .smallTitle").toggleClass("darker");

        // $("body").toggleClass("stopScroll");
        // $(".aboutSection").toggleClass("showAbout");
        // $(".intro-container").toggleClass("clickedTitle");
        // $(".title").toggleClass("titleGrow");
    });

    $(".tellScroll").click(function(){
        $('html,body').animate({
        scrollTop: $("#pledgeSection").offset().top}, 'slow');
        // $("#pledgeSection").scrollTop(0);
    });

    $(".smallTitle").click(function() {
        titleClicked = false;
        $(".intro-container").toggleClass("clickedTitle");
        $(".intro-bg").toggleClass("clickedTitleImg");
        $(".title").toggleClass("titleGrow");
        $(".aboutSection").toggleClass("showAbout");
        $("body").toggleClass("stopScroll");
        $("#img1").addClass("fadeInImg");
        $("#img2").addClass("fadeOutImg");

        $('html,body').animate({
        scrollTop: $("body").offset().top});
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
        // $(".variables-container, .imgContainer, .phraseHeadingContainer").toggleClass("show");
        $(".variables-container").toggleClass("show");
        $("body").toggleClass("stopScroll");
    });


    $(".phrase").mouseleave(function(){
        if (clicked == false) {
            // $(".variables-container, .imgContainer, .phraseHeadingContainer").toggleClass("show");
            $(".variables-container").toggleClass("show");
            $("body").toggleClass("stopScroll");
            // setTimeout(function() {
            //     $(".variables-container").removeClass("show");
            // }, 500);
            removeVariables();
            // hideVariables(removeVariables());
        }

    });

    $(".phrase").click(function(){
        clicked = true;
        activateOverlay();
        peekTimer = setInterval('articlePeekAnimate()', 1000);

    });

    // $(".variables-container").click(function(){
    $(".exitOverlay").click(function(){
        clicked = false;
        removeVariables();
        deactivateOverlay();
        clearInterval(peekTimer);
        // $('html,body').animate({
        // scrollTop: $(".variables-container").offset().top},
        // 'slow');
        $(".articleContainer").scrollTop(0);

        $(".draggable").css({'left': $(".draggable").data('originalLeft'),
                             'top': $(".draggable").data('origionalTop')}
                             );

    });

    $(".articleBox").click(function(){
        if (articleOpen == false) {
            articleOpen = true;
            clearInterval(peekTimer);
        }
        else if (articleOpen == true) {
            articleOpen = false;
            peekTimer = setInterval('articlePeekAnimate()', 1000);
        }
        $(".articleBox").toggleClass("articleBoxExpand");
        $(".variablesOverlay").toggleClass("readArticle");
        tempToggleVariables();
        // $(".imgContainer, .imgOverlay").toggleClass(imgWidthClass).toggleClass(imgWidthTempClass);
        // $(".imgContainer").toggleClass(imgWidthClass).toggleClass(imgWidthTempClass);
        $(".articleBox").scrollTop(0);
        // $( function() {
        //     $( "#draggable" ).draggable();
        //  } );
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
            // v = Math.floor(Math.random() * 2) + 1;
            sec = "1-pledge";
            phraseNum = "1";
            numOptions = 4;
            chooseStory();
        });

        $(".pledge2").mouseenter(function(){
            // v = Math.floor(Math.random() * 2) + 1;
            sec = "1-pledge";
            phraseNum = "2";
            numOptions = 4;
            chooseStory();
        });

        $(".pledge3").mouseenter(function(){
            // v = Math.floor(Math.random() * 2) + 1;
            sec = "1-pledge";
            phraseNum = "3";
            numOptions = 2;
            chooseStory();
        });

        $(".pledge4").mouseenter(function(){
            // v = Math.floor(Math.random() * 2) + 1;
            sec = "1-pledge";
            phraseNum = "4";
            numOptions = 2;
            chooseStory();
        });

        $(".pledge5").mouseenter(function(){
            // v = Math.floor(Math.random() * 2) + 1;
            sec = "1-pledge";
            phraseNum = "5";
            numOptions = 2;
            chooseStory();
        });

        $(".pledge6").mouseenter(function(){
            // v = Math.floor(Math.random() * 2) + 1;
            sec = "1-pledge";
            phraseNum = "6";
            numOptions = 2;
            chooseStory();
        });

        $(".pledge7").mouseenter(function(){
            // v = Math.floor(Math.random() * 2) + 1;
            sec = "1-pledge";
            phraseNum = "7";
            numOptions = 1;
            chooseStory();
        });

        $(".pledge8").mouseenter(function(){
            // v = Math.floor(Math.random() * 2) + 1;
            sec = "1-pledge";
            phraseNum = "8";
            numOptions = 2;
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
