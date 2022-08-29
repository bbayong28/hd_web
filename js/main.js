$(function () {
    ////////////////////////

    $('.top_close_btn').on('click', function () { 
        //$('.TopBanner').slideUp();
        $('.TopBanner').addClass('on')
    })

    $('.main_slider').slick({
        arrows: false,        
    });


    //////////////////////
})