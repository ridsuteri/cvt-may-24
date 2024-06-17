console.log('hello world!')

// declare variable in js
var nameOfTheVariable = 'abc';


var riddhi = null;

// primitive data types
// "Cuvette", 'Tech' "a" - String
// 100, 10.9, -987 - Number
// true - boolean
// null
// undefined
// 100n - BigInt
// var s = Symbol('my new symbol') - Symbol

// non primitive
// {property:'value'} - Object - almost everything in js is object



var s1 = Symbol('my new symbol')
var s2 = Symbol('my new symbol')

var a = 10;
var b = '10';

console.log(s1);
console.log(a == b); // value comparison
console.log(a === b); // value & type comparison


var a = '10';
var b = 20;
var c = 30;
clg(a+b);
clg(a-b);

clg(a+b-c);
clg(a-b+c);