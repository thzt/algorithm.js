/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    
    if(num==1){
        return true;
    }
    
    if(num==0){
        return false;
    }
    
    var cur=num;
    while(true){
        
        switch(true){
            case cur%2==0:
                cur/=2;
                break;
            case cur%3==0:
                cur/=3;
                break;
            case cur%5==0:
                cur/=5;
                break;
            default:
                return cur==1;
        }
    }
};
