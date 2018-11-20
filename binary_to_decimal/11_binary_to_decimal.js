/*
Write a method to convert a binary number to a decimal.

Examples:
    binaryToDecimal(1000) => 8
    binaryToDecimal(1011) => 11
    binaryToDecimal(1100) => 12
*/
function digits(num) {
    return num.toString().split('')
}

function isBinary(num) {
    return !(num.toString().match(/[2..9]/g))
}

function binaryToDecimal(binaryNumber) {
    // if number isn't binary return null
    if (!isBinary(binaryNumber))
        return null
    let sum = 0
    // make the number an array, then reverse it (so we can use the index for the power of 2)
    let revBinNumArray = digits(binaryNumber).reverse()
    for (let i = 0; i < revBinNumArray.length; i++) {
        // multiply the element by 2**i, then add to the sum
        sum += revBinNumArray[i] * 2 ** i
    }
    return sum
}

let assert = require('assert')

describe('Binary to decimal', function () {
    it('Should convert a binary to its decimal value', function () {
        assert.equal((9), binaryToDecimal(1001))
        assert.equal((15), binaryToDecimal(1111))
        assert.equal((31), binaryToDecimal(11111))
    })
    it('Should return a null if the binary has a number other than 0 or 1', function () {
        assert.equal((null), binaryToDecimal(1002))
        assert.equal((null), binaryToDecimal(1220))
    })
})