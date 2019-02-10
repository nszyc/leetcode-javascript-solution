var maxIncreaseKeepingSkyline = function(grid) {
	var rowMaxNumbers = []
	var columnMaxNumbers = []

	for (var i = 0; i < grid.length; i++) {
		var max = 0
		for (var j = 0; j < grid[i].length; j++) {
			if (grid[i][j] > max) {
				max = grid[i][j]
			}
		}
		rowMaxNumbers.push(max)
	}

	for (var i = 0; i < grid[0].length; i++) {
		var max = 0
		for (var j = 0; j < grid.length; j++) {
			if (grid[j][i] > max) {
				max = grid[j][i]
			}
		}
		columnMaxNumbers.push(max)
	}

	var increase = 0

	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			increase = increase + Math.min(rowMaxNumbers[i], columnMaxNumbers[j]) - grid[i][j]
		}
	}

	return increase
}
