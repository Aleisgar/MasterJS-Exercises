function countNumberOfKeys(obj) {
   let counter = 0;
   for (let key in obj){
       counter++
   }
  return counter 
}
var obj = {
    a: 1,
    b: 2,
    c: 3
  };
  var output = countNumberOfKeys(obj);
  console.log(output);