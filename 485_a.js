/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	var strs = nums.join('').split('0')
	var max = 0
	for (var i = 0; i < strs.length; i++) {
		var str = strs[i]
		if (str.length >= max) {
			max = str.length
		}
	}
	return max
};
