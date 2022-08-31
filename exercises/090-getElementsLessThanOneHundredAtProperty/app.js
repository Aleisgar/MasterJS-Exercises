const getElementsLessThan100AtProperty = (obj, key) => {
    let arr = [];
    for (let i of obj[key]) {
        if (i < 100) {
            arr.push(i)
        }
    }
    return arr
}
var obj = {
    key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);