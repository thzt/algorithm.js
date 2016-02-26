/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x==0){
        return 0;
    }
    
    var sign=x<0?-1:1;
    var s=makeNum(deleteZero(convertToArray(Math.abs(x))));
    
    if(s>Math.pow(2,31)-1){
        return 0;
    }
    
    return s*sign;
};

var makeNum=function(a){
    var length=a.length;
    var sum=0;
    for(var i=0;i<length;i++){
        sum+=a[length-1-i]*Math.pow(10,i);
    }
    return sum;
}

var deleteZero=function(a){
    while(a[0]==0){
        a.shift();
    }
    return a;
}

var convertToArray=function(n){
    var r=[];
    var cur=n;
    
    while(cur!=0){
        r.push(cur%10);
        cur=Math.floor(cur/10);
    }
    
    return r;
};
