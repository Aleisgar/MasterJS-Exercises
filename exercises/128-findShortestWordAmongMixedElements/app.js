function findShortestWordAmongMixedElements(arr) {
   let shortest = arr.filter(element => typeof element == "string");
   let result = ""
 for(let i of shortest){
     if (i.length > result.length) {
       result = i }   
 
      } return result 
 
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'