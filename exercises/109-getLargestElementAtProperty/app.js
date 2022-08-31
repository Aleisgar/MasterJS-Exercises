var obj = {
    key: [1, 2, 4]
};

function getLargestElementAtProperty(obj, key) {

    if (Array.isArray(obj[key]) && obj[key] && obj[key].length > 0) {
        let max = Math.max(...obj[key])

        return max
    } else return undefined
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4