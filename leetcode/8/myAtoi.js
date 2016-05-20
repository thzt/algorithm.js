/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var INT_MAX=2147483647,
        INT_MIN=-2147483648;
    
    var regexp=/^ *([+-]?)(\d*).*$/;
    var match=regexp.exec(str);
    
    if(match==null){
        return 0;
    }
    
    var sign=match[1]=='-'?-1:1;
    var num=+match[2]*sign;
    
    if(num>INT_MAX){
        return INT_MAX;
    }
    if(num<INT_MIN){
        return INT_MIN;
    }
    return num;
};
