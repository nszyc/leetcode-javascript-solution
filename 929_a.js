/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var map = {}
    var count = 0
    for (var i = 0; i < emails.length; i++) {
        var email = emails[i]
        var array = email.split('@')
        var local = array[0].split('+')[0].split('').map(function(e) {
            if (e == '.') {
                return ''
            } else {
                return e
            }
        }).join('')
        var domain = array[1]
        var real = local + domain
        if (map[real]) {

        } else {
            map[real] = true
            count++
        }
    }
    return count    
};
