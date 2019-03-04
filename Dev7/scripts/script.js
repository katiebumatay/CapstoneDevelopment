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

    var v;
    var articleLink;
    var imageLink;


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
    $(".imgContainer").addClass(imgWidthClass).addClass(imgHeightClass).addClass(imgTopClass).addClass(imgLeftClass).addClass(bgColorClass).addClass("loadImage");
    $(".imgOverlay").addClass(imgWidthClass).addClass(imgHeightClass).addClass(imgTopClass).addClass(imgLeftClass).addClass(bgColorClass)
    $(".phraseHeading").text(thisPhrase).addClass(phraseSize()).addClass(textColor()).addClass(phraseFont());
    $(".phraseHeadingContainer").addClass(phraseTop()).addClass(phraseLeft());
}

function removeVariables() {
        $(".imgContainer").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(bgColorClass).removeClass("loadImage");
        $(".imgOverlay").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(bgColorClass);
        $(".phraseHeading").removeClass(phraseSizeClass).removeClass(textColorClass).removeClass(phraseFontClass);
        $(".phraseHeadingContainer").removeClass(phraseTopClass).removeClass(phraseLeftClass);


}

function activateOverlay() {
        $(".sectionTextContainer, .sectionHeader, .sectionText").addClass("hideSectionText");
        $(".exitOverlay").addClass("show");
        $(".variables-container, .imgOverlay, .imgContainer, .phraseHeadingContainer").addClass("show variablesToFront");
        $("body").addClass("stopScroll");
        $(".variablesOverlay").removeClass("stopScroll");
        $(".variablesOverlayLength").addClass("variablesOverlayVisible");
}


$(document).ready(function() {

    var clicked = false;

    var titleClicked = false;
    var sectionHeaderClicked = false;

    $("h1").hover(function(){
        if (titleClicked == false) {
            $(this).toggleClass("blurtext");
        }
        
    });


    $("h1").click(function(){
        if (titleClicked == true) {
            titleClicked = false;
        }
        else if (titleClicked == false) {
            titleClicked = true;
        }
        $(".title, h1").toggleClass("clickedTitle");
        $("body").toggleClass("stopScroll");
        $(".about").toggleClass("showAbout")
    });


    $(".sectionTextContainer").hover(function(){
        if (sectionHeaderClicked == false) {
            $(".sectionHeader, .phrase, .extra").toggleClass("blurtext2");
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

        $(".sectionTextContainer, .sectionHeader, .sectionText").removeClass("hideSectionText");
        $(".exitOverlay").removeClass("show");
        $(".variables-container, .imgOverlay, .imgContainer, .phraseHeadingContainer").removeClass("show variablesToFront");
        $("body").removeClass("stopScroll");
        $(".variablesOverlayLength").removeClass("variablesOverlayVisible").addClass("stopScroll");

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


        $(".pledge1").click(function(){
            v = Math.floor(Math.random() * 2) + 1;
            // imageLink = "../variables/1-pledge/1/" + v + "/image.jpg";
            // // $("loadImage").style.setProperty('--myImgURL', imageLink);
            // loadImage.style.setProperty('--myImg-background-image', url(imageLink));


            articleLink = "https://katiebumatay.github.io/CapstoneDevelopment/Dev6/variables/1-pledge/1/" + v + "/text.html";
            $(".articleText").load(articleLink);
        });
        // $(".articleText").load("../variables/1-pledge/1/1/text.txt");
        // $(".articleText").load("text.txt");

        $(".pledge2").click(function(){
            $(".articleText").load("https://katiebumatay.github.io/CapstoneDevelopment/Dev6/variables/1-pledge/2/1/text.html");
        });








});
