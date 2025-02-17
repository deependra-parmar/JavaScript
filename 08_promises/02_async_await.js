const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;

        error ? reject({success: false, message: "Error fetching data"}) :
            resolve({
                success: true,
                user: {
                    username: "Deependra Parmar",
                    email: "dparmar@gmail.com",
                    message: "Hello from Deependra Parmar"
                }
            });
        
    }, 1000);
});

// Async represents that the function with async performs an async operation and returns a promise and await waits until the promise is neither fulfilled nor rejected i.e. until its state is pending.

async function getData(){
    try{
        const response = await promise;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

getData();