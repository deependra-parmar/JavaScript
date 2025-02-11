let score = '47'
let empty = null
console.log(score, typeof score);

// whenever you convert a string to number, you get NaN. In case the string is totally numerical, you get a number after conversion
// undefined equals NaN when converted to number
// null equals 0 when converted to number

// type of NaN is a number 🤣

let scoreInNumber = Number(score);
let emptyNumber = Number(empty);
console.log(scoreInNumber, typeof scoreInNumber);
console.log(emptyNumber, typeof emptyNumber);


// Boolean:
/*
    When 1 is converted to boolean: true
    when 0                        : false
    empty string                  : false
    non-empty string              : true
*/