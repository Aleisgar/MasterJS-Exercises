const countAllCharacters = (str) => {
    let obj = {}

    for (let i of str) {
        if (obj[i] === undefined) {
            obj[i] = 1
        } else {
            obj[i] += 1
        }
    }
    return obj
}
var output = countAllCharacters('banana');
console.log(output);