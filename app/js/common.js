$(document).ready(function(){

    $(".slide-container__slider").slick({
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
        dots:true,
        pauseOnDotsHover:true,
        cssEase:'linear',
        prevArrow:'<button class="prev-arrow-slide-container"> <span class="Thumbnail"></span></button>',
        nextArrow:'<button class="next-arrow-slide-container"> <span class="Thumbnail"></span></button>',
        dotsClass: 'slide-container-dots',
        // Custom Dots With Thumbnails Tool Tip
        customPaging : function(slider, i) {
            var thumbnail = $(slider.$slides[i]).data('thumbnail');
            return '<a href="javascript:void(0)"><img src="'+thumbnail+'"></a>';},
    });


    $('.room__header').slick({
        prevArrow:'<button class="slick-p"></button>',
        nextArrow:'<button class="slick-n"></button>'
    });

    $('.zitate-slider').slick({
        prevArrow:'<button class="slick-p"></button>',
        nextArrow:'<button class="slick-n"></button>',
        dotsClass: 'zitate-dots',
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2
    });

    $('.review-slider').slick({
        prevArrow:'<button class="slick-p"></button>',
        nextArrow:'<button class="slick-n"></button>',
        dotsClass: 'review-dots',
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2
    });



});