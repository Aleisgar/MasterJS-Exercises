function filterEvenElements(arr) {
    let newArr = arr.filter(element => element % 2 === 0)
    return newArr
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]