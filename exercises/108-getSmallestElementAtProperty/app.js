var obj = {
    key: [2, 1, 5]
};

function getSmallestElementAtProperty(obj, key) {
    let arr = []
    if (Array.isArray(obj[key]) && obj[key] && obj[key].length > 0) {
        let min = Math.min(...obj[key])

        return min
    } else return arr
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1