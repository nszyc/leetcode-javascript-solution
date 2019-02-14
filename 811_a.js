var subdomainVisits = function(cpdomains) {
    var map = {}
    for (var i = 0; i < cpdomains.length; i++) {
        var cpdomain = cpdomains[i]
        var cpdomainSplit = cpdomain.split(' ')
        var time = parseInt(cpdomainSplit[0], 10)
        var full = cpdomainSplit[1]
        var fullSplit = full.split('.')
        for (var j = 0; j < fullSplit.length; j++) {
            var domainParts = []
            for (var k = j; k < fullSplit.length; k++) {
                domainParts.push(fullSplit[k])
            }
            var domain = domainParts.join('.')
            if (!map[domain]) {
                map[domain] = 0
            }
            map[domain] += time
        }
    }
    var keys = Object.keys(map)
    var result = []
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        result.push(map[key] + ' ' + key)
    }
    return result
};
