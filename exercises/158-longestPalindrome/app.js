function findLongestPalindrome(sentence) {
  
  let splittedSentence = sentence.split("");
  return splittedSentence;
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
}

function reverseString(string) {
  let reversedString = splittedSentence.reverse()
  return reversedString
}

function isPalindrome(word) {

  // hint: you can detect palindromes by comparing a string to its reverse
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}
let output = findLongestPalindrome("My dad is a racecar athlete"); 
console.log(output);