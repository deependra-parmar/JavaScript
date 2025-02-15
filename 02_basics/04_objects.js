const o1 = {
    1: 'a',
    2: 'b'
}

const o2 = {
    3: 'a',
    4: 'b'
}

const o3 = {
    5: 'a',
    6: 'b'
}

// Object.assign()
console.log(Object.assign({}, o1, o2, o3));
console.log({...o1, ...o2, ...o3});

// Object.keys(obj), Object.keys(obj) return values in the form of array
// Object.entries(obj): return pairs of key-value in the form of array