// const: used to define read-only variables. They cannot be changed once initialized

const accountId = 1038430
let accountName = "Deependra Parmar"
var accountPassword = "hello@123"
accountCity = "Dewas"
let accountState; // default: undefined

// accountId = 928962893; const assignment not allowed
accountName = "Deependra"
accountPassword = "092343"
accountCity = "Indore"

// changing the values in scopes

{
    accountPassword = "hello@123"
    accountName = "Deependra Parmar"
}

console.table([accountId, accountName, accountPassword, accountCity, accountState]);