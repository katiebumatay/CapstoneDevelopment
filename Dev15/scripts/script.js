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

    var c; var ld; var lightColorBg; var darkColorText; var bgColorClass; var textColorClass; var captionColorClass; var captionBgColorClass;

    var wordCount;

    var sec; var phraseNum;
    var v; var numOptions;
    var i;
    var articleLink;
    var captionLink;
    var imageLink;

    var prevNum = 1; var prevprevNum = 3;
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
    var peekTimerOn = false;

    var isMobile = false;

    var articleOpen = false;

    var currentView;

    var firstTime = true;


function checkMobile(){
    if ($(".variablesOverlay").css("top") == "30px" ){
        isMobile = true;
    }
    console.log(isMobile);
};

function animatePhrase() {
    console.log("animate phrase");
    $(".sectionText .phrase").toggleClass("blurText");
};

function animate() {
    if (titleHover == true) {
        return;
    }
    else if (titleClicked == false) {
        titleNum = Math.floor(Math.random() * 4) + 1;
        if (titleNum == prevNum || titleNum == prevprevNum) {
            animate();
            // if (titleNum == 4) {
            //     tempNum = 1;
            // }
            // else {
            //     tempNum = titleNum + 1;
            // }    
        }
        else {
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
        prevprevNum = prevNum
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
    $(".articleBox").toggleClass("articleBoxBounce");
}

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
    iM = Math.floor(Math.random() * 2) + 1;
    imgMixClass = "mix" + iM;
    return imgMixClass;
}


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
    }
    if (iW == 2) {
        iL = Math.floor(Math.random() * 3) + 1;
    }
    else if (iW == 1) {
        iL = Math.floor(Math.random() * 4) + 1;
    }
}

function imgPlace() {
    imgPlaceClass = "imgPlace-" + iT + "-" + iL;
    return imgPlaceClass;
}


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

function lightColor() {
    lightColorBg = "bgColor" + c + "-1";
    return lightColorBg;
}

function darkColor() {
    darkColorText = "textColor" + c + "-2";
    return darkColorText;
}

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
    return captionPlaceClass;
}


function addVariables() {

    imgMix(); imgWidth(); imgHeight(); imgTop(); imgLeft(); imgPlace(); bgColor(); lightColor(); darkColor();
    phraseSize(); textColor(); phraseFont(); fontWeight();
    phraseTop(); phraseLeft(); phrasePlace(); phraseWidth();
    captionColor(); captionPlace();
    
    $(".imgContainer").addClass(imgWidthClass).addClass(imgHeightClass).addClass(imgPlaceClass).addClass(bgColorClass);
    $(".imgOverlay").addClass(bgColorClass).addClass(imgMixClass);
    $(".articleBox").addClass(lightColorBg);
    $(".phraseHeading").text(thisPhrase).addClass(phraseSizeClass).addClass(textColorClass).addClass(phraseFontClass).addClass(fontWeightClass);
    $(".phraseHeadingContainer").addClass(phrasePlaceClass).addClass(phraseWidthClass);
    $(".caption").addClass(captionColorClass).addClass(captionPlaceClass);
    $(".fa-sort-up").addClass(textColorClass);
    $(".readMore, .articleText a").addClass(darkColorText);
}

function removeVariables() {
        $(".imgContainer").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgPlaceClass).removeClass(bgColorClass);
        $(".imgOverlay").removeClass(bgColorClass).removeClass(imgMixClass);
        $(".articleBox").removeClass(lightColorBg);
        $(".phraseHeading").removeClass(phraseSizeClass).removeClass(textColorClass).removeClass(phraseFontClass).removeClass(fontWeightClass);
        $(".phraseHeadingContainer").removeClass(phrasePlaceClass).removeClass(phraseWidthClass);;
        $(".caption").removeClass(captionColorClass).removeClass(captionPlaceClass);
        $(".fa-sort-up").removeClass(textColorClass);
        $(".readMore, .articleText a").removeClass(darkColorText);


}

function activateOverlay() {
        $(".variablesOverlay.variablesToFront").addClass(bgColorClass);
        $(".section, .sectionTextContainer, .sectionHeader, .sectionText").addClass("hideSectionText");
        $(".exitOverlay").addClass("show");
        $(".variables-container, .variablesOverlay").addClass("show variablesToFront");
        $("body").addClass("stopScroll");
        $(".articleBox").addClass("articleBoxPeek");
}



