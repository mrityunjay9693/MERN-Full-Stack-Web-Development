/**
 ******************************* Function as Values or Variable as Function **************************************
 * In JavaScript, functions are treated as first citizen in the language. 
 * In JavaScript, functions are not only the syntax, but it is also a values. We can assign whole function to a 
   a variable and that variable name can be used to display the result.
 * Functions can be assigned to a variable. 
 * In JavaScript, we can treat a function as a variable.
 
*/
//Ex:1
let greetWorld = function(){  // Anonymous function(a function without name), 
                              //which is assigned to the variable greetWorld.

    console.log("Hello,");
    console.log("Good morning.");

}
greetWorld(); // Here, the variable greetWorld is used to call the function, which is assigned to to greetWorld as values
              //as shown above.

//Ex:2
function square(x){
    return x*x;
}

let sq = square;
console.log(square(4));
console.log(sq(5));

// add1(2,3); // cannot access add1 before initialization.
// let add1 = function add(a,b){
//     console.log(a+b);
// }