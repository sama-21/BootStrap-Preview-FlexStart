// Navbar Bg
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > 300) {
            $(".navbar").css("background-color", "white");
        }
        else if(scroll < 100 ) {
            $(".navbar").css();
        }
        else {
            $(".navbar").css("box-shadow", "0px 0px 10px gray");
        }
    })
});
