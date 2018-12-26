// 1-ая JS функция на показ и скрытие popup окна

// Открытие popup
const button = document.getElementById('button');
button.addEventListener('click', function() {
   document.getElementById('wrap__popup').style.display = 'block';
});

// закрытие popup окна при клике вне его области
const overlay = document.getElementById('overlay');
overlay.addEventListener('click', function() {
   document.getElementById('wrap__popup').style.display = 'none';
});

// Закрытие popup при клике на "крестик"
const close_popup = document.getElementById('close_popup');
close_popup.addEventListener('click', function() {
   document.getElementById('wrap__popup').style.display = 'none';
});