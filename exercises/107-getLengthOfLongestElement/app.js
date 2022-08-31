function getLengthOfLongestElement(arr) {

    let mxLen = 0
    for (let i = 0; i < arr.length; i++) {
        mxLen = Math.max(mxLen, arr[i].length);
    }
    return mxLen
}


var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5