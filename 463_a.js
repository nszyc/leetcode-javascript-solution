/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
	var perimeter = 0
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 1) {
				// up
				if (i == 0 || grid[i - 1][j] == 0) {
					perimeter++
				}
				// down
				if (i == grid.length - 1 || grid[i + 1][j] == 0) {
					perimeter++
				}
				// left
				if (j == 0 || grid[i][j - 1] == 0) {
					perimeter++
				}
				// right
				if (j == grid[0].length - 1 || grid[i][j + 1] == 0) {
					perimeter++
				}
			}
		}
	}
	return perimeter
};
