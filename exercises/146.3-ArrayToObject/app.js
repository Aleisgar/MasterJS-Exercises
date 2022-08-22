function transformEmployeeData(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
        let newObject = {};
    for (let j = 0; j < array[i].length; j++) {
        newObject[array[i][j][0]] = array[i][j][1]
      }
     result.push(newObject)
  }
  return result
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output);
// [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
// {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]