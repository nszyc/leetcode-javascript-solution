/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var mapA = {}
    var arrayA = A.split(' ')
    for (var i = 0; i < arrayA.length; i++) {
        var word = arrayA[i]
        if (!mapA[word]) {
            mapA[word] = 0
        }
        mapA[word]++
    }

    var mapB = {}
    var arrayB = B.split(' ')
    for (var i = 0; i < arrayB.length; i++) {
        var word = arrayB[i]
        if (!mapB[word]) {
            mapB[word] = 0
        }
        mapB[word]++
    }

    var result = []

    var keysA = Object.keys(mapA)

    var keysB = Object.keys(mapB)

    for (var i = 0; i < keysA.length; i++) {
        var key = keysA[i]
        if (mapA[key] == 1) {
            if (!mapB[key]) {
                result.push(key)
            }
        }
    }

    for (var i = 0; i < keysB.length; i++) {
        var key = keysB[i]
        if (mapB[key] == 1) {
            if (!mapA[key]) {
                result.push(key)
            }
        }
    }

    return result
};
