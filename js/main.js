$(function () {
   $(".slider__inner").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      infinite: true,
      asNavFor: ".slider-carousel__inner"
   });
});

$(".slider-carousel__inner").slick({
   slidesToShow: 6,
   slidesToScroll: 1,
   asNavFor: ".slider__inner",
   dots: false,
   infinite: true,
   centerMode: false,
   variableWidth: true,
   focusOnSelect: true
});