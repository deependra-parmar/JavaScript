function calculateTotalCart(...prices){
    let sum = 0;

    for(let x of prices)
        sum += x;

    return sum;
}

console.log("Total cart sum: ", calculateTotalCart(200, 400, 800));
