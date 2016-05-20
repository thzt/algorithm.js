/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var sortedNums=nums.sort();
    
    var length=nums.length;
    var middleIndex=Math.floor(length/2);
    
    return sortedNums[middleIndex];
};
