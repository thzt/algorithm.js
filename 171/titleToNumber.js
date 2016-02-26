/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var A_CHAR_CODE='A'.charCodeAt(0);
    
    var nums=s.split('').map(function(v){
        return v.charCodeAt(0)-A_CHAR_CODE+1;
    });
    
    var length=nums.length;
    var sum=0;
    for(var i=0;i<length-1;i++){
        sum+=Math.pow(26,i+1);
    }
    
    for(var i=0;i<length;i++){
        sum+=(nums[i]-1)*Math.pow(26,length-1-i);
    }
    
    sum+=1;
    
    return sum;
};
