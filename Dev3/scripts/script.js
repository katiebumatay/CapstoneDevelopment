

$(document).ready(function() {

    var clicked = false;

    var thisPhrase;

    $(".phrase").mouseenter(function(){
        thisPhrase = $(this).text();     
    });

    $("h1").hover(function(){
        $(this).toggleClass("blurtext");
   });

    $(".sectionHeader, .phrase").hover(function(){
        $(this).toggleClass("blurtext2");
    });

    var iT; var imgTopClass;
    var iL; var imgLeftClass;
    var iS; var imgSizeClass;

    var pT; var phraseTopClass;
    var pL; var phraseLeftClass;
    var pS; var phraseSizeClass;
    var pC; var phraseColorClass;
    var pF; var phraseFontClass;

    var c; var ld; var bgColorClass; var textColorClass;


    $(".phrase").mouseenter(function(){

        iT = Math.floor(Math.random() * 4) + 1;
        imgTopClass = "imgTop" + iT;

        iL = Math.floor(Math.random() * 4) + 1;
        imgLeftClass = "imgLeft" + iL;

        iS = Math.floor(Math.random() * 3) + 1;
        imgSizeClass = "imgSize" + iS;

        pT = Math.floor(Math.random() * 4) + 1;
        phraseTopClass = "phraseTop" + pT;

        pL = Math.floor(Math.random() * 4) + 1;
        phraseLeftClass = "phraseLeft" + pL;

        pS = Math.floor(Math.random() * 3) + 1;
        phraseSizeClass = "phraseSize" + pS;

        pF = Math.floor(Math.random() * 9) + 1;
        phraseFontClass = "font" + pF;


        c = Math.floor(Math.random() * 2) + 1;
        bgColorClass = "bgColor" + c;

        ld = Math.floor(Math.random() * 2) + 1;
        bgColorClass = bgColorClass + "-" + ld;

        if (ld == 1) {
            textColorClass = "textColor" + c + "-" + 2;
        }

        else if (ld == 2) {
            textColorClass = "textColor" + c + "-" + 1;
        }


        // $(".imgContainer").addClass(topClass leftClass sizeClass);
        $(".imgContainer").addClass(imgTopClass).addClass(imgLeftClass).addClass(imgSizeClass).addClass(bgColorClass);
        $(".phraseHeadingContainer").addClass(phraseTopClass).addClass(phraseLeftClass);
        $(".phraseHeading").text(thisPhrase).addClass(phraseSizeClass).addClass(textColorClass).addClass(phraseFontClass);
        $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").toggleClass("show");

        console.log("mouseenter phrase");
    });

    $(".phrase").mouseleave(function(){
        // $(".imgContainer").removeClass(topClass leftClass sizeClass);
        if (clicked == false) {
            $(".imgContainer").removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(imgSizeClass).removeClass(bgColorClass);
            $(".phraseHeadingContainer").removeClass(phraseTopClass).removeClass(phraseLeftClass);
            $(".phraseHeading").removeClass(phraseSizeClass).removeClass(textColorClass).removeClass(phraseFontClass);
            $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").toggleClass("show");
        }
        // $(".imgContainer").removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(imgSizeClass);
        // $(".phraseHeadingContainer").removeClass(phraseTopClass).removeClass(phraseLeftClass);
        // $(".phraseHeading").removeClass(phraseSizeClass);
        // $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").toggleClass("show");

        console.log("mouseleave phrase");

    });

    $(".phrase").click(function(){
        clicked = true;
        $(".sectionTextContainer, .sectionHeader, .sectionText").addClass("hideSectionText");
        $(".exitOverlay").addClass("show");
        $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").addClass("show variablesToFront");
        $("body").addClass("stopScroll");

        console.log("click phrase");
    });

    $(".exitOverlay").click(function(){
        clicked = false;
        $(".sectionTextContainer, .sectionHeader, .sectionText").removeClass("hideSectionText");
        $(".exitOverlay").removeClass("show");
        $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").removeClass("show variablesToFront");
        $("body").removeClass("stopScroll");
    });



});
