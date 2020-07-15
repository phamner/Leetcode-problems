// isPrime - Returns true or false, indicating whether the given number is prime.

// In math, prime numbers are whole numbers greater than 1, that have only two factors – 1 and the number itself.
// Prime numbers are divisible only by the number 1 or itself.  
// For example, 2, 3, 5, 7 and 11 are the first few prime numbers.

let isPrime = function(number){
    if (number < 2) {
        return false;
    }
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7))