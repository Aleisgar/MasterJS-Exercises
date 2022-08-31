var obj = {
    key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    let squaredNums = []
    if (Array.isArray(obj[key]) && obj[key].length > 0 && obj[key]) {
        squaredNums = obj[key].map(num => num * num)
        return squaredNums
    } else {
        return squaredNums
    }
}


var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]