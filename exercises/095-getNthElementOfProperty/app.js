const getNthElementOfProperty = (obj, key, num) => {
    if (Array.isArray(obj[key])) return obj[key][num]

}
var obj = {
    key: "string"
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output);