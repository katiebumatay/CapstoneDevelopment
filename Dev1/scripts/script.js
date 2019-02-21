

// function loadImage() {
//     var imageNum = Math.floor(Math.random() * 9) + 1;
//     var imgClass = "image" + imageNum
//     $(".imgContainer").addClass(imgClass);
// };

function imgTop() {
    var t = Math.floor(Math.random() * 4) + 1;
    var topClass = "topEven" + t;
    $(".imgContainer").toggleClass(topClass);
};

function imgLeft() {
    var l = Math.floor(Math.random() * 4) + 1;
    var leftClass = "leftEven" + l;
    $(".imgContainer").toggleClass(leftClass);
};

function imgSize() {
    var s = Math.floor(Math.random() * 3) + 1;
    var sizeClass = "imgSize" + s;
    $(".imgContainer").toggleClass(sizeClass);
};

function phraseSize() {
    var s = Math.floor(Math.random() * 3) + 1;
    var sizeClass = "phraseSize" + s;
    $(".phraseHeading").toggleClass(sizeClass);
};

function phraseTop() {
    var t = Math.floor(Math.random() * 4) + 1;
    var topClass = "topOdd" + t;
    $(".phraseHeadingContainer").toggleClass(topClass);
};

function phraseLeft() {
    var l = Math.floor(Math.random() * 4) + 1;
    var leftClass = "leftOdd" + l;
    $(".phraseHeadingContainer").toggleClass(leftClass);
};



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

    $(".phrase").click(function(){
        if (clicked == false) {
            clicked = true;
            // console.log("phrase clicked, clicked = " + clicked);

            // $("h1").hover(function(){
            //     $(this).toggleClass("blurtext");
            // });

            // $(".sectionHeader").hover(function(){
            //     $(this).toggleClass("blurtext2");
            // });

            // $(".pledge1, .pledge2, .pledge3, .pledge4, .pledge5, .pledge6, .pledge7, .pledge8").hover(function(){
            //     $(this).toggleClass("blurtext2");
            // });

            // $(".dec1, .dec2, .dec3, .dec4, .dec5, .dec6, .dec7, .dec8, .dec9, .dec10, .dec11, .dec12, .dec13").hover(function(){
            //     $(this).toggleClass("blurtext2");
            // });

            // $(".const1, .const2, .const3, .const4, .const5, .const6, .const7, .const8").hover(function(){
            //     $(this).toggleClass("blurtext2");
            // });

            // /********* make variables **********/

            // $(".phrase").hover(function(){
            //     imgTop(); imgLeft(); imgSize(); phraseTop(); phraseLeft(); phraseSize();
            //     $(".imgContainer, .phraseHeadingContainer").toggleClass("show");
            // });
        }
        else if (clicked == true) {
            clicked = false;
            console.log("phrase clicked, clicked = " + clicked);
        }
    });


    if (clicked == false) {

        console.log("enter if statements to hover functions");

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

        $(".phrase").hover(function(){
            imgTop(); imgLeft(); imgSize(); phraseTop(); phraseLeft(); phraseSize();
            $(".imgContainer, .phraseHeadingContainer").toggleClass("show");
        });
    }

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
