/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    
    var quotient=n;
    var remainderSum=0;
    while(quotient!=0){
        remainderSum+=quotient%2;
        quotient=Math.floor(quotient/2);
    }
    
    return remainderSum;
};
