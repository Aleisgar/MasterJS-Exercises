function addToBackOfNew(arr, element) {
   arr.push(element)
   return arr
   
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]