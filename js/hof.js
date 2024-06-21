var arr = [
    {name:"Abc", marks:80},
    {name:"Xyz", marks:30},
    {name:"Qwe", marks:60}
    ];
    
var arr2 = [10,20,30];

// iterate the array
for( var i = 0; i < arr.length; i++){
    // console.log(arr[i]);
}

// for of loop
for(var element of arr){
    // console.log(element);
}

// callback - function that is executed after the main function is done executing
arr.forEach((element)=>{
    var gracedMarks = element.marks + 10; 
    console.log(`${element.name} - ${gracedMarks}`);
});

arr2.forEach((element)=>{
    element += 10;
    console.log(element)
})


console.log(arr);
console.log(arr2);

var arr = [
    {name:"Abc", marks:80},
    {name:"Xyz", marks:30},
    {name:"Qwe", marks:60}
    ];

// customisation but no new outcome
var result1 = arr.forEach((element)=>{
    // console.log(`${element.name} - ${element.marks}`);
});

// customisation with new final product
var result2 = arr.map((element, index, array)=>{
    // console.log(`${element.name} - ${element.marks}`);
    // done in order to remove reference from the original object
    var element = JSON.parse(JSON.stringify(element))
    element.marks += 10;
    return element;
})

var passedStudents = arr.filter((element, index, array)=>{
    if(element.marks > 33)
        return element;
})

var cumulative = arr.reduce((accumulator, element)=>{
    return accumulator += element.marks;
},0);


console.log('original array :', arr);
// console.log(result1);
console.log('after grace marks : ',result2);
console.log('only passed students : ',passedStudents);
console.log('sum of all students marks : ', cumulative);