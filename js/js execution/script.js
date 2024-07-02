let a = 10;

function outer(){
    let b = 20;
    inner()   
    console.log('inside the outer function')
}
   
function inner(){
    {let c = 30;}
    console.log(c)
    innerInner() 
    console.log('inside the inner function',b)
}
   
function innerInner(){
    let d = 40
    console.log('inside the inner most function',c)
}
           
   
outer()
// console.log(d)