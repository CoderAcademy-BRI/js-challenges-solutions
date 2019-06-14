const assert = require("assert")
const largestNumber = require("./02_largest_number").largestNumber

describe("largestNumber", function() {
	it("should return the largest number", function() {
		assert.equal(10, largestNumber([5, -2, 10]))
	})
	it("should ignore invalid array entries", function() {
		assert.equal(10, largestNumber([10, 10, "s"]))
	})
	it("should return null if the array is empty", function() {
		assert.equal(null, largestNumber([]))
	})
})
