// JS array are heterogenous, resizable and its elements are accessed via indices.
// Indexing is zero-based
// Arrays create shallow copies ie they share the safe reference wherever passed.


const arr1 = [0, 1, 2, 3, 4, 5]
const arr2 = new Array(1, 2, 3);

// console.log(arr1, arr2);

// Array methods
arr1.push(10);
console.log("10 pushed: ", arr1);

arr1.pop();
console.log("Element popped: ", arr1);

arr1.unshift(100); // 100 at index 0
console.log("100 unshifted: ", arr1);

arr1.shift();
console.log("Shifted: ", arr1);

console.log("arr1 includes 9: ", arr1.includes(9));

console.log("index of 9: ", arr1.indexOf(9));

console.log("Array joined to form string: ", arr1.join());

// slice extracts the new array from start of an index and end(excluded) keeping original array intact
console.log("Slice: ", arr1.slice(1, 3));
console.log("A: ", arr1);


// splice returns the array from start to end(included) and removes the range of elements from the original arraya resulting in updating the original array.
console.log("Splice: ", arr1.splice(1, 3));
console.log("B: ", arr1);
