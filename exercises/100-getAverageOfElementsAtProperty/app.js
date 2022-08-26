function getAverageOfElementsAtProperty(obj, key) {
    let sum = 0


    for (let num of obj[key]) {
        console.log(num);
        sum += num
    }
    if (sum !== 0) return sum / obj[key].length
    else return 0

}
var obj = {
    key: [1, 2]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);