function deactivateOverlay() {
    $(".section, .sectionTextContainer, .sectionHeader, .sectionText").removeClass("hideSectionText");
    $(".exitOverlay").removeClass("show");
    $(".variables-container, .variablesOverlay").removeClass("show variablesToFront");
    $("body").removeClass("stopScroll");
    $(".articleBox").removeClass("articleBoxPeek").removeClass("articleBoxExpand").removeClass("articleBoxBounce");
    $(".variablesOverlay").removeClass("readArticle");
    $(".imgContainer").removeClass(imgWidthTempClass);
    $(".phraseHeading").removeClass("phraseTemp");
    $(".phraseHeadingContainer").removeClass("phrasePlaceTemp");
    $(".articleBox").scrollTop(0);

}


function tempToggleVariables() {
    $(".imgContainer").toggleClass(imgWidthClass).toggleClass(imgHeightClass).toggleClass(imgPlaceClass).toggleClass(bgColorClass).toggleClass(imgWidthTempClass);
    $(".caption").toggleClass(captionColorClass).toggleClass(captionPlaceClass);
    $(".phraseHeading").toggleClass("phraseTemp");
    $(".phraseHeadingContainer").toggleClass(phrasePlaceClass).toggleClass("phrasePlaceTemp");
}

function chooseStory() {
    v = Math.floor(Math.random() * numOptions) + 1;
    articleLink = "https://katiebumatay.github.io/CapstoneDevelopment/Dev15/variables/" + sec + "/" + phraseNum + "/" + v + "/text.html";
    $(".articleText").load(articleLink);
    captionLink = "https://katiebumatay.github.io/CapstoneDevelopment/Dev15/variables/" + sec + "/" + phraseNum + "/" + v + "/text.html p:first-child";
    $(".caption").load(captionLink);
    i = Math.floor(Math.random() * 2) + 1;
    loadImage.style.setProperty('--myImg-background-image', "url(../variables/" + sec + "/" + phraseNum + "/" + v + "/image" + i + "-small.jpg");
}




