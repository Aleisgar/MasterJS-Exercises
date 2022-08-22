// const getAverageOfElementsAtProperty = (obj,key) => {
//   let average = 0
//   if (Array.isArray(obj[key]))
//   if (obj[key].length!==0) {
//      for (let value of obj[key]){
//        average += value
//        }
//    average = average/obj[key].length
  
// }
// return average
// }

const getAverageOfElementsAtProperty = (obj,key) => {
  let total = 0;
  let array = obj[key];
  if (Array.isArray(array)) {
    if (array.length !==0) { 
      total = (array.reduce((a,b) => a + b, 0))/array.length
    }
  }
  return total
} 
var obj = {
    key: [2, 2, 10],
    name: "Paco"
  };

  var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); 