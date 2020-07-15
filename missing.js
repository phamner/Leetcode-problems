// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, 
// and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). 
// Can you do it in O(N) time? Hint: There’s a clever formula you can use.

let missing = function(arr){
    let sortedArr = {};
    let count = arr[0];

    for (var i = 0; i < arr.length; i++) {
        sortedArr[arr[i]] = 1;
    }

    for (var key in sortedArr) {
        if (key === count) {
            console.log([key, count])
        } else {
            console.log('no match chief', key)
        }
        count++
    }

    // return sortedArr;
}

console.log(missing([0,1,9,2,8,4,7,5,6]))