/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    var regexp=/^ *[+-]?(?:(?:\d+)|(?:\d+\.\d+)|(?:\d+\.)|(?:\.\d+))(?:e[+-]?\d+)? *$/;
    return regexp.test(s);
};
