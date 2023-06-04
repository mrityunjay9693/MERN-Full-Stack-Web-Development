/**
 * In JavaScript, we can also add an element/value or element/values at the specified position/index.
 */
//Ex:1
// Adding a value at the position very next to last element/value
let studentName = [
  "Mrityunjay Kumar",
  "Mrinal Sauraj",
  "Vicky Raj",
  "Sushma Swaraj",
];
studentName[4] = "Nisha"; // "Nisha" is added at position 4 
console.log(studentName);

//Ex:2
//We can also add an element at any position after the last element/value. This is shown below:
sportsName = ["Cricket", "Football", "Kabaddi", "Chess"];
console.log(sportsName);
sportsName[8] = "Hockey";
console.log(sportsName); //['Cricket','Football','Kabaddi',Chess',<4 empty items>,'Hockey']
