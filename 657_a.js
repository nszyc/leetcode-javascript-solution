/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
	var offsetX = 0
	var offsetY = 0
	for (var i = moves.length - 1; i >= 0; i--) {
		var move = moves[i]
		if (move == 'U') {
			offsetY -= 1
		} else if (move == 'D') {
			offsetY += 1
		} else if (move == 'L') {
			offsetX -= 1
		} else if (move == 'R') {
			offsetX += 1
		}
	}
	return (offsetX == 0) && (offsetY == 0)
}
