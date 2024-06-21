nameOfFunc2();
// func();

// Type I - i. function declaration
function nameOfFunc (){
    console.log('i m a function declaration')
}

var riddhi = 100;
// Type I - ii. anonymous function declaration

// use case of anonymous functions - will discuss later
// arr.map(function (element){
//     console.log(element)
// })

(function (){
    
})()
// iife - immediately invoked function expression


// Type II - function expression
var func = function nameOfFunc2 (){
    console.log('i am a function expression')
}

// func();

// Type III - arrow function
// var func = () => {
    
// }
// func();


// Global
function helper(){
    console.log('I am helper');
}

function demo(helper){
    // Function Scope
    helper();
    return function (){
        console.log('I am function returned by another function');
    }
}

demo()();
// var returnedFunc = demo();
// returnedFunc();




// yet to come
arr.map(function myCustomFunction(){
    // body of function
});