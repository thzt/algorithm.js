/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var cur=n;
    while(true){
        if(Math.floor(cur/10)==0){
            if(cur==1||cur==7){
                return true;
            }
            
            return false;
        }
        
        cur=sumOfDigitSquare(cur);
    }
};

function sumOfDigitSquare(n){
    var cur=n;
    var sum=0;
    while(true){
        var remainder=cur%10;
        cur=Math.floor(cur/10);
        
        sum+=remainder*remainder;
        if(cur==0){
            break;
        }
    }
    
    return sum;
}
