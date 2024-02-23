/**
 * slice() : The slice() method in JavaScript is used to extract a portion of given string and will return the extracted 
             part, and will not modify the original string. The method accept two parameters in it, first is starting index
             and second is (ending+1) index.  
 * Syntax : string.slice(startIndex, endIndex); Where startIndex is inclusive and endIndex is exclusive.  
            or, string.slice(startIndex, endIndex+1);
 */
//Example:1
let str = "tildetech and development";
let sliceStr = str.slice(5, 9); // extracting "tech"
console.log("Given string before extraction using slice: " + str);
console.log("String after extraction using slice method: ");
console.log(sliceStr);

//Using slice() method inside console.log() :
console.group(str.slice(5, 25));

//Original array is not modified
console.log("Original array is not modified: " + str);

//Example:2
let studentName = "Mrityunjay Kumar";
console.log("First name : ");
console.log(studentName.slice(0, 10));
console.log("Last name : " + studentName.slice(11, 16)); // Kumar

//Example:3
let schoolName = "Holy Mission SR SEC School";
/**
 * If the "startIndex" parameter is not provided in the slice() method for the given string, it will start 
   extracting characters from the beginning of the string up to the index specified by the endIndex parameter. 
 * Here, using undefined is equivalent ti not providing any parameter for the "startIndex". 
 * The use of "undefined" is just a more explicit way to indicate that the parameter is intentionally not provided. 
*/
console.log(schoolName.slice(undefined, 4));

/**
 * When the "endIndex" parameter is not provided in the slice() method for string, it automatically extracts all the 
   characters(items) from the specified "startIndex" to the end of the string as shown below.
 */
console.log(schoolName.slice(20));

/**
 * Whenever parameter of slice() method is set to negative for strings, it extract characters from the end of the string.
 *
 */
let cityName = "Muzaffarpur Smart City";
//both parameters are negative
let slicedCityName1 = cityName.slice(-10, -5); //smart
console.log(slicedCityName1);

//first parameter i.e., startIndex is negative
let slicedCityName2 = cityName.slice(-10, 22); //Smart City
console.log(slicedCityName2);

//if only endIndex parameter is set to negative
let slicedCityName3 = cityName.slice(0, -11); // Muzaffarpur
console.log("City Name: " + slicedCityName3);

let slicedCityName4 = cityName.slice(undefined, -11); // endIndex is provided and set to negative
console.log(slicedCityName4);
