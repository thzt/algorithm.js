/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var op1=a.split('').reverse().join('');
    var op2=b.split('').reverse().join('');
    
    var i=0;
    var flag=0;
    var c=[];
    while(true){
        if(op1[i]==null&&op2[i]==null){
            break;
        }
        
        var x=op1[i]==null?0:+op1[i];
        var y=op2[i]==null?0:+op2[i];
        
        var sum=x+y+flag;
        flag=Math.floor(sum/2);
        c[i]=sum%2;
        i++;
    }
    if(flag!=0){
        c[i]=flag;
    }
    
    return c.reverse().join('');
};
