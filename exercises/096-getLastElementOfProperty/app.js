const getLastElementOfProperty = (obj, key) => {

    if (Array.isArray(obj[key]) && obj[key].length > 0 && obj[key]) {
        return obj[key].pop()
    } else return undefined
}
var obj = {
    key: [1, 2, 5, 7, 4, 3, 9]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5