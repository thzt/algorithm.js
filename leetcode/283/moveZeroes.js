/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var q=[];
    var zeroNumber=0;
    
    var length=nums.length;
    for(var i=0;i<length;i++){
        if(nums[i]==0){
            zeroNumber++;
            continue;
        }
        
        q.push(nums[i]);
    }
    
    for(var i=0;i<zeroNumber;i++){
        q.push(0);
    }
    
    for(var i=0;i<length;i++){
        nums[i]=q[i];
    }
};
