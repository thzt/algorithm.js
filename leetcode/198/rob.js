/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==0){
        return 0;
    }
    
    if(nums.length==1){
        return nums[0];
    }
    
    var maxQueue=[nums[0],nums[1]];
    var length=nums.length;
    
    for(var i=2;i<length;i++){
        var maxValue=Math.max.apply(Math,maxQueue.slice(0,-1));
        maxQueue.push(maxValue+nums[i]);
    }
    
    return Math.max.apply(Math,maxQueue);
};
