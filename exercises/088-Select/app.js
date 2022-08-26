const select = (arr, obj) => {
    let newObj = {}
    for (let key in obj) {
        console.log(key);
        if (arr.includes(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj

}

var arr = ['a', 'c', 'e'];
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 } 

//console.log(Object.values(obj))
//console.log(Object.entries(obj))