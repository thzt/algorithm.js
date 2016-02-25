/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num==0){
        return 0;
    }
    
    var remainder=num%9;
    if(remainder==0){
        return 9;
    }
    return remainder;
};
