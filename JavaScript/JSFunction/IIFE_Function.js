/**
 * IIFE : IIFE stands for Immediately Invoked Function Expression.
 * IIFE is a design pattern which is also known as Self-Executing Anonymous Function which consists of 
   two major parts as follows:
*/

//Ex : 1
//Regular function as IIFE function
let iife = (function () {
  console.log("IIFE : Immediately invoked function expression.");
})();

//Ex : 2
//Anonymous function as IIFE function.
(function (a, b) {
  console.log("Addition of a and b : ");
  console.log(a + b);
})(15, 87);

let multiply = (function (num1, num2) {
    return num1 * num2;
})(20, 30);

//multiply(5,6); // An error will be here: multiply is not a function. Since it was alredy called at line 22 and the function ends

console.log(multiply);
