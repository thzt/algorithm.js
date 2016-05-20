/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var rootDeep=deep(root);
    return rootDeep;
};

var deep=function(node){
    if(node==null){
        return 0;
    }
    
    var leftDeep=deep(node.left);
    var rightDeep=deep(node.right);
    
    return 1+Math.max(leftDeep,rightDeep);
};
