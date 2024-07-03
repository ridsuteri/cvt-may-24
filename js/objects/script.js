// let student1 = {
//     name:"",
//     grade:"",
//     roll:""
// }

// class Student(){
//     constructor(name, grade, roll){
//         this.name = name,
//         ....
//     }
// }


function Student(name, grade, roll){
    this.name = name,
    this.grade = grade,
    this.roll = roll
}

let student1 = new Student("Abc", '10', '21')
let student2 = new Student("Xyz", '12', '12')

console.log(student1)
console.log(student2)