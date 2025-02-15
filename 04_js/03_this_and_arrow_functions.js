// this: provides access to current context

const user = {
    username: "Deependra",
    price: 999,
    welcome: function(){
        console.log(`Welcome!, ${this.username}`);
        // console.log(this);
    }
}

// user.welcome(); // current context: user object
user.username = "Deependra Parmar";
// user.welcome(); // current context: global context

// console.log(this); // gives {}


function test(){
    // console.log(this); prints a lot of functions for regular functions
    const username = "helloworld"
    // console.log(this.username); this is not available in functions
}

// Arrow functions

const hello = () => {
    console.log(this); // don't get anything in this in arrow functions
    
}
hello();

// implicit return arrow function
const addNum = (n1, n2) => n1+n2;

console.log(addNum(10,20));
