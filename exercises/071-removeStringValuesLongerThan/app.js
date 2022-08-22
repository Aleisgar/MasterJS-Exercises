function removeStringValuesLongerThan(num, obj) {
    for (let i in obj) {
        if (obj[i].length > num)
            delete obj[i]
    }
    return obj
}
var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
};
removeStringValuesLongerThan(4, obj);
console.log(obj);