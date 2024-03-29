/* 
    c)const: ->It is a keyword which is used to declare a variable.
             ->Using const keyword with variable, once value assign to variable then its value will not
               change throughout the program.
             ->Re-declaration of variable and re-assigning of variable is not allowed.  
*/

const num = 10;   //value of num can not be altered further throughout the program.
console.log(num);

//const num = 45;   //re-declarartion is not allowed.
//console.log(num);  //Error in linme 10 : num is already declared in line 8 

//a = 100;            //re-assigning is not allowed 

/*
 * Variable with "const" is a block-scoped. 
*/
{
  const Name = "Mrityunjay Kumar"
  console.log("Inside block:",Name);
}
//console.log("Outside block: "+Name); -> error : Name is not defined , Name is declared in above block-scope and it
                                              // is not allowed to use variable declared with const outside the block-scope.

