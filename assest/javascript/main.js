$(document).ready(function(){

    var dnone = "d-none";

    $(".advertising").click(function(){
        $("#tab").fadeIn();
    });

    $(".bi-exclamation-circle").click(function(){
        $("#tab").fadeIn();
    });

    $("#exit").click(function(){
        $("#tab").fadeOut();
    });

    $("#video-player").autoplay = true;

});
