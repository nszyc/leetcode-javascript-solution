/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNegative = false
    if (x < 0) {
        isNegative = true
        x = -x
    }
    x = parseInt(x.toString(10).split('').reverse().join(''), 10)
    if (isNegative) {
        x = -x
    }    
    if (x >= -Math.pow(2, 31) && x <= Math.pow(2, 31) - 1) {
        return x
    } else {
        return 0
    }
};
