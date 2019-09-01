/*
Find the unique string in an array, which should all contain letters.

Example:
uniqueString(["alright", "isod", "Alright", "ALRIGHT"]) => "isod"

Test your solution:
npm test
*/

function getUnique(stringCounts) {
    for (let key of Object.keys(stringCounts)) {
        if (stringCounts[key].length == 1)
            return stringCounts[key][0];
    }
}

function uniqueString(array) {
    let unique = {};
    for (let word of array) {
        let orderedSetOfChars = [...new Set(word.toLowerCase())].sort().join('');
        if (Object.keys(unique).includes(orderedSetOfChars)) {
            unique[orderedSetOfChars].push(word);
        } else {
            unique[orderedSetOfChars] = [word];
        }
    }
    return getUnique(unique);
}

module.exports = {
    uniqueString
};