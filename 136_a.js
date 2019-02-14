/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var sorted = nums.sort(function(a, b) {
		return a - b
	})
	if (sorted[0] != sorted[1]) {
		return sorted[0]
	}
	var length = nums.length
	if (sorted[length - 1] != sorted[length - 2]) {
		return sorted[length - 1]
	}
	for (var i = 1; i < sorted.length - 1; i++) {
		if (sorted[i] != sorted[i - 1] && sorted[i] != sorted[i + 1]) {
			return sorted[i]
		}
	}
};
