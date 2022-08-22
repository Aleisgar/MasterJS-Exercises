function convertDoubleSpaceToSingle(str) {
    let splittedStr = str.split("  ")
    let newString = splittedStr.join(" ")
 return newString 
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"