/*
Vowels

Write a method that will take a string and
return an array of vowels used in that string.

Example:
count_vowels("The quick brown fox") should return ["e","u","i","o","o"]
count_vowels("Hello World") should return ["e","o","o"]

Check your solution by running the tests:
npm test
*/



function vowels(string) {
    return string.match(/[aeiouAEIOU]/g)
}

module.exports = {
    vowels
}