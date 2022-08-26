const getElementsGreaterThan10AtProperty = (obj, key) => {
    let arr = []
    for (let num of obj[key]) {

        if (num > 10) arr.push(num)
    }
    return arr
}
var obj = {
    key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);