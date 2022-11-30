/*
    Type of variables in JS : 
    a)var  
    b)let  
    c)const
*/
/* 
    a)var: 
*/
var a;
console.log('Variable a declared with var is always : '+a); //undefined

a = 3;
console.log('Value of a : '+a); // a = 3

a = 'I am JavaScript.';
console.log(a); // I am JavaScript.

a = true;
console.log(a); // true

a = null;
console.log(a); // null

/*
    ---------------------------------------------------------------------------------------------
                                    Limitation of var type
    ---------------------------------------------------------------------------------------------
*/
/*
    a)Redeclarations: In below examples we have declared a variable 'Name' twice using var and 
                      this redeclaration of 'Name' is one of the issue with var type. 
*/
var Name = 'I am from Muzaffarpur.'; //value in Name i.e., 'I am from Muzaffarpur is replaced'
var Name = 'Bihar.';                // from this line i.e., 'Bihar' and output is : Bihar
console.log(Name);

/*
    b)Scoping : var is function-scoped as well as  global-scope. 
                variable with var type can be used outside the block-scope in which it is defined.
                It is one of the limitation/issue.
                Purpose/Objectives can easily expose of any program entity used with var as it can easily used outside
                block-scope. 
*/
if(10 % 2 == 0){
    var a = 'Divisible by 2';
    console.log(a);
}
console.log(a) // a is defined in if-block but it can be used outside the scope where it is defined.