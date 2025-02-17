/*
    Promises: The Promise Object represent the eventual completion (or failure ) of an async operation and its resulting value.

    Promise has three different states:
        1. pending: intial state i.e. neither fulfilled nor rejected.
        2. fulfilled: async operation completed successfully
        3. rejected: async operation failed the completion.
    
    In order to understand how to consume a promise, let's start with creating a promise.
*/

// Creating a promise
const promise = new Promise((resolve, reject) => {
    // Do async calls here: DB calls, N/w call, fetch, setTimeOut, etc
    setTimeout(() => {
        console.log("Async Task is completed");
        resolve({
            username: "Deependra Parmar",
            email: "dparmar@gmail.com",
            message: "Hello from Deependra Parmar"
        }); // if you resolve, then only .then() will run
    }, 1000);
});

// Consuming a promise
promise.then((user) => {
    console.log("Promise returned data: ", user);
    return user.username;
}).then((username) => {
    console.log("USERNAME IS: ", username);
}).catch((error) => {
    console.log("Error fetching data");
}).finally(() => {
    console.log("The Promise is either resolved or rejected");
})