/**
 * IIFE : IIFE stands for Immediately Invoked Function Expression.
 * IIFE is a design pattern which is also known as Self-Executing Anonymous Function which consists of two major parts 
   as follows:
*/

//Ex : 1
//Regular function as IIFE function
let iife = (function(){
    console.log("IIFE : Immediately invoked function expression.")
})();

//Ex : 2
//Anonymous function as IIFE function.
(function(a,b){
    
    console.log('Addition of a and b : ');
    console.log(a+b);

})(15,87);
