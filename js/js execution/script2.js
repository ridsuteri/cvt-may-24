function outer(){
    let outerVariable = 10;
    
    function inner(){
        let innerVariable = 20;
        console.log(outerVariable)
    }
    
    return inner;
}

let inner = outer();
innerFn();