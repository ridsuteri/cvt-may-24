let student = {
    name: "Student1",
    id: "s101",
}

let teacher = {
    name: "Teacher1",
    id: "t101",
    printInfo: function (currentDate){
    console.log(`Name: ${this.name} id: ${this.id}, today's date: ${currentDate}`)
}
}


    


// borrowing the function in js
// printInfo("none")

// syntax of call
// method_to_borrow.call(object_on_which, parameters....)
// teacher.printInfo('7-7-24')

teacher.printInfo.call(student,'7-7-24');
teacher.printInfo.apply(student,['7-7-24']);
let newFunction = teacher.printInfo.bind(student,['7-7-24']);
newFunction();