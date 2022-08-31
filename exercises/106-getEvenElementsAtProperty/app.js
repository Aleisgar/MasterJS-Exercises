var obj = {
    key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    let newArray = []
    if (Array.isArray(obj[key]) && obj[key].length > 0 && obj[key]) {
        for (let num of obj[key]) {

            if (num % 2 == 0) {
                newArray.push(num)

            }

        }
        return newArray


    } else return newArray
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]