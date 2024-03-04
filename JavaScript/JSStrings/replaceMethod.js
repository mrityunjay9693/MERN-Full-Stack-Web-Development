/**
 * replace(): The method is used to replace a specified portion/substring from the given string with another provided substring.
              The replace method expects two parameters, first one is specified substring which has to be replaced(specifiedValue)
              and second parameter is the one by which the specified substring will be replaced(replaceValue).
 * Syntax: givenString.replace(specifiedValueToReplace, replaceValue);
 * The replace() method will not modify the original string.
 * The replace() method returns a new string with the replacements
 */
//Let's suppose in the below given string, I mentioned my wrong state name. I want to replace the specified state with my 
//original state name i.e., Bihar. Let's do this.
let myIntroduction = "I am Mrityunjay Kumar, belongs to Karnataka state.";
let newIntroduction = myIntroduction.replace("Karnataka", "Bihar"); // Karnataka will be replaced by Bihar
console.log(newIntroduction);

console.log("Original String:" + myIntroduction + ", and it is not yet modified by replace() method.");
console.log(newIntroduction + " The new string which is returned by replace() method.");

/**
 *Suppose we want to return the modified string after replacement by using the replace() method in the original string. 
  In that case, we will directly use the original string's variable to store the result of the replacement operation 
 *In the below example, by mistake house name is provided instaed of office building name. 
  Let's replace house name with office building name.
 */
let workPlace = "My office is located on third floor and building name is Krishna Tower";
console.log(workPlace.replace("Krishna Tower", "Green Park"));
 