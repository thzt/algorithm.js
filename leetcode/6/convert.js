/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var result=[],
        length=s.length;
            
    if(numRows==1){
        return s;
    }
            
    for(var i=0;i<numRows;i++){
        if(i==0||i==numRows-1){
            var j=0;
            while(true){
                var p=i+(numRows-1)*2*j;
                
                j++;
                if(p>=length){
                    break;
                }
                result.push(s[p]);
            }
            continue;
        }
        
        var j=0;
        while(true){
            var p1=i+(numRows-1)*2*j;
            var p2=p1+((numRows-1)*2-i*2);
            j++;
            
            p1<length&&result.push(s[p1]);
            p2<length&&result.push(s[p2]);
            
            if(p1>=length||p2>=length){
                break;
            }
        }
    }
    
    return result.join('');
};
