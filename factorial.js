// factorial - Returns a number that is the factorial of the given number.

// factorial(0)                        // 1
// factorial(1)                        // 1
// factorial(6)                        // 720


let factorial = function(num){
    let factor = 1;
    let tempNum = num;
    for (var i = 0; i < num; i++) {
        factor *= tempNum;
        tempNum--;
    }
    return factor;
}

console.log(factorial(0))