/*
Majorly we have two types of memory:
    
    1. Stack: used for primitive types and call is done by value which means that whenever it is called or asked for, a copy of that variable will be provided despite reference.

    2. Heap: used for non-primitive types and is based on call by reference which means that whenever asked for, the original memory refernce is passed and all the changes made in the object leads to updation in the original one.


*/

// For primitives

let myName = "Deependra"
let copyName = myName // copyName stores "Deependra"
console.log("Copy name then: ", copyName);

copyName = "Hello world"

console.log("My name: ", myName);
console.log("Copy name now: ", copyName);
console.log();


// For non-primitives

let names = ['Ram', 'Shyam', 'Mohan']
let namesCopy = names;
console.log('Names copy then: ', namesCopy);

namesCopy[2] = 'Radha' // changes made to original names array

console.log("Names: ", names);
console.log("Copy names now: ", namesCopy);