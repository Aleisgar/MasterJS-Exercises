const getOddLengthWordsAtProperty = (obj, key) => {
    let result = obj[key].filter(element => element.length % 2 !== 0)
    return result
}
var obj = {
    key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output)