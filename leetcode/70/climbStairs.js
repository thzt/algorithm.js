/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var hash=[];
    hash[1]=1;
    hash[2]=2;
    
    if(n<=2){
        return n;
    }
    
    return countWay(n,hash);
};

var countWay=function(n,hash){
    var n1=hash[n-1]==null?countWay(n-1,hash):hash[n-1];
    var n2=hash[n-2]==null?countWay(n-2,hash):hash[n-2];
    
    var v=n1+n2;
    hash[n]=v;
    
    return v;
};
