// ___ easy peasy task for js ____
// let sum = 1;
// for(let i = 1; i < 10000; i++){
//     for(let i = 1; i < 10000; i++){
//         sum += i*i;
//     }
// }


// ___ what js can't handle synchronously ___

// i. fetch response from another server
// ii. read files/media
// iii. db operations

console.log('1');

// scenerio of async operations
setTimeout(()=>{
console.log('2');
},0)


console.log('4');

setTimeout(()=>{
console.log('3');
},0)