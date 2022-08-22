function filterOddLengthWords(words) {
  let oddWords = words.filter(word => 
       word.length%2!==0)
   return oddWords
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']