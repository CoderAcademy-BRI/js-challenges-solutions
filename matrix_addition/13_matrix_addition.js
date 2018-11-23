/*
Neo is stuck in the matrix and you need to help get him out. In order to
help him you will need to write a function which will take the values 
of two different matrices and return their sum total.

Check your solution by running mocha 13_matrix_addition

Examples:
function matrixAddition ([1,2,3,4], [2,3,4,5]) => [3,5,7,9]

function matrixAddition ([[1,2,3,4], [2,4,6,8]], [[1,2,3,4], [2,4,6,8]])    
                          => [[2,4,6,8], [4,8,12,16]]

Hint:
It may help to write out the array beforehand if the examples are confusing.

*/
function isValidForAdd(matrixOne, matrixTwo) {
    // First make sure that we can add these two matrices. If not, return null
    // First check number of rows in equal
    if (matrixOne.length === matrixTwo.length) {
        // Now check number of cols is equal for each row
        for (let i = 0; i < matrixOne.length; i++) {
            if (matrixOne[i].length != matrixTwo[i].length) {
                return false
            }
        }
        //if we get here, number of rows and columns is equal
        return true

    } else {
        return false
    }
}

function rowAdd(matrixOne, matrixTwo) {
    return matrixOne.map((val, ind) => val + matrixTwo[ind])
}

function multiDimensionalAdd(matrixOne, matrixTwo) {
    let matrixResult = []
    // Otherwise do the multi-dimensional addition
    for (let row = 0; row < matrixOne.length; row++) {
        let matrixRow = rowAdd(matrixOne[row], matrixTwo[row])
        matrixResult.push(matrixRow)
    }
    return matrixResult;
}

function matrixAddition(matrixOne, matrixTwo) {
    // Your code here
    // Check valid matrix sizes
    if (!isValidForAdd(matrixOne, matrixTwo)) {
        return null
    }
    // Check for single dimension arrays
    if (matrixOne[0][0] == undefined) {
        return rowAdd(matrixOne, matrixTwo)
    } else {
        return multiDimensionalAdd(matrixOne, matrixTwo)
    }

}

const assert = require('assert');

describe('Matrix addition', function () {
    it('Should return the sum of one dimensional matrix', function () {
        assert.deepEqual([2, 4, 5, 7], matrixAddition([1, 3, 4, 3], [1, 1, 1, 4]))
        assert.deepEqual([10, 4, 50, 31, 17], matrixAddition([5, 0, 40, 29, 10], [5, 4, 10, 2, 7]))
        assert.deepEqual([10, 4, 50, 31, 17], matrixAddition([5, 0, 40, 29, 10], [5, 4, 10, 2, 7]))
    })
    it('Should return the sum of multidimensional matrix', function () {
        assert.deepEqual([
            [2, 4, 6, 8],
            [10, 12, 14, 16]
        ], matrixAddition([
            [1, 2, 3, 4],
            [5, 6, 7, 8]
        ], [
            [1, 2, 3, 4],
            [5, 6, 7, 8]
        ]))
    })
    it('Should return null if the sum of the matrix cannot be added', function () {
        assert.deepEqual(null, matrixAddition([4, 2, 1, 7], [2, 3, 5]))
        assert.deepEqual(null, matrixAddition([8, 12, 5], [40, 21, 8, 17]))
        assert.deepEqual(null, matrixAddition([
            [8, 12, 5],
            [40, 21, 8, 17]
        ], [
            [3, 2, 1, 6],
            [7, 4, 1, 9]
        ]))
    })
})