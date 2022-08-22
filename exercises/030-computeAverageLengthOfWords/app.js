const computeAverageLengthOfWords = (word1,word2) => {
    let lengthOfWords = word1.length + word2.length
    let averageLengthOfWords = lengthOfWords/2
    return averageLengthOfWords
}

console.log(computeAverageLengthOfWords('Paco','Perez'))