var matrixReshape = function(nums, r, c) {
	if (nums.length * nums[0].length != r * c) {
		return nums
	}
	var allNumbers = []
	for (var i = 0; i < nums.length; i++) {
		for (var j = 0; j < nums[0].length; j++) {
			allNumbers.push(nums[i][j])
		}
	}
	var result = []
	for (var i = 0; i < r; i++) {
		result.push([])
		for (var j = 0; j < c; j++) {
			result[i][j] = allNumbers.shift()
		}
	}
	return result
};
