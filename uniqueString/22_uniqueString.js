/*
Find the unique string in an array, which should all contain letters.

Example:
uniqueString(["alright", "isod", "Alright", "ALRIGHT"]) => "isod"

Test your solution:
mocha 22_uniqueString.js
*/

function getUnique(stringCounts) {
    for (let key of Object.keys(stringCounts)) {
        if (stringCounts[key].length == 1)
            return stringCounts[key][0]
    }
}

function uniqueString(array) {
    let unique = {}
    for (let word of array) {
        let orderedSetOfChars = [...new Set(word.toLowerCase())].sort().join('')
        if (Object.keys(unique).includes(orderedSetOfChars)) {
            unique[orderedSetOfChars].push(word)
        } else {
            unique[orderedSetOfChars] = [word]
        }
    }
    return getUnique(unique)
}

const assert = require('assert')

describe('Unique string challenge', function () {
    it('Should return the unique string', function () {
        assert.deepEqual(uniqueString(['aa', 'AaA', 'aaaa', 'bBbB', 'aAaA', 'a']), 'bBbB')
    })

    it('Should return the unique string when the array elements have mixed letters', function () {
        assert.deepEqual(uniqueString(['kios', 'foo', 'ikos', 'ikso', 'kois', 'kiso']), 'foo')
    })

    it('Should return the unique string when it is the first one in the array arg', function () {
        assert.deepEqual(uniqueString(['abc', ' ', '  ']), 'abc')
    })
})