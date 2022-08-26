const computeAverageOfNumbers = (arr) => {
    let sum = 0

    arr.map(element => {
        sum += element
    })
    return sum / arr.length

}


var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output);