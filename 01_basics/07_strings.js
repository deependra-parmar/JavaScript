const myName = "Deependra";
const repoCount = 100;

// String Interpolation using template literals
console.log(`Hey there, I am ${myName} and I have ${repoCount} repositories`);

const myNewName = new String("Hello World!");

// logging strings with types
console.log(myName, typeof myName); // type is string
console.log(myNewName, typeof myNewName); // type is object

// methods and properties
console.log();
console.log("Length of the string is: ", myName.length);
console.log("Uppercase name is: ", myName.toUpperCase());
console.log("Char at index 2 is: ", myName.charAt(2));
console.log("First occurence of p is at index: ", myName.indexOf('p'));

/*
    1. substring(start,end)
    2. slice(start,end): works on -ve indices too
    3. trim(): removes whitespaces from start end end
    4. replace(): used to replace a substring with another substring.
    5. includes(substr): check whether the string contains the substring.
    6. split(): used to create array from string using a symbol or space as delimiter
*/

let message = "Hey there I am doing good and buying vegetables"
console.log(message.split(" "));