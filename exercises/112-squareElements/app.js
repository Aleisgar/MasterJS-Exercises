function squareElements(arr) {
    let newArr = arr.map(element => element * element)
    return newArr
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]