const areValidCredentials = (name, password) => {
    name.length > 3 && password.length > 3 ? true : false
}
var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output);