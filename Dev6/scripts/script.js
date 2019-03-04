    var thisPhrase;
    
    var iW; var imgWidthClass;
    var iH; var imgHeightClass;
    var iT; var imgTopClass;
    var iL; var imgLeftClass;
    // var iS; var imgSizeClass;

    var pT; var phraseTopClass;
    var pL; var phraseLeftClass;
    var pS; var phraseSizeClass;
    var pC; var phraseColorClass;
    var pF; var phraseFontClass;

    var c; var ld; var bgColorClass; var textColorClass;

    var wordCount;

    var v;


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
    else {
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
    else {
        iL = Math.floor(Math.random() * 4) + 1;
        imgLeftClass = "imgLeft" + iL;
    }
    return imgLeftClass;
};

// function imgSize() {
//     iS = Math.floor(Math.random() * 3) + 1;
//     imgSizeClass = "imgSize" + iS;
//     return imgSizeClass;
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


// function isOnScreen() {
    
//     var win = $(window);
    
//     var viewport = {
//         top : win.scrollTop(),
//         left : win.scrollLeft()
//     };
//     viewport.right = viewport.left + win.width();
//     viewport.bottom = viewport.top + win.height();
    
//     var bounds = this.offset();
//     bounds.right = bounds.left + this.outerWidth();
//     bounds.bottom = bounds.top + this.outerHeight();
    
//     return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
// };


