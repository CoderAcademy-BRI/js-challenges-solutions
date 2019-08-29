/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
jest
(You'll need jest installed first: `npm install jest`)
*/

function largestNumber(arr) {
	let largest = arr[0] || null
	for (let n of arr) {
		if (n > largest) {
			largest = n
		}
	}
	return largest
}

module.exports = {
	largestNumber
}