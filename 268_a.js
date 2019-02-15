/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	var currSum = nums.reduce(function(total, num) {
		return total + num
	})
	var length = nums.length
	var sum = (1 + length) * length * 0.5
	return sum - currSum
};
