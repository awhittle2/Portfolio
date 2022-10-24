$(document).ready(function() {
    $("#javaDiv").css("display", "none");
    $("#luaDiv").css("display", "none");

    $("#kittyDiv").click(function(elt) {
        if($("#javaDiv").css('display') == 'none') {
            $("#javaDiv").css("display", "block");
            $("#luaDiv").css("display", "block");
        } else {
            $("#javaDiv").css("display", "none");
            $("#luaDiv").css("display", "none");
        }
    })
})