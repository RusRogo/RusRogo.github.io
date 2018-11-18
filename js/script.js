$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 200);
return false;
});
 
});
//green My work

// $('.scrollup').click(function(){
// $("html, body").animate({ scrollTop: 0 }, 200);
// return false;
// });

// document.getElementById('scrollup').onclick = function() {
// function (t, e);
// }
