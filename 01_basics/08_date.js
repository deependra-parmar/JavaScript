console.log(Date.now());
let date1 = new Date("2023-01-14");

// console.log(typeof date1)
// console.log(date1.toString());
// console.log(date1.toISOString());
// console.log(date1.toLocaleDateString());
// console.log(date1.toLocaleString());


let time1 = Date.now();
console.log(time1)
console.log(new Date(time1-date1).getMonth());
console.log(new Date(time1-date1).getDay());