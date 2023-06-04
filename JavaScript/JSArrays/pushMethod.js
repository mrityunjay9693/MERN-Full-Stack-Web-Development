/**
 * push() method: The push() method is used to add an element at the end of the given array.
 * The push() method asks for the parameter within its parenthesis so that, value in the parameter 
   can be added to the array using push() method.
 */

//Adding an element at the end of the given array using push() method.
let sportName = ["Cricket", "Football", "Hockey", "Chess", "Shooting"];
console.log("Array before push:");
console.log(sportName);

//adding an element.
sportName.push("Baseball");
sportName.push('Long jump');

console.log("Array after push(adding an element)");
console.log(sportName);

let studentName = ["Mrityunjay", "Sushma", "Sangitha", "Arnav"];
console.log(studentName);

//adding a value
studentName.push('Vicky'); 
console.log(studentName);

studentName.push('Mrinal Sauraj');
console.log(studentName);
