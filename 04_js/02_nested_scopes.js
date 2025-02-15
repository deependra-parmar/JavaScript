function one(){
    const username = "deependra";

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    
    two();
}

// one(); 

// regular functions
console.log(addOne(5)); // regular functions are hoistable
function addOne(number){
    return number + 1;
}



// function expression
// console.log(addTwo(5)); -- function expressions are never hoisted

const addTwo = function(number){
    return number + 2;
}