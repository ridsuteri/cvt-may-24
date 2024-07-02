var riddhi = 'riddhi';
var age = 99


// collection of key - value pair
// non primitive data type

// var obj = {
//     key : "value",
//     ....
// }

// 1. using literal
var person = {
    name: "Cuvette Admin",
    "cost to company": 1000,
    operate: ()=>{
        console.log('operating gracefully!')
    },
    // name:"Riddhi"
}

delete person['cost to company']

// Below code can be skipped for the time being 

// 2. using constructor
// function Person(name){
//     this.name = name,
//     this.operate = ()=>{
//         console.log('operating gracefully!')
//     }
// }
// var person2 = new Person('Cuvette Student');

// 3. using new keyword
var person3 = new Object();
person3.name = "Operation team";

// overriding object's existing property
// person.name = "Random";

// console.log(person2);
// console.log(person3);
// person.operate();
var key = 'cost to company';
delete person[key];
console.log(person);
// console.log(person[key])

// primitive vs referential values

// primitive value
// const a = 10;
// a = 20;

// reference is created for constObj object 
const constantObj = {
    key1: "value1"
}

// this operation is not allowed
// constantObj = {}

// resist any change in the object
Object.freeze(constantObj)
// while this is allowed
constantObj.key1 = "modified value"
console.log(constantObj);
