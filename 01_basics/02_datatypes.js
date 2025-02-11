"use strict"; // treat whole code as new JS code

let num = 20
let nullDtype = null // its not undefined. Variable is defined but empty
let bool = true
let big = 209302930230932n
let sym = Symbol('0') // used for 
let str = "Hello"
let undef = undefined

// type of
console.table([typeof num, typeof nullDtype, typeof bool, typeof big, typeof sym, typeof str, typeof undef]) // Note that type of null is an object and undef is undefined

console.table([num, nullDtype, bool, big, sym, str, undef])