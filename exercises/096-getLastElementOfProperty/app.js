const getLastElementOfProperty = (obj, key) => {

    let lastNum = obj[key][key.length - 1]
    console.log(lastNum);

    if (Array.isArray(obj[key])) return lastNum
}
var obj = {
    key: [1, 2, 5, 7, 4, 3, 9]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5