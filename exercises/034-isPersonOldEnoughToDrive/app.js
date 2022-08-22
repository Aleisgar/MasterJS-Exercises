function isPersonOldEnoughToDrive(person) {
 if (person.age >= 16)
 return true;
else 
  return false;
}
var obj = {
  age: 15
};
console.log(isPersonOldEnoughToDrive(obj))