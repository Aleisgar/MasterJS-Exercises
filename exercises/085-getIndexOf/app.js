const getIndexOf = (str1, str2) => {
    // let indexes = []
    // for (let i = 0; i < str2.length; i++) {
    //     if (str2[i] === str1) {
    //         return i
    //     }
    // }
    // return -1
    let sum = -1;

    for (i in str2) {
        if (str1 === str2[i]) {
            sum = i;
            return Number(sum);
            break;
        }
    }
    return sum
}
var output = getIndexOf('m', 'I am a hacker');
console.log(output);