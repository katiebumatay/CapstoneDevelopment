

// function loadImage() {
//     var imageNum = Math.floor(Math.random() * 9) + 1;
//     var imgClass = "image" + imageNum
//     $(".imgContainer").addClass(imgClass);
// };

// function imgTop() {
//     var t = Math.floor(Math.random() * 4) + 1;
//     var topClass = "topEven" + t;
//     $(".imgContainer").toggleClass(topClass);
// };

// function imgLeft() {
//     var l = Math.floor(Math.random() * 4) + 1;
//     var leftClass = "leftEven" + l;
//     $(".imgContainer").toggleClass(leftClass);
// };

// function imgSize() {
//     var s = Math.floor(Math.random() * 3) + 1;
//     var sizeClass = "imgSize" + s;
//     $(".imgContainer").toggleClass(sizeClass);
// };

// function phraseSize() {
//     var s = Math.floor(Math.random() * 3) + 1;
//     var sizeClass = "phraseSize" + s;
//     $(".phraseHeading").toggleClass(sizeClass);
// };

// function phraseTop() {
//     var t = Math.floor(Math.random() * 4) + 1;
//     var topClass = "topOdd" + t;
//     $(".phraseHeadingContainer").toggleClass(topClass);
// };

// function phraseLeft() {
//     var l = Math.floor(Math.random() * 4) + 1;
//     var leftClass = "leftOdd" + l;
//     $(".phraseHeadingContainer").toggleClass(leftClass);
// };

// function clearVariables(){
//     $(".imgContainer").removeClass (function (index, className) {
//         return (className.match (/(^|\s)topEven\S+/g) || []).join(' ');
//     });
//     $(".imgContainer").removeClass (function (index, className) {
//         return (className.match (/(^|\s)leftEven\S+/g) || []).join(' ');
//     });
//     $(".imgContainer").removeClass (function (index, className) {
//         return (className.match (/(^|\s)imgSize\S+/g) || []).join(' ');
//     });
//     $(".phraseHeadingContainer").removeClass (function (index, className) {
//         return (className.match (/(^|\s)topOdd\S+/g) || []).join(' ');
//     });
//     $(".phraseHeadingContainer").removeClass (function (index, className) {
//         return (className.match (/(^|\s)leftOdd\S+/g) || []).join(' ');
//     });
//     $(".phraseHeading").removeClass (function (index, className) {
//         return (className.match (/(^|\s)phraseSize\S+/g) || []).join(' ');
//     });
// }




// function bodyTop() {
//     var t = Math.floor(Math.random() * 3) + 1;
//     var topClass = "top" + t
//     $(".body").addClass(topClass);
// };

// function bodyLeft() {
//     var l = Math.floor(Math.random() * 3) + 1;
//     var leftClass = "left" + l
//     $(".body").addClass(leftClass);
// };


// function bodyFont() {
//     var f = Math.floor(Math.random() * 10) + 1;
//     var fontClass = "font" + f
//     $(".body").addClass(fontClass);
// };

// function bodyWeight() {
//     var w = Math.floor(Math.random() * 2) + 1;
//     var weightClass = "textWeight" + w
//     $(".body").addClass(weightClass);
// };

$(document).ready(function() {

    var clicked = false;

    var thisPhrase;

    $(".phrase").mouseenter(function(){
        thisPhrase = $(this).text();     
    });

    // $(".phrase").click(function(){
    //     if (clicked == false) {
    //         clicked = true;
    //         console.log("phrase clicked, clicked = " + clicked);
    //         return;
    //     }
    //     else if (clicked == true) {
    //         clicked = false;
    //         console.log("phrase clicked, clicked = " + clicked);
    //         return;
    //     }
    // });


    // if (clicked == false) {

        $("h1").hover(function(){
            $(this).toggleClass("blurtext");
        });

        $(".sectionHeader").hover(function(){
            $(this).toggleClass("blurtext2");
        });

        $(".pledge1, .pledge2, .pledge3, .pledge4, .pledge5, .pledge6, .pledge7, .pledge8").hover(function(){
            $(this).toggleClass("blurtext2");
        });

        $(".dec1, .dec2, .dec3, .dec4, .dec5, .dec6, .dec7, .dec8, .dec9, .dec10, .dec11, .dec12, .dec13").hover(function(){
            $(this).toggleClass("blurtext2");
        });

        $(".const1, .const2, .const3, .const4, .const5, .const6, .const7, .const8").hover(function(){
            $(this).toggleClass("blurtext2");
        });

        /********* make variables **********/

        // $(".phrase").hover(function(){
        //     imgTop(); imgLeft(); imgSize();
        //     phraseTop(); phraseLeft(); phraseSize();
            
        //     // var t = Math.floor(Math.random() * 4) + 1;
        //     // var topClass = "topEven" + t;
        //     // $(".imgContainer").toggleClass(topClass);

        //     // var l = Math.floor(Math.random() * 4) + 1;
        //     // var leftClass = "leftEven" + l;
        //     // $(".imgContainer").toggleClass(leftClass);

        //     // var s = Math.floor(Math.random() * 3) + 1;
        //     // var sizeClass = "imgSize" + s;
        //     // $(".imgContainer").toggleClass(sizeClass);

        //     $(".variablesOverlay, .imgContainer, .phraseHeadingContainer").toggleClass("show");
        // });

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


    // }

    // if (clicked == true) {
    //     console.log("clicked is true if statement");
    // }
    // boxHeight();
    // boxWidth();
    // boxColor();
    // boxTop();
    // boxLeft();
    // loadImage();
    // imgTop();
    // imgLeft();
    // bodyTop();
    // bodyLeft();
    // bodyFont();
    // bodyWeight();

    // $('.imgContainer').click(function(){
    //     for (i = 1; i < 5; i++) {
    //         $(this).removeClass("effect" + i);
    //     }
    //     effect = Math.floor(Math.random() * 4) + 1;
    //     effectClass = "effect" + effect;
    //     $(this).toggleClass(effectClass);
    // });


    // $('.box').click(function(){
    //     boxTransform();
    // });

    // document.write("what up");


});
