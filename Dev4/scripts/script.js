    var thisPhrase;

    var iT; var imgTopClass;
    var iL; var imgLeftClass;
    var iS; var imgSizeClass;

    var pT; var phraseTopClass;
    var pL; var phraseLeftClass;
    var pS; var phraseSizeClass;
    var pC; var phraseColorClass;
    var pF; var phraseFontClass;

    var c; var ld; var bgColorClass; var textColorClass;

function imgTop() {
    iT = Math.floor(Math.random() * 4) + 1;
    imgTopClass = "imgTop" + iT;
    return imgTopClass;
};

function imgLeft() {
    iL = Math.floor(Math.random() * 4) + 1;
    imgLeftClass = "imgLeft" + iL;
    return imgLeftClass;
};

function imgSize() {
    iS = Math.floor(Math.random() * 3) + 1;
    imgSizeClass = "imgSize" + iS;
    return imgSizeClass;
};

function phraseTop() {
    pT = Math.floor(Math.random() * 4) + 1;
    phraseTopClass = "phraseTop" + pT;
    return phraseTopClass;
};

function phraseLeft() {
    pL = Math.floor(Math.random() * 4) + 1;
    phraseLeftClass = "phraseLeft" + pL;
    return phraseLeftClass;
};

function phraseSize() {
    pS = Math.floor(Math.random() * 3) + 1;
    phraseSizeClass = "phraseSize" + pS;
    return phraseSizeClass;
};

function phraseFont() {
    pF = Math.floor(Math.random() * 9) + 1;
    phraseFontClass = "font" + pF;
    return phraseFontClass;
};

function bgColor() {
    c = Math.floor(Math.random() * 2) + 1;
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

$(document).ready(function() {

    var clicked = false;

    $(".phrase").mouseenter(function(){
        thisPhrase = $(this).text();     
    });

    $("h1").hover(function(){
        $(this).toggleClass("blurtext");
   });

    $(".sectionHeader, .phrase").hover(function(){
        $(this).toggleClass("blurtext2");
    });

    // var iT; var imgTopClass;
    // var iL; var imgLeftClass;
    // var iS; var imgSizeClass;

    // var pT; var phraseTopClass;
    // var pL; var phraseLeftClass;
    // var pS; var phraseSizeClass;
    // var pC; var phraseColorClass;
    // var pF; var phraseFontClass;

    // var c; var ld; var bgColorClass; var textColorClass;


    $(".phrase").mouseenter(function(){

        // iT = Math.floor(Math.random() * 4) + 1;
        // imgTopClass = "imgTop" + iT;

        // iL = Math.floor(Math.random() * 4) + 1;
        // imgLeftClass = "imgLeft" + iL;

        // iS = Math.floor(Math.random() * 3) + 1;
        // imgSizeClass = "imgSize" + iS;

        // pT = Math.floor(Math.random() * 4) + 1;
        // phraseTopClass = "phraseTop" + pT;

        // pL = Math.floor(Math.random() * 4) + 1;
        // phraseLeftClass = "phraseLeft" + pL;

        // pS = Math.floor(Math.random() * 3) + 1;
        // phraseSizeClass = "phraseSize" + pS;

        // pF = Math.floor(Math.random() * 9) + 1;
        // phraseFontClass = "font" + pF;


        // c = Math.floor(Math.random() * 2) + 1;
        // bgColorClass = "bgColor" + c;

        // ld = Math.floor(Math.random() * 2) + 1;
        // bgColorClass = bgColorClass + "-" + ld;

        // if (ld == 1) {
        //     textColorClass = "textColor" + c + "-" + 2;
        // }

        // else if (ld == 2) {
        //     textColorClass = "textColor" + c + "-" + 1;
        // }


        // $(".imgContainer").addClass(topClass leftClass sizeClass);
        $(".imgContainer").addClass(imgTop()).addClass(imgLeft()).addClass(imgSize()).addClass(bgColor());
        $(".phraseHeadingContainer").addClass(phraseTop()).addClass(phraseLeft());
        $(".phraseHeading").text(thisPhrase).addClass(phraseSize()).addClass(textColor()).addClass(phraseFont());
        $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").toggleClass("show");

        console.log("mouseenter phrase");
    });

    $(".phrase").mouseleave(function(){
        if (clicked == false) {
            $(".imgContainer").removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(imgSizeClass).removeClass(bgColorClass);
            $(".phraseHeadingContainer").removeClass(phraseTopClass).removeClass(phraseLeftClass);
            $(".phraseHeading").removeClass(phraseSizeClass).removeClass(textColorClass).removeClass(phraseFontClass);
            $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").toggleClass("show");
        }

        // console.log("mouseleave phrase");

    });

    $(".phrase").click(function(){
        clicked = true;
        $(".sectionTextContainer, .sectionHeader, .sectionText").addClass("hideSectionText");
        $(".exitOverlay").addClass("show");
        $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").addClass("show variablesToFront");
        $("body").addClass("stopScroll");

        // console.log("click phrase");
    });

    $(".exitOverlay").click(function(){
        clicked = false;
        $(".sectionTextContainer, .sectionHeader, .sectionText").removeClass("hideSectionText");
        $(".exitOverlay").removeClass("show");
        $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").removeClass("show variablesToFront");
        $("body").removeClass("stopScroll");
    });



});
