var obj = {
    key: 3
};

function getEvenLengthWordsAtProperty(obj, key) {
    // your code here

    let arr = []
    if (Array.isArray(obj[key])) {
        for (let i of obj[key]) {
            if (i.length % 2 == 0) arr.push(i)
        }
    }

    return arr
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']