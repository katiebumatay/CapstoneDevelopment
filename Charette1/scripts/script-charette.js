function boxHeight() {
    var h = Math.floor(Math.random() * 3) + 1;
    var heightClass = "height" + h
    $(".box").addClass(heightClass);
};


function boxWidth() {
    var w = Math.floor(Math.random() * 3) + 1;
    var widthClass = "width" + w
    $(".box").addClass(widthClass);
};


function boxColor() {
    var c = Math.floor(Math.random() * 3) + 1;
    var colorClass = "color" + c
    $(".box").addClass(colorClass);
};

function boxTop() {
    var t = Math.floor(Math.random() * 3) + 1;
    var topClass = "top" + t
    $(".box").addClass(topClass);
};


function boxLeft() {
    var l = Math.floor(Math.random() * 3) + 1;
    var leftClass = "left" + l
    $(".box").addClass(leftClass);
};

function boxTransform() {
    var tr = Math.floor(Math.random() * 4) + 1;
    var transformClass;
    if (tr == 1) {
        transformClass = "skewX"
    }
    if (tr == 2) {
        transformClass = "skewY"
    }
    if (tr == 3) {
        transformClass = "stretchX"
    }
    if (tr == 3) {
        transformClass = "stretchY"
    }
    $(".box").addClass(transformClass);
};

function loadImage() {
    var imageNum = Math.floor(Math.random() * 9) + 1;
    var imgClass = "image" + imageNum
    $(".imgContainer").addClass(imgClass);
};

function imgTop() {
    var t = Math.floor(Math.random() * 3) + 1;
    var topClass = "top" + t
    $(".imgContainer").addClass(topClass);
};

function imgLeft() {
    var l = Math.floor(Math.random() * 3) + 1;
    var leftClass = "left" + l
    $(".imgContainer").addClass(leftClass);
};

function bodyTop() {
    var t = Math.floor(Math.random() * 3) + 1;
    var topClass = "top" + t
    $(".body").addClass(topClass);
};

function bodyLeft() {
    var l = Math.floor(Math.random() * 3) + 1;
    var leftClass = "left" + l
    $(".body").addClass(leftClass);
};


function bodyFont() {
    var f = Math.floor(Math.random() * 10) + 1;
    var fontClass = "font" + f
    $(".body").addClass(fontClass);
};

function bodyWeight() {
    var w = Math.floor(Math.random() * 2) + 1;
    var weightClass = "textWeight" + w
    $(".body").addClass(weightClass);
};


$(document).ready(function() {

    boxHeight();
    boxWidth();
    boxColor();
    boxTop();
    boxLeft();
    loadImage();
    imgTop();
    imgLeft();
    bodyTop();
    bodyLeft();
    bodyFont();
    bodyWeight();

    $('.imgContainer').click(function(){
        for (i = 1; i < 5; i++) {
            $(this).removeClass("effect" + i);
        }
        effect = Math.floor(Math.random() * 4) + 1;
        effectClass = "effect" + effect;
        $(this).toggleClass(effectClass);
    });


    // $('.box').click(function(){
    //     boxTransform();
    // });

    // document.write("what up");


});
