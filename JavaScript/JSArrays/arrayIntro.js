/**
 *Array:->In JavaScript, array is a single variable as well as the most basic data structure and a special type of 
          object to store and manipulate ordered collection of values of same or different datatypes. 
 *Syntax for Declaration of an Array: There are two ways for creating an empty array :
                                      1] let arrayName = [];
                                      2] let arrayName = new Array(); 
 */
//Array Declaration:
let arr = []; //Array without an element.
console.log("Empty array:");
console.log(arr);

//Array's elements are of same data-type.
let carsName = ["BMW", "Toyota", "Audi", "Mustang"];
console.log(carsName);

//Array's elements are of different data-type.
//In JavaScript, you can store different values of different data-types.
let bmwCar = ["BMW XM", 2.6, true, "black", null, 120, undefined];
console.log(bmwCar);

//Accessing array's elements : We can access an array element sui