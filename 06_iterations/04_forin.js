const obj = {
    name: "Deependra Parmar",
    class: "12th",
    age: 18,
    school: "ebsss"
}

for (const key in obj) {
    console.log(`${key} :--> ${obj[key]}`);
}


const arr = ['js', 'cpp', 'c', 'java', 'ruby', 'swift']

for (const index in arr) {
    console.log(`${index}: ${arr[index]}`);
    
}