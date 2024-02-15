/**
 * Accessing Array Element: Using the array index notation, we can access an array element by specifying the index of 
                            the respective array item within square brackets following the array name.
 * In JavaScript, order of array elements is specified. That means, first elements is at index 0, second elements 
   is at index 1, third element is at index 2 and so on.
   
 * arr = ["first value", "second value", "third value","fourth value"] 
   pos =        0               1               2               3
 * If,   Element position -> n
   then, nth index        -> n-1
   Ex: second value position : 2
       then, its index : n-1 = 2-1 = 1
 */
let myCars = ["BMW", "Mahindra", "Audi", "Mercedes"];
console.log("My cars collections are:")
console.log(myCars[0]);
console.log(myCars[1]);
console.log(myCars[2]);
console.log(myCars[3]);
console.log(myCars[4]); //undefined , because item is the array has not fifth(at indx 4) item in it. 

let stateName = ["Bihar", "UP", "Gujrat", "Karnataka", "Assam"];
console.log(stateName[0]);  //Bihar
console.log(stateName[1]);  //UP
console.log(stateName[2]);  //Gujrat
console.log(stateName[3]);  //Karnataka
console.log(stateName[4]);  //Assam
console.log(stateName[5]);  //undefined, here array has only 4 values and fifth value is not defined.

let myStste = stateName[0];
console.log(myStste);

let bmwCar = ["BMW XM", 2.6, true, "Black", null, 120, undefined];
console.log("BMW model name: "+bmwCar[0]);
console.log(bmwCar[0]+" Price: "+bmwCar[1]+" Crore");
console.log("Is "+bmwCar[0]+" available: "+bmwCar[2]);
console.log("Colour of "+bmwCar[0]+": "+bmwCar[3]);
console.log("EMI Option for "+bmwCar[0]+": "+bmwCar[4]);
console.log("Average speed: "+bmwCar[5]+" KMPH");
console.log("Waiting Period: "+bmwCar[6]);  
