// Write your function here
const findMaxLengthOfThreeWords = (str1, str2, str3) => {
    if (str1.length > str2.length && str1.length > str3.length) {
        return str1.length
    } else if (str2.length > str1.length && str2.length > str3.length) {
        return str2.length
    } else return str3.length
} // Write your function here

let output = findMaxLengthOfThreeWords('Toyota', 'Honda', 'Chevrolet');
console.log(output);