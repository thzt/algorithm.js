/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    var length=points.length;
    if(length<=2){
        return length;
    }
    
    var count=[];
    
    for(var i=0;i<length;i++){
        var degree=1;
        var hash={};
        
        for(var j=0;j<length;j++){
            if(j==i){
                continue;
            }
            
            var u=points[j].x-points[i].x;
            var v=points[j].y-points[i].y;
            
            if(u==0&&v==0){
                degree++;
                continue;
            }
            
            if(u==0){
                hash['infinity']=hash['infinity']==null?1:hash['infinity']+1;
                continue;
            }
            
            var k=v/u;
            hash[k]=hash[k]==null?1:hash[k]+1;
        }
        
        var max=0;
        Object.keys(hash).forEach(function(k){
            if(hash[k]>max){
                max=hash[k];
            }
        });
        
        count[i]=max+degree;
    }
    
    return Math.max.apply(Math,count);
};
