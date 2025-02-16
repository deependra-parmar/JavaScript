// Why do we need special methods like map, filter, reduce?
// Because forEach doesn't return anything

const languages = ['js', 'c', 'cpp', 'java', 'html', 'ruby', 'swift', 'go', 'rust']

const values = languages.forEach((element) => {
    // console.log(element);
})
// console.log(values); gives undefined which means return is not allowed

// -----------------------------

// for solving the purpose of returning something, we have special functions like map, filter and reduce.....

const num = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10]

// filter
const filteredNum = num.filter((num) => num > 4);
// console.log(filteredNum);


// -----------------------------


// map: performs operation using callback to every element

const addedNums = num.map(n => n+10);
// console.log(addedNums);

// We can do chaining in these methods like map().map().filter()

const chainedResult = num.map(n => n*10) // returns result with n*10 > n+1 with n>50
                         .map(n => n+1)
                         .filter(n => n > 50)

// console.log(chainedResult);


// -----------------------------

// reduce: used to perform operation using reducer function and return a single output or value by completing the operation on the whole array

/*  mdn syntax of reduce: 

const arr = [1, 2, 3, 4]
const initialValue = 0

const result = arr.reduce((accumulator, currentValue) => 
    accumulator + currentValue, initialValue
)

Firstly, intialValue is passed to accumulator and then the subsequent results are stored in the accumulator

*/

const result = num.reduce((acc, curr) => {
    // console.log(`accumulator: ${acc} , current: ${curr}`);
    return acc + curr;
}, 0);

// console.log(result);