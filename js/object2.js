var a = 10;
var b = a;

a = 20;

// console.log(a);
// console.log(b);

var objA = {
    key: 10
}

// shallow copy
// you are also borrowing the reference along with value
var deepCopyB = JSON.parse(JSON.stringify(objA))

var objB = objA;
objA.key = 20;

// console.log(objA.key);
// console.log(objB.key);
// console.log(deepCopyB.key);

var obj = {
    key1:"value1",
    key2:"value2",
    key3:"value3"
}
//  for in vs for of loop of js
// for in is used for objects
// for of is used for iterables (arrays)

// var arr = [10, 20, 30];

// for(var key in arr){
//     console.log(key);
// }

for(var key in obj){
    // console.log(key, obj[key]);
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));