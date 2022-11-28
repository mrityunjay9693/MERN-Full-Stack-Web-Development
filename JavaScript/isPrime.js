/* 
    The program is about to find out is given input in 'number' is prime or not.
*/
var flag = true;
var number = 13;

for (var i = 2; i * i < number; i++) {
  if (number % i == 0) {
    flag = false;
    break;
  }
}
if (flag == true) {
  console.log(number+' number is prime');
} else {
    console.log(number+' number is not prime');
}
