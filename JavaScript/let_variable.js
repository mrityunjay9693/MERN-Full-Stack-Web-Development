/* 
   1.To address the issue of 'redeclarations' and improve code quality and maintainability, modern JavaScript 
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
 In below example, variable name is declared twice with var and let respectively. Here there will be an 
 error that variable 'naame' has been laready declared. This is because 'let' is aware about the 
 redeclaration of 'naame' and it is knowing that 'naame' is already deckared in line number 27.
*/
//var naame = 'Mrityunjay kumar.'
let naame = 'Mrityunjay kumar.';
console.log(naame); 

/* re-assigning is allowed for variables using 'let'*/
let Name = 'Bihar';
Name = "Muzaffarpur"
console.log(Name) // Output : Muzaffarpur. Bihar is replaced with Muzaffarpur as we have reassigned.

/* 
-------------------------------------------------------------------------------------------------------------------
                                              Scoping
-------------------------------------------------------------------------------------------------------------------
*/

/*
    2.We all aware about the fact that 'var' type can be accessed outside the block-scope in which it is defined
      To overcome this limitation of var, let is introduced.
      ->let keyword is a block-scope. Whereas var is a function-scope and global-scope.
      ->let only accessed in the block scope where it is defined and not to the outside of the scope


*/

// if(10 % 2 == 0){
//     var a = 'Divisible by 2';
//     console.log(a);
// }
//console.log(a); // This is a is declared in if-block but can be accesswd outside the block as var do not have a block-scope.

/* ->let is a block-scope and let can only be accesswd within its block scope where it is defined.*/

if(10%2 == 0){
    let a = 'divisible by 2';
    console.log(a);
}
/*console.log(a); */ //error: a is not defined. We have this error is because let is a block-scope keyword which can be only
                     //        accessed within its scope where it is defined/declared.It will not use outside the scope.


if(true){
    let fname = "Mrityunjay"
    let Sname = "Kumar"
    console.log(fname);
}
console.log(Sname); // Error : It is not defined. Sname is already defined in above block and cannot be accessed outside it. 

console.log("hye")

/* print even number between 1 to 10 numbers. */ 
console.log("even number");                    
for( let i = 2; i <=10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
    
}
