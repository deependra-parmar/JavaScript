// Object defined using constructor are singleton in nature while object literals are not

// using a symbol as key
const sym = Symbol("key1");

const obj = {
    name: "Deependra", 
    "full name": "Deependra Parmar",
    [sym]: "mykey1",
    age: 20,
    location: "India", 
    email: "d@gmail.com",
    isLoggedIn: false
}

// console.log(obj);
// console.log(obj["name"])
// console.log(obj["full name"]);
// console.log("My symbol: ", typeof obj[sym], obj[sym]);


// changing the values
// obj.email = "dp@gmail.com"
// // Object.freeze(obj);
// obj.email = "deependra@gmail.com"
// console.log(obj.email); // email not updated

obj.greet = function(){
    console.log("Hello obj");
}

console.log(obj.greet());
