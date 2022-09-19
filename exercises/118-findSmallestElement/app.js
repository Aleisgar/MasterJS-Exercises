function findSmallestElement(arr) {
    if (arr.length > 0) {
        let min = Math.min(...arr);
        return min
    } else return 0
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1