function removeProperty(obj, key) {
    delete obj[key]
    return obj
}
let person = {
    name: 'Sam',
    age: 20
}
console.log(removeProperty(person, 'age'))