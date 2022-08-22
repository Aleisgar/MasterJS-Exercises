function removeStringValues(obj) {
    // your code here
    for (let key in obj) {
        typeof obj[key] === "string" ? delete(obj[key]) : null
    }
}
var obj = {
    name: 'Sam',
    age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }