function getLargestElement(arr) {
 let largest = 0

 arr.forEach(element => {
   if(element>largest){largest=element}

 });return largest
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;