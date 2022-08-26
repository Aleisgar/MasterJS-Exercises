const keep = (arr, item) => {

    let result = arr.filter(element => element === item)
    return result
}
var output = keep([1, 2, 3, 2, 1], 2)
console.log(output);