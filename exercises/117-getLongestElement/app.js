function getLongestElement(arr) {

    if (arr.length > 0) {
        return arr.reduce((acc, curr) => acc.length >= curr.length ? acc : curr)

    }
    return ""
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'