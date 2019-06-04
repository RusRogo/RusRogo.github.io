// alert('11');

// alert('Number?');
// var num = prompt('?', '');
// if (num == 1) {
//   alert('Win!')
// }  else {
//   alert('Not!')
// };

var winNumber = 4;
var userNumber = prompt('num?', '0-20');

if (userNumber == winNumber) {
  alert('Win!')
}  else if (userNumber > 20 || userNumber < 0) {
  alert('<>')
}  else {
  alert('Number!')
}

