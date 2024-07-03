// for normal functions
// let obj = {
//     property1: "value1",
//     method: function (){
//         console.log(this)
//     },
//     helperMethod: function (){
//         this.method();
//     }
// }

// obj.helperMethod();  // obj
 
// function newMethod(){
//     console.log(this)
// }

// newMethod(); - //global


// for arrow functions

let baapObj = {
    baapProperty1: "baapValue1"
}

let obj = {
    property1: "value1",
    method: ()=>{
        console.log(this)
    },
    helperMethod: ()=>{
        console.log(this)
    }
}

baapObj.child = obj
console.log(baapObj);
obj.helperMethod(); 