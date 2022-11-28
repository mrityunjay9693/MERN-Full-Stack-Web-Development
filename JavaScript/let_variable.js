/* 
    To address the issue of 'redeclarations' and improve code quality and maintainability, modern JavaScript 
    introduced let. Using let variable declarations enforces block scoping and prevents redeclarations within 
    the same scope.
    b)let 
*/
/*
    //var redeclares the variable with the same name and this creates a confusion and ambiguity.
    var no = 5;
    var no = 7; // 7 is assigns in variable 'no' and replace value 5.
    console.log(a)
*/

let greet = 'Hello';
console.log(greet)     // will prints 'Hello'

/*
let greet = 'Welcome to tilde!'  // Error : variable greet has already been declared(Redeclaration error)
console.log(greet)               //let won't allow to redeclaration of variable
*/

/*
 In below example, variable name is declared twice with var and let respectively. Here there will be an error 
 that variable 'naame' has been laready declared. This is because 'let' is aware about the redeclaration of 
 'naame' and it is knowing that 'naame' is already deckared in line number 27.
*/
//var naame = 'Mrityunjay kumar.'
let naame = 'Mrityunjay kumar.';
console.log(naame); 

