const email = "hello@gmail.com"

if(email)
    console.log("Email present");
else
    console.log("Email absent");
    

// Falsy values: false, 0, -0, 0n, null, undefined, NaN
// else all are truthy values: "0", "false"," ",[], {}, function(){}, "hello", true, 1, 2, 3, 23840932840n

// Nullish Coalescing Operator: ?? : null undefined: a type of fallback in order to assign a legitimate value to a variable and get rid of null and undefined

let val;
// val = null ?? undefined;
// val = null ?? 10
// val = undefined ?? 20 
val = null ?? undefined ?? 10 ?? 20

console.log(val);

// Ternary Operator: ? ---> other way of using if else

true ? console.log("I am true") : console.log("I am false");