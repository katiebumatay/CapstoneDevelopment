

$(document).ready(function() {
    console.log("using the script for both");
    console.log(articleLink);
    console.log(currentView);


    if(currentView == "view2") {
        console.log("myPC had class view2");
        $(".archive-container").addClass("view2").removeClass("view1");
        $("#pledgeBar").removeClass("selected");
        $("#declarationBar").addClass("selected");
        $(".previous").removeClass("hideArrow");
    }
    else if(currentView == "view3") {
        $(".archive-container").addClass("view3").removeClass("view1");
        $("#pledgeBar").removeClass("selected");
        $("#constitutionBar").addClass("selected");
        $(".previous").removeClass("hideArrow");
        $(".next").addClass("hideArrow");
    }




});