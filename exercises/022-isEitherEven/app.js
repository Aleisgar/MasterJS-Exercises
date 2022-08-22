const isEitherEven = (num1,num2) => {
    if (((num1%2 && num2%2)!==0) && ((num1%2 || num2%2)!==0))
      return false
   
    else 
      return true
      
}

console.log(isEitherEven(15,17))