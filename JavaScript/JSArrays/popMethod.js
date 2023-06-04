/**
 * pop() method : The pop() method is used to removes the last element of a given array.
 * pop() method does not use index.
 */
//Ex 1:
//removing last element of the array using pop() method
let myCar = ["BMW", "AUdi", "Mercedes", "Alto", "Maruti", "Nexon", "Mahindra"];

console.log("Array before using pop() method:");
console.log(myCar);

//pop() method
myCar.pop();

console.log("Array after using pop() method:");
console.log(myCar);

//let suppose I  want to see the element which is removed by busing pop() method. Then we just need to do one thing 
//that, just store it into a new variable. 
//Like this:-> newVariable = arrayName.pop(); and just print the value of newVariable as shown below:

let removedCar = myCar.pop();
console.log("Removed car: "+removedCar);
console.log("Array after using pop() method:");
console.log(myCar);

