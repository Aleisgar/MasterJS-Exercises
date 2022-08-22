function getAllElementsButNth(arr, n) {
    arr.splice(n,n)
    return arr

}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']