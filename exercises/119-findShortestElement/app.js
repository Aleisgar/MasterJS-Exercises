function findShortestElement(arr) {
    if (arr.length > 0) {
        return arr.reduce((acc, curr) => acc.length <= curr.length ? acc : curr)


    } else return ""
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'