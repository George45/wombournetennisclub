var bracketSlider = $('.carousel-data').on('init', function(slick) {
    multiSlideHeightFix(this);
}).slick({
    autoplay: false,
    infinite: false,
    prevArrow: $('.carousel-prev'),
    nextArrow: $('.carousel-next'),
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {breakpoint: 992, settings: {slidesToShow: 2, slidesToScroll: 1}},
        {breakpoint: 768, settings: {slidesToShow: 1, slidesToScroll: 1}}
    ]
}).on('beforeChange', function() {
    $('.carousel-data').removeClass('bracket-height-fix');
}).on('afterChange', function(slick, currentSlide, nextSlide) {
    multiSlideHeightFix(this);
});

function multiSlideHeightFix(slider) {
    let active = [];
    let tallest = 0;

    setTimeout(function() {
        $('.slick-track .slick-active', slider).each(function(item) {
            active[item] = $(this).outerHeight();
        });
        active.forEach(function(item) {
            if (item > tallest) {
                tallest = item;
            }
        });
        $('.slick-list', slider).height(tallest);
    }, 10);
    setTimeout(function() {
        $('.carousel-data').addClass('bracket-height-fix');
    }, 10);
}

$(window).on('resize', function() {
    multiSlideHeightFix(bracketSlider);
});