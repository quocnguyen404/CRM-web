$(document).ready(function(){

    $(".advertising-container").click(function(){
        $("#advertising-tab").fadeIn("1000");
    })

    $("#exit").click(function(){
        $("#advertising-tab").fadeOut("1000", function(){
            $(this).fadeOut("1000");
        })
    })

    $(".load-more").click(function(){
        $(this).hide();
    })

    
})