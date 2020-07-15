// Write a function that returns whether or not two strings are fuzzy palindromes of one another 
// (i.e. ignore spaces and capitalization).  


// racecar === racecaR

let checkIfFuzzyPalindrones = function(word1, word2){
    let upperCaseWord1 = word1.toUpperCase();
    let upperCaseWord2 = word2.toUpperCase();
    let reversedWord1 = upperCaseWord1.split('');
    console.log(reversedWord1)
    return reversedWord1 === upperCaseWord2;
}


console.log(checkIfFuzzyPalindrones('Race car', 'racecar'));