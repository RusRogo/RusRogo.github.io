
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
var ev = new Event("click");

directions__slider_prev.addEventListener('click', function() {
  slick_prev.dispatchEvent(ev);
});
directions__slider_next.addEventListener('click', function() {
  slick_next.dispatchEvent(ev);
});


// onclick for tabs green
var london = document.querySelector('.london');
var paris = document.querySelector('.paris');
var tokyo = document.querySelector('.tokyo');
// Открытие 1-го таба
london.addEventListener('click', function() {
  openCity(event, 'London');
});
// Открытие 2-го таба
paris.addEventListener('click', function() {
  openCity(event, 'Paris');
});
// Открытие 3-го таба
tokyo.addEventListener('click', function() {
  openCity(event, 'Tokyo');
});

// tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
