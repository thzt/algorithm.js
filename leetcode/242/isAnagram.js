/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var x=s.split('').sort().join('');
    var y=t.split('').sort().join('');
    
    return x==y;
};
