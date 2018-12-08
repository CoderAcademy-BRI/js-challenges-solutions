/*

Working individually or in pairs write out differnt tests which will
count the number of even numbers in an array. 

Try to have at least three different tests which test differnt values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes. 

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If your having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/

const countEvens = (arr) => {
    let evens = arr.toString().match(/[02468]/g)
    return evens == null ? 0 : evens.length
}

// Your tests here

let assert = require('assert')

describe('Should handle an empty array', function () {
    it('Should return 0 for an empty array', function () {
        assert.equal(0, countEvens([]))
    })
})

describe('Should handle array with no even numbers', function () {
    it('Should return 0 when array has only odd numbers', function () {
        assert.equal(0, countEvens([1, 3, 5, 7, 9]))
    })
    it('Should return 0 when array does not contain numbers', function () {
        assert.equal(0, countEvens(['a', 'b', 'c']))
    })
})

describe('Should return correct count when there are even numbers', function () {
    it('Should return 1 for [1,2,3]', function () {
        assert.equal(1, countEvens([1, 2, 3]))
    })
    it('Should return 3 for [2,4,6]', function () {
        assert.equal(3, countEvens([2, 4, 6]))
    })
    it('Should return 2 for [2,\'a\',4]', function () {
        assert.equal(2, countEvens([2, 'a', 4]))
    })
})