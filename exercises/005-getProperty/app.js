let car = {
  model: 'Toyota',
  year: 2001,
}
function getProperty(obj, key) {
  return obj[key]
}
console.log(getProperty(car,'model'))