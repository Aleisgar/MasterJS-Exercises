const computeAverageOfNumbers = (arr) => {
    let sum = 0
    
    arr.forEach(element => { sum += element})
       return sum/2
       
     }
   

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output);