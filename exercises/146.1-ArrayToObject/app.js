function transformFirstAndLast(array) {
  
  let newObject = {}

for (let i=0;i<array.length; i++){
  let property = array[0]
  let value = array[array.length-1]
  newObject[property] = value
}
return newObject
}
let output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
console.log(output)
//['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
// {Kevin: "Spacey"}
