/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
	nums.sort(function(a, b) {
		return a - b
	})
	var result = []
	for (var i = 1; i < nums.length; i++) {
		if (nums[i] == nums[i - 1]) {
			result.push(nums[i])
		}
	}
	return result
};
