// slick
$('.directions__slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 2,
  autoplay: true, 
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Открытие -закрытие header_menu - JQuerry green

$(document).ready(function() {
  // var menuBtn = $('.top__nav_btn');
  // var menu = $('.top__nav_menu');
  var left__sidebar_btn = $('.left__sidebar_btn');
  var left__sidebar_menu = $('.left__sidebar_menu');

  // menuBtn.on('click', function(event) {
  //   event.preventDefault();
  //   $(".top__nav_menu").fadeToggle(100)
  //   menu.toggleClass('top__nav_menu__active');
  // });
  left__sidebar_btn.on('click', function(event) {
    event.preventDefault();
    $(".left__sidebar_menu").slideToggle(400)
    left__sidebar_menu.toggleClass('left__sidebar_menu__active');
  });
});

// $(".top__nav_btn").click(function () {
//   $(".top__nav_menu").slideToggle(100);
// });

// Открытие -закрытие header_menu - JS native green
// Функция с подачей id элемента
// function popup_action(state, id) {
//   document.getElementById(id).style.display = state;
// };


// Открытие -закрытие header_menu
// var top__nav_btn = document.querySelector('.top__nav_btn');
// var top__nav_btn_close = document.querySelector('.top__nav_btn_close');

// var top__nav_menu = document.querySelector('.top__nav_menu');

// Открытие header_menu
// top__nav_btn.addEventListener('click', function() {
//   popup_action('flex', 'top__nav_menu');
// });

// if (top__nav_menu.style.display == 'flex') {
// top__nav_btn_close.addEventListener('click', function() {
//   popup_action('none', 'top__nav_menu');
// });
// };
