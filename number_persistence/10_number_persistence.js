/*
Write a function, "persistence", that takes in a positive parameter "num"
and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

Examples:
persistence(39) === 3 
Because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

persistence(999) === 4 
Because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and 1*2 = 2
*/
function digits(num) {
    // returns an array of digits for a given number
    return num.toString().split('')
}

function persistence(num) {
    //enter code here
    let steps = 0
    let narr = digits(num)
    while (narr.length > 1) {
        steps++
        narr = digits(narr.reduce((a, b) => parseInt(a) * parseInt(b)))
    }
    return steps
}


var assert = require('assert');

describe('Initial Tests', function () {
    it('Should return 3 steps for 39', function () {
        assert.equal(persistence(39), 3);
        assert.equal(persistence(25), 2);
        assert.equal(persistence(999), 4);
    })
    it('Should return zero if num is a one digit number', function () {
        assert.equal(persistence(4), 0);
        assert.equal(persistence(9), 0);
    })
});