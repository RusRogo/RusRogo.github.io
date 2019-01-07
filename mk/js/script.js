
// slick
$('.directions__slider').slick({
  slidesToShow: 3,
  // autoplay: true, 
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1340,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  
// Стрелки слайдер
var slick_prev = document.querySelector('.slick-prev');
var directions__slider_prev = document.querySelector('.directions__slider_prev');
var slick_next = document.querySelector('.slick-next');
var directions__slider_next = document.querySelector('.directions__slider_next');
var event = new Event("click");

directions__slider_prev.addEventListener('click', function() {
  slick_prev.dispatchEvent(event);
});
directions__slider_next.addEventListener('click', function() {
  slick_next.dispatchEvent(event);
});

console.log('Fine!');