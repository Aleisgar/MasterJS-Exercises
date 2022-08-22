function fromListToObject(array) {
  let newObject = {}
for (let i = 0; i<array.length; i++){
  for (let j = 0; j<array[i].length; j++){
  let Objkey=array[i][0] 
  let ObjValue = array [i][1]
   newObject[Objkey] = ObjValue
  }
}
return newObject

 }


 let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
 console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }