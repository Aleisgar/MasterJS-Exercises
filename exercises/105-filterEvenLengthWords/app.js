function filterEvenLengthWords(words) {
    let evenWords = words.filter(item => item.length % 2 == 0)
    return evenWords
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']