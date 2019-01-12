// 1-ая JS функция на показ и скрытие popup окна

// Функция с подачей id элемента
function popup_action(state, id) {
  document.getElementById(id).style.display = state;
}

// Открытие popup
document.getElementById('button').addEventListener('click', function() {
  popup_action('block', 'wrap__popup');
});

// закрытие popup окна при клике вне его области
document.getElementById('overlay').addEventListener('click', function() {
  popup_action('none', 'wrap__popup');
});

// Закрытие popup при клике на "крестик"
document.getElementById('close_popup').addEventListener('click', function() {
  popup_action('none', 'wrap__popup');
});

// Плавное появления блоков на странице
const btn = document.querySelector('#run-animation');
const items = document.querySelectorAll('.block');
items.forEach((item, index) => {
  // интервал 0,3 секунды
  item.style.transitionDelay = (index/3) + 's';
})
btn.addEventListener('click', function() {
   items.forEach((item) => {
     // добавление класса блокам
     item.classList.add('active');
   })
})

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

