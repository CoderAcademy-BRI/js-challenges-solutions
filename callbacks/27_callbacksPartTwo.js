/*
Remind yourself how .filter works. Build it yourself 
using only .forEach. We've started you off.

Check your solution by running node 27_callbacksPartTwo.js

*/

const filter = (items, callback) => {
    // your code goes here
    let results = []
    for (let item of items) {
        if (callback(item)) {
            results.push(item)
        }
    }
    return results
}

// I'm using your Filter method to return even numbers.
// If your filter method is correct, this code should return: [2, 4]

console.log(filter([1, 2, 3, 4], (item) => {
    // your code goes here
    if (item % 2 === 0)
        return item
}))