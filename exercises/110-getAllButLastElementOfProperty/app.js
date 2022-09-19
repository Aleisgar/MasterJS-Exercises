var obj = {
    key: [1, 2, 3]
};

function getAllButLastElementOfProperty(obj, key) {
    let newArr = []
    if (Array.isArray(obj[key]) && obj[key].length > 0 && obj[key]) {
        obj[key].pop()
        return obj[key]
    }
    return newArr
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]