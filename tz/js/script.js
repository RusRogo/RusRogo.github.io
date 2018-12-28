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
