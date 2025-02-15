const marvel = ['thor', 'ironman', 'spiderman']

const dc = ['superman', 'flash', 'batman']

// concat function: returns new array
console.log(marvel.concat(dc));
console.log(marvel);

// spread operator
console.log([...marvel, ...dc])

console.log(Array.isArray("Deependra")); //false
console.log(Array.from("Deependra")); // creates array from name

