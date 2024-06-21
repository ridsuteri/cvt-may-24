var arr = [99, 68, "Cuvette", false, {key1: "value1"}];

// basic operations
//1.  accessing elements
// arr[0] = 'something else'
// console.log(`element at 0 is ${arr[0]}`)

// 2. adding something to array
arr.push('Tech')
arr.pop();
// shift - remove from start
// unshift - add something to start
arr.shift();
arr.unshift('Riddhi');
// console.log(arr);

const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
months.splice(1,2);
console.log(months);













// _________ optional ______
// console.log(arr.0);
var obj = {
    key1: "value1"
}

// console.log(obj['key1']);