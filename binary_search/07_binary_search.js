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
    let origArray = binaryArray
    let midpoint = Math.floor(binaryArray.length / 2)

    while (true) {
        // Count the times through the loop
        times++

        if (binaryArray[midpoint] == searchValue) {
            // if item at midpoint is search value, we're done
            return [origArray.indexOf(searchValue), times]
        } else if (binaryArray.length == 1) {
            // We only have one item left and it isn't the search value
            // so the search value isn't in the list
            return [-1, times]
        } else if (binaryArray[midpoint] > searchValue) {
            // If the item at midpoint is greater than the search value
            // we need to look to the left (remove the top half of binaryArray)
            binaryArray = binaryArray.slice(0, midpoint)
        } else {
            // If the item at midpoint is less than the search value
            // we need to look to the right (remove the bottom half of binaryArray)
            binaryArray = binaryArray.slice(midpoint + 1, binaryArray.length)
        }
        midpoint = Math.floor(binaryArray.length / 2)
    }
}


let assert = require('assert')

describe('Count loops', function () {
    it('Should count one step when search values is in the middle', function () {
        assert.deepEqual([3, 1], binarySearch([1, 3, 7, 10, 14, 19, 31], 10))
    })
    it('Should count one step when search value is only value', function () {
        assert.deepEqual([0, 1], binarySearch([1], 1))
    })
    it('Should count length divided by two steps when value is at beginning', function () {
        assert.deepEqual([0, 3], binarySearch([1, 3, 7, 10, 14, 19, 31], 1))
    })
    it('Should count length divided by two steps when value is at end', function () {
        assert.deepEqual([6, 3], binarySearch([1, 3, 7, 10, 14, 19, 31], 31))
    })
    it('Should return [-1,3] when search value is not in array', function () {
        assert.deepEqual([-1, 3], binarySearch([1, 3, 7, 10, 14, 19, 31], 20))
    })
})