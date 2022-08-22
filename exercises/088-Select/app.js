const select = (arr,obj) => {
  let keys = Object.keys(obj);
  let newObj = {};
  for (let i of arr){
    if (keys.includes(i)) { 
      newObj[i]=obj[i]
    }
  }
return newObj



 
  
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 } 

//console.log(Object.values(obj))
  //console.log(Object.entries(obj))