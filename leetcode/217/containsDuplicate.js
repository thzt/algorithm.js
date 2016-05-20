/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var length=nums.length;
    var hash={};
    
    var isDuplicate=false;
    for(var i=0;i<length;i++){
        var v=nums[i];
        
        if(hash[v]==null){
            hash[v]=true;
            continue;
        }
        
        if(hash[v]==true){
            isDuplicate=true;
            break;
        }
    }
    
    return isDuplicate;
};
