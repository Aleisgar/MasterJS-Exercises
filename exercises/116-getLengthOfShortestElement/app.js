function getLengthOfShortestElement(arr) {
    if (arr.length > 0) {
        // return arr.reduce((acc, curr) => acc.length <= curr.length ? acc.length : curr.length)
        let min = Math.min(...arr.map(o => o.length));
        return min

    } else return 0
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3