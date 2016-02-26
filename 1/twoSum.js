/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var sortedArray=nums.map(function(v,i){
        return {
            index:i,
            value:v
        };
    }).sort(function(v1,v2){
        switch(true){
            case v1.value==v2.value:
                return 0;
            case v1.value<v2.value:
                return -1;
            case v1.value>v2.value:
                return 1;
        }
    });
    
    var left=0;
    var right=nums.length-1;
    
    while(true){
        if(sortedArray[left].value+sortedArray[right].value<target){
            left++;
            continue;
        }
        if(sortedArray[left].value+sortedArray[right].value>target){
            right--;
            continue;
        }
        break;
    }
    
    return [sortedArray[left].index,sortedArray[right].index];
};
