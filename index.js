$(document).ready(function() {
    $("#javaDiv").css("display", "none");
    $("#luaDiv").css("display", "none");
    $(".timelinePar").css("display", "none");

    $("#kittyDiv").click(function(elt) {
        if($("#javaDiv").css('display') == 'none') {
            $("#javaDiv").css("display", "block");
            $("#luaDiv").css("display", "block");
        } else {
            $("#javaDiv").css("display", "none");
            $("#luaDiv").css("display", "none");
        }
    })

    $("#timeline-item").click(function(elt) {
        var userItem = $(this).attr("id");
        userPar = "#" + userItem + "p";

        if($(userPar).css('display') == 'none') {
            $(userPar).css('display', 'block');
        } else {
            $(userPar).css('display', 'none');
        }

        console.log(userPar);
    })

})