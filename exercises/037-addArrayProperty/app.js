function addArrayProperty(obj, key, arr) {
 obj[key] = arr // No entiendo porque si aquí pongo key no sirve. Porque entonces la función no me seriviría para cualquier key
 return obj
}
let myArray = [8,3]
var person = {
  name: 'Joe Blow',
  role: 'schlub'
};
addArrayProperty(person,'luckyNumbers',myArray);
console.log(person.luckyNumbers)
