var obj = {
    key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    let oddNums = []
    if (Array.isArray(obj[key]) && obj[key].length > 0 && obj[key]) {
        for (let num of obj[key]) {
            if (num % 2 !== 0) oddNums.push(num)

        }
        return oddNums
    } else {
        return oddNums
    }
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]