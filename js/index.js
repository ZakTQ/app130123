$('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    adaptiveHeight: true
});

$(document).ready(function () {
    $('.burger-menu').click(function () {
        $('.sidebar').toggleClass('sidebar-active');
        $('.main').toggleClass('bg-shadow');
        $('.burger-menu').toggleClass('active');
    });
});

