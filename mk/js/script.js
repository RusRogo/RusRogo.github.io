// slick
$('.directions__slider').slick({
  slidesToShow: 3,
  autoplay: true, 
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
var tver = document.querySelector('.tver');
var moscow = document.querySelector('.moscow');
var spb = document.querySelector('.spb');
var novg = document.querySelector('.novg');
var pskov = document.querySelector('.pskov');
var jarosl = document.querySelector('.jarosl');
var vlad = document.querySelector('.vlad');
var nnov = document.querySelector('.nnov');
var kaz = document.querySelector('.kaz');

// Открытие 1-го таба
tver.addEventListener('click', function() {
  openCity(event, 'tver_content');
});
// Открытие 2-го таба
moscow.addEventListener('click', function() {
  openCity(event, 'moscow_content');
});
// Открытие 3-го таба
spb.addEventListener('click', function() {
  openCity(event, 'spb_content');
});
// Открытие 4-го таба
novg.addEventListener('click', function() {
  openCity(event, 'novg_content');
});
// Открытие 5-го таба
pskov.addEventListener('click', function() {
  openCity(event, 'pskov_content');
});
// Открытие 6-го таба
jarosl.addEventListener('click', function() {
  openCity(event, 'jarosl_content');
});
// Открытие 7-го таба
vlad.addEventListener('click', function() {
  openCity(event, 'vlad_content');
});
// Открытие 8-го таба
nnov.addEventListener('click', function() {
  openCity(event, 'nnov_content');
});
// Открытие 9-го таба
kaz.addEventListener('click', function() {
  openCity(event, 'kaz_content');
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
