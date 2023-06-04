/**
 * shift() and unshift() works at the starting of the given array. These two method is just like pop and push method.
   1.shift() method : The shift() method removes an element from the starting of the given array.
                      i.e., at the 0th index of the given array.
   2.unshift() method : The unshift() method add an element from the starting of the given array 
                        i.e., at the 0th index of the given array.
 */
//1.shift() method : removes 0th index value.
let cityName = ["Mumbai","Bangalore","Pune","Patna","New Delhi"];
console.log("Array before removing value from starting of array:");
console.log(cityName);

//using shift() to removes first value of array(starting of the given array).
cityName.shift();

console.log("Array after removing value from starting:");
console.log(cityName);

//21.unshift() method : It adds an element at the 0th index value(starting of the given array).
cityName.unshift('Muzaffarpur');

console.log("Adding Muzaffarpur to the array using unshift():");
console.log(cityName);
