var obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    if (Array.isArray(obj[key]) && obj[key].length > 0 && obj[key]) {
        for (let element of obj[key]) {
            if (element === obj[key][index]) {
                return element
            } else return undefined
        }

    } else return undefined
}
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output)