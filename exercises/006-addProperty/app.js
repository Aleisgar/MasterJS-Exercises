let car = {
    model: 'Toyota',
    year: 2001,
}

function addProperty(obj, key) {

    obj.key = true
    return obj
}



console.log(addProperty(car, 'electric'))