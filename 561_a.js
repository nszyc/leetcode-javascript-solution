/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
	var sorted = nums.sort(function(a, b) {
		return (b - a)
	})
	var sum = 0
	for (var i = 0; i < nums.length; i++) {
		if (i % 2 == 1) {
			sum += nums[i]
		}
	}
	return sum
};
