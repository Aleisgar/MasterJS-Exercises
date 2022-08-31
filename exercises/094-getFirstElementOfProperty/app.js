const getFirstElementOfProperty = (obj, key) => {
    if (Array.isArray(obj[key]) && obj[key] && obj[key].length > 0) {
        return obj[key][0]
    } else return undefined
}
var obj = {
    nombre: "pepe"
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output);