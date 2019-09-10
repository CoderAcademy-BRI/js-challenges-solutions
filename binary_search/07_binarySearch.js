/*
Write a method which will act as a binary search which will find the 
position and the actual number of steps required to find the position. 
When the array has an even number of values the midpoint index will be rounded up.

Example:
    binaryArray = [1,5,8,12,20,21,35]
    searchValue = 8

    In this case the index returned would be 2 and it should take 3 steps. 
    In the first step, 3 is the midpoint index (value = 12). 
    In the second step 1 is the midpoint index (value = 5). 
    In the third and final step we are only left with 8 at index 2.

*/

function binarySearch(binaryArray, searchValue) {
    // Your code here
    let times = 0
    let midpoint = Math.floor(binaryArray.length / 2)
    let worstCaseTime = Math.floor(Math.log2(binaryArray.length));
    while (times <= worstCaseTime) {
        times++
        if (binaryArray[midpoint] == searchValue) {
            return [midpoint, times]
        } else if (binaryArray[midpoint] > searchValue) {
            midpoint = Math.floor(midpoint / 2)
        } else {
            midpoint = Math.floor((binaryArray.length - midpoint) / 2) + midpoint
        }
    }
    return [-1, times];


}

module.exports = {
    binarySearch
};