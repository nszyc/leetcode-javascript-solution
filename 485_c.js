/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	var max = 0
	var curr = 0
	var numLength = nums.length
	for (var i = 0; i < numLength; i++) {
		if (nums[i] == '1') {
			curr++
		} else {
			if (curr > max) {
				max = curr
			}
			if (max > numLength * 0.5) {
				return max
			}
			curr = 0
		}
	}    
	if (curr > max) {
		max = curr
	}
	return max
};
