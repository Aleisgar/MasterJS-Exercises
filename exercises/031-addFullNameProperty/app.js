function addFullNameProperty(obj) {

obj.fullName = obj['firstName'] + ' ' + obj['lastName']
return obj
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

console.log(addFullNameProperty(person))