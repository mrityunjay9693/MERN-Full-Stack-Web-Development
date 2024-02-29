/**
 * The substr() method in JavaScript is a String object method used for extracting a substring from a specified starting 
   index up to a specified length within a given string. The method is employed to obtain a portion of the string based on 
   the provided parameters, allowing developers to manipulate and work with substrings effectively.
 * Syntax: string.substr(starting_index, length); or,
           variableName.substr(starting_index, length);
 * The substr() method returns a substring that has been extracted from the given string, the starting_index and length to 
   extract.  
 * The substr() method does not chnage the value of the given string.
 * The substr() method is no longer recommended in JavaScript. That means it is deprecated. Instead, it is recommended to use 
   substring().
 */
let schoolName = "Holy Mission Sr Sec School";
let first_schoolName = schoolName.substr(0, 4); //After extracting a portion of a string (substring) 
console.log(first_schoolName);                  //and saving it into another variable
console.log(schoolName.substr(5, 7));
console.log(schoolName.substr(13, 2));
console.log(schoolName.substr(16, 3));
console.log(schoolName.substr(20, 6));

//If, only the starting index is specified, then it wil return a ortion of the string from the given specified index 
//up to the last character of the string.
let cityName = "Muzaffarpur";
let substr1 = cityName.substr(8);
console.log(substr1);
console.log(cityName.substr(0)); 

//If you specify "undefined" as starting_index, then the substr() method will treat it as, starting index is 0,
//effectively extracting the substring from the beginning of the given string.
let address = "Muzaffarpur, Bihar, India"
console.log(address.substr(undefined, 11));
console.log(address.substr(undefined, 18));
console.log(address.substr(undefined));
