const removeElement = (arr, discarder) => {
    let newArr = arr.filter(element => element !== discarder)
    return newArr
}
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);