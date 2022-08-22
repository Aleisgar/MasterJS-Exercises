var obj = {
    a: 8,
    b: 11,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    for (let i in obj) {
        if (obj[i] > num)
            delete obj[i]
    }
    return obj
}
removeNumbersLargerThan(5, obj);
console.log(obj);

// function removeStringValuesLongerThan(num, obj) {
//   for (let i in obj){
//    if (obj[i].length > num)
//     delete obj[i]
//    }
//   return obj 
// }
// var obj = {
//   name: 'Montana',
//   age: 20,
//   location: 'Texas'
// };
// removeStringValuesLongerThan(4, obj);
// console.log(obj);