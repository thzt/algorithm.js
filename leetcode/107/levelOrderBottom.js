/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root==null){
        return [];
    }
    
    var queue=[root];
    var r=[];
    var level=0;
    
    while(queue.length!=0){
        var length=queue.length;
        if(length!=0){
            r[level]=[];
        }
        
        for(i=0;i<length;i++){
            r[level].push(queue[i].val);
            
            if(queue[i].left!=null){
                queue.push(queue[i].left);
            }
            if(queue[i].right!=null){
                queue.push(queue[i].right);
            }
        }
        queue=queue.slice(length);
        level++;
    }

    return r.reverse();
};
