function addToBack(arr, element) {
 return arr.concat(element);
}

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]