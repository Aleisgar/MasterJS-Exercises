function getLongestWordOfMixedElements(arr) {
    let shortest = arr.filter(element => typeof element == "string");
    let result = ""
  for(let i of shortest){
      if (i.length > result.length) {
        result = i }   
  
       } return result 
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'