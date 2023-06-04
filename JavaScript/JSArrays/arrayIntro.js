/**
 *Array:->In JavaScript, array is a single variable as well as the most basic data structure and a special type of 
          object to store and manipulate ordered collection of values of same or different datatypes. 
        ->An array is an ordered collection of values.
        ->Arrays in JavaScript are dynamic in nature i.e., JavaScript arrays are resizable. They can grow or shrink
          as needed and hence, there is no need of declaring its fixed size while creating the array.
        ->JavaScript arrays are not associative arrays in nature.
        ->Ecavh value in JavaScript array is called an element and each element has a numeric position in the array, 
          known as its index.
        ->JavaScript arrays are zero-based indexing and 32-bit indexes. The first element is at index 0, second is at 2
          and so on. The highest possible index is 4294967294(2^32-2).
 
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