$(document).ready(function() {

    checkMobile();


    $('html,body').animate({
        scrollTop: $("body").offset().top});
    $('html,body').animate({
        scrollLeft: $("body").offset().left});

    animate();


    setInterval('animate()', 500);
    // setInterval('imgFade1()', 5000);
    // setInterval('imgFade2()', 5000);

    var clicked = false;


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
            $(".intro-bg").toggleClass("clickedTitleBg");
            $(".intro-img").toggleClass("clickedTitleImg");
            $(".title").toggleClass("titleGrow");
            // $("#img1, #img2").removeClass("fadeInImg").removeClass("fadeOutImg");
            
        }
    });

    // $("#cw").click(function(){
    //     if ($("#cw").hasClass("warningButtonOn")) {
    //         $("#cw").removeClass("warningButtonOn");
    //         document.getElementById("warningText").innerHTML = "";
    //     }
    //     else {
    //         document.getElementById("warningText").innerHTML = "racism, immigration, abortion, slavery, mass incarceration";
    //         $("#cw").addClass("warningButtonOn");
    //         $("#tw").removeClass("warningButtonOn");
    //     }
        
    // });

    $("#tw").click(function(){
        if ($("#tw").hasClass("warningButtonOn")) {
            $("#tw").removeClass("warningButtonOn");
            document.getElementById("warningText").innerHTML = "";
        }
        else {
            document.getElementById("warningText").innerHTML = "racism, systemic racism, sexual assault, police brutality, war, mass shootings, intergenerational trauma, LGBTQIA* discrimination, domestic violence";
            $("#tw").addClass("warningButtonOn");
            // $("#cw").removeClass("warningButtonOn");
        }
        
    });

    $(".tellScroll").click(function(){
        $('html,body').animate({
        scrollTop: $("#myPC").offset().top}, 'slow');
        if (firstTime == true) {
            $(".bar").addClass("barShow");
            $("#pledgeBar").addClass("selected");
        }
        firstTime = false;
    });


    $("#pledgeSection .next").click(function(){
        $(".page-container").addClass("view2").removeClass("view1");
        $("#pledgeBar").removeClass("selected");
        $("#declarationBar").addClass("selected");
        currentView = "view2";
    });

    $("#declarationSection .next").click(function(){
        $(".page-container").addClass("view3").removeClass("view2");
        $("#declarationBar").removeClass("selected");
        $("#constitutionBar").addClass("selected");
        currentView = "view3";
    });

    $("#declarationSection .previous").click(function(){
        $(".page-container").addClass("view1").removeClass("view2");
        $("#declarationBar").removeClass("selected");
        $("#pledgeBar").addClass("selected");
        currentView = "view1";
    });

    $("#constitutionSection .previous").click(function(){
        $(".page-container").addClass("view2").removeClass("view3");
        $("#constitutionBar").removeClass("selected");
        $("#declarationBar").addClass("selected");
        currentView = "view2";
    });

    $("#pledgeBar").click(function(){
        $(".page-container").addClass("view1").removeClass("view2").removeClass("view3");
        $("#pledgeBar").addClass("selected");
        $("#declarationBar, #constitutionBar").removeClass("selected");
        currentView = "view1";
    });

    $("#declarationBar").click(function(){
        $(".page-container").addClass("view2").removeClass("view1").removeClass("view3");
        $("#declarationBar").addClass("selected");
        $("#pledgeBar, #constitutionBar").removeClass("selected");
        currentView = "view2";
    });

     $("#constitutionBar").click(function(){
        $(".page-container").addClass("view3").removeClass("view1").removeClass("view2");
        $("#constitutionBar").addClass("selected");
        $("#pledgeBar, #declarationBar").removeClass("selected");
        currentView = "view3";
    });

    $(".menu").hover(function() {
        $(".otherMenuItems").toggleClass("showMenuItems");
    });

    // $(".smallTitle").click(function() {

    //     titleClicked = false;
    //     $(".intro-container").toggleClass("clickedTitle");
    //     $(".intro-bg").toggleClass("clickedTitleImg");
    //     $(".title").toggleClass("titleGrow");
    //     $(".aboutSection").toggleClass("showAbout");
    //     $("body").toggleClass("stopScroll");
    //     $("#img1").addClass("fadeInImg");
    //     $("#img2").addClass("fadeOutImg");

    //     $('html,body').animate({
    //     scrollTop: $("body").offset().top});
    //     $('html,body').animate({
    //     scrollLeft: $("body").offset().left});
    // });

    $(".smallTitle, #goToAbout").click(function() {

        $('html,body').animate({
        scrollTop: $("body").offset().top});
        $('html,body').animate({
        scrollLeft: $("body").offset().left});
    });

    $(".aboutButtonMobile").click(function() {

        $('html,body').animate({
        scrollTop: $("body").offset().top});
        $('html,body').animate({
        scrollLeft: $("body").offset().left});
    });


    $(".sectionTextContainer").hover(function(){
            $(".sectionHeader, .extra").toggleClass("blurtext2");
            $(".phrase").toggleClass("blurtext3");
    });

    $(".phrase").hover(function(){
            $(this).toggleClass("blurtext3");
        
    });


    $(".phrase").mouseenter(function(){

        thisPhrase = $(this).text();
        wordCount = thisPhrase.split(" ").length;

        addVariables();
        $(".variables-container").toggleClass("show");
        $("body").toggleClass("stopScroll");
    });


    $(".phrase").mouseleave(function(){
        if (clicked == false) {
            $(".variables-container").toggleClass("show");
            $("body").toggleClass("stopScroll");
            removeVariables();
        }
    });

    $(".phrase").click(function(){
        clicked = true;
        activateOverlay();
        if (isMobile == false) {
            if (peekTimerOn == false) {
                console.log("activate peekTimer");
                peekTimer = setInterval('articlePeekAnimate()', 1000);
                peekTimerOn = true;
            }
            
        }

    });

    $(".exitOverlay").click(function(){
        clicked = false;
        removeVariables();
        deactivateOverlay();
        if (isMobile == false) {
            if (peekTimerOn == true) {
                console.log("clear peekTimer");
                clearInterval(peekTimer);
                peekTimerOn = false;
            }
        }

        $(".articleContainer").scrollTop(0);
    });

    $(".articleBox").click(function(){
        if (isMobile == false) {
            if(peekTimerOn == true) {
                    console.log("clear peekTimer");
                    clearInterval(peekTimer);
                    peekTimerOn = false;
            }
            else if (peekTimerOn == false) {
                console.log("activate peekTimer");
                peekTimer = setInterval('articlePeekAnimate()', 1000);
                peekTimerOn = true;
            }
        }
        $(".articleBox").toggleClass("articleBoxExpand");
        $(".variablesOverlay").toggleClass("readArticle");
        tempToggleVariables();
        $(".articleBox").scrollTop(0);

    });

        $(".pledge1").mouseenter(function(){
            sec = "1-pledge";
            phraseNum = "1";
            numOptions = 5;
            chooseStory();
        });

        $(".pledge2").mouseenter(function(){
            sec = "1-pledge";
            phraseNum = "2";
            numOptions = 7;
            chooseStory();
        });

        $(".pledge3").mouseenter(function(){
            sec = "1-pledge";
            phraseNum = "3";
            numOptions = 5;
            chooseStory();
        });

        $(".pledge4").mouseenter(function(){
            
            sec = "1-pledge";
            phraseNum = "4";
            numOptions = 3;
            chooseStory();
        });

        $(".pledge5").mouseenter(function(){
            
            sec = "1-pledge";
            phraseNum = "5";
            numOptions = 7;
            chooseStory();
        });

        $(".pledge6").mouseenter(function(){
            
            sec = "1-pledge";
            phraseNum = "6";
            numOptions = 6;
            chooseStory();
        });

        $(".pledge7").mouseenter(function(){
            
            sec = "1-pledge";
            phraseNum = "7";
            numOptions = 5;
            chooseStory();
        });

        $(".pledge8").mouseenter(function(){
            
            sec = "1-pledge";
            phraseNum = "8";
            numOptions = 6;
            chooseStory();
        });

        $(".dec1").mouseenter(function(){
            
            sec = "2-declaration";
            phraseNum = "1";
            numOptions = 6;
            chooseStory();
        });

        $(".dec2").mouseenter(function(){
            
            sec = "2-declaration";
            phraseNum = "2";
            numOptions = 5;
            chooseStory();
        });

        $(".dec3").mouseenter(function(){
            
            sec = "2-declaration";
            phraseNum = "3";
            numOptions = 8;
            chooseStory();
        });

        $(".dec4").mouseenter(function(){
            
            sec = "2-declaration";
            phraseNum = "4";
            numOptions = 6;
            chooseStory();
        });

        $(".dec5").mouseenter(function(){
            
            sec = "2-declaration";
            phraseNum = "5";
            numOptions = 5;
            chooseStory();
        });

        $(".dec6").mouseenter(function(){
            
            sec = "2-declaration";
            phraseNum = "6";
            numOptions = 6;
            chooseStory();
        });

        $(".const1").mouseenter(function(){
            
            sec = "3-constitution";
            phraseNum = "1";
            numOptions = 5;
            chooseStory();
        });


        $(".const2").mouseenter(function(){
            
            sec = "3-constitution";
            phraseNum = "2";
            numOptions = 4;
            chooseStory();
        });


        $(".const3").mouseenter(function(){
            
            sec = "3-constitution";
            phraseNum = "3";
            numOptions = 7;
            chooseStory();
        });

        $(".const4").mouseenter(function(){
            
            sec = "3-constitution";
            phraseNum = "4";
            numOptions = 7;
            chooseStory();
        });

        $(".const5").mouseenter(function(){
            
            sec = "3-constitution";
            phraseNum = "5";
            numOptions = 5;
            chooseStory();
        });

        $(".const6").mouseenter(function(){
            
            sec = "3-constitution";
            phraseNum = "6";
            numOptions = 6;
            chooseStory();
        });

        $(".const7").mouseenter(function(){
            
            sec = "3-constitution";
            phraseNum = "7";
            numOptions = 7;
            chooseStory();
        });

        $(".const8").mouseenter(function(){
            
            sec = "3-constitution";
            phraseNum = "8";
            numOptions = 4;
            chooseStory();
        });


        $(".const9").mouseenter(function(){
            
            sec = "3-constitution";
            phraseNum = "9";
            numOptions = 4;
            chooseStory();
        });



});
