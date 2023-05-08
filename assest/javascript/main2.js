


$(document).ready(function(){

    $(".advertising-container").click(function(){
        $("#advertising-tab").animate({
            width: 'toggle'
        })
    })

    $("#load-more-btn").click(function(){
       $(".load-more-content1").fadeIn();

        $("#load-more-btn").click(function(){
            $(".load-more-content2").fadeIn();

            $("#load-more-btn").click(function(){
                $(".load-more-content3").fadeIn();
            })
        })
    })

    $("#sub-sologan > .sub-btn-area").click(function(){
        $(".sub-input").focus();
    })

    $(".subscribe-btn").click(function(){
        $(".sub-input").focus();
    })

})