$(document).ready(function() {

    var clicked = false;

    var titleClicked = false;
    var sectionHeaderClicked = false;

    // $.fn.isOnScreen = function(){
    
    //     var win = $(window);
    
    //     var viewport = {
    //         top : win.scrollTop(),
    //         left : win.scrollLeft()
    //     };
    //     viewport.right = viewport.left + win.width();
    //     viewport.bottom = viewport.top + win.height();
    
    //     var bounds = this.offset();
    //     bounds.right = bounds.left + this.outerWidth();
    //     bounds.bottom = bounds.top + this.outerHeight();
    
    //     return (!(viewport.right < bounds.right || viewport.left > bounds.left || viewport.bottom < bounds.bottom || viewport.top > bounds.top));
    // };


    // $(".phrase").mouseenter(function(){
    //     thisPhrase = $(this).text();     
    // });

    $("h1").hover(function(){
        if (titleClicked == false) {
            $(this).toggleClass("blurtext");
        }
        
    });

    // $("h1").click(function(){
    //     $(".titleOverlay").toggleClass("titleOverlayExpand");
    // });

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

    // $(".sectionHeader, .phrase, .extra").hover(function(){
    //     $(".sectionHeader, .phrase, .extra").toggleClass("blurtext2");
    // });
    // $(".sectionText, .sectionHeader").hover(function(){
    //     $(".sectionHeader, .sectionText").toggleClass("blurtext2");
    // });

    $(".sectionTextContainer").hover(function(){
        // console.log("hover in section text container");
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
        // console.log("sectionHeader clicked");
        // $(".line").toggleClass("lineExpand");
        $(".rect").toggleClass("rectExpand");
        $(".sectionExplanation").toggleClass("showExplanation");
        $("body").toggleClass("stopScroll");
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

        thisPhrase = $(this).text();

        var wordCount = thisPhrase.split(" ").length;
        console.log(wordCount);

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

        // v = "url: ../variables/1-pledge/1/1/image.jpg"
        // $(".imgContainer").css("background-image", v).css("background-size", "cover");


        // $(".imgContainer").addClass(topClass leftClass sizeClass);
        // $(".imgContainer").addClass(imgWidth()).addClass(imgHeight()).addClass(imgTop()).addClass(imgLeft()).addClass(bgColor()).addClass("loadImage");
        imgWidth(); imgHeight(); imgTop(); imgLeft(); bgColor();
        $(".imgContainer").addClass(imgWidthClass).addClass(imgHeightClass).addClass(imgTopClass).addClass(imgLeftClass).addClass(bgColorClass).addClass("loadImage");
        $(".imgOverlay").addClass(imgWidthClass).addClass(imgHeightClass).addClass(imgTopClass).addClass(imgLeftClass).addClass(bgColorClass)
        $(".phraseHeading").text(thisPhrase).addClass(phraseSize()).addClass(textColor()).addClass(phraseFont());
        $(".phraseHeadingContainer").addClass(phraseTop()).addClass(phraseLeft());
        // if ($('.phraseHeading').isOnScreen() == false) {
        //     console.log(thisPhrase);
        //     console.log("phrase Heading not in viewport")
        //     $(".phraseHeadingContainer").removeClass(phraseTopClass).removeClass(phraseLeftClass);
        //     $(".phraseHeading").removeClass(phraseSizeClass).removeClass(textColorClass).removeClass(phraseFontClass);
        //     $(".phraseHeadingContainer").addClass(phraseTop()).addClass(phraseLeft());
        //     $(".phraseHeading").text(thisPhrase).addClass(phraseSize()).addClass(textColor()).addClass(phraseFont());
        // }
        // $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").toggleClass("show");
        $(".variables-container, .imgContainer, .phraseHeadingContainer").toggleClass("show");
        $("body").toggleClass("stopScroll");


        // console.log("mouseenter phrase");
    });

    $(".phrase").mouseleave(function(){
        if (clicked == false) {
            // $(".imgContainer").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(bgColorClass).removeClass("loadImage");
            $(".imgContainer").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(bgColorClass).removeClass("loadImage");
            $(".imgOverlay").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(bgColorClass);

            $(".phraseHeading").removeClass(phraseSizeClass).removeClass(textColorClass).removeClass(phraseFontClass);
            $(".phraseHeadingContainer").removeClass(phraseTopClass).removeClass(phraseLeftClass);
            // $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").toggleClass("show");
            $(".variables-container, .imgContainer, .phraseHeadingContainer").toggleClass("show");
            $("body").toggleClass("stopScroll");
        }

        // console.log("mouseleave phrase");

    });

    $(".phrase").click(function(){
        clicked = true;
        $(".sectionTextContainer, .sectionHeader, .sectionText").addClass("hideSectionText");
        $(".exitOverlay").addClass("show");
        // $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").addClass("show variablesToFront");
        $(".variables-container, .imgOverlay, .imgContainer, .phraseHeadingContainer").addClass("show variablesToFront");
        // $(".page-container").addClass("stopScroll");
        $("body").addClass("stopScroll");
        $(".variablesOverlay").removeClass("stopScroll");
        $(".variablesOverlayLength").addClass("variablesOverlayVisible");
        // $(".variablesOverlay").removeClass("stopScroll").addClass("variablesOverlayLong");

        // console.log("click phrase");
    });

    $(".variables-container").click(function(){
        clicked = false;

        $(".imgContainer").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(bgColorClass);
        $(".imgOverlay").removeClass(imgWidthClass).removeClass(imgHeightClass).removeClass(imgTopClass).removeClass(imgLeftClass).removeClass(bgColorClass);
        $(".phraseHeading").removeClass(phraseSizeClass).removeClass(textColorClass).removeClass(phraseFontClass);
        $(".phraseHeadingContainer").removeClass(phraseTopClass).removeClass(phraseLeftClass);

        $(".sectionTextContainer, .sectionHeader, .sectionText").removeClass("hideSectionText");
        $(".exitOverlay").removeClass("show");
        // $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").removeClass("show variablesToFront");
        $(".variables-container, .imgOverlay, .imgContainer, .phraseHeadingContainer").removeClass("show variablesToFront");
        // $(".page-container").removeClass("stopScroll");
        $("body").removeClass("stopScroll");
        $(".variablesOverlayLength").removeClass("variablesOverlayVisible").addClass("stopScroll");
        // $(".variablesOverlay").removeClass("variablesOverlayLong");

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
            $(".articleText").load("../variables/1-pledge/1/1/text.html");
        });
        // $(".articleText").load("../variables/1-pledge/1/1/text.txt");
        // $(".articleText").load("text.txt");








});
