// uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?
// uniq([])                              // []
// uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]


let uniq = function(array){
    let uniqueNums = [];
    let uniqueObject = {};

    for (var i = 0; i < array.length; i++) {
        if (uniqueObject[array[i]]){
            uniqueObject[array[i]]++
        } else {
            uniqueObject[array[i]] = 1;
        }
    }

    for (var key in uniqueObject) {
        if (uniqueObject[key] === 1) {
            uniqueNums.push(key)
        }
    }

    return uniqueNums;

}

console.log(uniq([1, 4, 2, 2, 3, 4, 8]))