// Primitives: (call by value: a copy is provided): NNBBSSU

// Non-Primitives: (call by reference: original memory reference is provided when passed or received): Arrays, Objects, Functions

// JavaScript is a dynamically typed language and will automatically detect the type of the data stored in the variable.

let names = ['Deependra', 'Aditya', 'Aarav', 'Ashutosh']

let obj = {
    name: "Deependra",
    age: 20,
    message: "Hello"
}

let greet = function(){
    console.log("I am greeting you");
}

console.log(typeof names) // object
console.log(typeof obj); // object
console.log(typeof greet); // function ----> Function Object