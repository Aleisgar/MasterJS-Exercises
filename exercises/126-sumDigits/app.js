function sumDigits(num) {
  let numToString = String(num)
  let splitNum = numToString.split("")
   let sum = 0
   splitNum.forEach(element => {
     Number(splitNum)
      sum += element
  });
  return sum
}
var output = sumDigits(-316);
console.log(output); // --> 4