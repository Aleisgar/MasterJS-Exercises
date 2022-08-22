const getElementsThatEqual10AtProperty = (obj,key) => {
    let arr = [] 
  for (let i of obj[key]){  
   
   if (i==10){
        arr.push(i)
  }
  }
        return arr

}    

var obj = {
    num: [1000, 10, 50, 10],
    nombre: "Pepe"
  };
  var output = getElementsThatEqual10AtProperty(obj, 'num');
  console.log(output);