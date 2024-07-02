var btn = document.querySelector('button');

var logMessage = ()=>{
    console.log('button clicked')
}

// btn.addEventListener('mouseenter',()=>{
//     console.log('button clicked')
// })

document.body.addEventListener('keypress',(event)=>{
    console.log(event);
})
document.body.addEventListener('click',(event)=>{
    console.log(event);
})